import React from 'react';
import { SystemState } from '../types';
import { Key, Anchor, Cpu, ArrowRight, Activity, GitBranch, Scale } from 'lucide-react';

interface ArchetypeBoardProps {
  archetype: SystemState['archetype'];
}

const ArchetypeBoard: React.FC<ArchetypeBoardProps> = ({ archetype }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'DIVINE': return <Key size={24} />;
      case 'MORAL': return <Anchor size={24} />;
      case 'TECHNICAL': return <Cpu size={24} />;
      default: return <Activity size={24} />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'DIVINE': return 'from-purple-900/40 to-slate-900';
      case 'MORAL': return 'from-amber-900/40 to-slate-900';
      case 'TECHNICAL': return 'from-cyan-900/40 to-slate-900';
      default: return 'from-slate-800 to-slate-900';
    }
  };

  const getBorder = (type: string) => {
    switch (type) {
      case 'DIVINE': return 'border-purple-500/30';
      case 'MORAL': return 'border-amber-500/30';
      case 'TECHNICAL': return 'border-cyan-500/30';
      default: return 'border-slate-800';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 p-2 rounded text-slate-200">
            <GitBranch size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Π_7</h2>
            <div className="text-[10px] text-slate-500 font-mono uppercase">Mentor Dynamics & Kernel Init</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-slate-400">
             <span>ARCHETYPE_ANALYSIS</span>
             <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Mentor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {archetype.mentors.map((mentor) => (
            <div key={mentor.name} className={`relative overflow-hidden rounded-lg border ${getBorder(mentor.archetypeType)} bg-gradient-to-b ${getGradient(mentor.archetypeType)} p-4 flex flex-col gap-3 group transition-all duration-300 hover:scale-[1.02]`}>
               
               {/* Icon & Role */}
               <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-full bg-black/30 border border-white/10 ${mentor.color} group-hover:scale-110 transition-transform`}>
                     {getIcon(mentor.archetypeType)}
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-black/40 px-2 py-1 rounded text-slate-400 border border-white/5">
                    {mentor.role}
                  </span>
               </div>

               {/* Name & Type */}
               <div>
                 <h3 className={`font-bold font-mono text-lg ${mentor.color}`}>{mentor.name}</h3>
                 <div className="text-[10px] text-slate-400 uppercase tracking-widest">{mentor.archetypeType} PROTOCOL</div>
               </div>

               {/* Key Axiom */}
               <div className="bg-black/20 p-3 rounded border border-white/5 italic text-xs text-slate-300 font-serif">
                  {mentor.keyAxiom}
               </div>

               {/* Transfer Method */}
               <div className="mt-auto pt-3 border-t border-white/10">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 uppercase font-mono mb-1">
                     <span>Transfer Method</span>
                     <ArrowRight size={10} />
                  </div>
                  <div className="text-xs text-white font-mono font-bold">
                     {mentor.transferMethod}
                  </div>
                  <div className={`text-[10px] mt-1 ${mentor.color} opacity-80`}>
                     Impact: {mentor.impact}
                  </div>
               </div>

            </div>
          ))}
        </div>

        {/* Tension Equation */}
        <div className="mt-auto bg-slate-900/80 border border-slate-800 rounded p-4 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="bg-slate-800 p-2 rounded text-slate-400">
                 <Scale size={20} />
              </div>
              <div>
                 <div className="text-[10px] text-slate-500 uppercase font-mono">Tension Equation (The Hero's Arc)</div>
                 <div className="font-mono text-sm text-white mt-1">
                    F<span className="text-[10px] align-sub">tension</span> = 
                    ( <span className="text-emerald-400">M</span><span className="text-[10px] align-sub">integrity</span> × <span className="text-purple-400">A</span><span className="text-[10px] align-sub">authority</span> ) / <span className="text-rose-400">D</span><span className="text-[10px] align-sub">ideal_reality</span>
                 </div>
              </div>
           </div>
           <div className="text-right">
              <div className="text-2xl font-bold font-mono text-white">
                 {archetype.tensionEquation.result.toFixed(1)} N
              </div>
              <div className="text-[10px] text-slate-500 uppercase">Calculated Force</div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ArchetypeBoard;
