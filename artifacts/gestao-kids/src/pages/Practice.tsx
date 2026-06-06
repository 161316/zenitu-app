import { useState, useRef, useCallback } from "react";
import { useLocation, useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, ChevronRight, Lightbulb, Send, Loader2, RotateCcw } from "lucide-react";
import { getModuleById } from "@/data/modules";
import { getPracticesByModule, type Practice } from "@/data/practices";
import { useProgress } from "@/hooks/useProgress";
import { XPAnimation } from "@/components/XPAnimation";

type Phase = "intro" | "question" | "feedback" | "done";

function AIFeedback({ question, answer, moduleTitle, lessonTitle, onDone, color }: {
  question: string;
  answer: string;
  moduleTitle: string;
  lessonTitle: string;
  onDone: () => void;
  color: string;
}) {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchFeedback = useCallback(async () => {
    setLoading(true);
    setError(false);
    setFeedback("");
    try {
      const res = await fetch("/api/correction", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          studentAnswer: answer,
          moduleTitle,
          lessonTitle,
          questionType: "written",
        }),
      });

      if (!res.ok) {
        setError(true);
        setLoading(false);
        return;
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) { setError(true); setLoading(false); return; }

      setLoading(false);
      let buf = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            try {
              const json = JSON.parse(line.slice(6));
              if (json.content) setFeedback(prev => prev + json.content);
            } catch {}
          }
        }
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  }, [question, answer, moduleTitle, lessonTitle]);

  useState(() => { fetchFeedback(); });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-bold">
            🧑‍🏫
          </div>
          <div>
            <p className="font-extrabold text-violet-800 text-sm">Seu Tutor</p>
            <p className="text-violet-500 text-xs">Guiando seu raciocínio</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 py-4">
            <Loader2 className="w-5 h-5 text-violet-500 animate-spin" />
            <p className="text-violet-600 text-sm font-medium">Analisando sua resposta...</p>
          </div>
        ) : error ? (
          <div className="space-y-3">
            <p className="text-red-600 text-sm">Não consegui conectar. Tente novamente.</p>
            <button
              onClick={fetchFeedback}
              className="flex items-center gap-2 text-violet-600 text-sm font-bold"
            >
              <RotateCcw className="w-4 h-4" /> Tentar de novo
            </button>
          </div>
        ) : (
          <div className="text-violet-900 text-sm leading-relaxed whitespace-pre-wrap font-medium">
            {feedback}
          </div>
        )}
      </div>

      {!loading && !error && feedback && (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onDone}
          className="w-full py-4 rounded-2xl font-extrabold text-white flex items-center justify-center gap-2"
          style={{ backgroundColor: color }}
        >
          Continuar
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      )}
    </motion.div>
  );
}

function MultipleChoiceQuestion({ practice, color, onAnswer }: {
  practice: Practice;
  color: string;
  onAnswer: (correct: boolean, selected: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
    onAnswer(selected === practice.correct, selected);
  };

  const isCorrect = selected === practice.correct;

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {practice.options!.map((option, idx) => {
          let style = "border-border bg-card text-foreground hover:border-primary/50";
          if (confirmed) {
            if (option === practice.correct) style = "border-green-500 bg-green-50 text-green-800";
            else if (option === selected) style = "border-red-400 bg-red-50 text-red-800";
          } else if (option === selected) {
            style = "border-primary bg-primary/10 text-primary";
          }

          return (
            <motion.button
              key={option}
              onClick={() => !confirmed && setSelected(option)}
              whileTap={!confirmed ? { scale: 0.98 } : {}}
              disabled={confirmed}
              className={`w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all duration-150 flex items-center gap-3 ${style}`}
            >
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                confirmed && option === practice.correct
                  ? "border-green-500 bg-green-500 text-white"
                  : confirmed && option === selected && !isCorrect
                  ? "border-red-400 bg-red-400 text-white"
                  : option === selected
                  ? "border-primary bg-primary text-white"
                  : "border-border text-muted-foreground"
              }`}>
                {confirmed && option === practice.correct
                  ? <CheckCircle className="w-4 h-4" />
                  : String.fromCharCode(65 + idx)}
              </div>
              <span className="text-sm">{option}</span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {confirmed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className={`rounded-2xl p-4 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}
          >
            <p className={`font-extrabold text-sm mb-1 ${isCorrect ? "text-green-800" : "text-amber-800"}`}>
              {isCorrect ? "✅ Correto! Muito bem!" : "💡 Pensa comigo..."}
            </p>
            <p className={`text-sm leading-relaxed ${isCorrect ? "text-green-700" : "text-amber-700"}`}>
              {practice.hint}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {!confirmed && (
        <div className="space-y-2">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 text-amber-600 text-sm font-semibold"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? "Esconder dica" : "Ver dica"}
          </button>
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-amber-50 border border-amber-200 rounded-xl p-3"
              >
                <p className="text-amber-700 text-sm leading-relaxed">{practice.hint}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={handleConfirm}
            disabled={!selected}
            className="w-full py-4 rounded-2xl font-extrabold text-white disabled:opacity-40 flex items-center justify-center gap-2"
            style={{ backgroundColor: color }}
          >
            Confirmar resposta
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}

function WrittenQuestion({ practice, color, moduleTitle, lessonTitle, onAnswer }: {
  practice: Practice;
  color: string;
  moduleTitle: string;
  lessonTitle: string;
  onAnswer: () => void;
}) {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  if (submitted) {
    return (
      <div className="space-y-4">
        <div className="bg-card border border-border rounded-2xl p-4">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">Sua resposta</p>
          <p className="text-sm text-foreground leading-relaxed">{answer}</p>
        </div>
        <AIFeedback
          question={practice.question}
          answer={answer}
          moduleTitle={moduleTitle}
          lessonTitle={lessonTitle}
          onDone={onAnswer}
          color={color}
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <button
          onClick={() => setShowHint(!showHint)}
          className="flex items-center gap-2 text-amber-600 text-sm font-semibold"
        >
          <Lightbulb className="w-4 h-4" />
          {showHint ? "Esconder orientação" : "Ver orientação"}
        </button>
        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-amber-50 border border-amber-200 rounded-xl p-3"
            >
              <p className="text-amber-700 text-sm leading-relaxed font-medium">{practice.hint}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <textarea
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Escreva sua resposta aqui. Seja detalhado — quanto mais você explicar, melhor o tutor pode te guiar..."
        className="w-full h-40 p-4 rounded-2xl border border-border text-sm font-medium resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card text-foreground"
      />
      <p className="text-xs text-muted-foreground text-right">{answer.length} caracteres</p>

      <button
        onClick={() => setSubmitted(true)}
        disabled={answer.trim().length < 20}
        className="w-full py-4 rounded-2xl font-extrabold text-white disabled:opacity-40 flex items-center justify-center gap-2"
        style={{ backgroundColor: color }}
      >
        <Send className="w-5 h-5" />
        Enviar para o tutor
      </button>
      {answer.trim().length < 20 && answer.length > 0 && (
        <p className="text-xs text-muted-foreground text-center">Escreva um pouco mais para poder enviar</p>
      )}
    </div>
  );
}

export default function Practice() {
  const params = useParams<{ moduleId: string }>();
  const [, setLocation] = useLocation();
  const mod = getModuleById(params.moduleId);
  const practices = getPracticesByModule(params.moduleId);
  const { completeLesson, isLessonComplete } = useProgress();

  const PRACTICE_LESSON_ID = "praticas";

  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<Phase>("intro");
  const [correctCount, setCorrectCount] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [showXP, setShowXP] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const alreadyDone = isLessonComplete(params.moduleId ?? "", PRACTICE_LESSON_ID);

  if (!mod || practices.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Práticas não disponíveis ainda para este módulo.</p>
          <button
            onClick={() => setLocation(`/modulo/${params.moduleId}`)}
            className="text-primary font-bold"
          >
            Voltar ao módulo
          </button>
        </div>
      </div>
    );
  }

  const practice = practices[current];

  const handleMultipleAnswer = (correct: boolean) => {
    const xp = correct ? practice.xpReward : Math.floor(practice.xpReward * 0.1);
    if (correct) setCorrectCount(c => c + 1);
    setTotalXP(prev => prev + xp);
    setTimeout(() => setPhase("feedback"), 1500);
  };

  const handleWrittenDone = () => {
    setTotalXP(prev => prev + practice.xpReward);
    setPhase("feedback");
  };

  const handleNext = () => {
    if (current < practices.length - 1) {
      setCurrent(c => c + 1);
      setPhase("question");
    } else {
      if (!alreadyDone) {
        completeLesson(params.moduleId ?? "", PRACTICE_LESSON_ID, totalXP);
        setEarnedXP(totalXP);
        setShowXP(true);
      }
      setPhase("done");
    }
  };

  const progressPct = ((current) / practices.length) * 100;

  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className={`bg-gradient-to-br ${mod.bgGradient} px-4 pt-10 pb-20 text-center`}>
          <button
            onClick={() => setLocation(`/modulo/${mod.id}`)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </button>
          <div className="text-6xl mb-4">🧠</div>
          <h1 className="text-3xl font-extrabold text-white">Sessão de Prática</h1>
          <p className="text-white/80 text-lg mt-2">{mod.title}</p>
        </div>

        <div className="max-w-md mx-auto px-4 -mt-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl shadow-lg p-6 mb-5"
          >
            <h2 className="text-xl font-extrabold text-foreground mb-4">O que te espera:</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 text-sm">🎯</div>
                <div>
                  <p className="font-bold text-sm">{practices.filter(p => p.type !== "written").length} questões objetivas</p>
                  <p className="text-xs text-muted-foreground">Múltipla escolha e verdadeiro/falso com raciocínio crítico</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-sm">✍️</div>
                <div>
                  <p className="font-bold text-sm">{practices.filter(p => p.type === "written").length} questão dissertativa</p>
                  <p className="text-xs text-muted-foreground">Respondida por escrito e corrigida pelo seu tutor de IA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-sm">🧑‍🏫</div>
                <div>
                  <p className="font-bold text-sm">Correção guiada — nunca damos a resposta</p>
                  <p className="text-xs text-muted-foreground">O tutor mostra o caminho para você descobrir a resposta certa</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl p-4 mb-5 flex items-center gap-3"
          >
            <div className="text-2xl">⚡</div>
            <div>
              <p className="font-extrabold text-white">Até {practices.reduce((a, p) => a + p.xpReward, 0)} XP disponíveis</p>
              <p className="text-white/80 text-xs">Ganhe mais acertando sem dicas!</p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setPhase("question")}
            className="w-full py-5 rounded-2xl font-extrabold text-white text-lg flex items-center justify-center gap-3 shadow-md"
            style={{ backgroundColor: mod.color }}
          >
            Começar prática
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    const score = Math.round((correctCount / practices.filter(p => p.type !== "written").length) * 100);
    return (
      <div className="min-h-screen bg-background pb-12">
        {showXP && <XPAnimation amount={earnedXP} onDone={() => setShowXP(false)} />}

        <div className={`bg-gradient-to-br ${mod.bgGradient} px-4 pt-10 pb-20 text-center`}>
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-7xl mb-3">
            {score >= 80 ? "🏆" : score >= 60 ? "⭐" : "💪"}
          </motion.div>
          <h1 className="text-3xl font-extrabold text-white">
            {score >= 80 ? "Incrível!" : score >= 60 ? "Muito bem!" : "Continue assim!"}
          </h1>
          <p className="text-white/80 mt-1">Prática concluída</p>
        </div>

        <div className="max-w-md mx-auto px-4 -mt-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div className="text-center">
                <p className="text-3xl font-extrabold text-primary">+{totalXP}</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">XP ganhos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold" style={{ color: mod.color }}>{correctCount}/{practices.filter(p => p.type !== "written").length}</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">Objetivas corretas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-amber-500">✓</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">Dissertativa feita</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-3"
          >
            <button
              onClick={() => setLocation(`/modulo/${mod.id}`)}
              className="py-4 rounded-2xl border border-border font-bold text-foreground hover:bg-muted"
            >
              Voltar ao módulo
            </button>
            <button
              onClick={() => setLocation(`/desafio/${mod.id}`)}
              className="py-4 rounded-2xl font-extrabold text-white"
              style={{ backgroundColor: mod.color }}
            >
              Desafio Final ⚡
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 pt-8 pb-6`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setLocation(`/modulo/${mod.id}`)}
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-sm">Sair</span>
            </button>
            <div className="bg-white/20 rounded-xl px-3 py-1.5">
              <p className="text-white font-extrabold text-sm">{current + 1}/{practices.length}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-white/80 text-xs font-bold uppercase tracking-wide">{mod.emoji} Prática</span>
            <span
              className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
              style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
            >
              {practice.type === "written" ? "✍️ Dissertativa" : practice.type === "truefalse" ? "⚖️ V ou F" : "🎯 Múltipla Escolha"}
            </span>
          </div>

          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-card border border-border rounded-2xl p-5 mb-5 shadow-sm">
              <p className="text-foreground text-base font-semibold leading-relaxed">{practice.question}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs text-amber-600 font-bold">+{practice.xpReward} XP</span>
              </div>
            </div>

            {phase === "question" && (
              practice.type === "written" ? (
                <WrittenQuestion
                  practice={practice}
                  color={mod.color}
                  moduleTitle={mod.title}
                  lessonTitle={practice.question.slice(0, 60)}
                  onAnswer={handleWrittenDone}
                />
              ) : (
                <MultipleChoiceQuestion
                  practice={practice}
                  color={mod.color}
                  onAnswer={handleMultipleAnswer}
                />
              )
            )}

            {phase === "feedback" && practice.type !== "written" && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={handleNext}
                className="w-full py-4 rounded-2xl font-extrabold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: mod.color }}
              >
                {current < practices.length - 1 ? (
                  <>Próxima questão <ChevronRight className="w-5 h-5" /></>
                ) : (
                  <>Ver resultado <CheckCircle className="w-5 h-5" /></>
                )}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
