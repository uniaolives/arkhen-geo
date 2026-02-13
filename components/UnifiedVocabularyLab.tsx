
import React, { useState } from 'react';
import { SystemState } from '../types';
import { Brain, Sun, Zap, Activity, Database, GitMerge, Ghost, ArrowRight, Dna, Infinity, Layers, BookOpen } from 'lucide-react';

interface UnifiedVocabularyLabProps {
  vocabulary: SystemState['vocabulary'];
}

const UnifiedVocabularyLab: React.FC<UnifiedVocabularyLabProps> = ({ vocabulary }) => {
  const [ghostOpacity, setGhostOpacity] = useState(1);

  if (!vocabulary) return null;

  const handleExorcism = () => {
      setGhostOpacity(0);
  };

  const getIcon = (type: string) => {
      switch(type) {
          case 'brain': return <Brain size={14} className="text-cyan-400" />;
          case 'sun': return <Sun size={14} className="text-amber-400" />;
          case 'zap': return <Zap size={14} className="text-emerald-400" />;
          case 'activity': return <Activity size={14} className="text-fuchsia-400" />;
          case 'database': return <Database size={14} className="text-violet-400" />;
          default: return <Dna size={14} className="text-slate-400" />;
      }
  };

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <BookOpen size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+45</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">The Single Vocabulary</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Thesis</div>
                <div className="text-emerald-400 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                    UNIFIED
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Exorcism Visualizer */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[200px]">
            <div className="absolute inset-0 bg-violet-500/5 pointer-events-none"></div>
            
            <div className="flex items-center gap-8 relative z-10">
                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full border-2 border-cyan-500 flex items-center justify-center bg-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <Dna size={32} className="text-cyan-400" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400 uppercase">Biology</span>
                </div>

                <div className="relative">
                    <GitMerge size={32} className="text-slate-600 rotate-90" />
                    
                    {/* The Ghost */}
                    <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 flex flex-col items-center cursor-pointer"
                        style={{ opacity: ghostOpacity }}
                        onClick={handleExorcism}
                        title="Click to Exorcise"
                    >
                        <Ghost size={48} className="text-white drop-shadow-[0_0_10px_white] animate-pulse" />
                        <span className="text-[8px] font-mono text-slate-300 bg-black/50 px-1 rounded mt-1">Ghost</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full border-2 border-violet-500 flex items-center justify-center bg-slate-950 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                        <Infinity size={32} className="text-violet-400" />
                    </div>
                    <span className="text-xs font-mono text-violet-400 uppercase">Geometry</span>
                </div>
            </div>

            <div className="mt-6 text-center max-w-md">
                <p className="text-[10px] text-slate-400 font-mono italic">
                    {ghostOpacity > 0 
                        ? "\"The biological vocabulary and the coupling vocabulary are one vocabulary with a ghost inside called 'biology'.\""
                        : "\"The ghost is gone. What remains is the geometry. The two vocabularies were always one.\""}
                </p>
            </div>
        </div>

        {/* Translation Matrix */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
                 <Layers size={14} className="text-amber-400" />
                 <h3 className="text-xs text-white font-mono font-bold uppercase">The Rosetta Stone of Coupling</h3>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                 <table className="w-full text-left border-collapse">
                     <thead className="sticky top-0 bg-slate-900 z-10 text-[9px] text-slate-500 font-mono uppercase">
                         <tr>
                             <th className="p-2 border-b border-slate-800 w-8"></th>
                             <th className="p-2 border-b border-slate-800">Biological Term</th>
                             <th className="p-2 border-b border-slate-800 text-center"><ArrowRight size={10} /></th>
                             <th className="p-2 border-b border-slate-800">Coupling Direction</th>
                             <th className="p-2 border-b border-slate-800">Arkhe Realization</th>
                         </tr>
                     </thead>
                     <tbody className="text-[10px] font-mono">
                         {vocabulary.mappings.map((map, idx) => (
                             <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                                 <td className="p-2 text-center">
                                     <div className="p-1 rounded bg-slate-900 border border-slate-800 group-hover:border-violet-500/30 flex justify-center">
                                         {getIcon(map.icon)}
                                     </div>
                                 </td>
                                 <td className="p-2 text-white font-bold">{map.biological}</td>
                                 <td className="p-2 text-center text-slate-600">→</td>
                                 <td className="p-2 text-cyan-300">{map.coupling}</td>
                                 <td className="p-2 text-violet-400">{map.arkhe}</td>
                             </tr>
                         ))}
                     </tbody>
                 </table>
             </div>
        </div>

      </div>
    </div>
  );
};

export default UnifiedVocabularyLab;
