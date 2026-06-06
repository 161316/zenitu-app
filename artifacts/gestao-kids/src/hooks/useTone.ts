import { useMemo } from "react";
import { useProgress } from "./useProgress";
import { MODULES } from "@/data/modules";
import { getTone, type Tone } from "@/data/tones";

export function useTone(): { tone: Tone; completedModules: number } {
  const { progress } = useProgress();

  const completedModules = useMemo(() => {
    return MODULES.filter(mod =>
      mod.lessons.every(l => progress.completedLessons.includes(`${mod.id}:${l.id}`))
    ).length;
  }, [progress.completedLessons]);

  const tone = useMemo(() => getTone(completedModules), [completedModules]);

  return { tone, completedModules };
}
