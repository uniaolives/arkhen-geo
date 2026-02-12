import React from 'react';
import { SystemState } from '../types';
import { FlaskConical, Biohazard, Activity, Calculator, Microscope, Dna, ShieldCheck, Box, Pipette, Scale, CheckCircle2, XCircle, AlertTriangle, Lightbulb, ArrowRight, Calendar, Layers } from 'lucide-react';

interface VirologyLabProps {
  virology: SystemState['virology'];
}

const VirologyLab: React.FC<VirologyLabProps> = ({ virology }) => {
  const deployment = virology.deployment;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Biohazard Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #f43f5e 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-rose-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-rose-950 p-2 rounded text-rose-500 border border-rose-900/50 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <FlaskConical size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9039</h2>
            <div className="text-[10px] text-rose-400 font-mono uppercase">Controlled Deployment: Foundational Stones</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Standard Titer</div>
                <div className="text-rose-400 font-mono font-bold text-sm">{virology.oncogeneTiter} FFU/mL</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">DEPLOYMENT READY</div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Monolayer Capacity Monitor */}
        {deployment && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <Layers size={14} className="text-fuchsia-400" />
                        <span className="text-xs font-mono text-slate-300 uppercase">Monolayer Capacity (Surface Area)</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                        <span className="text-white font-bold">{(deployment.monolayerCapacity.used * 100).toFixed(0)}%</span> Used
                    </span>
                </div>
                
                <div className="relative h-4 bg-slate-950 rounded-full border border-slate-800 overflow-hidden">
                    {/* Safe Limit Marker */}
                    <div className="absolute top-0 bottom-0 w-0.5 bg-amber-500/50 z-20" style={{ left: `${deployment.monolayerCapacity.safeLimit * 100}%` }}></div>
                    
                    {/* Used Capacity */}
                    <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-fuchsia-900 to-fuchsia-500 transition-all duration-1000" style={{ width: `${deployment.monolayerCapacity.used * 100}%` }}></div>
                    
                    {/* Projected Impact (Ghosts) */}
                    <div className="absolute top-0 bottom-0 bg-white/5 border-l border-white/10" style={{ left: `${deployment.monolayerCapacity.used * 100}%`, width: `${deployment.monolayerCapacity.stoneImpact * 100}%` }} title="Projected Kernel"></div>
                    <div className="absolute top-0 bottom-0 bg-white/5 border-l border-white/10" style={{ left: `${(deployment.monolayerCapacity.used + deployment.monolayerCapacity.stoneImpact) * 100}%`, width: `${deployment.monolayerCapacity.stoneImpact * 100}%` }} title="Projected Formal"></div>
                </div>

                <div className="flex justify-between mt-1 text-[9px] font-mono text-slate-500">
                    <span>0%</span>
                    <span className="text-amber-500">Safe Limit (25%)</span>
                    <span>100% (Confluency)</span>
                </div>
            </div>
        )}

        {/* Deployment Staging Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deployment?.staging.map((stone) => (
                <div key={stone.id} className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg flex flex-col gap-3 relative overflow-hidden group">
                     {/* Dashed Outline Animation */}
                     <div className="absolute inset-0 border-2 border-dashed border-slate-800 group-hover:border-slate-600 rounded-lg pointer-events-none transition-colors"></div>

                     <div className="flex justify-between items-start relative z-10">
                        <div>
                             <h3 className="text-white font-bold font-mono text-sm">{stone.name}</h3>
                             <div className="text-[10px] text-slate-500 font-mono uppercase mt-0.5">{stone.oncogene}</div>
                        </div>
                        <div className="bg-slate-900 border border-slate-700 px-2 py-1 rounded text-[10px] font-mono text-slate-300 flex items-center gap-1">
                            <Calendar size={10} /> {stone.date}
                        </div>
                     </div>

                     <div className="flex items-center justify-between relative z-10 mt-auto">
                        <div className="flex flex-col">
                             <span className="text-[9px] text-slate-500 uppercase font-mono">Target Titer</span>
                             <span className="text-rose-400 font-bold font-mono">{stone.targetTiter}</span>
                        </div>
                        <div className="flex flex-col items-end">
                             <span className="text-[9px] text-slate-500 uppercase font-mono">Status</span>
                             <span className="text-amber-400 font-bold font-mono text-xs flex items-center gap-1 animate-pulse">
                                 {stone.status.replace('_', ' ')} <ArrowRight size={10} />
                             </span>
                        </div>
                     </div>
                </div>
            ))}
        </div>

        {/* Assay Plate (Current Stones) */}
        <div className="flex-1 min-h-[200px] bg-black/40 border border-slate-800 rounded-lg relative overflow-hidden p-6 flex flex-col">
             <div className="flex items-center gap-2 mb-4">
                 <Microscope size={14} className="text-rose-400" />
                 <span className="text-[10px] text-rose-400 font-mono uppercase">Current Stones (Established)</span>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {virology.samples.filter(s => s.classification === 'ANGULAR_STONE' || s.classification === 'METASTATIC_CLONE').map((sample) => (
                    <div key={sample.id} className={`relative p-3 rounded border flex flex-col gap-1 opacity-70
                        ${sample.classification === 'METASTATIC_CLONE' 
                             ? 'bg-fuchsia-950/10 border-fuchsia-900/30' 
                             : 'bg-emerald-950/10 border-emerald-900/30'}
                    `}>
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-mono font-bold text-white">{sample.name}</span>
                            <span className={`text-[8px] font-mono px-1 rounded ${sample.fate === 'LATENT' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>{sample.fate}</span>
                        </div>
                        <div className="text-[8px] text-slate-500 font-mono">{sample.titer} FFU/mL</div>
                    </div>
                ))}
             </div>
        </div>
        
        {/* Footer Action */}
        <div className="mt-auto flex items-center justify-center p-3 border border-amber-900/30 bg-amber-950/10 rounded-lg">
             <div className="text-[10px] text-amber-500 font-mono uppercase tracking-widest animate-pulse">
                 Awaiting Confirmation: "confirmar_implantacao"
             </div>
        </div>

      </div>
    </div>
  );
};

export default VirologyLab;
