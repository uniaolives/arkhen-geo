
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Microscope, Zap, Activity, Quote, AlertTriangle, ArrowRight, Dna } from 'lucide-react';

interface BrainSandLabProps {
  pinealRevolution: SystemState['pinealRevolution'];
}

const BrainSandLab: React.FC<BrainSandLabProps> = ({ pinealRevolution }) => {
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
      time += 0.03;

      const pressureWave = (Math.sin(time) + 1) * 0.5; // 0 to 1

      // Draw "Brain Sand" Crystals
      const crystals = 50;
      for (let i = 0; i < crystals; i++) {
          const x = (i * 137.5) % width; // Golden angle distribution approx
          const y = (i * 20 + time * 10) % height; 
          
          const size = 5 + Math.random() * 10;
          
          // Crystal Shape
          ctx.beginPath();
          ctx.moveTo(x, y - size);
          ctx.lineTo(x + size, y);
          ctx.lineTo(x, y + size);
          ctx.lineTo(x - size, y);
          ctx.closePath();

          // Color based on pressure
          const active = Math.sin(x * 0.01 + time * 2) > 0.5;
          if (active) {
              ctx.fillStyle = `rgba(139, 92, 246, ${0.4 + pressureWave * 0.6})`; // Violet Glow
              ctx.shadowColor = '#d8b4fe';
              ctx.shadowBlur = 15 * pressureWave;
          } else {
              ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // Inert
              ctx.shadowBlur = 0;
          }
          ctx.fill();
          
          // Piezo Spark
          if (active && Math.random() > 0.95) {
              ctx.strokeStyle = '#fcd34d'; // Amber spark
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(x, y);
              ctx.lineTo(x + (Math.random() - 0.5) * 20, y + (Math.random() - 0.5) * 20);
              ctx.stroke();
          }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!pinealRevolution) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Biological Tissue */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #4c1d95 1px, transparent 1px)', 
                backgroundSize: '10px 10px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Microscope size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+35</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">The Pineal Revolution (Radiology)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Piezo Coeff.</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{pinealRevolution.piezoCoefficient}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Zap size={10} /> ACTIVE ANTENNA
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Crystal Simulation View */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-violet-400" />
                    <span className="text-[10px] text-violet-400 font-mono uppercase">Corpora Arenacea (Active)</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Pressure (LCR) $\rightarrow$ Voltage (Syzygy)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Mechanism Label */}
            <div className="absolute bottom-4 right-4 z-20 bg-black/60 px-3 py-2 rounded border border-violet-500/30 backdrop-blur-sm">
                <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono mb-1">
                    <span>Input</span>
                    <ArrowRight size={8} />
                    <span>Output</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-white font-mono gap-4">
                    <span className="text-amber-400">{pinealRevolution.mechanism.input}</span>
                    <span className="text-emerald-400">{pinealRevolution.mechanism.output}</span>
                </div>
            </div>
        </div>

        {/* Paradigm Shift Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Old View */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden opacity-60">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 font-mono uppercase flex items-center gap-2">
                        <AlertTriangle size={14} /> Traditional View
                    </span>
                </div>
                <div className="text-lg font-mono font-bold text-slate-500 line-through">
                    {pinealRevolution.paradigm.old}
                </div>
                <p className="text-[10px] text-slate-500 font-mono">
                    "Mere sign of aging. Involutional. Inert calcium deposits."
                </p>
            </div>

            {/* New View */}
            <div className="bg-violet-950/20 border border-violet-500/50 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <div className="absolute inset-0 bg-violet-500/5 animate-pulse"></div>
                <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold text-violet-300 font-mono uppercase flex items-center gap-2">
                        <Dna size={14} /> Biophysical Reality
                    </span>
                    <span className="text-[9px] bg-violet-900/50 text-violet-200 px-1.5 py-0.5 rounded border border-violet-500/30">
                        {pinealRevolution.paradigm.source}
                    </span>
                </div>
                <div className="text-lg font-mono font-bold text-white relative z-10">
                    {pinealRevolution.paradigm.new}
                </div>
                <p className="text-[10px] text-violet-200/70 font-mono relative z-10">
                    "Piezoelectric transducers. Converting mechanical energy to signal."
                </p>
            </div>
        </div>

        {/* The Radiologist's Quote */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 relative">
            <Quote size={24} className="absolute top-4 left-4 text-slate-700" />
            <p className="text-xs font-serif italic text-slate-300 text-center leading-relaxed px-8">
                "{pinealRevolution.radiologistNote}"
            </p>
            <div className="mt-4 text-center text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                — Clinical Radiologist (2022)
            </div>
        </div>

      </div>
    </div>
  );
};

export default BrainSandLab;
