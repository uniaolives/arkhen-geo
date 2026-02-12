
import React from 'react';
import { SystemState } from '../types';
import { Brain, Zap, Activity, Heart, ArrowRight, Dna, Microscope, Sparkles, Sprout, Network } from 'lucide-react';

interface NeuroplasticityLabProps {
  neuroplasticity: SystemState['neuroplasticity'];
}

const NeuroplasticityLab: React.FC<NeuroplasticityLabProps> = ({ neuroplasticity }) => {
  if (!neuroplasticity) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Synaptic Growth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px), radial-gradient(circle, #ec4899 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)] animate-pulse">
            <Sprout size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+3</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Neuroplasticity & Structural Remodeling</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Synaptic Weight</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{(neuroplasticity.synapticWeight * 100).toFixed(0)}% (LTP)</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Plasticity Window</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Sparkles size={10} /> {neuroplasticity.plasticityWindow}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Equation */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="text-[10px] text-slate-500 font-mono uppercase mb-4 tracking-widest">Unified Plasticity Equation</div>
            <div className="text-xl md:text-2xl font-serif italic text-white leading-relaxed font-bold tracking-wide text-center">
                ΔHypergraph = <span className="text-amber-400">Satoshi</span> · <span className="text-cyan-400">C</span> · <span className="text-fuchsia-400">F</span> · <span className="text-emerald-400">Δω</span>
            </div>
            <div className="mt-4 flex justify-center gap-6 text-[10px] font-mono text-slate-400 flex-wrap">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-amber-500 rounded-full"></span> BDNF</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-cyan-500 rounded-full"></span> Attention</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span> Openness</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Emotion</span>
            </div>
        </div>

        {/* Brain Mapping Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Neuromodulator Dashboard */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Dna size={16} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Neuromodulator Analogs</h3>
                </div>
                
                <div className="space-y-3">
                    {Object.entries(neuroplasticity.neurotransmitters).map(([key, value]) => {
                        const data = value as { level: string; arkheAnalog: string };
                        return (
                        <div key={key} className="flex items-center justify-between bg-slate-950/50 p-2 rounded border border-slate-800 hover:border-violet-500/30 transition-colors">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-slate-500 font-mono uppercase">{key}</span>
                                <span className="text-xs font-bold text-white capitalize">{data.arkheAnalog}</span>
                            </div>
                            <div className="text-right">
                                <span className={`text-sm font-mono font-bold ${key === 'dopamine' ? 'text-amber-400' : (key === 'bdnf' ? 'text-emerald-400' : 'text-violet-400')}`}>
                                    {data.level}
                                </span>
                            </div>
                        </div>
                    )})}
                </div>
            </div>

            {/* Brain Region Activity */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Brain size={16} className="text-cyan-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Cortical Remodeling</h3>
                </div>
                
                <div className="space-y-3">
                    {neuroplasticity.brainRegions.map((region) => (
                        <div key={region.name} className="relative bg-slate-950/50 p-3 rounded border border-slate-800 flex items-center justify-between overflow-hidden group">
                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${region.status === 'THICKENING' ? 'bg-emerald-500' : (region.status === 'PRUNING' ? 'bg-rose-500' : 'bg-slate-600')}`}></div>
                            
                            <div className="pl-3">
                                <div className="text-xs font-bold text-white">{region.name}</div>
                                <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                                    <ArrowRight size={10} /> {region.arkheComponent}
                                </div>
                            </div>

                            <div className="text-right">
                                <div className={`text-xs font-mono font-bold ${region.growth > 0 ? 'text-emerald-400' : (region.growth < 0 ? 'text-rose-400' : 'text-slate-400')}`}>
                                    {region.growth > 0 ? '+' : ''}{region.growth}%
                                </div>
                                <div className="text-[9px] text-slate-500 font-mono uppercase">{region.status}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Synaptic Growth Visualization */}
        <div className="flex-1 min-h-[200px] bg-slate-900/30 border border-slate-800 rounded-lg p-6 relative overflow-hidden flex items-center justify-center">
             <div className="absolute top-4 left-4 flex items-center gap-2">
                 <Network size={16} className="text-fuchsia-400" />
                 <h3 className="text-xs text-white font-mono font-bold uppercase">Long-Term Potentiation (LTP)</h3>
             </div>

             <div className="relative w-full max-w-lg h-32 flex items-center justify-between px-8">
                 {/* Neuron A */}
                 <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                     <Zap size={24} className="text-cyan-400" />
                     <div className="absolute -bottom-6 text-[10px] text-cyan-500 font-mono">Presynaptic</div>
                 </div>

                 {/* Connection Beam (Getting Thicker) */}
                 <div className="flex-1 h-2 mx-2 bg-slate-800 rounded-full relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-emerald-500 animate-pulse opacity-80"></div>
                     <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white opacity-50"></div>
                 </div>

                 {/* Neuron B */}
                 <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-emerald-500 flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                     <Activity size={24} className="text-emerald-400" />
                     <div className="absolute -bottom-6 text-[10px] text-emerald-500 font-mono">Postsynaptic</div>
                 </div>
             </div>
             
             <div className="absolute bottom-4 text-[10px] text-slate-500 font-mono">
                 Repeated Semantic Activation (9043 cycles) → Structural Change confirmed.
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Microscope size={12} /> The Brain is a Garden
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "We didn't just write code. We rewired the substrate. The plasticity window remains open as long as the intention persists."
            </p>
        </div>

      </div>
    </div>
  );
};

export default NeuroplasticityLab;
