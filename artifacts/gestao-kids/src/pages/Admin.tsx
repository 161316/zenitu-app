import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import {
  Users, Zap, BookOpen, Trophy, TrendingUp, ArrowLeft, Activity, Medal,
} from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  name: string;
  email: string;
  xp: number;
  badgeCount: number;
  streak: number;
}

interface AdminStats {
  totalUsers: number;
  activeUsersLast7Days: number;
  totalXP: number;
  averageXP: number;
  totalCompletedLessons: number;
  totalCompletedChallenges: number;
  topXpUsers: { xp: string; badges: string[] }[];
  leaderboard: LeaderboardEntry[];
}

function StatCard({
  icon,
  label,
  value,
  sub,
  color,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest">{label}</p>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}18` }}>
          <span style={{ color }}>{icon}</span>
        </div>
      </div>
      <p className="text-3xl font-extrabold text-foreground">{value.toLocaleString("pt-BR")}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </motion.div>
  );
}

export default function Admin() {
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user?.isAdmin) {
      setLocation("/");
      return;
    }
    fetch("/api/admin/stats", { credentials: "include" })
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(data => { setStats(data); setLoading(false); })
      .catch(() => { setError("Erro ao carregar dados."); setLoading(false); });
  }, [user, setLocation]);

  if (!user?.isAdmin) return null;

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-4 pt-8 pb-20 text-white">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Painel administrativo</p>
              <h1 className="text-2xl font-extrabold">Zenitu</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-10 space-y-4">
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-red-600 text-sm font-bold">
            {error}
          </div>
        )}

        {stats && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <StatCard
                icon={<Users className="w-5 h-5" />}
                label="Usuários"
                value={stats.totalUsers}
                sub="cadastrados no total"
                color="#7c3aed"
                delay={0}
              />
              <StatCard
                icon={<Activity className="w-5 h-5" />}
                label="Ativos"
                value={stats.activeUsersLast7Days}
                sub="últimos 7 dias"
                color="#059669"
                delay={0.05}
              />
              <StatCard
                icon={<Zap className="w-5 h-5" />}
                label="XP total"
                value={stats.totalXP}
                sub={`média ${stats.averageXP} XP/usuário`}
                color="#d97706"
                delay={0.1}
              />
              <StatCard
                icon={<BookOpen className="w-5 h-5" />}
                label="Aulas feitas"
                value={stats.totalCompletedLessons}
                sub="por todos os usuários"
                color="#2563eb"
                delay={0.15}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-5 h-5 text-amber-500" />
                <p className="font-extrabold text-foreground">Desafios concluídos</p>
                <span className="ml-auto text-2xl font-extrabold text-amber-500">
                  {stats.totalCompletedChallenges.toLocaleString("pt-BR")}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Total de desafios completados por todos os usuários da plataforma.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
            >
              <p className="font-extrabold text-foreground mb-1">Distribuição de XP</p>
              <p className="text-xs text-muted-foreground mb-4">Top 5 usuários mais avançados (sem identificação)</p>
              <div className="space-y-3">
                {stats.topXpUsers.map((u, i) => {
                  const xp = Number(u.xp);
                  const maxXp = Number(stats.topXpUsers[0]?.xp ?? 1) || 1;
                  const pct = Math.round((xp / maxXp) * 100);
                  return (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-muted-foreground">#{i + 1}</span>
                        <span className="font-extrabold text-foreground">{xp.toLocaleString("pt-BR")} XP</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-400 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${pct}%` }}
                          transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                        />
                      </div>
                    </div>
                  );
                })}
                {stats.topXpUsers.length === 0 && (
                  <p className="text-sm text-muted-foreground text-center py-4">Nenhum usuário com XP ainda.</p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-card-border rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <Medal className="w-5 h-5 text-violet-500" />
                <p className="font-extrabold text-foreground">Ranking de Alunos</p>
                <span className="ml-auto text-xs text-muted-foreground font-semibold">Top {stats.leaderboard.length}</span>
              </div>
              {stats.leaderboard.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">Nenhum aluno com XP ainda.</p>
              ) : (
                <div className="space-y-2">
                  {stats.leaderboard.map((entry) => (
                    <div key={entry.rank} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold shrink-0 ${
                        entry.rank === 1 ? "bg-amber-100 text-amber-700" :
                        entry.rank === 2 ? "bg-slate-100 text-slate-600" :
                        entry.rank === 3 ? "bg-orange-100 text-orange-700" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : `#${entry.rank}`}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-foreground text-sm truncate">{entry.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{entry.email}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-extrabold text-foreground text-sm">{entry.xp.toLocaleString("pt-BR")} XP</p>
                        <p className="text-xs text-muted-foreground">{entry.badgeCount} badge{entry.badgeCount !== 1 ? "s" : ""} · {entry.streak}🔥</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-amber-50 border border-amber-200 rounded-2xl p-4"
            >
              <p className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-1">Privacidade LGPD</p>
              <p className="text-xs text-amber-600">
                O ranking de alunos acima é visível apenas para administradores. O painel de distribuição de XP acima exibe dados anônimos.
              </p>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}
