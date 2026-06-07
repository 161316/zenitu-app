import { useState, useEffect } from "react";

export function useVideoPlayer({ durations }: { durations: Record<string, number> }) {
  const [currentScene, setCurrentScene] = useState(0);
  const sceneKeys = Object.keys(durations);
  const numScenes = sceneKeys.length;

  useEffect(() => {
    // @ts-ignore
    window.startRecording?.();

    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const playScene = (index: number) => {
      if (!isMounted) return;
      setCurrentScene(index);

      const sceneKey = sceneKeys[index];
      const duration = durations[sceneKey];

      timeoutId = setTimeout(() => {
        if (index === numScenes - 1) {
          // @ts-ignore
          window.stopRecording?.();
          playScene(0); // loop back
        } else {
          playScene(index + 1);
        }
      }, duration);
    };

    playScene(0);

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []); // Empty deps so it only starts once

  return { currentScene, sceneKey: sceneKeys[currentScene] };
}