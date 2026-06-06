import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Search, BookOpen } from "lucide-react";
import { DICTIONARY } from "@/data/dictionary";
import { MODULES } from "@/data/modules";
import { ThemeBackground } from "@/components/ThemeBackground";

export default function Dictionary() {
  const [, setLocation] = useLocation();
  const [search, setSearch] = useState("");
  const [selectedModule, setSelectedModule] = useState<string>("all");

  const filtered = useMemo(() => {
    return DICTIONARY.filter(w => {
      const matchesSearch =
        !search ||
        w.word.toLowerCase().includes(search.toLowerCase()) ||
        w.definition.toLowerCase().includes(search.toLowerCase());
      const matchesModule = selectedModule === "all" || w.moduleId === selectedModule;
      return matchesSearch && matchesModule;
    }).sort((a, b) => a.word.localeCompare(b.word, "pt-BR"));
  }, [search, selectedModule]);

  return (
    <ThemeBackground className="pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 px-4 pt-8 pb-16 text-white">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="text-5xl">📚</div>
            <div>
              <h1 className="text-2xl font-extrabold">Dicionário de Negócios</h1>
              <p className="text-white/80 text-sm mt-1">{DICTIONARY.length} palavras com origem e exemplos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-2xl mx-auto px-4 -mt-8">
        <div className="bg-card border border-card-border rounded-2xl p-4 shadow-md mb-4">
          <div className="relative mb-3">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Buscar palavras..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-muted rounded-xl text-foreground placeholder:text-muted-foreground font-medium outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              data-testid="input-search-dictionary"
            />
          </div>

          {/* Scrollable filter row - no clip */}
          <div
            className="flex gap-2 pb-2"
            style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
          >
            <button
              onClick={() => setSelectedModule("all")}
              className={`flex-none px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                selectedModule === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              data-testid="filter-all"
            >
              Todos
            </button>
            {MODULES.map(mod => (
              <button
                key={mod.id}
                onClick={() => setSelectedModule(mod.id)}
                className={`flex-none px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedModule === mod.id
                    ? "text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                style={selectedModule === mod.id ? { backgroundColor: mod.color } : {}}
                data-testid={`filter-module-${mod.id}`}
              >
                {mod.emoji} {mod.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-3 px-1">
          {filtered.length} {filtered.length === 1 ? "palavra encontrada" : "palavras encontradas"}
        </p>

        <div className="grid gap-3">
          {filtered.map((word, idx) => {
            const mod = MODULES.find(m => m.id === word.moduleId);
            return (
              <motion.button
                key={word.word}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.02 }}
                onClick={() => setLocation(`/dicionario/${encodeURIComponent(word.word)}`)}
                className="w-full text-left bg-card border border-card-border rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                data-testid={`card-word-${word.word}`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl flex-shrink-0">{word.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-extrabold text-foreground text-lg">{word.word}</h3>
                      <span className="text-xs text-muted-foreground font-medium">{word.pronunciation}</span>
                      {mod && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-bold text-white"
                          style={{ backgroundColor: mod.color + "CC" }}
                        >
                          {mod.emoji}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                      {word.definition.split(".")[0]}.
                    </p>
                    <p className="text-xs text-primary font-semibold mt-1">
                      Origem: {word.etymology}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-bold text-foreground">Nenhuma palavra encontrada</p>
              <p className="text-sm text-muted-foreground mt-1">Tente outro termo ou filtro</p>
            </div>
          )}
        </div>
      </div>
    </ThemeBackground>
  );
}
