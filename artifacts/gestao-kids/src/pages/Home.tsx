import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Lock, ArrowRight, LayoutDashboard, User, Flame, Star, BookOpen, ChevronRight, Zap, RotateCcw } from "lucide-react";
import { MODULES, getModuleById } from "@/data/modules";
import { JOURNEYS } from "@/data/journeys";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";
import { useTone } from "@/hooks/useTone";

const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.6 + 0.15,
}));

export default function Home() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const { progress, levelInfo, getModuleProgress, getDueReviews } = useProgress();
  const { theme } = useTheme();
  const { tone, completedModules } = useTone();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const xpBase = levelInfo.level === 1 ? 0 : [0, 100, 250, 500, 800, 1200, 1600][Math.min(levelInfo.level - 1, 6)];
  const xpPct = Math.min(100, Math.round(((progress.xp - xpBase) / Math.max(1, levelInfo.nextXP - xpBase)) * 100));

  const firstName = user?.name?.split(" ")[0] || "Empreendedor";
  const headingFont = `font-['${theme.fontHeading.replace(/ /g, "_")}']`;

  // Compute journey-level unlock and progress
  function isJourneyUnlocked(journeyId: string): boolean {
    const journey = JOURNEYS.find(j => j.id === journeyId);
    if (!journey?.unlockAfterJourney) return true;
    const prevMods = MODULES.filter(m => m.journeyId === journey.unlockAfterJourney);
    if (prevMods.length === 0) return true;
    return prevMods.every(m => getModuleProgress(m.id) === 100);
  }

  function getJourneyProgressPct(journeyId: string): number {
    const mods = MODULES.filter(m => m.journeyId === journeyId);
    if (mods.length === 0) return 0;
    const total = mods.reduce((a, m) => a + m.lessons.length, 0);
    const done = mods.reduce((a, m) =>
      a + m.lessons.filter(l => progress.completedLessons.includes(`${m.id}:${l.id}`)).length, 0
    );
    return total > 0 ? Math.round((done / total) * 100) : 0;
  }

  function getJourneyLessonsInfo(journeyId: string): { done: number; total: number } {
    const mods = MODULES.filter(m => m.journeyId === journeyId);
    const total = mods.reduce((a, m) => a + m.lessons.length, 0);
    const done = mods.reduce((a, m) =>
      a + m.lessons.filter(l => progress.completedLessons.includes(`${m.id}:${l.id}`)).length, 0
    );
    return { done, total };
  }

  const dueReviews = getDueReviews();

  // Find current active journey (first one unlocked but not 100%)
  const activeJourneyId = JOURNEYS.find(j => {
    if (!isJourneyUnlocked(j.id)) return false;
    return getJourneyProgressPct(j.id) < 100;
  })?.id ?? JOURNEYS[JOURNEYS.length - 1].id;

  // Find current lesson for quick-continue
  const currentMod = MODULES.find(m => {
    if (!isJourneyUnlocked(m.journeyId)) return false;
    const prevMod = MODULES.find(pm => pm.order === m.order - 1);
    if (prevMod && getModuleProgress(prevMod.id) < 100) return false;
    return getModuleProgress(m.id) < 100;
  });
  const currentLesson = currentMod?.lessons.find(
    l => !progress.completedLessons.includes(`${currentMod.id}:${l.id}`)
  );

  return (
    <div
      className="min-h-screen pb-28 relative overflow-x-hidden"
      style={{ background: theme.bgGradient }}
    >
      {/* Star field */}
      {theme.showStars && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {STARS.map(s => (
            <div
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{ width: s.size, height: s.size, top: `${s.top}%`, left: `${s.left}%`, opacity: s.opacity, animation: `twinkle ${s.duration}s ease-in-out infinite alternate` }}
            />
          ))}
        </div>
      )}
      {theme.id === "tropical" && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: theme.colors.secondary }} />
          <div className="absolute top-1/2 -left-20 w-48 h-48 rounded-full blur-3xl opacity-15" style={{ background: theme.colors.primary }} />
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 px-5 pt-12 pb-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center p-[1.5px]" style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}>
              <div className="w-full h-full rounded-full flex items-center justify-center" style={{ background: theme.isDark ? "#0d0221" : "#fff" }}>
                <span className="text-sm">{theme.emoji}</span>
              </div>
            </div>
            <span className={`${headingFont} font-semibold text-xl tracking-wide`} style={{ color: theme.colors.text }}>ZENITU</span>
          </div>
          <div className="flex items-center gap-2">
            {user?.isAdmin && (
              <button onClick={() => setLocation("/admin")} className="p-2.5 rounded-xl" style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}`, color: theme.colors.textMuted }}>
                <LayoutDashboard className="w-5 h-5" />
              </button>
            )}
            <button onClick={() => setLocation("/perfil")} className="p-2.5 rounded-xl" style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}`, color: theme.colors.textMuted }} data-testid="button-go-profile">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-5 space-y-5">

        {/* Tone-aware greeting */}
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium" style={{ color: theme.colors.textMuted }}>{tone.greetingSubtitle}</p>
              <h1 className={`${headingFont} font-semibold text-3xl mt-0.5 leading-tight`} style={{ color: theme.colors.text }}>
                {tone.greeting(firstName)}
              </h1>
            </div>
            {/* Tone badge */}
            <div className="flex flex-col items-end gap-1">
              <span
                className="text-xs px-2.5 py-1 rounded-full font-bold"
                style={{ background: `${theme.colors.primary}22`, color: theme.colors.primary, border: `1px solid ${theme.colors.primary}44` }}
              >
                {tone.emoji} Tom: {tone.label}
              </span>
              <span className="text-xs" style={{ color: theme.colors.textMuted }}>{completedModules} módulos concluídos</span>
            </div>
          </div>
        </motion.div>

        {/* XP Card */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}
          className="rounded-2xl p-4 relative overflow-hidden"
          style={{ background: theme.colors.glassCard, backdropFilter: "blur(12px)", border: `1px solid ${theme.colors.glassCardBorder}` }}
        >
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 -mr-10 -mt-10 pointer-events-none" style={{ background: theme.colors.primary }} />
          <div className="flex items-center justify-between mb-3 relative z-10">
            <div>
              <p className={`${headingFont} text-base font-semibold`} style={{ color: theme.colors.text }}>{levelInfo.title} · Nível {levelInfo.level}</p>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: theme.colors.secondary }}><Flame className="w-3 h-3" /> {progress.streak} dias</span>
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: theme.colors.text }}><Star className="w-3 h-3" style={{ color: theme.colors.secondary }} /> {progress.xp} XP</span>
                <span className="text-xs font-semibold flex items-center gap-1" style={{ color: theme.colors.textMuted }}><BookOpen className="w-3 h-3" /> {completedLessons}/{totalLessons} aulas</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10">
            <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.25)" }}>
              <motion.div className="h-full rounded-full" style={{ background: theme.colors.xpBarGradient, boxShadow: `0 0 8px ${theme.colors.accent}66` }}
                initial={{ width: 0 }} animate={{ width: `${xpPct}%` }} transition={{ duration: 1, delay: 0.3 }} />
            </div>
            <span className="text-xs font-bold" style={{ color: theme.colors.accent }}>{xpPct}%</span>
          </div>
        </motion.div>

        {/* Quick Continue */}
        {currentMod && currentLesson && (
          <motion.button
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}
            onClick={() => setLocation(`/aula/${currentMod.id}/${currentLesson.id}`)}
            className="w-full rounded-2xl p-4 flex items-center gap-4 text-left transition-all hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${currentMod.color}33, ${currentMod.color}18)`, border: `1px solid ${currentMod.color}55` }}
          >
            <div className="text-2xl w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${currentMod.color}25` }}
            >{currentMod.emoji}</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: currentMod.color }}>
                Continuar de onde parou
              </p>
              <p className={`${headingFont} font-semibold text-sm truncate`} style={{ color: theme.colors.text }}>{currentLesson.title}</p>
              <p className="text-xs mt-0.5 truncate" style={{ color: theme.colors.textMuted }}>{currentMod.title}</p>
            </div>
            <Zap className="w-5 h-5 flex-shrink-0" style={{ color: currentMod.color }} />
          </motion.button>
        )}

        {/* Due Reviews */}
        {dueReviews.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            <div className="flex items-center gap-2 mb-3">
              <h2 className={`${headingFont} font-semibold text-xl`} style={{ color: theme.colors.text }}>
                📅 Revisar Hoje
              </h2>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-bold"
                style={{ background: "#f59e0b22", color: "#f59e0b", border: "1px solid #f59e0b44" }}
              >
                {dueReviews.length} módulo{dueReviews.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="rounded-2xl p-4 space-y-2" style={{ background: theme.colors.glassCard, border: `1px solid #f59e0b44` }}>
              <p className="text-xs mb-3" style={{ color: theme.colors.textMuted }}>
                Sua memória está pronta para reforçar esses conteúdos — revisar agora consolida o aprendizado! 🧠
              </p>
              {dueReviews.map(moduleId => {
                const mod = getModuleById(moduleId);
                if (!mod) return null;
                return (
                  <button
                    key={moduleId}
                    onClick={() => setLocation(`/pratica/${moduleId}?review=1`)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl transition-all hover:brightness-110"
                    style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}33` }}
                  >
                    <span className="text-xl">{mod.emoji}</span>
                    <span className="flex-1 text-left text-sm font-semibold" style={{ color: theme.colors.text }}>
                      {mod.title}
                    </span>
                    <div className="flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full" style={{ background: mod.color, color: "#fff" }}>
                      <RotateCcw className="w-3 h-3" />
                      Revisar
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Journey Cards */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }}>
          <div className="flex items-center gap-2 mb-3">
            <h2 className={`${headingFont} font-semibold text-2xl`} style={{ color: theme.colors.secondary }}>Jornadas</h2>
            <span className="text-xs px-2 py-0.5 rounded-full font-bold"
              style={{ color: theme.colors.secondary, background: `${theme.colors.secondary}18`, border: `1px solid ${theme.colors.secondary}33` }}>
              {JOURNEYS.length} caminhos
            </span>
          </div>

          <div className="space-y-3">
            {JOURNEYS.map((journey, idx) => {
              const unlocked = isJourneyUnlocked(journey.id);
              const pct = getJourneyProgressPct(journey.id);
              const { done, total } = getJourneyLessonsInfo(journey.id);
              const isComplete = pct === 100;
              const isCurrent = journey.id === activeJourneyId && !isComplete;
              const mods = MODULES.filter(m => m.journeyId === journey.id);

              return (
                <motion.button
                  key={journey.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.18 + idx * 0.07 }}
                  onClick={() => unlocked && setLocation(`/jornada/${journey.id}`)}
                  disabled={!unlocked}
                  className="w-full text-left rounded-3xl overflow-hidden transition-all duration-200 disabled:cursor-not-allowed"
                  style={
                    isCurrent
                      ? { background: theme.colors.glassCard, border: `1.5px solid ${journey.color}88`, boxShadow: `0 0 24px ${journey.color}22`, backdropFilter: "blur(12px)" }
                      : isComplete
                      ? { background: `${theme.colors.accent}0a`, border: `1.5px solid ${theme.colors.accent}44` }
                      : unlocked
                      ? { background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}`, backdropFilter: "blur(8px)" }
                      : { background: `${theme.colors.glassCard}`, border: `1px solid ${theme.colors.glassCardBorder}`, opacity: 0.5 }
                  }
                  data-testid={`card-journey-${journey.id}`}
                >
                  {/* Top accent stripe */}
                  <div className="h-1.5 w-full" style={{ background: unlocked ? `linear-gradient(90deg, ${journey.color}, ${journey.color}88)` : "rgba(255,255,255,0.08)" }} />

                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <motion.div
                        animate={isCurrent ? { scale: [1, 1.1, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                        style={
                          isComplete
                            ? { background: `${theme.colors.accent}20`, border: `2px solid ${theme.colors.accent}` }
                            : isCurrent
                            ? { background: `${journey.color}25`, border: `2px solid ${journey.color}`, boxShadow: `0 0 16px ${journey.color}44` }
                            : unlocked
                            ? { background: `${journey.color}18`, border: `1px solid ${journey.color}44` }
                            : { background: "rgba(0,0,0,0.2)", border: `1px solid rgba(255,255,255,0.1)` }
                        }
                      >
                        {isComplete ? "🏆" : unlocked ? journey.emoji : "🔒"}
                      </motion.div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full"
                            style={{ background: unlocked ? `${journey.color}22` : "rgba(255,255,255,0.08)", color: unlocked ? journey.color : theme.colors.textMuted }}>
                            {journey.tierEmoji} {journey.tierLabel}
                          </span>
                          {isComplete && (
                            <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ color: theme.colors.accent, background: `${theme.colors.accent}18` }}>
                              Completa ✓
                            </span>
                          )}
                          {isCurrent && (
                            <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }}
                              className="text-xs font-extrabold px-2 py-0.5 rounded-full"
                              style={{ background: journey.color, color: "#fff" }}>
                              Em andamento
                            </motion.span>
                          )}
                        </div>

                        <h3 className={`${headingFont} font-semibold text-base leading-tight`} style={{ color: theme.colors.text }}>
                          {journey.title}
                        </h3>
                        <p className="text-xs mt-0.5 mb-2.5 line-clamp-2" style={{ color: theme.colors.textMuted }}>
                          {journey.subtitle}
                        </p>

                        {unlocked ? (
                          <>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.25)" }}>
                                <motion.div className="h-full rounded-full" style={{ backgroundColor: isComplete ? "#34d399" : journey.color }}
                                  initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 0.9, delay: 0.15 * idx }} />
                              </div>
                              <span className="text-xs font-bold flex-shrink-0" style={{ color: isComplete ? "#34d399" : journey.color }}>{pct}%</span>
                            </div>
                            <div className="flex items-center justify-between mt-1.5">
                              <span className="text-xs" style={{ color: theme.colors.textMuted }}>{done}/{total} aulas · {mods.length} módulos</span>
                              <div className="flex items-center gap-1" style={{ color: theme.colors.textMuted }}>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5" style={{ color: theme.colors.textMuted }} />
                            <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                              Conclua a jornada anterior para desbloquear
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tone progression indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="rounded-2xl p-4"
          style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}` }}
        >
          <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.colors.textMuted }}>Evolução do seu tom de comunicação</p>
          <div className="flex items-center gap-2">
            {["casual", "building", "professional", "executive"].map((id, i) => {
              const labels = ["Explorador", "Aprendiz", "Analista", "Executivo"];
              const emojis = ["🌱", "📚", "📊", "🏆"];
              const thresholds = [0, 2, 5, 10];
              const isActive = tone.id === id;
              const isReached = completedModules >= thresholds[i];
              return (
                <div key={id} className="flex-1 text-center">
                  <div className={`w-8 h-8 rounded-full mx-auto mb-1 flex items-center justify-center text-sm transition-all`}
                    style={{
                      background: isActive ? theme.colors.primary : isReached ? `${theme.colors.primary}33` : "rgba(255,255,255,0.05)",
                      border: isActive ? `2px solid ${theme.colors.primary}` : `1px solid rgba(255,255,255,0.1)`,
                      boxShadow: isActive ? `0 0 12px ${theme.colors.primary}55` : "none",
                    }}
                  >
                    {emojis[i]}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: isActive ? theme.colors.primary : theme.colors.textMuted }}>
                    {labels[i]}
                  </p>
                  <p className="text-xs" style={{ color: theme.colors.textMuted }}>{thresholds[i]}+ mod</p>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-center mt-2" style={{ color: theme.colors.textMuted }}>
            {tone.encouragement}
          </p>
        </motion.div>

        {/* Dictionary */}
        <motion.button
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
          onClick={() => setLocation("/dicionario")}
          className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all hover:brightness-110"
          style={{ background: `linear-gradient(135deg, ${theme.colors.secondary}22, ${theme.colors.primary}12)`, border: `1px solid ${theme.colors.secondary}33` }}
          data-testid="button-go-dictionary"
        >
          <div className="text-3xl">📚</div>
          <div className="text-left">
            <p className={`${headingFont} font-semibold text-base`} style={{ color: theme.colors.text }}>Dicionário de Negócios</p>
            <p className="text-xs" style={{ color: theme.colors.textMuted }}>68 palavras com origem e exemplos</p>
          </div>
          <ArrowRight className="w-5 h-5 ml-auto" style={{ color: theme.colors.secondary }} />
        </motion.button>

        {/* Legal References */}
        <motion.button
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          onClick={() => setLocation("/legislacao")}
          className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all hover:brightness-110"
          style={{ background: `linear-gradient(135deg, #22c55e18, #16a34a0e)`, border: `1px solid #22c55e33` }}
          data-testid="button-go-legal"
        >
          <div className="text-3xl">⚖️</div>
          <div className="text-left">
            <p className={`${headingFont} font-semibold text-base`} style={{ color: theme.colors.text }}>Legislação Empresarial</p>
            <p className="text-xs" style={{ color: theme.colors.textMuted }}>15 leis essenciais — proibições, multas e obrigações</p>
          </div>
          <ArrowRight className="w-5 h-5 ml-auto" style={{ color: "#22c55e" }} />
        </motion.button>
      </main>
    </div>
  );
}
