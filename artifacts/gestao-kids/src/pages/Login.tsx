import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, User, ChevronRight, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

type Mode = "login" | "register";

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: Math.random() * 2.5 + 0.5,
  top: Math.random() * 100,
  left: Math.random() * 100,
  duration: Math.random() * 3 + 2,
  opacity: Math.random() * 0.55 + 0.1,
}));

function AstronautMascot() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      className="w-20 h-20 mx-auto mb-2"
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="50" cy="50" r="38" fill="rgba(167,139,250,0.12)" stroke="#a78bfa" strokeWidth="1.5"/>
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

export default function Login() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    let result: { error?: string };
    if (mode === "login") {
      result = await login(email.trim(), password);
    } else {
      if (name.trim().length < 2) {
        setError("Nome deve ter ao menos 2 letras");
        setLoading(false);
        return;
      }
      result = await register(name.trim(), email.trim(), password);
    }

    if (result.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  const switchMode = (m: Mode) => {
    setMode(m);
    setError("");
    setName("");
    setEmail("");
    setPassword("");
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "#f0e6ff",
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0221 0%, #1a0533 60%, #120228 100%)" }}
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-6 relative z-10"
      >
        <AstronautMascot />
        <h1 className="font-['Fredoka'] font-semibold text-4xl text-white tracking-wide">ZENITU</h1>
        <p className="text-[#9d8ec4] text-sm mt-1">Do zero ao master em negócios 🚀</p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="w-full max-w-sm relative z-10"
      >
        <div
          className="rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        >
          {/* Tabs */}
          <div className="flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {(["login", "register"] as Mode[]).map(m => (
              <button
                key={m}
                onClick={() => switchMode(m)}
                className="flex-1 py-4 text-sm font-extrabold transition-colors"
                style={
                  mode === m
                    ? {
                        color: "#a78bfa",
                        borderBottom: "2px solid #a78bfa",
                        background: "rgba(167,139,250,0.08)",
                      }
                    : { color: "#9d8ec4" }
                }
              >
                {m === "login" ? "Entrar" : "Criar Conta"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <AnimatePresence mode="wait">
              {mode === "register" && (
                <motion.div
                  key="name-field"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-xs font-bold text-[#9d8ec4] mb-1.5 uppercase tracking-wide">
                    Seu Nome
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9d8ec4]" />
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Como se chama?"
                      className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a78bfa] placeholder-[#6b7a9f]"
                      style={inputStyle}
                      autoComplete="name"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="block text-xs font-bold text-[#9d8ec4] mb-1.5 uppercase tracking-wide">
                E-mail
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9d8ec4]" />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a78bfa] placeholder-[#6b7a9f]"
                  style={inputStyle}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#9d8ec4] mb-1.5 uppercase tracking-wide">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9d8ec4]" />
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder={mode === "register" ? "Mínimo 8 caracteres" : "Sua senha"}
                  className="w-full pl-10 pr-10 py-3 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#a78bfa] placeholder-[#6b7a9f]"
                  style={inputStyle}
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(p => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9d8ec4] hover:text-[#f0e6ff]"
                  tabIndex={-1}
                >
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  key="error-message"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 rounded-xl p-3"
                  style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)" }}
                >
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <p className="text-red-300 text-sm font-medium">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl font-extrabold text-white text-base shadow-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                boxShadow: "0 0 20px rgba(167,139,250,0.3)",
              }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  {mode === "login" ? "Entrar" : "Criar minha conta"}
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>

            {mode === "login" && (
              <div className="text-center pt-1">
                <a
                  href="/esqueci-senha"
                  className="text-xs font-semibold text-[#a78bfa] hover:text-[#c4b5fd] transition-colors"
                  onClick={e => { e.preventDefault(); window.location.href = "/esqueci-senha"; }}
                >
                  Esqueci minha senha
                </a>
              </div>
            )}
          </form>

          {mode === "register" && (
            <div className="px-6 pb-5">
              <p className="text-xs text-[#9d8ec4] text-center leading-relaxed">
                🔒 Seus dados são protegidos conforme a{" "}
                <span className="font-semibold text-[#c4b5fd]">LGPD (Lei 13.709/2018)</span>.
                Sua senha nunca é armazenada em texto claro.
              </p>
            </div>
          )}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => switchMode(mode === "login" ? "register" : "login")}
          className="w-full mt-4 py-3 text-[#9d8ec4] text-sm font-semibold hover:text-[#f0e6ff] transition-colors"
        >
          {mode === "login" ? "Não tem conta? Crie agora →" : "Já tem conta? Entre aqui →"}
        </motion.button>
      </motion.div>
    </div>
  );
}
