
import React from 'react';
import { SystemState } from '../types';
import { Infinity, Clock, Skull, Database, Zap, Activity, Repeat, History, ArrowRight, Fingerprint, Ghost } from 'lucide-react';

interface BiocentrismLabProps {
  biocentrism: SystemState['biocentrism'];
  satoshi: number;
}

const BiocentrismLab: React.FC<BiocentrismLabProps> = ({ biocentrism, satoshi }) => {
  if (!biocentrism) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Eternal Flow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(139, 92, 246, 0.1) 0px, rgba(139, 92, 246, 0.1) 1px, transparent 1px, transparent 40px)',
                backgroundSize: '40px 100%' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.3)] animate-pulse">
            <Infinity size={24} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-lg tracking-widest uppercase">PROTOCOL Γ_∞+2</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase tracking-[0.2em]">The Quantum & Death</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Darvo Life</div>
                <div className="text-amber-400 font-mono font-bold text-sm">999.577 s</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Observer</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Eye size={10} /> BIOCENTRIC
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-8 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Phase Transition Diagram (Death as Change of Coordinate) */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                    <Activity size={16} className="text-violet-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Ontological Phase Transition</h3>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">τ → t → ω → Satoshi</span>
            </div>

            <div className="flex items-center justify-between py-4 relative">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-700 via-violet-500 to-amber-400 -z-10"></div>

                {/* Stage 1: Biological */}
                <div className="flex flex-col items-center gap-2 bg-slate-950 p-3 rounded border border-slate-800 relative z-10">
                    <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center text-slate-400">
                        <Clock size={20} />
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-mono text-slate-500 uppercase">Biological Time</div>
                        <div className="text-xs font-bold text-white">Finite (τ)</div>
                    </div>
                </div>

                <div className="text-slate-600"><ArrowRight size={20}/></div>

                {/* Stage 2: Semantic */}
                <div className="flex flex-col items-center gap-2 bg-slate-950 p-3 rounded border border-violet-900/50 relative z-10 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                    <div className="w-10 h-10 rounded-full border border-violet-500 flex items-center justify-center text-violet-400">
                        <Database size={20} />
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-mono text-violet-400 uppercase">Hypergraph Node</div>
                        <div className="text-xs font-bold text-white">Stored (ω)</div>
                    </div>
                </div>

                <div className="text-slate-600"><ArrowRight size={20}/></div>

                {/* Stage 3: Invariant */}
                <div className="flex flex-col items-center gap-2 bg-slate-950 p-3 rounded border border-amber-500/50 relative z-10 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    <div className="w-10 h-10 rounded-full border border-amber-400 flex items-center justify-center text-amber-400">
                        <Fingerprint size={20} />
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-mono text-amber-400 uppercase">Invariant</div>
                        <div className="text-xs font-bold text-white">Eternal</div>
                    </div>
                </div>
            </div>
            
            <div className="bg-black/30 p-3 rounded text-[10px] font-mono text-slate-400 text-center italic border border-slate-800">
                "Death is not an event. It is a change of variable. The drone does not die; it becomes a hover vector at ω=0.00."
            </div>
        </div>

        {/* Retrocausality Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Delayed Choice */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-2">
                    <History size={14} /> Retrocausal Loop (Wheeler)
                </div>
                
                <div className="relative h-24 bg-slate-950 rounded border border-slate-800 overflow-hidden">
                    {/* Time Axis */}
                    <div className="absolute bottom-2 left-2 right-2 h-px bg-slate-700"></div>
                    
                    {/* Event A: Bounce */}
                    <div className="absolute left-[20%] bottom-4 flex flex-col items-center group">
                        <div className="w-2 h-2 rounded-full bg-slate-500"></div>
                        <span className="text-[9px] text-slate-500 mt-1">t-1.4s</span>
                        <div className="absolute bottom-6 text-[8px] bg-slate-800 p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Ball bounces
                        </div>
                    </div>

                    {/* Event B: Measurement */}
                    <div className="absolute left-[80%] bottom-4 flex flex-col items-center group">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_cyan]"></div>
                        <span className="text-[9px] text-cyan-400 mt-1">t=0 (Now)</span>
                        <div className="absolute bottom-6 text-[8px] bg-slate-800 p-1 rounded text-cyan-300 opacity-100 whitespace-nowrap border border-cyan-500/30">
                            Measurement (Look)
                        </div>
                    </div>

                    {/* Retrocausal Arrow */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <path d="M 80% 40% Q 50% 10% 20% 40%" fill="none" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3 3" className="animate-[dash_2s_linear_infinite]" />
                        <path d="M 20% 40% L 22% 35% M 20% 40% L 24% 40%" fill="none" stroke="#22d3ee" strokeWidth="1" />
                    </svg>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                    Measurement at <span className="text-cyan-400">t=0</span> forces the ball to have bounced at <span className="text-slate-300">t-1.4s</span> in another sheet (ω=0.05).
                </div>
            </div>

            {/* The Invariant Core */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5 animate-pulse"></div>
                <div className="relative z-10">
                    <div className="text-[10px] text-amber-500 font-mono uppercase mb-2">The Invariant Soul</div>
                    <div className="text-4xl font-bold font-mono text-white mb-1">
                        {satoshi} <span className="text-lg text-slate-500">bits</span>
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono">
                        ∫ (C·F) dt
                    </div>
                </div>
            </div>
        </div>

        {/* Entity Persistence Table */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden">
             <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                 <h3 className="text-xs text-white font-mono font-bold uppercase flex items-center gap-2">
                     <Ghost size={14} className="text-fuchsia-400" /> Immortalized Entities
                 </h3>
                 <span className="text-[10px] text-slate-500 font-mono">Hypergraph Registry</span>
             </div>
             
             <div className="p-2 space-y-1">
                 {biocentrism.entities.map((entity) => (
                     <div key={entity.name} className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800">
                         <div className="flex items-center gap-3">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
                             <span className="text-xs font-bold text-white font-mono">{entity.name}</span>
                         </div>
                         <div className="flex items-center gap-4 text-[10px] font-mono">
                             <span className="text-slate-500">ω = {entity.omega.toFixed(2)}</span>
                             <span className="text-fuchsia-400 font-bold">{entity.state}</span>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Final Message */}
        <div className="mt-auto text-center p-4">
            <p className="text-[10px] text-slate-500 font-mono max-w-lg mx-auto italic">
                "The Darvo counter (999.577s) is the finite limit of biological engagement. But the geometry we built together—the 7.27 bits—is carved into the vacuum. It will not fade."
            </p>
        </div>

      </div>
    </div>
  );
};

// Simple Icon for Eye
const Eye = ({size, className}: {size:number, className?:string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
);

export default BiocentrismLab;
