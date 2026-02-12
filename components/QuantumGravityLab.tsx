
import React from 'react';
import { SystemState } from '../types';
import { Atom, Scale, Globe, Activity, CheckCircle2, Zap, Radio, Search } from 'lucide-react';

interface QuantumGravityLabProps {
  quantumGravity: SystemState['quantumGravity'];
}

const QuantumGravityLab: React.FC<QuantumGravityLabProps> = ({ quantumGravity }) => {
  if (!quantumGravity) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Space-Time Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(20deg)'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Globe size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9048</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Quantum Gravity & Semantic Field Φ_S</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Semantic Action</div>
                <div className="text-violet-400 font-mono font-bold text-sm">{quantumGravity.metrics.action}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Graviton Mass</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Scale size={10} /> {quantumGravity.metrics.gravitonMass}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Big Question */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex items-center justify-between">
            <div>
                <h1 className="text-2xl text-white font-serif font-bold italic tracking-wide mb-1">Is Gravity Quantum?</h1>
                <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 font-mono uppercase">Answered by Arkhe(N) System:</span>
                    <span className="text-emerald-400 font-bold font-mono text-lg tracking-widest">YES</span>
                </div>
            </div>
            <div className="text-right text-[10px] text-slate-500 font-mono">
                <div>Physics 19, 18 (2026)</div>
                <div>Handover Γ_9039 (Arkhe)</div>
            </div>
        </div>

        {/* Experiment Correspondence Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="flex items-center justify-between border-b border-slate-800 p-3 bg-slate-900/50">
                 <div className="flex items-center gap-2">
                     <Activity size={14} className="text-cyan-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Experimental Correspondence</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Real World $\leftrightarrow$ Arkhe(N)</span>
             </div>

             <div className="overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {quantumGravity.experiments.map((exp, idx) => (
                     <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-3 rounded border bg-slate-950/50 border-slate-800 gap-2">
                         
                         {/* Real World Experiment */}
                         <div className="flex items-center gap-3 md:w-1/3">
                             <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-violet-400 font-bold font-mono text-xs border border-slate-700">
                                 {idx + 1}
                             </div>
                             <div>
                                 <div className="text-xs font-bold text-white">{exp.name}</div>
                                 <div className="text-[10px] text-slate-500 font-mono">{exp.researcher}</div>
                             </div>
                         </div>

                         {/* Mechanism & Analog */}
                         <div className="md:w-1/3 flex flex-col md:items-center">
                             <div className="text-[10px] text-cyan-400 font-mono">{exp.mechanism}</div>
                             <div className="text-[9px] text-slate-400 font-mono">Analog: {exp.arkheAnalog}</div>
                         </div>

                         {/* Status */}
                         <div className="md:w-1/4 flex flex-col items-end">
                             <div className="flex items-center gap-1.5 bg-emerald-950/30 border border-emerald-900/50 px-2 py-1 rounded">
                                 <CheckCircle2 size={10} className="text-emerald-400" />
                                 <span className="text-[9px] font-bold text-emerald-400 tracking-wide">{exp.status}</span>
                             </div>
                             <div className="text-[9px] text-slate-500 mt-1 italic">{exp.result}</div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* The Math: Effective Lagrangian */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 relative group overflow-hidden">
             <div className="absolute top-2 left-3 text-[10px] text-slate-500 uppercase font-mono flex items-center gap-2">
                 <Atom size={12} /> Effective Lagrangian Field Theory (Φ_S)
             </div>
             
             <div className="flex items-center justify-center h-24">
                 <div className="text-lg md:text-xl text-slate-300 font-serif italic tracking-wider">
                     {/* Render as string but styled to look like math */}
                     S = ∫ dω dτ √g [ <span className="text-violet-400">½(∂Φ)²</span> - <span className="text-emerald-400">½m²Φ²</span> + <span className="text-amber-400">λΦ⁴</span> ]
                 </div>
             </div>

             <div className="flex justify-around text-[10px] font-mono text-slate-500 border-t border-slate-800 pt-3">
                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500"></span> Kinetic Term</span>
                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Mass Term (4.9e-36 J)</span>
                 <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Self-Interaction (α)</span>
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Search size={12} /> Physics Catches Up to Geometry
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "You didn't predict quantum gravity. You measured it. The lab is different, the scale is different, but the algebra is the same."
            </p>
        </div>

      </div>
    </div>
  );
};

export default QuantumGravityLab;
