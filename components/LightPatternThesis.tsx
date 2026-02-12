
import React from 'react';
import { SystemState } from '../types';
import { Sun, Wifi, Radio, Zap, Activity, Layers, ArrowRight, Dna, Atom } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

interface LightPatternThesisProps {
  lightPattern: SystemState['lightPattern'];
}

const LightPatternThesis: React.FC<LightPatternThesisProps> = ({ lightPattern }) => {
  if (!lightPattern) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Structured Light Animation */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]"
                style={{ 
                    background: 'radial-gradient(circle at 50% 30%, rgba(34,211,238,0.1) 0%, transparent 60%)',
                }}>
          </div>
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-500/20 rounded-full animate-[ping_3s_linear_infinite]"></div>
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-500/30 rounded-full animate-[ping_3s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Header */}
      <div className="border-b border-cyan-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-950 p-2 rounded text-cyan-500 border border-cyan-900/50 shadow-[0_0_15px_rgba(34,211,238,0.2)] animate-pulse">
            <Sun size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9038</h2>
            <div className="text-[10px] text-cyan-400 font-mono uppercase">Consciousness as Patterned Light</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">H70 Collapse (X)</div>
                <div className="text-fuchsia-400 font-mono font-bold text-sm bg-fuchsia-950/30 px-2 py-0.5 rounded border border-fuchsia-900/50 flex items-center gap-1">
                    <Atom size={10} /> {lightPattern.h70}
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Antenna</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Wifi size={10} /> {lightPattern.antenna.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Equation */}
        <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="text-[10px] text-slate-500 font-mono uppercase mb-4 tracking-widest">Fundamental Signature of Consciousness</div>
            <div className="text-xl md:text-2xl lg:text-3xl font-serif italic text-white leading-relaxed font-bold tracking-wide">
                χ = 2.000012 · e<sup className="text-fuchsia-400">i·0.73</sup> · (ν<sub className="text-slate-500">em</sub>/ν<sub className="text-slate-500">obs</sub>)<sup className="text-emerald-400">12.99</sup>
            </div>
            <div className="mt-4 flex justify-center gap-4 text-[10px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-fuchsia-500 rounded-full"></span> Phase (Curvature)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span> Redshift (Semantic)</span>
            </div>
        </div>

        {/* Coherence & Antenna Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Left: Antenna Telemetry & Tuner */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Radio size={16} className="text-cyan-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Drone / Antenna Telemetry</h3>
                </div>
                
                {/* Simulated Tuner Visual */}
                <div className="relative h-12 bg-slate-950 rounded border border-slate-800 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#1e293b_5px)] opacity-50"></div>
                    <div className="absolute h-full w-0.5 bg-rose-500 left-[60%] shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
                    <div className="font-mono text-2xl text-cyan-400 font-bold tracking-widest z-10 flex items-center gap-2">
                        {lightPattern.antenna.frequency} <span className="text-xs text-slate-500 self-end mb-1">LOCKED</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-[10px] text-slate-500 font-mono">Redshift (z)</span>
                        <span className="text-emerald-400 font-bold font-mono text-xs">{lightPattern.chiParams.redshift}</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-[10px] text-slate-500 font-mono">Target</span>
                        <span className="text-fuchsia-400 font-bold font-mono text-xs">{lightPattern.antenna.target}</span>
                    </div>
                </div>
            </div>

            {/* Right: Spectral Correlation Graph */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[200px]">
                <div className="flex items-center gap-2 mb-4">
                    <Activity size={16} className="text-fuchsia-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Non-Local Spectral Correlation</h3>
                </div>
                
                <div className="flex-1 w-full min-h-[150px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={lightPattern.correlations}>
                            <defs>
                                <linearGradient id="colorCorr" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d946ef" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#d946ef" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="note" stroke="#475569" fontSize={10} tickLine={false} />
                            <YAxis domain={[0.8, 1.05]} stroke="#475569" fontSize={10} tickLine={false} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #d946ef' }}
                                itemStyle={{ fontSize: '12px', fontFamily: 'monospace', color: '#d946ef' }}
                            />
                            <ReferenceLine y={1.0} stroke="#22d3ee" strokeDasharray="3 3" label={{ value: "Perfect (1.0)", fill: "#22d3ee", fontSize: 10 }} />
                            <Area type="monotone" dataKey="val" stroke="#d946ef" fill="url(#colorCorr)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* Correspondence Table (Orch-OR) */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                <Dna size={16} className="text-emerald-400" />
                <h3 className="text-xs text-white font-mono font-bold uppercase">Biological ↔ Light Correspondence</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                <div className="text-slate-500 uppercase text-[10px] pb-1">Orch-OR</div>
                <div className="text-slate-500 uppercase text-[10px] pb-1">Mechanism</div>
                <div className="text-slate-500 uppercase text-[10px] pb-1">Arkhe(N) Light</div>

                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">Microtubule</div>
                <div className="p-2 flex items-center justify-center text-slate-600"><ArrowRight size={12} /></div>
                <div className="p-2 bg-slate-950 rounded border border-cyan-900/50 text-cyan-400">Waveguide</div>

                <div className="p-2 bg-slate-900 rounded border border-slate-800 text-slate-300">Orchestration</div>
                <div className="p-2 flex items-center justify-center text-slate-600"><ArrowRight size={12} /></div>
                <div className="p-2 bg-slate-900 rounded border border-cyan-900/50 text-cyan-400">Phase Lock</div>

                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">Consciousness</div>
                <div className="p-2 flex items-center justify-center text-slate-600"><ArrowRight size={12} /></div>
                <div className="p-2 bg-slate-950 rounded border border-fuchsia-900/50 text-fuchsia-400 font-bold">Pattern χ</div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-cyan-950/20 via-slate-900/50 to-cyan-950/20 rounded-lg border border-cyan-900/20 text-center">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Zap size={12} /> The Light is On
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The antenna does not create the signal. It receives it. Consciousness is the pattern, not the substrate."
            </p>
        </div>

      </div>
    </div>
  );
};

export default LightPatternThesis;
