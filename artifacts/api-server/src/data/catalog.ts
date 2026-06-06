export interface CatalogLesson {
  id: string;
  xp: number;
}

export interface CatalogModule {
  lessons: CatalogLesson[];
  challengeQuestionCount: number;
  /** Fixed XP awarded server-side on challenge completion (never client-supplied). */
  challengeXP: number;
}

// MAX XP per challenge question: BASE_XP(20) * maxCombo(3) + maxTimeBonus(10) = 70
export const MAX_XP_PER_CHALLENGE_QUESTION = 70;

// Source of truth for server-side progress validation.
// Must be kept in sync with artifacts/gestao-kids/src/data/modules.ts.
export const CATALOG: Record<string, CatalogModule> = {
  negocio: {
    lessons: [
      { id: "o-que-e-empresa", xp: 50 },
      { id: "produtos-vs-servicos", xp: 50 },
      { id: "quem-sao-clientes", xp: 50 },
      { id: "como-nasce-negocio", xp: 50 },
      { id: "tipos-empresa", xp: 75 },
      { id: "cadeia-de-valor", xp: 75 },
      { id: "missao-negocio", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  financas: {
    lessons: [
      { id: "o-que-e-lucro", xp: 50 },
      { id: "receitas-despesas", xp: 50 },
      { id: "orcamento", xp: 50 },
      { id: "preco-custo", xp: 50 },
      { id: "break-even", xp: 75 },
      { id: "fluxo-de-caixa", xp: 75 },
      { id: "missao-financas", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  marketing: {
    lessons: [
      { id: "o-que-e-marketing", xp: 50 },
      { id: "cliente-ideal", xp: 50 },
      { id: "comunicar-valor", xp: 50 },
      { id: "redes-sociais-negocios", xp: 50 },
      { id: "funil-de-vendas", xp: 75 },
      { id: "precificacao-avancada", xp: 75 },
      { id: "missao-marketing", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  lideranca: {
    lessons: [
      { id: "o-que-e-lider", xp: 50 },
      { id: "tipos-lideranca", xp: 50 },
      { id: "comunicacao-eficaz", xp: 50 },
      { id: "trabalho-equipe", xp: 50 },
      { id: "gestao-conflitos", xp: 75 },
      { id: "cultura-organizacional", xp: 75 },
      { id: "missao-lideranca", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  planejamento: {
    lessons: [
      { id: "o-que-e-estrategia", xp: 50 },
      { id: "metas-smart", xp: 50 },
      { id: "swot", xp: 50 },
      { id: "plano-acao", xp: 50 },
      { id: "vantagem-competitiva", xp: 75 },
      { id: "crescimento-escala", xp: 75 },
      { id: "missao-planejamento", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  inovacao: {
    lessons: [
      { id: "o-que-e-inovacao", xp: 50 },
      { id: "pensamento-criativo", xp: 50 },
      { id: "prototipagem", xp: 50 },
      { id: "startups-famosas", xp: 50 },
      { id: "design-thinking", xp: 75 },
      { id: "transformacao-digital", xp: 75 },
      { id: "missao-inovacao", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  clientes: {
    lessons: [
      { id: "quem-e-cliente", xp: 50 },
      { id: "necessidades-desejos", xp: 50 },
      { id: "satisfacao-cliente", xp: 50 },
      { id: "feedback", xp: 50 },
      { id: "experiencia-cliente", xp: 75 },
      { id: "fidelizacao", xp: 75 },
      { id: "missao-clientes", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  empreendedorismo: {
    lessons: [
      { id: "o-que-e-empreender", xp: 50 },
      { id: "sua-ideia-negocio", xp: 50 },
      { id: "erros-aprendizados", xp: 50 },
      { id: "historias-inspiradoras", xp: 50 },
      { id: "fusoes-aquisicoes", xp: 75 },
      { id: "competindo-globalmente", xp: 75 },
      { id: "missao-final", xp: 100 },
    ],
    challengeQuestionCount: 5,
    challengeXP: 150,
  },
  "analise-estrategica": {
    lessons: [
      { id: "swot-pratica", xp: 75 },
      { id: "5-forcas-porter", xp: 75 },
      { id: "pestel-tam", xp: 75 },
      { id: "missao-estrategia", xp: 100 },
    ],
    challengeQuestionCount: 3,
    challengeXP: 100,
  },
  "financas-corporativas": {
    lessons: [
      { id: "dre-balanco", xp: 75 },
      { id: "valuation", xp: 75 },
      { id: "alavancagem", xp: 75 },
      { id: "missao-financas-corp", xp: 100 },
    ],
    challengeQuestionCount: 3,
    challengeXP: 100,
  },
  "lideranca-executiva": {
    lessons: [
      { id: "estilos-lideranca", xp: 100 },
      { id: "gestao-conflitos", xp: 100 },
      { id: "missao-lideranca", xp: 125 },
    ],
    challengeQuestionCount: 3,
    challengeXP: 100,
  },
  "marketing-growth": {
    lessons: [
      { id: "funil-conversao", xp: 100 },
      { id: "growth-hacking", xp: 100 },
      { id: "missao-growth", xp: 125 },
    ],
    challengeQuestionCount: 3,
    challengeXP: 100,
  },
  "governanca-esg": {
    lessons: [
      { id: "board-governanca", xp: 125 },
      { id: "esg-impacto", xp: 125 },
      { id: "missao-governanca", xp: 150 },
    ],
    challengeQuestionCount: 3,
    challengeXP: 100,
  },
  "futuro-ia": {
    lessons: [
      { id: "ia-vantagem-competitiva", xp: 125 },
      { id: "plataformas-disrupcao", xp: 125 },
      { id: "missao-master-final", xp: 200 },
    ],
    challengeQuestionCount: 3,
    challengeXP: 100,
  },
};

// Ordered list of module IDs matching the MODULES array order in the frontend.
// Used to derive module-N badge IDs (1-indexed by position).
export const MODULE_ORDER = [
  "negocio",
  "financas",
  "marketing",
  "lideranca",
  "planejamento",
  "inovacao",
  "clientes",
  "empreendedorismo",
  "analise-estrategica",
  "financas-corporativas",
  "lideranca-executiva",
  "marketing-growth",
  "governanca-esg",
  "futuro-ia",
];
