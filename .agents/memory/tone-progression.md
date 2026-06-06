---
name: Tone Progression System
description: How the app's communication tone evolves as users complete modules
---

## Rule
Tone is derived from `completedModules` count (modules where ALL lessons are done).

Thresholds: 0-1 → casual (Explorador), 2-4 → building (Aprendiz), 5-9 → professional (Analista), 10+ → executive (Executivo).

**Why:** User requested the app to talk differently as they progress, training professional communication by example.

**How to apply:** Import `useTone()` hook. Returns `{ tone: Tone, completedModules: number }`. Use `tone.greeting(name)`, `tone.lessonCompleteTitle`, `tone.lessonCompleteMsg(xp)`, `tone.encouragement`, etc. Already integrated in Home.tsx and Lesson.tsx. Add to any new page that shows user-facing copy.

Files: `src/data/tones.ts`, `src/hooks/useTone.ts`.
