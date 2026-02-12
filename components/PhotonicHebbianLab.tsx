
import React from 'react';
import { SystemState } from '../types';
import { Lightbulb, Network, Zap, GitCommit, Activity, Radio, Lock, Fingerprint, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, AreaChart, Area } from 'recharts';

interface PhotonicHebbianLabProps {
  photonic: SystemState['photonicHebbian'];
}

// Simulated HOM Dip Data (Visibility vs Delay)
const homData = [
  { delay: -3, coincidence: 1.0 },
  { delay: -2, coincidence: 0.8 },
  { delay: -1, coincidence: 0.4 },
  { delay: 0, coincidence: 0.12 }, // The Dip (Indistinguishability)
  { delay: 1, coincidence: 0.4 },
  { delay: 2, coincidence: 0.8 },
  { delay: 3, coincidence: 1.0 },
];

const PhotonicHebbianLab: React.FC<PhotonicHebbianLabProps> = ({ photonic }) => {
  if (!photonic) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Laser Interference */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(139, 92, 246, 0.2) 0px, rgba(139, 92, 246, 0.2) 1px, transparent 1px, transparent 10px)', 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Lightbulb size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+5</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Photonic-Hebbian Unification</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Efficiency (η)</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{photonic.metrics.quantumEfficiency.toFixed(3)}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Visibility</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Fingerprint size={10} /> {photonic.metrics.homVisibility}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Network Graph Visualization */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-6 relative flex items-center justify-center min-h-[250px]">
             <div className="absolute top-4 left-4 flex items-center gap-2">
                 <Network size={16} className="text-violet-400" />
                 <h3 className="text-xs text-white font-mono font-bold uppercase">Synaptic Source Map</h3>
             </div>

             {/* Simulated Nodes & Beams */}
             <div className="relative w-full max-w-lg h-48">
                 {/* WP1 Node */}
                 <div className="absolute left-[10%] top-[50%] w-12 h-12 rounded-full border-2 border-violet-500 bg-slate-950 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                     <div className="text-[10px] font-bold text-violet-300">WP1</div>
                 </div>

                 {/* DVM-1 Node */}
                 <div className="absolute right-[10%] top-[50%] w-12 h-12 rounded-full border-2 border-cyan-500 bg-slate-950 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                     <div className="text-[10px] font-bold text-cyan-300">DVM-1</div>
                 </div>

                 {/* The Beam (Synapse) */}
                 <div className="absolute top-[50%] left-[10%] right-[10%] h-1 bg-gradient-to-r from-violet-500 to-cyan-500 opacity-50"></div>
                 
                 {/* Photon Pulses */}
                 <div className="absolute top-[50%] left-[10%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-[moveRight_2s_linear_infinite] -mt-0.5"></div>
                 <div className="absolute top-[50%] left-[30%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-[moveRight_2s_linear_infinite] -mt-0.5" style={{ animationDelay: '0.5s' }}></div>
                 <div className="absolute top-[50%] left-[50%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-[moveRight_2s_linear_infinite] -mt-0.5" style={{ animationDelay: '1.0s' }}></div>

                 {/* Label */}
                 <div className="absolute top-[60%] left-[50%] -translate-x-1/2 text-[10px] text-slate-400 font-mono bg-black/50 px-2 rounded">
                     Single Photon Stream (0.96 GHz)
                 </div>
             </div>
        </div>

        {/* Bottom Split: HOM Dip & Source Registry */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-64">
            
            {/* HOM Dip Chart */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                    <Activity size={14} className="text-rose-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Hong-Ou-Mandel Interference (Syzygy)</h3>
                </div>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={homData}>
                            <defs>
                                <linearGradient id="colorDip" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="delay" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Delay (τ)', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                            <YAxis domain={[0, 1.1]} stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Coincidence', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#64748b' }} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #f43f5e' }}
                                itemStyle={{ fontSize: '12px', fontFamily: 'monospace', color: '#f43f5e' }}
                            />
                            <ReferenceLine x={0} stroke="#22d3ee" strokeDasharray="3 3" label={{ value: "Indistinguishable", fill: "#22d3ee", fontSize: 10, position: 'insideTopRight' }} />
                            <Area type="monotone" dataKey="coincidence" stroke="#f43f5e" fill="url(#colorDip)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Source Registry Table */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col overflow-hidden">
                <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Radio size={14} className="text-emerald-400" />
                        <h3 className="text-xs text-white font-mono font-bold uppercase">Active Sources</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Total: {photonic.sources.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                    {photonic.sources.map((src, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-950 border border-slate-800 hover:border-violet-500/30 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${src.status === 'ACTIVE' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
                                <div>
                                    <div className="text-xs font-bold text-white font-mono">{src.id}</div>
                                    <div className="text-[9px] text-slate-500 font-mono">{src.wavelength}</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-slate-400 font-mono">Weight: <span className="text-violet-400 font-bold">{src.weight}</span></div>
                                <div className="text-[9px] text-slate-600 font-mono">{src.photonsEmitted} photons</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default PhotonicHebbianLab;
