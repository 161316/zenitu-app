import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000), // XP bar starts filling
      setTimeout(() => setPhase(3), 4000), // Level up text
      setTimeout(() => setPhase(4), 6000), // Badge drops
      setTimeout(() => setPhase(5), 9000), // Outro
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, scale: 1.5 }}
      transition={{ duration: 1, ease: 'circOut' }}
    >
      <div className="w-[60vw] bg-white/5 backdrop-blur-2xl rounded-[3vw] border border-white/10 p-[5vw] flex flex-col items-center relative shadow-[0_0_100px_rgba(52,211,153,0.1)]">
        
        <motion.h2 
          className="text-[4vw] font-bold text-white mb-12 text-center"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          Evolua seu Conhecimento
        </motion.h2>

        {/* Progress Bar Container */}
        <motion.div 
          className="w-full h-[3vw] bg-[#0d0221] rounded-full overflow-hidden border border-[#a78bfa]/30 relative shadow-inner"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={phase >= 1 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated Fill */}
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#34d399] to-[#10b981] rounded-full"
            initial={{ width: '10%' }}
            animate={phase >= 2 ? { width: '85%' } : { width: '10%' }}
            transition={{ duration: 2, ease: 'easeOut' }}
          />
          {/* Shimmer */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        <div className="w-full flex justify-between mt-4 px-2">
          <span className="text-[1.5vw] text-white/60">Nível 4</span>
          <span className="text-[1.5vw] text-[#34d399] font-bold">850 / 1000 XP</span>
        </div>

        {/* Level Up / Badge */}
        {phase >= 4 && (
          <motion.div 
            className="absolute top-[-20%] right-[-10%] w-[15vw] h-[15vw] bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] rounded-full shadow-[0_0_50px_rgba(251,191,36,0.6)] flex items-center justify-center border-4 border-white/20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <span className="text-[6vw]">🏆</span>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}