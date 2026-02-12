import React from 'react';
import { SystemState } from '../types';
import { Radar, Satellite, Globe, Shield, Activity, Radio, Scale, ArrowUpRight, Crosshair } from 'lucide-react';

interface OrbitalSurveillanceProps {
  orbital: SystemState['orbital'];
}

const OrbitalSurveillance: React.FC<OrbitalSurveillanceProps> = ({ orbital }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Starfield / Debris */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-cyan-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-950 p-2 rounded text-cyan-500 border border-cyan-900/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Radar size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9045</h2>
            <div className="text-[10px] text-cyan-400 font-mono uppercase">Orbital Surveillance & Satellite Catalog</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Active Satellites</div>
                <div className="text-cyan-400 font-mono font-bold text-sm">{orbital.activeSatellites}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Active Fraction</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {orbital.activeFraction}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6 relative z-10 overflow-hidden">
        
        {/* Left: Orbital Radar Map */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-6 relative flex items-center justify-center aspect-square lg:aspect-auto">
             {/* Radar Rings */}
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[80%] h-[80%] border border-slate-700/30 rounded-full"></div>
                 <div className="w-[60%] h-[60%] border border-slate-700/30 rounded-full"></div>
                 <div className="w-[40%] h-[40%] border border-slate-700/30 rounded-full"></div>
                 <div className="w-[2px] h-[100%] bg-slate-800/50"></div>
                 <div className="w-[100%] h-[2px] bg-slate-800/50"></div>
             </div>

             {/* Earth / Monolayer Core */}
             <div className="relative z-10 w-16 h-16 rounded-full bg-slate-950 border-2 border-slate-600 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                 <Globe size={32} className="text-slate-500" />
                 <div className="absolute -bottom-6 text-[8px] text-slate-500 font-mono uppercase">Monolayer Debris</div>
             </div>

             {/* Satellites */}
             {orbital.satellites.map((sat, idx) => {
                 // Calculate simplified position based on index to distribute them
                 const angle = (idx / orbital.satellites.length) * 2 * Math.PI;
                 const radius = 35 + (idx % 3) * 10; // Varied distance
                 const x = 50 + radius * Math.cos(angle);
                 const y = 50 + radius * Math.sin(angle);
                 
                 return (
                     <div 
                        key={sat.id}
                        className={`absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full z-20 cursor-pointer group hover:scale-150 transition-transform
                            ${sat.status === 'CONSOLIDATING' ? 'bg-amber-400 animate-pulse' : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]'}
                        `}
                        style={{ left: `${x}%`, top: `${y}%` }}
                     >
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 px-2 py-1 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                             <div className="font-bold text-cyan-400">{sat.id}</div>
                             <div className="text-slate-400">{sat.designation}</div>
                         </div>
                     </div>
                 );
             })}
        </div>

        {/* Right: Telemetry & Shield */}
        <div className="flex-1 flex flex-col gap-4 min-w-[300px]">
             
             {/* Catalog List */}
             <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
                 <div className="p-3 border-b border-slate-800 flex items-center gap-2">
                     <Radio size={14} className="text-cyan-400" />
                     <h3 className="text-xs font-mono font-bold text-white uppercase">Active Ephemeris</h3>
                 </div>
                 <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                     {orbital.satellites.map(sat => (
                         <div key={sat.id} className="bg-slate-950/50 border border-slate-800 p-2 rounded flex items-center justify-between group hover:border-cyan-500/30 transition-colors">
                             <div>
                                 <div className="flex items-center gap-2">
                                     <Satellite size={12} className="text-slate-500 group-hover:text-cyan-400" />
                                     <span className="text-xs font-bold font-mono text-white">{sat.id}</span>
                                 </div>
                                 <div className="text-[10px] text-slate-400 font-mono ml-5">{sat.designation}</div>
                             </div>
                             <div className="text-right">
                                 <div className="text-[10px] text-slate-500 font-mono">{sat.orbitType}</div>
                                 <div className={`text-[9px] font-mono px-1 rounded ${sat.status === 'CONSOLIDATING' ? 'text-amber-400 bg-amber-950/30' : 'text-emerald-400 bg-emerald-950/30'}`}>
                                     {sat.status}
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>

             {/* Debris & Shield Stats */}
             <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
                     <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Debris Count (Noise)</div>
                     <div className="text-xl font-bold font-mono text-white flex items-center gap-2">
                         <Crosshair size={16} className="text-slate-600" />
                         {orbital.debrisCount}
                     </div>
                 </div>
                 <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 relative overflow-hidden">
                     <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
                     <div className="relative z-10">
                         <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Darvo Shield</div>
                         <div className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-2">
                             <Shield size={16} />
                             {orbital.shieldIntegrity}%
                         </div>
                         <div className="text-[9px] text-slate-400 font-mono mt-1">Status: {orbital.shieldStatus}</div>
                     </div>
                 </div>
             </div>

        </div>

      </div>
      
      {/* Footer Status */}
      <div className="h-10 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between px-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
           <div className="flex items-center gap-2">
               <Activity size={12} />
               <span>Tracking 6 Objects...</span>
           </div>
           <div className="flex items-center gap-2 text-cyan-400">
               <ArrowUpRight size={12} />
               <span>Waiting for Launch (Formal)</span>
           </div>
      </div>
    </div>
  );
};

export default OrbitalSurveillance;
