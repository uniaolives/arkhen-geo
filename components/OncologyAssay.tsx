import React, { useState } from 'react';
import { SystemState } from '../types';
import { Microscope, Dna, Activity, ShieldCheck, AlertOctagon, Grid, Layers, Box, Disc, Pill, TestTube, Skull, Syringe, HeartPulse } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

interface OncologyAssayProps {
  oncology: SystemState['oncology'];
}

// Simulated Dose-Response Data
const doseResponseData = [
  { dose: '10⁰', resistant: 98, sensitive: 95, partial: 97 },
  { dose: '10¹', resistant: 97, sensitive: 60, partial: 85 }, // Therapeutic Window
  { dose: '10²', resistant: 96, sensitive: 20, partial: 65 },
  { dose: '10³', resistant: 95, sensitive: 5, partial: 45 },
];

const OncologyAssay: React.FC<OncologyAssayProps> = ({ oncology }) => {
  const [activeTab, setActiveTab] = useState<'assay' | 'pharma'>('pharma');

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Cellular Mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #f43f5e 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-rose-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-rose-950 p-2 rounded text-rose-500 border border-rose-900/50 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <Microscope size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9040</h2>
            <div className="text-[10px] text-rose-400 font-mono uppercase">Integrative Oncology & Epistemic Cannabinoids</div>
          </div>
        </div>
        
        {/* Tab Switcher */}
        <div className="flex bg-slate-900 rounded p-1 border border-slate-800">
             <button 
                onClick={() => setActiveTab('assay')}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-colors ${activeTab === 'assay' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 FOCI ASSAY
             </button>
             <button 
                onClick={() => setActiveTab('pharma')}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-colors ${activeTab === 'pharma' ? 'bg-emerald-900/30 text-emerald-400 shadow border border-emerald-900/50' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 PHARMACOLOGY
             </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {activeTab === 'assay' && (
           <>
            {/* Culture Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                         <Grid size={24} className="text-indigo-400" />
                         <div>
                             <div className="text-xs text-slate-500 font-mono uppercase">Monolayer Integrity</div>
                             <div className="text-xl text-white font-bold font-mono">{(oncology.monolayerIntegrity * 100).toFixed(1)}%</div>
                         </div>
                     </div>
                     <div className="text-right">
                         <div className="text-[10px] text-emerald-400 uppercase font-mono">Confluency Restored</div>
                     </div>
                 </div>

                 <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                     <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Intervention Agent</div>
                     <div className="text-sm text-fuchsia-400 font-mono font-bold flex items-center gap-2">
                         <Activity size={14} /> {oncology.intervention.agent}
                     </div>
                     <div className="text-[10px] text-slate-400 mt-1 italic">"{oncology.intervention.result}"</div>
                 </div>
            </div>

            {/* Foci Visualization (Petri Dish View) */}
            <div className="flex-1 min-h-[250px] bg-black/40 border border-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0" 
                     style={{ 
                         backgroundImage: 'linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)', 
                         backgroundSize: '20px 20px' 
                     }}>
                </div>
                <div className="relative w-full h-full p-8 flex justify-center items-center gap-12">
                    {oncology.foci.map((foco, idx) => (
                        <div key={foco.id} className="relative group flex flex-col items-center">
                            <div className={`
                                w-24 h-24 rounded-full border-2 flex items-center justify-center transition-all duration-500
                                ${foco.response === 'PERSISTENCE' ? 'border-rose-500/50 bg-rose-500/10 shadow-[0_0_30px_rgba(244,63,94,0.2)]' : 'border-slate-700'}
                                group-hover:scale-110
                            `}>
                                {foco.type === 'points' && <Layers size={32} className="text-rose-400 opacity-80" />}
                                {foco.type === 'shadow' && <Disc size={32} className="text-amber-400 opacity-80" />}
                                {foco.type === 'mass' && <Box size={32} className="text-emerald-400 opacity-80" />}
                                <div className="absolute -top-3 -right-3 bg-slate-950 border border-slate-700 rounded-full w-8 h-8 flex items-center justify-center text-[10px] font-bold text-white">
                                    {(foco.structuralIntegrity * 100).toFixed(0)}
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="text-xs font-bold text-white font-mono">{foco.name}</div>
                                <div className="text-[10px] text-slate-400 uppercase font-mono mt-0.5">{foco.type}</div>
                            </div>
                            <div className="mt-2 px-2 py-0.5 rounded bg-rose-950/50 border border-rose-900/50 text-[10px] text-rose-300 font-mono uppercase flex items-center gap-1">
                                <AlertOctagon size={10} /> {foco.response}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                    <div className="w-16 h-1 bg-slate-600"></div>
                    <span className="text-[10px] text-slate-500 font-mono">100 μm (Semantic)</span>
                </div>
            </div>
           </>
        )}

        {activeTab === 'pharma' && oncology.pharmacology && (
            <div className="flex flex-col h-full gap-6 animate-in fade-in duration-300">
                
                {/* Active Regimen & Targets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-emerald-950/20 border border-emerald-900/50 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 text-emerald-900/20"><Pill size={80} /></div>
                        <div className="relative z-10">
                            <h3 className="text-emerald-400 font-bold font-mono text-sm uppercase flex items-center gap-2 mb-2">
                                <Syringe size={14} /> Active Regimen
                            </h3>
                            <div className="text-2xl text-white font-mono font-bold">{oncology.pharmacology.activeRegimen}</div>
                        </div>
                        <div className="mt-3 flex gap-2 relative z-10">
                             {oncology.pharmacology.targetReceptors.map(r => (
                                 <span key={r} className="text-[10px] bg-emerald-900/50 text-emerald-300 px-2 py-1 rounded border border-emerald-500/20 font-mono">{r}</span>
                             ))}
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                             <div className="text-[10px] text-slate-500 uppercase font-mono">Apoptosis Induction</div>
                             <Skull size={14} className="text-rose-400" />
                         </div>
                         <div className="text-3xl text-white font-mono font-bold">{(oncology.pharmacology.apoptosisRate * 100).toFixed(0)}%</div>
                         <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                             <div className="h-full bg-rose-500 transition-all duration-1000" style={{ width: `${oncology.pharmacology.apoptosisRate * 100}%` }}></div>
                         </div>
                         <div className="text-[9px] text-slate-500 font-mono mt-1 text-right">Target: Lytic Foci</div>
                    </div>
                </div>

                {/* Dose Response Curve */}
                <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[200px]">
                     <div className="flex items-center gap-2 mb-4">
                         <Activity size={16} className="text-emerald-400" />
                         <h4 className="text-xs text-emerald-400 uppercase font-mono">Cannabinoid Sensitivity (Viability %)</h4>
                     </div>
                     <div className="flex-1 w-full min-h-[150px]">
                         <ResponsiveContainer width="100%" height="100%">
                             <LineChart data={doseResponseData}>
                                 <XAxis dataKey="dose" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Log Dose [FFU/mL]', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                                 <YAxis domain={[0, 100]} stroke="#475569" fontSize={10} tickLine={false} />
                                 <Tooltip 
                                     contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #064e3b' }}
                                     itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                                 />
                                 <ReferenceLine x="10¹" stroke="#10b981" strokeDasharray="3 3" label={{ value: "Therapeutic", fill: "#10b981", fontSize: 10, position: 'insideTopRight' }} />
                                 <Line type="monotone" dataKey="resistant" stroke="#f43f5e" strokeWidth={2} dot={false} name="Stones (Resistant)" />
                                 <Line type="monotone" dataKey="partial" stroke="#fbbf24" strokeWidth={2} dot={false} name="Metastatic (Partial)" />
                                 <Line type="monotone" dataKey="sensitive" stroke="#34d399" strokeWidth={2} dot={false} name="Lytic (Sensitive)" />
                             </LineChart>
                         </ResponsiveContainer>
                     </div>
                </div>

                {/* Clinical Case: Vila Madalena */}
                {oncology.clinicalCase && (
                    <div className="bg-gradient-to-r from-rose-950/20 via-slate-900/50 to-rose-950/20 border border-rose-900/30 rounded-lg p-4 flex items-center justify-between">
                         <div>
                             <div className="flex items-center gap-2 mb-1">
                                 <HeartPulse size={16} className="text-rose-500" />
                                 <h4 className="text-xs font-bold font-mono text-white uppercase">Clinical Case: {oncology.clinicalCase.id}</h4>
                             </div>
                             <div className="text-sm text-rose-300 font-mono mb-2">{oncology.clinicalCase.diagnosis}</div>
                             <div className="flex gap-3 text-[10px] font-mono text-slate-400">
                                 <span>Φ: <b className="text-white">{oncology.clinicalCase.biomarkers.phi}</b></span>
                                 <span>Humility: <b className="text-rose-400">{oncology.clinicalCase.biomarkers.humility}</b></span>
                             </div>
                         </div>
                         <div className="text-right">
                             <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Recommendation</div>
                             <div className="px-2 py-1 bg-rose-500/20 border border-rose-500/50 text-rose-300 rounded text-xs font-bold font-mono animate-pulse">
                                 {oncology.clinicalCase.recommendedTherapy}
                             </div>
                         </div>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default OncologyAssay;
