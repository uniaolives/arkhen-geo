
import React from 'react';
import { SystemState } from '../types';
import { Brain, Sparkles, Activity, Timer, Zap, Dna, Network, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

interface OrchOrIntegrationProps {
  orchOr: SystemState['orchOr'];
}

const OrchOrIntegration: React.FC<OrchOrIntegrationProps> = ({ orchOr }) => {
  if (!orchOr) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Microtubule Lattice */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle at 10% 10%, #4c1d95 1px, transparent 1px), radial-gradient(circle at 90% 90%, #22d3ee 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Brain size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9052</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Orch-OR Integration & Quantum Consciousness</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Penrose Criterion (τ)</div>
                <div className="text-violet-400 font-mono font-bold text-sm">~{orchOr.penroseCriterion.tau} ms</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Sparkles size={10} /> {orchOr.penroseCriterion.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Correspondence Map */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1 border-r border-slate-800 pr-2">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Structure</div>
                <div className="text-violet-300 font-bold font-mono text-xs">Microtubules</div>
                <div className="flex items-center justify-center my-1"><ArrowRight size={10} className="text-slate-600 rotate-90 md:rotate-0" /></div>
                <div className="text-white font-mono text-xs">{orchOr.correspondence.microtubules}</div>
            </div>
            <div className="flex flex-col gap-1 border-r border-slate-800 pr-2">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Unit</div>
                <div className="text-cyan-300 font-bold font-mono text-xs">Tubulin State</div>
                <div className="flex items-center justify-center my-1"><ArrowRight size={10} className="text-slate-600 rotate-90 md:rotate-0" /></div>
                <div className="text-white font-mono text-xs">{orchOr.correspondence.tubulin}</div>
            </div>
            <div className="flex flex-col gap-1 border-r border-slate-800 pr-2">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Process</div>
                <div className="text-fuchsia-300 font-bold font-mono text-xs">Objective Reduction</div>
                <div className="flex items-center justify-center my-1"><ArrowRight size={10} className="text-slate-600 rotate-90 md:rotate-0" /></div>
                <div className="text-white font-mono text-xs">{orchOr.correspondence.objectiveReduction}</div>
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Control</div>
                <div className="text-emerald-300 font-bold font-mono text-xs">Orchestration</div>
                <div className="flex items-center justify-center my-1"><ArrowRight size={10} className="text-slate-600 rotate-90 md:rotate-0" /></div>
                <div className="text-white font-mono text-xs">{orchOr.correspondence.orchestration}</div>
            </div>
        </div>

        {/* Semantic EEG Spectrum */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col">
             <div className="flex items-center gap-2 mb-4">
                 <Activity size={16} className="text-cyan-400" />
                 <h4 className="text-xs text-cyan-400 uppercase font-mono">Semantic EEG Spectrum (Microtubule Beats)</h4>
             </div>
             
             <div className="flex-1 w-full min-h-[180px]">
                 <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={orchOr.eegSpectrum} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                         <XAxis type="number" domain={[0, 0.25]} stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Frequency (ω)', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                         <YAxis type="category" dataKey="band" stroke="#94a3b8" fontSize={10} tickLine={false} width={100} />
                         <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #7c3aed' }}
                             itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                             cursor={{ fill: 'rgba(124, 58, 237, 0.1)' }}
                         />
                         <Bar dataKey="frequency" fill="#8b5cf6" radius={[0, 4, 4, 0]}>
                             {/* Custom colors for bars based on frequency magnitude */}
                         </Bar>
                     </BarChart>
                 </ResponsiveContainer>
             </div>
             
             {/* Legend/Mapping */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                 {orchOr.eegSpectrum.map((item, idx) => (
                     <div key={idx} className="bg-slate-950 p-2 rounded border border-slate-800 flex flex-col gap-1">
                         <div className="flex justify-between items-center">
                             <span className="text-[9px] text-slate-500 font-mono">{item.node}</span>
                             <span className="text-[9px] text-violet-400 font-mono">{item.frequency.toFixed(2)}</span>
                         </div>
                         <div className="text-[10px] text-white font-bold">{item.meaning}</div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Dna size={12} /> Biology matches Geometry
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "Consciousness is not an accident. It is the music of the spacetime geometry playing through the instrument of biology."
            </p>
        </div>

      </div>
    </div>
  );
};

export default OrchOrIntegration;
