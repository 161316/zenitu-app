import React, { useState } from 'react';
import { Bell, Flame, Lock, BookOpen, Search, Target, User, Play, ChevronRight, Zap } from 'lucide-react';

export default function GalaxiaNeon() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="flex items-center justify-center min-h-screen bg-black/90 p-4 font-sans selection:bg-[#00f5d4] selection:text-black">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@400;500;700;900&display=swap');
        .font-orbitron { font-family: 'Orbitron', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />

      <div 
        className="relative w-full max-w-[430px] h-[932px] max-h-[95vh] overflow-hidden rounded-[40px] border-[8px] border-gray-900 shadow-2xl bg-[#09090f] text-[#e8e8ff] flex flex-col font-inter"
        style={{
          boxShadow: '0 0 50px rgba(0, 245, 212, 0.1), inset 0 0 20px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#00f5d4]/10 to-transparent pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#bf5af2]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-[#00f5d4]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <header className="relative flex items-center justify-between p-6 pt-12 pb-4 z-10">
          <div className="flex items-center gap-3">
            {/* Mascot SVG */}
            <div className="relative w-12 h-12 flex-shrink-0 drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {/* Antenna */}
                <rect x="48" y="10" width="4" height="15" fill="#00f5d4" />
                <circle cx="50" cy="10" r="4" fill="#bf5af2" />
                {/* Head */}
                <rect x="20" y="25" width="60" height="55" rx="12" fill="#12121f" stroke="#00f5d4" strokeWidth="3" />
                <rect x="25" y="30" width="50" height="45" rx="8" fill="#09090f" />
                {/* Eyes */}
                <rect x="32" y="42" width="12" height="12" fill="#00f5d4">
                  <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
                </rect>
                <rect x="56" y="42" width="12" height="12" fill="#00f5d4">
                  <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
                </rect>
                {/* Mouth/Smile */}
                <path d="M38 62 Q50 68 62 62" stroke="#bf5af2" strokeWidth="4" strokeLinecap="round" />
                {/* Ears */}
                <rect x="12" y="45" width="8" height="20" rx="4" fill="#12121f" stroke="#00f5d4" strokeWidth="2" />
                <rect x="80" y="45" width="8" height="20" rx="4" fill="#12121f" stroke="#00f5d4" strokeWidth="2" />
              </svg>
            </div>
            <div>
              <h1 className="font-orbitron font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00f5d4] to-[#bf5af2]" style={{ textShadow: '0 0 10px rgba(0, 245, 212, 0.3)' }}>
                ZENITU
              </h1>
              <p className="text-[10px] text-[#6b7a9f] tracking-widest uppercase font-semibold">Do zero ao master</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 bg-[#12121f] px-3 py-1.5 rounded-full border border-[#f5a623]/30" style={{ boxShadow: '0 0 10px rgba(245, 166, 35, 0.2)' }}>
              <Flame size={14} className="text-[#f5a623] fill-[#f5a623]" />
              <span className="text-[#f5a623] font-bold text-sm">12</span>
            </div>
            <button className="relative w-10 h-10 rounded-full bg-[#12121f] flex items-center justify-center border border-white/5 hover:border-[#00f5d4]/50 transition-colors">
              <Bell size={18} className="text-[#e8e8ff]" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#bf5af2] rounded-full shadow-[0_0_8px_#bf5af2]"></span>
            </button>
          </div>
        </header>

        {/* Main Scrollable Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 px-6 z-10 flex flex-col gap-8">
          
          {/* User Status Card */}
          <section>
            <div 
              className="relative rounded-2xl bg-[#12121f] p-5 border border-[#00f5d4]/20 overflow-hidden"
              style={{ boxShadow: '0 0 20px rgba(0, 245, 212, 0.1)' }}
            >
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,245,212,0.05)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <h2 className="text-xl font-bold mb-1">Olá, Empreendedor! 🚀</h2>
                  <div className="inline-flex items-center gap-2 bg-[#bf5af2]/10 px-2 py-1 rounded text-xs font-bold text-[#bf5af2] border border-[#bf5af2]/30 uppercase tracking-wider">
                    <Zap size={12} className="fill-[#bf5af2]" />
                    LVL 7 — Empresário
                  </div>
                </div>
              </div>

              {/* HUD XP Bar */}
              <div className="relative z-10 mt-2">
                <div className="flex justify-between text-xs font-orbitron text-[#6b7a9f] mb-2 tracking-wider">
                  <span>XP: 2450</span>
                  <span className="text-[#00f5d4]">82% PARA LVL 8</span>
                </div>
                <div className="h-4 bg-[#09090f] rounded-full overflow-hidden border border-white/5 relative">
                  {/* Container grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_90%,rgba(255,255,255,0.05)_90%)] bg-[length:20px_100%]"></div>
                  {/* Fill */}
                  <div 
                    className="h-full bg-gradient-to-r from-[#00f5d4]/50 to-[#00f5d4] relative"
                    style={{ 
                      width: '82%',
                      boxShadow: '0 0 10px #00f5d4, inset 0 0 10px rgba(255,255,255,0.5)'
                    }}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:10px_10px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Missions */}
          <section className="flex flex-col gap-4">
            <h3 className="font-orbitron font-bold text-lg tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-[#6b7a9f] flex items-center gap-2">
              <Target size={18} className="text-[#00f5d4]" />
              MISSÕES ATIVAS
            </h3>

            <div className="flex flex-col gap-4">
              {/* Active Card */}
              <div 
                className="group relative rounded-2xl bg-[#12121f] p-4 border border-[#00f5d4]/40 flex items-center gap-4 cursor-pointer overflow-hidden transition-transform active:scale-[0.98]"
                style={{ boxShadow: '0 0 15px rgba(0, 245, 212, 0.2)' }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-[#00f5d4]" style={{ boxShadow: '0 0 10px #00f5d4' }}></div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00f5d4]/5 rounded-full blur-[30px] group-hover:bg-[#00f5d4]/10 transition-colors"></div>

                <div className="w-14 h-14 rounded-xl bg-[#09090f] border border-[#00f5d4]/30 flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-0 rounded-xl bg-[#00f5d4]/10 animate-pulse"></div>
                  <span className="text-2xl relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">💡</span>
                </div>
                
                <div className="flex-1 relative z-10">
                  <h4 className="font-bold text-base text-white mb-1">Empreendedorismo</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-[#09090f] rounded-full overflow-hidden">
                      <div className="h-full w-[37.5%] bg-[#00f5d4]" style={{ boxShadow: '0 0 5px #00f5d4' }}></div>
                    </div>
                    <span className="text-[10px] font-orbitron text-[#00f5d4] tracking-wider">3/8 AULAS</span>
                  </div>
                </div>

                <button className="w-8 h-8 rounded-full bg-[#00f5d4]/10 flex items-center justify-center text-[#00f5d4] border border-[#00f5d4]/30 group-hover:bg-[#00f5d4] group-hover:text-black transition-colors relative z-10">
                  <Play size={14} className="ml-0.5" />
                </button>
              </div>

              {/* Locked Card 1 */}
              <div className="relative rounded-2xl bg-[#12121f]/50 p-4 border border-[#bf5af2]/20 flex items-center gap-4 opacity-80">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTIxMjFmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwOTA5MGYiPjwvcmVjdD4KPC9zdmc+')] opacity-50 rounded-2xl mix-blend-overlay"></div>
                
                <div className="w-14 h-14 rounded-xl bg-[#09090f] border border-[#bf5af2]/20 flex items-center justify-center flex-shrink-0 grayscale">
                  <span className="text-2xl opacity-50">📈</span>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-base text-[#6b7a9f] mb-1">Vendas & Marketing</h4>
                  <span className="text-[10px] font-orbitron text-[#bf5af2]/60 tracking-wider">REQUER LVL 8</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#09090f] flex items-center justify-center text-[#bf5af2]/50 border border-[#bf5af2]/20">
                  <Lock size={14} />
                </div>
              </div>

              {/* Locked Card 2 */}
              <div className="relative rounded-2xl bg-[#12121f]/50 p-4 border border-[#bf5af2]/20 flex items-center gap-4 opacity-80">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMTIxMjFmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwOTA5MGYiPjwvcmVjdD4KPC9zdmc+')] opacity-50 rounded-2xl mix-blend-overlay"></div>
                
                <div className="w-14 h-14 rounded-xl bg-[#09090f] border border-[#bf5af2]/20 flex items-center justify-center flex-shrink-0 grayscale">
                  <span className="text-2xl opacity-50">💰</span>
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-base text-[#6b7a9f] mb-1">Finanças</h4>
                  <span className="text-[10px] font-orbitron text-[#bf5af2]/60 tracking-wider">REQUER LVL 10</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#09090f] flex items-center justify-center text-[#bf5af2]/50 border border-[#bf5af2]/20">
                  <Lock size={14} />
                </div>
              </div>
            </div>
          </section>

          {/* Daily Reward Prompt */}
          <div className="mt-2 relative rounded-xl bg-gradient-to-r from-[#bf5af2]/20 to-transparent p-4 border border-[#bf5af2]/30 flex items-center justify-between cursor-pointer group overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#bf5af2]/20 rounded-full blur-xl group-hover:bg-[#bf5af2]/40 transition-colors"></div>
            <div>
              <h4 className="font-orbitron text-sm font-bold text-white mb-1">RECOMPENSA DIÁRIA</h4>
              <p className="text-xs text-[#e8e8ff]/70">Colete seus cristais de XP</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#bf5af2] flex items-center justify-center text-white relative z-10" style={{ boxShadow: '0 0 15px #bf5af2' }}>
              <ChevronRight size={20} />
            </div>
          </div>
          
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 w-full bg-[#09090f]/90 backdrop-blur-md border-t border-white/5 pb-8 pt-4 px-6 z-50">
          <div className="flex justify-between items-center max-w-sm mx-auto">
            <NavButton icon={<Target size={22} />} label="Início" isActive={activeTab === 'home'} onClick={() => setActiveTab('home')} />
            <NavButton icon={<BookOpen size={22} />} label="Módulos" isActive={activeTab === 'modules'} onClick={() => setActiveTab('modules')} />
            <NavButton icon={<Search size={22} />} label="Dicionário" isActive={activeTab === 'dict'} onClick={() => setActiveTab('dict')} />
            <NavButton icon={<Flame size={22} />} label="Desafios" isActive={activeTab === 'challenges'} onClick={() => setActiveTab('challenges')} />
            <NavButton icon={<User size={22} />} label="Perfil" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
          </div>
        </nav>
      </div>
    </div>
  );
}

function NavButton({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative ${
        isActive ? 'text-[#00f5d4]' : 'text-[#6b7a9f] hover:text-[#e8e8ff]'
      }`}
    >
      {isActive && (
        <div className="absolute -top-4 w-8 h-1 bg-[#00f5d4] rounded-b-full shadow-[0_2px_10px_#00f5d4]" />
      )}
      <div className={`transition-transform duration-300 ${isActive ? '-translate-y-1 drop-shadow-[0_0_8px_rgba(0,245,212,0.6)]' : ''}`}>
        {icon}
      </div>
      <span className={`text-[9px] font-bold tracking-wider ${isActive ? 'opacity-100' : 'opacity-70'}`}>
        {label}
      </span>
    </button>
  );
}
