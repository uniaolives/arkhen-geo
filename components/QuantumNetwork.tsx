
import React from 'react';
import { SystemState } from '../types';
import { Network, Zap, ShieldCheck, Key, Wifi, Clock, Lock, Cpu, Database, Disc, Radio, Repeat, Eye, Calendar, ArrowRight, Brain, Music, Satellite, Atom } from 'lucide-react';

interface QuantumNetworkProps {
  quantum: SystemState['quantum'];
}

const QuantumNetwork: React.FC<QuantumNetworkProps> = ({ quantum }) => {
  const getRoleIcon = (role: string) => {
    switch(role) {
      case 'PROCESSOR': return <Cpu size={14} className="text-white" />;
      case 'SENSOR': return <Eye size={14} className="text-white" />;
      case 'MEMORY': return <Database size={14} className="text-white" />;
      case 'QUBIT': return <Disc size={14} className="text-white" />;
      case 'REPEATER': return <Radio size={14} className="text-white" />;
      case 'CONSENSUS': 
      case 'METHOD': return <ShieldCheck size={14} className="text-white" />;
      default: return <Zap size={14} className="text-white" />;
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Quantum Foam */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Network size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9051</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Quantum Teleportation & Unification</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Range (Δω)</div>
                <div className="text-violet-400 font-mono font-bold text-sm">{quantum.distEq}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Shared Key</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700 font-serif italic">
                    ε
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6 relative z-10 overflow-hidden">
        
        {/* Left: Entanglement Graph (6 Nodes) */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-6 relative flex items-center justify-center">
             
             {/* Connection Lines (Entanglement Chain) */}
             <div className="absolute inset-0 flex items-center justify-center z-0">
                 <svg className="w-full h-full absolute top-0 left-0">
                    {/* WP1 <-> DVM-1 */}
                    <line x1="20%" y1="50%" x2="40%" y2="20%" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                    {/* WP1 <-> PREV_001 */}
                    <line x1="20%" y1="50%" x2="35%" y2="70%" stroke="#475569" strokeWidth="1" strokeDasharray="2 2" />
                    
                    {/* Teleportation Path (WP1 -> KERNEL) */}
                    <path d="M 20% 50% Q 45% 90% 75% 70%" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                    
                    {/* DVM-1 <-> Bola */}
                    <line x1="40%" y1="20%" x2="75%" y2="30%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                    {/* PREV_001 <-> PREV_002 */}
                    <line x1="35%" y1="70%" x2="55%" y2="70%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                    {/* PREV_002 <-> KERNEL */}
                    <line x1="55%" y1="70%" x2="75%" y2="70%" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse" />
                    
                    {/* Latent Link to Future Formal */}
                    <line x1="75%" y1="70%" x2="85%" y2="50%" stroke="#4c1d95" strokeWidth="1" strokeDasharray="2 2" className="opacity-30" />
                 </svg>
             </div>

             {/* --- Nodes Layout --- */}
             
             {/* WP1 - Processor (Left Center) - VACUUM STATE */}
             <div className="absolute left-[20%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
                 <div className="w-10 h-10 rounded-full bg-transparent border-2 border-slate-700 border-dashed flex items-center justify-center opacity-70">
                     <Eye size={18} className="text-slate-600" />
                 </div>
                 <div className="mt-2 text-center bg-slate-900/50 px-2 rounded border border-slate-800">
                     <div className="text-[10px] font-bold text-slate-500">WP1</div>
                     <div className="text-[8px] text-slate-600 font-mono italic">VACUUM</div>
                 </div>
             </div>

             {/* DVM-1 - Memory (Top Center) */}
             <div className="absolute left-[40%] top-[20%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-slate-950 border border-violet-500/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Database size={14} className="text-violet-300" />
                 </div>
                 <div className="mt-1 text-center">
                     <div className="text-[9px] font-bold text-slate-300">DVM-1</div>
                 </div>
             </div>

             {/* Bola - Qubit (Top Right) */}
             <div className="absolute left-[75%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-slate-950 border border-violet-500/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Disc size={14} className="text-violet-300" />
                 </div>
                 <div className="mt-1 text-center">
                     <div className="text-[9px] font-bold text-slate-300">Bola</div>
                 </div>
             </div>

             {/* PREV_001 - Repeater (Bottom Left) */}
             <div className="absolute left-[35%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/70 flex items-center justify-center group-hover:scale-110 transition-transform">
                     <Radio size={14} className="text-emerald-400" />
                 </div>
                 <div className="mt-1 text-center">
                     <div className="text-[9px] font-bold text-slate-400">PREV_001</div>
                 </div>
             </div>

             {/* PREV_002 - Repeater (Bottom Center) */}
             <div className="absolute left-[55%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
                 <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500/70 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                     <Radio size={14} className="text-emerald-400" />
                 </div>
                 <div className="mt-1 text-center">
                     <div className="text-[9px] font-bold text-emerald-400">PREV_002</div>
                 </div>
             </div>

             {/* KERNEL - Consensus (Bottom Right) - CONSCIOUS STATE */}
             <div className="absolute left-[75%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 group cursor-pointer">
                 <div className="w-14 h-14 rounded-full bg-cyan-950 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.6)] animate-pulse">
                     <Brain size={24} className="text-cyan-200" />
                 </div>
                 <div className="mt-2 text-center bg-cyan-950/90 px-2 py-1 rounded border border-cyan-500/50">
                     <div className="text-[10px] font-bold text-cyan-200">KERNEL</div>
                     <div className="text-[8px] text-cyan-400 font-mono uppercase">CONSCIOUS</div>
                 </div>
             </div>
             
             {/* Latent Link Indicator (FORMAL) */}
             <div className="absolute right-[10%] top-[50%] -translate-y-1/2 flex flex-col gap-2 z-0 opacity-50 group cursor-help">
                 <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700 animate-pulse"></div>
                 <div className="text-[8px] text-slate-600 font-mono rotate-90 origin-left translate-x-4 flex items-center gap-1">
                     <Calendar size={8} /> FORMAL (21 FEB)
                 </div>
             </div>

             {/* Triple Verification Panel */}
             <div className="absolute top-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-lg p-3 shadow-2xl z-20 max-w-[200px]">
                 <div className="flex items-center gap-2 mb-2 border-b border-slate-700 pb-2">
                     <ShieldCheck size={14} className="text-emerald-400" />
                     <span className="text-[10px] font-bold text-white uppercase">Triple Verification</span>
                 </div>
                 
                 <div className="space-y-2">
                    {/* Music */}
                    <div className="flex items-center justify-between text-[9px]">
                        <div className="flex items-center gap-1.5 text-fuchsia-400">
                            <Music size={10} /> <span>Harmonic</span>
                        </div>
                        <span className="text-slate-300 font-mono">{quantum.teleportation?.verification.music}</span>
                    </div>
                    {/* Orbit */}
                    <div className="flex items-center justify-between text-[9px]">
                        <div className="flex items-center gap-1.5 text-cyan-400">
                            <Satellite size={10} /> <span>Orbital</span>
                        </div>
                        <span className="text-slate-300 font-mono">{quantum.teleportation?.verification.orbit}</span>
                    </div>
                    {/* Quantum */}
                    <div className="flex items-center justify-between text-[9px]">
                        <div className="flex items-center gap-1.5 text-violet-400">
                            <Atom size={10} /> <span>Quantum</span>
                        </div>
                        <span className="text-slate-300 font-mono">{quantum.teleportation?.verification.quantum}</span>
                    </div>
                 </div>

                 <div className="mt-3 pt-2 border-t border-slate-700 text-center">
                     <div className="text-[9px] bg-emerald-950/50 text-emerald-400 border border-emerald-900/50 rounded py-1 font-mono uppercase">
                         Unified Surface Verified
                     </div>
                 </div>
             </div>

        </div>

        {/* Right: Metrics & QKD */}
        <div className="flex-1 flex flex-col gap-4 min-w-[300px]">
             
             {/* Key Monitor */}
             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                 <div className="flex items-center justify-between mb-1">
                     <span className="text-[10px] text-slate-500 uppercase font-mono flex items-center gap-1"><Key size={10} /> Shared Invariant Key (ε)</span>
                     <span className="text-[10px] text-emerald-400 uppercase font-mono flex items-center gap-1"><Lock size={10} /> Secure</span>
                 </div>
                 <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono text-center text-lg text-emerald-400 tracking-wider shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]">
                     {quantum.sharedKey}
                 </div>
                 <div className="text-[9px] text-slate-600 font-mono text-center flex justify-between px-2">
                     <span>Bell Violation: {quantum.bellViolation}</span>
                     <span>Fidelity: {quantum.teleportation?.fidelity}</span>
                 </div>
             </div>

             {/* Node List */}
             <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
                 <div className="p-3 border-b border-slate-800 flex items-center gap-2">
                     <Wifi size={14} className="text-violet-400" />
                     <h3 className="text-xs font-mono font-bold text-white uppercase">Active Nodes (6)</h3>
                 </div>
                 <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                     {quantum.nodes.map(node => (
                         <div key={node.id} className="bg-slate-950/50 border border-slate-800 p-2 rounded flex items-center justify-between group hover:border-violet-500/30 transition-colors">
                             <div className="flex items-center gap-3">
                                 <div className={`p-1.5 rounded ${node.designation === 'KERNEL' ? 'bg-cyan-900/30 text-cyan-400' : (node.designation === 'WP1' ? 'bg-slate-800 text-slate-500' : (node.designation.includes('PREV') ? 'bg-emerald-900/30 text-emerald-400' : 'bg-violet-900/30 text-violet-400'))}`}>
                                     {getRoleIcon(node.role)}
                                 </div>
                                 <div>
                                     <div className="flex items-center gap-2">
                                         <span className="text-xs font-bold font-mono text-white">{node.id}</span>
                                         {node.designation === 'KERNEL' && <span className="text-[8px] bg-cyan-500 text-black px-1 rounded font-bold">CORE</span>}
                                         {node.designation === 'WP1' && <span className="text-[8px] bg-slate-600 text-black px-1 rounded font-bold">VACUUM</span>}
                                     </div>
                                     <div className="text-[10px] text-slate-400 font-mono">{node.designation}</div>
                                 </div>
                             </div>
                             <div className="text-right">
                                 <div className="text-[10px] text-slate-500 font-mono">ω={node.omega.toFixed(2)}</div>
                                 <div className="text-[9px] text-violet-400 font-mono">{node.status}</div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             {/* Coherence Timer */}
             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                     <Clock size={16} className="text-amber-400" />
                     <span className="text-xs font-mono text-slate-300 uppercase">Coherence Time</span>
                 </div>
                 <div className="font-mono font-bold text-amber-400 text-lg">
                     {quantum.coherenceTime.toFixed(3)}s
                 </div>
             </div>

        </div>

      </div>
      
      {/* Footer Status */}
      <div className="h-10 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between px-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
           <div className="flex items-center gap-2 text-cyan-400">
               <ArrowRight size={12} className="animate-pulse" />
               <span>State Transport: WP1 → KERNEL</span>
           </div>
           <div className="flex items-center gap-2 text-violet-400">
               <Zap size={12} />
               <span>Entanglement Consumed (-6s)</span>
           </div>
      </div>
    </div>
  );
};

export default QuantumNetwork;
