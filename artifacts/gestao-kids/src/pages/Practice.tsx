import { useState, useRef, useCallback, useMemo } from "react";
import { useLocation, useParams, useSearch } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, ChevronRight, Lightbulb, Send, Loader2, RotateCcw } from "lucide-react";
import { getModuleById } from "@/data/modules";
import { getPracticesByModule, type Practice } from "@/data/practices";
import { useProgress } from "@/hooks/useProgress";
import { useQuestionProgress } from "@/hooks/useQuestionProgress";
import { LessonResumeDialog } from "@/components/LessonResumeDialog";
import { XPAnimation } from "@/components/XPAnimation";
import { ThemeBackground } from "@/components/ThemeBackground";

type Phase = "intro" | "question" | "feedback" | "done";

const PRACTICE_LESSON_ID = "praticas";

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
            <p className="text-violet-500 text-xs">Orientando seu raciocínio</p>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 py-4">
            <Loader2 className="w-5 h-5 text-violet-500 animate-spin" />
            <p className="text-violet-600 text-sm font-medium">Analisando sua resposta…</p>
          </div>
        ) : error ? (
          <div className="space-y-3">
            <p className="text-red-600 text-sm">Não foi possível conectar. Tente novamente.</p>
            <button
              onClick={fetchFeedback}
              className="flex items-center gap-2 text-violet-600 text-sm font-bold"
            >
              <RotateCcw className="w-4 h-4" /> Tentar novamente
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
              {isCorrect ? "✅ Correto!" : "💡 Atenção:"}
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
            {showHint ? "Ocultar dica" : "Ver dica"}
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

function WrittenQuestion({ practice, color, moduleTitle, lessonTitle, onAnswer, onSubmit }: {
  practice: Practice;
  color: string;
  moduleTitle: string;
  lessonTitle: string;
  onAnswer: () => void;
  onSubmit?: () => void;
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
          {showHint ? "Ocultar orientação" : "Ver orientação"}
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
        placeholder="Escreva sua resposta aqui. Quanto mais detalhada, melhor o tutor pode orientar seu raciocínio…"
        className="w-full h-40 p-4 rounded-2xl border border-border text-sm font-medium resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 bg-card text-foreground"
      />
      <p className="text-xs text-muted-foreground text-right">{answer.length} caracteres</p>

      <button
        onClick={() => { onSubmit?.(); setSubmitted(true); }}
        disabled={answer.trim().length < 20}
        className="w-full py-4 rounded-2xl font-extrabold text-white disabled:opacity-40 flex items-center justify-center gap-2"
        style={{ backgroundColor: color }}
      >
        <Send className="w-5 h-5" />
        Enviar para o tutor
      </button>
      {answer.trim().length < 20 && answer.length > 0 && (
        <p className="text-xs text-muted-foreground text-center">Desenvolva um pouco mais sua resposta para enviar</p>
      )}
    </div>
  );
}

export default function PracticePage() {
  const params = useParams<{ moduleId: string }>();
  const search = useSearch();
  const isReview = new URLSearchParams(search).get("review") === "1";
  const [, setLocation] = useLocation();
  const mod = getModuleById(params.moduleId);
  const practices = getPracticesByModule(params.moduleId);
  const { completeLesson, isLessonComplete, markReviewed } = useProgress();

  const totalQuestions = practices.length;
  const {
    results,
    loading: qLoading,
    hasProgress,
    allAnswered,
    answeredCount,
    correctCount,
    wrongCount,
    saveResult,
    getLastUnansweredIndex,
    getWrongIndexes,
  } = useQuestionProgress(params.moduleId ?? "", PRACTICE_LESSON_ID, totalQuestions);

  const defaultIndices = useMemo(
    () => Array.from({ length: totalQuestions }, (_, i) => i),
    [totalQuestions],
  );

  const [questionIndices, setQuestionIndices] = useState<number[]>(defaultIndices);
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<Phase>("intro");
  const [correctCount2, setCorrectCount2] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [showXP, setShowXP] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [reviewDone, setReviewDone] = useState(false);
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const dialogShownRef = useRef(false);
  const alreadyDone = isLessonComplete(params.moduleId ?? "", PRACTICE_LESSON_ID);

  // Show resume dialog when entering intro and there's saved progress
  const handleStartPractice = () => {
    if (!qLoading && hasProgress && !dialogShownRef.current) {
      dialogShownRef.current = true;
      setShowResumeDialog(true);
    } else {
      setPhase("question");
    }
  };

  const handleResume = () => {
    const nextIdx = getLastUnansweredIndex();
    const posInActive = questionIndices.indexOf(nextIdx);
    // Restore session counters from persisted results for accurate final scoring/XP
    const priorCorrect = results.filter(r => questionIndices.includes(r.questionIndex) && r.isCorrect).length;
    const priorXP = results
      .filter(r => questionIndices.includes(r.questionIndex) && r.isCorrect)
      .reduce((acc, r) => acc + (practices[r.questionIndex]?.xpReward ?? 0), 0);
    setCorrectCount2(priorCorrect);
    setTotalXP(priorXP);
    setCurrent(posInActive >= 0 ? posInActive : answeredCount);
    setShowResumeDialog(false);
    setPhase("question");
  };

  const handleRedoWrong = () => {
    const wrong = getWrongIndexes();
    if (wrong.length === 0) { setShowResumeDialog(false); setPhase("question"); return; }
    setQuestionIndices(wrong);
    setCurrent(0);
    setCorrectCount2(0);
    setTotalXP(0);
    setShowResumeDialog(false);
    setPhase("question");
  };

  const handleRedoAll = () => {
    setQuestionIndices(defaultIndices);
    setCurrent(0);
    setCorrectCount2(0);
    setTotalXP(0);
    setShowResumeDialog(false);
    setPhase("question");
  };

  const handleSkip = () => {
    if (!alreadyDone) {
      completeLesson(params.moduleId ?? "", PRACTICE_LESSON_ID, 0);
    }
    setLocation(isReview ? "/" : `/modulo/${params.moduleId}`);
  };

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

  const activePractices = questionIndices.map(i => practices[i]);
  const practice = activePractices[current];

  const handleMultipleAnswer = (correct: boolean) => {
    const xp = correct ? practice.xpReward : Math.floor(practice.xpReward * 0.1);
    if (correct) setCorrectCount2(c => c + 1);
    setTotalXP(prev => prev + xp);
    saveResult(questionIndices[current], correct, "objective");
    setTimeout(() => setPhase("feedback"), 1500);
  };

  const handleWrittenSubmit = () => {
    // Persist the result immediately at submit time (before AI feedback is shown)
    saveResult(questionIndices[current], true, "written");
  };

  const handleWrittenDone = () => {
    setTotalXP(prev => prev + practice.xpReward);
    setPhase("feedback");
  };

  const handleNext = () => {
    if (current < activePractices.length - 1) {
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

  const progressPct = (current / activePractices.length) * 100;

  const writtenCount = activePractices.filter(p => p.type === "written").length;
  const objCount = activePractices.filter(p => p.type !== "written").length;

  if (phase === "intro") {
    return (
      <ThemeBackground className="flex flex-col">
        {showResumeDialog && (
          <LessonResumeDialog
            answeredCount={answeredCount}
            totalCount={totalQuestions}
            correctCount={correctCount}
            wrongCount={wrongCount}
            color={mod.color}
            allAnswered={allAnswered}
            hasWrong={wrongCount > 0}
            onResume={handleResume}
            onRedoWrong={handleRedoWrong}
            onRedoAll={handleRedoAll}
            onSkip={handleSkip}
          />
        )}

        <div className={`bg-gradient-to-br ${mod.bgGradient} px-4 pt-10 pb-20 text-center`}>
          <button
            onClick={() => setLocation(isReview ? "/" : `/modulo/${mod.id}`)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </button>
          <div className="text-6xl mb-4">{isReview ? "🔄" : "🧠"}</div>
          <h1 className="text-3xl font-extrabold text-white">{isReview ? "Revisão Agendada" : "Sessão de Prática"}</h1>
          <p className="text-white/80 text-lg mt-2">{mod.title}</p>
          {isReview && (
            <div className="mt-3 inline-block bg-white/20 rounded-full px-4 py-1 text-sm text-white font-bold">
              📅 Revisão do Desafio Final
            </div>
          )}
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
                  <p className="font-bold text-sm">
                    {practices.filter(p => p.type === "written").length}{" "}
                    {practices.filter(p => p.type === "written").length === 1 ? "questão dissertativa" : "questões dissertativas"}
                  </p>
                  <p className="text-xs text-muted-foreground">Respondida por escrito e orientada pelo tutor de IA</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 text-sm">🧑‍🏫</div>
                <div>
                  <p className="font-bold text-sm">Correção guiada — nunca entregamos a resposta pronta</p>
                  <p className="text-xs text-muted-foreground">O tutor orienta o raciocínio para você chegar à resposta</p>
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
              <p className="text-white/80 text-xs">Acerte sem usar dicas para maximizar o XP!</p>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleStartPractice}
            className="w-full py-5 rounded-2xl font-extrabold text-white text-lg flex items-center justify-center gap-3 shadow-md"
            style={{ backgroundColor: mod.color }}
          >
            Iniciar prática
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </ThemeBackground>
    );
  }

  if (phase === "done") {
    const score = objCount > 0 ? Math.round((correctCount2 / objCount) * 100) : 100;

    const handleQuality = (quality: "easy" | "medium" | "hard") => {
      markReviewed(params.moduleId ?? "", quality);
      setReviewDone(true);
    };

    return (
      <ThemeBackground className="pb-12">
        {showXP && <XPAnimation amount={earnedXP} onDone={() => setShowXP(false)} />}

        <div className={`bg-gradient-to-br ${mod.bgGradient} px-4 pt-10 pb-20 text-center`}>
          <motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ type: "spring" }} className="text-7xl mb-3">
            {score >= 80 ? "🏆" : score >= 60 ? "⭐" : "💪"}
          </motion.div>
          <h1 className="text-3xl font-extrabold text-white">
            {score >= 80 ? "Excelente!" : score >= 60 ? "Muito bem!" : "Continue avançando!"}
          </h1>
          <p className="text-white/80 mt-1">{isReview ? "Revisão concluída." : "Prática concluída."}</p>
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
                <p className="text-3xl font-extrabold" style={{ color: mod.color }}>{correctCount2}/{objCount}</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">Objetivas corretas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-amber-500">✓</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">
                  {writtenCount === 1 ? "Dissertativa feita" : "Dissertativas feitas"}
                </p>
              </div>
            </div>
          </motion.div>

          {isReview && !reviewDone && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-card rounded-3xl shadow-lg p-5"
            >
              <p className="text-sm font-extrabold text-foreground mb-1 text-center">Como foi essa revisão?</p>
              <p className="text-xs text-muted-foreground text-center mb-4">Isso ajusta quando revisaremos esse módulo novamente</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleQuality("hard")}
                  className="py-3 rounded-2xl font-bold text-sm border-2 border-red-200 text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                >
                  😓 Difícil
                  <p className="text-xs font-normal opacity-75 mt-0.5">Rever em breve</p>
                </button>
                <button
                  onClick={() => handleQuality("medium")}
                  className="py-3 rounded-2xl font-bold text-sm border-2 border-amber-200 text-amber-600 bg-amber-50 hover:bg-amber-100 transition-colors"
                >
                  🤔 OK
                  <p className="text-xs font-normal opacity-75 mt-0.5">Mais alguns dias</p>
                </button>
                <button
                  onClick={() => handleQuality("easy")}
                  className="py-3 rounded-2xl font-bold text-sm border-2 border-green-200 text-green-600 bg-green-50 hover:bg-green-100 transition-colors"
                >
                  😊 Fácil
                  <p className="text-xs font-normal opacity-75 mt-0.5">Próxima semana</p>
                </button>
              </div>
            </motion.div>
          )}

          {isReview && reviewDone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-4 text-center"
            >
              <p className="text-green-700 font-bold">✓ Revisão registrada. Próxima data agendada.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-3"
          >
            <button
              onClick={() => {
                setQuestionIndices(defaultIndices);
                setCurrent(0);
                setCorrectCount2(0);
                setTotalXP(0);
                setPhase("question");
              }}
              className="py-4 rounded-2xl border border-border font-bold text-foreground hover:bg-muted transition-colors"
            >
              🔄 Refazer
            </button>
            <button
              onClick={() => setLocation(isReview ? "/" : `/modulo/${params.moduleId}`)}
              className="py-4 rounded-2xl font-extrabold text-white"
              style={{ backgroundColor: mod.color }}
            >
              Voltar ao módulo
            </button>
          </motion.div>
        </div>
      </ThemeBackground>
    );
  }

  if (!practice) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Carregando…</p>
      </div>
    );
  }

  return (
    <ThemeBackground className="pb-20">
      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 pt-8 pb-6`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setPhase("intro")}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-sm">Sair</span>
            </button>
            <div className="bg-white/20 rounded-xl px-3 py-1.5">
              <p className="text-white font-extrabold text-sm">{current + 1}/{activePractices.length}</p>
            </div>
          </div>

          <p className="text-white/70 text-xs font-bold uppercase tracking-wide mb-1">{mod.emoji} Prática</p>

          <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white/60 rounded-full"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-extrabold px-3 py-1.5 rounded-full text-white uppercase tracking-wide"
                style={{ backgroundColor: mod.color }}
              >
                {practice.type === "written" ? "Dissertativa" : practice.type === "truefalse" ? "Verdadeiro ou Falso" : "Múltipla Escolha"}
              </span>
            </div>

            <h2 className="text-xl font-extrabold text-foreground mb-5 leading-tight">
              {practice.question}
            </h2>

            {phase === "question" && (
              practice.type === "written" ? (
                <WrittenQuestion
                  practice={practice}
                  color={mod.color}
                  moduleTitle={mod.title}
                  lessonTitle={practice.question}
                  onAnswer={handleWrittenDone}
                  onSubmit={handleWrittenSubmit}
                />
              ) : (
                <MultipleChoiceQuestion
                  practice={practice}
                  color={mod.color}
                  onAnswer={handleMultipleAnswer}
                />
              )
            )}

            {phase === "feedback" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-card border border-border rounded-2xl p-5 mb-4">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-2">
                    {current + 1} de {activePractices.length} respondidas
                  </p>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: mod.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${((current + 1) / activePractices.length) * 100}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  className="w-full py-4 rounded-2xl font-extrabold text-white flex items-center justify-center gap-2"
                  style={{ backgroundColor: mod.color }}
                >
                  {current < activePractices.length - 1 ? (
                    <>Próxima questão <ChevronRight className="w-5 h-5" /></>
                  ) : (
                    <>Ver resultado <ChevronRight className="w-5 h-5" /></>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeBackground>
  );
}
