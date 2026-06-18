export interface Badge {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export const ALL_BADGES: Badge[] = [
  { id: "first-lesson", title: "Primeira Aula!", emoji: "🎯", description: "Completou sua primeira aula" },
  { id: "first-challenge", title: "Desafiador!", emoji: "⚡", description: "Completou seu primeiro desafio" },
  { id: "module-1", title: "Empresário Iniciante", emoji: "🏪", description: "Concluiu o módulo 1" },
  { id: "module-2", title: "Gestor Financeiro", emoji: "💰", description: "Concluiu o módulo 2" },
  { id: "module-3", title: "Mestre do Marketing", emoji: "📣", description: "Concluiu o módulo 3" },
  { id: "module-4", title: "Grande Líder", emoji: "👥", description: "Concluiu o módulo 4" },
  { id: "module-5", title: "Estrategista", emoji: "🎯", description: "Concluiu o módulo 5" },
  { id: "module-6", title: "Inovador", emoji: "💡", description: "Concluiu o módulo 6" },
  { id: "module-7", title: "Expert em Clientes", emoji: "🤝", description: "Concluiu o módulo 7" },
  { id: "module-8", title: "Empreendedor!", emoji: "🚀", description: "Concluiu o módulo 8" },
  { id: "xp-100", title: "100 XP!", emoji: "⭐", description: "Ganhou 100 XP" },
  { id: "xp-500", title: "500 XP!", emoji: "🌟", description: "Acumulou 500 XP" },
  { id: "xp-1000", title: "1000 XP!", emoji: "💫", description: "Incrível! 1000 XP" },
  { id: "streak-3", title: "3 dias seguidos!", emoji: "🔥", description: "Estudou 3 dias seguidos" },
  { id: "all-modules", title: "Mestre dos Negócios!", emoji: "🏆", description: "Concluiu todos os módulos" },
];
