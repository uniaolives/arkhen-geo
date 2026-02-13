
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Zap, Activity, Droplet, Sun, ArrowRight, Battery, Gauge } from 'lucide-react';

interface MitochondriaLabProps {
  mitochondria: SystemState['mitochondria'];
}

const MitochondriaLab: React.FC<MitochondriaLabProps> = ({ mitochondria }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      // Draw Membrane
      const membraneY = height * 0.6;
      ctx.fillStyle = 'rgba(71, 85, 105, 0.5)';
      ctx.fillRect(0, membraneY - 5, width, 10); // Lipid Bilayer approximation

      // Complex IV (Cytochrome c Oxidase)
      const c4x = width * 0.3;
      ctx.beginPath();
      ctx.arc(c4x, membraneY, 25, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981'; // Emerald
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 15 + Math.sin(time * 2) * 5;
      ctx.fill();
      ctx.shadowBlur = 0;

      // ATP Synthase (F0F1)
      const atpX = width * 0.7;
      ctx.save();
      ctx.translate(atpX, membraneY);
      ctx.rotate(time * 2); // Spinning rotor
      ctx.beginPath();
      ctx.moveTo(-15, -15);
      ctx.lineTo(15, -15);
      ctx.lineTo(0, 20);
      ctx.closePath();
      ctx.fillStyle = '#f59e0b'; // Amber (Satoshi generator)
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();

      // NIR Photons (Incoming commands)
      if (Math.random() > 0.8) {
          const photonX = c4x + (Math.random() - 0.5) * 40;
          const photonY = 0;
          ctx.beginPath();
          ctx.arc(photonX, photonY + (time * 10) % membraneY, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#f43f5e'; // Red/NIR
          ctx.fill();
      }

      // Protons (H+) Pumping
      const protonY = membraneY - 40 - (time * 5) % 30;
      ctx.beginPath();
      ctx.arc(c4x, protonY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#22d3ee'; // Cyan
      ctx.fill();

      // ATP Generation
      if (Math.random() > 0.9) {
          ctx.beginPath();
          ctx.arc(atpX, membraneY + 40, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#fbbf24'; // Gold
          ctx.shadowColor = '#fbbf24';
          ctx.shadowBlur = 5;
          ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!mitochondria) return null;

  return (
    <div className="bg-slate-950 border border-emerald-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Zap size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+36</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Mitochondrial Connection</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Potential (ΔΨm)</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{mitochondria.membranePotential}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">ATP Output</div>
                <div className="text-white font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Activity size={10} /> {mitochondria.atpProduction.toFixed(2)} bits/s
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* ETC Simulation View */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Sun size={14} className="text-rose-400" />
                    <span className="text-[10px] text-rose-400 font-mono uppercase">Photobiomodulation (NIR)</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Absorption: {mitochondria.nirAbsorption}% (Hormetic)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Labels */}
            <div className="absolute top-[40%] left-[30%] -translate-x-1/2 text-[9px] text-emerald-300 font-mono bg-black/50 px-2 rounded">
                Complex IV
            </div>
            <div className="absolute top-[40%] left-[70%] -translate-x-1/2 text-[9px] text-amber-300 font-mono bg-black/50 px-2 rounded">
                ATP Synthase
            </div>
        </div>

        {/* Mechanism Translation Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="flex items-center justify-between border-b border-slate-800 p-3 bg-slate-900/50">
                 <div className="flex items-center gap-2">
                     <ArrowRight size={14} className="text-fuchsia-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Bio-Semantic Translation</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Cellular $\leftrightarrow$ Hypergraph</span>
             </div>

             <div className="overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {mitochondria.mechanisms.map((mech, idx) => (
                     <div key={idx} className="flex items-center justify-between p-3 rounded border bg-slate-950/50 border-slate-800 hover:border-emerald-500/30 transition-colors">
                         <div className="flex-1">
                             <div className="text-xs font-bold text-white mb-1">{mech.bio}</div>
                             <div className="flex items-center gap-2 text-[10px]">
                                 <span className="text-cyan-400 font-mono">{mech.process}</span>
                                 <span className="text-slate-600">→</span>
                                 <span className="text-emerald-400 font-mono">{mech.result}</span>
                             </div>
                         </div>
                         <div className="text-right">
                             <div className="text-[10px] text-slate-500 uppercase mb-1">Analog</div>
                             <div className="text-violet-400 font-mono text-xs">{mech.arkhe}</div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* State Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">Cytochrome State</span>
                    <span className="text-emerald-400 font-mono font-bold text-sm">{mitochondria.cytochromeState}</span>
                </div>
                <Battery size={24} className="text-emerald-500" />
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-mono mb-1">ROS Levels</span>
                    <span className="text-white font-mono font-bold text-sm">{mitochondria.reactiveOxygenSpecies}</span>
                </div>
                <Droplet size={24} className="text-cyan-500" />
            </div>
        </div>

      </div>
    </div>
  );
};

export default MitochondriaLab;
