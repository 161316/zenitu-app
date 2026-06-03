import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen } from "lucide-react";
import { DICTIONARY, type DictionaryWord } from "@/data/dictionary";
import { useLocation } from "wouter";

interface WordPopupProps {
  word: string;
  onClose: () => void;
}

export function WordPopup({ word, onClose }: WordPopupProps) {
  const [, setLocation] = useLocation();
  const entry = DICTIONARY.find(w => w.word.toLowerCase() === word.toLowerCase());

  if (!entry) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        <motion.div
          className="relative bg-card border border-card-border rounded-2xl shadow-2xl w-full max-w-md p-6 z-10"
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 60, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-close-popup"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 mb-4">
            <div className="text-4xl flex-shrink-0">{entry.emoji}</div>
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">{entry.word}</h2>
              <p className="text-sm text-muted-foreground font-medium">{entry.pronunciation}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary/10 rounded-xl p-4">
              <p className="text-foreground font-medium leading-relaxed">{entry.definition}</p>
            </div>

            <div className="bg-muted/60 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wide">Origem ({entry.etymology})</span>
              </div>
              <p className="text-sm text-foreground leading-relaxed">{entry.etymologyDetail}</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Exemplo</p>
              <p className="text-sm text-amber-900 italic leading-relaxed">"{entry.example}"</p>
            </div>

            {entry.relatedWords.length > 0 && (
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Palavras relacionadas</p>
                <div className="flex flex-wrap gap-2">
                  {entry.relatedWords.map(rw => (
                    <span
                      key={rw}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          const related = DICTIONARY.find(w => w.word === rw);
                          if (related) window.dispatchEvent(new CustomEvent('open-word', { detail: rw }));
                        }, 300);
                      }}
                      data-testid={`chip-related-${rw}`}
                    >
                      {rw}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => {
                onClose();
                setLocation(`/dicionario/${encodeURIComponent(entry.word)}`);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition-opacity"
              data-testid="button-view-full-word"
            >
              <BookOpen className="w-4 h-4" />
              Ver tudo sobre esta palavra
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface HighlightedTextProps {
  text: string;
  onWordClick: (word: string) => void;
}

export function HighlightedText({ text, onWordClick }: HighlightedTextProps) {
  const dictWords = DICTIONARY.map(w => w.word);

  const parts: { text: string; isWord: boolean; wordKey?: string }[] = [];
  let remaining = text;

  const pattern = new RegExp(`\\b(${dictWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`, 'gi');

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), isWord: false });
    }
    parts.push({ text: match[0], isWord: true, wordKey: match[1] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), isWord: false });
  }

  return (
    <span>
      {parts.map((part, idx) =>
        part.isWord ? (
          <span
            key={idx}
            className="dict-word"
            onClick={() => onWordClick(part.wordKey!)}
            data-testid={`word-highlight-${part.wordKey}`}
          >
            {part.text}
          </span>
        ) : (
          <span key={idx}>{part.text}</span>
        )
      )}
    </span>
  );
}
