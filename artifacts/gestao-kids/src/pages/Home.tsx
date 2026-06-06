import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Lock, ChevronRight, ArrowRight, LayoutDashboard, User, Flame, Star } from "lucide-react";
import { MODULES } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";
import { useTheme } from "@/hooks/useTheme";

const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.6 + 0.15,
}));

function AstronautMascot({ theme }: { theme: ReturnType<typeof useTheme>["theme"] }) {
  if (theme.id === "neon") {
    return (
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-16 h-16 flex-shrink-0"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <rect x="30" y="30" width="40" height="40" rx="8" fill="#09090f" stroke={theme.colors.primary} strokeWidth="2"/>
          <rect x="38" y="20" width="6" height="12" rx="3" fill={theme.colors.secondary}/>
          <circle cx="42" cy="48" r="4" fill={theme.colors.primary} style={{ filter: `drop-shadow(0 0 4px ${theme.colors.primary})` }}/>
          <circle cx="58" cy="48" r="4" fill={theme.colors.primary} style={{ filter: `drop-shadow(0 0 4px ${theme.colors.primary})` }}/>
          <path d="M42 62 Q50 68 58 62" stroke={theme.colors.secondary} strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="22" y="42" width="10" height="16" rx="4" fill={theme.colors.primary} opacity="0.4"/>
          <rect x="68" y="42" width="10" height="16" rx="4" fill={theme.colors.primary} opacity="0.4"/>
          <rect x="36" y="70" width="28" height="10" rx="4" fill={theme.colors.primary} opacity="0.3"/>
        </svg>
      </motion.div>
    );
  }
  if (theme.id === "tropical") {
    return (
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="w-16 h-16 flex-shrink-0"
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <ellipse cx="50" cy="58" rx="28" ry="24" fill="#f97316"/>
          <ellipse cx="50" cy="65" rx="16" ry="10" fill="#fed7aa"/>
          <circle cx="38" cy="50" r="5" fill="#1a1a2e"/>
          <circle cx="62" cy="50" r="5" fill="#1a1a2e"/>
          <circle cx="39.5" cy="48.5" r="2" fill="white"/>
          <circle cx="63.5" cy="48.5" r="2" fill="white"/>
          <ellipse cx="50" cy="68" rx="8" ry="4" fill="#fca5a5" opacity="0.5"/>
          <path d="M44 71 Q50 75 56 71" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
          <rect x="42" y="28" width="16" height="14" rx="3" fill="#1a1a2e"/>
          <rect x="46" y="25" width="8" height="6" rx="2" fill="#1a1a2e"/>
          <rect x="45" y="38" width="4" height="3" rx="1" fill="#fcd34d"/>
          <ellipse cx="20" cy="50" rx="10" ry="7" fill="#f97316" opacity="0.7"/>
          <ellipse cx="80" cy="50" rx="10" ry="7" fill="#f97316" opacity="0.7"/>
        </svg>
      </motion.div>
    );
  }
  // Default cosmic astronaut
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="w-16 h-16 flex-shrink-0"
    >
      <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
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
  const { theme } = useTheme();

  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = progress.completedLessons.length;
  const xpBase = levelInfo.level === 1 ? 0 : [0, 100, 250, 500, 800, 1200, 1600][Math.min(levelInfo.level - 1, 6)];
  const xpPct = Math.min(100, Math.round(((progress.xp - xpBase) / Math.max(1, levelInfo.nextXP - xpBase)) * 100));

  const nextModuleIdx = MODULES.findIndex(m => !isModuleUnlocked(m.order) || getModuleProgress(m.id) < 100);
  const currentModuleIdx = MODULES.findIndex(m => isModuleUnlocked(m.order) && getModuleProgress(m.id) < 100);

  const headingFont = `font-['${theme.fontHeading.replace(/ /g, "_")}']`;

  return (
    <div
      className="min-h-screen pb-24 relative overflow-x-hidden"
      style={{ background: theme.bgGradient }}
    >
      {/* Star field — only for dark themes */}
      {theme.showStars && (
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
      )}

      {/* Tropical: decorative blobs */}
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
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center p-[1.5px]"
              style={{ background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.secondary})` }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{ background: theme.isDark ? "#0d0221" : "#fff" }}
              >
                <span className="text-sm">{theme.emoji}</span>
              </div>
            </div>
            <span
              className={`${headingFont} font-semibold text-xl tracking-wide`}
              style={{ color: theme.colors.text }}
            >
              ZENITU
            </span>
          </div>

          <div className="flex items-center gap-2">
            {user?.isAdmin && (
              <button
                onClick={() => setLocation("/admin")}
                className="p-2.5 rounded-xl transition-colors"
                style={{
                  background: theme.colors.glassCard,
                  border: `1px solid ${theme.colors.glassCardBorder}`,
                  color: theme.colors.textMuted,
                }}
                title="Painel Admin"
              >
                <LayoutDashboard className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => setLocation("/perfil")}
              className="p-2.5 rounded-xl transition-colors"
              style={{
                background: theme.colors.glassCard,
                border: `1px solid ${theme.colors.glassCardBorder}`,
                color: theme.colors.textMuted,
              }}
              data-testid="button-go-profile"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-2xl mx-auto px-5 space-y-6">
        {/* Greeting + mascot */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm font-medium" style={{ color: theme.colors.textMuted }}>
              Bem-vindo de volta!
            </p>
            <h1
              className={`${headingFont} font-semibold text-3xl mt-0.5 leading-tight`}
              style={{ color: theme.colors.text }}
            >
              Olá, {user?.name?.split(" ")[0] || "Empreendedor"}!{" "}
              <span className="inline-block animate-pulse">🌟</span>
            </h1>
          </div>
          <AstronautMascot theme={theme} />
        </motion.div>

        {/* XP card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl p-5 relative overflow-hidden"
          style={{
            background: theme.colors.glassCard,
            backdropFilter: "blur(12px)",
            border: `1px solid ${theme.colors.glassCardBorder}`,
          }}
        >
          <div
            className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[70px] opacity-20 -mr-14 -mt-14 pointer-events-none"
            style={{ background: theme.colors.primary }}
          />

          <div className="flex items-start justify-between mb-4 relative z-10">
            <div>
              <h3
                className={`${headingFont} text-xl font-medium`}
                style={{ color: theme.colors.text }}
              >
                {levelInfo.title} — Nível {levelInfo.level}
              </h3>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: theme.colors.secondary }}>
                  <Flame className="w-3.5 h-3.5" /> {progress.streak} dias seguidos
                </span>
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: theme.colors.text }}>
                  <Star className="w-3.5 h-3.5" style={{ color: theme.colors.secondary }} /> {progress.xp} XP
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>
              <span>Progresso do nível</span>
              <span style={{ color: theme.colors.accent }}>{xpPct}%</span>
            </div>
            <div className="h-3 w-full rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.25)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: theme.colors.xpBarGradient,
                  boxShadow: `0 0 10px ${theme.colors.accent}66`,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${xpPct}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="flex justify-between text-xs" style={{ color: theme.colors.textMuted }}>
              <span>{progress.xp} XP</span>
              <span>{levelInfo.nextXP} XP</span>
            </div>
          </div>

          <div
            className="mt-4 pt-4 flex items-center justify-between relative z-10"
            style={{ borderTop: `1px solid ${theme.colors.glassCardBorder}` }}
          >
            <span className="text-xs font-medium uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>
              Aulas concluídas
            </span>
            <span className="text-sm font-bold" style={{ color: theme.colors.text }}>
              {completedLessons}/{totalLessons}
            </span>
          </div>
        </motion.div>

        {/* Modules */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center gap-2 mb-4">
            <h2
              className={`${headingFont} font-semibold text-2xl`}
              style={{ color: theme.colors.secondary }}
            >
              Missões
            </h2>
            <span
              className="text-xs px-2 py-0.5 rounded-full font-bold"
              style={{
                color: theme.colors.secondary,
                background: `${theme.colors.secondary}18`,
                border: `1px solid ${theme.colors.secondary}33`,
              }}
            >
              {MODULES.length} módulos
            </span>
          </div>

          <div className="relative">
            <div
              className="absolute left-7 top-0 bottom-0 w-0.5 opacity-20 z-0"
              style={{ background: `linear-gradient(180deg, ${theme.colors.primary}, transparent)` }}
            />

            <div className="space-y-3">
              {MODULES.map((mod, idx) => {
                const unlocked = isModuleUnlocked(mod.order);
                const modProgress = getModuleProgress(mod.id);
                const isComplete = modProgress === 100;
                const challengeDone = progress.completedChallenges.includes(mod.id);
                const isCurrent = idx === currentModuleIdx;
                const isNext = !unlocked && idx === nextModuleIdx;

                const iconStyle = isComplete
                  ? { background: `${theme.colors.accent}22`, border: `2px solid ${theme.colors.accent}` }
                  : isCurrent
                  ? { background: `${theme.colors.primary}30`, border: `2px solid ${theme.colors.primary}`, boxShadow: `0 0 16px ${theme.colors.moduleGlow}` }
                  : unlocked
                  ? { background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}` }
                  : { background: "rgba(0,0,0,0.2)", border: `1px solid ${theme.colors.glassCardBorder}`, opacity: 0.55 };

                const cardStyle = isCurrent
                  ? { background: theme.colors.glassCard, backdropFilter: "blur(12px)", border: `1px solid ${theme.colors.primary}55`, boxShadow: `0 0 20px ${theme.colors.primary}18` }
                  : isComplete
                  ? { background: `${theme.colors.accent}0a`, border: `1px solid ${theme.colors.accent}33` }
                  : unlocked
                  ? { background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}` }
                  : { background: `${theme.colors.glassCard}`, border: `1px solid ${theme.colors.glassCardBorder}`, opacity: 0.55 };

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
                        style={iconStyle}
                      >
                        {isComplete ? "✅" : unlocked ? mod.emoji : "🔒"}
                      </motion.div>

                      <button
                        onClick={() => unlocked && setLocation(`/modulo/${mod.id}`)}
                        disabled={!unlocked}
                        className="flex-1 text-left rounded-2xl overflow-hidden transition-all duration-200 disabled:cursor-not-allowed"
                        style={cardStyle}
                      >
                        <div
                          className="px-4 py-2.5 flex items-center justify-between"
                          style={{ background: `linear-gradient(135deg, ${mod.color}22, ${mod.color}10)` }}
                        >
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{ background: "rgba(0,0,0,0.3)", color: "rgba(255,255,255,0.9)" }}
                            >
                              {mod.tierEmoji} Nível {mod.tier} · {mod.tierLabel}
                            </span>
                            {isComplete && (
                              <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ color: theme.colors.accent, background: `${theme.colors.accent}18` }}>
                                Concluído ✓
                              </span>
                            )}
                            {challengeDone && (
                              <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ color: theme.colors.secondary, background: `${theme.colors.secondary}18` }}>
                                Desafio ✓
                              </span>
                            )}
                            {isCurrent && !isComplete && (
                              <span
                                className="text-xs px-2 py-0.5 rounded-full font-extrabold animate-pulse"
                                style={{ background: theme.colors.primary, color: "#fff" }}
                              >
                                ← AQUI
                              </span>
                            )}
                          </div>
                          {unlocked ? (
                            <ChevronRight className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.5)" }} />
                          ) : (
                            <Lock className="w-4 h-4 flex-shrink-0" style={{ color: "rgba(255,255,255,0.3)" }} />
                          )}
                        </div>

                        <div className="px-4 py-3">
                          <h3
                            className={`${headingFont} font-semibold text-base leading-tight`}
                            style={{ color: theme.colors.text }}
                          >
                            {mod.title}
                          </h3>
                          <p className="text-xs mt-0.5 mb-2" style={{ color: theme.colors.textMuted }}>
                            {mod.subtitle}
                          </p>

                          {unlocked ? (
                            <>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.25)" }}>
                                  <motion.div
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: mod.color }}
                                    initial={{ width: 0 }}
                                    animate={{ width: `${modProgress}%` }}
                                    transition={{ duration: 0.8, delay: 0.1 * idx }}
                                  />
                                </div>
                                <span className="text-xs font-bold" style={{ color: theme.colors.textMuted }}>{modProgress}%</span>
                              </div>
                              <div className="flex items-center justify-between mt-1.5">
                                <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                                  {mod.lessons.filter(l => progress.completedLessons.includes(`${mod.id}:${l.id}`)).length}/{mod.lessons.length} aulas
                                </span>
                                <span className="text-xs font-bold" style={{ color: mod.color }}>
                                  {mod.lessons.length * 50}+ XP
                                </span>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-center gap-1.5">
                              <Lock className="w-3.5 h-3.5" style={{ color: theme.colors.textMuted }} />
                              <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                                {isNext ? "Conclua o módulo anterior para desbloquear" : "Bloqueado"}
                              </span>
                            </div>
                          )}

                          {mod.reviewConcepts.length > 0 && unlocked && (
                            <div className="mt-2 flex items-center gap-1.5 flex-wrap">
                              <span className="text-xs font-semibold" style={{ color: theme.colors.textMuted }}>Revisa:</span>
                              {mod.reviewConcepts.map(c => (
                                <span
                                  key={c}
                                  className="text-xs px-1.5 py-0.5 rounded-md font-medium"
                                  style={{ background: theme.colors.glassCard, color: theme.colors.textMuted }}
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
            background: `linear-gradient(135deg, ${theme.colors.secondary}28, ${theme.colors.primary}18)`,
            border: `1px solid ${theme.colors.secondary}33`,
            backdropFilter: "blur(8px)",
          }}
          data-testid="button-go-dictionary"
        >
          <div className="text-4xl">📚</div>
          <div className="text-left">
            <p className={`${headingFont} font-semibold text-lg`} style={{ color: theme.colors.text }}>
              Dicionário de Negócios
            </p>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              68 palavras com origem e exemplos
            </p>
          </div>
          <ArrowRight className="w-5 h-5 ml-auto" style={{ color: theme.colors.secondary }} />
        </motion.button>
      </main>
    </div>
  );
}
