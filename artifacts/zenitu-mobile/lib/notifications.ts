import { Platform } from "react-native";
import type { ReviewEntry } from "@/contexts/ProgressContext";
import { apiFetch } from "@/lib/api";

type DynamicNotifications = typeof import("expo-notifications");

async function getNotifications(): Promise<DynamicNotifications | null> {
  if (Platform.OS === "web") return null;
  try {
    return (await import("expo-notifications")) as DynamicNotifications;
  } catch {
    return null;
  }
}

export async function requestNotificationPermissions(): Promise<boolean> {
  const N = await getNotifications();
  if (!N) return false;
  const { status } = await N.requestPermissionsAsync();
  return status === "granted";
}

export async function cancelAllNotifications(): Promise<void> {
  const N = await getNotifications();
  if (!N) return;
  await N.cancelAllScheduledNotificationsAsync();
}

export async function scheduleStreakReminder(streakDays: number): Promise<void> {
  const N = await getNotifications();
  if (!N) return;
  await N.scheduleNotificationAsync({
    content: {
      title: "Não quebre seu streak! 🔥",
      body:
        streakDays > 0
          ? `Você tem ${streakDays} dia${streakDays === 1 ? "" : "s"} consecutivos. Continue estudando hoje!`
          : "Comece sua sequência hoje. Pequenos passos levam longe!",
      sound: true,
    },
    trigger: {
      type: "daily" as const,
      hour: 20,
      minute: 0,
      repeats: true,
    } as Parameters<typeof N.scheduleNotificationAsync>[0]["trigger"],
  });
}

export async function scheduleReviewReminders(
  reviewSchedule: Record<string, ReviewEntry>
): Promise<number> {
  const N = await getNotifications();
  if (!N) return 0;

  const today = new Date();
  const maxFutureMs = 30 * 24 * 60 * 60 * 1000;
  let scheduled = 0;

  for (const [_key, entry] of Object.entries(reviewSchedule)) {
    const reviewDate = new Date(entry.nextDate);
    reviewDate.setHours(9, 0, 0, 0);

    if (reviewDate <= today) continue;
    if (reviewDate.getTime() - today.getTime() > maxFutureMs) continue;

    try {
      await N.scheduleNotificationAsync({
        content: {
          title: "Hora de revisar! 📚",
          body: "Revisar o que você aprendeu ajuda a fixar o conhecimento para sempre.",
          sound: true,
        },
        trigger: {
          type: "date" as const,
          date: reviewDate,
        } as Parameters<typeof N.scheduleNotificationAsync>[0]["trigger"],
      });
      scheduled++;
    } catch {
      // Individual scheduling errors are non-fatal
    }
  }

  return scheduled;
}

export async function rescheduleAllNotifications(
  enabled: boolean,
  streakDays: number,
  reviewSchedule: Record<string, ReviewEntry>
): Promise<void> {
  await cancelAllNotifications();
  if (!enabled) return;
  await Promise.all([
    scheduleStreakReminder(streakDays),
    scheduleReviewReminders(reviewSchedule),
  ]);
}

export async function getExpoPushToken(): Promise<string | null> {
  if (Platform.OS === "web") return null;
  const N = await getNotifications();
  if (!N) return null;
  try {
    const result = await N.getExpoPushTokenAsync();
    return result.data;
  } catch {
    return null;
  }
}

export async function syncPushTokenToServer(enabled: boolean): Promise<void> {
  try {
    const token = enabled ? await getExpoPushToken() : null;
    await apiFetch("/push-token", {
      method: "POST",
      body: JSON.stringify({ token, enabled }),
    });
  } catch {
  }
}
