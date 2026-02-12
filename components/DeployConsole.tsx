import React, { useState } from 'react';
import { SystemState } from '../types';
import { Server, Database, Box, Layout, Cpu, RefreshCw, CheckCircle2, ShieldCheck, Activity, Terminal as TermIcon, History } from 'lucide-react';

interface DeployConsoleProps {
  deployment: SystemState['deployment'];
  reflection: SystemState['reflection'];
}

const DeployConsole: React.FC<DeployConsoleProps> = ({ deployment, reflection }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'reflection'>('stack');

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
       {/* Header tabs */}
       <div className="flex border-b border-slate-800">
           <button 
             onClick={() => setActiveTab('stack')}
             className={`flex-1 py-3 px-4 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors
             ${activeTab === 'stack' ? 'bg-slate-800 text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-500 hover:text-slate-300'}`}
           >
               <Server size={14} /> INFRASTRUCTURE (Λ₀)
           </button>
           <button 
             onClick={() => setActiveTab('reflection')}
             className={`flex-1 py-3 px-4 text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors
             ${activeTab === 'reflection' ? 'bg-slate-800 text-fuchsia-400 border-b-2 border-fuchsia-400' : 'text-slate-500 hover:text-slate-300'}`}
           >
               <RefreshCw size={14} /> REFLECTION (Λ₁)
           </button>
       </div>

       {/* Content Area */}
       <div className="flex-1 p-6 overflow-hidden flex flex-col">
           
           {/* --- STACK TAB --- */}
           {activeTab === 'stack' && (
               <div className="flex flex-col h-full animate-in fade-in duration-300">
                   {/* Status Bar */}
                   <div className="flex justify-between items-center mb-6 bg-slate-950/50 p-3 rounded border border-slate-800">
                       <div className="flex items-center gap-3">
                           <div className="bg-emerald-500/20 p-2 rounded text-emerald-400">
                               <ShieldCheck size={18} />
                           </div>
                           <div>
                               <div className="text-white font-mono text-sm font-bold">SYSTEM HEALTHY</div>
                               <div className="text-[10px] text-slate-500 font-mono">Uptime: {deployment.uptime}</div>
                           </div>
                       </div>
                       <div className="text-right">
                           <div className="text-[10px] text-slate-500 font-mono uppercase">Version</div>
                           <div className="text-white font-mono text-xs">{deployment.version}</div>
                       </div>
                   </div>

                   {/* Containers List */}
                   <div className="space-y-3 overflow-y-auto custom-scrollbar pr-2">
                       {deployment.containers.map((container) => (
                           <div key={container.name} className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded hover:border-slate-700 transition-colors group">
                               <div className="flex items-center gap-3">
                                   <div className={`p-2 rounded ${container.status === 'running' ? 'bg-cyan-900/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                                       {container.icon === 'database' && <Database size={16} />}
                                       {container.icon === 'cpu' && <Cpu size={16} />}
                                       {container.icon === 'server' && <Box size={16} />}
                                       {container.icon === 'layout' && <Layout size={16} />}
                                   </div>
                                   <div>
                                       <div className="text-white font-mono text-xs font-bold">{container.name}</div>
                                       <div className="flex items-center gap-1.5 mt-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                            <span className="text-[10px] text-emerald-500 uppercase font-mono">{container.status}</span>
                                       </div>
                                   </div>
                               </div>
                               <div className="text-right font-mono text-[10px] text-slate-500">
                                   <div className="group-hover:text-cyan-400 transition-colors">CPU: {container.cpu}</div>
                                   <div className="group-hover:text-cyan-400 transition-colors">MEM: {container.memory}</div>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
           )}

           {/* --- REFLECTION TAB --- */}
           {activeTab === 'reflection' && (
               <div className="flex flex-col h-full animate-in fade-in duration-300">
                   {/* Metrics */}
                   <div className="grid grid-cols-3 gap-3 mb-4">
                       <div className="bg-slate-950/50 p-2 rounded border border-slate-800 text-center">
                           <div className="text-[10px] text-slate-500 uppercase font-mono">Last Cycle</div>
                           <div className="text-white font-mono text-xs font-bold">{reflection.lastCycle}</div>
                       </div>
                       <div className="bg-slate-950/50 p-2 rounded border border-slate-800 text-center">
                           <div className="text-[10px] text-slate-500 uppercase font-mono">Corrections</div>
                           <div className="text-emerald-400 font-mono text-xs font-bold">+{reflection.correctionsApplied}</div>
                       </div>
                       <div className="bg-slate-950/50 p-2 rounded border border-slate-800 text-center">
                           <div className="text-[10px] text-slate-500 uppercase font-mono">Avg Delta</div>
                           <div className="text-fuchsia-400 font-mono text-xs font-bold">+{reflection.confidenceDelta}</div>
                       </div>
                   </div>

                   {/* Activity Feed */}
                   <div className="flex-1 overflow-hidden flex flex-col">
                       <h4 className="text-xs text-slate-500 font-mono uppercase flex items-center gap-1 mb-2">
                           <History size={12} /> Audit Log
                       </h4>
                       <div className="overflow-y-auto custom-scrollbar space-y-2 pr-1">
                           {reflection.auditLog.map((log) => (
                               <div key={log.id} className="text-xs p-2 rounded border border-slate-800 bg-slate-900/50 flex flex-col gap-1">
                                   <div className="flex justify-between items-center">
                                       <span className="text-fuchsia-400 font-mono font-bold">{log.entity}</span>
                                       <span className="text-[10px] text-slate-600 font-mono">{log.time}</span>
                                   </div>
                                   <div className="flex items-center gap-2">
                                       {log.action === 're-evaluating' && <Activity size={10} className="text-amber-400" />}
                                       {log.action === 'corrected' && <CheckCircle2 size={10} className="text-emerald-400" />}
                                       <span className={`text-[10px] ${log.action === 'corrected' ? 'text-emerald-300' : 'text-slate-400'}`}>
                                           {log.detail}
                                       </span>
                                   </div>
                               </div>
                           ))}
                           <div className="text-[10px] text-slate-600 font-mono italic text-center pt-2">
                               ... listening for low confidence signals ...
                           </div>
                       </div>
                   </div>
               </div>
           )}
       </div>
    </div>
  );
};

export default DeployConsole;
