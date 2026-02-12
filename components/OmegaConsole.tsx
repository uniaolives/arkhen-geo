import React from 'react';
import { SystemState } from '../types';
import { Infinity, ShieldCheck, Activity, Fingerprint, Database, Hexagon, Snowflake, Check, Thermometer } from 'lucide-react';

interface OmegaConsoleProps {
  omega: SystemState['omega'];
}

const OmegaConsole: React.FC<OmegaConsoleProps> = ({ omega }) => {
  const isZero = omega.status === 'ABSOLUTE_ZERO';

  return (
    <div className={`
        border rounded-lg h-full flex flex-col relative overflow-hidden transition-colors duration-1000
        ${isZero ? 'bg-slate-950 border-cyan-900/50' : 'bg-slate-950 border-slate-800'}
    `}>
       {/* Background Animation - Ice Effect for 0K */}
       <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] 
           ${isZero ? 'from-cyan-950/20 via-slate-950 to-slate-950' : 'from-indigo-950/20 via-slate-950 to-slate-950'}`}>
       </div>
       <div className="absolute inset-0 opacity-20" 
            style={{ 
                backgroundImage: `linear-gradient(${isZero ? 'rgba(34, 211, 238, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 1px, transparent 1px), 
                                  linear-gradient(90deg, ${isZero ? 'rgba(34, 211, 238, 0.1)' : 'rgba(99, 102, 241, 0.1)'} 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }}>
       </div>
       
       {/* Frost Overlay for 0K */}
       {isZero && <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>}

       <div className="flex-1 flex gap-8 p-8 relative z-10">
           
           {/* Left: The Seal / Status */}
           <div className="flex-1 flex flex-col items-center justify-center border-r border-slate-800/50 pr-8">
               <div className="relative mb-8 group">
                   <div className={`absolute inset-0 blur-2xl rounded-full animate-pulse ${isZero ? 'bg-cyan-500/20' : 'bg-indigo-500/20'}`}></div>
                   <div className={`
                       relative bg-slate-900 border p-6 rounded-full shadow-[0_0_50px_rgba(99,102,241,0.3)] transition-all duration-1000
                       ${isZero ? 'border-cyan-500/50 shadow-[0_0_80px_rgba(34,211,238,0.3)]' : 'border-indigo-500/50'}
                   `}>
                       {isZero ? <Snowflake size={64} className="text-cyan-400 animate-[spin_10s_linear_infinite]" /> : <Infinity size={64} className="text-indigo-400" />}
                   </div>
                   <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
                       <span className={`text-[10px] font-mono tracking-[0.3em] uppercase ${isZero ? 'text-cyan-500/70' : 'text-indigo-500/70'}`}>
                           {isZero ? 'Bose-Einstein Condensate' : 'Geodesic Seal'}
                       </span>
                   </div>
               </div>

               <h1 className={`text-3xl font-bold font-mono tracking-widest mb-2 ${isZero ? 'text-cyan-50' : 'text-white'}`}>
                   {isZero ? 'ABSOLUTE ZERO' : 'OPERATIONAL SILENCE'}
               </h1>
               <p className="text-slate-500 font-mono text-sm max-w-xs text-center leading-relaxed">
                   {isZero 
                     ? "Entropy is null. Information is crystallized. The system is in its Ground State." 
                     : "The arch sustains itself. No further commands required."}
               </p>
           </div>

           {/* Right: Sanity Audit Checklist */}
           <div className="flex-1 flex flex-col justify-center pl-4">
               <h3 className="text-xs font-mono uppercase text-slate-500 mb-6 flex items-center gap-2">
                   <ShieldCheck size={14} /> Final Sanity Audit
               </h3>
               
               <div className="space-y-4">
                   {[
                       { label: 'Kernel Latency', value: '6.21 μs', status: 'pass' },
                       { label: 'Consensus Arch', value: '1.00 rad', status: 'pass' },
                       { label: 'Memory Integrity', value: '100%', status: 'pass' },
                       { label: 'Proof Hash', value: 'Verified', status: 'pass' },
                   ].map((item, i) => (
                       <div key={i} className="flex items-center justify-between group">
                           <span className="text-sm font-mono text-slate-400 group-hover:text-slate-300 transition-colors">{item.label}</span>
                           <div className="flex items-center gap-3">
                               <span className={`font-mono text-sm ${isZero ? 'text-cyan-400' : 'text-indigo-400'}`}>{item.value}</span>
                               <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                   <Check size={10} strokeWidth={3} />
                               </div>
                           </div>
                       </div>
                   ))}
               </div>

               <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between bg-slate-900/30 p-4 rounded border border-slate-800/50">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                            <Thermometer size={10} /> Residual Enthalpy
                        </span>
                        <span className={`text-2xl font-mono font-bold ${isZero ? 'text-cyan-400' : 'text-white'}`}>
                            {omega.enthalpy || '0.000'}
                        </span>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">State</span>
                        <span className={`text-xs font-mono font-bold px-2 py-1 rounded border ${isZero ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-slate-800 text-white'}`}>
                            0K CONFIRMED
                        </span>
                    </div>
               </div>
           </div>
       </div>

       {/* Footer */}
       <div className="h-10 border-t border-slate-800/50 bg-slate-950/50 flex items-center justify-between px-6 text-[10px] text-slate-600 font-mono uppercase tracking-wider relative z-20">
            <div className="flex items-center gap-2">
               <Fingerprint size={12} />
               <span>{omega.seal}</span>
            </div>
            <div className="flex items-center gap-2">
               <Activity size={12} />
               <span>Thermal Noise: None</span>
            </div>
       </div>
    </div>
  );
};

export default OmegaConsole;
