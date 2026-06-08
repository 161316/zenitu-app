import { motion } from "framer-motion";
import { ChevronRight, Target, RefreshCw, SkipForward } from "lucide-react";

interface LessonResumeDialogProps {
  answeredCount: number;
  totalCount: number;
  correctCount: number;
  wrongCount: number;
  color: string;
  allAnswered: boolean;
  hasWrong: boolean;
  onResume: () => void;
  onRedoWrong: () => void;
  onRedoAll: () => void;
  onSkip: () => void;
  title?: string;
  summaryText?: string;
  resumeLabel?: string;
  redoAllLabel?: string;
  skipLabel?: string;
  skipSubLabel?: string;
}

export function LessonResumeDialog({
  answeredCount,
  totalCount,
  correctCount,
  wrongCount,
  color,
  allAnswered,
  hasWrong,
  onResume,
  onRedoWrong,
  onRedoAll,
  onSkip,
  title,
  summaryText,
  resumeLabel,
  redoAllLabel,
  skipLabel,
  skipSubLabel,
}: LessonResumeDialogProps) {
  const defaultSummary = (
    <>
      <span className="font-semibold text-foreground">{answeredCount} de {totalCount}</span> respondidas
      {" · "}
      <span className="font-bold text-green-600">{correctCount} corretas</span>
      {wrongCount > 0 && (
        <>
          {" · "}
          <span className="font-bold text-red-500">{wrongCount} incorretas</span>
        </>
      )}
    </>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="w-full max-w-md bg-card rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Summary */}
        <div
          className="p-5 pb-4 text-center"
          style={{ background: `${color}12`, borderBottom: `1.5px solid ${color}22` }}
        >
          <div className="text-2xl mb-2">📋</div>
          <h2 className="text-lg font-extrabold text-foreground">
            {title ?? "Você já respondeu esta atividade"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1.5">
            {summaryText ?? defaultSummary}
          </p>
        </div>

        {/* Options */}
        <div className="p-4 space-y-2">
          {!allAnswered && (
            <button
              onClick={onResume}
              className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all hover:opacity-90 active:scale-[0.99]"
              style={{ borderColor: color, background: `${color}0a` }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white"
                style={{ backgroundColor: color }}
              >
                <ChevronRight className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-sm text-foreground">
                  {resumeLabel ?? "Continuar de onde parei"}
                </p>
                <p className="text-xs text-muted-foreground">
                  Retoma na parte {answeredCount + 1}
                </p>
              </div>
            </button>
          )}

          {hasWrong && (
            <button
              onClick={onRedoWrong}
              className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 border-amber-400 bg-amber-50 text-left transition-all hover:opacity-90 active:scale-[0.99]"
            >
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-amber-400 text-white">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <p className="font-extrabold text-sm text-foreground">
                  Refazer somente as incorretas
                </p>
                <p className="text-xs text-muted-foreground">
                  {wrongCount} {wrongCount === 1 ? "questão" : "questões"} para revisar
                </p>
              </div>
            </button>
          )}

          <button
            onClick={onRedoAll}
            className="w-full flex items-center gap-3 p-4 rounded-2xl border-2 border-border bg-muted/40 text-left transition-all hover:bg-muted active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-muted text-muted-foreground">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <p className="font-extrabold text-sm text-foreground">
                {redoAllLabel ?? "Refazer tudo"}
              </p>
              <p className="text-xs text-muted-foreground">
                Começa do zero — respostas anteriores serão substituídas
              </p>
            </div>
          </button>

          <button
            onClick={onSkip}
            className="w-full flex items-center gap-3 p-4 rounded-2xl border border-border text-left text-muted-foreground hover:bg-muted transition-colors active:scale-[0.99]"
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0">
              <SkipForward className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground">
                {skipLabel ?? "Pular atividade"}
              </p>
              <p className="text-xs">
                {skipSubLabel ?? "Marca como concluída e volta ao módulo"}
              </p>
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
