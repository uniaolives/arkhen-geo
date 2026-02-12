
import React from 'react';
import { SystemState } from '../types';
import { Brain, Network, Dna, Activity, ArrowRight, GitBranch, Share2, Layers } from 'lucide-react';

interface NeuralCompositionalityProps {
  compositionality: SystemState['neuralCompositionality'];
}

const NeuralCompositionality: React.FC<NeuralCompositionalityProps> = ({ compositionality }) => {
  if (!compositionality) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Compositional Neural Networks */}
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
            <Share2 size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9045</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Neural Compositionality & Subspaces</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Reference</div>
                <div className="text-violet-400 font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    Nature 650 (2026)
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Belief Confidence</div>
                <div className="text-emerald-500 font-mono font-bold text-sm">
                    {(compositionality.beliefState.confidence * 100).toFixed(0)}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Thesis */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex gap-4 items-center">
            <div className="p-3 bg-slate-950 rounded-full border border-slate-700 text-fuchsia-400">
                <Brain size={24} />
            </div>
            <div className="flex-1">
                <div className="text-xs text-white font-mono font-bold mb-1">COMPOSITIONAL SUBSPACE HYPOTHESIS</div>
                <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                    The brain (and Arkhe) reuses shared neural subspaces for different tasks. The belief state determines which subspace is engaged.
                    <br/>
                    <span className="text-violet-400">Correspondence:</span> Biological Subspaces = Geodesic $\omega$ Leaves.
                </p>
            </div>
        </div>

        {/* Subspace Mapping Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="flex items-center justify-between border-b border-slate-800 p-3 bg-slate-900/50">
                 <div className="flex items-center gap-2">
                     <Layers size={14} className="text-cyan-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Subspace Mapping</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Tafazoli et al. $\leftrightarrow$ Arkhe(N)</span>
             </div>

             <div className="overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {compositionality.subspaces.map((sub, idx) => (
                     <div key={idx} className={`flex items-center justify-between p-2 rounded border transition-colors
                        ${sub.status === 'ENGAGED' ? 'bg-violet-900/20 border-violet-500/50' : 'bg-slate-950/50 border-slate-800'}
                     `}>
                         <div className="flex items-center gap-3">
                             <div className={`w-8 h-8 rounded flex items-center justify-center font-bold font-mono text-xs
                                 ${sub.status === 'ENGAGED' ? 'bg-violet-500 text-white' : 'bg-slate-800 text-slate-500'}
                             `}>
                                 {sub.id}
                             </div>
                             <div>
                                 <div className="text-xs font-bold text-white">{sub.role}</div>
                                 <div className="text-[10px] text-slate-500 font-mono">Neural Subspace</div>
                             </div>
                         </div>

                         <ArrowRight size={14} className="text-slate-600" />

                         <div className="text-right">
                             <div className="text-xs font-bold text-cyan-400 font-mono">ω = {sub.omega.toFixed(2)}</div>
                             <div className="text-[10px] text-slate-400 font-mono">{sub.entity}</div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Belief Updater Visualization */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
             <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                     <Activity size={14} className="text-emerald-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Belief Updating (Bayesian)</h3>
                 </div>
                 <div className="text-[10px] text-slate-500 font-mono">P(Task | Evidence)</div>
             </div>

             <div className="relative h-16 bg-slate-950 rounded border border-slate-800 overflow-hidden flex items-center justify-center">
                 {/* Hesitation Bar */}
                 <div className="absolute bottom-0 left-0 h-1 bg-amber-500 transition-all duration-1000" style={{ width: `${compositionality.beliefState.hesitationPhi * 100}%` }}></div>
                 <div className="absolute bottom-0 left-0 h-1 bg-emerald-500 transition-all duration-1000" style={{ width: `${compositionality.beliefState.confidence * 100}%`, left: `${compositionality.beliefState.hesitationPhi * 100}%` }}></div>
                 
                 <div className="z-10 flex flex-col items-center">
                     <div className="text-xs font-mono text-slate-400 uppercase mb-1">Current Belief (PFC)</div>
                     <div className="text-xl font-bold font-mono text-white flex items-center gap-2">
                         <span className="text-violet-400">ω={compositionality.beliefState.currentBelief.toFixed(2)}</span>
                         <span className="text-slate-600">→</span>
                         <span className="text-cyan-400">DVM-1</span>
                     </div>
                 </div>
             </div>

             <div className="flex justify-between text-[10px] font-mono text-slate-500">
                 <span>Hesitation Φ: {compositionality.beliefState.hesitationPhi.toFixed(2)}</span>
                 <span className="text-emerald-400">Confidence: {(compositionality.beliefState.confidence * 100).toFixed(0)}%</span>
             </div>
        </div>

      </div>
    </div>
  );
};

export default NeuralCompositionality;
