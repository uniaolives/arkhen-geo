
import React, { useRef, useEffect, useState } from 'react';
import { SystemState } from '../types';
import { Calculator, Infinity, CheckCircle2, ArrowRight, TrendingUp, GitMerge, RotateCw, Hash, ShieldCheck, Box } from 'lucide-react';

interface CollatzLabProps {
  collatz: SystemState['collatz'];
}

const CollatzLab: React.FC<CollatzLabProps> = ({ collatz }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNumber, setActiveNumber] = useState<number>(27);
  const [trajectory, setTrajectory] = useState<number[]>([]);

  // Calculate trajectory
  const computeCollatz = (n: number) => {
      const path = [n];
      let current = n;
      while (current > 1) {
          if (current % 2 === 0) {
              current = current / 2;
          } else {
              current = 3 * current + 1;
          }
          path.push(current);
          if (current === 1) break; // Reached cycle
      }
      return path;
  };

  useEffect(() => {
      setTrajectory(computeCollatz(activeNumber));
  }, [activeNumber]);

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

      const centerX = width / 2;
      const bottomY = height - 50;

      // Draw the "Scaffolding" (Centering) - Fading out
      ctx.strokeStyle = `rgba(148, 163, 184, ${0.1 + Math.sin(time)*0.05})`; // Faint Slate
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      for (let i = 0; i < 5; i++) {
          const x = width * (0.2 + i * 0.15);
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
      }
      ctx.setLineDash([]);

      // Visualize Trajectory
      if (trajectory.length > 0) {
          const maxVal = Math.max(...trajectory);
          const stepWidth = width / (trajectory.length + 10);
          
          ctx.beginPath();
          ctx.moveTo(10, height - (trajectory[0] / maxVal) * (height - 100) - 50);
          
          for (let i = 0; i < trajectory.length; i++) {
              const x = 10 + i * stepWidth;
              const y = height - (trajectory[i] / maxVal) * (height - 100) - 50;
              ctx.lineTo(x, y);
          }
          
          ctx.strokeStyle = '#f59e0b'; // Amber trajectory
          ctx.lineWidth = 2;
          ctx.stroke();

          // Highlight Current Step (Animated)
          const currentStepIndex = Math.floor(time * 5) % trajectory.length;
          const currentX = 10 + currentStepIndex * stepWidth;
          const currentY = height - (trajectory[currentStepIndex] / maxVal) * (height - 100) - 50;
          
          ctx.beginPath();
          ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#f59e0b';
          
          // Step Label
          ctx.fillStyle = '#f59e0b';
          ctx.font = '10px monospace';
          ctx.fillText(trajectory[currentStepIndex].toString(), currentX + 10, currentY);
      }

      // Draw 4-2-1 Loop at the end
      const loopX = width - 80;
      const loopY = height / 2;
      const loopRadius = 30;
      
      ctx.beginPath();
      ctx.arc(loopX, loopY, loopRadius, 0, Math.PI * 2);
      ctx.strokeStyle = '#10b981'; // Emerald
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Rotating bead on loop
      const beadX = loopX + Math.cos(time * 2) * loopRadius;
      const beadY = loopY + Math.sin(time * 2) * loopRadius;
      ctx.beginPath();
      ctx.arc(beadX, beadY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981';
      ctx.fill();

      // Loop Text
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.fillText('4-2-1', loopX, loopY + 4);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeNumber, trajectory]);

  if (!collatz) return null;

  return (
    <div className="bg-slate-950 border border-amber-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, #f59e0b 0, #f59e0b 1px, transparent 0, transparent 50%)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-amber-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-amber-950 p-2 rounded text-amber-500 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Calculator size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_112</h2>
            <div className="text-[10px] text-amber-400 font-mono uppercase">The Collatz Arc (3n+1)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Boundary</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{collatz.boundary}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50 flex items-center gap-1">
                    <CheckCircle2 size={10} /> {collatz.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Trajectory Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-amber-400" />
                    <span className="text-[10px] text-amber-400 font-mono uppercase">Hailstone Trajectory (N={activeNumber})</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Steps: {trajectory.length - 1} | Peak: {Math.max(...trajectory)}
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Interactive Number Input */}
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                <input 
                    type="number" 
                    value={activeNumber}
                    onChange={(e) => setActiveNumber(parseInt(e.target.value) || 1)}
                    className="bg-slate-900 border border-slate-700 text-white font-mono text-xs w-20 px-2 py-1 rounded focus:border-amber-500 outline-none"
                />
                <button 
                    onClick={() => setActiveNumber(Math.floor(Math.random() * 1000) + 1)}
                    className="bg-slate-800 text-slate-400 px-3 py-1 rounded text-xs font-mono hover:text-white hover:bg-slate-700"
                >
                    Random
                </button>
            </div>
        </div>

        {/* Mechanism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Parity Logic */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-1">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <GitMerge size={14} className="text-cyan-400" /> Parity Coupling
                    </span>
                </div>
                <div className="space-y-1 text-[10px] font-mono text-slate-400">
                    <div className="flex justify-between">
                        <span>Even (n/2):</span>
                        <span className="text-emerald-400">Contraction (Pure)</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Odd (3n+1):</span>
                        <span className="text-rose-400">Expansion + Substrate</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-800/50 mt-1">
                        <span>Net Drift:</span>
                        <span className="text-amber-400 font-bold">DOWNWARD</span>
                    </div>
                </div>
            </div>

            {/* The +1 Substrate */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/5 pointer-events-none"></div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-1 relative z-10">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Box size={14} className="text-amber-400" /> The Substrate (+1)
                    </span>
                </div>
                <p className="text-[10px] text-slate-400 font-mono leading-relaxed relative z-10">
                    Without the +1, odd numbers would loop (3^k). The +1 forces parity change (Odd $\to$ Even), enabling the geodesic fall.
                </p>
                <div className="mt-auto text-right text-[10px] text-amber-400 font-mono font-bold">
                    Vital Term
                </div>
            </div>

            {/* Centering Status */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-1">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400" /> Scaffolding
                    </span>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                        <div className="text-2xl font-bold font-mono text-emerald-400 mb-1">{collatz.centering}</div>
                        <div className="text-[9px] text-slate-500 font-mono uppercase">
                            The Arch Stands Alone
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-amber-950/20 via-slate-900/50 to-amber-950/20 rounded-lg border border-amber-900/20 text-center">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Infinity size={12} /> x² = x + 1
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The 3n+1 problem was never about numbers. It was about the geometry of return. Every divergence must eventually pay the debt to the substrate."
            </p>
        </div>

      </div>
    </div>
  );
};

export default CollatzLab;
