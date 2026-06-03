import { useState, useEffect, useCallback } from "react";
import { MODULES } from "@/data/modules";

export interface Badge {
  id: string;
  title: string;
  description: string;
  emoji: string;
  unlockedAt?: string;
}

export interface Progress {
  xp: number;
  completedLessons: string[];
  completedChallenges: string[];
  streak: number;
  lastActivityDate: string;
  badges: string[];
}

const DEFAULT_PROGRESS: Progress = {
  xp: 0,
  completedLessons: [],
  completedChallenges: [],
  streak: 0,
  lastActivityDate: "",
  badges: [],
};

const STORAGE_KEY = "gestao-kids-progress";

export const ALL_BADGES: Badge[] = [
  { id: "first-lesson", title: "Primeira Aula!", emoji: "🎯", description: "Completou sua primeira aula" },
  { id: "first-challenge", title: "Desafiador!", emoji: "⚡", description: "Completou seu primeiro desafio" },
  { id: "module-1", title: "Empresário Iniciante", emoji: "🏪", description: "Concluiu o módulo: O que é um Negócio?" },
  { id: "module-2", title: "Gestor Financeiro", emoji: "💰", description: "Concluiu o módulo: Dinheiro e Finanças" },
  { id: "module-3", title: "Mestre do Marketing", emoji: "📣", description: "Concluiu o módulo: Marketing e Vendas" },
  { id: "module-4", title: "Grande Líder", emoji: "👥", description: "Concluiu o módulo: Liderança e Equipe" },
  { id: "module-5", title: "Estrategista", emoji: "🎯", description: "Concluiu o módulo: Planejamento Estratégico" },
  { id: "module-6", title: "Inovador", emoji: "💡", description: "Concluiu o módulo: Inovação e Criatividade" },
  { id: "module-7", title: "Expert em Clientes", emoji: "🤝", description: "Concluiu o módulo: Clientes e Atendimento" },
  { id: "module-8", title: "Empreendedor!", emoji: "🚀", description: "Concluiu o módulo: Empreendedorismo" },
  { id: "xp-100", title: "100 XP!", emoji: "⭐", description: "Ganhou seus primeiros 100 XP" },
  { id: "xp-500", title: "500 XP!", emoji: "🌟", description: "Acumulou 500 XP" },
  { id: "xp-1000", title: "1000 XP!", emoji: "💫", description: "Incrível! 1000 XP acumulados" },
  { id: "streak-3", title: "3 dias seguidos!", emoji: "🔥", description: "Estudou 3 dias seguidos" },
  { id: "all-modules", title: "Mestre dos Negócios!", emoji: "🏆", description: "Concluiu todos os módulos" },
];

function getLevel(xp: number): { level: number; title: string; nextXP: number } {
  if (xp < 100) return { level: 1, title: "Aprendiz", nextXP: 100 };
  if (xp < 250) return { level: 2, title: "Estudante", nextXP: 250 };
  if (xp < 500) return { level: 3, title: "Analista", nextXP: 500 };
  if (xp < 800) return { level: 4, title: "Gerente", nextXP: 800 };
  if (xp < 1200) return { level: 5, title: "Diretor", nextXP: 1200 };
  if (xp < 1600) return { level: 6, title: "CEO", nextXP: 1600 };
  return { level: 7, title: "Empresário Master", nextXP: 9999 };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...DEFAULT_PROGRESS, ...JSON.parse(saved) } : DEFAULT_PROGRESS;
    } catch {
      return DEFAULT_PROGRESS;
    }
  });

  const saveProgress = useCallback((newProgress: Progress) => {
    setProgress(newProgress);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    } catch {
      // ignore storage errors
    }
  }, []);

  const updateStreak = useCallback((p: Progress): Progress => {
    const today = new Date().toISOString().split("T")[0];
    if (p.lastActivityDate === today) return p;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    const newStreak = p.lastActivityDate === yesterday ? p.streak + 1 : 1;
    return { ...p, streak: newStreak, lastActivityDate: today };
  }, []);

  const checkBadges = useCallback((p: Progress): Progress => {
    const badges = [...p.badges];

    if (p.completedLessons.length >= 1 && !badges.includes("first-lesson")) badges.push("first-lesson");
    if (p.completedChallenges.length >= 1 && !badges.includes("first-challenge")) badges.push("first-challenge");
    if (p.xp >= 100 && !badges.includes("xp-100")) badges.push("xp-100");
    if (p.xp >= 500 && !badges.includes("xp-500")) badges.push("xp-500");
    if (p.xp >= 1000 && !badges.includes("xp-1000")) badges.push("xp-1000");
    if (p.streak >= 3 && !badges.includes("streak-3")) badges.push("streak-3");

    MODULES.forEach((mod, idx) => {
      const allDone = mod.lessons.every(l => p.completedLessons.includes(`${mod.id}:${l.id}`));
      const badgeId = `module-${idx + 1}`;
      if (allDone && !badges.includes(badgeId)) badges.push(badgeId);
    });

    const allModules = MODULES.every((mod, idx) => badges.includes(`module-${idx + 1}`));
    if (allModules && !badges.includes("all-modules")) badges.push("all-modules");

    return { ...p, badges };
  }, []);

  const completeLesson = useCallback((moduleId: string, lessonId: string, xpReward: number) => {
    const lessonKey = `${moduleId}:${lessonId}`;
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonKey)) return prev;
      let updated = {
        ...prev,
        xp: prev.xp + xpReward,
        completedLessons: [...prev.completedLessons, lessonKey],
      };
      updated = updateStreak(updated);
      updated = checkBadges(updated);
      saveProgress(updated);
      return updated;
    });
  }, [saveProgress, updateStreak, checkBadges]);

  const completeChallenge = useCallback((moduleId: string, xpBonus: number) => {
    setProgress(prev => {
      if (prev.completedChallenges.includes(moduleId)) return prev;
      let updated = {
        ...prev,
        xp: prev.xp + xpBonus,
        completedChallenges: [...prev.completedChallenges, moduleId],
      };
      updated = updateStreak(updated);
      updated = checkBadges(updated);
      saveProgress(updated);
      return updated;
    });
  }, [saveProgress, updateStreak, checkBadges]);

  const isLessonComplete = useCallback((moduleId: string, lessonId: string) => {
    return progress.completedLessons.includes(`${moduleId}:${lessonId}`);
  }, [progress.completedLessons]);

  const isChallengeComplete = useCallback((moduleId: string) => {
    return progress.completedChallenges.includes(moduleId);
  }, [progress.completedChallenges]);

  const isModuleUnlocked = useCallback((moduleOrder: number) => {
    if (moduleOrder === 1) return true;
    const prevModule = MODULES.find(m => m.order === moduleOrder - 1);
    if (!prevModule) return true;
    return prevModule.lessons.every(l =>
      progress.completedLessons.includes(`${prevModule.id}:${l.id}`)
    );
  }, [progress.completedLessons]);

  const getModuleProgress = useCallback((moduleId: string) => {
    const mod = MODULES.find(m => m.id === moduleId);
    if (!mod) return 0;
    const done = mod.lessons.filter(l =>
      progress.completedLessons.includes(`${moduleId}:${l.id}`)
    ).length;
    return Math.round((done / mod.lessons.length) * 100);
  }, [progress.completedLessons]);

  const levelInfo = getLevel(progress.xp);
  const unlockedBadges = ALL_BADGES.filter(b => progress.badges.includes(b.id));
  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);

  useEffect(() => {
    // Update streak on mount
    const today = new Date().toISOString().split("T")[0];
    if (progress.lastActivityDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (progress.lastActivityDate !== yesterday && progress.lastActivityDate !== "") {
        // Streak broken
        const updated = { ...progress, streak: 0 };
        saveProgress(updated);
      }
    }
  }, []);

  return {
    progress,
    completeLesson,
    completeChallenge,
    isLessonComplete,
    isChallengeComplete,
    isModuleUnlocked,
    getModuleProgress,
    levelInfo,
    unlockedBadges,
    totalLessons,
  };
}
