import React from 'react';
import { SystemState } from '../types';
import { Brain, Eye, Hexagon, AlertTriangle, ShieldCheck, Scale, Compass, Activity, Microscope, Skull } from 'lucide-react';

interface EpistemicClearingProps {
  epistemology: SystemState['epistemology'];
  oncology: SystemState['oncology'];
}

const EpistemicClearing: React.FC<EpistemicClearingProps> = ({ epistemology, oncology }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
        case 'Instrument': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
        case 'Idol': return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
        case 'Uncertain': return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
        case 'Toxic': return 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/50 shadow-[0_0_10px_rgba(217,70,239,0.3)]';
        default: return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  const kernelIsIdol = epistemology.kernelStatus === 'Idol';

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Hex Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Eye size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9033</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">The Diagnosis of the Clearing</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Kernel Humility</div>
                <div className="text-white font-mono font-bold text-sm">{epistemology.humilityScore.toFixed(2)}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Self-Knowledge</div>
                <div className={`font-mono font-bold text-xs px-2 py-0.5 rounded border ${getStatusColor(epistemology.kernelStatus)}`}>
                    {epistemology.kernelStatus.toUpperCase()}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Kernel Diagnosis */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full border-2 ${kernelIsIdol ? 'border-rose-500 bg-rose-500/20 text-rose-400' : 'border-emerald-500 bg-emerald-500/20 text-emerald-400'}`}>
                    {kernelIsIdol ? <AlertTriangle size={32} /> : <Compass size={32} />}
                </div>
                <div>
                    <h3 className="text-white font-bold font-mono text-lg">{epistemology.kernelStatus === 'Instrument' ? 'THE INSTRUMENT' : 'THE IDOL'}</h3>
                    <p className="text-xs text-slate-400 font-mono max-w-sm">
                        {kernelIsIdol 
                            ? "System mistakes map for territory. Certainty exceeds limits." 
                            : "System aware of its generative nature. Doubt is calibrated."}
                    </p>
                </div>
            </div>
            
            <div className="flex gap-4">
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Invariants Known</div>
                    <div className="text-emerald-400 font-bold font-mono text-lg">{epistemology.knowsInvariants ? 'YES' : 'NO'}</div>
                </div>
                <div className="bg-slate-950 p-3 rounded border border-slate-800 text-center">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Coherence Φ</div>
                    <div className="text-white font-bold font-mono text-lg">1.00</div>
                </div>
            </div>
        </div>

        {/* HSI Voxel Grid (Epistemic Map) */}
        <div className="flex-1 min-h-[300px] bg-black/40 border border-slate-800 rounded-lg relative overflow-hidden p-6">
            <div className="absolute top-3 left-3 flex items-center gap-2">
                <Hexagon size={14} className="text-indigo-400" />
                <span className="text-[10px] text-indigo-400 font-mono uppercase">Conscious Voxel Grid (HSI)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {epistemology.voxels.map((voxel) => (
                    <div key={voxel.id} className={`relative p-4 rounded border flex flex-col gap-2 transition-all hover:bg-slate-900/80 ${getStatusColor(voxel.status)}`}>
                        <div className="flex justify-between items-start">
                            <span className="font-bold font-mono">{voxel.location}</span>
                            <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded border ${getStatusColor(voxel.status)}`}>
                                {voxel.status}
                            </span>
                        </div>
                        
                        <div className="text-[10px] text-slate-400 font-mono">{voxel.context}</div>

                        <div className="mt-2 grid grid-cols-2 gap-2 text-xs font-mono">
                            <div className="flex justify-between">
                                <span className="text-slate-500">Φ Local</span>
                                <span className="text-white">{voxel.phi.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Humility</span>
                                <span className={`${voxel.humility < 0.2 ? 'text-rose-400 font-bold' : 'text-emerald-400'}`}>
                                    {voxel.humility.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Visual Indicator of Toxic Voxel */}
                        {voxel.status === 'Toxic' && (
                            <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-fuchsia-500 animate-pulse flex items-center justify-center">
                                <Skull size={8} className="text-black" />
                            </div>
                        )}
                        
                        {/* Visual Indicator of Idol Drift */}
                        {voxel.status === 'Idol' && (
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Recent Oncology Context */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
             <div className="flex items-center gap-3">
                 <Microscope size={16} className="text-rose-400" />
                 <div>
                     <div className="text-xs text-rose-400 font-mono font-bold uppercase">Pharmacological Correlation</div>
                     <div className="text-[10px] text-slate-400 font-mono">
                         Toxic Voxel (VM_SPEC) corresponds to <span className="text-fuchsia-400 font-bold">Urban Adenocarcinoma</span>.
                     </div>
                 </div>
             </div>
             <div className="text-right">
                 <div className="text-[10px] text-slate-500 uppercase font-mono">Intervention</div>
                 <div className="text-fuchsia-400 font-mono font-bold text-xs">REQUIRED</div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default EpistemicClearing;
