import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Star, Trophy, Flame, Lock, ChevronRight, BookOpen, Zap, LayoutDashboard, Bell, Search, User, ArrowRight } from "lucide-react";
import { MODULES } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";
import { useMemo } from "react";

const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.6 + 0.15,
}));

function AstronautMascot() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="w-16 h-16 flex-shrink-0"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="38" fill="rgba(167,139,250,0.15)" stroke="#a78bfa" strokeWidth="1.5"/>
        <circle cx="50" cy="50" r="30" fill="#1a0533"/>
        <path d="M36 46 Q50 57 64 46" stroke="#f0e6ff" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="40" cy="40" r="4" fill="#f0e6ff"/>
        <circle cx="60" cy="40" r="4" fill="#f0e6ff"/>
        <circle cx="41.5" cy="38.5" r="1.5" fill="#1a0533"/>
        <circle cx="61.5" cy="38.5" r="1.5" fill="#1a0533"/>
        <path d="M22 52 A28 28 0 0 1 78 52" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="3 3"/>
        <circle cx="86" cy="18" r="3" fill="#fbbf24"/>
        <circle cx="14" cy="78" r="4" fill="#a78bfa"/>
        <circle cx="78" cy="82" r="2.5" fill="#34d399"/>
      </svg>
    </motion.div>
  );
}

export default function Home() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { progress, levelInfo, getModuleProgress, isModuleUnlocked } = useProgress();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const xpPct = Math.min(100, Math.round(((progress.xp - (levelInfo.level === 1 ? 0 : [0,100,250,500,800,1200,1600][Math.min(levelInfo.level-1,6)])) / Math.max(1, levelInfo.nextXP - (levelInfo.level === 1 ? 0 : [0,100,250,500,800,1200,1600][Math.min(levelInfo.level-1,6)]))) * 100));

  const nextModuleIdx = MODULES.findIndex(m => !isModuleUnlocked(m.order) || getModuleProgress(m.id) < 100);
  const currentModuleIdx = MODULES.findIndex(m => isModuleUnlocked(m.order) && getModuleProgress(m.id) < 100);

  return (
    <div
      className="min-h-screen pb-24 relative overflow-x-hidden"
      style={{ background: "linear-gradient(180deg, #0d0221 0%, #1a0533 60%, #120228 100%)" }}
    >
      {/* Star field */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {STARS.map(s => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              width: s.size,
              height: s.size,
              top: `${s.top}%`,
              left: `${s.left}%`,
              opacity: s.opacity,
              animation: `twinkle ${s.duration}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 px-5 pt-12 pb-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center p-[1.5px]"
              style={{ background: "linear-gradient(135deg, #a78bfa, #fbbf24)" }}
            >
              <div className="w-full h-full rounded-full bg-[#0d0221] flex items-center justify-center">
                <span className="text-sm">🚀</span>
              </div>
            </div>
            <span className="font-['Fredoka'] font-semibold text-xl text-white tracking-wide">ZENITU</span>
          </div>

          <div className="flex items-center gap-2">
            {user?.isAdmin && (
              <button
                onClick={() => setLocation("/admin")}
                className="p-2.5 rounded-xl text-[#9d8ec4] hover:text-white transition-colors"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
                title="Painel Admin"
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setLocation("/perfil")}
              className="p-2.5 rounded-xl text-[#9d8ec4] hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              data-testid="button-go-profile"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 max-w-2xl mx-auto px-5 space-y-6">
        {/* Greeting + mascot */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-[#9d8ec4] text-sm font-medium">Bem-vindo de volta!</p>
            <h1 className="font-['Fredoka'] font-semibold text-3xl text-[#f0e6ff] mt-0.5 leading-tight">
              Olá, {user?.name?.split(" ")[0] || "Empreendedor"}! <span className="inline-block animate-pulse">🌟</span>
            </h1>
          </div>
          <AstronautMascot />
        </motion.div>

        {/* XP card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl p-5 relative overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.13)",
          }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[70px] opacity-20 -mr-14 -mt-14 pointer-events-none"
            style={{ background: "#a78bfa" }} />

          <div className="flex items-start justify-between mb-4 relative z-10">
            <div>
              <h3 className="font-['Fredoka'] text-xl font-medium text-[#f0e6ff]">
                {levelInfo.title} — Nível {levelInfo.level}
              </h3>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-sm font-semibold text-[#fbbf24] flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5" /> {progress.streak} dias seguidos
                </span>
                <span className="text-sm font-semibold text-[#f0e6ff] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-300" /> {progress.xp} XP
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="flex justify-between text-xs font-semibold text-[#9d8ec4] uppercase tracking-wider">
              <span>Progresso do nível</span>
              <span className="text-[#34d399]">{xpPct}%</span>
            </div>
            <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.4)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #10b981, #34d399)",
                  boxShadow: "0 0 10px rgba(52,211,153,0.5)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${xpPct}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between text-xs text-[#9d8ec4]">
              <span>{progress.xp} XP</span>
              <span>{levelInfo.nextXP} XP</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between relative z-10">
            <span className="text-xs text-[#9d8ec4] font-medium uppercase tracking-wider">Aulas concluídas</span>
            <span className="text-sm font-bold text-[#f0e6ff]">{completedLessons}/{totalLessons}</span>
          </div>
        </motion.div>

        {/* Modules */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <h2 className="font-['Fredoka'] font-semibold text-2xl text-[#fbbf24]">Missões</h2>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-bold text-[#fbbf24]"
              style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.25)" }}
            >
              {MODULES.length} módulos
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 opacity-20 z-0"
              style={{ background: "linear-gradient(180deg, #a78bfa, transparent)" }} />

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
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06 }}
                    className="relative z-10"
                    data-testid={`card-module-${mod.id}`}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        animate={isCurrent ? { scale: [1, 1.12, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={
                          isComplete
                            ? { background: "rgba(52,211,153,0.15)", border: "2px solid #34d399" }
                            : isCurrent
                            ? { background: "rgba(167,139,250,0.2)", border: "2px solid #a78bfa", boxShadow: "0 0 16px rgba(167,139,250,0.35)" }
                            : unlocked
                            ? { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)" }
                            : { background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)", opacity: 0.55 }
                        }
                      >
                        {isComplete ? "✅" : unlocked ? mod.emoji : "🔒"}
                      </motion.div>

                      <button
                        onClick={() => unlocked && setLocation(`/modulo/${mod.id}`)}
                        disabled={!unlocked}
                        className="flex-1 text-left rounded-2xl overflow-hidden transition-all duration-200 disabled:cursor-not-allowed"
                        style={
                          isCurrent
                            ? {
                                background: "rgba(255,255,255,0.07)",
                                backdropFilter: "blur(12px)",
                                border: "1px solid rgba(167,139,250,0.4)",
                                boxShadow: "0 0 20px rgba(167,139,250,0.12)",
                              }
                            : isComplete
                            ? {
                                background: "rgba(52,211,153,0.06)",
                                border: "1px solid rgba(52,211,153,0.25)",
                              }
                            : unlocked
                            ? {
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                              }
                            : {
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                opacity: 0.55,
                              }
                        }
                      >
                        <div
                          className="px-4 py-2.5 flex items-center justify-between"
                          style={{ background: `linear-gradient(135deg, ${mod.color}22, ${mod.color}10)` }}
                        >
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full text-white/90"
                              style={{ background: "rgba(0,0,0,0.35)" }}
                            >
                              {mod.tierEmoji} Nível {mod.tier} · {mod.tierLabel}
                            </span>
                            {isComplete && (
                              <span className="text-xs px-2 py-0.5 rounded-full font-bold text-[#34d399]"
                                style={{ background: "rgba(52,211,153,0.15)" }}>
                                Concluído ✓
                              </span>
                            )}
                            {challengeDone && (
                              <span className="text-xs px-2 py-0.5 rounded-full font-bold text-[#fbbf24]"
                                style={{ background: "rgba(251,191,36,0.15)" }}>
                                Desafio ✓
                              </span>
                            )}
                            {isCurrent && !isComplete && (
                              <span
                                className="text-xs px-2 py-0.5 rounded-full font-extrabold animate-pulse"
                                style={{ background: "#a78bfa", color: "#fff" }}
                              >
                                ← AQUI
                              </span>
                            )}
                          </div>
                          {unlocked ? (
                            <ChevronRight className="w-4 h-4 text-white/50 flex-shrink-0" />
                          ) : (
                            <Lock className="w-4 h-4 text-white/30 flex-shrink-0" />
                          )}
                        </div>

                        <div className="px-4 py-3">
                          <h3 className="font-['Fredoka'] font-semibold text-[#f0e6ff] text-base leading-tight">{mod.title}</h3>
                          <p className="text-xs text-[#9d8ec4] mt-0.5 mb-2">{mod.subtitle}</p>

                          {unlocked ? (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.4)" }}>
                                  <motion.div
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: mod.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${modProgress}%` }}
                                    transition={{ duration: 0.8, delay: 0.1 * idx }}
                                  />
                                </div>
                                <span className="text-xs font-bold text-[#9d8ec4]">{modProgress}%</span>
                              </div>
                              <div className="flex items-center justify-between mt-1.5">
                                <span className="text-xs text-[#9d8ec4]">
                                  {mod.lessons.filter(l => progress.completedLessons.includes(`${mod.id}:${l.id}`)).length}/{mod.lessons.length} aulas
                                </span>
                                <span className="text-xs font-bold" style={{ color: mod.color }}>
                                  {mod.lessons.length * 50}+ XP
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <Lock className="w-3.5 h-3.5 text-[#9d8ec4]" />
                              <span className="text-xs text-[#9d8ec4]">
                                {isNext ? "Conclua o módulo anterior para desbloquear" : "Bloqueado"}
                              </span>
                            </div>
                          )}

                          {mod.reviewConcepts.length > 0 && unlocked && (
                            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs text-[#9d8ec4] font-semibold">Revisa:</span>
                              {mod.reviewConcepts.map(c => (
                                <span
                                  key={c}
                                  className="text-xs px-1.5 py-0.5 rounded-md text-[#9d8ec4] font-medium"
                                  style={{ background: "rgba(255,255,255,0.07)" }}
                                >
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
        </motion.div>

        {/* Dictionary CTA */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={() => setLocation("/dicionario")}
          className="w-full rounded-2xl p-5 flex items-center gap-4 transition-all hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, rgba(251,191,36,0.2), rgba(167,139,250,0.15))",
            border: "1px solid rgba(251,191,36,0.3)",
            backdropFilter: "blur(8px)",
          }}
          data-testid="button-go-dictionary"
        >
          <div className="text-4xl">📚</div>
          <div className="text-left">
            <p className="font-['Fredoka'] font-semibold text-lg text-[#f0e6ff]">Dicionário de Negócios</p>
            <p className="text-[#9d8ec4] text-sm">68 palavras com origem e exemplos</p>
          </div>
          <ArrowRight className="w-5 h-5 text-[#fbbf24] ml-auto" />
        </motion.button>
      </main>
    </div>
  );
}
