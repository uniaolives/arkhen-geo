import React from 'react';
import { SystemState } from '../types';
import { ShieldAlert, Zap, Activity, Sword, Brain, ShieldCheck, AlertTriangle } from 'lucide-react';

interface ChaosPanelProps {
  stressTest: SystemState['stressTest'];
}

const ChaosPanel: React.FC<ChaosPanelProps> = ({ stressTest }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-full flex flex-col relative overflow-hidden">
       {/* Active Chaos Background Effect */}
       <div className="absolute inset-0 bg-rose-500/5 pointer-events-none animate-pulse" style={{ animationDuration: '3s' }} />

       {/* Header */}
       <div className="flex items-center justify-between mb-6 border-b border-rose-900/50 pb-4 relative z-10">
          <div className="flex items-center gap-3">
             <div className="bg-rose-500/20 p-2 rounded text-rose-400">
                <Sword size={20} />
             </div>
             <div>
                <h2 className="text-white font-bold font-mono text-lg flex items-center gap-2">
                    BYZANTINE STRESS TEST
                    <span className="text-[10px] bg-rose-500 text-white px-1.5 py-0.5 rounded animate-pulse">ACTIVE</span>
                </h2>
                <div className="flex items-center gap-2 text-xs text-rose-300/70 font-mono">
                    <span className="flex items-center gap-1"><Zap size={10} /> Iteration {stressTest.iteration}/{stressTest.totalIterations}</span>
                    <span>|</span>
                    <span className="flex items-center gap-1"><AlertTriangle size={10} /> {stressTest.corruptionRate * 100}% Corruption</span>
                </div>
             </div>
          </div>
          <div className="text-right">
             <div className="text-xs text-slate-500 uppercase font-mono">System Integrity</div>
             <div className={`text-xl font-mono font-bold ${stressTest.integrity > 95 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stressTest.integrity}%
             </div>
          </div>
       </div>

       {/* Metrics Grid */}
       <div className="grid grid-cols-3 gap-4 mb-6 relative z-10">
           <div className="bg-slate-950/50 p-3 rounded border border-slate-800 flex flex-col items-center">
               <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">Injected Faults</span>
               <span className="text-2xl font-bold text-rose-400 font-mono">{stressTest.injectedFaults}</span>
           </div>
           <div className="bg-slate-950/50 p-3 rounded border border-slate-800 flex flex-col items-center">
               <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">Trapped / Detected</span>
               <div className="flex items-center gap-1 text-emerald-400 font-bold font-mono text-2xl">
                   <ShieldAlert size={18} />
                   {stressTest.detectedFaults}
               </div>
           </div>
           <div className="bg-slate-950/50 p-3 rounded border border-slate-800 flex flex-col items-center">
               <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">Auto-Resolved</span>
               <div className="flex items-center gap-1 text-fuchsia-400 font-bold font-mono text-2xl">
                   <Brain size={18} />
                   {stressTest.resolvedFaults}
               </div>
               <span className="text-[9px] text-slate-600 font-mono">75.2% via Memory</span>
           </div>
       </div>

       {/* Live Battle Feed */}
       <div className="flex-1 overflow-hidden flex flex-col relative z-10">
          <h4 className="text-xs text-rose-400/80 font-mono uppercase flex items-center gap-1 mb-2">
              <Activity size={10} /> Live Conflict Stream
          </h4>
          <div className="overflow-y-auto custom-scrollbar space-y-2 pr-1">
             {stressTest.recentEvents.map((event, idx) => (
               <div key={idx} className={`
                   text-xs p-2 rounded border font-mono flex gap-2
                   ${event.type === 'injection' ? 'bg-rose-950/20 border-rose-900/30 text-rose-300' : ''}
                   ${event.type === 'defense' ? 'bg-emerald-950/20 border-emerald-900/30 text-emerald-300' : ''}
                   ${event.type === 'breach' ? 'bg-red-950/50 border-red-500 text-red-100 font-bold animate-pulse' : ''}
               `}>
                  <span className="opacity-50 shrink-0">[{event.time}]</span>
                  <span>{event.type === 'injection' ? '>>' : (event.type === 'defense' ? '🛡' : '!!')}</span>
                  <span>{event.message}</span>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default ChaosPanel;
