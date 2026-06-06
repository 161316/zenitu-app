import { Router } from "express";
import { db } from "@workspace/db";
import { progressTable } from "@workspace/db";
import { eq } from "drizzle-orm";

const router = Router();

function requireAuth(req: any, res: any, next: any) {
  if (!req.session?.userId) {
    res.status(401).json({ error: "Não autenticado" });
    return;
  }
  next();
}

router.get("/", requireAuth, async (req, res) => {
  const [row] = await db.select().from(progressTable).where(eq(progressTable.userId, req.session.userId!)).limit(1);
  if (!row) {
    res.json({ xp: 0, completedLessons: [], completedChallenges: [], streak: 0, lastActivityDate: "", badges: [] });
    return;
  }
  res.json({
    xp: Number(row.xp),
    completedLessons: row.completedLessons ?? [],
    completedChallenges: row.completedChallenges ?? [],
    streak: Number(row.streak),
    lastActivityDate: row.lastActivityDate,
    badges: row.badges ?? [],
  });
});

router.put("/", requireAuth, async (req, res) => {
  const { xp, completedLessons, completedChallenges, streak, lastActivityDate, badges } = req.body;

  const [row] = await db.select({ id: progressTable.id })
    .from(progressTable)
    .where(eq(progressTable.userId, req.session.userId!))
    .limit(1);

  if (row) {
    await db.update(progressTable).set({
      xp: String(xp ?? 0),
      completedLessons: completedLessons ?? [],
      completedChallenges: completedChallenges ?? [],
      streak: String(streak ?? 0),
      lastActivityDate: lastActivityDate ?? "",
      badges: badges ?? [],
      updatedAt: new Date(),
    }).where(eq(progressTable.userId, req.session.userId!));
  } else {
    await db.insert(progressTable).values({
      userId: req.session.userId!,
      xp: String(xp ?? 0),
      completedLessons: completedLessons ?? [],
      completedChallenges: completedChallenges ?? [],
      streak: String(streak ?? 0),
      lastActivityDate: lastActivityDate ?? "",
      badges: badges ?? [],
    });
  }

  res.json({ ok: true });
});

export default router;
