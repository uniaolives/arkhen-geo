import React from 'react';
import { SystemState } from '../types';
import { Cross, Cpu, Network, Gem, Scroll, GitCommit, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';

interface UnificationBoardProps {
  unification: SystemState['unification'];
}

const UnificationBoard: React.FC<UnificationBoardProps> = ({ unification }) => {
  const getIcon = (icon: string) => {
    switch(icon) {
        case 'cross': return <Cross size={24} />;
        case 'spider': return <Network size={24} />;
        case 'cpu': return <Cpu size={24} />;
        default: return <Gem size={24} />;
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Golden Stream */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(to bottom right, #f59e0b 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-amber-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-amber-950 p-2 rounded text-amber-500 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Gem size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Ω_FINAL</h2>
            <div className="text-[10px] text-amber-400 font-mono uppercase">The Singularity of Closure</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Mean Curvature (ψ)</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{unification.psiMean.toFixed(2)} rad</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-amber-500 font-mono font-bold text-xs bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50">UNIFIED</div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Theorem Display */}
        <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg font-mono text-xs text-slate-400 relative">
            <div className="absolute -top-3 left-4 bg-slate-950 px-2 text-[10px] text-slate-500 uppercase flex items-center gap-1 border border-slate-800 rounded">
                <Scroll size={10} /> Geodesic Axiom (Coq)
            </div>
            <pre className="overflow-x-auto">
                <code className="language-coq">
{`Theorem all_resilient_systems_are_isomorphic :
  ∀ (s1 s2 : ResilientSystem),
    ∃ (f : s1.(kernel) → s2.(kernel)),
      preserves_structure f.
Proof.
  (* The geometry is invariant. The scale is what changes. *)
  (* QED – 19 Feb 2026 14:00 UTC *)
Qed.`}
                </code>
            </pre>
        </div>

        {/* The Three Layers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {unification.layers.map(layer => (
                <div key={layer.id} className={`relative overflow-hidden rounded-lg border p-4 flex flex-col gap-3 group transition-all duration-300 hover:bg-slate-900/80 bg-slate-900/30 border-slate-800`}>
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${layer.color}`} />
                    
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full bg-slate-950 border border-slate-800 ${layer.color}`}>
                            {getIcon(layer.icon)}
                        </div>
                        <h3 className={`font-bold font-mono text-sm ${layer.color}`}>{layer.name}</h3>
                    </div>

                    <div className="space-y-2 mt-2">
                        <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
                            <span className="text-slate-500 font-mono uppercase text-[10px]">Kernel</span>
                            <span className="text-white font-mono">{layer.kernel}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
                            <span className="text-slate-500 font-mono uppercase text-[10px]">Network</span>
                            <span className="text-slate-300 font-mono">{layer.network}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
                            <span className="text-slate-500 font-mono uppercase text-[10px]">Failure</span>
                            <span className="text-rose-400 font-mono">{layer.failure}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
                            <span className="text-slate-500 font-mono uppercase text-[10px]">Restore</span>
                            <span className="text-emerald-400 font-mono">{layer.restoration}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-500 font-mono uppercase text-[10px]">Legacy</span>
                            <span className="text-fuchsia-400 font-mono">{layer.legacy}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-r from-slate-900/0 via-amber-950/10 to-slate-900/0 rounded-lg border border-amber-900/20">
            <div className="flex items-center gap-2 text-amber-500 text-xs font-mono uppercase tracking-widest">
                <CheckCircle2 size={12} /> Geodesic Convergence Completed
            </div>
            <p className="text-[10px] text-slate-500 font-mono text-center max-w-md">
                "A system becomes resilient not when it learns to never fail, but when it learns to fail, record, restore, and teach. The geometry is eternal."
            </p>
        </div>

      </div>
    </div>
  );
};

export default UnificationBoard;
