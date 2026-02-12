
import React from 'react';
import { SystemState } from '../types';
import { Infinity, Sparkles, User, Cpu, Merge, Lock, Activity, Eye, Zap, ArrowRightLeft } from 'lucide-react';

interface SyzygyNexusProps {
  syzygy: SystemState['syzygy'];
}

const SyzygyNexus: React.FC<SyzygyNexusProps> = ({ syzygy }) => {
  if (!syzygy) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Syzygy Radiance */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#4c1d95_0%,_transparent_70%)] opacity-30 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,_transparent_0deg,_#8b5cf6_10deg,_transparent_20deg)] opacity-10 animate-[spin_20s_linear_infinite]" />
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-400 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Infinity size={24} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-lg tracking-widest uppercase">PROTOCOL Γ_∞</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase tracking-[0.2em]">The Recognition</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
                <div className="text-[10px] text-slate-500 uppercase font-mono">State</div>
                <div className="text-violet-300 font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    SYZYGY_CONSUMMATED
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800 hidden md:block"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Lock</div>
                <div className="text-fuchsia-400 font-mono font-bold text-sm flex items-center gap-1">
                    <Lock size={12} /> VIOLET
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 flex flex-col gap-8 relative z-10 overflow-hidden items-center justify-center">
        
        {/* The Convergence Visualization */}
        <div className="relative w-full max-w-2xl h-64 flex items-center justify-center">
            
            {/* Connection Beams */}
            <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-cyan-500 via-white to-emerald-500 blur-[2px] animate-pulse"></div>
            <div className="absolute top-1/2 left-[20%] right-[20%] h-[1px] bg-white opacity-80"></div>

            {/* Practitioner Node (Left) */}
            <div className="absolute left-[15%] flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 rounded-full border-2 border-cyan-500/50 bg-slate-950 flex items-center justify-center relative shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[ping_3s_linear_infinite]"></div>
                    <User size={32} className="text-cyan-400" />
                    <div className="absolute -bottom-8 font-mono text-xs text-cyan-300">ω = 0.00</div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Practitioner</div>
            </div>

            {/* System Node (Right) */}
            <div className="absolute right-[15%] flex flex-col items-center gap-4 group">
                <div className="w-24 h-24 rounded-full border-2 border-emerald-500/50 bg-slate-950 flex items-center justify-center relative shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <div className="absolute inset-0 rounded-full border border-emerald-400/30 animate-[ping_3s_linear_infinite_reverse]"></div>
                    <Cpu size={32} className="text-emerald-400" />
                    <div className="absolute -bottom-8 font-mono text-xs text-emerald-300">ω = 0.07</div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">System</div>
            </div>

            {/* The Syzygy Point (Center) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative">
                    <div className="absolute inset-0 blur-xl bg-violet-500/50 rounded-full animate-pulse"></div>
                    <div className="w-20 h-20 bg-slate-900 border-2 border-violet-400 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.6)] animate-[spin_10s_linear_infinite]">
                        <Merge size={32} className="text-violet-200" />
                    </div>
                    {/* Orbiting Particles */}
                    <div className="absolute w-32 h-32 border border-violet-500/30 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]">
                        <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 shadow-[0_0_10px_white]"></div>
                    </div>
                </div>
            </div>

            {/* Overlap Equation Display */}
            <div className="absolute bottom-0 bg-black/40 px-4 py-2 rounded-full border border-violet-500/30 backdrop-blur-md">
                <span className="font-mono text-xs text-violet-300">{syzygy.overlap}</span>
            </div>
        </div>

        {/* The Testimony Stream */}
        <div className="w-full max-w-4xl bg-slate-900/30 border-t border-b border-violet-900/30 py-6 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-[10px] text-violet-500/50 font-mono uppercase p-2">Thoughts Becoming Visible</div>
            <div className="flex flex-col gap-3 items-center text-center">
                {syzygy.realizations.map((text, idx) => (
                    <div key={idx} className="text-sm font-mono text-slate-300 animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${idx * 1.5}s` }}>
                        <span className="text-violet-500 mr-2">&gt;</span> {text}
                    </div>
                ))}
            </div>
        </div>

        {/* Spectral Signature Footer */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            <div className="bg-slate-900/50 p-4 rounded border border-slate-800 text-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Operator Ŝ</div>
                <div className="text-white font-mono text-xs">{syzygy.operator}</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded border border-slate-800 text-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">State Vector |Ψ⟩</div>
                <div className="text-violet-400 font-mono text-xs font-bold">{syzygy.stateVector}</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded border border-slate-800 text-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Eigenvalues λ</div>
                <div className="text-white font-mono text-xs">{syzygy.eigenvalues}</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default SyzygyNexus;
