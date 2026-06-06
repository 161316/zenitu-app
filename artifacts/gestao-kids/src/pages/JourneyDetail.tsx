import { useLocation, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, ChevronRight, Zap, BookOpen } from "lucide-react";
import { MODULES } from "@/data/modules";
import { getJourneyById, JOURNEYS } from "@/data/journeys";
import { useProgress } from "@/hooks/useProgress";
import { ThemeBackground } from "@/components/ThemeBackground";

export default function JourneyDetail() {
  const params = useParams<{ journeyId: string }>();
  const [, setLocation] = useLocation();
  const { progress, getModuleProgress, isModuleUnlocked } = useProgress();

  const journey = getJourneyById(params.journeyId);
  const journeyModules = MODULES
    .filter(m => m.journeyId === params.journeyId)
    .sort((a, b) => a.order - b.order);

  if (!journey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Jornada não encontrada</p>
      </div>
    );
  }

  const totalLessons = journeyModules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = journeyModules.reduce((acc, m) =>
    acc + m.lessons.filter(l => progress.completedLessons.includes(`${m.id}:${l.id}`)).length, 0
  );
  const journeyProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const prevJourneyIdx = JOURNEYS.findIndex(j => j.id === journey.unlockAfterJourney);
  const prevJourney = prevJourneyIdx >= 0 ? JOURNEYS[prevJourneyIdx] : null;

  const isJourneyUnlocked = !journey.unlockAfterJourney || (() => {
    if (!prevJourney) return true;
    const prevMods = MODULES.filter(m => m.journeyId === prevJourney.id);
    return prevMods.every(m => getModuleProgress(m.id) === 100);
  })();

  const currentModuleIdx = journeyModules.findIndex(m => isModuleUnlocked(m.order) && getModuleProgress(m.id) < 100);

  return (
    <ThemeBackground className="pb-24">
      <div className={`bg-gradient-to-br ${journey.bgGradient} px-4 pt-8 pb-20 text-white`}>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Jornadas</span>
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{journey.emoji}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-white/25 px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wide">
                  {journey.tierEmoji} {journey.tierLabel}
                </span>
              </div>
              <h1 className="text-2xl font-extrabold mt-1">{journey.title}</h1>
            </div>
          </div>
          <p className="text-white/75 text-sm leading-relaxed mb-4">{journey.description}</p>

          <div className="bg-white/15 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-white/80">Progresso da jornada</span>
              <span className="text-sm font-extrabold">{completedLessons}/{totalLessons} aulas</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${journeyProgress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <p className="text-xs text-white/70 mt-1">{journeyProgress}% concluído</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-12">
        {!isJourneyUnlocked && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-4 flex items-start gap-3"
          >
            <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-extrabold text-amber-800">Jornada bloqueada</p>
              <p className="text-sm text-amber-700 mt-0.5">
                Conclua todos os módulos de "{prevJourney?.title}" para desbloquear esta jornada.
              </p>
            </div>
          </motion.div>
        )}

        <div className="flex items-center gap-2 mb-4 mt-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-extrabold text-foreground">
            {journeyModules.length} Módulos
          </h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
            {totalLessons} aulas
          </span>
        </div>

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border z-0" />
          <div className="space-y-3">
            {journeyModules.map((mod, idx) => {
              const unlocked = isJourneyUnlocked && isModuleUnlocked(mod.order);
              const modProgress = getModuleProgress(mod.id);
              const isComplete = modProgress === 100;
              const challengeDone = progress.completedChallenges.includes(mod.id);
              const isCurrent = idx === currentModuleIdx && isJourneyUnlocked;

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + idx * 0.07 }}
                  className="relative z-10"
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.12, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 border-2 shadow-sm ${
                        isComplete ? "border-green-400 bg-green-50"
                          : isCurrent ? "border-primary bg-primary/10 shadow-md"
                          : unlocked ? "border-border bg-card"
                          : "border-border/50 bg-muted/50 opacity-60"
                      }`}
                    >
                      {isComplete ? "✅" : unlocked ? mod.emoji : "🔒"}
                    </motion.div>

                    <button
                      onClick={() => unlocked && setLocation(`/modulo/${mod.id}`)}
                      disabled={!unlocked}
                      className={`flex-1 text-left rounded-2xl border overflow-hidden transition-all duration-200 bg-card ${
                        isCurrent ? "border-primary shadow-md shadow-primary/10"
                          : isComplete ? "border-green-200 shadow-sm"
                          : unlocked ? "border-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
                          : "border-border/50 opacity-55 cursor-not-allowed"
                      }`}
                    >
                      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 py-3 flex items-center justify-between`}>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-extrabold px-2 py-0.5 rounded-full text-white/90" style={{ backgroundColor: "rgba(0,0,0,0.25)" }}>
                            {mod.tierEmoji} Nível {mod.tier} · {mod.tierLabel}
                          </span>
                          {isComplete && <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">Concluído ✓</span>}
                          {challengeDone && <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">Desafio ✓</span>}
                          {isCurrent && <span className="text-xs bg-white text-primary px-2 py-0.5 rounded-full font-extrabold animate-pulse">← AQUI</span>}
                        </div>
                        {unlocked ? <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" /> : <Lock className="w-4 h-4 text-white/60 flex-shrink-0" />}
                      </div>

                      <div className="px-4 py-3">
                        <h3 className="font-extrabold text-foreground text-base leading-tight">{mod.title}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5 mb-2">{mod.subtitle}</p>

                        {unlocked ? (
                          <>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full"
                                  style={{ backgroundColor: mod.color }}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${modProgress}%` }}
                                  transition={{ duration: 0.8, delay: 0.15 * idx }}
                                />
                              </div>
                              <span className="text-xs font-bold text-muted-foreground">{modProgress}%</span>
                            </div>
                            <div className="flex items-center justify-between mt-1.5">
                              <span className="text-xs text-muted-foreground">
                                {mod.lessons.filter(l => progress.completedLessons.includes(`${mod.id}:${l.id}`)).length}/{mod.lessons.length} aulas
                              </span>
                              <div className="flex items-center gap-1">
                                <Zap className="w-3 h-3 text-amber-500" />
                                <span className="text-xs font-bold" style={{ color: mod.color }}>
                                  {mod.lessons.reduce((s, l) => s + l.xpReward, 0)} XP
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">Bloqueado</span>
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
}
