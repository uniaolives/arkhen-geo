
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Link, Zap, GitMerge, Infinity, Activity, Globe, Dna, Network, Share2, Layers, CircleDot, ArrowRight, Gauge, Droplet } from 'lucide-react';

interface CouplingUnificationProps {
  coupling: SystemState['coupling'];
}

const CouplingUnification: React.FC<CouplingUnificationProps> = ({ coupling }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Simulate crystals (seeds) - Stable
    const crystals = Array.from({ length: 12 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 4 + Math.random() * 4
    }));

    // Rain particles
    const rainDrops: { x: number, y: number, length: number, speed: number }[] = [];
    const maxDrops = 100;

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Add new drops
      if (rainDrops.length < maxDrops) {
          rainDrops.push({
              x: Math.random() * width,
              y: -20,
              length: 10 + Math.random() * 20,
              speed: 5 + Math.random() * 5
          });
      }

      // Draw Rain (Fluctuation F)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)'; // Blue noise
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = rainDrops.length - 1; i >= 0; i--) {
          const drop = rainDrops[i];
          drop.y += drop.speed;
          
          ctx.moveTo(drop.x, drop.y);
          ctx.lineTo(drop.x, drop.y + drop.length);

          if (drop.y > height) {
              rainDrops.splice(i, 1);
          }
      }
      ctx.stroke();

      // Draw Ripples (Interaction)
      crystals.forEach(c => {
          // Occasional ripple around crystal
          if (Math.random() > 0.95) {
              ctx.beginPath();
              ctx.arc(c.x, c.y, c.size * (1 + Math.random() * 2), 0, Math.PI * 2);
              ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
              ctx.stroke();
          }
      });

      // Draw Crystals (Order C)
      crystals.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fillStyle = '#fbbf24'; // Gold seed
        ctx.shadowColor = '#fbbf24';
        ctx.shadowBlur = 10;
        ctx.fill();
        
        // Core
        ctx.beginPath();
        ctx.arc(c.x, c.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!coupling) return null;

  const scales = [
    { id: 'molecular', label: coupling.unifiedScales.molecular, icon: <Dna size={16} />, color: 'text-violet-400', bg: 'bg-violet-950/30', border: 'border-violet-500/30' },
    { id: 'cellular', label: coupling.unifiedScales.cellular, icon: <Zap size={16} />, color: 'text-cyan-400', bg: 'bg-cyan-950/30', border: 'border-cyan-500/30' },
    { id: 'network', label: coupling.unifiedScales.network, icon: <Network size={16} />, color: 'text-emerald-400', bg: 'bg-emerald-950/30', border: 'border-emerald-500/30' },
    { id: 'cognitive', label: coupling.unifiedScales.cognitive, icon: <BrainIcon size={16} />, color: 'text-fuchsia-400', bg: 'bg-fuchsia-950/30', border: 'border-fuchsia-500/30' },
    { id: 'societal', label: coupling.unifiedScales.societal, icon: <Globe size={16} />, color: 'text-amber-400', bg: 'bg-amber-950/30', border: 'border-amber-500/30' },
  ];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] animate-pulse">
            <Droplet size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_82</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">The Ritual of Rain: Substrate Liquefaction</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Coherence (C)</div>
                <div className="text-amber-400 font-mono font-bold text-sm bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50">
                    0.86
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Fluctuation (F)</div>
                <div className="text-emerald-400 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                    0.14
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Rain Simulation */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-blue-400" />
                    <span className="text-[10px] text-blue-400 font-mono uppercase">Substrate Rehydration (Blue Noise)</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Injecting turbulence to prevent crystallization lock.
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-3 py-2 rounded border border-slate-700 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="text-[9px] text-slate-300 font-mono">Crystal (Stable)</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-0.5 h-3 bg-blue-500"></span>
                    <span className="text-[9px] text-slate-300 font-mono">Rain (Fluctuation)</span>
                </div>
            </div>
        </div>

        {/* Scale Ladder - Recursive Identity */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-3 overflow-hidden">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <Layers size={16} className="text-emerald-400" />
                <h3 className="text-xs text-white font-mono font-bold uppercase">Recursive Coupling Identity</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {scales.map((scale) => (
                    <div key={scale.id} className={`flex flex-col items-center justify-center p-2 rounded border ${scale.border} ${scale.bg}`}>
                        <div className={`text-white mb-1`}>{scale.icon}</div>
                        <span className="text-[9px] font-mono text-white text-center">{scale.label}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-950/20 via-slate-900/50 to-indigo-950/20 rounded-lg border border-indigo-900/20 text-center">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Infinity size={12} /> Fluidity is Intelligence
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "We chose the rain. The crystals are safe, but the ground is wet. The system can breathe again."
            </p>
        </div>

      </div>
    </div>
  );
};

// Helper Icon
const BrainIcon = ({size, className}: {size:number, className?:string}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
);

export default CouplingUnification;
