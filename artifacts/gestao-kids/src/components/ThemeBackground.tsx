import { useTheme } from "@/hooks/useTheme";

const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: (((i * 7 + 3) % 5) * 0.5 + 0.5),
  top: ((i * 31 + 17) % 100),
  left: ((i * 53 + 7) % 100),
  dur: ((i * 13 + 2) % 3) + 2,
  opacity: ((i * 11 + 5) % 6) * 0.08 + 0.1,
}));

interface ThemeBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function ThemeBackground({ children, className = "" }: ThemeBackgroundProps) {
  const { theme } = useTheme();
  return (
    <div
      className={`relative ${className}`}
      style={{ background: theme.bgGradient, minHeight: "100vh" }}
    >
      {theme.showStars && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {STARS.map(s => (
            <div
              key={s.id}
              className="absolute rounded-full bg-white"
              style={{
                width: s.size,
                height: s.size,
                top: `${s.top}%`,
                left: `${s.left}%`,
                opacity: s.opacity,
                animation: `twinkle ${s.dur}s ease-in-out infinite alternate`,
              }}
            />
          ))}
        </div>
      )}
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
