import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MODULES = [
  { icon: '🏪', name: 'O que é um Negócio?' },
  { icon: '📣', name: 'Marketing e Vendas' },
  { icon: '💡', name: 'Inovação' },
  { icon: '👑', name: 'Liderança' },
];

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000), // Card 1
      setTimeout(() => setPhase(3), 3500), // Card 2
      setTimeout(() => setPhase(4), 5000), // Card 3
      setTimeout(() => setPhase(5), 6500), // Card 4
      setTimeout(() => setPhase(6), 8500), // Outro
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="text-[4vw] font-bold text-center mb-12"
        style={{ fontFamily: 'Fredoka, sans-serif' }}
        initial={{ opacity: 0, y: -30 }}
        animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        14 Módulos Incríveis
      </motion.h2>

      <div className="flex gap-[3vw] px-[5vw]">
        {MODULES.map((mod, index) => (
          <motion.div
            key={index}
            className="w-[18vw] h-[25vw] bg-[#1a0533]/60 backdrop-blur-md rounded-3xl border-2 border-[#a78bfa]/30 flex flex-col items-center justify-center p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 100, rotateX: 45 }}
            animate={phase >= index + 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 45 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-[#a78bfa]/20 to-transparent"
              initial={{ opacity: 0 }}
              animate={phase >= index + 2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            
            <span className="text-[6vw] mb-4 block relative z-10 drop-shadow-xl">{mod.icon}</span>
            <span className="text-[1.5vw] font-bold text-center relative z-10 leading-tight">
              {mod.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}