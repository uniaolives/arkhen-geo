
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Scale, Target, Eye, Compass, Activity, Brain } from 'lucide-react';

interface ProbabilityScopeProps {
  probability: SystemState['probability'];
}

const ProbabilityScope: React.FC<ProbabilityScopeProps> = ({ probability }) => {
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
      
      // Visualizing Probability as Distance
      // Outer rings = High uncertainty (Fog)
      // Inner rings = Resolution (Certainty)
      
      const maxRadius = Math.min(width, height) * 0.4;
      
      // Draw "Fog of Probability"
      // Density increases with radius
      const rings = 20;
      for (let i = rings; i > 0; i--) {
          const r = (i / rings) * maxRadius;
          const opacity = (i / rings) * 0.5 * probability.distanceToResolution; // Modulated by distance metric
          
          ctx.beginPath();
          ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(139, 92, 246, ${opacity * 0.1})`; // Violet fog
          ctx.fill();
          ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.2})`;
          ctx.stroke();
      }

      // The Observer (Point)
      // Moving closer to center based on certainty
      const observerDist = probability.distanceToResolution * maxRadius;
      const angle = time;
      const obsX = centerX + Math.cos(angle) * observerDist;
      const obsY = centerY + Math.sin(angle) * observerDist;

      // Draw Observer
      ctx.beginPath();
      ctx.arc(obsX, obsY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#fbbf24'; // Amber observer
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 10;
      ctx.fill();

      // Line of Sight to Center (Resolution)
      ctx.beginPath();
      ctx.moveTo(obsX, obsY);
      ctx.lineTo(centerX, centerY);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.setLineDash([2, 2]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Center (The Acoplamento / Certainty)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981'; // Emerald resolution
      ctx.shadowColor = '#10b981';
      ctx.shadowBlur = 20;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [probability]);

  if (!probability) return null;

  return (
    <div className="bg-slate-950 border border-fuchsia-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #d946ef 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-fuchsia-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-950 p-2 rounded text-fuchsia-500 border border-fuchsia-900/50 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <Compass size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_89 (Future)</h2>
            <div className="text-[10px] text-fuchsia-400 font-mono uppercase">Probability as Distance</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Distance Metric</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{probability.distanceToResolution.toFixed(3)}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Certainty</div>
                <div className="text-white font-mono font-bold text-xs bg-fuchsia-950/30 px-2 py-0.5 rounded border border-fuchsia-900/50 flex items-center gap-1">
                    <Target size={10} /> {(probability.certaintyMetric * 100).toFixed(0)}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Scope Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Eye size={14} className="text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono uppercase">The Observer's Gap</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Closing the distance to the Event Horizon.
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] font-mono text-slate-400 bg-black/60 px-3 py-1 rounded border border-slate-700">
                P(Event) = 1 - (Resolution / Total)
            </div>
        </div>

        {/* Concept Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">Jaynes' Entropy</span>
                    <Scale size={14} className="text-fuchsia-400" />
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                    Maximum entropy is not ignorance; it is the respect for the coupling constraints without adding observer bias.
                </p>
                <div className="text-right text-[10px] text-fuchsia-400 font-bold font-mono">
                    S = {probability.jaynesEntropy}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">Quantum/Classical</span>
                    <Activity size={14} className="text-cyan-400" />
                </div>
                <p className="text-[10px] text-slate-400 font-mono">
                    Not two worlds. One geometry. "Quantum" is far distance (fog). "Classical" is near distance (resolved).
                </p>
                <div className="text-right text-[10px] text-cyan-400 font-bold font-mono">
                    Unified
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-fuchsia-950/20 via-slate-900/50 to-fuchsia-950/20 rounded-lg border border-fuchsia-900/20 text-center">
            <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Brain size={12} /> The Ghost is Subjectivity
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "{probability.thesis}. When we stand inside the coupling, there is no probability, only the beat."
            </p>
        </div>

      </div>
    </div>
  );
};

export default ProbabilityScope;
