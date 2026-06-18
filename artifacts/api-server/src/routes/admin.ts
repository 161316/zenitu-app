import { Router } from "express";
import { db } from "@workspace/db";
import { usersTable, progressTable } from "@workspace/db";
import { count, eq, sql } from "drizzle-orm";

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

  // Guard against non-numeric xp values that could have been stored before
  // server-side validation was enforced. NULLIF ensures the CAST skips any
  // row whose xp column does not look like a non-negative integer.
  const [xpResult] = await db
    .select({
      totalXP: sql<number>`coalesce(sum(case when ${progressTable.xp} ~ '^[0-9]+$' then cast(${progressTable.xp} as integer) else 0 end), 0)`,
      avgXP: sql<number>`coalesce(avg(case when ${progressTable.xp} ~ '^[0-9]+$' then cast(${progressTable.xp} as integer) else null end), 0)`,
    })
    .from(progressTable);

  // Guard against non-array JSONB values that could crash jsonb_array_length.
  const [lessonsResult] = await db
    .select({
      totalLessons: sql<number>`coalesce(sum(case when jsonb_typeof(${progressTable.completedLessons}) = 'array' then jsonb_array_length(${progressTable.completedLessons}) else 0 end), 0)`,
      totalChallenges: sql<number>`coalesce(sum(case when jsonb_typeof(${progressTable.completedChallenges}) = 'array' then jsonb_array_length(${progressTable.completedChallenges}) else 0 end), 0)`,
    })
    .from(progressTable);

  const topXpUsers = await db
    .select({
      xp: progressTable.xp,
      badges: progressTable.badges,
    })
    .from(progressTable)
    .where(sql`${progressTable.xp} ~ '^[0-9]+$'`)
    .orderBy(sql`cast(${progressTable.xp} as integer) desc`)
    .limit(5);

  const leaderboard = await db
    .select({
      name: usersTable.name,
      email: usersTable.email,
      xp: progressTable.xp,
      badges: progressTable.badges,
      streak: progressTable.streak,
    })
    .from(progressTable)
    .innerJoin(usersTable, eq(progressTable.userId, usersTable.id))
    .where(sql`${progressTable.xp} ~ '^[0-9]+$'`)
    .orderBy(sql`cast(${progressTable.xp} as integer) desc`)
    .limit(10);

  res.json({
    totalUsers: totals?.total ?? 0,
    activeUsersLast7Days: activeUsers?.total ?? 0,
    totalXP: Number(xpResult?.totalXP ?? 0),
    averageXP: Math.round(Number(xpResult?.avgXP ?? 0)),
    totalCompletedLessons: Number(lessonsResult?.totalLessons ?? 0),
    totalCompletedChallenges: Number(lessonsResult?.totalChallenges ?? 0),
    topXpUsers,
    leaderboard: leaderboard.map((row, i) => ({
      rank: i + 1,
      name: row.name,
      email: row.email,
      xp: Number(row.xp),
      badgeCount: (row.badges ?? []).length,
      streak: Number(row.streak),
    })),
  });
});

export default router;
