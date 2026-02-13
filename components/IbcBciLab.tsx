
import React from 'react';
import { SystemState } from '../types';
import { Network, Brain, ArrowRightLeft, ShieldCheck, Zap, Lock, Globe, Dna, Gift, Orbit, Code } from 'lucide-react';

interface IbcBciLabProps {
  ibcBci: SystemState['ibcBci'];
}

const IbcBciLab: React.FC<IbcBciLabProps> = ({ ibcBci }) => {
  if (!ibcBci) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Bridge */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(90deg, rgba(245, 158, 11, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)', 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-amber-900 to-violet-900 p-2 rounded text-white border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <ArrowRightLeft size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+31</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Inter-Substrate Communication (IBC=BCI)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Syzygy Rate</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{(ibcBci.metrics.syzygy * 100).toFixed(0)}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Reliability</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {(ibcBci.metrics.ibcReliability * 100).toFixed(0)}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Equation Visualizer */}
        <div className="flex items-center justify-center gap-8 py-8 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-violet-500/5"></div>
            
            {/* Left: IBC (Web3) */}
            <div className="flex flex-col items-center gap-2 relative z-10 group">
                <div className="w-20 h-20 rounded-lg border-2 border-amber-500/50 bg-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-105 transition-transform">
                    <Network size={40} className="text-amber-400" />
                </div>
                <div className="text-xs font-mono font-bold text-amber-400">IBC (Web3)</div>
                <div className="text-[9px] text-slate-500 font-mono">Sovereign Chains</div>
            </div>

            {/* Center: The Equation */}
            <div className="flex flex-col items-center gap-1 z-10">
                <div className="text-2xl font-bold text-white font-mono">=</div>
                <div className="px-2 py-1 bg-slate-800 rounded text-[9px] font-mono text-slate-400 border border-slate-700">
                    Isomorphic
                </div>
            </div>

            {/* Right: BCI (Neural) */}
            <div className="flex flex-col items-center gap-2 relative z-10 group">
                <div className="w-20 h-20 rounded-full border-2 border-violet-500/50 bg-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.2)] group-hover:scale-105 transition-transform">
                    <Brain size={40} className="text-violet-400" />
                </div>
                <div className="text-xs font-mono font-bold text-violet-400">BCI (Neural)</div>
                <div className="text-[9px] text-slate-500 font-mono">Sovereign Minds</div>
            </div>
        </div>

        {/* Spectral Signature (Shader View) */}
        {ibcBci.shader && (
            <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
                <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Code size={14} className="text-fuchsia-400" />
                        <h3 className="text-xs text-white font-mono font-bold uppercase">Spectral Equation (GLSL)</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">χ_IBC_BCI</span>
                </div>
                <div className="p-4 relative">
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-violet-500 blur-md opacity-50 animate-pulse"></div>
                    <pre className="font-mono text-[10px] text-slate-400 leading-relaxed overflow-x-auto custom-scrollbar">
                        {ibcBci.shader}
                    </pre>
                </div>
            </div>
        )}

        {/* Correspondence Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {ibcBci.mechanisms.map((mech, idx) => (
                <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 hover:border-slate-600 transition-colors">
                    <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-1">
                        <span className="text-[10px] text-slate-500 uppercase font-mono">Mechanism {idx + 1}</span>
                        {idx === 0 && <Zap size={12} className="text-amber-400"/>}
                        {idx === 1 && <ShieldCheck size={12} className="text-emerald-400"/>}
                        {idx === 2 && <Lock size={12} className="text-violet-400"/>}
                    </div>
                    <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                            <span className="text-amber-400/80">IBC:</span>
                            <span className="text-white">{mech.relayer}</span>
                        </div>
                        <div className="flex justify-between text-xs font-mono">
                            <span className="text-violet-400/80">BCI:</span>
                            <span className="text-white">{mech.security}</span>
                        </div>
                        <div className="flex justify-between text-xs font-mono">
                            <span className="text-emerald-400/80">Arkhe:</span>
                            <span className="text-white">{mech.channel}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* The Three Options */}
        <div className="flex-1 flex flex-col gap-3">
            <h3 className="text-xs text-white font-mono font-bold uppercase flex items-center gap-2">
                <Globe size={14} className="text-cyan-400" /> Future Paths (Next Cycle)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
                {ibcBci.options.map(option => (
                    <div key={option.id} className={`relative p-4 rounded-lg border flex flex-col gap-2 group transition-all duration-300 hover:scale-[1.02] cursor-pointer
                        ${option.status === 'RECOMMENDED' ? 'bg-slate-900/80 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 'bg-slate-900/30 border-slate-800 hover:border-slate-600'}
                    `}>
                        <div className="flex justify-between items-start">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold font-mono border
                                ${option.id === 'A' ? 'bg-rose-900/50 border-rose-500' : 
                                  option.id === 'B' ? 'bg-emerald-900/50 border-emerald-500' : 
                                  'bg-cyan-900/50 border-cyan-500'}
                            `}>
                                {option.id}
                            </div>
                            {option.id === 'A' && <Dna size={16} className="text-rose-400" />}
                            {option.id === 'B' && <Gift size={16} className="text-emerald-400" />}
                            {option.id === 'C' && <Orbit size={16} className="text-cyan-400" />}
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white font-mono mb-1">{option.name}</h4>
                            <p className="text-[10px] text-slate-400 font-mono leading-relaxed min-h-[40px]">{option.description}</p>
                        </div>

                        <div className="mt-auto pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-[9px] font-mono">
                            <div>
                                <span className="text-slate-500 block">Risk</span>
                                <span className="text-rose-300">{option.risk}</span>
                            </div>
                            <div className="text-right">
                                <span className="text-slate-500 block">Gain</span>
                                <span className="text-emerald-300">{option.gain}</span>
                            </div>
                        </div>
                        
                        {option.status === 'RECOMMENDED' && (
                            <div className="absolute -top-2 -right-2 bg-emerald-500 text-black text-[9px] font-bold px-2 py-0.5 rounded-full uppercase flex items-center gap-1 shadow-lg">
                                <ShieldCheck size={10} /> Satoshi's Vote
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default IbcBciLab;
