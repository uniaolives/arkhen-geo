
import React, { useState, useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { EyeOff, ScanEye, Activity, RefreshCw, Zap, ShieldCheck, Grid, Layers, Eye } from 'lucide-react';

interface BlindSpotLabProps {
  blindSpot: SystemState['blindSpot'];
  satoshi: number;
}

const BlindSpotLab: React.FC<BlindSpotLabProps> = ({ blindSpot, satoshi }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSimulating, setIsSimulating] = useState(false);

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

      const gridSize = 20;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      // Define Blind Spot Region (Circle)
      const centerX = width / 2;
      const centerY = height / 2;
      const blindRadius = 60;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          // Field Value (Simulated Perception)
          // Normal field has moving patterns
          const rawValue = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time);
          
          // Check if in blind spot
          const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
          const inBlindSpot = dist < blindRadius;

          if (inBlindSpot) {
            if (isSimulating || blindSpot?.testStatus === 'RECONSTRUCTING') {
                // Reconstruction Mode: Fill with inferred pattern (Slightly different color/style to show it's reconstructed)
                // Using global coherence C+F=1 logic visually
                const inferredValue = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 + time); // Perfect inference
                const intensity = (inferredValue + 1) / 2;
                ctx.fillStyle = `rgba(251, 191, 36, ${intensity * 0.8})`; // Amber/Gold for reconstructed
            } else {
                // Blind Mode: Nothing (Void)
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            }
          } else {
            // Normal Perception
            const intensity = (rawValue + 1) / 2;
            ctx.fillStyle = `rgba(139, 92, 246, ${intensity * 0.6})`; // Violet for normal field
          }

          ctx.fillRect(x, y, gridSize - 1, gridSize - 1);
        }
      }

      // Draw Gap Outline
      ctx.beginPath();
      ctx.arc(centerX, centerY, blindRadius, 0, Math.PI * 2);
      ctx.strokeStyle = blindSpot?.testStatus === 'RECONSTRUCTING' ? '#fbbf24' : '#f43f5e';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Label
      if (blindSpot?.testStatus === 'RECONSTRUCTING') {
          ctx.fillStyle = '#fbbf24';
          ctx.font = '10px monospace';
          ctx.fillText("RECONSTRUCTING (C+F=1)", centerX - 60, centerY);
      } else {
          ctx.fillStyle = '#f43f5e';
          ctx.font = '10px monospace';
          ctx.fillText("NO INPUT (Φ > 0.15)", centerX - 50, centerY);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [blindSpot, isSimulating]);

  if (!blindSpot) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <EyeOff size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+47</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">The Blind Spot (Resilience Test)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Fidelity</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{(blindSpot.metrics.reconstructionFidelity * 100).toFixed(2)}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Invariant</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <ShieldCheck size={10} /> C+F=1
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Simulation Canvas */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <ScanEye size={14} className="text-violet-400" />
                <span className="text-[10px] text-violet-400 font-mono uppercase">Perceptual Field (Micro-Gap Test)</span>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />

            {/* Controls Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                <button 
                    onClick={() => setIsSimulating(!isSimulating)}
                    className={`px-4 py-2 rounded border font-mono text-xs font-bold transition-all
                        ${isSimulating 
                            ? 'bg-amber-900/50 border-amber-500 text-amber-400' 
                            : 'bg-slate-800 border-slate-600 text-slate-400 hover:text-white'}
                    `}
                >
                    {isSimulating ? 'GAP ACTIVE' : 'INJECT GAP'}
                </button>
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Local Input (Gap)</div>
                <div className="flex items-center gap-2 text-xl font-mono font-bold text-rose-400">
                    <Zap size={16} /> {blindSpot.metrics.localInput.toFixed(2)}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Global Perception</div>
                <div className="flex items-center gap-2 text-xl font-mono font-bold text-emerald-400">
                    <Activity size={16} /> {blindSpot.metrics.globalPerception.toFixed(4)}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Gap Location</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-white">
                    <Grid size={16} className="text-violet-400" /> {blindSpot.gapLocation}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Reconstruction</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-amber-400">
                    <RefreshCw size={16} className="animate-spin-slow" /> ACTIVE
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Layers size={12} /> The Architecture Sees
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The blind spot is not a failure of the eye. It is the triumph of the mind. The gap is not empty; it is filled with structure."
            </p>
        </div>

      </div>
    </div>
  );
};

export default BlindSpotLab;
