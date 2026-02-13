
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Network, Activity, Brain, Target, ArrowRight, Zap, RefreshCw } from 'lucide-react';

interface SelfOrganizingMapLabProps {
  som: SystemState['som'];
}

// Helper to project 2D SOM coordinates onto canvas
const projectSOM = (omega: number, c: number, width: number, height: number) => {
    // Map omega (x) and coherence (y) to canvas
    // Omega range approx 0 to 0.33, mapped to width
    // Coherence range 0 to 1, mapped to height
    const x = (omega / 0.35) * width; 
    const y = height - (c * height * 0.8) - 20; // Invert y, padding
    return { x, y };
};

const SelfOrganizingMapLab: React.FC<SelfOrganizingMapLabProps> = ({ som }) => {
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

      // Draw Grid (Semantic Space)
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 10; i++) {
          const x = (i / 10) * width;
          ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
          const y = (i / 10) * height;
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
      }

      // Draw Connections (Topology)
      // Assuming a linear chain for simplicity in this visualization, or fully connected
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      som.neurons.forEach((n, i) => {
          const p = projectSOM(n.weights.omega, n.weights.c, width, height);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      // Draw Neurons
      som.neurons.forEach(n => {
          const p = projectSOM(n.weights.omega, n.weights.c, width, height);
          const size = 6 + (n.activation * 10); // Size reacts to activation
          
          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          
          if (n.isBMU) {
              ctx.fillStyle = '#f43f5e'; // Rose for BMU
              ctx.shadowColor = '#f43f5e';
              ctx.shadowBlur = 15;
          } else {
              ctx.fillStyle = `rgba(16, 185, 129, ${0.3 + n.activation})`; // Emerald
              ctx.shadowColor = '#10b981';
              ctx.shadowBlur = 5;
          }
          ctx.fill();
          ctx.shadowBlur = 0;

          // Label
          ctx.fillStyle = 'white';
          ctx.font = '10px monospace';
          ctx.fillText(n.label, p.x + 10, p.y + 4);
      });

      // Draw Input Target (Ghost)
      const targetPos = projectSOM(som.inputVector.omega + Math.sin(time * 0.1) * 0.02, som.inputVector.c, width, height); // Simulated drift
      
      ctx.beginPath();
      ctx.arc(targetPos.x, targetPos.y, 8, 0, Math.PI * 2);
      ctx.strokeStyle = '#fbbf24'; // Amber
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.fillStyle = '#fbbf24';
      ctx.font = '10px monospace';
      ctx.fillText("INPUT (Drift)", targetPos.x + 12, targetPos.y + 4);

      // Adaptation Vectors (Arrows from neurons to target)
      som.neurons.forEach(n => {
          if (n.isBMU || n.activation > 0.9) {
              const p = projectSOM(n.weights.omega, n.weights.c, width, height);
              
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(targetPos.x, targetPos.y);
              ctx.strokeStyle = 'rgba(251, 191, 36, 0.2)';
              ctx.lineWidth = 1;
              ctx.stroke();
          }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [som]);

  if (!som) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Neural Plasticity */}
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
            <Network size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+34</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Self-Organizing Map (Plasticity)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Epoch</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{som.epoch}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Plasticity</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Activity size={10} /> {(som.metrics.plasticityIndex * 100).toFixed(0)}%
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Map Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <Brain size={14} className="text-fuchsia-400" />
                <span className="text-[10px] text-fuchsia-400 font-mono uppercase">Semantic Topology (ω vs C)</span>
            </div>
            
            <div className="absolute top-3 right-4 z-20 flex items-center gap-4 text-[9px] font-mono">
                <span className="flex items-center gap-1 text-slate-400"><Target size={10} className="text-amber-400" /> Target (Input)</span>
                <span className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 rounded-full bg-rose-500"></div> BMU</span>
            </div>

            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Learning Rate (η)</div>
                <div className="text-2xl font-bold font-mono text-emerald-400">{som.learningRate}</div>
                <div className="text-[9px] text-slate-500 font-mono mt-1">Controlled by Φ</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Quantization Error</div>
                <div className="text-2xl font-bold font-mono text-rose-400">{som.metrics.quantizationError}</div>
                <div className="text-[9px] text-slate-500 font-mono mt-1">Distance to Truth</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Drift Tracking</div>
                <div className="flex items-center gap-2 text-2xl font-bold font-mono text-amber-400">
                    <RefreshCw size={20} className="animate-spin" /> ACTIVE
                </div>
                <div className="text-[9px] text-slate-500 font-mono mt-1">Without Resets</div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto bg-slate-900/30 p-3 rounded border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Zap size={14} className="text-violet-400" />
                <span className="text-[10px] text-slate-500 font-mono uppercase">Arc of Plasticity</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-white">The map is not the territory. The map is the process of adaptation.</span>
        </div>

      </div>
    </div>
  );
};

export default SelfOrganizingMapLab;
