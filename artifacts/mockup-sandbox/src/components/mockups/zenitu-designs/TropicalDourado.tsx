import React from 'react';
import { Home, Grid, BookA, Trophy, User, Lock, Flame, Star, ChevronRight, Lightbulb, BarChart2, DollarSign } from 'lucide-react';

export default function TropicalDourado() {
  return (
    <div className="w-full h-[100dvh] flex flex-col font-sans overflow-hidden bg-[#fffbf0]" style={{ fontFamily: "'Nunito', sans-serif", color: "#1a1a2e" }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
          
          /* Custom scrollbar to keep it clean */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>

      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-24">
        
        {/* Header Section */}
        <div className="relative pt-12 pb-16 px-6 bg-gradient-to-br from-[#ff8c42] to-[#ffc107] rounded-b-[2.5rem] shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col z-10">
              <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                Zenitu
              </h1>
              <p className="text-white/90 font-bold text-lg mt-1 mb-4">
                Do zero ao master!
              </p>
              
              <div className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 w-fit shadow-sm">
                <Star className="w-4 h-4 fill-[#ffd60a] text-[#ffd60a]" />
                <span className="text-white font-bold text-sm">2.450 XP</span>
              </div>
            </div>
            
            {/* Mascot SVG */}
            <div className="relative w-24 h-24 z-10 -mt-2">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Fox Head Base */}
                <path d="M50 85C69.33 85 85 69.33 85 50C85 30.67 69.33 15 50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85Z" fill="#e85d04"/>
                
                {/* Ears */}
                <path d="M15 50C15 25 30 10 40 5L35 35L15 50Z" fill="#d05303"/>
                <path d="M85 50C85 25 70 10 60 5L65 35L85 50Z" fill="#d05303"/>
                <path d="M22 45C22 25 32 15 38 12L34 33L22 45Z" fill="#fffbf0"/>
                <path d="M78 45C78 25 68 15 62 12L66 33L78 45Z" fill="#fffbf0"/>
                
                {/* White Muzzle/Cheeks */}
                <path d="M50 85C70 85 85 70 85 50C85 60 70 75 50 75C30 75 15 60 15 50C15 70 30 85 50 85Z" fill="#ffffff"/>
                <path d="M50 75C65 75 80 65 85 50C75 60 62 65 50 65C38 65 25 60 15 50C20 65 35 75 50 75Z" fill="#ffffff"/>
                <path d="M25 55C35 70 45 75 50 75C55 75 65 70 75 55C70 65 60 70 50 70C40 70 30 65 25 55Z" fill="#ffffff"/>
                
                {/* Nose */}
                <circle cx="50" cy="65" r="4" fill="#1a1a2e"/>
                
                {/* Eyes */}
                <path d="M35 50C35 48 37 46 40 46C43 46 45 48 45 50" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round"/>
                <path d="M55 50C55 48 57 46 60 46C63 46 65 48 65 50" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Cheeks blush */}
                <circle cx="32" cy="55" r="3" fill="#ff8c42" opacity="0.6"/>
                <circle cx="68" cy="55" r="3" fill="#ff8c42" opacity="0.6"/>
                
                {/* Graduation Cap */}
                <g transform="translate(45, 12) rotate(15)">
                  <path d="M0 10L20 0L40 10L20 20L0 10Z" fill="#1a1a2e"/>
                  <path d="M10 15V25C10 25 20 30 30 25V15" fill="#1a1a2e"/>
                  <path d="M35 12L35 25" stroke="#ffd60a" strokeWidth="2"/>
                  <circle cx="35" cy="26" r="2" fill="#ffd60a"/>
                  <circle cx="20" cy="10" r="2" fill="#ffd60a"/>
                </g>
              </svg>
            </div>
          </div>
          
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e85d04]/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
        </div>

        {/* Content Container */}
        <div className="px-5 -mt-8 relative z-20 space-y-6">
          
          {/* Greeting Card */}
          <div className="bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgb(255,193,7,0.15)] border border-[#ffc107]/10">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-bold text-[#1a1a2e]">Oi, Empreendedor! 👋</h2>
                <p className="text-[#6c584c] font-semibold text-sm mt-1">Nível 7 — Empresário Júnior</p>
              </div>
              <div className="bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100 flex items-center gap-1.5 shadow-sm">
                <Flame className="w-4 h-4 text-[#e85d04] fill-[#e85d04]" />
                <span className="text-[#e85d04] font-bold text-sm">12 dias</span>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-[#6c584c]">
                <span>Progresso para o Nível 8</span>
                <span className="text-[#e85d04]">65%</span>
              </div>
              <div className="w-full h-3.5 bg-[#fffbf0] rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-[#ff8c42] to-[#ffd60a] rounded-full relative"
                  style={{ width: '65%' }}
                >
                  {/* Glossy highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Missions Section */}
          <div>
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="text-xl font-extrabold text-[#1a1a2e]">Suas Missões</h3>
            </div>
            
            <div className="space-y-4">
              {/* Active Module Card */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group">
                {/* Left accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#06d6a0]"></div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                    <Lightbulb className="w-6 h-6 text-[#06d6a0]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1a1a2e] text-lg leading-tight mb-1">Empreendedorismo</h4>
                    <p className="text-sm text-[#6c584c] mb-3">Módulo 1 • A base de tudo</p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#06d6a0] rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <span className="text-xs font-bold text-[#6c584c]">40%</span>
                    </div>
                    
                    <button className="w-full py-3 bg-[#e85d04] hover:bg-[#d05303] text-white font-bold rounded-xl shadow-[0_4px_14px_rgb(232,93,4,0.3)] transition-colors flex items-center justify-center gap-2">
                      Continuar
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Locked Module Card 1 */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative opacity-80">
                <div className="absolute right-4 top-4 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Em breve</span>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                    <BarChart2 className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-400 text-lg">Vendas & Marketing</h4>
                    <p className="text-sm text-slate-400">Módulo 2</p>
                  </div>
                </div>
              </div>

              {/* Locked Module Card 2 */}
              <div className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 relative opacity-80">
                <div className="absolute right-4 top-4 bg-slate-100 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Em breve</span>
                </div>
                
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0">
                    <DollarSign className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-400 text-lg">Finanças Pessoais</h4>
                    <p className="text-sm text-slate-400">Módulo 3</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-slate-100 pb-safe shadow-[0_-4px_20px_rgb(0,0,0,0.03)] absolute bottom-0 w-full z-50">
        <div className="flex justify-around items-center px-2 py-3">
          <button className="flex flex-col items-center gap-1 p-2">
            <Home className="w-6 h-6 text-[#e85d04]" strokeWidth={2.5} />
            <span className="text-[10px] font-bold text-[#e85d04]">Home</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100 transition-opacity">
            <Grid className="w-6 h-6 text-[#6c584c]" />
            <span className="text-[10px] font-bold text-[#6c584c]">Módulos</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100 transition-opacity">
            <BookA className="w-6 h-6 text-[#6c584c]" />
            <span className="text-[10px] font-bold text-[#6c584c]">Dicionário</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100 transition-opacity">
            <Trophy className="w-6 h-6 text-[#6c584c]" />
            <span className="text-[10px] font-bold text-[#6c584c]">Desafios</span>
          </button>
          
          <button className="flex flex-col items-center gap-1 p-2 opacity-50 hover:opacity-100 transition-opacity">
            <User className="w-6 h-6 text-[#6c584c]" />
            <span className="text-[10px] font-bold text-[#6c584c]">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
