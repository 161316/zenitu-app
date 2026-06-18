import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp, Search, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { LEIS, CATEGORIAS_LEIS, type LeiCategoria, type Lei } from "@/data/leis";

function LeiCard({ lei, theme, headingFont }: { lei: Lei; theme: ReturnType<typeof useTheme>["theme"]; headingFont: string }) {
  const [expanded, setExpanded] = useState(false);
  const cat = CATEGORIAS_LEIS[lei.categoria];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden"
      style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}` }}
    >
      <button
        className="w-full text-left p-4 flex items-start gap-3"
        onClick={() => setExpanded(v => !v)}
      >
        <span className="text-2xl flex-shrink-0 mt-0.5">{cat.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full"
              style={{ background: `${cat.color}22`, color: cat.color }}
            >
              {cat.label}
            </span>
            <span className="text-xs font-mono" style={{ color: theme.colors.textMuted }}>
              {lei.numero}
            </span>
          </div>
          <p className={`${headingFont} font-semibold text-sm leading-tight`} style={{ color: theme.colors.text }}>
            {lei.nome}
          </p>
          <p className="text-xs mt-1 line-clamp-2" style={{ color: theme.colors.textMuted }}>
            {lei.resumo}
          </p>
        </div>
        <div className="flex-shrink-0 mt-1">
          {expanded
            ? <ChevronUp className="w-4 h-4" style={{ color: theme.colors.textMuted }} />
            : <ChevronDown className="w-4 h-4" style={{ color: theme.colors.textMuted }} />}
        </div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-4 border-t" style={{ borderColor: theme.colors.glassCardBorder }}>
              <div className="pt-3">
                <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.colors.textMuted }}>O que regula</p>
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.text }}>{lei.oQueRegula}</p>
              </div>

              {lei.oQueNaoPode.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#ef4444" }}>🚫 O que é proibido</p>
                  <ul className="space-y-2">
                    {lei.oQueNaoPode.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-400 text-xs mt-0.5 flex-shrink-0">✕</span>
                        <p className="text-xs leading-relaxed" style={{ color: theme.colors.text }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {lei.multas.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "#f59e0b" }}>⚠️ Multas e penalidades</p>
                  <ul className="space-y-2">
                    {lei.multas.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 text-xs mt-0.5 flex-shrink-0">→</span>
                        <p className="text-xs leading-relaxed" style={{ color: theme.colors.text }}>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div
                className="rounded-xl px-3 py-2"
                style={{ background: `${theme.colors.primary}11` }}
              >
                <p className="text-xs font-semibold" style={{ color: theme.colors.textMuted }}>
                  🏛️ Fiscalizado por: <span style={{ color: theme.colors.text }}>{lei.orgaoFiscalizador}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function LegalRefs() {
  const [, setLocation] = useLocation();
  const { theme } = useTheme();
  const headingFont = "font-['Fredoka']";

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<LeiCategoria | "todas">("todas");

  const categories = Object.entries(CATEGORIAS_LEIS) as [LeiCategoria, { label: string; emoji: string; color: string }][];

  const filtered = LEIS.filter(lei => {
    const matchesCategory = activeCategory === "todas" || lei.categoria === activeCategory;
    const q = search.toLowerCase();
    const matchesSearch = !search ||
      lei.nome.toLowerCase().includes(q) ||
      lei.numero.toLowerCase().includes(q) ||
      lei.resumo.toLowerCase().includes(q) ||
      lei.oQueRegula.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen" style={{ background: theme.bgGradient }}>
      {/* Header */}
      <div
        className="sticky top-0 z-10 px-4 pt-safe"
        style={{ background: theme.bgGradient, borderBottom: `1px solid ${theme.colors.glassCardBorder}` }}
      >
        <div className="max-w-2xl mx-auto flex items-center gap-3 py-4">
          <button
            onClick={() => setLocation("/")}
            className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:brightness-110"
            style={{ background: theme.colors.glassCard }}
          >
            <ArrowLeft className="w-5 h-5" style={{ color: theme.colors.text }} />
          </button>
          <div className="flex-1">
            <p className={`${headingFont} font-bold text-lg leading-tight`} style={{ color: theme.colors.text }}>
              ⚖️ Legislação Empresarial
            </p>
            <p className="text-xs" style={{ color: theme.colors.textMuted }}>
              {LEIS.length} leis essenciais para gestores
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto pb-3">
          <div
            className="flex items-center gap-2 rounded-xl px-3 py-2.5"
            style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}` }}
          >
            <Search className="w-4 h-4 flex-shrink-0" style={{ color: theme.colors.textMuted }} />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar por lei, número ou tema..."
              className="flex-1 bg-transparent text-sm outline-none"
              style={{ color: theme.colors.text }}
            />
            {search && (
              <button onClick={() => setSearch("")}>
                <X className="w-4 h-4" style={{ color: theme.colors.textMuted }} />
              </button>
            )}
          </div>
        </div>
      </div>

      <main className="max-w-2xl mx-auto px-4 pb-24 space-y-5 pt-4">
        {/* Category pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4">
          <button
            onClick={() => setActiveCategory("todas")}
            className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: activeCategory === "todas" ? theme.colors.primary : theme.colors.glassCard,
              color: activeCategory === "todas" ? "#fff" : theme.colors.text,
              border: `1px solid ${activeCategory === "todas" ? "transparent" : theme.colors.glassCardBorder}`,
            }}
          >
            Todas ({LEIS.length})
          </button>
          {categories.map(([id, cat]) => {
            const count = LEIS.filter(l => l.categoria === id).length;
            if (count === 0) return null;
            const isActive = activeCategory === id;
            return (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                style={{
                  background: isActive ? cat.color : theme.colors.glassCard,
                  color: isActive ? "#fff" : theme.colors.text,
                  border: `1px solid ${isActive ? "transparent" : theme.colors.glassCardBorder}`,
                }}
              >
                {cat.emoji} {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-4 flex items-start gap-3"
          style={{ background: `${theme.colors.primary}11`, border: `1px solid ${theme.colors.primary}22` }}
        >
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="text-xs leading-relaxed" style={{ color: theme.colors.textMuted }}>
            Este guia tem fins educativos e apresenta as principais leis do ambiente de negócios brasileiro. Para aplicação em casos concretos, consulte sempre um advogado qualificado.
          </p>
        </div>

        {/* Laws list */}
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-semibold" style={{ color: theme.colors.text }}>Nenhuma lei encontrada</p>
            <p className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>Tente outra busca ou categoria</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(lei => (
              <LeiCard key={lei.id} lei={lei} theme={theme} headingFont={headingFont} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
