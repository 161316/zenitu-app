import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Lightbulb, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { DICTIONARY } from "@/data/dictionary";
import { MODULES } from "@/data/modules";

function RelatedWordCard({ rw }: { rw: string }) {
  const [, setLocation] = useLocation();
  const [expanded, setExpanded] = useState(true);
  const related = DICTIONARY.find(w => w.word.toLowerCase() === rw.toLowerCase());

  if (!related) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border">
        <span className="text-2xl flex-shrink-0">📖</span>
        <div>
          <p className="font-extrabold text-foreground">{rw}</p>
          <p className="text-xs text-muted-foreground">Conceito do universo de negócios</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-2 border-border rounded-2xl overflow-hidden bg-card">
      <div className="flex items-center gap-3 p-4">
        <span className="text-3xl flex-shrink-0">{related.emoji}</span>
        <div className="flex-1 min-w-0">
          <p className="font-extrabold text-foreground text-base">{related.word}</p>
          <p className="text-xs text-muted-foreground">{related.pronunciation}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setLocation(`/dicionario/${encodeURIComponent(related.word)}`)}
            className="text-xs font-bold text-primary hover:underline"
            data-testid={`button-related-${rw}`}
          >
            Ver página →
          </button>
          <button
            onClick={() => setExpanded(e => !e)}
            className="p-1 rounded-lg hover:bg-muted transition-colors"
          >
            {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3 border-t border-border pt-3">
              <div>
                <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-1">Definição</p>
                <p className="text-sm text-foreground leading-relaxed">{related.definition}</p>
              </div>
              <div>
                <p className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-1">Origem — {related.etymology}</p>
                <p className="text-sm text-foreground/80 leading-relaxed">{related.etymologyDetail}</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-1">Exemplo na prática</p>
                <p className="text-sm text-amber-900 italic leading-relaxed">"{related.example}"</p>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-violet-600" />
                  <p className="text-xs font-extrabold text-violet-700 uppercase tracking-widest">Curiosidade</p>
                </div>
                <p className="text-sm text-violet-900 leading-relaxed">{related.funFact}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WordDetail() {
  const params = useParams<{ word: string }>();
  const [, setLocation] = useLocation();
  const word = decodeURIComponent(params.word);
  const entry = DICTIONARY.find(w => w.word.toLowerCase() === word.toLowerCase());
  const mod = MODULES.find(m => m.id === entry?.moduleId);

  if (!entry) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <BookOpen className="w-16 h-16 text-muted-foreground" />
        <p className="text-lg font-bold text-foreground">Palavra não encontrada</p>
        <p className="text-sm text-muted-foreground">Esta palavra ainda não está no dicionário.</p>
        <button
          onClick={() => setLocation("/dicionario")}
          className="mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm"
        >
          Ver Dicionário
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      <div
        className="px-4 pt-8 pb-20 text-white"
        style={{
          background: mod
            ? `linear-gradient(135deg, ${mod.color}, ${mod.color}CC)`
            : "linear-gradient(135deg, #6C3CE1, #9333ea)"
        }}
      >
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/dicionario")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            data-testid="button-back-dictionary"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Dicionário</span>
          </button>

          <div className="flex items-center gap-5">
            <div className="text-6xl">{entry.emoji}</div>
            <div>
              <h1 className="text-3xl font-extrabold leading-tight">{entry.word}</h1>
              <p className="text-white/70 font-medium mt-1">{entry.pronunciation}</p>
              {mod && (
                <span className="inline-block mt-2 text-xs bg-white/20 px-3 py-1 rounded-full font-bold">
                  {mod.emoji} {mod.title}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-10">
        <div className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-3">Definição</h2>
            <p className="text-foreground text-base leading-relaxed font-medium">{entry.definition}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <h2 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-3">
              Origem da Palavra — {entry.etymology}
            </h2>
            <p className="text-foreground text-sm leading-relaxed">{entry.etymologyDetail}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.13 }} className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h2 className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-3">Exemplo na Prática</h2>
            <p className="text-amber-900 text-sm leading-relaxed italic">"{entry.example}"</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-violet-600" />
              <h2 className="text-xs font-extrabold text-violet-700 uppercase tracking-widest">Curiosidade!</h2>
            </div>
            <p className="text-violet-900 text-sm leading-relaxed">{entry.funFact}</p>
          </motion.div>

          {entry.relatedWords.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.23 }} className="bg-card border border-border rounded-2xl p-6">
              <h2 className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-4">
                Palavras Relacionadas — texto completo
              </h2>
              <div className="space-y-3">
                {entry.relatedWords.map(rw => (
                  <RelatedWordCard key={rw} rw={rw} />
                ))}
              </div>
            </motion.div>
          )}

          {mod && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              onClick={() => setLocation(`/modulo/${mod.id}`)}
              className="w-full rounded-2xl p-5 text-white flex items-center gap-3"
              style={{ background: `linear-gradient(135deg, ${mod.color}, ${mod.color}BB)` }}
              data-testid="button-go-to-module"
            >
              <span className="text-3xl">{mod.emoji}</span>
              <div className="text-left">
                <p className="font-extrabold">Aprender mais sobre isto</p>
                <p className="text-white/80 text-sm">{mod.title}</p>
              </div>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
