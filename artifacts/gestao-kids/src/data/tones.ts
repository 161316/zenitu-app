export type ToneId = "casual" | "building" | "professional" | "executive";

export interface Tone {
  id: ToneId;
  level: number;
  label: string;
  emoji: string;
  minModules: number;
  // Home greeting
  greeting: (name: string) => string;
  greetingSubtitle: string;
  // Lesson completion card
  lessonCompleteTitle: string;
  lessonCompleteMsg: (xp: number) => string;
  // Module complete
  moduleCompleteTitle: string;
  moduleCompleteMsg: string;
  // General encouragement shown at Home
  encouragement: string;
  // "Next lesson" button label
  nextLessonLabel: string;
  // Back to module label
  backLabel: string;
  // Final challenge label
  challengeLabel: string;
}

export const TONES: Tone[] = [
  {
    id: "casual",
    level: 1,
    label: "Explorador",
    emoji: "🌱",
    minModules: 0,
    greeting: (name) => `Olá, ${name}! Pronto para avançar? 🚀`,
    greetingSubtitle: "Cada aula fortalece seu repertório de negócios.",
    lessonCompleteTitle: "Aula concluída! Muito bem. 🎉",
    lessonCompleteMsg: (xp) => `+${xp} XP conquistados — continue avançando!`,
    moduleCompleteTitle: "Módulo concluído! Excelente progresso. 🏆",
    moduleCompleteMsg: "Você está dominando o conteúdo. Avance para o próximo!",
    encouragement: "Continue em frente — cada aula conta. 💪",
    nextLessonLabel: "Próxima aula →",
    backLabel: "Voltar",
    challengeLabel: "Desafio final! ⚡",
  },
  {
    id: "building",
    level: 2,
    label: "Aprendiz",
    emoji: "📚",
    minModules: 2,
    greeting: (name) => `Olá, ${name}! Que bom ter você por aqui.`,
    greetingSubtitle: "Continue assim — você está evoluindo muito!",
    lessonCompleteTitle: "Mais um conteúdo dominado.",
    lessonCompleteMsg: (xp) => `+${xp} XP — você está construindo uma base sólida.`,
    moduleCompleteTitle: "Módulo concluído. Ótimo trabalho!",
    moduleCompleteMsg: "Consistência é o segredo. Continue avançando.",
    encouragement: "Seu progresso está excelente. Siga em frente.",
    nextLessonLabel: "Continuar para próxima aula",
    backLabel: "Voltar ao módulo",
    challengeLabel: "Partir para o Desafio Final",
  },
  {
    id: "professional",
    level: 3,
    label: "Analista",
    emoji: "📊",
    minModules: 5,
    greeting: (name) => `Bem-vindo de volta, ${name}.`,
    greetingSubtitle: "Seu progresso reflete dedicação e foco.",
    lessonCompleteTitle: "Conteúdo assimilado com sucesso.",
    lessonCompleteMsg: (xp) => `+${xp} XP adicionados ao seu histórico de aprendizagem.`,
    moduleCompleteTitle: "Módulo concluído com êxito.",
    moduleCompleteMsg: "Você está desenvolvendo um raciocínio analítico consistente.",
    encouragement: "Sua trajetória demonstra comprometimento acima da média.",
    nextLessonLabel: "Avançar para a próxima aula",
    backLabel: "Retornar ao módulo",
    challengeLabel: "Iniciar Avaliação Final",
  },
  {
    id: "executive",
    level: 4,
    label: "Executivo",
    emoji: "🏆",
    minModules: 10,
    greeting: (name) => `${name}.`,
    greetingSubtitle: "Performance consistente. Agenda de desenvolvimento em andamento.",
    lessonCompleteTitle: "Módulo de aprendizagem concluído.",
    lessonCompleteMsg: (xp) => `+${xp} XP registrados. Conhecimento aplicado ao portfólio.`,
    moduleCompleteTitle: "Módulo finalizado.",
    moduleCompleteMsg: "Você demonstra maturidade analítica e visão estratégica. Prossiga.",
    encouragement: "Líderes de alto impacto nunca param de aprender.",
    nextLessonLabel: "Prosseguir",
    backLabel: "Retornar",
    challengeLabel: "Executar Avaliação",
  },
];

export function getTone(completedModulesCount: number): Tone {
  for (let i = TONES.length - 1; i >= 0; i--) {
    if (completedModulesCount >= TONES[i].minModules) return TONES[i];
  }
  return TONES[0];
}
