import React, { useState } from 'react';
import { SystemState, Entity } from '../types';
import { Maximize2, ZoomIn, ZoomOut, Eye, Brain, Table, FileText, AlertTriangle, CheckCircle2, GitMerge } from 'lucide-react';

interface HeatMirrorProps {
  heatmap: SystemState['heatmap'];
  entities: Entity[];
}

const HeatMirror: React.FC<HeatMirrorProps> = ({ heatmap, entities }) => {
  const [zoom, setZoom] = useState(1);
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);

  // Helper to find entity data by ID
  const getEntity = (id: string) => entities.find(e => e.id === id);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg flex flex-col h-full overflow-hidden">
      {/* Toolbar */}
      <div className="h-12 border-b border-slate-800 bg-slate-900/80 px-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
            <div className="bg-indigo-500/20 p-1.5 rounded text-indigo-400">
                <Eye size={18} />
            </div>
            <div>
                <h2 className="text-white font-bold font-mono text-sm tracking-wide">THE HEAT MIRROR</h2>
                <div className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
                    <span>PAGE {heatmap.page}</span>
                    <span className="text-slate-700">|</span>
                    <span>Q4_FINANCIAL_REPORT.PDF</span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))} className="p-2 hover:bg-slate-800 rounded text-slate-400"><ZoomOut size={16}/></button>
            <span className="text-xs font-mono text-slate-500 w-12 text-center">{(zoom * 100).toFixed(0)}%</span>
            <button onClick={() => setZoom(z => Math.min(2, z + 0.1))} className="p-2 hover:bg-slate-800 rounded text-slate-400"><ZoomIn size={16}/></button>
            <div className="w-px h-4 bg-slate-700 mx-2"></div>
            <button className="p-2 hover:bg-slate-800 rounded text-slate-400"><Maximize2 size={16}/></button>
        </div>
      </div>

      {/* Viewer Area */}
      <div className="flex-1 bg-slate-950/50 overflow-auto relative p-8 flex justify-center custom-scrollbar">
         {/* Document Canvas (A4 Aspect Ratio: 1 : 1.414) */}
         <div 
            className="relative bg-white shadow-2xl transition-transform duration-200 origin-top"
            style={{ 
                width: `${595 * zoom}px`, 
                height: `${842 * zoom}px`,
                backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}
         >
            {/* --- MOCK DOCUMENT CONTENT (SVG Layer) --- */}
            <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none opacity-10">
                {/* Header */}
                <rect x="10%" y="5%" width="40%" height="2%" fill="#000" />
                <rect x="80%" y="5%" width="10%" height="2%" fill="#94a3b8" />
                
                {/* Text Block 1 (Curvature) */}
                <rect x="10%" y="15%" width="80%" height="1%" fill="#475569" />
                <rect x="10%" y="17%" width="75%" height="1%" fill="#475569" />
                <rect x="10%" y="19%" width="60%" height="1%" fill="#475569" />
                <rect x="10%" y="21%" width="80%" height="1%" fill="#475569" />
                <rect x="10%" y="23%" width="70%" height="1%" fill="#475569" />
                
                {/* Table Header */}
                <rect x="10%" y="30%" width="80%" height="3%" fill="#cbd5e1" />
                {/* Table Rows */}
                <line x1="10%" y1="35%" x2="90%" y2="35%" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="10%" y1="40%" x2="90%" y2="40%" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="10%" y1="45%" x2="90%" y2="45%" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="10%" y1="55%" x2="90%" y2="55%" stroke="#cbd5e1" strokeWidth="1" />
                
                {/* Column lines */}
                <line x1="30%" y1="30%" x2="30%" y2="55%" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="50%" y1="30%" x2="50%" y2="55%" stroke="#cbd5e1" strokeWidth="1" />
                <line x1="70%" y1="30%" x2="70%" y2="55%" stroke="#cbd5e1" strokeWidth="1" />

                {/* Footer Section (Liability) */}
                <rect x="10%" y="75%" width="30%" height="2%" fill="#000" />
                <rect x="10%" y="78%" width="80%" height="1%" fill="#475569" />
                <rect x="10%" y="80%" width="60%" height="1%" fill="#475569" />

            </svg>

            {/* --- OVERLAY LAYER --- */}
            {heatmap.overlays.map(overlay => {
                const entity = getEntity(overlay.entityId);
                if (!entity) return null;

                const isHovered = hoveredEntity === entity.id;
                const isDiverged = entity.status === 'diverged';
                const isMemory = entity.memoryHit;

                // Color Logic
                let borderColor = isDiverged ? 'border-rose-500' : (isMemory ? 'border-fuchsia-500' : 'border-cyan-500');
                let bgColor = isDiverged ? 'bg-rose-500/20' : (isMemory ? 'bg-fuchsia-500/10' : 'bg-cyan-500/10');
                let shadow = isHovered 
                    ? (isDiverged ? 'shadow-[0_0_20px_rgba(244,63,94,0.5)]' : (isMemory ? 'shadow-[0_0_20px_rgba(217,70,239,0.5)]' : 'shadow-[0_0_20px_rgba(6,182,212,0.5)]'))
                    : '';

                return (
                    <div
                        key={overlay.entityId}
                        onMouseEnter={() => setHoveredEntity(entity.id)}
                        onMouseLeave={() => setHoveredEntity(null)}
                        className={`absolute border-2 transition-all duration-300 cursor-pointer ${borderColor} ${bgColor} ${shadow} flex items-start justify-end group`}
                        style={{
                            left: `${overlay.rect.x}%`,
                            top: `${overlay.rect.y}%`,
                            width: `${overlay.rect.w}%`,
                            height: `${overlay.rect.h}%`,
                            zIndex: isHovered ? 50 : 10
                        }}
                    >
                        {/* Status Pin */}
                        <div className={`absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-white border-2 bg-slate-900 ${borderColor} transition-transform ${isHovered ? 'scale-110' : 'scale-90'}`}>
                            {isDiverged ? <AlertTriangle size={12} /> : (isMemory ? <Brain size={12} /> : <CheckCircle2 size={12} />)}
                        </div>

                        {/* --- TOOLTIP (The Mirror's Reflection) --- */}
                        <div className={`
                            absolute left-full top-0 ml-4 w-72 bg-slate-900/95 backdrop-blur border border-slate-700 rounded-lg shadow-2xl p-4 text-left pointer-events-none transition-all duration-200
                            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}
                        `} style={{ zIndex: 100 }}>
                            {/* Entity Header */}
                            <div className="flex items-center justify-between mb-2 border-b border-slate-700 pb-2">
                                <span className={`font-mono text-xs font-bold uppercase ${isDiverged ? 'text-rose-400' : (isMemory ? 'text-fuchsia-400' : 'text-cyan-400')}`}>
                                    {entity.type} ENTITY
                                </span>
                                <span className="text-[10px] text-slate-500 font-mono">ID: {entity.id}</span>
                            </div>

                            {/* Main Value */}
                            <div className="mb-3">
                                <div className="text-white font-bold font-mono text-lg">{entity.name}</div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl font-bold text-white">{entity.value}</span>
                                    <span className="text-sm text-slate-500">{entity.unit}</span>
                                </div>
                                <div className="text-xs text-slate-400 mt-1 italic">{entity.description}</div>
                            </div>

                            {/* Provenance Stats */}
                            <div className="space-y-2 text-xs font-mono">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Confidence</span>
                                    <span className={`font-bold ${entity.confidence > 0.9 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                        {(entity.confidence * 100).toFixed(1)}%
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Consensus</span>
                                    <span className="text-white flex items-center gap-1">
                                        <GitMerge size={10} /> {entity.sources.length} Models
                                    </span>
                                </div>
                                {entity.memoryHit && (
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Memory Match</span>
                                        <span className="text-fuchsia-400 font-bold flex items-center gap-1">
                                            <Brain size={10} /> {(entity.memorySimilarity! * 100).toFixed(0)}%
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Source Details */}
                            <div className="mt-3 pt-2 border-t border-slate-700">
                                <div className="text-[10px] text-slate-500 uppercase mb-1">Source Anchors</div>
                                {entity.sources.map((src, i) => (
                                    <div key={i} className="flex justify-between text-[10px] text-slate-400 mb-1">
                                        <span>{src.model}</span>
                                        <span className="text-slate-500 truncate max-w-[120px]">{src.layout?.description}</span>
                                    </div>
                                ))}
                            </div>

                            {isDiverged && (
                                <div className="mt-3 bg-rose-950/50 border border-rose-500/30 p-2 rounded">
                                    <div className="flex items-center gap-2 text-rose-400 text-xs font-bold mb-1">
                                        <AlertTriangle size={12} /> DIVERGENCE DETECTED
                                    </div>
                                    <div className="text-[10px] text-rose-300">
                                        Models disagree on value (1050 vs 105). Human review recommended.
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
         </div>
      </div>
    </div>
  );
};

export default HeatMirror;
