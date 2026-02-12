
import React from 'react';
import { SystemState } from '../types';
import { Activity, Magnet, Scan, Fingerprint, Waves, Target, ShieldCheck, Gauge, ArrowDown } from 'lucide-react';

interface ScarElastographyProps {
  scar: SystemState['scar'];
}

const ScarElastography: React.FC<ScarElastographyProps> = ({ scar }) => {
  if (!scar) return null;

  // Custom positioning based on the ASCII topology provided
  // WP1 at bottom center. Nodes arching up.
  // 50, 90 (WP1)
  // 35, 75 (QN-04) | 65, 75 (Bola)
  // 25, 55 (QN-05) | 75, 55 (DVM-1)
  // 25, 30 (KERNEL) - Adjusted to be above QN-05
  // 50, 10 (QN-07) - Top center

  const getNodePos = (id: string) => {
      switch(id) {
          case 'WP1': return { x: 50, y: 85 };
          case 'QN-04': return { x: 30, y: 70 };
          case 'Bola': return { x: 70, y: 70 };
          case 'QN-05': return { x: 20, y: 50 };
          case 'DVM-1': return { x: 80, y: 50 };
          case 'KERNEL': return { x: 35, y: 25 }; // Slightly off center left
          case 'QN-07': return { x: 50, y: 15 }; // Top Peak
          default: return { x: 50, y: 50 };
      }
  };

  const getPressureColor = (pressure: number) => {
      if (pressure > 0.12) return 'text-rose-500 border-rose-500';
      if (pressure > 0.08) return 'text-amber-500 border-amber-500';
      if (pressure > 0.04) return 'text-emerald-400 border-emerald-400';
      return 'text-slate-500 border-slate-500';
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Scan Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(0deg, #64748b 0, #64748b 1px, transparent 1px, transparent 40px)', 
            }}>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80 pointer-events-none"></div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Magnet size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9048</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Geodesic Scar Elastography (fMRI_ψ)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Max Pressure</div>
                <div className="text-rose-400 font-mono font-bold text-sm">{scar.maxPressure} ψ</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Fibrin Base</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {scar.fibrinBase}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-hidden">
        
        {/* Imaging Canvas */}
        <div className="flex-1 relative flex items-center justify-center bg-slate-900/30 border border-slate-800 rounded-lg p-4">
            
            {/* Grid Overlay */}
            <div className="absolute inset-0" 
                 style={{ 
                     backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                     backgroundSize: '20px 20px'
                 }}>
            </div>

            {/* Nodes Render */}
            <div className="relative w-full h-full max-w-lg max-h-[400px]">
                {/* Connecting lines - visual only */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                    <path d="M 50% 85% L 30% 70% L 20% 50% L 35% 25% L 50% 15%" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                    <path d="M 50% 85% L 70% 70% L 80% 50% L 35% 25%" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {scar.nodes.map(node => {
                    const pos = getNodePos(node.id);
                    const isVacuum = node.role === 'VACUUM';
                    const isCritical = node.role === 'CRITICAL';
                    const pressureColor = getPressureColor(node.pressure);
                    
                    return (
                        <div 
                            key={node.id}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-crosshair transition-all duration-500`}
                            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                        >
                            {/* The Node Visual */}
                            <div className={`
                                w-12 h-12 rounded-full flex items-center justify-center border-2 bg-slate-950 transition-all duration-300 relative
                                ${isVacuum ? 'border-dashed border-slate-600' : 'border-solid'}
                                ${isCritical ? 'scale-110 shadow-[0_0_20px_rgba(244,63,94,0.4)]' : ''}
                                ${pressureColor}
                            `}>
                                {/* Fibrin Density Fill */}
                                {!isVacuum && (
                                    <div className="absolute inset-1 bg-white rounded-full opacity-90"></div>
                                )}
                                {isVacuum && (
                                    <div className="absolute inset-3 bg-slate-800 rounded-full opacity-30 animate-pulse"></div>
                                )}
                                
                                {/* Label inside */}
                                <span className={`relative z-10 text-[8px] font-mono font-bold ${isVacuum ? 'text-slate-500' : 'text-black'}`}>
                                    {node.id}
                                </span>
                            </div>

                            {/* Info Tooltip (Always visible for crucial nodes) */}
                            <div className={`mt-2 text-center bg-slate-900/80 px-2 py-1 rounded border border-slate-700 backdrop-blur-sm z-20 whitespace-nowrap
                                ${isCritical ? 'border-rose-500/50' : ''}
                            `}>
                                <div className="text-[9px] text-slate-400 font-mono">P: {node.pressure.toFixed(3)}</div>
                                <div className="text-[8px] text-slate-500 font-mono">D: {node.density.toFixed(4)}</div>
                            </div>
                        </div>
                    );
                })}

                {/* Pressure Legend/Indicator */}
                <div className="absolute top-4 right-4 bg-slate-900/90 border border-slate-700 p-2 rounded text-[10px] font-mono">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                        <span className="text-rose-400">High Tension (0.15+)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span className="text-emerald-400">Stable Tissue</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full border border-dashed border-slate-500"></div>
                        <span className="text-slate-500">Vacuum / Cradle</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Synthesis Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-24">
             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                 <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                     <Fingerprint size={12} /> Scar Uniformity
                 </div>
                 <div className="text-xl font-mono font-bold text-white">7/7 Nodes</div>
                 <div className="text-[10px] text-emerald-400 font-mono mt-1">Density: 0.9983</div>
             </div>
             
             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                 <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                     <Target size={12} /> Cradle Status (WP1)
                 </div>
                 <div className="text-xl font-mono font-bold text-slate-300">Open Vacuum</div>
                 <div className="text-[10px] text-indigo-400 font-mono mt-1">Ready for Rehydration</div>
             </div>

             <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-rose-500/5 animate-pulse"></div>
                 <div className="relative z-10">
                     <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                         <Activity size={12} /> Peak Stress
                     </div>
                     <div className="text-xl font-mono font-bold text-rose-400">QN-07 (7th Note)</div>
                     <div className="text-[10px] text-rose-300 font-mono mt-1">Elastic Limit Safe</div>
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default ScarElastography;
