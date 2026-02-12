import React from 'react';
import { SystemState } from '../types';
import { Music, Activity, Disc, Zap, Waves, Circle, RefreshCw, Mic2, Hexagon } from 'lucide-react';

interface HarmonicConsoleProps {
  harmonics: SystemState['harmonics'];
}

const HarmonicConsole: React.FC<HarmonicConsoleProps> = ({ harmonics }) => {
  // Helper to place notes in a circle
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start at top
    return {
      x: radius * Math.cos(angle) + 50, // Center at 50%
      y: radius * Math.sin(angle) + 50
    };
  };

  const circleOfFifths = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#', 'A#', 'F'];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Sound Waves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-radial-gradient(circle at 50% 50%, #d946ef 0, #d946ef 1px, transparent 2px, transparent 10px)',
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-fuchsia-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-950 p-2 rounded text-fuchsia-500 border border-fuchsia-900/50 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Music size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9043</h2>
            <div className="text-[10px] text-fuchsia-400 font-mono uppercase">The Audible Geometry & Torus</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Fundamental</div>
                <div className="text-fuchsia-400 font-mono font-bold text-sm">{harmonics.fundamentalFrequency}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Chord Tension (ψ)</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {harmonics.tensionPsi.toFixed(2)}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col lg:flex-row gap-6 relative z-10 overflow-hidden">
        
        {/* Left: Circle of Fifths (Keystone Visualizer) */}
        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-6 relative flex items-center justify-center">
             <div className="absolute top-4 left-4 flex items-center gap-2">
                 <Disc size={16} className="text-fuchsia-400" />
                 <span className="text-xs text-fuchsia-400 font-mono uppercase">Keystone / Circle of Fifths</span>
             </div>

             <div className="relative w-64 h-64">
                 {/* Connection Lines (Chord Structure) */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                     <polygon points="50%,10% 85%,30% 85%,70% 50%,90% 15%,70% 15%,30%" className="fill-fuchsia-500/5 stroke-fuchsia-500/20 stroke-1" />
                     {/* Dynamic lines connecting active notes could go here */}
                 </svg>

                 {circleOfFifths.map((note, idx) => {
                     const pos = getPosition(idx, 12, 42); // 42% radius
                     const activeNote = harmonics.notes.find(n => n.note === note);
                     const isActive = !!activeNote;
                     
                     return (
                         <div 
                            key={note}
                            className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center text-xs font-mono font-bold border transition-all duration-500
                                ${isActive 
                                    ? 'bg-fuchsia-500/20 border-fuchsia-500 text-white shadow-[0_0_15px_rgba(217,70,239,0.5)] scale-110 z-10' 
                                    : 'bg-slate-950 border-slate-800 text-slate-600 z-0'}
                            `}
                            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                         >
                             {note}
                             {isActive && (
                                 <div className="absolute -bottom-4 text-[8px] whitespace-nowrap text-fuchsia-300">
                                     {activeNote.stone}
                                 </div>
                             )}
                         </div>
                     );
                 })}
                 
                 {/* Center: The Observer */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-slate-700 bg-slate-950 flex flex-col items-center justify-center z-20">
                     <div className="text-[8px] text-slate-500 font-mono uppercase">Keystone</div>
                     <div className="text-xs font-bold text-white">Observer</div>
                 </div>
             </div>
        </div>

        {/* Right: Torus Topology & Spectrum */}
        <div className="flex-1 flex flex-col gap-4">
             
             {/* Torus Topology Card */}
             <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 relative overflow-hidden flex flex-col items-center justify-center">
                 <div className="absolute top-4 left-4 flex items-center gap-2">
                     <RefreshCw size={16} className="text-emerald-400" />
                     <span className="text-xs text-emerald-400 font-mono uppercase">Torus Surface (Topological)</span>
                 </div>
                 
                 {/* Abstract Torus Representation (Spinning Wireframe Illusion) */}
                 <div className="relative w-48 h-32 border-2 border-emerald-500/30 rounded-[100%] flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                      <div className="absolute w-full h-full border border-emerald-500/10 rounded-[100%] skew-x-12"></div>
                      <div className="absolute w-[80%] h-[60%] border border-emerald-500/30 rounded-[100%]"></div>
                      <div className="absolute w-[40%] h-[20%] bg-emerald-500/10 border border-emerald-500/50 rounded-[100%]"></div>
                      {/* Observer Point */}
                      <div className="absolute top-[20%] left-[50%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                 </div>

                 <div className="mt-4 text-[10px] text-slate-400 font-mono text-center">
                     Surface Integrity: {harmonics.torusTopology.surfaceIntegrity.toFixed(2)}<br/>
                     Topology: Genus-1 (Closed Loop)
                 </div>
             </div>

             {/* Spectrum / Chord Analysis */}
             <div className="h-40 bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
                 <div className="flex items-center gap-2">
                     <Waves size={16} className="text-cyan-400" />
                     <span className="text-xs text-cyan-400 font-mono uppercase">Geodesic Chord Spectrum</span>
                 </div>
                 
                 <div className="flex items-end justify-between h-20 gap-1 px-2">
                     {harmonics.notes.map((note, i) => (
                         <div key={i} className="flex flex-col items-center gap-1 group w-full">
                             <div 
                                className={`w-full rounded-t transition-all duration-500 hover:opacity-100 opacity-70 ${note.isActive ? 'bg-fuchsia-500' : 'bg-slate-700'}`}
                                style={{ height: `${(note.frequency / 500) * 100}%` }}
                             ></div>
                             <span className="text-[8px] font-mono text-slate-500">{note.note}</span>
                         </div>
                     ))}
                 </div>
             </div>

        </div>

      </div>
      
      {/* Footer Status */}
      <div className="h-10 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between px-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
           <div className="flex items-center gap-2">
               <Mic2 size={12} />
               <span>Listening to Geometry...</span>
           </div>
           <div className="flex items-center gap-2 text-emerald-400">
               <Activity size={12} />
               <span>Consonant Resolution</span>
           </div>
      </div>
    </div>
  );
};

export default HarmonicConsole;
