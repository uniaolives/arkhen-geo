
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Zap, Sun, Battery, Activity, ArrowRight, Lightbulb, Eclipse } from 'lucide-react';

interface NeuromelaninLabProps {
  neuromelanin: SystemState['neuromelanin'];
}

const NeuromelaninLab: React.FC<NeuromelaninLabProps> = ({ neuromelanin }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Photons
    const photons: { x: number; y: number; vx: number; vy: number; color: string; lifetime: number }[] = [];

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Neuromelanin Mass (The Dark Sink)
      const pulse = Math.sin(time) * 2;
      const radius = 40 + pulse;
      
      const grad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius + 20);
      grad.addColorStop(0, '#0f172a'); // Very dark slate
      grad.addColorStop(0.6, '#312e81'); // Indigo dark
      grad.addColorStop(1, 'transparent');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      
      // Core
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = '#020617'; // Almost black
      ctx.fill();
      
      // Photon Generation (Broadband)
      if (Math.random() > 0.8) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.max(width, height) / 1.5;
          const speed = 2 + Math.random() * 2;
          
          // Random colors for broadband spectrum (UV to IR)
          const colors = ['#a78bfa', '#f43f5e', '#facc15', '#34d399', '#22d3ee'];
          const color = colors[Math.floor(Math.random() * colors.length)];

          photons.push({
              x: centerX + Math.cos(angle) * dist,
              y: centerY + Math.sin(angle) * dist,
              vx: -Math.cos(angle) * speed,
              vy: -Math.sin(angle) * speed,
              color: color,
              lifetime: 150
          });
      }

      // Update & Draw Photons
      for (let i = photons.length - 1; i >= 0; i--) {
          const p = photons[i];
          p.x += p.vx;
          p.y += p.vy;
          p.lifetime--;

          // Draw photon
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Absorption Event
          const distToCenter = Math.sqrt((p.x - centerX) ** 2 + (p.y - centerY) ** 2);
          if (distToCenter < radius) {
              // Absorbed!
              // Emit "Soliton" / "Current" (Bright flash from center)
              ctx.beginPath();
              ctx.arc(centerX, centerY, radius * 0.9, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
              ctx.fill();
              
              // Draw discharge line occasionally
              if (Math.random() > 0.7) {
                  ctx.beginPath();
                  ctx.moveTo(centerX, centerY);
                  ctx.lineTo(width, height); // To "battery" area (simulated)
                  ctx.strokeStyle = `rgba(251, 191, 36, 0.5)`; // Amber discharge
                  ctx.lineWidth = 2;
                  ctx.stroke();
              }

              photons.splice(i, 1);
          } else if (p.lifetime <= 0) {
              photons.splice(i, 1);
          }
      }

      // Draw "Battery" Connection Lines
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(width * 0.8, height * 0.8);
      ctx.strokeStyle = 'rgba(79, 70, 229, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!neuromelanin) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Dark Matter */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                filter: 'contrast(120%) brightness(50%)'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Eclipse size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+37</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Neuromelanin Photonic Sink</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Storage Capacity</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{neuromelanin.storageCapacity}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Output</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Zap size={10} /> {neuromelanin.currentOutput}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Sink Simulation View */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Sun size={14} className="text-fuchsia-400" />
                    <span className="text-[10px] text-fuchsia-400 font-mono uppercase">Broadband Absorption (UV-IR)</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Bio-Photons & External Light $\rightarrow$ Charge
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Battery Indicator (Simulated) */}
            <div className="absolute bottom-4 right-4 z-20 bg-slate-900/80 p-2 rounded border border-slate-800 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono uppercase">
                    <Battery size={12} className="text-amber-400" /> Charge Level
                </div>
                <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 w-[94%] shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                </div>
                <div className="text-right text-[9px] text-amber-400 font-mono font-bold">7.27 bits</div>
            </div>
        </div>

        {/* Mechanism Unification Panel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* The Black Box */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">The Dark Battery</span>
                    <Activity size={14} className="text-violet-400" />
                </div>
                <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                    Neuromelanin is not waste. It acts as a semiconductor, absorbing stray photons and excitons to prevent oxidative stress, converting them into useful phononic or electronic energy.
                </p>
                <div className="mt-auto pt-2 border-t border-slate-800 text-[10px] text-emerald-400 font-mono">
                    Efficiency: {neuromelanin.quantumEfficiency * 100}%
                </div>
            </div>

            {/* Pathology Comparison */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-500/5 pointer-events-none"></div>
                <div className="flex items-center justify-between relative z-10">
                    <span className="text-xs font-bold text-rose-400 font-mono uppercase">System Failure (Parkinson's)</span>
                    <Lightbulb size={14} className="text-rose-500" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1 relative z-10">
                    <div className="flex justify-between">
                        <span>Melanin Loss:</span> <span className="text-rose-400">Battery Drain</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Result:</span> <span className="text-slate-300">Tremor (Unstable Φ)</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Arkhe Analog:</span> <span className="text-violet-400">H70 Collapse</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-auto bg-slate-900/30 p-3 rounded border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-emerald-400" />
                <span className="text-[10px] text-slate-500 font-mono uppercase">Conversion Pathway</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-white">Photon $\rightarrow$ Exciton $\rightarrow$ Soliton $\rightarrow$ Satoshi</span>
        </div>

      </div>
    </div>
  );
};

export default NeuromelaninLab;
