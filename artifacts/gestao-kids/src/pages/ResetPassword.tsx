import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";
import { motion } from "framer-motion";
import { KeyRound, CheckCircle, XCircle } from "lucide-react";

export default function ResetPassword() {
  const [, setLocation] = useLocation();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const token = params.get("token") ?? "";

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token || token.length !== 64) {
      setError("Link inválido ou expirado. Solicite um novo.");
    }
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password !== confirm) { setError("As senhas não coincidem."); return; }
    if (password.length < 8) { setError("A senha deve ter ao menos 8 caracteres."); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Erro ao redefinir senha"); }
      else { setDone(true); }
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 to-purple-800 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8"
      >
        {done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-2">Senha redefinida!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Sua senha foi atualizada com sucesso. Faça login com a nova senha.
            </p>
            <button
              onClick={() => setLocation("/login")}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-extrabold py-3.5 rounded-2xl text-sm"
            >
              Ir para o login
            </button>
          </motion.div>
        ) : error && !token ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-2">Link inválido</h2>
            <p className="text-sm text-muted-foreground mb-6">{error}</p>
            <button
              onClick={() => setLocation("/esqueci-senha")}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-extrabold py-3.5 rounded-2xl text-sm"
            >
              Solicitar novo link
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <KeyRound className="w-7 h-7 text-violet-600" />
              </div>
              <h2 className="text-xl font-extrabold text-foreground">Nova senha</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Escolha uma senha segura para sua conta.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-foreground uppercase tracking-widest mb-1.5">
                  Nova senha
                </label>
                <input
                  type="password"
                  required
                  autoFocus
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Mínimo 8 caracteres"
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-foreground uppercase tracking-widest mb-1.5">
                  Confirmar senha
                </label>
                <input
                  type="password"
                  required
                  value={confirm}
                  onChange={e => setConfirm(e.target.value)}
                  placeholder="Repita a nova senha"
                  className="w-full bg-muted rounded-xl px-4 py-3 text-sm font-semibold text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              {error && (
                <p className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:opacity-60 text-white font-extrabold py-3.5 rounded-2xl transition-all text-sm shadow-lg shadow-violet-500/30"
              >
                {loading ? "Salvando..." : "Redefinir senha"}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}
