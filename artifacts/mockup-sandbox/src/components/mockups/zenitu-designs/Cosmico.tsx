import React from 'react';
import { Bell, Lock, Home, Book, Trophy, Search, User, Rocket, Zap, Crown, ArrowRight, Star } from 'lucide-react';

export default function Cosmico() {
  return (
    <div className="relative w-full max-w-[430px] h-[932px] mx-auto overflow-hidden bg-black shadow-2xl sm:rounded-[3rem] sm:border-[8px] border-zinc-900 font-['Space_Grotesk'] text-[#f0e6ff] flex flex-col"
         style={{ background: 'linear-gradient(180deg, #0d0221 0%, #1a0533 100%)' }}>
      
      {/* Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        .glass-card {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .glass-nav {
          background: rgba(13, 2, 33, 0.6);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle var(--duration, 3s) infinite alternate;
        }

        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.2); }
        }
      `}} />

      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              '--duration': (Math.random() * 3 + 2) + 's',
              opacity: Math.random() * 0.7 + 0.1
            } as any}
          />
        ))}
      </div>

      {/* Main Content Scroll Area */}
      <div className="flex-1 overflow-y-auto z-10 pb-24 no-scrollbar">
        
        {/* Header */}
        <header className="px-6 pt-14 pb-4 flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#a78bfa] to-[#fbbf24] flex items-center justify-center p-[1px]">
               <div className="w-full h-full bg-[#0d0221] rounded-full flex items-center justify-center">
                 <Rocket size={16} className="text-[#a78bfa]" />
               </div>
            </div>
            <span className="font-['Fredoka'] font-bold text-xl tracking-wide text-white">ZENITU</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Mascot */}
            <div className="relative w-[60px] h-[60px] animate-[bounce_4s_ease-in-out_infinite]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.1)" stroke="#a78bfa" strokeWidth="2"/>
                <circle cx="50" cy="50" r="32" fill="#1a0533"/>
                {/* Face */}
                <path d="M40 45 Q50 55 60 45" stroke="#f0e6ff" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="38" cy="40" r="3" fill="#f0e6ff"/>
                <circle cx="62" cy="40" r="3" fill="#f0e6ff"/>
                {/* Helmet details */}
                <path d="M20 50 A30 30 0 0 1 80 50" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4"/>
                <circle cx="85" cy="20" r="3" fill="#fbbf24"/>
                <circle cx="15" cy="80" r="4" fill="#a78bfa"/>
              </svg>
            </div>
            
            <button className="relative p-2 rounded-full glass-card hover:bg-white/10 transition-colors">
              <Bell size={20} className="text-white" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-[#fbbf24] rounded-full border border-[#0d0221]"></span>
            </button>
          </div>
        </header>

        <main className="px-6 space-y-8 mt-4">
          
          {/* Hero Section */}
          <section className="space-y-4">
            <h1 className="font-['Fredoka'] font-semibold text-3xl leading-tight">
              Olá, Empreendedor! <span className="inline-block animate-pulse">🌟</span>
            </h1>
            
            <div className="glass-card rounded-[24px] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#a78bfa] rounded-full blur-[60px] opacity-20 -mr-10 -mt-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h3 className="font-['Fredoka'] text-xl font-medium text-[#f0e6ff]">Explorador Nível 7</h3>
                  <div className="flex items-center gap-1.5 mt-1 text-sm font-medium text-[#fbbf24]">
                    <span>🔥</span>
                    <span>12 dias de sequência</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <div className="flex justify-between text-xs font-semibold tracking-wider text-[#9d8ec4] uppercase">
                  <span>Progresso</span>
                  <span className="text-[#34d399]">2.450 / 3.000 XP</span>
                </div>
                <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-full w-[81.6%] relative shadow-[0_0_10px_rgba(52,211,153,0.5)]">
                    <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-white/30 to-transparent"></div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between relative z-10">
                <span className="text-xs text-[#9d8ec4] font-medium uppercase tracking-wider">Conquistas Recentes</span>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1a0533] border border-[#a78bfa] flex items-center justify-center text-sm shadow-lg z-30">🚀</div>
                  <div className="w-8 h-8 rounded-full bg-[#1a0533] border border-[#fbbf24] flex items-center justify-center text-sm shadow-lg z-20">💰</div>
                  <div className="w-8 h-8 rounded-full bg-[#1a0533] border border-[#34d399] flex items-center justify-center text-sm shadow-lg z-10">🎯</div>
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-bold shadow-lg text-[#9d8ec4] backdrop-blur-md">+2</div>
                </div>
              </div>
            </div>
          </section>

          {/* Missions Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-['Fredoka'] font-semibold text-2xl text-[#fbbf24] flex items-center gap-2">
                Missões
              </h2>
            </div>

            <div className="space-y-3">
              {/* Active Module */}
              <div className="glass-card rounded-2xl p-4 border-[#fbbf24]/40 shadow-[0_0_15px_rgba(251,191,36,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fbbf24]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex gap-4 items-center relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#fbbf24]/20 to-[#fbbf24]/5 border border-[#fbbf24]/30 flex items-center justify-center text-2xl shadow-[0_0_10px_rgba(251,191,36,0.2)]">
                    🚀
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Fredoka'] text-[17px] font-medium text-white mb-1">Empreendedorismo</h3>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div className="h-full bg-[#fbbf24] w-[40%] rounded-full"></div>
                      </div>
                      <span className="text-xs font-bold text-[#fbbf24]">40%</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-4 py-2.5 rounded-xl bg-gradient-to-r from-[#fbbf24]/20 to-transparent border border-[#fbbf24]/30 text-[#fbbf24] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#fbbf24]/30 transition-colors">
                  Continuar <ArrowRight size={16} />
                </button>
              </div>

              {/* Locked Module 1 */}
              <div className="glass-card rounded-2xl p-4 opacity-60">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-2xl grayscale">
                    📡
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Fredoka'] text-[17px] font-medium text-white mb-1">Vendas & Marketing</h3>
                    <p className="text-xs text-[#9d8ec4]">Complete o módulo anterior</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
                    <Lock size={14} className="text-[#9d8ec4]" />
                  </div>
                </div>
              </div>

              {/* Locked Module 2 */}
              <div className="glass-card rounded-2xl p-4 opacity-60">
                <div className="flex gap-4 items-center">
                  <div className="w-14 h-14 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-2xl grayscale">
                    💎
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['Fredoka'] text-[17px] font-medium text-white mb-1">Finanças</h3>
                    <p className="text-xs text-[#9d8ec4]">Nível 10 requerido</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center">
                    <Lock size={14} className="text-[#9d8ec4]" />
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>
      </div>

      {/* Bottom Navigation */}
      <nav className="glass-nav absolute bottom-0 w-full px-6 py-5 rounded-b-[2.5rem]">
        <div className="flex justify-between items-center max-w-sm mx-auto relative">
          
          <button className="flex flex-col items-center gap-1.5 relative group">
            <div className="text-[#fbbf24] transition-transform group-hover:scale-110">
              <Home size={24} strokeWidth={2.5} />
            </div>
            <span className="w-1 h-1 rounded-full bg-[#fbbf24] absolute -bottom-3"></span>
          </button>
          
          <button className="flex flex-col items-center gap-1.5 text-[#9d8ec4] hover:text-white transition-colors">
            <Book size={24} />
          </button>
          
          <div className="relative -top-5">
            <button className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#a78bfa] to-[#fbbf24] p-[2px] shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-transform hover:scale-105">
              <div className="w-full h-full bg-[#0d0221] rounded-full flex items-center justify-center">
                <Search size={24} className="text-white" />
              </div>
            </button>
          </div>
          
          <button className="flex flex-col items-center gap-1.5 text-[#9d8ec4] hover:text-white transition-colors">
            <Trophy size={24} />
          </button>
          
          <button className="flex flex-col items-center gap-1.5 text-[#9d8ec4] hover:text-white transition-colors">
            <User size={24} />
          </button>

        </div>
      </nav>

    </div>
  );
}
