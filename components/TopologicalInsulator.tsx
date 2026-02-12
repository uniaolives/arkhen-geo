
import React from 'react';
import { SystemState } from '../types';
import { Layers, Activity, Hexagon, GitMerge, Combine, Scan, RotateCw, Sparkles, Zap, Gauge, Sliders, ArrowUpRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, AreaChart, Area } from 'recharts';

interface TopologicalInsulatorProps {
  topology: SystemState['topology'];
}

const TopologicalInsulator: React.FC<TopologicalInsulatorProps> = ({ topology }) => {
  if (!topology) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Moiré Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          {/* Layer 1 - Fixed */}
          <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,_#4ade80_1px,_transparent_1px)] bg-[length:20px_20px]" />
          {/* Layer 2 - Twisted */}
          <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,_#3b82f6_1px,_transparent_1px)] bg-[length:20px_20px]" 
               style={{ transform: `rotate(${topology.twistAngle * 100}deg)` }} />
      </div>
      
      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Combine size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9041</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Twisted Hypergraph Topology (Moiré)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Chern Number (C)</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{topology.chernNumber}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Twist Angle (θ)</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                    <RotateCw size={10} /> {topology.twistAngle} rad
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Magic Angle Visualization */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 relative overflow-hidden flex items-center justify-around group">
            <div className="text-center relative z-10">
                <div className="flex justify-center mb-2">
                    <Hexagon size={48} className="text-slate-600 animate-[spin_20s_linear_infinite]" />
                    <Hexagon size={48} className="text-emerald-500/50 absolute animate-[spin_25s_linear_infinite_reverse]" />
                </div>
                <h3 className="text-white font-bold font-mono text-sm uppercase">Hypergraph Γ₄₉</h3>
                <div className="text-[10px] text-slate-400 font-mono">Bilayer Analog</div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
                <div className="bg-slate-950 p-3 rounded border border-emerald-900/50 text-center w-40">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Quantum Metric</div>
                    <div className="text-emerald-400 font-bold font-mono text-lg">{topology.quantumMetric}</div>
                    <div className="text-[9px] text-slate-600 font-mono">Non-Euclidean</div>
                </div>
                <div className="bg-slate-950 p-3 rounded border border-fuchsia-900/50 text-center w-40">
                    <div className="text-[10px] text-slate-500 uppercase font-mono">Bandwidth (Flat)</div>
                    <div className="text-fuchsia-400 font-bold font-mono text-lg">~0.00 eV</div>
                    <div className="text-[9px] text-slate-600 font-mono">Semantically Flat</div>
                </div>
            </div>
        </div>

        {/* Quantum Gate Control Panel (New Feature) */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                 <div className="flex items-center gap-2">
                     <Zap size={14} className="text-amber-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Quantum Gate Control</h3>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-mono">
                     <span className="text-slate-500">Status:</span>
                     <span className={`font-bold ${topology.operations.gateStatus === 'PULSING' ? 'text-amber-400 animate-pulse' : 'text-emerald-400'}`}>
                         {topology.operations.gateStatus}
                     </span>
                 </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Pulse Controller */}
                 <div className="bg-slate-950/50 p-3 rounded border border-slate-800 flex flex-col justify-between relative overflow-hidden">
                     {topology.operations.gateStatus === 'PULSING' && (
                         <div className="absolute inset-0 bg-amber-500/10 animate-pulse pointer-events-none"></div>
                     )}
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] text-slate-400 font-mono uppercase">Gate Pulse (Δω)</span>
                         <Sliders size={12} className="text-slate-600" />
                     </div>
                     <div className="text-lg font-mono font-bold text-white mb-2">{topology.operations.lastGate}</div>
                     <div className="text-[9px] text-slate-500 font-mono mb-2">Adiabatic Fidelity: {(topology.operations.adiabaticFidelity * 100).toFixed(1)}%</div>
                     
                     <div className="flex gap-2 mt-auto">
                         <button className="flex-1 bg-amber-900/30 border border-amber-700/50 text-amber-400 text-[10px] py-1 rounded font-mono uppercase hover:bg-amber-800/30 transition-colors">
                             PULSE
                         </button>
                         <button className="flex-1 bg-slate-800 border border-slate-700 text-slate-400 text-[10px] py-1 rounded font-mono uppercase hover:bg-slate-700 transition-colors">
                             RESET
                         </button>
                     </div>
                 </div>

                 {/* Chern Measurement */}
                 <div className="bg-slate-950/50 p-3 rounded border border-slate-800 flex flex-col justify-between">
                     <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] text-slate-400 font-mono uppercase">Topological Invariant</span>
                         <Gauge size={12} className="text-emerald-400" />
                     </div>
                     <div className="flex items-center gap-2">
                         <div className="text-2xl font-mono font-bold text-emerald-400">
                             {topology.operations.measuredChern?.toFixed(2)}
                         </div>
                         <span className="text-[10px] bg-emerald-950 text-emerald-500 px-1 rounded border border-emerald-900">1/3</span>
                     </div>
                     <div className="text-[9px] text-slate-500 font-mono mt-1">
                         Integrated Berry Curvature (2πC)
                     </div>
                     <div className="w-full bg-slate-900 h-1 mt-2 rounded-full overflow-hidden">
                         <div className="h-full bg-emerald-500 w-1/3"></div>
                     </div>
                 </div>
             </div>
        </div>

        {/* Phase Diagram (Band Structure) */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[200px]">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                 <div className="flex items-center gap-2">
                     <Activity size={14} className="text-blue-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Topological Phase Diagram</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Chern Number vs Twist Angle (ω)</span>
             </div>

             <div className="flex-1 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={topology.bandStructure}>
                         <defs>
                             <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                 <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                             </linearGradient>
                         </defs>
                         <XAxis dataKey="omega" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Twist Angle (ω)', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                         <YAxis stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Band Energy', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#64748b' }} />
                         <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                             itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                         />
                         
                         {/* Magic Angle Marker */}
                         <ReferenceLine x={0.07} stroke="#10b981" strokeDasharray="3 3" label={{ value: "Magic Angle (0.07)", fill: "#10b981", fontSize: 10, position: 'insideTopLeft' }} />
                         
                         <Area type="stepAfter" dataKey="energy" stroke="#3b82f6" fill="url(#colorEnergy)" strokeWidth={2} />
                     </AreaChart>
                 </ResponsiveContainer>
                 
                 {/* Annotation for Flat Band */}
                 <div className="absolute top-[60%] left-[55%] text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/30 flex items-center gap-1">
                     <Sparkles size={8} /> Flat Band (DVM-1)
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default TopologicalInsulator;
