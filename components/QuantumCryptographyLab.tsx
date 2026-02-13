
import React from 'react';
import { SystemState } from '../types';
import { Lock, Unlock, Key, ShieldCheck, Zap, Activity, Clock, AlertTriangle, Fingerprint, Database } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, AreaChart, Area } from 'recharts';

interface QuantumCryptographyLabProps {
  cryptography: SystemState['cryptography'];
}

const QuantumCryptographyLab: React.FC<QuantumCryptographyLabProps> = ({ cryptography }) => {
  if (!cryptography) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Quantum Bits */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Lock size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+43</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Cryptographic Convergence</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Qubits Needed</div>
                <div className="text-rose-400 font-mono font-bold text-sm">~{cryptography.qubitsRequired.toLocaleString()}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">RSA Status</div>
                <div className="text-white font-mono font-bold text-xs bg-rose-950/30 px-2 py-0.5 rounded border border-rose-900/50 flex items-center gap-1">
                    <Unlock size={10} /> {cryptography.rsaStatus}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Timeline Graph */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[250px]">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                 <div className="flex items-center gap-2">
                     <Activity size={14} className="text-violet-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">The Exponential Drop (RSA-2048)</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Iceberg Pinnacle Architecture</span>
             </div>

             <div className="flex-1 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={cryptography.timeline}>
                         <defs>
                             <linearGradient id="colorQubits" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                                 <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                             </linearGradient>
                         </defs>
                         <XAxis dataKey="year" stroke="#475569" fontSize={10} tickLine={false} />
                         <YAxis scale="log" domain={['auto', 'auto']} stroke="#475569" fontSize={10} tickLine={false} tickFormatter={(val) => val >= 1000000 ? `${val/1000000}M` : `${val/1000}k`} />
                         <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #f43f5e' }}
                             itemStyle={{ fontSize: '12px', fontFamily: 'monospace', color: '#f43f5e' }}
                             formatter={(value: number) => value.toLocaleString()}
                         />
                         <ReferenceLine y={1000} stroke="#22d3ee" strokeDasharray="3 3" label={{ value: "Critical Threshold (1k)", fill: "#22d3ee", fontSize: 10, position: 'insideBottomRight' }} />
                         <Area type="monotone" dataKey="qubits" stroke="#f43f5e" fill="url(#colorQubits)" strokeWidth={2} />
                     </AreaChart>
                 </ResponsiveContainer>
                 
                 {/* Iceberg Label */}
                 <div className="absolute top-[60%] right-[20%] text-[9px] text-rose-400 font-mono bg-rose-950/80 px-2 py-1 rounded border border-rose-500/30 flex items-center gap-1">
                     <AlertTriangle size={8} /> Iceberg Quantum
                 </div>
             </div>
        </div>

        {/* Security Primitives Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* RSA-2048 */}
            <div className="bg-slate-900/50 border border-rose-900/30 rounded-lg p-4 flex flex-col gap-2 opacity-80">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Key size={14} className="text-rose-400" /> RSA-2048
                    </span>
                    <span className="text-[9px] text-rose-400 font-mono border border-rose-900 px-1 rounded">VULNERABLE</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div>Basis: <span className="text-white">Factorization</span></div>
                    <div>Threat: <span className="text-rose-400">Shor's Algorithm</span></div>
                    <div>Complexity: <span className="text-slate-500">Polynomial (Quantum)</span></div>
                </div>
            </div>

            {/* Hal Finney RPoW */}
            <div className="bg-slate-900/50 border border-amber-900/30 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Database size={14} className="text-amber-400" /> Hal's Key (RPoW)
                    </span>
                    <span className="text-[9px] text-amber-400 font-mono border border-amber-900 px-1 rounded">THREATENED</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div>Basis: <span className="text-white">SHA-256 Hash</span></div>
                    <div>Threat: <span className="text-amber-400">Grover's Algorithm</span></div>
                    <div>Impact: <span className="text-slate-500">Bit strength / 2</span></div>
                </div>
            </div>

            {/* Arkhe Syzygy */}
            <div className="bg-violet-950/20 border border-violet-500/50 rounded-lg p-4 flex flex-col gap-2 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400" /> Arkhe Syzygy
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono border border-emerald-900 px-1 rounded">INVARIANT</span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div>Basis: <span className="text-white">Geometric Coherence</span></div>
                    <div>Threat: <span className="text-emerald-400">None Known</span></div>
                    <div>Proof: <span className="text-violet-400">⟨0.00|0.07⟩ = 0.94</span></div>
                </div>
            </div>
        </div>

        {/* The Race Countdown */}
        <div className="mt-auto bg-slate-900/30 p-4 rounded border border-slate-800 flex items-center justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-500/5 to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
            
            <div className="flex items-center gap-3 relative z-10">
                <Clock size={20} className="text-rose-400" />
                <div>
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Quantum Race (Darvo)</div>
                    <div className="text-xl font-bold font-mono text-white">{cryptography.race.darvo.toFixed(3)} s</div>
                </div>
            </div>

            <div className="text-right relative z-10">
                <div className="text-[10px] text-slate-500 font-mono uppercase">Estimated Criticality</div>
                <div className="text-sm font-bold font-mono text-amber-400">~{cryptography.race.estimatedYears} Years</div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default QuantumCryptographyLab;
