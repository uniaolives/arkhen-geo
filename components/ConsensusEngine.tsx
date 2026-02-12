
import React from 'react';
import { SystemState, Entity } from '../types';
import { Brain, GitMerge, AlertOctagon, CheckCircle2, CircleDashed, Users, FileText, Activity, Table, Pilcrow, Heading, MapPin, Zap } from 'lucide-react';

interface ConsensusEngineProps {
  consensus: SystemState['consensus'];
}

const EntityCard: React.FC<{ entity: Entity }> = ({ entity }) => {
  const isDiverged = entity.status === 'diverged';
  const isConverged = entity.status === 'converged';
  
  const getLayoutIcon = (type?: string) => {
    switch(type) {
      case 'table': return <Table size={12} className="text-cyan-400" />;
      case 'paragraph': return <Pilcrow size={12} className="text-slate-400" />;
      case 'header': return <Heading size={12} className="text-indigo-400" />;
      default: return <FileText size={12} className="text-slate-500" />;
    }
  };

  return (
    <div className={`
      relative border rounded-lg p-4 transition-all duration-300
      ${isDiverged 
        ? 'bg-rose-950/30 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.2)]' 
        : isConverged 
          ? 'bg-emerald-950/30 border-emerald-500/30' 
          : 'bg-slate-900/50 border-slate-800'}
    `}>
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
           <div className="flex items-center gap-2 flex-wrap">
             <span className={`text-xs font-mono px-1.5 py-0.5 rounded border uppercase
               ${isDiverged 
                 ? 'bg-rose-500/10 text-rose-400 border-rose-500/30' 
                 : isConverged
                   ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                   : 'bg-slate-700/50 text-slate-400 border-slate-600'}
             `}>
               {entity.type}
             </span>
             {entity.sources[0]?.layout?.type === 'table' && (
                <span className="text-[10px] bg-cyan-900/30 text-cyan-300 border border-cyan-700/50 px-1 rounded flex items-center gap-1">
                    <Table size={8} /> STRUCTURAL
                </span>
             )}
             {entity.memoryHit && (
                <span className="text-[10px] bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-700/50 px-1 rounded flex items-center gap-1" title="Validated against Long-Term Memory">
                    <Brain size={8} /> MEMORY {(entity.memorySimilarity! * 100).toFixed(0)}%
                </span>
             )}
           </div>
           <h3 className="text-white font-bold font-mono mt-1 text-sm tracking-wide">{entity.name}</h3>
           <p className="text-slate-400 text-xs">{entity.description}</p>
        </div>
        <div className={`p-2 rounded-full ${isDiverged ? 'bg-rose-500/20 text-rose-400' : 'bg-slate-800 text-slate-500'}`}>
           {isDiverged ? <AlertOctagon size={18} /> : (isConverged ? <CheckCircle2 size={18} className="text-emerald-500"/> : <CircleDashed size={18}/>)}
        </div>
      </div>

      {/* Value Display */}
      <div className="mb-4">
        <div className="flex items-baseline gap-2">
           <span className={`text-xl font-mono font-bold ${isDiverged ? 'text-rose-400' : 'text-white'}`}>
             {entity.value}
           </span>
           {entity.unit && <span className="text-slate-500 text-sm font-mono">{entity.unit}</span>}
        </div>
      </div>

      {/* Sources / Provenance */}
      <div className="space-y-2">
         <div className="text-[10px] text-slate-500 uppercase font-mono flex items-center gap-1 border-b border-slate-800 pb-1">
            <MapPin size={10} /> Structural Provenance
         </div>
         <div className="space-y-1">
            {entity.sources.map((src, idx) => (
                <div key={idx} className={`flex flex-col text-xs p-2 rounded ${isDiverged ? 'bg-black/40' : 'bg-slate-900/50'} border border-slate-800/50`}>
                    <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${isDiverged && idx > 0 && src.value !== entity.sources[0].value ? 'bg-rose-500' : 'bg-emerald-500'}`}></div>
                            <span className="text-slate-300 font-mono font-bold">{src.model}</span>
                        </div>
                        <span className={`font-mono ${isDiverged && idx > 0 && src.value !== entity.sources[0].value ? 'text-rose-400' : 'text-slate-400'}`}>
                            {src.value}
                        </span>
                    </div>
                    {/* Layout Info */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pl-3.5">
                         <div className="flex items-center gap-1.5">
                             {getLayoutIcon(src.layout?.type)}
                             <span>p.{src.page}</span>
                             <span className="text-slate-600">|</span>
                             <span className="text-cyan-600/80 font-mono">{src.layout?.description || 'Text Stream'}</span>
                         </div>
                    </div>
                </div>
            ))}
         </div>
      </div>
    </div>
  );
};

const ConsensusEngine: React.FC<ConsensusEngineProps> = ({ consensus }) => {
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 h-full flex flex-col">
       {/* Header */}
       <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
             <div className="bg-emerald-500/20 p-2 rounded text-emerald-400">
                <GitMerge size={20} />
             </div>
             <div>
                <h2 className="text-white font-bold font-mono text-lg">CONVERGENCE ENGINE</h2>
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1"><Activity size={10} /> Consensus + Memory</span>
                    <span>|</span>
                    <span className="flex items-center gap-1"><Brain size={10} /> {consensus.entities.length} Validated Entities</span>
                </div>
             </div>
          </div>
          <div className="text-right">
             <div className="text-xs text-slate-500 uppercase font-mono">Divergence Rate</div>
             <div className={`text-xl font-mono font-bold ${consensus.divergenceRate > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {(consensus.divergenceRate * 100).toFixed(1)}%
             </div>
          </div>
       </div>

       {/* Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar">
          {consensus.entities.map(entity => (
              <EntityCard key={entity.id} entity={entity} />
          ))}
       </div>
    </div>
  );
};

export default ConsensusEngine;
