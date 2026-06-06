import { useState, useEffect, useCallback } from "react";

export type ThemeId = "cosmic" | "neon" | "tropical";

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  textMuted: string;
  glassCard: string;
  glassCardBorder: string;
  ctaGradient: string;
  xpBarGradient: string;
  headerGlow: string;
  moduleGlow: string;
}

export interface AppTheme {
  id: ThemeId;
  name: string;
  emoji: string;
  preview: string[];
  isDark: boolean;
  showStars: boolean;
  bgGradient: string;
  fontHeading: string;
  fontBody: string;
  colors: ThemeColors;
  cssVars: Record<string, string>;
}

export const THEMES: AppTheme[] = [
  {
    id: "cosmic",
    name: "Cósmico",
    emoji: "🚀",
    preview: ["#a78bfa", "#fbbf24", "#34d399"],
    isDark: true,
    showStars: true,
    bgGradient: "linear-gradient(180deg, #0d0221 0%, #1a0533 60%, #120228 100%)",
    fontHeading: "Fredoka",
    fontBody: "Space Grotesk",
    colors: {
      primary: "#a78bfa",
      secondary: "#fbbf24",
      accent: "#34d399",
      text: "#f0e6ff",
      textMuted: "#9d8ec4",
      glassCard: "rgba(255,255,255,0.07)",
      glassCardBorder: "rgba(255,255,255,0.13)",
      ctaGradient: "linear-gradient(135deg, #7c3aed, #a78bfa)",
      xpBarGradient: "linear-gradient(90deg, #10b981, #34d399)",
      headerGlow: "rgba(167,139,250,0.3)",
      moduleGlow: "rgba(167,139,250,0.35)",
    },
    cssVars: {
      "--background": "258 94% 7%",
      "--foreground": "270 80% 94%",
      "--border": "258 40% 22%",
      "--card": "258 75% 10%",
      "--card-foreground": "270 80% 94%",
      "--card-border": "258 40% 22%",
      "--primary": "262 83% 74%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "43 96% 56%",
      "--secondary-foreground": "258 94% 10%",
      "--muted": "258 50% 14%",
      "--muted-foreground": "258 35% 62%",
      "--accent": "160 84% 50%",
      "--accent-foreground": "0 0% 100%",
      "--destructive": "0 72% 55%",
      "--destructive-foreground": "0 0% 100%",
      "--input": "258 40% 22%",
      "--ring": "262 83% 74%",
    },
  },
  {
    id: "neon",
    name: "Galáxia Neon",
    emoji: "🌌",
    preview: ["#00f5d4", "#bf5af2", "#f5a623"],
    isDark: true,
    showStars: true,
    bgGradient: "linear-gradient(180deg, #09090f 0%, #0d0d1f 100%)",
    fontHeading: "Orbitron",
    fontBody: "Inter",
    colors: {
      primary: "#00f5d4",
      secondary: "#bf5af2",
      accent: "#f5a623",
      text: "#e8e8ff",
      textMuted: "#6b7a9f",
      glassCard: "rgba(0,245,212,0.05)",
      glassCardBorder: "rgba(0,245,212,0.18)",
      ctaGradient: "linear-gradient(135deg, #00c4a7, #00f5d4)",
      xpBarGradient: "linear-gradient(90deg, #f5a623, #ffd060)",
      headerGlow: "rgba(0,245,212,0.25)",
      moduleGlow: "rgba(0,245,212,0.3)",
    },
    cssVars: {
      "--background": "240 62% 5%",
      "--foreground": "240 60% 93%",
      "--border": "175 30% 18%",
      "--card": "240 40% 8%",
      "--card-foreground": "240 60% 93%",
      "--card-border": "175 30% 18%",
      "--primary": "175 100% 48%",
      "--primary-foreground": "240 62% 5%",
      "--secondary": "285 83% 65%",
      "--secondary-foreground": "0 0% 100%",
      "--muted": "235 30% 12%",
      "--muted-foreground": "228 18% 52%",
      "--accent": "38 90% 55%",
      "--accent-foreground": "0 0% 100%",
      "--destructive": "0 72% 55%",
      "--destructive-foreground": "0 0% 100%",
      "--input": "175 20% 18%",
      "--ring": "175 100% 48%",
    },
  },
  {
    id: "tropical",
    name: "Tropical Dourado",
    emoji: "🦊",
    preview: ["#e85d04", "#ffc107", "#06d6a0"],
    isDark: false,
    showStars: false,
    bgGradient: "linear-gradient(180deg, #fffbf0 0%, #fff8e7 100%)",
    fontHeading: "Nunito",
    fontBody: "Nunito",
    colors: {
      primary: "#e85d04",
      secondary: "#ffc107",
      accent: "#06d6a0",
      text: "#1a1a2e",
      textMuted: "#6c584c",
      glassCard: "rgba(0,0,0,0.04)",
      glassCardBorder: "rgba(232,93,4,0.18)",
      ctaGradient: "linear-gradient(135deg, #e85d04, #f97316)",
      xpBarGradient: "linear-gradient(90deg, #e85d04, #ffc107)",
      headerGlow: "rgba(232,93,4,0.2)",
      moduleGlow: "rgba(232,93,4,0.25)",
    },
    cssVars: {
      "--background": "42 100% 97%",
      "--foreground": "233 44% 15%",
      "--border": "36 30% 85%",
      "--card": "0 0% 100%",
      "--card-foreground": "233 44% 15%",
      "--card-border": "36 30% 85%",
      "--primary": "22 96% 45%",
      "--primary-foreground": "0 0% 100%",
      "--secondary": "45 100% 51%",
      "--secondary-foreground": "233 44% 15%",
      "--muted": "40 60% 92%",
      "--muted-foreground": "22 13% 43%",
      "--accent": "165 95% 43%",
      "--accent-foreground": "0 0% 100%",
      "--destructive": "0 72% 55%",
      "--destructive-foreground": "0 0% 100%",
      "--input": "36 30% 85%",
      "--ring": "22 96% 45%",
    },
  },
];

const STORAGE_KEY = "zenitu-theme";

function applyTheme(theme: AppTheme) {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(theme.cssVars)) {
    root.style.setProperty(key, value);
  }
  root.style.setProperty("--app-font-sans", `'${theme.fontBody}', sans-serif`);
}

export function useTheme() {
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    return stored && THEMES.find(t => t.id === stored) ? stored : "cosmic";
  });

  const theme = THEMES.find(t => t.id === themeId) ?? THEMES[0];

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setTheme = useCallback((id: ThemeId) => {
    localStorage.setItem(STORAGE_KEY, id);
    setThemeId(id);
  }, []);

  return { theme, themeId, setTheme, themes: THEMES };
}
