import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { ArrowLeft, Target, CheckCircle2, XCircle, BarChart2 } from "lucide-react";
import { useProgress, ALL_BADGES } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";
import { MODULES } from "@/data/modules";
import { ThemeBackground } from "@/components/ThemeBackground";
import { useTheme } from "@/hooks/useTheme";

interface ModuleStat {
  correct: number;
  total: number;
}

type ModuleStats = Record<string, ModuleStat>;

const LOCAL_QUESTION_KEY = "zenitu-question-results";

function loadGuestStats(): ModuleStats {
  try {
    const raw = localStorage.getItem(LOCAL_QUESTION_KEY);
    if (!raw) return {};
    const store: Record<string, Array<{ questionIndex: number; isCorrect: boolean; questionType: string }>> =
      JSON.parse(raw);
    const stats: ModuleStats = {};
    for (const [key, results] of Object.entries(store)) {
      const moduleId = key.split(":")[0];
      if (!stats[moduleId]) stats[moduleId] = { correct: 0, total: 0 };
      for (const r of results) {
        stats[moduleId].total++;
        if (r.isCorrect) stats[moduleId].correct++;
      }
    }
    return stats;
  } catch {
    return {};
  }
}

function AccuracyTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-card border border-card-border rounded-xl px-3 py-2 shadow-md text-sm">
      <p className="font-extrabold text-foreground mb-0.5">{d.label}</p>
      <p className="text-muted-foreground">{d.correct}/{d.total} corretas</p>
      <p className="font-bold" style={{ color: d.fill }}>{d.accuracy}% de acerto</p>
    </div>
  );
}

export default function Desempenho() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { progress, unlockedBadges } = useProgress();
  const { theme } = useTheme();

  const [moduleStats, setModuleStats] = useState<ModuleStats>({});
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (user) {
      fetch("/api/progress/module-stats", { credentials: "include" })
        .then(r => (r.ok ? r.json() : {}))
        .then((data: ModuleStats) => {
          setModuleStats(data);
          setLoadingStats(false);
        })
        .catch(() => setLoadingStats(false));
    } else {
      setModuleStats(loadGuestStats());
      setLoadingStats(false);
    }
  }, [user?.id]);

  const totalCorrect = Object.values(moduleStats).reduce((s, v) => s + v.correct, 0);
  const totalAnswered = Object.values(moduleStats).reduce((s, v) => s + v.total, 0);
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const totalWrong = totalAnswered - totalCorrect;

  const chartData = MODULES.map(mod => {
    const stat = moduleStats[mod.id] ?? { correct: 0, total: 0 };
    const accuracy = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
    return {
      id: mod.id,
      label: mod.emoji + " " + mod.title,
      shortLabel: mod.emoji,
      accuracy,
      correct: stat.correct,
      total: stat.total,
      fill: stat.total === 0 ? "#d1d5db" : accuracy >= 80 ? "#22c55e" : accuracy >= 50 ? "#f59e0b" : "#ef4444",
    };
  });

  const modulesWithData = chartData.filter(d => d.total > 0);

  return (
    <ThemeBackground className="pb-20">
      <div
        className="px-4 pt-8 pb-20 text-white"
        style={{ background: theme.colors.ctaGradient }}
      >
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/perfil")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar ao Perfil</span>
          </button>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-4xl mx-auto mb-4">
              <BarChart2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold">Desempenho Geral</h1>
            <p className="text-violet-200 mt-1">Acompanhe seu progresso nas questões</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-10 space-y-4">
        {/* Summary cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="bg-card border border-card-border rounded-2xl p-4 text-center shadow-sm">
            <Target className="w-6 h-6 text-primary mx-auto mb-1" />
            <p className="text-2xl font-extrabold text-foreground">{overallAccuracy}%</p>
            <p className="text-xs text-muted-foreground font-medium leading-tight">Taxa de acerto</p>
          </div>
          <div className="bg-card border border-card-border rounded-2xl p-4 text-center shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-1" />
            <p className="text-2xl font-extrabold text-foreground">{totalCorrect}</p>
            <p className="text-xs text-muted-foreground font-medium leading-tight">Respostas corretas</p>
          </div>
          <div className="bg-card border border-card-border rounded-2xl p-4 text-center shadow-sm">
            <XCircle className="w-6 h-6 text-red-400 mx-auto mb-1" />
            <p className="text-2xl font-extrabold text-foreground">{totalWrong}</p>
            <p className="text-xs text-muted-foreground font-medium leading-tight">Respostas erradas</p>
          </div>
        </motion.div>

        {/* Overall accuracy bar */}
        {totalAnswered > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-foreground">Precisão geral</span>
              <span className="text-sm font-extrabold text-primary">{overallAccuracy}%</span>
            </div>
            <div className="h-4 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: overallAccuracy >= 80
                    ? "linear-gradient(90deg,#22c55e,#16a34a)"
                    : overallAccuracy >= 50
                    ? "linear-gradient(90deg,#f59e0b,#d97706)"
                    : "linear-gradient(90deg,#ef4444,#dc2626)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${overallAccuracy}%` }}
                transition={{ duration: 1.2 }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {totalAnswered} questões respondidas no total
            </p>
          </motion.div>
        )}

        {/* Chart: accuracy per module */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
        >
          <h2 className="font-extrabold text-foreground mb-1">Taxa de acerto por módulo</h2>
          <p className="text-xs text-muted-foreground mb-4">
            {modulesWithData.length === 0
              ? "Nenhum módulo respondido ainda"
              : `${modulesWithData.length} módulo${modulesWithData.length > 1 ? "s" : ""} com respostas`}
          </p>

          {loadingStats ? (
            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
              Carregando...
            </div>
          ) : chartData.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm py-8">Sem dados ainda</p>
          ) : (
            <ResponsiveContainer width="100%" height={Math.max(200, chartData.length * 42)}>
              <BarChart
                data={chartData}
                layout="vertical"
                margin={{ top: 0, right: 40, left: 8, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={v => `${v}%`}
                  tick={{ fontSize: 11, fill: "#9ca3af" }}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="shortLabel"
                  tick={{ fontSize: 16 }}
                  tickLine={false}
                  axisLine={false}
                  width={32}
                />
                <Tooltip content={<AccuracyTooltip />} cursor={{ fill: "rgba(0,0,0,0.04)" }} />
                <Bar dataKey="accuracy" radius={[0, 6, 6, 0]} maxBarSize={24}>
                  {chartData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          )}

          <div className="flex items-center gap-4 mt-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded-sm bg-green-500 inline-block" /> ≥80% ótimo
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded-sm bg-amber-400 inline-block" /> 50–79% ok
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded-sm bg-red-400 inline-block" /> &lt;50% revisar
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded-sm bg-gray-300 inline-block" /> sem respostas
            </div>
          </div>
        </motion.div>

        {/* Per-module detail table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
        >
          <h2 className="font-extrabold text-foreground mb-4">Detalhes por módulo</h2>
          <div className="space-y-3">
            {MODULES.map(mod => {
              const stat = moduleStats[mod.id] ?? { correct: 0, total: 0 };
              const acc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : null;
              return (
                <div key={mod.id}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xl flex-shrink-0">{mod.emoji}</span>
                      <span className="text-sm font-bold text-foreground truncate">{mod.title}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      {stat.total > 0 ? (
                        <>
                          <span className="text-xs text-muted-foreground">{stat.correct}/{stat.total}</span>
                          <span
                            className="text-xs font-extrabold"
                            style={{
                              color: acc! >= 80 ? "#22c55e" : acc! >= 50 ? "#f59e0b" : "#ef4444",
                            }}
                          >
                            {acc}%
                          </span>
                        </>
                      ) : (
                        <span className="text-xs text-muted-foreground italic">sem respostas</span>
                      )}
                    </div>
                  </div>
                  {stat.total > 0 && (
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor:
                            acc! >= 80 ? "#22c55e" : acc! >= 50 ? "#f59e0b" : "#ef4444",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${acc}%` }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Badges in highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
        >
          <h2 className="font-extrabold text-foreground mb-1">Conquistas desbloqueadas</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {unlockedBadges.length} de {ALL_BADGES.length} badges conquistadas
          </p>

          {unlockedBadges.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              Complete aulas e desafios para ganhar badges!
            </p>
          ) : (
            <div className="grid grid-cols-3 gap-3">
              {unlockedBadges.map(badge => (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl p-3 text-center border border-primary/30 bg-primary/5"
                  title={badge.description}
                >
                  <div className="text-3xl mb-1">{badge.emoji}</div>
                  <p className="text-xs font-extrabold leading-tight text-foreground">{badge.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-tight">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* XP and streak summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
            <p className="text-3xl mb-1">⭐</p>
            <p className="text-2xl font-extrabold text-foreground">{progress.xp}</p>
            <p className="text-xs text-muted-foreground font-medium">XP Total</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-center">
            <p className="text-3xl mb-1">🔥</p>
            <p className="text-2xl font-extrabold text-foreground">{progress.streak}</p>
            <p className="text-xs text-muted-foreground font-medium">Dias seguidos</p>
          </div>
        </motion.div>
      </div>
    </ThemeBackground>
  );
}
