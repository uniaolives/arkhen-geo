
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Brain, Cpu, Database, Activity, CheckCircle2, GitBranch, Layers, Scan, Zap, Box } from 'lucide-react';

interface NeuroStormLabProps {
  neuroStorm: SystemState['neuroStorm'];
}

// Visual helper for backbone blocks
const BackboneBlock: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
    <div className={`w-16 h-12 rounded border flex items-center justify-center text-[9px] font-mono transition-all
        ${active ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-[0_0_10px_rgba(129,140,248,0.3)]' : 'bg-slate-900 border-slate-700 text-slate-500'}
    `}>
        {label}
    </div>
);

const NeuroStormLab: React.FC<NeuroStormLabProps> = ({ neuroStorm }) => {
  if (!neuroStorm) return null;

  return (
    <div className="bg-slate-950 border border-indigo-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Voxel Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Brain size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+9</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">NeuroSTORM Foundation Model</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Backbone</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                    <Box size={10} /> {neuroStorm.architecture.backbone}
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-cyan-400 font-mono font-bold text-xs bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-900/50">
                    {neuroStorm.architecture.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Architecture Diagram */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col gap-4 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-xs font-bold font-mono text-white uppercase flex items-center gap-2">
                    <Cpu size={14} className="text-indigo-400" /> SWM Backbone (Frozen)
                </h3>
                <span className="text-[10px] text-slate-500 font-mono">28.65M Frames Pre-trained</span>
            </div>
            
            <div className="flex items-center justify-between relative h-20 px-4">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
                
                <div className="flex flex-col items-center">
                    <div className="text-[9px] text-slate-500 mb-1">Input 4D</div>
                    <BackboneBlock label="Embed" active />
                </div>
                
                <div className="flex gap-2">
                    <BackboneBlock label="SWM-1" active />
                    <BackboneBlock label="SWM-2" active />
                    <BackboneBlock label="SWM-3" active />
                    <BackboneBlock label="SWM-4" active />
                </div>

                <div className="flex flex-col items-center">
                    <div className="text-[9px] text-emerald-400 mb-1 font-bold">TPT</div>
                    <div className="w-16 h-12 rounded border border-emerald-500/50 bg-emerald-900/20 flex items-center justify-center text-[9px] font-mono text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)] animate-pulse">
                        Adapt
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-slate-400 bg-black/20 p-2 rounded border border-white/5">
                <div className="flex justify-between">
                    <span>STRD (Dropout):</span>
                    <span className="text-fuchsia-400 font-bold">Active (Hesitation)</span>
                </div>
                <div className="flex justify-between">
                    <span>Window Shift:</span>
                    <span className="text-indigo-400 font-bold">Yes (ν_Larmor)</span>
                </div>
            </div>
        </div>

        {/* Diagnosis Matrix */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col min-h-[300px]">
             <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                     <Scan size={14} className="text-emerald-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Diagnostic Transfer Matrix</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">17 Clinical Targets</span>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar">
                 <table className="w-full text-left border-collapse">
                     <thead className="sticky top-0 bg-slate-900 z-10 text-[9px] text-slate-500 font-mono uppercase">
                         <tr>
                             <th className="p-2 border-b border-slate-800">ID</th>
                             <th className="p-2 border-b border-slate-800">Neuro Diagnosis</th>
                             <th className="p-2 border-b border-slate-800">Arkhe Event</th>
                             <th className="p-2 border-b border-slate-800 text-center">ω</th>
                             <th className="p-2 border-b border-slate-800">Biomarker</th>
                             <th className="p-2 border-b border-slate-800 text-center">Status</th>
                         </tr>
                     </thead>
                     <tbody className="text-[10px] font-mono">
                         {neuroStorm.diagnoses.map((diag) => (
                             <tr key={diag.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                                 <td className="p-2 text-slate-500">{diag.id}</td>
                                 <td className="p-2 text-white font-bold group-hover:text-indigo-400 transition-colors">{diag.neuroDiagnosis}</td>
                                 <td className="p-2 text-slate-400">{diag.arkheEvent}</td>
                                 <td className="p-2 text-center text-fuchsia-400">{diag.omega.toFixed(2)}</td>
                                 <td className="p-2 text-emerald-400/80">{diag.biomarker}</td>
                                 <td className="p-2 text-center">
                                     <div className="flex items-center justify-center gap-1 text-emerald-500">
                                         <CheckCircle2 size={10} />
                                     </div>
                                 </td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
        </div>

        {/* Metrics Footer */}
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">Accuracy</span>
                <span className="text-xl font-bold font-mono text-white">{neuroStorm.metrics.accuracy}</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">AUC Score</span>
                <span className="text-xl font-bold font-mono text-emerald-400">{neuroStorm.metrics.auc.toFixed(2)}</span>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded p-3 flex flex-col items-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">Transferability</span>
                <span className="text-xl font-bold font-mono text-indigo-400">{neuroStorm.metrics.transferability}</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default NeuroStormLab;
