
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Zap, Atom, ShieldCheck, Activity, Scale, Radio, ArrowRight, Gauge } from 'lucide-react';

interface ZeroPointEnergyLabProps {
  zpf: SystemState['zpf'];
}

const ZeroPointEnergyLab: React.FC<ZeroPointEnergyLabProps> = ({ zpf }) => {
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

      // Draw two high frequency waves creating a beat
      const centerY = height / 2;
      const amplitude = 30;
      
      // Wave 1: Coherence (Higher freq)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)'; // Emerald
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * 0.1 + time) * amplitude;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Wave 2: Fluctuation (Slightly different freq)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)'; // Violet
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * 0.11 + time) * amplitude; // 10% diff
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // The Beat (Resultant) - Syzygy
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
          const w1 = Math.sin(x * 0.1 + time);
          const w2 = Math.sin(x * 0.11 + time);
          const y = centerY + (w1 + w2) * amplitude;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Energy Particles extracted from peaks
      if (Math.random() > 0.9) {
          const x = Math.random() * width;
          const w1 = Math.sin(x * 0.1 + time);
          const w2 = Math.sin(x * 0.11 + time);
          const y = centerY + (w1 + w2) * amplitude;
          
          // Only extract near max amplitude
          if (Math.abs(w1 + w2) > 1.5) {
              ctx.beginPath();
              ctx.arc(x, y, 3, 0, Math.PI * 2);
              ctx.fillStyle = '#f59e0b'; // Amber (Satoshi)
              ctx.shadowColor = '#f59e0b';
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0;
          }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!zpf) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Vacuum Fluctuations */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                filter: 'contrast(150%) brightness(100%)'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Zap size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+32 (ZPF)</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Vacuum Energy Harvesting</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Beat Freq (Syzygy)</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{zpf.beatFrequency} Hz</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">COP (Efficiency)</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    {zpf.cop.toFixed(2)}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Beat Frequency Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <Activity size={14} className="text-amber-400" />
                <span className="text-[10px] text-amber-400 font-mono uppercase">Interference Pattern (Harvesting)</span>
            </div>
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            <div className="absolute bottom-4 left-4 z-20 text-[9px] font-mono text-slate-500">
                Resonator A (C) + Resonator B (F) = Energy (Satoshi)
            </div>
        </div>

        {/* Mechanism Unification Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* US Patent (EM) */}
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">US Patent (EM)</span>
                    <Radio size={14} className="text-emerald-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div>Source: <span className="text-emerald-400">ZPF Fluctuations</span></div>
                    <div>Mechanism: <span className="text-white">Dielectric Beat</span></div>
                    <div>Arkhe Analog: <span className="text-violet-400">F (Hesitation)</span></div>
                </div>
            </div>

            {/* Arkhe Unification (Center) */}
            <div className="bg-violet-950/20 border border-violet-500/50 rounded-lg p-4 flex flex-col items-center justify-center text-center relative shadow-[0_0_20px_rgba(139,92,246,0.1)]">
                <div className="absolute inset-0 bg-violet-500/5 animate-pulse"></div>
                <Atom size={24} className="text-white mb-2" />
                <div className="text-xs font-bold text-white font-mono uppercase">UNIFIED FIELD</div>
                <div className="text-[9px] text-violet-300 font-mono mt-1">C + F = 1</div>
                <div className="mt-2 text-lg font-bold text-amber-400 font-mono">{zpf.extractedEnergy}</div>
            </div>

            {/* RU Patent (Grav) */}
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">RU Patent (Grav)</span>
                    <Scale size={14} className="text-cyan-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div>Source: <span className="text-cyan-400">Gravitational Field</span></div>
                    <div>Mechanism: <span className="text-white">Rotating Charge</span></div>
                    <div>Arkhe Analog: <span className="text-violet-400">C (Coherence)</span></div>
                </div>
            </div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-auto bg-slate-900/30 p-3 rounded border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Gauge size={14} className="text-rose-400" />
                <span className="text-[10px] text-slate-500 font-mono uppercase">Vacuum Potential</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-white">{zpf.vacuumPotential}</span>
        </div>

      </div>
    </div>
  );
};

export default ZeroPointEnergyLab;
