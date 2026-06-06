import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTheme, THEMES, type ThemeId } from "@/hooks/useTheme";

export default function ThemeSelector() {
  const { themeId, setTheme, theme } = useTheme();

  return (
    <div className="bg-card border border-card-border rounded-2xl p-5">
      <h2 className="font-extrabold text-foreground mb-1 flex items-center gap-2">
        🎨 Tema Visual
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Escolha a aparência do app. Salvo automaticamente no seu dispositivo.
      </p>

      <div className="space-y-3">
        {THEMES.map(t => {
          const isActive = t.id === themeId;
          return (
            <motion.button
              key={t.id}
              onClick={() => setTheme(t.id as ThemeId)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full text-left rounded-2xl overflow-hidden border-2 transition-all duration-200"
              style={
                isActive
                  ? { borderColor: theme.colors.primary, boxShadow: `0 0 16px ${theme.colors.headerGlow}` }
                  : { borderColor: "transparent", outline: "1px solid hsl(var(--border))" }
              }
            >
              {/* Preview strip */}
              <div
                className="h-10 w-full"
                style={{ background: t.bgGradient }}
              >
                <div className="h-full flex items-center px-4 gap-2">
                  {t.showStars && (
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="rounded-full bg-white"
                          style={{ width: 2, height: 2, opacity: 0.5 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  )}
                  {t.preview.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-white/30"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <span
                    className="text-xs font-bold ml-1 opacity-80"
                    style={{ color: t.isDark ? "#fff" : "#1a1a2e", fontFamily: `'${t.fontHeading}', sans-serif` }}
                  >
                    Aa
                  </span>
                </div>
              </div>

              {/* Info row */}
              <div className="flex items-center justify-between px-4 py-3 bg-card">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{t.emoji}</span>
                  <div>
                    <p className="text-sm font-extrabold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.isDark ? "Tema escuro" : "Tema claro"} · {t.fontHeading}
                    </p>
                  </div>
                </div>

                {isActive ? (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: theme.colors.primary }}
                  >
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-border" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
        🔒 Preferência salva localmente. Nenhum dado é enviado para servidores.
      </p>
    </div>
  );
}
