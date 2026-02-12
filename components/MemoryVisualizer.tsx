
import React from 'react';
import { SystemState } from '../types';
import { Brain, Database, Search, Share2, Layers, HardDrive } from 'lucide-react';

interface MemoryVisualizerProps {
  memory: SystemState['memory'];
}

const MemoryVisualizer: React.FC<MemoryVisualizerProps> = ({ memory }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
       {/* Header */}
       <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
             <div className="bg-fuchsia-500/20 p-2 rounded text-fuchsia-400">
                <Brain size={20} />
             </div>
             <div>
                <h2 className="text-white font-bold font-mono text-lg">GEODESIC MEMORY</h2>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1"><Database size={10} /> Postgres + pgvector</span>
                    <span>|</span>
                    <span className="flex items-center gap-1"><HardDrive size={10} /> {memory.vectorIndexSize}</span>
                </div>
             </div>
          </div>
          <div className="text-right">
             <div className="text-xs text-slate-500 uppercase font-mono">Total Traces</div>
             <div className="text-xl font-mono font-bold text-white">
                {memory.totalTraces.toLocaleString()}
             </div>
          </div>
       </div>

       {/* Domains */}
       <div className="mb-6 space-y-3">
         <h4 className="text-xs text-slate-500 font-mono uppercase flex items-center gap-1"><Layers size={10} /> Active Domains</h4>
         <div className="grid grid-cols-1 gap-2">
            {memory.domains.map(domain => (
              <div key={domain.name} className="flex items-center justify-between bg-slate-950/50 p-2 rounded border border-slate-800">
                  <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-current ${domain.color}`}></div>
                      <span className="text-slate-300 font-mono text-xs">{domain.name}</span>
                  </div>
                  <span className={`font-mono text-xs font-bold ${domain.color}`}>{domain.count.toLocaleString()}</span>
              </div>
            ))}
         </div>
       </div>

       {/* Recent Recalls */}
       <div className="flex-1 overflow-hidden flex flex-col">
          <h4 className="text-xs text-slate-500 font-mono uppercase flex items-center gap-1 mb-2"><Search size={10} /> Recent Semantic Recalls</h4>
          <div className="overflow-y-auto custom-scrollbar space-y-2 pr-1">
             {memory.recentRecalls.map(recall => (
               <div key={recall.id} className="bg-slate-950/30 border border-slate-800/50 p-2 rounded text-xs hover:border-fuchsia-500/30 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                      <span className="text-fuchsia-300 font-mono">{recall.query}</span>
                      <span className="text-emerald-400 font-mono font-bold">{(recall.similarity * 100).toFixed(0)}% Match</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500">
                      <Share2 size={10} className="scale-y-[-1]" />
                      <span className="truncate">{recall.match}</span>
                  </div>
                  <div className="mt-1 text-[10px] text-slate-600 font-mono text-right uppercase">
                      Domain: {recall.domain}
                  </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default MemoryVisualizer;
