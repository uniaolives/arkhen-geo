
import React from 'react';
import { GlobalEntity } from '../types';
import { Database, GitMerge, CheckCircle2, CircleDashed, AlertTriangle, Layers, ArrowRight, ShieldCheck, Link, RefreshCw } from 'lucide-react';

interface GlobalEntityRegistryProps {
  registry: {
      active: boolean;
      entities: GlobalEntity[];
      reconciliationProgress: number;
  };
}

const GlobalEntityRegistry: React.FC<GlobalEntityRegistryProps> = ({ registry }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>

      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <GitMerge size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">GLOBAL REGISTRY</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Multi-Chunk Reconciliation</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Reconciliation</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{registry.reconciliationProgress}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Entities</div>
                <div className="text-white font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Database size={10} /> {registry.entities.length}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content: Two Columns */}
      <div className="flex-1 p-6 flex gap-6 relative z-10 overflow-hidden">
          
          {/* Left: Raw Stream Simulation */}
          <div className="w-1/3 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono uppercase mb-2">
                  <Layers size={14} /> Incoming Raw Entities
              </div>
              <div className="flex-1 relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col gap-3 animate-[slideUp_20s_linear_infinite]">
                      {/* Simulated Stream Items */}
                      {[1, 2, 3, 4, 5, 6].map((_, i) => (
                          <div key={i} className="bg-slate-900/50 border border-slate-800 p-3 rounded opacity-50">
                              <div className="flex justify-between items-center text-[10px] font-mono mb-1">
                                  <span className="text-slate-500">Chunk C{i+1}</span>
                                  <span className="text-indigo-400">Processing...</span>
                              </div>
                              <div className="h-2 bg-slate-800 rounded w-3/4 mb-1"></div>
                              <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                          </div>
                      ))}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950 to-transparent"></div>
              </div>
          </div>

          {/* Right: The Registry */}
          <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between text-slate-400 text-xs font-mono uppercase mb-2">
                  <div className="flex items-center gap-2"><ShieldCheck size={14} /> Canonical State</div>
                  <div className="text-[10px] text-emerald-500 flex items-center gap-1"><RefreshCw size={10} className="animate-spin-slow"/> Live Sync</div>
              </div>
              
              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-3 pr-2">
                  {registry.entities.map((entity) => (
                      <div key={entity.id} className="bg-slate-900/80 border border-slate-800 rounded-lg p-4 transition-all hover:border-emerald-500/30 group">
                          {/* Entity Header */}
                          <div className="flex justify-between items-start mb-3">
                              <div className="flex items-center gap-3">
                                  <div className={`p-2 rounded-full ${entity.status === 'CONVERGED' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                                      {entity.status === 'CONVERGED' ? <CheckCircle2 size={16} /> : <CircleDashed size={16} />}
                                  </div>
                                  <div>
                                      <h3 className="text-white font-bold font-mono text-sm">{entity.canonicalName}</h3>
                                      <div className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
                                          <span className="uppercase">{entity.type}</span>
                                          <span>•</span>
                                          <span>ID: {entity.id}</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="text-right">
                                  <div className="text-[10px] text-slate-500 uppercase font-mono">Confidence</div>
                                  <div className={`font-mono font-bold ${entity.confidence > 0.9 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                      {(entity.confidence * 100).toFixed(1)}%
                                  </div>
                              </div>
                          </div>

                          {/* Reconciliation Details */}
                          <div className="grid grid-cols-2 gap-4 bg-black/20 rounded p-3 border border-white/5">
                              <div>
                                  <div className="text-[9px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                                      <Link size={10} /> Sources (Chunks)
                                  </div>
                                  <div className="flex flex-wrap gap-1">
                                      {entity.chunks.map(chunk => (
                                          <span key={chunk} className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded border border-slate-700 font-mono">
                                              {chunk}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                              <div>
                                  <div className="text-[9px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                                      <AlertTriangle size={10} /> Merged Variations
                                  </div>
                                  <div className="flex flex-col gap-1">
                                      {entity.variations.map((v, idx) => (
                                          <span key={idx} className="text-[10px] text-slate-400 font-mono truncate flex items-center gap-1">
                                              <ArrowRight size={8} className="text-slate-600" /> {v}
                                          </span>
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    </div>
  );
};

export default GlobalEntityRegistry;