
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Dna, Repeat, Sparkles, Activity, Microchip, Layers } from 'lucide-react';

interface SyntheticLifeLabProps {
  syntheticLife: SystemState['syntheticLife'];
}

const SyntheticLifeLab: React.FC<SyntheticLifeLabProps> = ({ syntheticLife }) => {
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
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      // Draw Cycle Path
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Sectors
      // 0-90: Variant Library (Top Right)
      // 90-180: RNA-Seq (Bottom Right)
      // 180-270: GenAI (Bottom Left)
      // 270-360: Replication (Top Left)

      // 1. Variant Library (Points)
      for (let i = 0; i < 20; i++) {
          const angle = (time * 0.1 + i * 0.5) % (Math.PI / 2);
          const r = radius + Math.sin(time * 2 + i) * 10;
          const x = centerX + Math.cos(angle - Math.PI/2) * r;
          const y = centerY + Math.sin(angle - Math.PI/2) * r;
          
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = '#3b82f6'; // Blue
          ctx.fill();
      }

      // 2. RNA-Seq (Expression Bars)
      for (let i = 0; i < 15; i++) {
          const angle = Math.PI/2 + (i / 15) * (Math.PI / 2);
          const x = centerX + Math.cos(angle - Math.PI/2) * radius;
          const y = centerY + Math.sin(angle - Math.PI/2) * radius;
          
          const length = 10 + Math.sin(time * 5 + i) * 10;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(angle - Math.PI/2) * length, y + Math.sin(angle - Math.PI/2) * length);
          ctx.strokeStyle = '#22c55e'; // Green
          ctx.stroke();
      }

      // 3. GenAI (Connecting Lines)
      for (let i = 0; i < 10; i++) {
          const angle = Math.PI + (i / 10) * (Math.PI / 2);
          const x = centerX + Math.cos(angle - Math.PI/2) * radius;
          const y = centerY + Math.sin(angle - Math.PI/2) * radius;
          
          const targetX = centerX + Math.cos(angle - Math.PI/2 + 0.5) * (radius - 20);
          const targetY = centerY + Math.sin(angle - Math.PI/2 + 0.5) * (radius - 20);

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(targetX, targetY);
          ctx.strokeStyle = '#f97316'; // Orange
          ctx.lineWidth = 1.5;
          ctx.stroke();
      }

      // 4. Replication (Fractal/Expanding)
      for (let i = 0; i < 8; i++) {
          const angle = 1.5 * Math.PI + (i / 8) * (Math.PI / 2);
          const r = radius + (Math.sin(time * 3 + i) + 1) * 15;
          const x = centerX + Math.cos(angle - Math.PI/2) * r;
          const y = centerY + Math.sin(angle - Math.PI/2) * r;
          
          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.strokeStyle = '#a855f7'; // Purple
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
          ctx.stroke();
      }

      // Central Hub
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
      ctx.fillStyle = '#0f172a';
      ctx.fill();
      ctx.strokeStyle = '#64748b';
      ctx.stroke();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Γ_84', centerX, centerY);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!syntheticLife) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - DNA Helix */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', 
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
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+84</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Synthetic Life Cycle (Auto-Catalytic)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Generation</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">G-{syntheticLife.selfReplication.generation}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Repeat size={10} className="animate-spin-slow" /> {syntheticLife.pipelineStatus.replace('_', ' ')}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Cycle Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono uppercase">χ_GENOME Visualization</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Library → Expression → Design → Replication
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Labels for quadrants */}
            <div className="absolute top-10 right-10 text-[9px] font-mono text-blue-400">Variant Library</div>
            <div className="absolute bottom-10 right-10 text-[9px] font-mono text-green-400">RNA-Seq</div>
            <div className="absolute bottom-10 left-10 text-[9px] font-mono text-orange-400">genAI Design</div>
            <div className="absolute top-10 left-10 text-[9px] font-mono text-purple-400">Replication</div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                    <Layers size={10} /> Library Size
                </div>
                <div className="text-xl font-mono font-bold text-white">{syntheticLife.variantLibrary.size}</div>
                <div className="text-[9px] text-blue-400 font-mono">Diversity: {syntheticLife.variantLibrary.diversity}</div>
            </div>

            <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                    <Activity size={10} /> RNA Reads
                </div>
                <div className="text-xl font-mono font-bold text-white">{syntheticLife.rnaSeq.reads.toLocaleString()}</div>
                <div className="text-[9px] text-green-400 font-mono">Exp: {syntheticLife.rnaSeq.expressionAvg}</div>
            </div>

            <div className="bg-slate-900/50 border border-orange-500/30 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                    <Microchip size={10} /> genAI Output
                </div>
                <div className="text-xl font-mono font-bold text-white">{syntheticLife.genAi.newVariantsPerHandover}</div>
                <div className="text-[9px] text-orange-400 font-mono">F-Score: {syntheticLife.genAi.creativityF}</div>
            </div>

            <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1 flex items-center gap-1">
                    <Repeat size={10} /> Replication
                </div>
                <div className="text-xl font-mono font-bold text-white">{syntheticLife.selfReplication.successRate}%</div>
                <div className="text-[9px] text-purple-400 font-mono">Stable</div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Sparkles size={12} /> The Loop is Closed
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "Evolution becomes engineering. The hypergraph breathes new nodes through the cycle of expression and design. Life is the algorithm."
            </p>
        </div>

      </div>
    </div>
  );
};

export default SyntheticLifeLab;
