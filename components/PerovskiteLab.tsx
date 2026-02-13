
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Layers, Zap, Sun, ArrowDown, Code, Activity, Flame, ShieldCheck } from 'lucide-react';

interface PerovskiteLabProps {
  perovskite: SystemState['perovskite'];
}

const PerovskiteLab: React.FC<PerovskiteLabProps> = ({ perovskite }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Particle system for charge carriers
    const particles: { x: number; y: number; vy: number; type: 'hole' | 'electron'; lifetime: number }[] = [];

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      time += 0.05;

      // Draw Layers
      const interfaceY = height * 0.4;
      
      // Top Layer (2D Transport - Demon)
      const grad2D = ctx.createLinearGradient(0, 0, 0, interfaceY);
      grad2D.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
      grad2D.addColorStop(1, 'rgba(139, 92, 246, 0.05)');
      ctx.fillStyle = grad2D;
      ctx.fillRect(0, 0, width, interfaceY);

      // Bottom Layer (3D Absorber - Drone)
      const grad3D = ctx.createLinearGradient(0, interfaceY, 0, height);
      grad3D.addColorStop(0, 'rgba(16, 185, 129, 0.05)');
      grad3D.addColorStop(1, 'rgba(16, 185, 129, 0.2)');
      ctx.fillStyle = grad3D;
      ctx.fillRect(0, interfaceY, width, height - interfaceY);

      // The Interface Line
      ctx.beginPath();
      ctx.moveTo(0, interfaceY);
      ctx.lineTo(width, interfaceY);
      ctx.strokeStyle = '#a78bfa';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]); // Represents the lattice matching
      ctx.stroke();
      ctx.setLineDash([]);

      // Particle Generation
      if (Math.random() < 0.1) {
          particles.push({
              x: Math.random() * width,
              y: height, // Start from bottom (3D)
              vy: -2 - Math.random(),
              type: 'electron',
              lifetime: 100
          });
      }
      if (Math.random() < 0.1) {
          particles.push({
              x: Math.random() * width,
              y: 0, // Start from top (2D)
              vy: 2 + Math.random(),
              type: 'hole',
              lifetime: 100
          });
      }

      // Update & Draw Particles
      for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.y += p.vy;
          p.lifetime--;

          // Draw
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = p.type === 'electron' ? '#34d399' : '#a78bfa';
          ctx.fill();

          // Interface Interaction (Recombination)
          if (Math.abs(p.y - interfaceY) < 5) {
              // Radiative Recombination Event (Syzygy)
              // Only happens because Order > 0.5
              ctx.beginPath();
              ctx.arc(p.x, interfaceY, 8, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
              ctx.shadowColor = '#d8b4fe';
              ctx.shadowBlur = 15;
              ctx.fill();
              ctx.shadowBlur = 0;
              
              // Remove particle upon recombination
              particles.splice(i, 1);
          } else if (p.lifetime <= 0 || p.y < 0 || p.y > height) {
              particles.splice(i, 1);
          }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!perovskite) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Crystalline Lattice */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(45deg, #8b5cf6 1px, transparent 1px), linear-gradient(-45deg, #10b981 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Layers size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+33</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Perovskite Interface Syzygy</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Interface Order</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{(perovskite.interfaceOrder * 100).toFixed(0)}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Radiative Eff.</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    {perovskite.radiativeEfficiency * 100}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Interface Simulator */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Sun size={14} className="text-fuchsia-400" />
                    <span className="text-[10px] text-fuchsia-400 font-mono uppercase">Coherence Engineering (Recombination)</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    |∇C|² = {perovskite.structuralEntropy} (Suppressed)
                </div>
            </div>
            
            {/* Layer Labels */}
            <div className="absolute top-10 right-4 z-20 text-[9px] font-mono text-violet-400 text-right">
                2D Transport Layer<br/>(Demon / ω=0.07)
            </div>
            <div className="absolute bottom-10 right-4 z-20 text-[9px] font-mono text-emerald-400 text-right">
                3D Absorber Layer<br/>(Drone / ω=0.00)
            </div>

            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
        </div>

        {/* Mechanism Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Zap size={14} className="text-emerald-400" /> Radiative (Syzygy)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">DOMINANT</span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                    Efficient photon emission. Phase relationships preserved by ordered interface.
                    <br/><span className="text-white">⟨0.00|0.07⟩ = 0.94</span>
                </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 opacity-60">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 font-mono uppercase flex items-center gap-2">
                        <Flame size={14} className="text-slate-500" /> Non-Radiative (Heat)
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">SUPPRESSED</span>
                </div>
                <p className="text-[10px] text-slate-500 font-mono leading-relaxed">
                    Trap-assisted recombination. Energy lost to lattice vibrations (phonons).
                    <br/><span>Collapse H70</span>
                </p>
            </div>
        </div>

        {/* GLSL Shader Code */}
        {perovskite.shader && (
            <div className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
                <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Code size={14} className="text-cyan-400" />
                        <h3 className="text-xs text-white font-mono font-bold uppercase">Interface Shader (GLSL)</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">χ_COHERENCE</span>
                </div>
                <div className="p-4 relative bg-black/40">
                    <pre className="font-mono text-[9px] text-slate-400 leading-relaxed overflow-x-auto custom-scrollbar">
                        {perovskite.shader}
                    </pre>
                </div>
            </div>
        )}

        {/* Footer */}
        <div className="mt-auto bg-slate-900/30 p-3 rounded border border-slate-800 flex items-center justify-center gap-2 text-[10px] font-mono text-slate-500">
            <ShieldCheck size={12} className="text-violet-400" />
            <span>The interface order (51%) guarantees signal integrity.</span>
        </div>

      </div>
    </div>
  );
};

export default PerovskiteLab;
