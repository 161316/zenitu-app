import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Star, Trophy, Flame, Lock, ChevronRight, BookOpen, Zap, LayoutDashboard } from "lucide-react";
import { MODULES } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { progress, levelInfo, getModuleProgress, isModuleUnlocked } = useProgress();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;

  const nextModuleIdx = MODULES.findIndex(m => !isModuleUnlocked(m.order) || getModuleProgress(m.id) < 100);
  const currentModuleIdx = MODULES.findIndex(m => isModuleUnlocked(m.order) && getModuleProgress(m.id) < 100);

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="bg-gradient-to-br from-primary to-violet-800 text-white px-4 pt-10 pb-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <p className="text-violet-200 text-sm font-semibold uppercase tracking-widest">Sua jornada</p>
              <h1 className="text-3xl font-extrabold mt-0.5">Zenitu</h1>
              <p className="text-violet-200 text-sm mt-0.5">Do zero ao master em negócios</p>
            </div>
            <div className="flex items-center gap-2">
              {user?.isAdmin && (
                <button
                  onClick={() => setLocation("/admin")}
                  className="bg-white/20 hover:bg-white/30 transition-colors rounded-2xl p-3"
                  title="Painel Admin"
                >
                  <LayoutDashboard className="w-6 h-6" />
                </button>
              )}
              <button
                onClick={() => setLocation("/perfil")}
                className="bg-white/20 hover:bg-white/30 transition-colors rounded-2xl p-3"
                data-testid="button-go-profile"
              >
                <Trophy className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-3"
          >
            <div className="bg-white/15 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <span className="text-2xl font-extrabold">{progress.xp}</span>
              </div>
              <p className="text-xs text-violet-200 font-medium">XP Total</p>
            </div>
            <div className="bg-white/15 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Flame className="w-4 h-4 text-orange-300" />
                <span className="text-2xl font-extrabold">{progress.streak}</span>
              </div>
              <p className="text-xs text-violet-200 font-medium">Sequência</p>
            </div>
            <div className="bg-white/15 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-4 h-4 text-green-300" />
                <span className="text-2xl font-extrabold">{levelInfo.level}</span>
              </div>
              <p className="text-xs text-violet-200 font-medium">{levelInfo.title}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 bg-white/15 rounded-2xl p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-violet-200">Jornada concluída</span>
              <span className="text-sm font-bold">{completedLessons}/{totalLessons} aulas</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-yellow-300 to-orange-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0}%` }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex items-center gap-2 mb-5"
        >
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-extrabold text-foreground">Jornada de Aprendizado</h2>
          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">8 níveis</span>
        </motion.div>

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border z-0" />

          <div className="space-y-3">
            {MODULES.map((mod, idx) => {
              const unlocked = isModuleUnlocked(mod.order);
              const modProgress = getModuleProgress(mod.id);
              const isComplete = modProgress === 100;
              const challengeDone = progress.completedChallenges.includes(mod.id);
              const isCurrent = idx === currentModuleIdx;
              const isNext = !unlocked && idx === nextModuleIdx;

              return (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.07 }}
                  className="relative z-10"
                  data-testid={`card-module-${mod.id}`}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      animate={isCurrent ? { scale: [1, 1.12, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm border-2 ${
                        isComplete
                          ? "border-green-400 bg-green-50"
                          : isCurrent
                          ? "border-primary bg-primary/10 shadow-md"
                          : unlocked
                          ? "border-border bg-card"
                          : "border-border/50 bg-muted/50 opacity-60"
                      }`}
                    >
                      {isComplete ? "✅" : unlocked ? mod.emoji : "🔒"}
                    </motion.div>

                    <button
                      onClick={() => unlocked && setLocation(`/modulo/${mod.id}`)}
                      disabled={!unlocked}
                      className={`flex-1 text-left rounded-2xl border overflow-hidden transition-all duration-200 ${
                        isCurrent
                          ? "border-primary shadow-md shadow-primary/10"
                          : isComplete
                          ? "border-green-200 shadow-sm"
                          : unlocked
                          ? "border-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
                          : "border-border/50 opacity-55 cursor-not-allowed"
                      } bg-card`}
                    >
                      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 py-3 flex items-center justify-between`}>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className="text-xs font-extrabold px-2 py-0.5 rounded-full text-white/90"
                            style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
                          >
                            {mod.tierEmoji} Nível {mod.tier} · {mod.tierLabel}
                          </span>
                          {isComplete && (
                            <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">Concluído ✓</span>
                          )}
                          {challengeDone && (
                            <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">Desafio ✓</span>
                          )}
                          {isCurrent && !isComplete && (
                            <span className="text-xs bg-white text-primary px-2 py-0.5 rounded-full font-extrabold animate-pulse">
                              ← AQUI
                            </span>
                          )}
                        </div>
                        {unlocked ? (
                          <ChevronRight className="w-4 h-4 text-white/70 flex-shrink-0" />
                        ) : (
                          <Lock className="w-4 h-4 text-white/60 flex-shrink-0" />
                        )}
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
                              <span className="text-xs font-bold" style={{ color: mod.color }}>
                                {mod.lessons.length * 50}+ XP
                              </span>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {isNext ? "Conclua o módulo anterior para desbloquear" : "Bloqueado"}
                            </span>
                          </div>
                        )}

                        {mod.reviewConcepts.length > 0 && unlocked && (
                          <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                            <span className="text-xs text-muted-foreground font-semibold">Revisa:</span>
                            {mod.reviewConcepts.map(c => (
                              <span key={c} className="text-xs bg-muted px-1.5 py-0.5 rounded-md text-muted-foreground font-medium">
                                {c}
                              </span>
                            ))}
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

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={() => setLocation("/dicionario")}
          className="w-full mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
          data-testid="button-go-dictionary"
        >
          <div className="text-4xl">📚</div>
          <div className="text-left">
            <p className="font-extrabold text-lg">Dicionário de Negócios</p>
            <p className="text-white/80 text-sm">68 palavras com origem e exemplos</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70 ml-auto" />
        </motion.button>
      </div>
    </div>
  );
}
