import { useLocation, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Zap, Lock, ChevronRight, Brain, RotateCcw } from "lucide-react";
import { getModuleById } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { getPracticesByModule } from "@/data/practices";
import { getChallengeByModule } from "@/data/challenges";
import { useQuestionProgress } from "@/hooks/useQuestionProgress";
import { ThemeBackground } from "@/components/ThemeBackground";

const PRACTICE_LESSON_ID = "praticas";
const CHALLENGE_LESSON_ID = "desafio";

interface QuestionHistoryGridProps {
  results: Array<{ questionIndex: number; isCorrect: boolean }>;
  totalQuestions: number;
  loading: boolean;
  onRetryWrong: () => void;
}

function QuestionHistoryGrid({ results, totalQuestions, loading, onRetryWrong }: QuestionHistoryGridProps) {
  if (loading || results.length === 0) return null;

  const byIndex = new Map(results.map(r => [r.questionIndex, r.isCorrect]));
  const wrongCount = results.filter(r => !r.isCorrect).length;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-2 bg-white/10 rounded-xl px-4 pt-3 pb-3"
    >
      <p className="text-xs font-bold text-white/70 uppercase tracking-wider mb-2">Seu histórico</p>
      <div className="flex flex-wrap gap-1.5">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const answered = byIndex.has(i);
          const correct = byIndex.get(i);
          return (
            <div
              key={i}
              title={answered ? (correct ? `Q${i + 1}: Correto` : `Q${i + 1}: Errado`) : `Q${i + 1}: Não respondido`}
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold transition-all ${
                !answered
                  ? "bg-white/20 text-white/50"
                  : correct
                  ? "bg-green-400 text-white"
                  : "bg-red-400 text-white"
              }`}
            >
              {!answered ? "?" : correct ? "✓" : "✗"}
            </div>
          );
        })}
      </div>
      {wrongCount > 0 && (
        <button
          onClick={onRetryWrong}
          className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Refazer {wrongCount} errad{wrongCount === 1 ? "a" : "as"}
        </button>
      )}
    </motion.div>
  );
}

export default function ModuleDetail() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const mod = getModuleById(params.id);
  const { progress, isLessonComplete, isChallengeComplete, getModuleProgress } = useProgress();
  const practices = getPracticesByModule(params.id);
  const challenge = getChallengeByModule(params.id);
  const hasPractices = practices.length > 0;
  const practicesDone = isLessonComplete(params.id, PRACTICE_LESSON_ID);

  const {
    results: practiceResults,
    loading: practiceLoading,
  } = useQuestionProgress(params.id ?? "", PRACTICE_LESSON_ID, practices.length);

  const challengeTotalQuestions = challenge?.questions.length ?? 0;
  const {
    results: challengeResults,
    loading: challengeLoading,
  } = useQuestionProgress(params.id ?? "", CHALLENGE_LESSON_ID, challengeTotalQuestions);

  if (!mod) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Módulo não encontrado</p>
      </div>
    );
  }

  const modProgress = getModuleProgress(mod.id);
  const allLessonsDone = modProgress === 100;
  const challengeDone = isChallengeComplete(mod.id);

  return (
    <ThemeBackground className="pb-20">
      {/* Header */}
      <div className={`bg-gradient-to-br ${mod.bgGradient} text-white px-4 pt-10 pb-16`}>
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar</span>
          </button>

          <div className="flex items-start gap-4">
            <div className="text-5xl">{mod.emoji}</div>
            <div>
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-1">Módulo {mod.order}</p>
              <h1 className="text-2xl font-extrabold leading-tight">{mod.title}</h1>
              <p className="text-white/80 text-sm mt-1">{mod.subtitle}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-6 bg-white/15 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-white/80">Progresso do módulo</span>
              <span className="text-sm font-extrabold">{modProgress}%</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white/80 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${modProgress}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <p className="text-white/70 text-xs mt-2">
              {mod.lessons.filter(l => isLessonComplete(mod.id, l.id)).length}/{mod.lessons.length} aulas concluídas
            </p>
          </div>
        </div>
      </div>

      {/* Lessons */}
      <div className="max-w-2xl mx-auto px-4 -mt-8">
        <div className="space-y-3">
          {mod.lessons.map((lesson, idx) => {
            const done = isLessonComplete(mod.id, lesson.id);
            const prevDone = idx === 0 || isLessonComplete(mod.id, mod.lessons[idx - 1].id);
            const locked = !prevDone && !done;

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                data-testid={`card-lesson-${lesson.id}`}
              >
                <button
                  onClick={() => !locked && setLocation(`/aula/${mod.id}/${lesson.id}`)}
                  disabled={locked}
                  className={`w-full text-left bg-card border rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 ${
                    locked
                      ? "border-border opacity-50 cursor-not-allowed"
                      : done
                      ? "border-green-200 bg-green-50 hover:border-green-300"
                      : "border-card-border shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex-shrink-0">
                    {locked ? (
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Lock className="w-5 h-5 text-muted-foreground" />
                      </div>
                    ) : done ? (
                      <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white text-sm"
                        style={{ backgroundColor: mod.color }}
                      >
                        {idx + 1}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`font-extrabold text-base leading-tight ${done ? "text-green-800" : "text-foreground"}`}>
                      {lesson.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {lesson.content.length} parágrafos • {lesson.xpReward} XP
                    </p>
                  </div>

                  {!locked && (
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 ${done ? "text-green-500" : "text-muted-foreground"}`} />
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Practice Card */}
        {hasPractices && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-4"
          >
            <button
              onClick={() => setLocation(`/pratica/${mod.id}`)}
              className="w-full rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r from-violet-500 to-purple-600 text-white"
            >
              <div className="text-4xl">{practicesDone ? "🧠✅" : "🧠"}</div>
              <div className="text-left flex-1">
                <p className="font-extrabold text-lg">
                  {practicesDone ? "Prática Concluída!" : "Sessão de Prática"}
                </p>
                <p className="text-white/80 text-sm">
                  {practicesDone
                    ? "Refaça para reforçar o aprendizado"
                    : `${practices.length} questões: objetivas + dissertativa com tutor IA`}
                </p>
              </div>
              <Brain className="w-5 h-5 text-white/70" />
            </button>

            {/* Practice question history */}
            <div className={`rounded-b-2xl -mt-1 pt-1 px-1 pb-1 bg-gradient-to-r from-violet-500 to-purple-600`}>
              <QuestionHistoryGrid
                results={practiceResults}
                totalQuestions={practices.length}
                loading={practiceLoading}
                onRetryWrong={() => setLocation(`/pratica/${mod.id}?retryWrong=1`)}
              />
            </div>
          </motion.div>
        )}

        {/* Challenge Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4"
        >
          <button
            onClick={() => allLessonsDone && setLocation(`/desafio/${mod.id}`)}
            disabled={!allLessonsDone}
            className={`w-full rounded-2xl p-5 flex items-center gap-4 transition-all duration-200 ${
              allLessonsDone
                ? challengeDone
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md"
                  : `bg-gradient-to-r ${mod.bgGradient} text-white shadow-md hover:shadow-lg hover:-translate-y-0.5`
                : "bg-muted border border-border opacity-50 cursor-not-allowed"
            }`}
            data-testid="button-go-challenge"
          >
            <div className="text-4xl">
              {challengeDone ? "🏆" : allLessonsDone ? "⚡" : "🔒"}
            </div>
            <div className="text-left flex-1">
              <p className="font-extrabold text-lg">
                {challengeDone ? "Desafio Concluído!" : "Desafio Final"}
              </p>
              <p className="text-white/80 text-sm">
                {allLessonsDone
                  ? challengeDone
                    ? "Módulo concluído com êxito! +100 XP"
                    : "5 questões para testar seu conhecimento • +100 XP"
                  : "Complete todas as aulas para desbloquear"}
              </p>
            </div>
            {allLessonsDone && (
              <ChevronRight className="w-5 h-5 text-white/70" />
            )}
          </button>

          {/* Challenge question history */}
          {allLessonsDone && challengeTotalQuestions > 0 && (
            <div
              className={`rounded-b-2xl -mt-1 pt-1 px-1 pb-1 ${
                challengeDone
                  ? "bg-gradient-to-r from-green-500 to-emerald-600"
                  : `bg-gradient-to-r ${mod.bgGradient}`
              }`}
            >
              <QuestionHistoryGrid
                results={challengeResults}
                totalQuestions={challengeTotalQuestions}
                loading={challengeLoading}
                onRetryWrong={() => setLocation(`/desafio/${mod.id}?retryWrong=1`)}
              />
            </div>
          )}
        </motion.div>

        {/* XP Summary */}
        <div className="mt-4 bg-card border border-card-border rounded-2xl p-4 flex items-center gap-3">
          <Zap className="w-6 h-6 text-amber-500" />
          <div>
            <p className="font-bold text-sm">XP deste módulo</p>
            <p className="text-xs text-muted-foreground">
              {mod.lessons.filter(l => isLessonComplete(mod.id, l.id)).length * 50 + (challengeDone ? 100 : 0)} / {mod.lessons.length * 50 + 100} XP ganhos
            </p>
          </div>
        </div>
      </div>
    </ThemeBackground>
  );
}
