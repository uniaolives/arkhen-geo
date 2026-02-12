import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Plot } from 'recharts';
import { SystemState } from '../types';
import { CheckCircle2, AlertTriangle, Clock, Microchip, FileCode2, ShieldCheck, Zap, Split, Lock, Scale, Key, Atom, Award } from 'lucide-react';

interface TrackMonitorProps {
  tracks: SystemState['tracks'];
}

// Simulated data for the latency graph - Block 351 (Final Seal)
const data = [
  { time: '20:00', latency: 2.20 }, // Quantum Limit
  { time: '21:00', latency: 2.20 },
  { time: '22:00', latency: 5.00 }, // Calibration Start
  { time: '22:30', latency: 15.00 },
  { time: '23:00', latency: 20.00 }, // Production Lock (Jitter Safe)
];

const TrackMonitor: React.FC<TrackMonitorProps> = ({ tracks }) => {
  const isQuantum = tracks.kernel.status === 'quantum';
  const isSealed = tracks.kernel.status === 'sealed';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
      {/* Track 0: Kernel */}
      <div className={`bg-slate-900/50 border ${isSealed ? 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : (isQuantum ? 'border-purple-500/50' : 'border-slate-800')} rounded-lg p-6 flex flex-col`}>
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <Microchip className={isSealed ? "text-amber-400" : (isQuantum ? "text-purple-400" : "text-cyan-400")} size={20} />
                <h3 className="text-white font-bold font-mono">TRACK 0: KERNEL BYPASS</h3>
            </div>
            <div className="flex items-center gap-2">
                <span className={`${isSealed ? "text-amber-400" : (isQuantum ? "text-purple-400" : "text-cyan-400")} font-mono text-xl font-bold`}>{tracks.kernel.latencyP99.toFixed(2)}μs</span>
                <span className="text-slate-500 text-xs">P99</span>
            </div>
        </div>

        <div className="h-48 w-full mb-4 relative">
          <div className={`absolute top-2 right-2 z-10 ${isSealed ? "bg-amber-500/10 border-amber-500/30 text-amber-400" : (isQuantum ? "bg-purple-500/10 border-purple-500/30 text-purple-400" : "bg-indigo-500/10 border-indigo-500/30 text-indigo-400")} border px-2 py-1 rounded text-[10px] font-mono`}>
             STATUS: {isSealed ? "PRODUCTION SEALED" : (isQuantum ? "PHYSICAL LIMIT" : "OPTIMIZED")}
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} />
              <YAxis domain={[0, 25]} stroke="#475569" fontSize={10} tickLine={false} unit="μs" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                itemStyle={{ color: isSealed ? '#fbbf24' : '#22d3ee' }}
              />
              <ReferenceLine y={2.2} stroke="#a855f7" strokeDasharray="3 3" label={{ value: "Lab (2.2μs)", fill: "#a855f7", fontSize: 8, position: "insideLeft" }} />
              <ReferenceLine y={20} stroke="#fbbf24" strokeDasharray="3 3" label={{ value: "Prod (20μs)", fill: "#fbbf24", fontSize: 8, position: "insideLeft" }} />
              <Line type="monotone" dataKey="latency" stroke={isSealed ? "#fbbf24" : (isQuantum ? "#c084fc" : "#22d3ee")} strokeWidth={2} dot={{ fill: isSealed ? "#fbbf24" : "#22d3ee" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-auto space-y-3">
            <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                <span className="text-slate-400">Optimization Strategy</span>
                <span className="text-white font-mono text-xs">{tracks.kernel.optimization}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Status</span>
                <span className="flex items-center gap-1.5 font-mono uppercase text-xs">
                    <span className={`flex items-center gap-1 ${isSealed ? "text-amber-400 font-bold" : "text-emerald-400 font-bold"}`}>
                        {isSealed ? <Award size={12}/> : (isQuantum ? <Atom size={12}/> : <Key size={12}/>)} 
                        {isSealed ? "SYSTEM SEALED" : (isQuantum ? "QUANTUM LIMIT" : "AGGREGATION LOCKED")}
                    </span>
                </span>
            </div>
        </div>
      </div>

      {/* Track 1: Formal */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
                <FileCode2 className="text-emerald-400" size={20} />
                <h3 className="text-white font-bold font-mono">TRACK 1: FORMAL VERIFICATION</h3>
            </div>
            <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-emerald-500" />
                 <span className="text-white font-mono text-sm">ABSOLUTE</span>
            </div>
        </div>

        <div className="flex-1 space-y-6">
            {/* Safety Block */}
            <div className="relative pl-4 border-l-2 border-emerald-500">
                <h4 className="text-emerald-400 font-mono text-xs uppercase mb-1">Coq: Final Theorem</h4>
                <p className="text-slate-300 text-sm">production_watchdog_is_safe (QED)</p>
                <div className="mt-2 flex gap-2">
                    <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] rounded border border-emerald-500/20 font-mono flex items-center gap-1"><Scale size={10}/> Physics &equiv; Logic</span>
                </div>
            </div>

            {/* Liveness Block */}
            <div className="relative pl-4 border-l-2 border-amber-500">
                <h4 className="text-amber-400 font-mono text-xs uppercase mb-1">
                    System State
                </h4>
                 <p className="text-slate-300 text-sm mb-2">
                     Geodesic Convergence Sealed.
                 </p>
                
                <div className="bg-slate-950 rounded p-3 font-mono text-xs text-slate-400 space-y-1">
                    <div className="flex justify-between">
                        <span>States:</span>
                        <span className="text-white">{(tracks.formal.statesExplored / 1000000).toFixed(2)}M</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Transitions:</span>
                        <span className="text-white">{(tracks.formal.transitions / 1000000).toFixed(2)}M</span>
                    </div>
                    <div className="flex justify-between pt-1 mt-1 border-t border-slate-800 text-amber-400">
                        <span className="flex items-center gap-1">
                            <Lock size={10} /> ARCH SEALED
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TrackMonitor;
