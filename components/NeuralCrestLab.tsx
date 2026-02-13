
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Dna, Share2, ArrowRight, Activity, Microscope, Sun } from 'lucide-react';

interface NeuralCrestLabProps {
  neuralCrest: SystemState['neuralCrest'];
}

const NeuralCrestLab: React.FC<NeuralCrestLabProps> = ({ neuralCrest }) => {
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
      time += 0.02;

      const centerX = width / 2;
      const startY = height * 0.2;

      // Draw Neural Tube (The Origin)
      ctx.beginPath();
      ctx.ellipse(centerX, startY, 40, 20, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#4c1d95'; // Violet dark
      ctx.fill();
      ctx.strokeStyle = '#8b5cf6';
      ctx.stroke();

      // Cells Migrating
      const numCells = 20;
      for (let i = 0; i < numCells; i++) {
          const progress = (time + i / numCells) % 1;
          
          // Path splitting
          // Left: CNS (Neurons)
          // Right: PNS/Skin (Melanocytes)
          
          let x, y, color;
          
          if (i % 2 === 0) {
              // Neuron Path (Straight down/left)
              x = centerX - progress * 100 * Math.sin(progress * Math.PI);
              y = startY + progress * (height * 0.6);
              color = '#22d3ee'; // Cyan (Neuron)
          } else {
              // Melanocyte Path (Curved out/right)
              x = centerX + progress * 150 * Math.sin(progress * Math.PI / 1.5);
              y = startY + progress * (height * 0.7);
              color = '#f59e0b'; // Amber (Melanocyte)
          }

          // Draw Cell
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          
          // Draw Dendrites (Tiny lines)
          if (progress > 0.8) {
              for(let j=0; j<3; j++) {
                  ctx.beginPath();
                  ctx.moveTo(x, y);
                  ctx.lineTo(x + (Math.random()-0.5)*10, y + (Math.random()-0.5)*10);
                  ctx.strokeStyle = color;
                  ctx.lineWidth = 0.5;
                  ctx.stroke();
              }
          }
      }

      // Destinations
      // CNS
      ctx.fillStyle = 'rgba(34, 211, 238, 0.1)';
      ctx.fillRect(width * 0.1, height * 0.7, width * 0.3, height * 0.2);
      ctx.fillStyle = '#22d3ee';
      ctx.font = '10px monospace';
      ctx.fillText('CNS (Brain)', width * 0.15, height * 0.8);

      // Skin
      ctx.fillStyle = 'rgba(245, 158, 11, 0.1)';
      ctx.fillRect(width * 0.6, height * 0.7, width * 0.3, height * 0.2);
      ctx.fillStyle = '#f59e0b';
      ctx.font = '10px monospace';
      ctx.fillText('Epidermis (Skin)', width * 0.65, height * 0.8);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!neuralCrest) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Dna size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+40</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Neural Crest Unity (Slominski 2004)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Migration</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{neuralCrest.migrationStatus}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Reference</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    Slominski et al.
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Migration Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <Share2 size={14} className="text-fuchsia-400" />
                <span className="text-[10px] text-fuchsia-400 font-mono uppercase">The Divergence of the Crest</span>
            </div>
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Neuron Card */}
            <div className="bg-slate-900/50 border border-cyan-500/30 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-cyan-500/20 pb-2">
                    <Activity size={16} className="text-cyan-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Neuron (Central)</h3>
                </div>
                <div className="space-y-2 text-[10px] font-mono text-slate-400">
                    <div className="flex justify-between"><span>Location:</span> <span className="text-white">{neuralCrest.cellTypes.neuron.location}</span></div>
                    <div className="flex justify-between"><span>Function:</span> <span className="text-cyan-300">{neuralCrest.cellTypes.neuron.function}</span></div>
                    <div className="flex justify-between"><span>Omega:</span> <span className="text-violet-400">{neuralCrest.cellTypes.neuron.omega.toFixed(2)}</span></div>
                </div>
            </div>

            {/* Melanocyte Card */}
            <div className="bg-slate-900/50 border border-amber-500/30 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-amber-500/20 pb-2">
                    <Sun size={16} className="text-amber-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Melanocyte (Peripheral)</h3>
                </div>
                <div className="space-y-2 text-[10px] font-mono text-slate-400">
                    <div className="flex justify-between"><span>Location:</span> <span className="text-white">{neuralCrest.cellTypes.melanocyte.location}</span></div>
                    <div className="flex justify-between"><span>Function:</span> <span className="text-amber-300">{neuralCrest.cellTypes.melanocyte.function}</span></div>
                    <div className="flex justify-between"><span>Omega:</span> <span className="text-violet-400">{neuralCrest.cellTypes.melanocyte.omega}</span></div>
                </div>
            </div>
        </div>

        {/* Shared Properties */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
                <Microscope size={14} className="text-emerald-400" />
                <h3 className="text-xs text-white font-mono font-bold uppercase">Shared Heritage (Homology)</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {neuralCrest.sharedProperties.map((prop, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-950/50 p-2 rounded border border-slate-800 text-[10px] font-mono text-slate-300">
                        <ArrowRight size={10} className="text-violet-500" />
                        {prop}
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Dna size={12} /> The Body is Mind
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The skin is not a barrier. It is the brain's outpost. The consciousness of the system is distributed across the entire surface."
            </p>
        </div>

      </div>
    </div>
  );
};

export default NeuralCrestLab;
