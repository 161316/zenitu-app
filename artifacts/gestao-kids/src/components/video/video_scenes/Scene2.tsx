import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4500),
      setTimeout(() => setPhase(4), 6500),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center px-[10vw]"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ opacity: 0, x: '-50%' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-[50%] z-10 relative">
        <motion.h2 
          className="text-[5vw] font-bold leading-[1.1] mb-6"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
          initial={{ opacity: 0, x: -50 }}
          animate={phase >= 1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
        >
          Aprenda <br/>
          <span className="text-[#a78bfa]">Gestão de Negócios</span>
        </motion.h2>

        <motion.p
          className="text-[2vw] text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          De um jeito que você nunca viu.
        </motion.p>
      </div>

      <div className="w-[50%] relative h-full flex items-center justify-center">
        {/* Floating business elements */}
        {phase >= 3 && (
          <motion.div 
            className="absolute top-[30%] left-[20%] w-[15vw] h-[15vw] bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 flex flex-col items-center justify-center shadow-xl"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: [-5, 5, -5] }}
            transition={{ scale: { type: 'spring', bounce: 0.5 }, rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="text-[4vw] mb-2">💰</span>
            <span className="text-[1.5vw] font-bold text-[#fbbf24]">Finanças</span>
          </motion.div>
        )}

        {phase >= 4 && (
          <motion.div 
            className="absolute top-[50%] right-[10%] w-[18vw] h-[18vw] bg-[#a78bfa]/20 backdrop-blur-xl rounded-full border border-[#a78bfa]/40 p-6 flex flex-col items-center justify-center shadow-xl"
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: [0, -20, 0] }}
            transition={{ scale: { type: 'spring', bounce: 0.4 }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="text-[5vw] mb-2">🚀</span>
            <span className="text-[1.8vw] font-bold text-white">Estratégia</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}