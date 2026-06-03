import { useLocation, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { DICTIONARY } from "@/data/dictionary";
import { MODULES } from "@/data/modules";

export default function WordDetail() {
  const params = useParams<{ word: string }>();
  const [, setLocation] = useLocation();
  const word = decodeURIComponent(params.word);
  const entry = DICTIONARY.find(w => w.word.toLowerCase() === word.toLowerCase());
  const mod = MODULES.find(m => m.id === entry?.moduleId);

  if (!entry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Palavra não encontrada</p>
      </div>
    );
  }

  const relatedEntries = entry.relatedWords
    .map(rw => DICTIONARY.find(w => w.word === rw))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
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
          {/* Definition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-card-border rounded-2xl p-6 shadow-sm"
          >
            <h2 className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-3">Definição</h2>
            <p className="text-foreground text-base leading-relaxed font-medium">{entry.definition}</p>
          </motion.div>

          {/* Etymology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-6"
          >
            <h2 className="text-xs font-extrabold text-primary uppercase tracking-widest mb-3">
              Origem da Palavra — {entry.etymology}
            </h2>
            <p className="text-foreground text-sm leading-relaxed">{entry.etymologyDetail}</p>
          </motion.div>

          {/* Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-6"
          >
            <h2 className="text-xs font-extrabold text-amber-700 uppercase tracking-widest mb-3">Exemplo na Prática</h2>
            <p className="text-amber-900 text-sm leading-relaxed italic">"{entry.example}"</p>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-violet-50 border border-violet-200 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-violet-600" />
              <h2 className="text-xs font-extrabold text-violet-700 uppercase tracking-widest">Curiosidade!</h2>
            </div>
            <p className="text-violet-900 text-sm leading-relaxed">{entry.funFact}</p>
          </motion.div>

          {/* Related Words */}
          {relatedEntries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-card border border-card-border rounded-2xl p-6"
            >
              <h2 className="text-xs font-extrabold text-muted-foreground uppercase tracking-widest mb-4">Palavras Relacionadas</h2>
              <div className="space-y-3">
                {relatedEntries.map(related => related && (
                  <button
                    key={related.word}
                    onClick={() => setLocation(`/dicionario/${encodeURIComponent(related.word)}`)}
                    className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
                    data-testid={`button-related-${related.word}`}
                  >
                    <span className="text-2xl">{related.emoji}</span>
                    <div>
                      <p className="font-extrabold text-foreground">{related.word}</p>
                      <p className="text-xs text-muted-foreground line-clamp-1">{related.definition.split(".")[0]}.</p>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to module */}
          {mod && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
