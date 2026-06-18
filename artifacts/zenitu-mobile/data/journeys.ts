export interface Journey {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  bgGradient: string;
  color: string;
  tier: number;
  tierLabel: string;
  tierEmoji: string;
  description: string;
  unlockAfterJourney?: string;
}

export const JOURNEYS: Journey[] = [
  {
    id: "fundamentos",
    title: "Fundamentos dos Negócios",
    subtitle: "Do zero aos conceitos essenciais",
    emoji: "🌱",
    bgGradient: "from-violet-500 to-purple-700",
    color: "#7c3aed",
    tier: 1,
    tierLabel: "Iniciante",
    tierEmoji: "🌱",
    description: "Aprenda como funciona o mundo dos negócios desde o MEI até as multinacionais: modelos de negócio, finanças, marketing, liderança, planejamento, inovação, clientes e empreendedorismo."
  },
  {
    id: "gestao-estrategica",
    title: "Gestão Estratégica",
    subtitle: "Ferramentas que CEOs usam",
    emoji: "📊",
    bgGradient: "from-blue-600 to-indigo-700",
    color: "#2563eb",
    tier: 2,
    tierLabel: "Aprendiz",
    tierEmoji: "📚",
    description: "Mergulhe em finanças corporativas, estratégia avançada de mercado, gestão de operações com Lean e OKRs, e gestão de pessoas de alto nível.",
    unlockAfterJourney: "fundamentos"
  },
  {
    id: "lideranca-corporativa",
    title: "Liderança Corporativa",
    subtitle: "Pense como um executivo de alto nível",
    emoji: "🏢",
    bgGradient: "from-amber-500 to-orange-600",
    color: "#d97706",
    tier: 3,
    tierLabel: "Explorador",
    tierEmoji: "🔭",
    description: "Domine mercado financeiro e investimentos, marketing digital e growth hacking, inovação corporativa, ESG e estratégias de negócios globais.",
    unlockAfterJourney: "gestao-estrategica"
  },
  {
    id: "master-executivo",
    title: "Master Executivo",
    subtitle: "O nível dos grandes líderes globais",
    emoji: "🏆",
    bgGradient: "from-rose-600 to-red-700",
    color: "#e11d48",
    tier: 4,
    tierLabel: "Master",
    tierEmoji: "🚀",
    description: "Fusões e aquisições, empreendedorismo de alto impacto, governança corporativa e o futuro dos negócios com IA, plataformas e sustentabilidade.",
    unlockAfterJourney: "lideranca-corporativa"
  }
];

export function getJourneyById(id: string): Journey | undefined {
  return JOURNEYS.find(j => j.id === id);
}
