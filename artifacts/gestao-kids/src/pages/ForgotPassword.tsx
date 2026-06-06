import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Erro ao enviar"); }
      else { setSent(true); }
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
        <button
          onClick={() => setLocation("/login")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao login
        </button>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-2">E-mail enviado!</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se esse e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha em breve.
            </p>
            <p className="text-xs text-muted-foreground mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3">
              Verifique também sua pasta de spam caso não encontre.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-violet-600" />
              </div>
              <h2 className="text-xl font-extrabold text-foreground">Recuperar senha</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Digite seu e-mail e enviaremos um link para redefinir sua senha.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-foreground uppercase tracking-widest mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  required
                  autoFocus
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
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
                {loading ? "Enviando..." : "Enviar link de recuperação"}
              </button>
            </form>
          </>
        )}
      </motion.div>

      <p className="text-white/50 text-xs text-center mt-6 max-w-xs">
        O link expira em 15 minutos por segurança. Nunca compartilhe o link com ninguém.
      </p>
    </div>
  );
}
