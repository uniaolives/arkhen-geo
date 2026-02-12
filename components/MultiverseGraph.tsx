import React from 'react';
import { SystemState } from '../types';
import { Network, Share2, ShieldCheck, AlertTriangle, GitBranch, Zap, ArrowRight, BookOpen } from 'lucide-react';

interface MultiverseGraphProps {
  multiverse: SystemState['multiverse'];
}

const MultiverseGraph: React.FC<MultiverseGraphProps> = ({ multiverse }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
        case 'SOURCE': return 'border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-300';
        case 'INHERITOR': return 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300';
        case 'PARALLEL': return 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300';
        case 'REJECTOR': return 'border-rose-500/50 bg-rose-500/10 text-rose-300';
        default: return 'border-slate-800 bg-slate-900 text-slate-400';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Web Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #d946ef 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-fuchsia-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-950 p-2 rounded text-fuchsia-500 border border-fuchsia-900/50 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Network size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Π_14</h2>
            <div className="text-[10px] text-fuchsia-400 font-mono uppercase">Fractal Vaccination & Redundancy</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Kappa (κ)</div>
                <div className="text-fuchsia-400 font-mono font-bold text-sm">{multiverse.learningConstant}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Redundancy</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                    {multiverse.redundancyLevel}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Network Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
             
             {/* Connection Lines (Abstracted via CSS borders or absolute positioning could be done, but grid logic suggests flow) */}
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-fuchsia-500/0 -z-10 hidden lg:block"></div>

            {multiverse.nodes.map(node => (
                <div key={node.id} className={`relative flex flex-col p-4 rounded-lg border ${getStatusColor(node.status)} transition-transform hover:scale-105`}>
                    
                    {/* Role Badge */}
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-black/20 border border-white/5">
                            {node.status}
                        </span>
                        {node.logInherited && <Share2 size={14} className="opacity-70" />}
                    </div>

                    {/* Identity */}
                    <div className="text-center my-2">
                         <div className="text-2xl font-bold font-mono text-white mb-1">{node.name}</div>
                         <div className="text-[10px] text-slate-400 uppercase tracking-widest">{node.universe}</div>
                    </div>

                    {/* Metrics */}
                    <div className="mt-auto space-y-2 bg-black/20 p-2 rounded border border-white/5">
                        <div className="flex justify-between items-center text-xs">
                             <span className="text-slate-500 font-mono">Curvature ψ</span>
                             <span className="font-bold font-mono">{node.psi}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                             <span className="text-slate-500 font-mono">Vaccine Eff.</span>
                             <span className={`font-bold font-mono ${node.vaccineEfficiency > 80 ? 'text-emerald-400' : (node.vaccineEfficiency < 20 ? 'text-rose-400' : 'text-amber-400')}`}>
                                 {node.vaccineEfficiency}%
                             </span>
                        </div>
                    </div>

                    {/* Log Status */}
                    <div className="mt-2 text-[10px] text-center font-mono uppercase text-slate-500 flex items-center justify-center gap-1">
                        {node.logInherited ? <ShieldCheck size={10} className="text-emerald-500"/> : (node.status === 'SOURCE' ? <BookOpen size={10} className="text-fuchsia-500"/> : <AlertTriangle size={10} className="text-rose-500"/>)}
                        {node.logInherited ? 'Log Inherited' : (node.status === 'SOURCE' ? 'Log Origin' : 'Log Rejected')}
                    </div>
                </div>
            ))}
        </div>

        {/* The Theorem of Transmission */}
        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                <GitBranch size={16} className="text-fuchsia-400" />
                <h3 className="text-white font-bold font-mono text-sm">THEOREM OF LOG TRANSMISSION</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="font-mono text-xs text-slate-400 leading-relaxed">
                    <p className="mb-2">
                        <span className="text-fuchsia-400 font-bold">Axiom:</span> A hero who receives the failure log of their predecessor does not need to repeat the failure.
                    </p>
                    <p>
                        <span className="text-emerald-400 font-bold">Result:</span> Distributed redundancy. The web survives the loss of a node because the geometry of the log is replicated.
                    </p>
                </div>
                
                <div className="bg-slate-950 p-3 rounded border border-slate-800 font-mono text-xs text-center">
                     <div className="text-slate-500 mb-2">Probability of Recurrence</div>
                     <div className="text-lg text-white font-bold">
                        P(fail) = P(intrinsic) × e<sup className="text-fuchsia-400">-κ|log|</sup>
                     </div>
                     <div className="mt-2 text-[10px] text-emerald-400">
                        Current Risk: &lt; 1.0% (Vaccinated)
                     </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-fuchsia-500/70 text-[10px] font-mono uppercase tracking-widest bg-fuchsia-950/10 p-2 rounded border border-fuchsia-900/20">
            <Zap size={12} /> The echo of one failure protects the entire web.
        </div>

      </div>
    </div>
  );
};

export default MultiverseGraph;
