import React from 'react';
import { SystemState } from '../types';
import { Clock, Move, RotateCw, Zap, Maximize, GitMerge, Atom, ShieldCheck, Scale, Infinity } from 'lucide-react';

interface SymmetryOrchestratorProps {
  symmetry: SystemState['symmetry'];
}

const SymmetryOrchestrator: React.FC<SymmetryOrchestratorProps> = ({ symmetry }) => {
  const getIcon = (icon: string) => {
    switch(icon) {
        case 'clock': return <Clock size={16} />;
        case 'move': return <Move size={16} />;
        case 'rotate': return <RotateCw size={16} />;
        case 'zap': return <Zap size={16} />;
        case 'maximize': return <Maximize size={16} />;
        case 'git': return <GitMerge size={16} />;
        default: return <Atom size={16} />;
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Symmetry Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #1e293b 0deg, transparent 60deg, #1e293b 120deg, transparent 180deg, #1e293b 240deg, transparent 300deg, #1e293b 360deg)',
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Atom size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9030</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Noether Theorem & Conserved Arch</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Generator</div>
                <div className="text-indigo-400 font-mono font-bold text-xs bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/50">
                    OBSERVER INVARIANCE
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Central Generator Visualization */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex items-center justify-center relative min-h-[160px]">
            {/* Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-64 h-64 border border-slate-600 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-48 h-48 border border-slate-500 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute w-32 h-32 border border-slate-400 rounded-full animate-[spin_10s_linear_infinite]"></div>
            </div>

            {/* The Keystone Core */}
            <div className="relative z-10 text-center">
                 <div className="w-16 h-16 bg-slate-950 border-2 border-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-[0_0_30px_rgba(99,102,241,0.5)]">
                     <Infinity size={32} className="text-indigo-400" />
                 </div>
                 <h3 className="text-white font-bold font-mono text-sm uppercase tracking-widest">The Geodesic</h3>
                 <div className="text-[10px] text-slate-400 font-mono">Conserved Quantity (ℊ = 1.00)</div>
            </div>
        </div>

        {/* Projected Symmetries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {symmetry.projections.map((proj, idx) => (
                <div key={idx} className={`relative p-4 rounded-lg border bg-slate-900/30 transition-all hover:bg-slate-900/60 group
                    ${proj.name === 'TEMPORAL' ? 'border-amber-900/30 hover:border-amber-500/50' : ''}
                    ${proj.name === 'SPATIAL' ? 'border-indigo-900/30 hover:border-indigo-500/50' : ''}
                    ${proj.name === 'ROTATIONAL' ? 'border-purple-900/30 hover:border-purple-500/50' : ''}
                    ${proj.name === 'GAUGE' ? 'border-rose-900/30 hover:border-rose-500/50' : ''}
                    ${proj.name === 'SCALE' ? 'border-emerald-900/30 hover:border-emerald-500/50' : ''}
                    ${proj.name === 'METHOD' ? 'border-cyan-900/30 hover:border-cyan-500/50' : ''}
                `}>
                    <div className="flex justify-between items-start mb-2">
                        <div className={`p-1.5 rounded bg-slate-950 border border-slate-800 ${proj.color}`}>
                            {getIcon(proj.icon)}
                        </div>
                        <span className="text-[10px] font-mono uppercase bg-black/20 px-1.5 py-0.5 rounded text-slate-500">
                            {proj.transformation}
                        </span>
                    </div>

                    <div className="space-y-1">
                        <h4 className={`text-xs font-bold font-mono uppercase ${proj.color}`}>{proj.name}</h4>
                        <div className="text-xs text-white font-mono">{proj.invariant}</div>
                        <div className="text-[10px] text-slate-500 font-mono mt-1 pt-1 border-t border-slate-800/50 flex justify-between">
                             <span>Symbol</span>
                             <span className="text-slate-300">{proj.symbol}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Statement */}
        <div className="mt-auto bg-gradient-to-r from-indigo-950/20 via-slate-900/50 to-indigo-950/20 p-4 rounded-lg border border-indigo-900/20 text-center">
            <div className="flex items-center justify-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Scale size={12} /> Noether's Theorem Verified
            </div>
            <p className="text-[10px] text-slate-500 font-mono">
                "The Keystone is not a stone. It is the symmetry of the observer. The observer changes; the geodesic remains."
            </p>
        </div>

      </div>
    </div>
  );
};

export default SymmetryOrchestrator;
