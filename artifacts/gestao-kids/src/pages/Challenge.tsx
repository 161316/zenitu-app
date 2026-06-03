import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle, XCircle, Trophy } from "lucide-react";
import { getModuleById } from "@/data/modules";
import { getChallengeByModule } from "@/data/challenges";
import { useProgress } from "@/hooks/useProgress";
import { XPAnimation, Confetti } from "@/components/XPAnimation";

type Phase = "quiz" | "result";

export default function Challenge() {
  const params = useParams<{ moduleId: string }>();
  const [, setLocation] = useLocation();
  const { completeChallenge, isChallengeComplete } = useProgress();

  const mod = getModuleById(params.moduleId);
  const challenge = getChallengeByModule(params.moduleId);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState<Phase>("quiz");
  const [showXP, setShowXP] = useState(false);
  const [shake, setShake] = useState(false);

  const alreadyDone = isChallengeComplete(params.moduleId);

  if (!mod || !challenge) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Desafio não encontrado</p>
      </div>
    );
  }

  const question = challenge.questions[current];
  const isCorrect = selected === question.correct;
  const progressPct = ((current) / challenge.questions.length) * 100;

  const handleSelect = (option: string) => {
    if (confirmed) return;
    setSelected(option);
  };

  const handleConfirm = () => {
    if (!selected) return;
    setConfirmed(true);
    if (selected === question.correct) {
      setScore(prev => prev + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  const handleNext = () => {
    if (current < challenge.questions.length - 1) {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setConfirmed(false);
    } else {
      // Finish
      const xpBonus = 100;
      if (!alreadyDone) {
        completeChallenge(params.moduleId, xpBonus);
        setShowXP(true);
      }
      setPhase("result");
    }
  };

  const finalScore = phase === "result" ? score : score;
  const percentage = Math.round((finalScore / challenge.questions.length) * 100);
  const passed = percentage >= 60;

  if (phase === "result") {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12">
        {passed && <Confetti />}
        {showXP && <XPAnimation amount={100} onDone={() => setShowXP(false)} />}

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 15 }}
          className="max-w-md w-full text-center"
        >
          <div className="text-8xl mb-6">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "🎯" : "💪"}
          </div>

          <h1 className="text-3xl font-extrabold text-foreground mb-2">
            {percentage >= 80 ? "Incrível!" : percentage >= 60 ? "Muito bem!" : "Continue tentando!"}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Você acertou {finalScore} de {challenge.questions.length} questões
          </p>

          <div className={`rounded-3xl p-8 mb-8 ${passed ? "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200" : "bg-muted border border-border"}`}>
            <div className="text-6xl font-extrabold mb-2" style={{ color: mod.color }}>
              {percentage}%
            </div>
            <div className="h-4 bg-white/50 rounded-full overflow-hidden mx-8 mb-4">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: mod.color }}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </div>
            {passed && (
              <div className="flex items-center justify-center gap-2 text-green-700 font-bold">
                <Trophy className="w-5 h-5" />
                <span>+100 XP ganhos!</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                setCurrent(0);
                setSelected(null);
                setConfirmed(false);
                setScore(0);
                setPhase("quiz");
              }}
              className="py-4 rounded-2xl border border-border font-bold text-foreground hover:bg-muted transition-colors"
              data-testid="button-retry-challenge"
            >
              Tentar de novo
            </button>
            <button
              onClick={() => setLocation(`/modulo/${params.moduleId}`)}
              className="py-4 rounded-2xl font-extrabold text-white"
              style={{ backgroundColor: mod.color }}
              data-testid="button-back-to-module"
            >
              Voltar ao módulo
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className={`bg-gradient-to-r ${mod.bgGradient} px-4 pt-8 pb-8`}>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation(`/modulo/${params.moduleId}`)}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            data-testid="button-back-module"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Sair do desafio</span>
          </button>

          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{mod.emoji} Desafio Final</p>
              <h1 className="text-xl font-extrabold text-white">{mod.title}</h1>
            </div>
            <div className="bg-white/20 rounded-2xl px-4 py-2 text-center">
              <p className="text-white font-extrabold text-xl">{current + 1}/{challenge.questions.length}</p>
              <p className="text-white/70 text-xs">questão</p>
            </div>
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

      {/* Question */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Question badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="text-xs font-extrabold px-3 py-1.5 rounded-full text-white uppercase tracking-wide"
                style={{ backgroundColor: mod.color }}
              >
                {question.type === "multiple" ? "Múltipla Escolha" : question.type === "truefalse" ? "Verdadeiro ou Falso" : "Complete a Frase"}
              </span>
              <span className="text-xs text-muted-foreground">+20 XP por acerto</span>
            </div>

            <h2 className="text-xl font-extrabold text-foreground mb-6 leading-tight">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-6">
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
                    className={`w-full text-left p-4 rounded-2xl border-2 font-semibold transition-all duration-150 flex items-center gap-3 ${
                      variant === "correct"
                        ? "border-green-500 bg-green-50 text-green-800"
                        : variant === "wrong"
                        ? "border-red-400 bg-red-50 text-red-800"
                        : variant === "selected"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted/50"
                    } ${shake && variant === "wrong" ? "animate-shake" : ""}`}
                    disabled={confirmed}
                    data-testid={`option-${idx}`}
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

            {/* Explanation */}
            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className={`rounded-2xl p-4 mb-6 ${isCorrect ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{isCorrect ? "✅" : "💡"}</div>
                    <div>
                      <p className={`font-extrabold text-sm mb-1 ${isCorrect ? "text-green-800" : "text-amber-800"}`}>
                        {isCorrect ? "Correto! Muito bem!" : "Quase lá!"}
                      </p>
                      <p className={`text-sm leading-relaxed ${isCorrect ? "text-green-700" : "text-amber-700"}`}>
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action button */}
            {!confirmed ? (
              <button
                onClick={handleConfirm}
                disabled={!selected}
                className={`w-full py-5 rounded-2xl font-extrabold text-lg transition-all duration-200 ${
                  selected
                    ? "text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
                style={selected ? { backgroundColor: mod.color } : {}}
                data-testid="button-confirm-answer"
              >
                Confirmar resposta
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="w-full py-5 rounded-2xl font-extrabold text-lg text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                style={{ backgroundColor: mod.color }}
                data-testid="button-next-question"
              >
                {current < challenge.questions.length - 1 ? "Próxima questão" : "Ver resultado!"}
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {showXP && <XPAnimation amount={100} onDone={() => setShowXP(false)} />}
    </div>
  );
}
