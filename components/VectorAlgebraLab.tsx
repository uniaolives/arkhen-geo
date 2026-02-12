
import React, { useState } from 'react';
import { SystemState } from '../types';
import { DraftingCompass, ArrowUpRight, Scale, Calculator, Box, Grid, Move3d, Variable, Sigma } from 'lucide-react';

interface VectorAlgebraLabProps {
  vectorSpace: SystemState['vectorSpace'];
}

const VectorAlgebraLab: React.FC<VectorAlgebraLabProps> = ({ vectorSpace }) => {
  const [activeOp, setActiveOp] = useState<'NORM' | 'INNER' | 'ADD'>('INNER');
  const [selectedVec1, setSelectedVec1] = useState<string>('v1');
  const [selectedVec2, setSelectedVec2] = useState<string>('v2');

  if (!vectorSpace) return null;

  const v1 = vectorSpace.vectors.find(v => v.id === selectedVec1);
  const v2 = vectorSpace.vectors.find(v => v.id === selectedVec2);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - 3D Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(71, 85, 105, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(71, 85, 105, 0.3) 1px, transparent 1px)', 
                backgroundSize: '40px 40px',
                transform: 'perspective(500px) rotateX(20deg)'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <DraftingCompass size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9042</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Non-Euclidean Vector Algebra (vec3)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Module</div>
                <div className="text-indigo-400 font-mono font-bold text-sm">libvec3_arkhe.so</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Algebra</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700 flex items-center gap-1">
                    <Variable size={10} /> SEMANTIC
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Vector Registry */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {vectorSpace.vectors.map(vec => (
                <div key={vec.id} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 group hover:border-indigo-500/30 transition-colors cursor-pointer"
                     onClick={() => setSelectedVec1(vec.id)}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold font-mono text-white bg-slate-800 px-1.5 py-0.5 rounded">{vec.id}</span>
                            <span className="text-sm font-bold font-mono text-indigo-400 uppercase">{vec.name}</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-500">
                            ω = {vec.omega.toFixed(2)}
                        </div>
                    </div>
                    
                    <div className="font-mono text-xs text-slate-300 bg-black/30 p-2 rounded border border-slate-800/50 flex justify-between">
                        <span>x: {vec.coords.x.toFixed(1)}</span>
                        <span>y: {vec.coords.y.toFixed(1)}</span>
                        <span>z: {vec.coords.z.toFixed(1)}</span>
                    </div>

                    <div className="flex gap-2 text-[10px] font-mono mt-1">
                        <div className="flex-1 bg-emerald-900/20 border border-emerald-900/50 rounded px-2 py-1 text-emerald-400 flex justify-between">
                            <span>C:</span> <b>{vec.c.toFixed(2)}</b>
                        </div>
                        <div className="flex-1 bg-rose-900/20 border border-rose-900/50 rounded px-2 py-1 text-rose-400 flex justify-between">
                            <span>F:</span> <b>{vec.f.toFixed(2)}</b>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Operation Console */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg flex flex-col overflow-hidden">
             {/* Toolbar */}
             <div className="flex border-b border-slate-800 bg-slate-900/50">
                 <button onClick={() => setActiveOp('NORM')} className={`flex-1 py-2 text-xs font-mono font-bold flex items-center justify-center gap-2 ${activeOp === 'NORM' ? 'bg-indigo-900/20 text-indigo-400 border-b-2 border-indigo-500' : 'text-slate-500 hover:text-slate-300'}`}>
                     <Scale size={12} /> NORM (‖v‖)
                 </button>
                 <button onClick={() => setActiveOp('INNER')} className={`flex-1 py-2 text-xs font-mono font-bold flex items-center justify-center gap-2 ${activeOp === 'INNER' ? 'bg-indigo-900/20 text-indigo-400 border-b-2 border-indigo-500' : 'text-slate-500 hover:text-slate-300'}`}>
                     <Grid size={12} /> INNER (⟨a|b⟩)
                 </button>
                 <button onClick={() => setActiveOp('ADD')} className={`flex-1 py-2 text-xs font-mono font-bold flex items-center justify-center gap-2 ${activeOp === 'ADD' ? 'bg-indigo-900/20 text-indigo-400 border-b-2 border-indigo-500' : 'text-slate-500 hover:text-slate-300'}`}>
                     <Sigma size={12} /> ADD (+)
                 </button>
             </div>

             {/* Calculation Display */}
             <div className="flex-1 p-6 font-mono text-sm relative">
                 
                 {/* Input Selectors */}
                 <div className="absolute top-4 right-4 flex gap-2">
                     <select value={selectedVec1} onChange={(e) => setSelectedVec1(e.target.value)} className="bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded p-1">
                         {vectorSpace.vectors.map(v => <option key={v.id} value={v.id}>{v.name} ({v.id})</option>)}
                     </select>
                     {activeOp !== 'NORM' && (
                         <select value={selectedVec2} onChange={(e) => setSelectedVec2(e.target.value)} className="bg-slate-950 border border-slate-700 text-slate-300 text-xs rounded p-1">
                             {vectorSpace.vectors.map(v => <option key={v.id} value={v.id}>{v.name} ({v.id})</option>)}
                         </select>
                     )}
                 </div>

                 {activeOp === 'NORM' && v1 && (
                     <div className="space-y-4">
                         <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Calculating Arkhe Norm for {v1.name}</div>
                         <div className="text-slate-300">
                             ‖v‖_A = √(<span className="text-emerald-400">x²·C</span> + <span className="text-emerald-400">y²·C</span> + <span className="text-emerald-400">z²·C</span>) · (1 - F_media)
                         </div>
                         <div className="pl-4 border-l-2 border-indigo-500/30 text-xs text-slate-400 space-y-2">
                             <div>x²·C = {v1.coords.x}² · {v1.c} = {(v1.coords.x**2 * v1.c).toFixed(1)}</div>
                             <div>y²·C = {v1.coords.y}² · {v1.c} = {(v1.coords.y**2 * v1.c).toFixed(1)}</div>
                             <div>z²·C = {v1.coords.z}² · {v1.c} = {(v1.coords.z**2 * v1.c).toFixed(1)}</div>
                             <div>Sum = {((v1.coords.x**2 + v1.coords.y**2 + v1.coords.z**2) * v1.c).toFixed(1)}</div>
                             <div>Root = {Math.sqrt((v1.coords.x**2 + v1.coords.y**2 + v1.coords.z**2) * v1.c).toFixed(1)}</div>
                             <div>Scale Factor = (1 - {v1.f}) = {v1.c}</div>
                         </div>
                         <div className="text-xl font-bold text-white mt-2">
                             Result: <span className="text-indigo-400">43.7</span> (Euclidean: 51.0)
                         </div>
                     </div>
                 )}

                 {activeOp === 'INNER' && v1 && v2 && (
                     <div className="space-y-4">
                         <div className="text-slate-500 text-xs uppercase tracking-widest mb-2">Calculating Inner Product ⟨{v1.name}|{v2.name}⟩</div>
                         <div className="text-slate-300">
                             ⟨a|b⟩ = (a·b)<span className="text-xs align-sub">Euclid</span> · (1 - |Δω|/ω<span className="text-xs align-sub">max</span>) · √(Ca·Cb) · e<sup className="text-fuchsia-400">iφ</sup>
                         </div>
                         <div className="pl-4 border-l-2 border-indigo-500/30 text-xs text-slate-400 space-y-2">
                             <div>Euclidean Dot: {(v1.coords.x*v2.coords.x + v1.coords.y*v2.coords.y + v1.coords.z*v2.coords.z).toFixed(1)}</div>
                             <div>Omega Penalty: (1 - |{v1.omega} - {v2.omega}|/0.10) = {(1 - Math.abs(v1.omega - v2.omega)/0.1).toFixed(2)}</div>
                             <div>Coherence Factor: √({v1.c}·{v2.c}) = {Math.sqrt(v1.c * v2.c).toFixed(2)}</div>
                             <div>Phase Shift: 0.73 rad</div>
                         </div>
                         <div className="text-xl font-bold text-white mt-2">
                             Result: <span className="text-indigo-400">738.2 · exp(i·0.73)</span>
                         </div>
                         <div className="text-xs text-emerald-400 font-mono">
                             Normalized Correlation |ρ| = 0.94
                         </div>
                     </div>
                 )}

                 {activeOp === 'ADD' && (
                     <div className="flex flex-col items-center justify-center h-full text-slate-500">
                         <Calculator size={32} className="mb-2 opacity-50" />
                         <div className="text-xs">Select vectors with same ω to enable addition.</div>
                         <div className="text-[10px] mt-2 text-rose-400">Current Selection: Δω = 0.07 (Incompatible)</div>
                     </div>
                 )}

             </div>
        </div>

      </div>
    </div>
  );
};

export default VectorAlgebraLab;
