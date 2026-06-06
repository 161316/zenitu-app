import { useRef, useEffect, useState } from "react";
import { Download, X, Share2, Loader2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface ShareCardProps {
  moduleId: string;
  moduleTitle: string;
  moduleEmoji: string;
  moduleColor: string;
  lessonTitle: string;
  xpReward: number;
  onClose: () => void;
}

const PHRASES: Record<string, string[]> = {
  negocio: [
    "Todo grande negócio começa com uma ideia simples e muita determinação.",
    "Empreender é transformar problemas em oportunidades reais.",
    "Grandes negócios são construídos tijolo por tijolo, aula por aula.",
  ],
  financas: [
    "Quem entende finanças constrói a própria liberdade.",
    "Conhecimento financeiro é o investimento com maior retorno.",
    "Controle o seu dinheiro antes que ele controle você.",
  ],
  marketing: [
    "Não venda produtos — resolva problemas reais das pessoas.",
    "O melhor marketing do mundo é um cliente genuinamente satisfeito.",
    "Entender seu cliente é entender o futuro do seu negócio.",
  ],
  lideranca: [
    "Liderança não é sobre ser o chefe — é sobre servir a equipe.",
    "Um bom líder cria mais líderes, não mais seguidores.",
    "A maior marca de um líder é o crescimento das pessoas ao seu redor.",
  ],
  estrategia: [
    "Estratégia é saber o que NÃO fazer, tanto quanto o que fazer.",
    "Pense grande, comece pequeno, aprenda rápido.",
    "Sem estratégia, até o melhor produto naufraga.",
  ],
  inovacao: [
    "Inovar é ter coragem de questionar o que todos consideram óbvio.",
    "A inovação distingue um líder de um seguidor.",
    "O mundo recompensa quem resolve problemas de formas novas.",
  ],
  clientes: [
    "O cliente não é interrupção do seu trabalho — é o motivo dele.",
    "Cada cliente satisfeito é um vendedor que você não precisa contratar.",
    "Fidelizar é 5x mais barato do que conquistar.",
  ],
  empreendedorismo: [
    "Sua jornada de mil negócios começa com uma única ideia corajosa.",
    "Empreendedores não evitam riscos — eles os calculam e abraçam.",
    "O fracasso é apenas um rascunho do sucesso que ainda está por vir.",
  ],
};

const GENERIC = [
  "Cada aula é um passo mais perto do seu primeiro negócio.",
  "O conhecimento de hoje é o diferencial de amanhã.",
  "Aprenda sem parar. O mercado nunca para.",
  "Quem aprende todos os dias está sempre à frente.",
  "Conhecimento não ocupa espaço — mas abre todas as portas.",
  "O sucesso não é definitivo: o que conta é a coragem de continuar.",
];

function getPhrase(moduleId: string, lessonTitle: string): string {
  const pool = PHRASES[moduleId] ?? GENERIC;
  let hash = 0;
  for (const c of (moduleId + lessonTitle)) hash = (hash * 31 + c.charCodeAt(0)) & 0x7fffffff;
  return pool[hash % pool.length];
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = test;
    }
  }
  if (line) ctx.fillText(line, x, currentY);
  return currentY;
}

function hexToComponents(hex: string): [number, number, number] {
  const c = hex.replace("#", "");
  return [
    parseInt(c.slice(0, 2), 16),
    parseInt(c.slice(2, 4), 16),
    parseInt(c.slice(4, 6), 16),
  ];
}

function darken(hex: string, amount: number): string {
  try {
    const [r, g, b] = hexToComponents(hex);
    return `rgb(${Math.max(0, r - amount)}, ${Math.max(0, g - amount)}, ${Math.max(0, b - amount)})`;
  } catch {
    return hex;
  }
}

function generateCanvas(
  canvas: HTMLCanvasElement,
  options: {
    moduleTitle: string;
    moduleEmoji: string;
    moduleColor: string;
    lessonTitle: string;
    xpReward: number;
    phrase: string;
  }
): Promise<void> {
  return document.fonts.ready.then(() => {
    const { moduleTitle, moduleEmoji, moduleColor, lessonTitle, xpReward, phrase } = options;
    const ctx = canvas.getContext("2d")!;
    const SIZE = 1080;
    canvas.width = SIZE;
    canvas.height = SIZE;

    // Background gradient
    const bg = ctx.createLinearGradient(0, 0, SIZE, SIZE);
    bg.addColorStop(0, moduleColor);
    bg.addColorStop(1, darken(moduleColor, 60));
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Dark overlay for contrast
    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Decorative circles
    ctx.beginPath();
    ctx.arc(SIZE - 80, 80, 220, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(80, SIZE - 80, 180, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    ctx.fill();

    // Top brand bar
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fillRect(0, 0, SIZE, 110);

    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "bold 58px 'Fredoka', 'Nunito', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ZENITU", SIZE / 2, 74);

    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "28px 'Space Grotesk', 'Inter', sans-serif";
    ctx.fillText("Negócios para jovens empreendedores 🚀", SIZE / 2, 100);

    // Module emoji (large)
    ctx.font = "200px serif";
    ctx.textAlign = "center";
    ctx.fillText(moduleEmoji, SIZE / 2, 380);

    // "Aula Concluída" badge
    const badgeW = 420, badgeH = 62, badgeX = (SIZE - badgeW) / 2, badgeY = 410;
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.beginPath();
    ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 31);
    ctx.fill();
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "bold 32px 'Inter', sans-serif";
    ctx.fillText("✓  Aula Concluída  •  +" + xpReward + " XP", SIZE / 2, badgeY + 40);

    // Module title
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "bold 50px 'Fredoka', 'Nunito', sans-serif";
    ctx.fillText(moduleTitle, SIZE / 2, 540);

    // Lesson title
    ctx.fillStyle = "rgba(255,255,255,0.75)";
    ctx.font = "36px 'Space Grotesk', 'Inter', sans-serif";
    // Truncate lesson title if too long
    const maxLessonWidth = SIZE * 0.8;
    let lessonText = lessonTitle;
    while (ctx.measureText(lessonText).width > maxLessonWidth && lessonText.length > 10) {
      lessonText = lessonText.slice(0, -1);
    }
    if (lessonText !== lessonTitle) lessonText += "…";
    ctx.fillText(lessonText, SIZE / 2, 590);

    // Divider
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(SIZE * 0.12, 630);
    ctx.lineTo(SIZE * 0.88, 630);
    ctx.stroke();

    // Motivational phrase
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.font = "italic 38px 'Space Grotesk', 'Georgia', serif";
    wrapText(ctx, `"${phrase}"`, SIZE / 2, 700, SIZE * 0.78, 54);

    // Footer
    ctx.fillStyle = "rgba(255,255,255,0.35)";
    ctx.font = "26px 'Inter', sans-serif";
    ctx.fillText("zenitu.com.br  •  #zenitu  •  #negociosjovens", SIZE / 2, SIZE - 48);

    // Bottom line
    ctx.fillStyle = "rgba(255,255,255,0.15)";
    ctx.fillRect(0, SIZE - 16, SIZE, 16);
  });
}

export function ShareCardModal({
  moduleId,
  moduleTitle,
  moduleEmoji,
  moduleColor,
  lessonTitle,
  xpReward,
  onClose,
}: ShareCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [generating, setGenerating] = useState(true);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const phrase = getPhrase(moduleId, lessonTitle);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setGenerating(true);
    generateCanvas(canvas, { moduleTitle, moduleEmoji, moduleColor, lessonTitle, xpReward, phrase })
      .then(() => {
        setImageUrl(canvas.toDataURL("image/png"));
        setGenerating(false);
      })
      .catch(() => setGenerating(false));
  }, []);

  const handleDownload = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.download = `zenitu-${moduleId}-${Date.now()}.png`;
    a.href = imageUrl;
    a.click();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", zIndex: 100 }}
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-xs space-y-4">
        {/* Canvas (hidden for generation) */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Preview */}
        <div
          className="w-full rounded-2xl overflow-hidden shadow-2xl relative"
          style={{ aspectRatio: "1/1" }}
        >
          {generating && (
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: moduleColor }}>
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
          )}
          {imageUrl && !generating && (
            <img src={imageUrl} alt="Card para postar" className="w-full h-full object-cover" />
          )}
        </div>

        {/* Phrase preview */}
        {!generating && (
          <div
            className="rounded-xl p-3 text-center text-xs italic"
            style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}`, color: theme.colors.textMuted }}
          >
            "{phrase}"
          </div>
        )}

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={onClose}
            className="py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
            style={{ background: theme.colors.glassCard, border: `1px solid ${theme.colors.glassCardBorder}`, color: theme.colors.text }}
          >
            <X className="w-4 h-4" /> Fechar
          </button>
          <button
            onClick={handleDownload}
            disabled={generating || !imageUrl}
            className="py-3 rounded-xl font-extrabold text-white text-sm flex items-center justify-center gap-2 disabled:opacity-50"
            style={{ background: moduleColor }}
          >
            <Download className="w-4 h-4" /> Baixar PNG
          </button>
        </div>

        <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          Salve e compartilhe no Instagram, WhatsApp ou LinkedIn! 📲
        </p>
      </div>
    </div>
  );
}
