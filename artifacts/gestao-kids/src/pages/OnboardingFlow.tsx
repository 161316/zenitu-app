import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Target, TrendingUp, CheckCircle, ChevronRight } from "lucide-react";
import type { NivelEscolhido, FocoEscolhido, DisponibilidadeEscolhida } from "@/hooks/useOnboarding";
import { JOURNEYS } from "@/data/journeys";

interface Props {
  userName: string;
  onComplete: (answers: {
    nivel: NivelEscolhido;
    foco: FocoEscolhido;
    disponibilidade: DisponibilidadeEscolhida;
  }) => void;
}

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 0.5,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.5 + 0.1,
}));

const slideVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

function OptionCard({
  selected,
  onClick,
  emoji,
  title,
  description,
  accent,
}: {
  selected: boolean;
  onClick: () => void;
  emoji: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full text-left rounded-2xl border-2 p-4 transition-all duration-200 relative overflow-hidden"
      style={{
        borderColor: selected ? accent : "rgba(255,255,255,0.12)",
        background: selected
          ? `${accent}18`
          : "rgba(255,255,255,0.04)",
      }}
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span
              className="font-semibold text-base leading-tight"
              style={{ color: selected ? accent : "#e2e8f0" }}
            >
              {title}
            </span>
            {selected && (
              <CheckCircle
                size={18}
                style={{ color: accent, flexShrink: 0 }}
              />
            )}
          </div>
          <p className="text-sm mt-1 leading-snug" style={{ color: "rgba(255,255,255,0.55)" }}>
            {description}
          </p>
        </div>
      </div>
    </motion.button>
  );
}

const NIVEL_OPTIONS: Array<{
  value: NivelEscolhido;
  emoji: string;
  title: string;
  description: string;
  accent: string;
  journeyId: string;
  horas: string;
}> = [
  {
    value: "iniciante",
    emoji: "🌱",
    title: "Iniciante",
    description: "Nunca estudei gestão ou empreendedorismo de forma estruturada. Quero entender do zero como os negócios funcionam.",
    accent: "#22c55e",
    journeyId: "fundamentos",
    horas: "8–12 horas de conteúdo",
  },
  {
    value: "intermediario",
    emoji: "📊",
    title: "Intermediário",
    description: "Já tenho noções básicas e quero aprofundar em estratégia, finanças e gestão de equipes.",
    accent: "#3b82f6",
    journeyId: "gestao-estrategica",
    horas: "10–15 horas de conteúdo",
  },
  {
    value: "avancado",
    emoji: "🏢",
    title: "Avançado",
    description: "Já atuo na área ou tenho sólidos conhecimentos. Quero dominar liderança corporativa, mercado financeiro e estratégias globais.",
    accent: "#f59e0b",
    journeyId: "lideranca-corporativa",
    horas: "12–18 horas de conteúdo",
  },
];

const FOCO_OPTIONS: Array<{
  value: FocoEscolhido;
  emoji: string;
  title: string;
  description: string;
  accent: string;
}> = [
  {
    value: "profissao",
    emoji: "🎯",
    title: "Profissão específica",
    description: "Quero me especializar em uma área: financeiro, marketing, RH, operações, vendas ou direito empresarial.",
    accent: "#a78bfa",
  },
  {
    value: "geral",
    emoji: "🗺️",
    title: "Visão geral da empresa",
    description: "Quero entender como todos os setores de uma empresa funcionam juntos e como cada peça impacta o resultado.",
    accent: "#38bdf8",
  },
];

const DISPONIBILIDADE_OPTIONS: Array<{
  value: DisponibilidadeEscolhida;
  emoji: string;
  title: string;
  description: string;
  accent: string;
  minutesPorDia: number;
}> = [
  {
    value: "15min",
    emoji: "⚡",
    title: "15 minutos por dia",
    description: "Aprendo no intervalo, no transporte ou antes de dormir.",
    accent: "#f472b6",
    minutesPorDia: 15,
  },
  {
    value: "30min",
    emoji: "🕐",
    title: "30 minutos por dia",
    description: "Tenho meia hora reservada para estudar com consistência.",
    accent: "#fb923c",
    minutesPorDia: 30,
  },
  {
    value: "1hora",
    emoji: "📚",
    title: "1 hora por dia",
    description: "Estudo com foco e quero avançar rápido.",
    accent: "#34d399",
    minutesPorDia: 60,
  },
  {
    value: "livre",
    emoji: "🚀",
    title: "No meu ritmo",
    description: "Não tenho um horário fixo. Estudo quando tenho oportunidade.",
    accent: "#a78bfa",
    minutesPorDia: 45,
  },
];

function estimarPrazo(
  nivel: NivelEscolhido,
  disponibilidade: DisponibilidadeEscolhida,
): string {
  const totalMinutes: Record<NivelEscolhido, number> = {
    iniciante: 600,
    intermediario: 780,
    avancado: 900,
  };
  const opt = DISPONIBILIDADE_OPTIONS.find(o => o.value === disponibilidade);
  const minPorDia = opt?.minutesPorDia ?? 30;
  const dias = Math.ceil(totalMinutes[nivel] / minPorDia);
  if (dias <= 14) return `${dias} dias`;
  const semanas = Math.ceil(dias / 7);
  if (semanas <= 8) return `${semanas} semanas`;
  const meses = Math.ceil(semanas / 4);
  return `${meses} ${meses === 1 ? "mês" : "meses"}`;
}

function nivelLabel(nivel: NivelEscolhido) {
  return NIVEL_OPTIONS.find(o => o.value === nivel)!;
}

function disponibilidadeLabel(d: DisponibilidadeEscolhida) {
  return DISPONIBILIDADE_OPTIONS.find(o => o.value === d)!;
}

function focoLabel(f: FocoEscolhido) {
  return FOCO_OPTIONS.find(o => o.value === f)!;
}

function PlanoPersonalizado({
  nivel,
  foco,
  disponibilidade,
  onStart,
}: {
  nivel: NivelEscolhido;
  foco: FocoEscolhido;
  disponibilidade: DisponibilidadeEscolhida;
  onStart: () => void;
}) {
  const prazo = estimarPrazo(nivel, disponibilidade);
  const nivelOpt = nivelLabel(nivel);
  const dispOpt = disponibilidadeLabel(disponibilidade);
  const focoOpt = focoLabel(foco);

  const journeyInfo = JOURNEYS.find(j => j.id === nivelOpt.journeyId);
  const startJourney = journeyInfo ?? JOURNEYS[0];

  const trilhasPorFoco: Record<FocoEscolhido, string[]> = {
    profissao: [
      "Gestão Financeira e Fluxo de Caixa",
      "Marketing e Posicionamento de Marca",
      "Recursos Humanos e Gestão de Equipes",
      "Operações, Logística e Processos",
      "Vendas e Relacionamento com o Cliente",
      "Direito Empresarial e Compliance",
    ],
    geral: [
      "Como os setores da empresa se conectam",
      "O que cada área faz e de quem depende",
      "Como analisar se uma empresa está saudável",
      "Indicadores-chave de desempenho (KPIs)",
      "Tomada de decisão com dados e estratégia",
      "Comunicação entre áreas e liderança",
    ],
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      <div className="text-center">
        <div className="text-4xl mb-2">🎯</div>
        <h2 className="font-['Fredoka'] font-semibold text-2xl text-white leading-tight">
          Seu plano está pronto
        </h2>
        <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
          Baseado nas suas respostas, montamos a trilha ideal para você.
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-3 gap-2">
        <div
          className="rounded-xl p-3 text-center"
          style={{ background: `${nivelOpt.accent}15`, border: `1px solid ${nivelOpt.accent}30` }}
        >
          <div className="text-xl">{nivelOpt.emoji}</div>
          <div className="text-xs font-semibold mt-1" style={{ color: nivelOpt.accent }}>
            {nivelOpt.title}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
            Nível
          </div>
        </div>
        <div
          className="rounded-xl p-3 text-center"
          style={{ background: "rgba(168,139,250,0.12)", border: "1px solid rgba(168,139,250,0.25)" }}
        >
          <Clock size={18} className="mx-auto" style={{ color: "#a78bfa" }} />
          <div className="text-xs font-semibold mt-1" style={{ color: "#a78bfa" }}>
            {prazo}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
            Estimativa
          </div>
        </div>
        <div
          className="rounded-xl p-3 text-center"
          style={{ background: `${focoOpt.accent}15`, border: `1px solid ${focoOpt.accent}30` }}
        >
          <div className="text-xl">{focoOpt.emoji}</div>
          <div className="text-xs font-semibold mt-1" style={{ color: focoOpt.accent }}>
            {foco === "profissao" ? "Especialista" : "Generalista"}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
            Foco
          </div>
        </div>
      </div>

      {/* Starting point */}
      <div
        className="rounded-2xl p-4"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={16} style={{ color: nivelOpt.accent }} />
          <span className="text-sm font-semibold text-white">Ponto de partida</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">{startJourney.emoji}</span>
          <div>
            <p className="text-sm font-semibold text-white leading-tight">{startJourney.title}</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
              {nivelOpt.horas}
            </p>
          </div>
        </div>
      </div>

      {/* What you'll learn */}
      <div
        className="rounded-2xl p-4"
        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Target size={16} style={{ color: focoOpt.accent }} />
          <span className="text-sm font-semibold text-white">O que você vai dominar</span>
        </div>
        <ul className="flex flex-col gap-2">
          {trilhasPorFoco[foco].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: focoOpt.accent }} />
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pace */}
      <div
        className="rounded-2xl p-3 flex items-center gap-3"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <span className="text-xl">{dispOpt.emoji}</span>
        <div>
          <p className="text-xs font-semibold text-white">{dispOpt.title}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            Ritmo de estudo selecionado — conclusão estimada em {prazo}
          </p>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="w-full py-4 rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2"
        style={{
          background: `linear-gradient(135deg, ${nivelOpt.accent}, ${focoOpt.accent})`,
          boxShadow: `0 8px 32px ${nivelOpt.accent}40`,
        }}
      >
        Começar agora
        <ArrowRight size={18} />
      </motion.button>
    </motion.div>
  );
}

export default function OnboardingFlow({ userName, onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [nivel, setNivel] = useState<NivelEscolhido | null>(null);
  const [foco, setFoco] = useState<FocoEscolhido | null>(null);
  const [disponibilidade, setDisponibilidade] = useState<DisponibilidadeEscolhida | null>(null);

  const firstName = userName.split(" ")[0];

  function handleNivelNext() {
    if (!nivel) return;
    setStep(1);
  }

  function handleFocoNext() {
    if (!foco) return;
    setStep(2);
  }

  function handleDisponibilidadeNext() {
    if (!disponibilidade) return;
    setStep(3);
  }

  function handleStart() {
    if (!nivel || !foco || !disponibilidade) return;
    onComplete({ nivel, foco, disponibilidade });
  }

  const steps = [
    {
      key: "nivel",
      title: `Olá, ${firstName}! Qual é o seu nível?`,
      subtitle: "Seja honesto — isso define o ponto de partida ideal para você.",
      progress: 1,
    },
    {
      key: "foco",
      title: "Qual é o seu objetivo?",
      subtitle: "Isso direciona o conteúdo que você vai ver com mais profundidade.",
      progress: 2,
    },
    {
      key: "disponibilidade",
      title: "Quanto tempo você tem por dia?",
      subtitle: "Com base nisso, calculamos uma estimativa de conclusão realista.",
      progress: 3,
    },
  ];

  const currentStep = steps[step] ?? null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0221 0%, #1a0533 100%)" }}
    >
      {/* Stars */}
      {STARS.map(s => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
          }}
          animate={{ opacity: [s.opacity, s.opacity * 0.3, s.opacity] }}
          transition={{ repeat: Infinity, duration: s.duration, ease: "easeInOut" }}
        />
      ))}

      <div className="w-full max-w-sm relative z-10">
        {/* Logo */}
        <div className="text-center mb-6">
          <p className="font-['Fredoka'] font-semibold text-xl tracking-wide" style={{ color: "#a78bfa" }}>
            ZENITU
          </p>
        </div>

        {/* Progress bar */}
        {step < 3 && (
          <div className="mb-6">
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="flex-1 h-1 rounded-full transition-all duration-500"
                  style={{
                    background: i <= (currentStep?.progress ?? 0)
                      ? "#a78bfa"
                      : "rgba(255,255,255,0.12)",
                  }}
                />
              ))}
            </div>
            <p className="text-xs text-right mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>
              Etapa {currentStep?.progress} de 3
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="nivel"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div>
                <h2 className="font-['Fredoka'] font-semibold text-2xl text-white leading-tight">
                  {steps[0].title}
                </h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {steps[0].subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {NIVEL_OPTIONS.map(opt => (
                  <OptionCard
                    key={opt.value}
                    selected={nivel === opt.value}
                    onClick={() => setNivel(opt.value)}
                    emoji={opt.emoji}
                    title={opt.title}
                    description={opt.description}
                    accent={opt.accent}
                  />
                ))}
              </div>
              <motion.button
                whileHover={{ scale: nivel ? 1.02 : 1 }}
                whileTap={{ scale: nivel ? 0.97 : 1 }}
                onClick={handleNivelNext}
                disabled={!nivel}
                className="w-full py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200"
                style={{
                  background: nivel
                    ? "linear-gradient(135deg, #7c3aed, #a78bfa)"
                    : "rgba(255,255,255,0.07)",
                  color: nivel ? "#fff" : "rgba(255,255,255,0.3)",
                  cursor: nivel ? "pointer" : "not-allowed",
                  boxShadow: nivel ? "0 8px 32px rgba(124,58,237,0.35)" : "none",
                }}
              >
                Continuar
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="foco"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div>
                <h2 className="font-['Fredoka'] font-semibold text-2xl text-white leading-tight">
                  {steps[1].title}
                </h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {steps[1].subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {FOCO_OPTIONS.map(opt => (
                  <OptionCard
                    key={opt.value}
                    selected={foco === opt.value}
                    onClick={() => setFoco(opt.value)}
                    emoji={opt.emoji}
                    title={opt.title}
                    description={opt.description}
                    accent={opt.accent}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(0)}
                  className="px-5 py-4 rounded-2xl font-semibold text-sm transition-all"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  Voltar
                </button>
                <motion.button
                  whileHover={{ scale: foco ? 1.02 : 1 }}
                  whileTap={{ scale: foco ? 0.97 : 1 }}
                  onClick={handleFocoNext}
                  disabled={!foco}
                  className="flex-1 py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: foco
                      ? "linear-gradient(135deg, #7c3aed, #a78bfa)"
                      : "rgba(255,255,255,0.07)",
                    color: foco ? "#fff" : "rgba(255,255,255,0.3)",
                    cursor: foco ? "pointer" : "not-allowed",
                    boxShadow: foco ? "0 8px 32px rgba(124,58,237,0.35)" : "none",
                  }}
                >
                  Continuar
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="disponibilidade"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col gap-4"
            >
              <div>
                <h2 className="font-['Fredoka'] font-semibold text-2xl text-white leading-tight">
                  {steps[2].title}
                </h2>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {steps[2].subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {DISPONIBILIDADE_OPTIONS.map(opt => (
                  <OptionCard
                    key={opt.value}
                    selected={disponibilidade === opt.value}
                    onClick={() => setDisponibilidade(opt.value)}
                    emoji={opt.emoji}
                    title={opt.title}
                    description={opt.description}
                    accent={opt.accent}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-4 rounded-2xl font-semibold text-sm transition-all"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.6)" }}
                >
                  Voltar
                </button>
                <motion.button
                  whileHover={{ scale: disponibilidade ? 1.02 : 1 }}
                  whileTap={{ scale: disponibilidade ? 0.97 : 1 }}
                  onClick={handleDisponibilidadeNext}
                  disabled={!disponibilidade}
                  className="flex-1 py-4 rounded-2xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200"
                  style={{
                    background: disponibilidade
                      ? "linear-gradient(135deg, #7c3aed, #a78bfa)"
                      : "rgba(255,255,255,0.07)",
                    color: disponibilidade ? "#fff" : "rgba(255,255,255,0.3)",
                    cursor: disponibilidade ? "pointer" : "not-allowed",
                    boxShadow: disponibilidade
                      ? "0 8px 32px rgba(124,58,237,0.35)"
                      : "none",
                  }}
                >
                  Ver meu plano
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && nivel && foco && disponibilidade && (
            <PlanoPersonalizado
              key="plano"
              nivel={nivel}
              foco={foco}
              disponibilidade={disponibilidade}
              onStart={handleStart}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
