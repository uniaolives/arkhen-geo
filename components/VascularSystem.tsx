
import React from 'react';
import { SystemState } from '../types';
import { Heart, Activity, Droplet, Shield, AlertTriangle, ArrowRight, Zap, CheckCircle2, Thermometer, Syringe, Gauge } from 'lucide-react';

interface VascularSystemProps {
  vascular: SystemState['vascular'];
}

const VascularSystem: React.FC<VascularSystemProps> = ({ vascular }) => {
  if (!vascular) return null;

  const getStatusColor = (status: string) => {
    switch(status) {
        case 'SATURATED': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
        case 'BOOSTED': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]';
        case 'PENDING': return 'text-slate-500 bg-slate-800 border-slate-700 border-dashed';
        default: return 'text-slate-400 bg-slate-900 border-slate-800';
    }
  };

  const getIcon = (type: string) => {
    switch(type) {
        case 'HEART': return <Heart size={16} className="text-rose-500 fill-rose-500/20" />;
        case 'ARTERY': return <Activity size={16} className="text-emerald-400" />;
        case 'CAPILLARY': return <Share2 size={16} className="text-cyan-400" />; // Share2 looks a bit like branching
        case 'TARGET': return <Shield size={16} className="text-slate-500" />;
        default: return <Droplet size={16} />;
    }
  };

  // Helper for branching icon
  const Share2 = ({size, className}: {size:number, className:string}) => (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
  );

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Blood Flow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, #f43f5e 0, #f43f5e 1px, transparent 0, transparent 50%)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-rose-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-rose-950 p-2 rounded text-rose-500 border border-rose-900/50 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <Droplet size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9042</h2>
            <div className="text-[10px] text-rose-400 font-mono uppercase">Vascular Mapping & Antibody Titration</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Dose (Satoshi)</div>
                <div className="text-rose-400 font-mono font-bold text-sm">{vascular.antibodyDose} bits</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Idolism Risk</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Shield size={10} /> {vascular.idolismRisk}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* System Overview Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col items-center justify-center">
                 <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Perfusion Pressure (ψ)</div>
                 <div className="flex items-center gap-2 text-2xl font-mono font-bold text-white">
                     <Gauge size={20} className="text-emerald-400" />
                     {vascular.perfusionPressure} rad
                 </div>
                 <div className="text-[9px] text-emerald-400 mt-1">Optimal</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col items-center justify-center">
                 <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Active Antibody</div>
                 <div className="flex items-center gap-2 text-lg font-mono font-bold text-white">
                     Anti-ReHMGB1
                 </div>
                 <div className="text-[9px] text-slate-400 mt-1 italic">Epistemic Surfactant</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
                 <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">System Status</div>
                 <div className="flex items-center gap-2 text-lg font-mono font-bold text-emerald-400 relative z-10">
                     <CheckCircle2 size={18} />
                     IMMUNOCOMPETENT
                 </div>
            </div>
        </div>

        {/* Vascular Map (Nodes) */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-6 flex flex-col gap-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                 <h3 className="text-xs font-bold font-mono text-white uppercase flex items-center gap-2">
                     <Activity size={14} className="text-rose-500" /> Circulatory Topology
                 </h3>
                 <span className="text-[10px] text-slate-500 font-mono">Flow Speed: 1.73 ms/node</span>
             </div>

             <div className="space-y-3">
                 {vascular.nodes.map((node) => (
                     <div key={node.id} className="flex items-center gap-4 bg-slate-950/50 p-2 rounded border border-slate-800 hover:border-slate-700 transition-colors">
                         {/* Icon & Type */}
                         <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                             {getIcon(node.type)}
                         </div>

                         {/* Info */}
                         <div className="flex-1 min-w-0">
                             <div className="flex justify-between items-center mb-1">
                                 <span className="text-xs font-bold font-mono text-white">{node.name}</span>
                                 <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border uppercase ${getStatusColor(node.status)}`}>
                                     {node.status}
                                 </span>
                             </div>
                             
                             {/* Progress Bar */}
                             <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                                 <div 
                                    className={`h-full transition-all duration-1000 ${node.status === 'BOOSTED' ? 'bg-cyan-500' : (node.saturation > 90 ? 'bg-emerald-500' : 'bg-slate-600')}`} 
                                    style={{ width: `${node.saturation}%` }}
                                 ></div>
                             </div>
                         </div>

                         {/* Metrics */}
                         <div className="text-right shrink-0 w-24">
                             <div className="text-[10px] text-slate-500 font-mono">Saturation</div>
                             <div className={`text-sm font-mono font-bold ${node.saturation > 95 ? 'text-emerald-400' : (node.saturation > 90 ? 'text-cyan-400' : 'text-slate-500')}`}>
                                 {node.saturation}%
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-rose-950/20 via-slate-900/50 to-rose-950/20 rounded-lg border border-rose-900/20 text-center">
            <div className="flex items-center gap-2 text-rose-500 text-xs font-mono uppercase tracking-widest mb-1">
                <Syringe size={12} /> Capillary Booster Administered
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The blood is clean. The antibody is circulating. The patient is young. Waiting for Formal Rehydration (21 Feb)."
            </p>
        </div>

      </div>
    </div>
  );
};

export default VascularSystem;
