import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export type NivelEscolhido = "iniciante" | "intermediario" | "avancado";
export type FocoEscolhido = "profissao" | "geral";
export type DisponibilidadeEscolhida = "15min" | "30min" | "1hora" | "livre";

export interface OnboardingAnswers {
  nivel: NivelEscolhido;
  foco: FocoEscolhido;
  disponibilidade: DisponibilidadeEscolhida;
  completedAt: string;
}

function storageKey(userId: number) {
  return `zenitu_onboarding_v1_${userId}`;
}

export function useOnboarding() {
  const { user } = useAuth();
  const [answers, setAnswers] = useState<OnboardingAnswers | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    try {
      const raw = localStorage.getItem(storageKey(user.id));
      setAnswers(raw ? (JSON.parse(raw) as OnboardingAnswers) : null);
    } catch {
      setAnswers(null);
    }
    setLoading(false);
  }, [user]);

  function saveAnswers(a: Omit<OnboardingAnswers, "completedAt">) {
    if (!user) return;
    const full: OnboardingAnswers = { ...a, completedAt: new Date().toISOString() };
    localStorage.setItem(storageKey(user.id), JSON.stringify(full));
    setAnswers(full);
  }

  function reset() {
    if (!user) return;
    localStorage.removeItem(storageKey(user.id));
    setAnswers(null);
  }

  const needsOnboarding = !loading && !!user && !answers;

  return { answers, loading, needsOnboarding, saveAnswers, reset };
}
