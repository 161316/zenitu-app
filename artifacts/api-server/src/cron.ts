import cron from "node-cron";
import { db } from "@workspace/db";
import { usersTable, progressTable } from "@workspace/db";
import { eq, and, isNotNull, sql } from "drizzle-orm";
import { logger } from "./lib/logger.js";

const EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send";

interface ExpoPushMessage {
  to: string;
  title: string;
  body: string;
  sound?: "default";
  data?: Record<string, unknown>;
}

async function sendExpoPushMessages(messages: ExpoPushMessage[]): Promise<void> {
  if (messages.length === 0) return;

  const chunks: ExpoPushMessage[][] = [];
  for (let i = 0; i < messages.length; i += 100) {
    chunks.push(messages.slice(i, i + 100));
  }

  for (const chunk of chunks) {
    try {
      const res = await fetch(EXPO_PUSH_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Accept-Encoding": "gzip, deflate",
        },
        body: JSON.stringify(chunk),
      });
      if (!res.ok) {
        logger.warn({ status: res.status }, "Expo push batch returned non-OK status");
      }
    } catch (err) {
      logger.error({ err }, "Failed to send Expo push batch");
    }
  }
}

async function sendStreakReminders(): Promise<void> {
  const today = new Date().toISOString().slice(0, 10);

  const rows = await db
    .select({
      name: usersTable.name,
      pushToken: usersTable.pushToken,
      streak: progressTable.streak,
      lastActivityDate: progressTable.lastActivityDate,
    })
    .from(usersTable)
    .innerJoin(progressTable, eq(progressTable.userId, usersTable.id))
    .where(
      and(
        isNotNull(usersTable.pushToken),
        eq(usersTable.pushNotificationsEnabled, true),
        sql`${progressTable.lastActivityDate} != ${today}`,
      ),
    );

  const messages: ExpoPushMessage[] = rows
    .filter((r) => r.pushToken && r.pushToken.startsWith("ExponentPushToken["))
    .map((r) => {
      const streakDays = parseInt(r.streak ?? "0", 10);
      return {
        to: r.pushToken as string,
        title: "Não quebre seu streak! 🔥",
        body:
          streakDays > 0
            ? `Você tem ${streakDays} dia${streakDays === 1 ? "" : "s"} consecutivos. Continue estudando hoje!`
            : "Comece sua sequência hoje. Pequenos passos levam longe!",
        sound: "default",
      };
    });

  logger.info({ count: messages.length }, "Sending streak reminder push notifications");
  await sendExpoPushMessages(messages);
}

export function startCronJobs(): void {
  cron.schedule("0 20 * * *", () => {
    sendStreakReminders().catch((err) => {
      logger.error({ err }, "Streak reminder cron failed");
    });
  }, { timezone: "America/Sao_Paulo" });

  logger.info("Cron jobs scheduled");
}
