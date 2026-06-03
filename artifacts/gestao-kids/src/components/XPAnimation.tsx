import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface XPAnimationProps {
  amount: number;
  onDone?: () => void;
}

export function XPAnimation({ amount, onDone }: XPAnimationProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      onDone?.();
    }, 1400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-1/2 left-1/2 z-50 pointer-events-none select-none"
          style={{ translateX: "-50%", translateY: "-50%" }}
          initial={{ y: 0, opacity: 1, scale: 0.8 }}
          animate={{ y: -80, opacity: 0, scale: 1.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-2xl font-extrabold text-2xl border-4 border-white">
            +{amount} XP ⭐
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  size: number;
}

export function Confetti() {
  const [pieces] = useState<ConfettiPiece[]>(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: ["#6C3CE1", "#F59E0B", "#EC4899", "#10B981", "#3B82F6", "#EF4444"][Math.floor(Math.random() * 6)],
      delay: Math.random() * 0.8,
      duration: 1.5 + Math.random() * 1.5,
      size: 8 + Math.random() * 12,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {pieces.map(p => (
        <motion.div
          key={p.id}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${p.x}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: "110vh", opacity: 0, rotate: 720 }}
          transition={{ duration: p.duration, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
}
