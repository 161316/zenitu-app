import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation, useParams, useSearch } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Trophy, Zap, ChevronRight } from "lucide-react";
import { getModuleById, MODULES } from "@/data/modules";
import { getChallengeByModule } from "@/data/challenges";
import { useProgress } from "@/hooks/useProgress";
import { useQuestionProgress } from "@/hooks/useQuestionProgress";
import { LessonResumeDialog } from "@/components/LessonResumeDialog";
import { XPAnimation, Confetti } from "@/components/XPAnimation";
import { ThemeBackground } from "@/components/ThemeBackground";

const MAX_TIME = 20;
const BASE_XP = 20;
const CHALLENGE_LESSON_ID = "desafio";

type Phase = "quiz" | "result" | "gameover";

interface XPEntry { q: number; xp: number; correct: boolean; timeout?: boolean }

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <motion.span
      animate={filled ? {} : { scale: [1, 1.4, 0.8, 1] }}
      transition={{ duration: 0.4 }}
      className={`text-xl ${filled ? "opacity-100" : "opacity-30 grayscale"}`}
    >
      ❤️
    </motion.span>
  );
}

function TimerBar({ timeLeft, total }: { timeLeft: number; total: number }) {
  const pct = (timeLeft / total) * 100;
  const color = timeLeft > 10 ? "#22c55e" : timeLeft > 5 ? "#f59e0b" : "#ef4444";
  return (
    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full transition-colors duration-500"
        style={{ backgroundColor: color, width: `${pct}%` }}
        transition={{ duration: 0.9, ease: "linear" }}
      />
    </div>
  );
}

export default function Challenge() {
  const params = useParams<{ moduleId: string }>();
  const search = useSearch();
  const isRetryWrong = new URLSearchParams(search).get("retryWrong") === "1";
  const [, setLocation] = useLocation();
  const { completeChallenge, isChallengeComplete } = useProgress();

  const mod = getModuleById(params.moduleId);
  const challenge = getChallengeByModule(params.moduleId);
  const nextMod = MODULES.find(m => m.order === (mod?.order ?? 0) + 1);

  const totalQuestions = challenge?.questions.length ?? 0;
  const { results, loading: qLoading, hasProgress, allAnswered, answeredCount, correctCount, wrongCount, saveResult, getLastUnansweredIndex, getWrongIndexes } =
    useQuestionProgress(params.moduleId, CHALLENGE_LESSON_ID, totalQuestions);

  const defaultIndices = useMemo(
    () => Array.from({ length: totalQuestions }, (_, i) => i),
    [totalQuestions],
  );

  const [questionIndices, setQuestionIndices] = useState<number[]>(defaultIndices);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [showXP, setShowXP] = useState(false);
  const [shake, setShake] = useState(false);

  const [timeLeft, setTimeLeft] = useState(MAX_TIME);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [totalXP, setTotalXP] = useState(0);
  const [xpBreakdown, setXpBreakdown] = useState<XPEntry[]>([]);
  const [lastXP, setLastXP] = useState<number | null>(null);
  const [showComboAnim, setShowComboAnim] = useState(false);
  const [showResumeDialog, setShowResumeDialog] = useState(false);

  const livesRef = useRef(3);
  const alreadyDone = isChallengeComplete(params.moduleId);
  const dialogShownRef = useRef(false);
  const retryWrongHandledRef = useRef(false);

  // Show resume dialog once loaded if there's saved progress
  useEffect(() => {
    if (isRetryWrong) return;
    if (!qLoading && hasProgress && !dialogShownRef.current && phase === "quiz" && current === 0) {
      dialogShownRef.current = true;
      setShowResumeDialog(true);
    }
  }, [isRetryWrong, qLoading, hasProgress, phase, current]);

  // Auto-start retry-wrong mode when ?retryWrong=1 is in the URL
  useEffect(() => {
    if (!isRetryWrong || qLoading || retryWrongHandledRef.current) return;
    retryWrongHandledRef.current = true;
    const wrong = getWrongIndexes();
    if (wrong.length === 0) return;
    setQuestionIndices(wrong);
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setScore(0);
    setPhase("quiz");
    setTimeLeft(MAX_TIME);
    setCombo(0);
    setLives(3);
    livesRef.current = 3;
    setTotalXP(0);
    setXpBreakdown([]);
    setLastXP(null);
    setShowComboAnim(false);
    setShake(false);
  }, [isRetryWrong, qLoading, getWrongIndexes]);

  useEffect(() => {
    setQuestionIndices(defaultIndices);
  }, [defaultIndices]);

  useEffect(() => {
    if (confirmed || phase !== "quiz" || showResumeDialog) return;
    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }
    const id = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft, confirmed, phase, showResumeDialog]);

  if (!mod || !challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Desafio não encontrado</p>
      </div>
    );
  }

  const activeQuestions = questionIndices.map(i => challenge.questions[i]);
  const question = activeQuestions[current];
  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Carregando…</p>
      </div>
    );
  }

  const progressPct = (current / activeQuestions.length) * 100;

  // Resume dialog handlers
  const handleResume = () => {
    setShowResumeDialog(false);
    const nextIdx = getLastUnansweredIndex();
    const posInActive = questionIndices.indexOf(nextIdx);
    // Restore runtime counters from persisted results so final grading is correct
    const savedInActive = results.filter(r => questionIndices.includes(r.questionIndex));
    const priorCorrect = savedInActive.filter(r => r.isCorrect).length;
    setScore(priorCorrect);
    setTotalXP(priorCorrect * BASE_XP);
    setXpBreakdown(
      savedInActive
        .sort((a, b) => questionIndices.indexOf(a.questionIndex) - questionIndices.indexOf(b.questionIndex))
        .map((r, i) => ({ q: i + 1, xp: r.isCorrect ? BASE_XP : 0, correct: r.isCorrect })),
    );
    setCurrent(posInActive >= 0 ? posInActive : answeredCount);
  };

  const handleRedoWrong = () => {
    const wrong = getWrongIndexes();
    if (wrong.length === 0) { setShowResumeDialog(false); return; }
    setQuestionIndices(wrong);
    resetQuizState();
    setShowResumeDialog(false);
  };

  const handleRedoAll = () => {
    setQuestionIndices(defaultIndices);
    resetQuizState();
    setShowResumeDialog(false);
  };

  const handleSkip = () => {
    if (!alreadyDone) {
      completeChallenge(params.moduleId, 0);
    }
    setLocation(`/modulo/${params.moduleId}`);
  };

  const resetQuizState = () => {
    setCurrent(0);
    setSelected(null);
    setConfirmed(false);
    setScore(0);
    setPhase("quiz");
    setTimeLeft(MAX_TIME);
    setCombo(0);
    setLives(3);
    livesRef.current = 3;
    setTotalXP(0);
    setXpBreakdown([]);
    setLastXP(null);
    setShowComboAnim(false);
    setShake(false);
  };

  const handleTimeout = () => {
    setConfirmed(true);
    setCombo(0);
    const newLives = livesRef.current - 1;
    livesRef.current = newLives;
    setLives(newLives);
    setShake(true);
    setTimeout(() => setShake(false), 600);
    setXpBreakdown(prev => [...prev, { q: current + 1, xp: 0, correct: false, timeout: true }]);
    saveResult(questionIndices[current], false, "objective");
    if (newLives <= 0) {
      setTimeout(() => setPhase("gameover"), 1800);
    }
  };

  const handleSelect = (option: string) => {
    if (confirmed) return;
    setSelected(option);
  };

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
    const isCorrect = selected === question.correct;
    saveResult(questionIndices[current], isCorrect, "objective");

    if (isCorrect) {
      const newCombo = combo + 1;
      const multiplier = Math.min(newCombo, 3);
      const timeBonus = Math.floor((timeLeft / MAX_TIME) * 10);
      const xp = BASE_XP * multiplier + timeBonus;
      setCombo(newCombo);
      setTotalXP(prev => prev + xp);
      setLastXP(xp);
      setScore(prev => prev + 1);
      setXpBreakdown(prev => [...prev, { q: current + 1, xp, correct: true }]);
      if (newCombo >= 2) setShowComboAnim(true);
    } else {
      setCombo(0);
      const newLives = livesRef.current - 1;
      livesRef.current = newLives;
      setLives(newLives);
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setXpBreakdown(prev => [...prev, { q: current + 1, xp: 0, correct: false }]);
      if (newLives <= 0) {
        setTimeout(() => setPhase("gameover"), 1800);
      }
    }
  };

  const handleNext = () => {
    if (livesRef.current <= 0) { setPhase("gameover"); return; }
    if (current < activeQuestions.length - 1) {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setConfirmed(false);
      setTimeLeft(MAX_TIME);
      setLastXP(null);
      setShowComboAnim(false);
    } else {
      const finalPct = Math.round((score / activeQuestions.length) * 100);
      if (!alreadyDone && finalPct >= 60) {
        completeChallenge(params.moduleId, totalXP);
        setShowXP(true);
      }
      setPhase("result");
    }
  };

  const handleRetry = () => {
    setQuestionIndices(defaultIndices);
    resetQuizState();
  };

  const percentage = Math.round((score / activeQuestions.length) * 100);
  const passed = percentage >= 60;

  const gradeInfo = percentage === 100
    ? { emoji: "🏆", title: "PERFEITO!", subtitle: "Resultado absoluto! Domínio completo do conteúdo.", color: "#f59e0b" }
    : percentage >= 80
    ? { emoji: "⭐", title: "EXCELENTE!", subtitle: "Resultado impressionante! Continue assim.", color: "#22c55e" }
    : percentage >= 60
    ? { emoji: "🎯", title: "MUITO BEM!", subtitle: "Desafio concluído! Siga em frente.", color: "#3b82f6" }
    : { emoji: "💪", title: "QUASE LÁ!", subtitle: "Você está progredindo. Tente novamente!", color: "#f97316" };

  if (phase === "gameover") {
    return (
      <ThemeBackground className="flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="max-w-md w-full text-center"
        >
          <div className="text-7xl mb-4">💔</div>
          <h1 className="text-3xl font-extrabold text-foreground mb-2">Sem vidas!</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Você acumulou <span className="font-extrabold text-primary">{totalXP} XP</span> antes de acabar as vidas.
          </p>
          <div className="bg-muted rounded-3xl p-6 mb-8 text-left">
            <p className="text-sm font-bold text-muted-foreground mb-3 uppercase tracking-wide">Progresso desta tentativa</p>
            {xpBreakdown.map((e, i) => (
              <div key={i} className="flex items-center justify-between py-1.5 border-b border-border last:border-0">
                <span className="text-sm text-muted-foreground">Questão {e.q}</span>
                <span className={`text-sm font-bold ${e.correct ? "text-green-600" : "text-red-500"}`}>
                  {e.correct ? `+${e.xp} XP` : e.timeout ? "⏰ Tempo esgotado" : "✗ Incorreta"}
                </span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleRetry}
              className="py-4 rounded-2xl font-extrabold text-white"
              style={{ backgroundColor: mod.color }}
            >
              🔄 Tentar novamente
            </button>
            <button
              onClick={() => setLocation(`/modulo/${params.moduleId}`)}
              className="py-4 rounded-2xl border border-border font-bold text-foreground hover:bg-muted"
            >
              Voltar
            </button>
          </div>
        </motion.div>
      </ThemeBackground>
    );
  }

  if (phase === "result") {
    return (
      <ThemeBackground className="pb-12">
        {passed && <Confetti />}
        {showXP && <XPAnimation amount={totalXP} onDone={() => setShowXP(false)} />}

        <div className={`bg-gradient-to-br ${mod.bgGradient} px-4 pt-10 pb-16 text-center`}>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.1 }}
            className="text-8xl mb-3"
          >
            {gradeInfo.emoji}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold text-white mb-1"
          >
            {gradeInfo.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-lg"
          >
            {gradeInfo.subtitle}
          </motion.p>
        </div>

        <div className="max-w-md mx-auto px-4 -mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-3xl shadow-lg p-6 mb-4"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <p className="text-4xl font-extrabold" style={{ color: gradeInfo.color }}>{percentage}%</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">Acertos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-primary">+{totalXP}</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">XP ganhos</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-foreground">{score}/{activeQuestions.length}</p>
                <p className="text-xs text-muted-foreground font-semibold mt-1">Corretas</p>
              </div>
            </div>

            <div className="h-3 bg-muted rounded-full overflow-hidden mb-1">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: gradeInfo.color }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card rounded-3xl shadow-sm p-5 mb-4"
          >
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Detalhamento XP</p>
            <div className="space-y-2">
              {xpBreakdown.map((e, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.08 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${e.correct ? "bg-green-500" : "bg-red-400"}`}>
                      {e.q}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {e.correct
                        ? `Correta ${e.xp > BASE_XP ? `(${Math.floor(e.xp / BASE_XP)}× combo + bônus tempo)` : ""}`
                        : e.timeout ? "Tempo esgotado" : "Incorreta"}
                    </span>
                  </div>
                  <span className={`text-sm font-extrabold ${e.correct ? "text-green-600" : "text-muted-foreground"}`}>
                    {e.correct ? `+${e.xp} XP` : "—"}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-5 mb-4"
          >
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">💬 Para você pensar</p>
            <p className="text-white/90 text-sm leading-relaxed italic">"{mod.bossQuote}"</p>
          </motion.div>

          {passed && nextMod && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring" }}
              onClick={() => setLocation(`/modulo/${nextMod.id}`)}
              className={`w-full bg-gradient-to-r ${nextMod.bgGradient} rounded-3xl p-5 mb-4 text-left flex items-center gap-4 shadow-lg`}
            >
              <div className="text-4xl">{nextMod.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs bg-white/25 text-white px-2 py-0.5 rounded-full font-bold">
                    {nextMod.tierEmoji} Nível {nextMod.tier} — {nextMod.tierLabel}
                  </span>
                </div>
                <p className="text-white font-extrabold">{nextMod.title}</p>
                <p className="text-white/70 text-xs mt-0.5">Começar próximo módulo →</p>
              </div>
              <ChevronRight className="w-6 h-6 text-white/80 flex-shrink-0" />
            </motion.button>
          )}

          {passed && !nextMod && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
              className="w-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 mb-4 text-center"
            >
              <div className="text-5xl mb-2">🏆</div>
              <p className="text-white font-extrabold text-xl">Curso Completo!</p>
              <p className="text-white/80 text-sm mt-1">Você concluiu o curso com êxito.</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 gap-3"
          >
            <button
              onClick={handleRetry}
              className="py-4 rounded-2xl border border-border font-bold text-foreground hover:bg-muted transition-colors"
            >
              🔄 Tentar novamente
            </button>
            <button
              onClick={() => setLocation(`/modulo/${params.moduleId}`)}
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

  const isCorrect = selected === question.correct;

  return (
    <ThemeBackground className="pb-20">
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

      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 pt-8 pb-6`}>
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setLocation(`/modulo/${params.moduleId}`)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-sm">Sair</span>
            </button>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3].map(i => <HeartIcon key={i} filled={lives >= i} />)}
            </div>

            <div className="bg-white/20 rounded-xl px-3 py-1.5 text-center">
              <p className="text-white font-extrabold">{current + 1}/{activeQuestions.length}</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-white/70 text-xs font-bold uppercase tracking-wide">{mod.emoji} Desafio</span>
              {combo >= 2 && (
                <AnimatePresence>
                  {showComboAnim && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-extrabold"
                    >
                      🔥 ×{Math.min(combo, 3)} COMBO!
                    </motion.span>
                  )}
                </AnimatePresence>
              )}
            </div>
            <div className="flex items-center gap-1 text-white/80 text-sm font-bold">
              <Zap className="w-4 h-4 text-yellow-300" />
              {timeLeft}s
            </div>
          </div>

          <TimerBar timeLeft={timeLeft} total={MAX_TIME} />

          <div className="mt-2 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white/40 rounded-full"
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
                {question.type === "multiple" ? "Múltipla Escolha" : question.type === "truefalse" ? "Verdadeiro ou Falso" : "Complete a Frase"}
              </span>
              {combo >= 2 && (
                <span className="text-xs font-bold text-amber-600">
                  🔥 Bônus ×{Math.min(combo, 3)} ativo!
                </span>
              )}
            </div>

            <h2 className="text-xl font-extrabold text-foreground mb-5 leading-tight">
              {question.question}
            </h2>

            <div className={`space-y-3 mb-5 ${shake ? "animate-bounce" : ""}`}>
              {question.options?.map((option, idx) => {
                let variant = "default";
                if (confirmed) {
                  if (option === question.correct) variant = "correct";
                  else if (option === selected) variant = "wrong";
                } else if (option === selected) {
                  variant = "selected";
                }

                return (
                  <motion.button
                    key={option}
                    onClick={() => handleSelect(option)}
                    whileTap={!confirmed ? { scale: 0.98 } : {}}
                    className={`w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all duration-150 flex items-center gap-3 ${
                      variant === "correct"
                        ? "border-green-500 bg-green-50 text-green-800"
                        : variant === "wrong"
                        ? "border-red-400 bg-red-50 text-red-800"
                        : variant === "selected"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted/50"
                    }`}
                    disabled={confirmed}
                  >
                    <div
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                        variant === "correct"
                          ? "border-green-500 bg-green-500 text-white"
                          : variant === "wrong"
                          ? "border-red-400 bg-red-400 text-white"
                          : variant === "selected"
                          ? "border-primary bg-primary text-white"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      {variant === "correct" ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : variant === "wrong" ? (
                        <XCircle className="w-4 h-4" />
                      ) : (
                        String.fromCharCode(65 + idx)
                      )}
                    </div>
                    <span>{option}</span>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className={`rounded-2xl p-4 mb-5 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{isCorrect ? "✅" : "💡"}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className={`font-extrabold text-sm ${isCorrect ? "text-green-800" : "text-amber-800"}`}>
                          {isCorrect ? "Correto!" : selected ? "Não foi desta vez." : "⏰ Tempo esgotado!"}
                        </p>
                        {isCorrect && lastXP !== null && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-sm font-extrabold text-green-700 bg-green-100 px-2 py-0.5 rounded-full"
                          >
                            +{lastXP} XP
                          </motion.span>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${isCorrect ? "text-green-700" : "text-amber-700"}`}>
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!confirmed ? (
              <button
                onClick={handleConfirm}
                disabled={!selected}
                className="w-full py-4 rounded-2xl font-extrabold text-white disabled:opacity-40 flex items-center justify-center gap-2"
                style={{ backgroundColor: mod.color }}
              >
                Confirmar resposta
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full py-4 rounded-2xl font-extrabold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: mod.color }}
              >
                {current < activeQuestions.length - 1 ? (
                  <>Próxima questão <ChevronRight className="w-5 h-5" /></>
                ) : (
                  <>Ver resultado <Trophy className="w-5 h-5" /></>
                )}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeBackground>
  );
}
