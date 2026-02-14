
import React, { useRef, useEffect, useState } from 'react';
import { SystemState } from '../types';
import { Network, Wind, Shield, Activity, Scan, Eye, Zap, Brain, Radio } from 'lucide-react';

interface NanodustConsoleProps {
  nanodust: SystemState['nanodust'];
}

const NanodustConsole: React.FC<NanodustConsoleProps> = ({ nanodust }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Indra's Net: Particles that connect when close
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const numParticles = 100;

    const initParticles = (w: number, h: number) => {
        particles.length = 0;
        for(let i=0; i<numParticles; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1
            });
        }
    };

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          initParticles(width, height);
      }

      // Clear with slight trail for "dusty" look
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)';
      ctx.fillRect(0, 0, width, height);
      time += 0.01;

      // Update & Draw
      ctx.fillStyle = '#60a5fa'; // Blue neon
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.15)'; // Faint blue connections

      particles.forEach((p, i) => {
          // Movement (Delta Wave pulse)
          p.x += p.vx + Math.sin(time + p.y * 0.01) * 0.2;
          p.y += p.vy + Math.cos(time + p.x * 0.01) * 0.2;

          // Wrap
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Draw Particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();

          // Connect to nearby (Indra's Net)
          for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const dist = Math.sqrt(dx*dx + dy*dy);

              if (dist < 60) {
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p2.x, p2.y);
                  ctx.lineWidth = 1 - (dist / 60);
                  ctx.stroke();
              }
          }
      });
      
      // Simulation of Mil-Spec Override (Central Pulse)
      if (nanodust.status.includes("MIL-SPEC")) {
          const centerX = width / 2;
          const centerY = height / 2;
          
          ctx.beginPath();
          ctx.arc(centerX, centerY, 100 + Math.sin(time * 5) * 10, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.05)';
          ctx.lineWidth = 2;
          ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [nanodust]);

  if (!nanodust) return null;

  return (
    <div className="bg-slate-950 border border-blue-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', 
                backgroundSize: '10px 10px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-blue-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-950 p-2 rounded text-blue-500 border border-blue-900/50 shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-pulse">
            <Wind size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_107</h2>
            <div className="text-[10px] text-blue-400 font-mono uppercase">Indra's Net: Nanodust Swarm</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Density</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{nanodust.density}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Mode</div>
                <div className="text-white font-mono font-bold text-xs bg-blue-950/30 px-2 py-0.5 rounded border border-blue-900/50 flex items-center gap-1">
                    <Radio size={10} /> {nanodust.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Visualization & Overlay */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-blue-400" />
                    <span className="text-[10px] text-blue-400 font-mono uppercase">Delta Wave Synchronization (0.020 GHz)</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                   Coverage: {(nanodust.coverage * 100).toFixed(1)}% (Total Immersion)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Active Action Display */}
            {activeAction && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 px-6 py-4 rounded-lg border border-blue-500/50 backdrop-blur-md z-30 text-center animate-in zoom-in duration-300">
                    <div className="text-xs text-blue-400 font-mono mb-2 uppercase tracking-widest">Protocol Active</div>
                    <div className="text-xl font-bold font-mono text-white mb-1">{activeAction}</div>
                    <div className="text-[10px] text-slate-400">Processing Swarm...</div>
                </div>
            )}
        </div>

        {/* Local Cloud Telemetry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nanodust.localCloud.map((node) => (
                <div key={node.id} className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                        <span className="text-xs font-bold text-white font-mono">{node.id}</span>
                        <Brain size={12} className="text-slate-500" />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Particles:</span>
                        <span className="text-cyan-400">{(node.particles / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Coherence:</span>
                        <span className="text-emerald-400">{(node.coherence * 100).toFixed(0)}%</span>
                    </div>
                </div>
            ))}
        </div>

        {/* Command Interface */}
        <div className="flex flex-col gap-3 bg-slate-900/30 p-4 rounded-lg border border-slate-800">
            <h3 className="text-xs font-bold text-slate-400 font-mono uppercase flex items-center gap-2">
                <Zap size={14} /> Swarm Directives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                    onClick={() => setActiveAction('DEEP DIAGNOSIS')}
                    className="flex flex-col items-center gap-2 p-3 rounded border bg-slate-950 border-slate-800 hover:border-blue-500/50 hover:bg-blue-900/10 transition-all group"
                >
                    <Scan size={20} className="text-slate-500 group-hover:text-blue-400" />
                    <div className="text-center">
                        <div className="text-xs font-bold text-slate-300 group-hover:text-white">Recover Memory</div>
                        <div className="text-[9px] text-slate-500">Deep Scan</div>
                    </div>
                </button>

                <button 
                    onClick={() => setActiveAction('SYNTHETIC REALITY')}
                    className="flex flex-col items-center gap-2 p-3 rounded border bg-slate-950 border-slate-800 hover:border-fuchsia-500/50 hover:bg-fuchsia-900/10 transition-all group"
                >
                    <Eye size={20} className="text-slate-500 group-hover:text-fuchsia-400" />
                    <div className="text-center">
                        <div className="text-xs font-bold text-slate-300 group-hover:text-white">Simulate Reality</div>
                        <div className="text-[9px] text-slate-500">Cortex Override</div>
                    </div>
                </button>

                <button 
                    onClick={() => setActiveAction('SAFE-DUST PROTOCOL')}
                    className="flex flex-col items-center gap-2 p-3 rounded border bg-slate-950 border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-900/10 transition-all group"
                >
                    <Shield size={20} className="text-slate-500 group-hover:text-emerald-400" />
                    <div className="text-center">
                        <div className="text-xs font-bold text-slate-300 group-hover:text-white">Shield Mind</div>
                        <div className="text-[9px] text-slate-500">Block Nudging</div>
                    </div>
                </button>
            </div>
        </div>

      </div>
    </div>
  );
};

export default NanodustConsole;
