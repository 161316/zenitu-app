import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Flame, Trophy, BookOpen, CheckCircle, Zap, LogOut } from "lucide-react";
import { useProgress, ALL_BADGES } from "@/hooks/useProgress";
import { useAuth } from "@/hooks/useAuth";
import { MODULES } from "@/data/modules";

export default function Profile() {
  const [, setLocation] = useLocation();
  const { user, logout } = useAuth();
  const {
    progress,
    levelInfo,
    unlockedBadges,
    getModuleProgress,
    totalLessons,
  } = useProgress();

  const handleLogout = async () => {
    await logout();
  };

  const completedModules = MODULES.filter(mod =>
    mod.lessons.every(l => progress.completedLessons.includes(`${mod.id}:${l.id}`))
  ).length;

  const xpToNext = levelInfo.nextXP - progress.xp;
  const xpInLevel = progress.xp - (levelInfo.level === 1 ? 0 : [0,100,250,500,800,1200,1600][levelInfo.level - 1]);
  const xpNeededForLevel = levelInfo.nextXP - (levelInfo.level === 1 ? 0 : [0,100,250,500,800,1200,1600][levelInfo.level - 1]);
  const levelPct = Math.min(100, Math.round((xpInLevel / xpNeededForLevel) * 100));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-violet-600 to-indigo-700 px-4 pt-8 pb-20 text-white">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </button>

          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl mx-auto mb-4">
              🏆
            </div>
            <h1 className="text-2xl font-extrabold">{user?.name ?? "Meu Perfil"}</h1>
            <p className="text-violet-200 mt-1">{user?.email}</p>
            <p className="text-violet-100 font-bold mt-1">Nível {levelInfo.level} — {levelInfo.title}</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-10">
        {/* Level Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-card-border rounded-2xl p-6 shadow-md mb-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest">Nível atual</p>
              <h2 className="text-2xl font-extrabold text-foreground">{levelInfo.level} — {levelInfo.title}</h2>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          <div className="mb-2 flex justify-between text-sm font-bold">
            <span className="text-muted-foreground">{progress.xp} XP</span>
            <span className="text-primary">{levelInfo.nextXP} XP</span>
          </div>
          <div className="h-4 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-violet-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${levelPct}%` }}
              transition={{ duration: 1.2 }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {levelInfo.level < 7 ? `Faltam ${xpToNext} XP para o próximo nível` : "Nível máximo atingido!"}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-3 mb-4"
        >
          {[
            { icon: Star, label: "XP Total", value: progress.xp, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-200" },
            { icon: Flame, label: "Dias seguidos", value: progress.streak, color: "text-orange-500", bg: "bg-orange-50", border: "border-orange-200" },
            { icon: BookOpen, label: "Aulas feitas", value: `${progress.completedLessons.length}/${totalLessons}`, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-200" },
            { icon: Trophy, label: "Módulos completos", value: `${completedModules}/${MODULES.length}`, color: "text-violet-500", bg: "bg-violet-50", border: "border-violet-200" },
          ].map((stat, idx) => (
            <div key={idx} className={`${stat.bg} border ${stat.border} rounded-2xl p-4`}>
              <stat.icon className={`w-6 h-6 ${stat.color} mb-2`} />
              <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Desafios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-card-border rounded-2xl p-5 mb-4"
        >
          <h2 className="font-extrabold text-foreground mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            Desafios Concluídos
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {MODULES.map(mod => {
              const done = progress.completedChallenges.includes(mod.id);
              return (
                <div
                  key={mod.id}
                  className={`rounded-xl p-2 text-center transition-all ${done ? "opacity-100" : "opacity-30"}`}
                  title={mod.title}
                >
                  <div className="text-2xl mb-1">{mod.emoji}</div>
                  {done && <div className="text-xs font-bold text-green-600">✓</div>}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-card-border rounded-2xl p-5 mb-4"
        >
          <h2 className="font-extrabold text-foreground mb-1">Conquistas</h2>
          <p className="text-sm text-muted-foreground mb-4">
            {unlockedBadges.length} de {ALL_BADGES.length} desbloqueadas
          </p>

          <div className="grid grid-cols-3 gap-3">
            {ALL_BADGES.map(badge => {
              const unlocked = progress.badges.includes(badge.id);
              return (
                <motion.div
                  key={badge.id}
                  whileHover={{ scale: 1.05 }}
                  className={`rounded-2xl p-3 text-center border transition-all ${
                    unlocked
                      ? "border-primary/30 bg-primary/5"
                      : "border-border bg-muted opacity-40 grayscale"
                  }`}
                  title={badge.description}
                  data-testid={`badge-${badge.id}`}
                >
                  <div className="text-3xl mb-1">{badge.emoji}</div>
                  <p className={`text-xs font-extrabold leading-tight ${unlocked ? "text-foreground" : "text-muted-foreground"}`}>
                    {badge.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Module Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="bg-card border border-card-border rounded-2xl p-5"
        >
          <h2 className="font-extrabold text-foreground mb-4">Progresso por Módulo</h2>
          <div className="space-y-4">
            {MODULES.map(mod => {
              const prog = getModuleProgress(mod.id);
              return (
                <div key={mod.id}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{mod.emoji}</span>
                      <span className="text-sm font-bold text-foreground truncate">{mod.title}</span>
                    </div>
                    <span className="text-xs font-extrabold" style={{ color: mod.color }}>{prog}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: mod.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${prog}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Logout Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 mt-2 mb-6 py-3 rounded-2xl border border-red-200 text-red-500 font-bold hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sair da conta
        </motion.button>
      </div>
    </div>
  );
}
