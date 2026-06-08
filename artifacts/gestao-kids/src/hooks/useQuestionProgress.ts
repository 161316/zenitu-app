import { useCallback, useState, useEffect } from "react";
import { useAuth } from "./useAuth";

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

function loadLocal(): LocalStore {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as LocalStore) : {};
  } catch {
    return {};
  }
}

function saveLocal(store: LocalStore) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(store));
  } catch {}
}

export function useQuestionProgress(moduleId: string, lessonId: string, totalQuestions: number) {
  const { user } = useAuth();
  const [results, setResults] = useState<QuestionResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setResults([]);
    if (user) {
      fetch(
        `/api/progress/lesson-results?moduleId=${encodeURIComponent(moduleId)}&lessonId=${encodeURIComponent(lessonId)}`,
        { credentials: "include" },
      )
        .then((r) => (r.ok ? r.json() : []))
        .then((data: unknown) => {
          setResults(Array.isArray(data) ? (data as QuestionResult[]) : []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      const store = loadLocal();
      setResults(store[localKey(moduleId, lessonId)] ?? []);
      setLoading(false);
    }
  }, [moduleId, lessonId, user?.id]);

  const saveResult = useCallback(
    async (questionIndex: number, isCorrect: boolean, questionType = "objective") => {
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
        await fetch("/api/progress/question-result", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ moduleId, lessonId, questionIndex, isCorrect, questionType }),
        }).catch(() => {});
      } else {
        const store = loadLocal();
        const key = localKey(moduleId, lessonId);
        const existing = (store[key] ?? []).findIndex((r) => r.questionIndex === questionIndex);
        if (existing >= 0) {
          store[key][existing] = entry;
        } else {
          store[key] = [...(store[key] ?? []), entry];
        }
        saveLocal(store);
      }
    },
    [moduleId, lessonId, user],
  );

  const answeredCount = results.length;
  const correctCount = results.filter((r) => r.isCorrect).length;
  const wrongCount = results.filter((r) => !r.isCorrect).length;
  const hasProgress = results.length > 0;
  const allAnswered = results.length >= totalQuestions && totalQuestions > 0;

  const getLastUnansweredIndex = useCallback(() => {
    const answered = new Set(results.map((r) => r.questionIndex));
    for (let i = 0; i < totalQuestions; i++) {
      if (!answered.has(i)) return i;
    }
    return totalQuestions - 1;
  }, [results, totalQuestions]);

  const getWrongIndexes = useCallback(
    () =>
      results
        .filter((r) => !r.isCorrect)
        .map((r) => r.questionIndex)
        .sort((a, b) => a - b),
    [results],
  );

  return {
    results,
    loading,
    saveResult,
    answeredCount,
    correctCount,
    wrongCount,
    hasProgress,
    allAnswered,
    getLastUnansweredIndex,
    getWrongIndexes,
  };
}
