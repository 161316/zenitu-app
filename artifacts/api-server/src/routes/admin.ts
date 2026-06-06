import { Router } from "express";
import { db } from "@workspace/db";
import { usersTable, progressTable } from "@workspace/db";
import { count, sql } from "drizzle-orm";

const router = Router();

router.use((req, res, next) => {
  if (!req.session.userId || !req.session.isAdmin) {
    res.status(403).json({ error: "Acesso negado" });
    return;
  }
  next();
});

router.get("/stats", async (_req, res) => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [totals] = await db
    .select({ total: count() })
    .from(usersTable);

  const [activeUsers] = await db
    .select({ total: count() })
    .from(progressTable)
    .where(sql`${progressTable.updatedAt} >= ${sevenDaysAgo}`);

  const [xpResult] = await db
    .select({
      totalXP: sql<number>`coalesce(sum(cast(${progressTable.xp} as integer)), 0)`,
      avgXP: sql<number>`coalesce(avg(cast(${progressTable.xp} as integer)), 0)`,
    })
    .from(progressTable);

  const [lessonsResult] = await db
    .select({
      totalLessons: sql<number>`coalesce(sum(jsonb_array_length(${progressTable.completedLessons})), 0)`,
      totalChallenges: sql<number>`coalesce(sum(jsonb_array_length(${progressTable.completedChallenges})), 0)`,
    })
    .from(progressTable);

  const topXpUsers = await db
    .select({
      xp: progressTable.xp,
      badges: progressTable.badges,
    })
    .from(progressTable)
    .orderBy(sql`cast(${progressTable.xp} as integer) desc`)
    .limit(5);

  res.json({
    totalUsers: totals?.total ?? 0,
    activeUsersLast7Days: activeUsers?.total ?? 0,
    totalXP: Number(xpResult?.totalXP ?? 0),
    averageXP: Math.round(Number(xpResult?.avgXP ?? 0)),
    totalCompletedLessons: Number(lessonsResult?.totalLessons ?? 0),
    totalCompletedChallenges: Number(lessonsResult?.totalChallenges ?? 0),
    topXpUsers,
  });
});

export default router;
