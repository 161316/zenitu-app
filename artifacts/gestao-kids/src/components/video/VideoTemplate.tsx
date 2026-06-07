import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video/hooks';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = { 
  open: 6000, 
  concept: 8000, 
  modules: 10000, 
  gamification: 12000, 
  close: 9000 
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({ durations: SCENE_DURATIONS });

  return (
    <div className="relative w-full h-screen overflow-hidden text-[#f0e6ff]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Persistent Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0221] to-[#1a0533]">
        <motion.div className="absolute w-[80vw] h-[80vw] rounded-full opacity-20 blur-[100px] top-[-20%] left-[-10%]"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent)' }}
          animate={{ x: ['-5%', '10%', '-5%'], y: ['-5%', '15%', '-5%'], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute w-[60vw] h-[60vw] rounded-full opacity-15 blur-[100px] bottom-[-20%] right-[-10%]"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent)' }}
          animate={{ x: ['5%', '-10%', '5%'], y: ['5%', '-15%', '5%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      {/* Persistent Particles (Stars) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Scenes */}
      <AnimatePresence mode="popLayout">
        {currentScene === 0 && <Scene1 key="open" />}
        {currentScene === 1 && <Scene2 key="concept" />}
        {currentScene === 2 && <Scene3 key="modules" />}
        {currentScene === 3 && <Scene4 key="gamification" />}
        {currentScene === 4 && <Scene5 key="close" />}
      </AnimatePresence>
    </div>
  );
}