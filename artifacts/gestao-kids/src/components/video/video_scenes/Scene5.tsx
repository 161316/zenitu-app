import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1000), // Logo
      setTimeout(() => setPhase(2), 3000), // Tagline
      setTimeout(() => setPhase(3), 5000), // Call to action style text
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-[#0d0221]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="w-[20vw] h-[20vw] bg-gradient-to-tr from-[#a78bfa] to-[#fbbf24] rounded-full blur-[120px] absolute"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.h1 
        className="text-[10vw] font-bold text-white relative z-10"
        style={{ fontFamily: 'Fredoka, sans-serif' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        ZENITU
      </motion.h1>

      <motion.p 
        className="text-[2.5vw] text-white/80 mt-4 text-center max-w-[60vw] relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        Gestão para a geração que vai mudar o Brasil.
      </motion.p>
      
      <motion.div
        className="mt-12 px-8 py-4 bg-[#34d399]/20 border border-[#34d399]/50 rounded-full text-[#34d399] font-bold text-[1.8vw] relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        Comece sua jornada
      </motion.div>
    </motion.div>
  );
}