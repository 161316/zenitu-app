import { Router } from "express";
import { rateLimit } from "express-rate-limit";
import { z } from "zod/v4";
import { db } from "@workspace/db";
import { progressTable, lessonQuestionResultsTable } from "@workspace/db";
import { eq, and } from "drizzle-orm";
import { CATALOG, MODULE_ORDER, MAX_XP_PER_CHALLENGE_QUESTION } from "../data/catalog.js";

const router = Router();

const questionResultLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  validate: { trustProxy: false },
  keyGenerator: (req) => String((req as any).session?.userId ?? req.ip),
  message: { error: "Muitas respostas enviadas. Aguarde um momento antes de continuar." },
});

function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.userId) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
  next();
}

// ── Shared helpers ───────────────────────────────────────────────────────────

function computeStreak(currentStreak: number, lastActivityDate: string): { streak: number; lastActivityDate: string } {
  const today = new Date().toISOString().split("T")[0];
  if (lastActivityDate === today) {
    return { streak: currentStreak, lastActivityDate };
  }
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const newStreak = lastActivityDate === yesterday ? currentStreak + 1 : 1;
  return { streak: newStreak, lastActivityDate: today };
}

function computeBadges(
  badges: string[],
  xp: number,
  completedLessons: string[],
  completedChallenges: string[],
  streak: number,
): string[] {
  const result = [...badges];

  const add = (id: string) => { if (!result.includes(id)) result.push(id); };

  if (completedLessons.length >= 1) add("first-lesson");
  if (completedChallenges.length >= 1) add("first-challenge");
  if (xp >= 100) add("xp-100");
  if (xp >= 500) add("xp-500");
  if (xp >= 1000) add("xp-1000");
  if (streak >= 3) add("streak-3");

  MODULE_ORDER.forEach((moduleId, idx) => {
    const mod = CATALOG[moduleId];
    if (!mod) return;
    const allDone = mod.lessons.every(l => completedLessons.includes(`${moduleId}:${l.id}`));
    if (allDone) add(`module-${idx + 1}`);
  });

  const allModules = MODULE_ORDER.every((_, idx) => result.includes(`module-${idx + 1}`));
  if (allModules) add("all-modules");

  return result;
}

function formatProgress(row: typeof progressTable.$inferSelect) {
  return {
    xp: Number(row.xp),
    completedLessons: row.completedLessons ?? [],
    completedChallenges: row.completedChallenges ?? [],
    streak: Number(row.streak),
    lastActivityDate: row.lastActivityDate,
    badges: row.badges ?? [],
  };
}

async function getOrCreateProgress(userId: number) {
  const [row] = await db
    .select()
    .from(progressTable)
    .where(eq(progressTable.userId, userId))
    .limit(1);
  return row ?? null;
}

// ── GET /api/progress ────────────────────────────────────────────────────────

router.get("/", requireAuth, async (req, res) => {
  const row = await getOrCreateProgress(req.session.userId!);
  if (!row) {
    res.json({ xp: 0, completedLessons: [], completedChallenges: [], streak: 0, lastActivityDate: "", badges: [] });
    return;
  }
  res.json(formatProgress(row));
});

// ── POST /api/progress/lesson ────────────────────────────────────────────────
// Records a completed lesson. XP is taken from the server-side catalog;
// client-supplied XP is ignored.

router.post("/lesson", requireAuth, async (req, res) => {
  const { moduleId, lessonId } = req.body ?? {};
  if (typeof moduleId !== "string" || !moduleId || moduleId.length > 100 ||
      typeof lessonId !== "string" || !lessonId || lessonId.length > 100) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }

  const mod = CATALOG[moduleId];
  if (!mod) {
    res.status(400).json({ error: "Módulo inválido" });
    return;
  }

  const lesson = mod.lessons.find(l => l.id === lessonId);
  if (!lesson) {
    res.status(400).json({ error: "Aula inválida" });
    return;
  }

  const lessonKey = `${moduleId}:${lessonId}`;
  const existing = await getOrCreateProgress(req.session.userId!);

  const prevCompletedLessons: string[] = existing?.completedLessons ?? [];
  const prevCompletedChallenges: string[] = existing?.completedChallenges ?? [];
  const prevBadges: string[] = existing?.badges ?? [];
  const prevXP = Number(existing?.xp ?? 0);
  const prevStreak = Number(existing?.streak ?? 0);
  const prevLastActivity = existing?.lastActivityDate ?? "";

  // Idempotent — already recorded
  if (prevCompletedLessons.includes(lessonKey)) {
    if (existing) {
      res.json(formatProgress(existing));
    } else {
      res.json({ xp: prevXP, completedLessons: prevCompletedLessons, completedChallenges: prevCompletedChallenges, streak: prevStreak, lastActivityDate: prevLastActivity, badges: prevBadges });
    }
    return;
  }

  const newXP = prevXP + lesson.xp;
  const newCompletedLessons = [...prevCompletedLessons, lessonKey];
  const { streak: newStreak, lastActivityDate: newLastActivity } = computeStreak(prevStreak, prevLastActivity);
  const newBadges = computeBadges(prevBadges, newXP, newCompletedLessons, prevCompletedChallenges, newStreak);

  const payload = {
    xp: String(newXP),
    completedLessons: newCompletedLessons,
    completedChallenges: prevCompletedChallenges,
    streak: String(newStreak),
    lastActivityDate: newLastActivity,
    badges: newBadges,
    updatedAt: new Date(),
  };

  if (existing) {
    await db.update(progressTable).set(payload).where(eq(progressTable.userId, req.session.userId!));
  } else {
    await db.insert(progressTable).values({ userId: req.session.userId!, ...payload });
  }

  res.json({
    xp: newXP,
    completedLessons: newCompletedLessons,
    completedChallenges: prevCompletedChallenges,
    streak: newStreak,
    lastActivityDate: newLastActivity,
    badges: newBadges,
  });
});

// ── POST /api/progress/challenge ─────────────────────────────────────────────
// Records a completed challenge. Enforces that all lessons for the module are
// already complete. XP is taken entirely from the server-side catalog;
// client-supplied XP is never accepted.

router.post("/challenge", requireAuth, async (req, res) => {
  const { moduleId } = req.body ?? {};
  if (typeof moduleId !== "string" || !moduleId || moduleId.length > 100) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }

  const mod = CATALOG[moduleId];
  if (!mod) {
    res.status(400).json({ error: "Módulo inválido" });
    return;
  }

  const existing = await getOrCreateProgress(req.session.userId!);

  const prevCompletedLessons: string[] = existing?.completedLessons ?? [];
  const prevCompletedChallenges: string[] = existing?.completedChallenges ?? [];
  const prevBadges: string[] = existing?.badges ?? [];
  const prevXP = Number(existing?.xp ?? 0);
  const prevStreak = Number(existing?.streak ?? 0);
  const prevLastActivity = existing?.lastActivityDate ?? "";

  // Idempotent — already recorded
  if (prevCompletedChallenges.includes(moduleId)) {
    if (existing) {
      res.json(formatProgress(existing));
    } else {
      res.json({ xp: prevXP, completedLessons: prevCompletedLessons, completedChallenges: prevCompletedChallenges, streak: prevStreak, lastActivityDate: prevLastActivity, badges: prevBadges });
    }
    return;
  }

  // Prerequisite: all lessons for this module must be completed first
  const allLessonsDone = mod.lessons.every(l =>
    prevCompletedLessons.includes(`${moduleId}:${l.id}`)
  );
  if (!allLessonsDone) {
    res.status(403).json({ error: "Complete todas as aulas do módulo antes do desafio" });
    return;
  }

  // XP is server-defined — client-supplied amount is never used
  const newXP = prevXP + mod.challengeXP;
  const newCompletedChallenges = [...prevCompletedChallenges, moduleId];
  const { streak: newStreak, lastActivityDate: newLastActivity } = computeStreak(prevStreak, prevLastActivity);
  const newBadges = computeBadges(prevBadges, newXP, prevCompletedLessons, newCompletedChallenges, newStreak);

  const payload = {
    xp: String(newXP),
    completedLessons: prevCompletedLessons,
    completedChallenges: newCompletedChallenges,
    streak: String(newStreak),
    lastActivityDate: newLastActivity,
    badges: newBadges,
    updatedAt: new Date(),
  };

  if (existing) {
    await db.update(progressTable).set(payload).where(eq(progressTable.userId, req.session.userId!));
  } else {
    await db.insert(progressTable).values({ userId: req.session.userId!, ...payload });
  }

  res.json({
    xp: newXP,
    completedLessons: prevCompletedLessons,
    completedChallenges: newCompletedChallenges,
    streak: newStreak,
    lastActivityDate: newLastActivity,
    badges: newBadges,
  });
});

const questionResultSchema = z.object({
  moduleId: z.string().min(1).max(100),
  lessonId: z.string().min(1).max(100),
  questionIndex: z.number().int().min(0),
  isCorrect: z.boolean(),
  questionType: z.enum(["objective", "written", "reading"]).optional().default("objective"),
});

// ── POST /api/progress/question-result ───────────────────────────────────────
// Upserts a single question result for the authenticated user.

router.post("/question-result", requireAuth, questionResultLimiter, async (req, res) => {
  const parsed = questionResultSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    res.status(400).json({ error: "Dados inválidos" });
    return;
  }

  const { moduleId, lessonId, questionIndex, isCorrect, questionType } = parsed.data;
  const userId = req.session.userId!;
  const type = questionType;

  await db
    .insert(lessonQuestionResultsTable)
    .values({
      userId,
      moduleId,
      lessonId,
      questionIndex,
      isCorrect,
      questionType: type,
      updatedAt: new Date(),
    })
    .onConflictDoUpdate({
      target: [
        lessonQuestionResultsTable.userId,
        lessonQuestionResultsTable.moduleId,
        lessonQuestionResultsTable.lessonId,
        lessonQuestionResultsTable.questionIndex,
      ],
      set: {
        isCorrect,
        questionType: type,
        updatedAt: new Date(),
      },
    });

  res.json({ ok: true });
});

// ── GET /api/progress/lesson-results ─────────────────────────────────────────
// Returns all saved question results for the user in a specific lesson.

router.get("/lesson-results", requireAuth, async (req, res) => {
  const { moduleId, lessonId } = req.query;

  if (
    typeof moduleId !== "string" || !moduleId || moduleId.length > 100 ||
    typeof lessonId !== "string" || !lessonId || lessonId.length > 100
  ) {
    res.status(400).json({ error: "Parâmetros inválidos" });
    return;
  }

  const userId = req.session.userId!;

  const rows = await db
    .select({
      questionIndex: lessonQuestionResultsTable.questionIndex,
      isCorrect: lessonQuestionResultsTable.isCorrect,
      questionType: lessonQuestionResultsTable.questionType,
    })
    .from(lessonQuestionResultsTable)
    .where(
      and(
        eq(lessonQuestionResultsTable.userId, userId),
        eq(lessonQuestionResultsTable.moduleId, moduleId),
        eq(lessonQuestionResultsTable.lessonId, lessonId),
      ),
    );

  res.json(rows);
});

export default router;
