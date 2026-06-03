import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Star, Trophy, Flame, Lock, ChevronRight, BookOpen, Zap } from "lucide-react";
import { MODULES } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const [, setLocation] = useLocation();
  const { progress, levelInfo, getModuleProgress, isModuleUnlocked } = useProgress();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const totalXPPossible = totalLessons * 50;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-violet-800 text-white px-4 pt-10 pb-16">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-6"
          >
            <div>
              <p className="text-violet-200 text-sm font-semibold uppercase tracking-widest">Bem-vindo de volta!</p>
              <h1 className="text-3xl font-extrabold mt-1">Gestão Kids</h1>
              <p className="text-violet-200 text-sm mt-1">Aprenda negócios como um chefe</p>
            </div>
            <button
              onClick={() => setLocation("/perfil")}
              className="bg-white/20 hover:bg-white/30 transition-colors rounded-2xl p-3"
              data-testid="button-go-profile"
            >
              <Trophy className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Stats Row */}
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
              <p className="text-xs text-violet-200 font-medium">Dias seguidos</p>
            </div>
            <div className="bg-white/15 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-4 h-4 text-green-300" />
                <span className="text-2xl font-extrabold">{levelInfo.level}</span>
              </div>
              <p className="text-xs text-violet-200 font-medium">{levelInfo.title}</p>
            </div>
          </motion.div>

          {/* Overall Progress */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 bg-white/15 rounded-2xl p-4"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-violet-200">Progresso geral</span>
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

      {/* Modules Grid */}
      <div className="max-w-2xl mx-auto px-4 -mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-4"
        >
          <BookOpen className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-extrabold text-foreground">Módulos de Aprendizado</h2>
        </motion.div>

        <div className="grid gap-4">
          {MODULES.map((mod, idx) => {
            const unlocked = isModuleUnlocked(mod.order);
            const modProgress = getModuleProgress(mod.id);
            const isComplete = modProgress === 100;
            const challengeDone = progress.completedChallenges.includes(mod.id);

            return (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx }}
                data-testid={`card-module-${mod.id}`}
              >
                <button
                  onClick={() => unlocked && setLocation(`/modulo/${mod.id}`)}
                  className={`w-full text-left rounded-2xl border transition-all duration-200 overflow-hidden ${
                    unlocked
                      ? "border-card-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
                      : "border-border opacity-60 cursor-not-allowed"
                  } bg-card`}
                  disabled={!unlocked}
                >
                  <div className={`bg-gradient-to-r ${mod.bgGradient} p-4 flex items-center gap-4`}>
                    <div className="text-4xl">{mod.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/70 font-bold uppercase tracking-wide">
                          Módulo {mod.order}
                        </span>
                        {isComplete && <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">Concluído</span>}
                        {challengeDone && <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">Desafio ✓</span>}
                      </div>
                      <h3 className="text-white font-extrabold text-lg leading-tight truncate">{mod.title}</h3>
                    </div>
                    {unlocked ? (
                      <ChevronRight className="w-5 h-5 text-white/70 flex-shrink-0" />
                    ) : (
                      <Lock className="w-5 h-5 text-white/70 flex-shrink-0" />
                    )}
                  </div>

                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-3">{mod.subtitle}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: mod.color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${modProgress}%` }}
                          transition={{ duration: 0.8, delay: 0.2 * idx }}
                        />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground w-10 text-right">
                        {modProgress}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">
                        {mod.lessons.filter(l => progress.completedLessons.includes(`${mod.id}:${l.id}`)).length}/{mod.lessons.length} aulas
                      </span>
                      <span className="text-xs font-bold" style={{ color: mod.color }}>
                        {mod.lessons.length * 50} XP disponíveis
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dictionary CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => setLocation("/dicionario")}
          className="w-full mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl p-5 flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
          data-testid="button-go-dictionary"
        >
          <div className="text-4xl">📚</div>
          <div className="text-left">
            <p className="font-extrabold text-lg">Dicionário de Negócios</p>
            <p className="text-white/80 text-sm">{40}+ palavras com origem e exemplos</p>
          </div>
          <ChevronRight className="w-5 h-5 text-white/70 ml-auto" />
        </motion.button>
      </div>
    </div>
  );
}
