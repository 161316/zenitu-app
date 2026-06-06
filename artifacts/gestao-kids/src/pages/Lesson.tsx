import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, CheckCircle, Star } from "lucide-react";
import { getLessonById, getModuleById } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { useTone } from "@/hooks/useTone";
import { WordPopup, HighlightedText } from "@/components/WordPopup";
import { XPAnimation } from "@/components/XPAnimation";

export default function Lesson() {
  const params = useParams<{ moduleId: string; lessonId: string }>();
  const [, setLocation] = useLocation();
  const { completeLesson, isLessonComplete } = useProgress();
  const { tone } = useTone();

  const mod = getModuleById(params.moduleId);
  const lesson = getLessonById(params.moduleId, params.lessonId);

  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [showXP, setShowXP] = useState(false);
  const [completed, setCompleted] = useState(false);

  const alreadyDone = isLessonComplete(params.moduleId, params.lessonId);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      setSelectedWord(detail);
    };
    window.addEventListener('open-word', handler);
    return () => window.removeEventListener('open-word', handler);
  }, []);

  if (!mod || !lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Aula não encontrada</p>
      </div>
    );
  }

  const isLast = currentParagraph === lesson.content.length - 1;
  const progressPct = ((currentParagraph + 1) / lesson.content.length) * 100;

  const handleNext = () => {
    if (!isLast) {
      setCurrentParagraph(prev => prev + 1);
    } else {
      if (!alreadyDone && !completed) {
        completeLesson(params.moduleId, params.lessonId, lesson.xpReward);
        setShowXP(true);
        setCompleted(true);
      }
    }
  };

  const handleFinish = () => {
    setLocation(`/modulo/${params.moduleId}`);
  };

  const lessonIdx = mod.lessons.findIndex(l => l.id === params.lessonId);
  const nextLesson = mod.lessons[lessonIdx + 1];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 pt-8 pb-6`}>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation(`/modulo/${params.moduleId}`)}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-4"
            data-testid="button-back-module"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar ao módulo</span>
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{mod.emoji} {mod.title}</span>
          </div>
          <h1 className="text-xl font-extrabold text-white leading-tight">{lesson.title}</h1>

          {/* Progress bar */}
          <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <p className="text-white/60 text-xs mt-1">
            {currentParagraph + 1} de {lesson.content.length} partes
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentParagraph}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-card-border rounded-2xl p-6 shadow-sm mb-6"
          >
            <div className="flex items-start gap-3 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 mt-0.5"
                style={{ backgroundColor: mod.color }}
              >
                {currentParagraph + 1}
              </div>
              <p className="text-sm font-semibold text-muted-foreground">
                Parte {currentParagraph + 1}
              </p>
            </div>
            <p className="text-foreground text-lg leading-relaxed font-medium">
              <HighlightedText
                text={lesson.content[currentParagraph]}
                onWordClick={setSelectedWord}
              />
            </p>
            <p className="text-xs text-muted-foreground mt-4 italic">
              Toque nas palavras <span className="dict-word">sublinhadas</span> para ver o significado no dicionário!
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-8">
          {lesson.content.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentParagraph(idx)}
              className={`rounded-full transition-all duration-200 ${
                idx === currentParagraph
                  ? "w-6 h-3"
                  : idx < currentParagraph
                  ? "w-3 h-3"
                  : "w-3 h-3 opacity-30"
              }`}
              style={{ backgroundColor: mod.color }}
              data-testid={`dot-paragraph-${idx}`}
            />
          ))}
        </div>

        {/* Completion or Continue state */}
        {(completed || alreadyDone) && isLast ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-3"
          >
            <div className="rounded-2xl p-5 text-center relative overflow-hidden"
              style={{ background: `${mod.color}15`, border: `1.5px solid ${mod.color}44` }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at top, ${mod.color}18, transparent)` }} />
              <CheckCircle className="w-12 h-12 mx-auto mb-3 relative z-10" style={{ color: mod.color }} />
              <h2 className="text-xl font-extrabold relative z-10" style={{ color: mod.color }}>
                {tone.lessonCompleteTitle}
              </h2>
              <p className="text-sm mt-1 relative z-10 text-foreground/80">
                {tone.lessonCompleteMsg(lesson.xpReward)}
              </p>
              {/* Tone indicator */}
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full relative z-10"
                style={{ background: `${mod.color}22`, border: `1px solid ${mod.color}33` }}
              >
                <span className="text-xs">{tone.emoji}</span>
                <span className="text-xs font-semibold" style={{ color: mod.color }}>Tom {tone.label}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleFinish}
                className="py-4 rounded-2xl border font-bold transition-colors text-sm"
                style={{ borderColor: "var(--border)", color: "var(--foreground)" }}
                data-testid="button-back-to-module"
              >
                {tone.backLabel}
              </button>
              {nextLesson ? (
                <button
                  onClick={() => setLocation(`/aula/${mod.id}/${nextLesson.id}`)}
                  className="py-4 rounded-2xl font-extrabold text-white flex items-center justify-center gap-2 text-sm"
                  style={{ backgroundColor: mod.color }}
                  data-testid="button-next-lesson"
                >
                  {tone.nextLessonLabel}
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setLocation(`/desafio/${mod.id}`)}
                  className="py-4 rounded-2xl font-extrabold text-white flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-sm"
                  data-testid="button-go-challenge"
                >
                  {tone.challengeLabel}
                  <Star className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-5 rounded-2xl font-extrabold text-white text-lg flex items-center justify-center gap-3 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            style={{ backgroundColor: mod.color }}
            data-testid="button-next-paragraph"
          >
            {isLast ? (
              <>
                <CheckCircle className="w-6 h-6" />
                Concluir Aula
              </>
            ) : (
              <>
                Continuar
                <ChevronRight className="w-6 h-6" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Word Popup */}
      {selectedWord && (
        <WordPopup word={selectedWord} onClose={() => setSelectedWord(null)} />
      )}

      {/* XP Animation */}
      {showXP && (
        <XPAnimation amount={lesson.xpReward} onDone={() => setShowXP(false)} />
      )}
    </div>
  );
}
