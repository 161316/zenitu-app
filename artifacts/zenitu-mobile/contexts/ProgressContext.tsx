import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { MODULES } from "@/data/modules";
import { apiFetch } from "@/lib/api";
import { useAuth } from "./AuthContext";

export interface ReviewEntry {
  nextDate: string;
  interval: number;
}

export interface Progress {
  xp: number;
  completedLessons: string[];
  completedChallenges: string[];
  streak: number;
  lastActivityDate: string;
  badges: string[];
  reviewSchedule: Record<string, ReviewEntry>;
}

const DEFAULT: Progress = {
  xp: 0,
  completedLessons: [],
  completedChallenges: [],
  streak: 0,
  lastActivityDate: "",
  badges: [],
  reviewSchedule: {},
};

const REVIEW_INTERVALS = [1, 3, 7, 14, 30];

function addToReviewSchedule(
  schedule: Record<string, ReviewEntry>,
  key: string
): Record<string, ReviewEntry> {
  const existing = schedule[key];
  const idx = existing ? REVIEW_INTERVALS.indexOf(existing.interval) + 1 : 0;
  const interval = REVIEW_INTERVALS[Math.min(idx, REVIEW_INTERVALS.length - 1)] ?? 30;
  const nextDate = new Date(Date.now() + interval * 86400000).toISOString().split("T")[0]!;
  return { ...schedule, [key]: { nextDate, interval } };
}

const GUEST_KEY = "zenitu-progress-guest";

export function getLevel(xp: number): { level: number; title: string; nextXP: number } {
  if (xp < 100) return { level: 1, title: "Aprendiz", nextXP: 100 };
  if (xp < 250) return { level: 2, title: "Estudante", nextXP: 250 };
  if (xp < 500) return { level: 3, title: "Analista", nextXP: 500 };
  if (xp < 800) return { level: 4, title: "Gerente", nextXP: 800 };
  if (xp < 1200) return { level: 5, title: "Diretor", nextXP: 1200 };
  if (xp < 1600) return { level: 6, title: "CEO", nextXP: 1600 };
  return { level: 7, title: "Master Executivo", nextXP: 9999 };
}

function computeBadges(p: Progress): Progress {
  const badges = [...p.badges];
  if (p.completedLessons.length >= 1 && !badges.includes("first-lesson")) badges.push("first-lesson");
  if (p.completedChallenges.length >= 1 && !badges.includes("first-challenge")) badges.push("first-challenge");
  if (p.xp >= 100 && !badges.includes("xp-100")) badges.push("xp-100");
  if (p.xp >= 500 && !badges.includes("xp-500")) badges.push("xp-500");
  if (p.xp >= 1000 && !badges.includes("xp-1000")) badges.push("xp-1000");
  if (p.streak >= 3 && !badges.includes("streak-3")) badges.push("streak-3");
  MODULES.forEach((mod, idx) => {
    const allDone = mod.lessons.every((l) => p.completedLessons.includes(`${mod.id}:${l.id}`));
    const badgeId = `module-${idx + 1}`;
    if (allDone && !badges.includes(badgeId)) badges.push(badgeId);
  });
  const allModules = MODULES.every((_, idx) => badges.includes(`module-${idx + 1}`));
  if (allModules && !badges.includes("all-modules")) badges.push("all-modules");
  return { ...p, badges };
}

function computeStreak(p: Progress): Progress {
  const today = new Date().toISOString().split("T")[0]!;
  if (p.lastActivityDate === today) return p;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0]!;
  const newStreak = p.lastActivityDate === yesterday ? p.streak + 1 : 1;
  return { ...p, streak: newStreak, lastActivityDate: today };
}

interface ProgressContextValue {
  progress: Progress;
  loading: boolean;
  completeLesson: (moduleId: string, lessonId: string, xpReward: number) => Promise<void>;
  completeChallenge: (moduleId: string, xpReward: number) => Promise<void>;
  isLessonComplete: (moduleId: string, lessonId: string) => boolean;
  isChallengeComplete: (moduleId: string) => boolean;
  getModuleProgress: (moduleId: string) => number;
  refreshProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue>({
  progress: DEFAULT,
  loading: true,
  completeLesson: async () => {},
  completeChallenge: async () => {},
  isLessonComplete: () => false,
  isChallengeComplete: () => false,
  getModuleProgress: () => 0,
  refreshProgress: async () => {},
});

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState<Progress>(DEFAULT);
  const [loading, setLoading] = useState(true);

  const loadProgress = useCallback(async () => {
    setLoading(true);
    try {
      if (user) {
        const res = await apiFetch("/progress");
        if (res.ok) {
          const data = await res.json();
          setProgress(computeStreak(data as Progress));
          setLoading(false);
          return;
        }
      }
      const stored = await AsyncStorage.getItem(GUEST_KEY);
      const parsed: Progress = stored ? (JSON.parse(stored) as Progress) : { ...DEFAULT };
      setProgress(computeStreak(parsed));
    } catch {
      setProgress({ ...DEFAULT });
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadProgress();
  }, [loadProgress]);

  const save = useCallback(async (next: Progress) => {
    const withBadges = computeBadges(next);
    setProgress(withBadges);
    if (!user) {
      await AsyncStorage.setItem(GUEST_KEY, JSON.stringify(withBadges));
    }
    return withBadges;
  }, [user]);

  const completeLesson = useCallback(async (moduleId: string, lessonId: string, xpReward: number) => {
    const key = `${moduleId}:${lessonId}`;
    setProgress((prev) => {
      if (prev.completedLessons.includes(key)) return prev;
      const next = computeStreak({
        ...prev,
        xp: prev.xp + xpReward,
        completedLessons: [...prev.completedLessons, key],
        reviewSchedule: addToReviewSchedule(prev.reviewSchedule, key),
      });
      const withBadges = computeBadges(next);
      if (!user) AsyncStorage.setItem(GUEST_KEY, JSON.stringify(withBadges));
      if (user) {
        apiFetch("/progress/lesson", {
          method: "POST",
          body: JSON.stringify({ moduleId, lessonId }),
        }).catch(() => {});
      }
      return withBadges;
    });
  }, [user]);

  const completeChallenge = useCallback(async (moduleId: string, xpReward: number) => {
    setProgress((prev) => {
      if (prev.completedChallenges.includes(moduleId)) return prev;
      const challengeKey = `challenge:${moduleId}`;
      const next = computeStreak({
        ...prev,
        xp: prev.xp + xpReward,
        completedChallenges: [...prev.completedChallenges, moduleId],
        reviewSchedule: addToReviewSchedule(prev.reviewSchedule, challengeKey),
      });
      const withBadges = computeBadges(next);
      if (!user) AsyncStorage.setItem(GUEST_KEY, JSON.stringify(withBadges));
      if (user) {
        apiFetch("/progress/challenge", {
          method: "POST",
          body: JSON.stringify({ moduleId }),
        }).catch(() => {});
      }
      return withBadges;
    });
  }, [user]);

  const isLessonComplete = useCallback(
    (moduleId: string, lessonId: string) => progress.completedLessons.includes(`${moduleId}:${lessonId}`),
    [progress]
  );

  const isChallengeComplete = useCallback(
    (moduleId: string) => progress.completedChallenges.includes(moduleId),
    [progress]
  );

  const getModuleProgress = useCallback(
    (moduleId: string) => {
      const mod = MODULES.find((m) => m.id === moduleId);
      if (!mod || mod.lessons.length === 0) return 0;
      const done = mod.lessons.filter((l) => progress.completedLessons.includes(`${moduleId}:${l.id}`)).length;
      return done / mod.lessons.length;
    },
    [progress]
  );

  return (
    <ProgressContext.Provider
      value={{
        progress,
        loading,
        completeLesson,
        completeChallenge,
        isLessonComplete,
        isChallengeComplete,
        getModuleProgress,
        refreshProgress: loadProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
