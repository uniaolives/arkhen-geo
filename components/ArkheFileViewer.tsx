
import React, { useState } from 'react';
import { SystemState } from '../types';
import { FileCode, Database, Layers, Play, Lock, Activity, Hexagon, Hash, Globe, Sun, Ghost, Key, Infinity } from 'lucide-react';

interface ArkheFileViewerProps {
  file: SystemState['arkheFile'];
}

const ArkheFileViewer: React.FC<ArkheFileViewerProps> = ({ file }) => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [resonanceActive, setResonanceActive] = useState(false);

  if (!file) return null;

  const handleResonance = () => {
      setResonanceActive(true);
      setTimeout(() => setResonanceActive(false), 3000);
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden font-mono">
      {/* Background Effect - Matrix Rain / Hex Dump */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(0deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)', 
                backgroundSize: '100% 20px' 
            }}>
      </div>

      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <FileCode size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">RFC-ARKHE-001</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Universal Seed Blueprint (*.arkhe)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Encoding</div>
                <div className="text-white font-mono font-bold text-sm">{file.encoding}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Size</div>
                <div className="text-emerald-400 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Infinity size={10} /> {file.size}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Hex Dump Visualizer */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-mono text-xs">
            <div className="flex items-center gap-2 mb-2 text-slate-500 uppercase tracking-widest border-b border-slate-800 pb-1">
                <Hash size={12} /> Phinary Header
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-4">
                <div className="text-slate-600 space-y-1">
                    <div>00000000</div>
                    <div>00000008</div>
                    <div>00000010</div>
                    <div>00000018</div>
                </div>
                <div className="space-y-1">
                    <div className="flex gap-2">
                        <span className="text-emerald-400 font-bold">16 18 03 39</span>
                        <span className="text-slate-400">DE AD BE EF</span>
                        <span className="text-slate-600 ml-4">[MAGIC_PHI] [ALIVE]</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-amber-400">00 00 07 27</span>
                        <span className="text-violet-400">00 00 01 44</span>
                        <span className="text-slate-600 ml-4">[SAT=7.27] [XTAL=144]</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-cyan-400">43 2B 46 3D</span>
                        <span className="text-cyan-400">31 00 00 00</span>
                        <span className="text-slate-600 ml-4">[AXIOM: C+F=1]</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-fuchsia-400">53 59 5A 59</span>
                        <span className="text-fuchsia-400">47 59 30 39</span>
                        <span className="text-slate-600 ml-4">[SYZYGY=0.984]</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Holographic Layer Stack */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center relative min-h-[300px]">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-slate-400 text-xs font-mono uppercase">
                <Layers size={14} /> Holographic Structure
            </div>

            <div className="relative w-64 h-64 perspective-[1000px]">
                {file.layers.map((layer, index) => {
                    const isActive = activeLayer === index;
                    const scale = 1 - (index * 0.15);
                    const translateZ = index * 40;
                    
                    return (
                        <div 
                            key={layer.id}
                            className={`absolute inset-0 rounded-full border-2 transition-all duration-500 cursor-pointer flex items-center justify-center
                                ${isActive ? 'bg-slate-900/90 shadow-[0_0_30px_currentColor] z-50' : 'bg-slate-950/40 hover:bg-slate-900/60 z-10'}
                                ${layer.color.replace('text-', 'border-')}
                            `}
                            style={{ 
                                transform: `scale(${scale}) translateZ(${translateZ}px) rotateX(60deg)`,
                                color: 'currentColor'
                            }}
                            onClick={() => setActiveLayer(isActive ? null : index)}
                        >
                            <span className={`transform -rotate-x-60 text-xs font-bold font-mono ${layer.color}`}>
                                {layer.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Layer Detail Overlay */}
            {activeLayer !== null && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-slate-700 p-4 rounded-lg w-80 shadow-2xl backdrop-blur animate-in slide-in-from-bottom-4">
                    <div className={`text-xs font-bold font-mono mb-1 ${file.layers[activeLayer].color}`}>
                        LAYER {activeLayer}: {file.layers[activeLayer].name}
                    </div>
                    <div className="text-[10px] text-slate-300 font-mono mb-2">
                        {file.layers[activeLayer].description}
                    </div>
                    <div className="text-[9px] text-slate-500 font-mono bg-black/30 p-2 rounded border border-white/5">
                        {file.layers[activeLayer].content}
                    </div>
                </div>
            )}
        </div>

        {/* Runtime Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-2">
                    <Lock size={12} /> Resonance Lock
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-mono font-bold text-white">{file.runtime.resonanceFreq}</span>
                    <button 
                        onClick={handleResonance}
                        disabled={resonanceActive}
                        className={`px-3 py-1.5 rounded text-[10px] font-bold font-mono uppercase transition-all
                            ${resonanceActive 
                                ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]' 
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'}
                        `}
                    >
                        {resonanceActive ? 'RESONATING...' : 'INITIATE'}
                    </button>
                </div>
                <div className="w-full bg-slate-800 h-1 mt-2 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-emerald-500 transition-all duration-3000 ease-out" 
                        style={{ width: resonanceActive ? '100%' : '0%' }}
                    ></div>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-2">
                    <Key size={12} /> Integrity Hash
                </div>
                <div className="text-sm font-mono text-emerald-400 truncate">
                    {file.runtime.integrityHash}
                </div>
                <div className="text-[9px] text-slate-600 mt-1 font-mono">
                    Verified against Satoshi Invariant (7.27)
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ArkheFileViewer;
