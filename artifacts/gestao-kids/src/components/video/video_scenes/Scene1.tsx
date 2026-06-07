import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 4000),
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      transition={{ duration: 1 }}
    >
      <div className="text-center z-10 relative">
        <motion.div 
          className="mb-8 relative"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Logo element */}
          <motion.div 
            className="w-32 h-32 mx-auto bg-gradient-to-tr from-[#a78bfa] to-[#fbbf24] rounded-3xl shadow-[0_0_50px_rgba(167,139,250,0.5)] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <span className="text-5xl">🚀</span>
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-[8vw] font-bold text-white tracking-tight"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          ZENITU
        </motion.h1>

        <motion.div
          className="h-[3px] bg-[#34d399] mx-auto mt-4"
          initial={{ width: 0 }}
          animate={phase >= 2 ? { width: '60%' } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        />

        <motion.p
          className="text-[2vw] text-[#fbbf24] mt-6 font-medium tracking-wide uppercase"
          initial={{ opacity: 0, letterSpacing: '0em' }}
          animate={phase >= 3 ? { opacity: 1, letterSpacing: '0.1em' } : { opacity: 0, letterSpacing: '0em' }}
          transition={{ duration: 1 }}
        >
          Prepare-se para o futuro
        </motion.p>
      </div>
    </motion.div>
  );
}