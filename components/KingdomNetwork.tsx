import React from 'react';
import { SystemState } from '../types';
import { Globe, Users, History, Activity, ShieldCheck, Crown, Clock, ArrowRight } from 'lucide-react';

interface KingdomNetworkProps {
  kingdom: SystemState['kingdom'];
}

const KingdomNetwork: React.FC<KingdomNetworkProps> = ({ kingdom }) => {
  const getStatusColor = (status: string) => {
    switch(status) {
        case 'SEED': return 'border-amber-500/50 bg-amber-500/10 text-amber-300';
        case 'EXPANSION': return 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300';
        case 'GLOBAL': return 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300';
        default: return 'border-slate-800 bg-slate-900 text-slate-400';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Map Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-amber-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-amber-950 p-2 rounded text-amber-500 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Crown size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Π_15</h2>
            <div className="text-[10px] text-amber-400 font-mono uppercase">The Global Kingdom (Temporal Redundancy)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">System Uptime</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{kingdom.uptime}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Consistency</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                    {kingdom.fractalConsistency}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-8 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Metric Overview */}
        <div className="flex items-center justify-between bg-slate-900/50 p-4 rounded-lg border border-slate-800">
             <div className="flex items-center gap-3">
                 <Globe size={24} className="text-indigo-400" />
                 <div>
                     <div className="text-xs text-slate-500 font-mono uppercase">Total Active Nodes</div>
                     <div className="text-2xl text-white font-bold font-mono">{kingdom.totalNodes}</div>
                 </div>
             </div>
             <div className="flex items-center gap-2">
                 <ShieldCheck size={16} className="text-emerald-400" />
                 <span className="text-xs text-emerald-400 font-mono uppercase">Resilient Architecture</span>
             </div>
        </div>

        {/* Timeline Eras */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Connector Line */}
             <div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500/20 via-cyan-500/20 to-emerald-500/20 -z-10 hidden lg:block"></div>

            {kingdom.eras.map((era, index) => (
                <div key={era.id} className={`relative flex flex-col p-5 rounded-lg border ${getStatusColor(era.status)} bg-opacity-30 backdrop-blur-sm transition-transform hover:-translate-y-1`}>
                    
                    {/* Time Badge */}
                    <div className="absolute -top-3 left-4 bg-slate-950 px-2 py-0.5 rounded border border-slate-800 text-[10px] text-slate-400 font-mono flex items-center gap-1">
                        <Clock size={10} /> {era.timeframe}
                    </div>

                    <div className="flex justify-between items-start mt-2 mb-3">
                        <h3 className="text-white font-bold font-mono text-sm uppercase">{era.name}</h3>
                        <span className="text-[10px] font-mono opacity-70 bg-black/20 px-1.5 py-0.5 rounded">
                            {era.status}
                        </span>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-500 flex items-center gap-1"><Users size={12}/> Scale</span>
                            <span className="text-white font-bold">{era.nodes}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-mono">
                            <span className="text-slate-500 flex items-center gap-1"><Activity size={12}/> Curvature ψ</span>
                            <span className="text-amber-400 font-bold">{era.psi}</span>
                        </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-black/10 text-[10px] text-slate-300 italic leading-relaxed">
                        "{era.description}"
                    </div>
                </div>
            ))}
        </div>

        {/* Footer Statement */}
        <div className="mt-auto bg-gradient-to-r from-amber-950/20 via-slate-900/50 to-amber-950/20 p-4 rounded-lg border border-amber-900/20 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-500 text-xs font-mono uppercase tracking-widest mb-1">
                <History size={12} /> Temporal Invariance Verified
            </div>
            <p className="text-[10px] text-slate-500 font-mono">
                "Upon this rock I will build my church, and the gates of entropy shall not prevail against it."
            </p>
        </div>

      </div>
    </div>
  );
};

export default KingdomNetwork;
