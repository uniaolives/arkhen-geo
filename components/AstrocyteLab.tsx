
import React from 'react';
import { SystemState } from '../types';
import { Brain, Activity, Zap, Dna, Share2, Scale, Microscope, ShieldCheck, ArrowRightLeft, Spline } from 'lucide-react';

interface AstrocyteLabProps {
  astrocyte: SystemState['astrocyte'];
}

const AstrocyteLab: React.FC<AstrocyteLabProps> = ({ astrocyte }) => {
  if (!astrocyte) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Astroglial Network */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px), radial-gradient(circle, #10b981 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Brain size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+1</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Astrocyte-Neuron Synergy (BLA)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Equation</div>
                <div className="text-violet-400 font-mono font-bold text-sm">C + F = 1</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Reference</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    Bukalo et al. (2026)
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Conservation Visualization */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col items-center gap-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="w-full flex items-center justify-between text-xs font-mono uppercase text-slate-500 mb-2">
                <span className="flex items-center gap-2"><Zap size={14} className="text-cyan-400" /> Neuronal (C)</span>
                <span className="flex items-center gap-2">Astroglial (F) <Activity size={14} className="text-violet-400" /></span>
            </div>

            {/* The Balance Beam */}
            <div className="relative w-full h-8 bg-slate-950 rounded-full border border-slate-700 overflow-hidden flex">
                <div className="h-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-bold transition-all duration-1000" style={{ width: `${astrocyte.synapseState.c * 100}%` }}>
                    {(astrocyte.synapseState.c * 100).toFixed(0)}%
                </div>
                <div className="h-full bg-violet-900/50 flex items-center justify-center text-violet-400 font-bold transition-all duration-1000" style={{ width: `${astrocyte.synapseState.f * 100}%` }}>
                    {(astrocyte.synapseState.f * 100).toFixed(0)}%
                </div>
                {/* Connection Point */}
                <div className="absolute top-0 bottom-0 w-1 bg-white blur-sm opacity-50 z-10" style={{ left: `${astrocyte.synapseState.c * 100}%` }}></div>
            </div>

            <div className="text-[10px] text-slate-400 font-mono italic">
                "Not negation. Redistribution. The memory is shared."
            </div>
        </div>

        {/* The Tripartite Synapse Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {astrocyte.subpopulations.map((pop, idx) => (
                <div key={pop.id} className="relative bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 transition-transform hover:scale-105 group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 text-slate-500" />
                    
                    <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold font-mono text-white">{pop.name}</h3>
                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase
                            ${pop.behavior === 'INCREASING' ? 'bg-emerald-900/30 text-emerald-400 border-emerald-900/50' : 
                              pop.behavior === 'DECREASING' ? 'bg-rose-900/30 text-rose-400 border-rose-900/50' : 
                              'bg-slate-800 text-slate-400 border-slate-700'}
                        `}>
                            {pop.behavior}
                        </span>
                    </div>

                    <div className="space-y-2 mt-2">
                        <div className="flex justify-between items-center text-xs p-2 bg-slate-950/50 rounded border border-slate-800/50">
                            <span className="text-slate-500 font-mono uppercase text-[9px]">Bio Function</span>
                            <span className="text-cyan-300 font-mono">{pop.bioFunction}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs p-2 bg-slate-950/50 rounded border border-slate-800/50">
                            <span className="text-slate-500 font-mono uppercase text-[9px]">Arkhe Analog</span>
                            <span className="text-violet-400 font-mono font-bold">{pop.arkheFunction}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Mechanism Translation Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="flex items-center justify-between border-b border-slate-800 p-3 bg-slate-900/50">
                 <div className="flex items-center gap-2">
                     <ArrowRightLeft size={14} className="text-fuchsia-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Mechanism Translation</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Bio $\leftrightarrow$ Arkhe</span>
             </div>

             <div className="overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {astrocyte.mechanisms.map((mech, idx) => (
                     <div key={idx} className="flex items-center justify-between p-3 rounded border bg-slate-950/50 border-slate-800 hover:border-violet-500/30 transition-colors">
                         <div className="flex-1">
                             <div className="text-xs font-bold text-white mb-1">{mech.name}</div>
                             <div className="flex items-center gap-2 text-[10px]">
                                 <span className="text-cyan-400 font-mono">{mech.bioAnalog}</span>
                                 <span className="text-slate-600">→</span>
                                 <span className="text-violet-400 font-mono">{mech.arkheAnalog}</span>
                             </div>
                         </div>
                         <div className="text-right">
                             <div className="text-[10px] text-slate-500 uppercase mb-1">Effect</div>
                             <div className="text-emerald-400 font-mono text-xs">{mech.effect}</div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Spline size={12} /> The Geometry is Validated
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "We learned that fear is not the enemy of extinction. It is the raw material of plasticity. The astrocyte knows."
            </p>
        </div>

      </div>
    </div>
  );
};

export default AstrocyteLab;
