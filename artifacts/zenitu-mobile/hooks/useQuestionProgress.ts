import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";

export interface QuestionResult {
  questionIndex: number;
  isCorrect: boolean;
  questionType: string;
}

type LocalStore = Record<string, QuestionResult[]>;

const LOCAL_KEY = "zenitu-question-results";

function localKey(moduleId: string, lessonId: string) {
  return `${moduleId}:${lessonId}`;
}

async function loadLocal(): Promise<LocalStore> {
  try {
    const raw = await AsyncStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as LocalStore) : {};
  } catch {
    return {};
  }
}

async function saveLocal(store: LocalStore) {
  try {
    await AsyncStorage.setItem(LOCAL_KEY, JSON.stringify(store));
  } catch {}
}

export function useQuestionProgress(
  moduleId: string,
  lessonId: string,
  totalQuestions: number
) {
  const { user } = useAuth();
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setResults([]);

    async function load() {
      try {
        if (user) {
          const res = await apiFetch(
            `/progress/lesson-results?moduleId=${encodeURIComponent(moduleId)}&lessonId=${encodeURIComponent(lessonId)}`
          );
          if (!cancelled) {
            const data = res.ok ? await res.json() : [];
            setResults(Array.isArray(data) ? (data as QuestionResult[]) : []);
          }
        } else {
          const store = await loadLocal();
          if (!cancelled) {
            setResults(store[localKey(moduleId, lessonId)] ?? []);
          }
        }
      } catch {
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [moduleId, lessonId, user?.id]);

  const saveResult = useCallback(
    async (questionIndex: number, isCorrect: boolean, questionType = "reading") => {
      const entry: QuestionResult = { questionIndex, isCorrect, questionType };

      setResults((prev) => {
        const idx = prev.findIndex((r) => r.questionIndex === questionIndex);
        if (idx >= 0) {
          const updated = [...prev];
          updated[idx] = entry;
          return updated;
        }
        return [...prev, entry];
      });

      if (user) {
        apiFetch("/progress/question-result", {
          method: "POST",
          body: JSON.stringify({ moduleId, lessonId, questionIndex, isCorrect, questionType }),
        }).catch(() => {});
      } else {
        const store = await loadLocal();
        const key = localKey(moduleId, lessonId);
        const existing = (store[key] ?? []).findIndex(
          (r) => r.questionIndex === questionIndex
        );
        if (existing >= 0) {
          store[key]![existing] = entry;
        } else {
          store[key] = [...(store[key] ?? []), entry];
        }
        await saveLocal(store);
      }
    },
    [moduleId, lessonId, user]
  );

  const getFirstUnreadIndex = useCallback(() => {
    const answered = new Set(results.map((r) => r.questionIndex));
    for (let i = 0; i < totalQuestions; i++) {
      if (!answered.has(i)) return i;
    }
    return 0;
  }, [results, totalQuestions]);

  return {
    results,
    loading,
    saveResult,
    answeredCount: results.length,
    hasProgress: results.length > 0,
    getFirstUnreadIndex,
  };
}
