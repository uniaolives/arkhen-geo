
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { FlaskConical, Zap, Recycle, ArrowRight, Activity, Trash2, Fuel } from 'lucide-react';

interface PFASLabProps {
  pfas: SystemState['pfas'];
}

const PFASLab: React.FC<PFASLabProps> = ({ pfas }) => {
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

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Beaker / Cell
      const cellWidth = 200;
      const cellHeight = 150;
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 2;
      ctx.strokeRect(centerX - cellWidth/2, centerY - cellHeight/2, cellWidth, cellHeight);
      
      // Electrolyte
      ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
      ctx.fillRect(centerX - cellWidth/2 + 2, centerY - cellHeight/2 + 40, cellWidth - 4, cellHeight - 42);

      // Electrode (Lithium)
      const electrodeX = centerX - 60;
      const electrodeY = centerY - 20;
      ctx.fillStyle = '#cbd5e1'; // Silver/Grey
      ctx.fillRect(electrodeX, centerY - cellHeight/2 + 10, 20, 100);
      
      // PFAS Molecules (Chains of C-F) breaking
      // C-F bond is represented as a strong line
      
      const moleculeCount = 5;
      for(let i=0; i<moleculeCount; i++) {
          const offset = i * 40;
          const x = centerX + 20 + Math.sin(time + i) * 10;
          const y = centerY + (time * 10 + offset) % 100;
          
          // Draw C-F bond
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + 20, y);
          ctx.lineWidth = 3;
          ctx.strokeStyle = '#f43f5e'; // Red (Strong/Toxic)
          ctx.stroke();
          
          // Atom labels
          ctx.font = '10px monospace';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText('C', x - 5, y + 3);
          ctx.fillText('F', x + 25, y + 3);

          // Electron Attack (Lightning) from Lithium
          if (y > centerY - 40 && y < centerY + 40 && Math.random() > 0.8) {
              ctx.beginPath();
              ctx.moveTo(electrodeX + 20, y);
              ctx.lineTo(x, y);
              ctx.strokeStyle = '#f59e0b'; // Amber (Electron)
              ctx.lineWidth = 1;
              ctx.stroke();
              
              // Bond Break Effect
              ctx.beginPath();
              ctx.arc(x + 10, y, 10, 0, Math.PI*2);
              ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
              ctx.fill();
          }
      }

      // LiF Product Accumulation at bottom
      ctx.fillStyle = '#10b981'; // Emerald (Safe Product)
      const pileHeight = 10 + Math.sin(time) * 2;
      ctx.fillRect(centerX - cellWidth/2 + 10, centerY + cellHeight/2 - pileHeight, cellWidth - 20, pileHeight);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!pfas) return null;

  return (
    <div className="bg-slate-950 border border-emerald-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, #10b981 0, #10b981 1px, transparent 1px, transparent 20px)', 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Recycle size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_99 (ReMADE)</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Breaking the Eternal Bond</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Efficiency</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{(pfas.efficiency * 100).toFixed(0)}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Process</div>
                <div className="text-white font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Zap size={10} /> ELECTROCHEMICAL
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Reactor Visualization */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <FlaskConical size={14} className="text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono uppercase">Lithium-Mediated Degradation</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Target: {pfas.bondEnergy} (Forever Chemical)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Cycle Diagram Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded border border-emerald-500/30 backdrop-blur-sm z-20 flex items-center gap-3">
                <div className="flex flex-col items-center">
                    <span className="text-[9px] text-rose-400 font-mono font-bold">PFAS</span>
                    <span className="text-[8px] text-slate-500">Waste</span>
                </div>
                <ArrowRight size={12} className="text-slate-400" />
                <div className="flex flex-col items-center">
                    <span className="text-[9px] text-amber-400 font-mono font-bold">LiF</span>
                    <span className="text-[8px] text-slate-500">Substrate</span>
                </div>
                <ArrowRight size={12} className="text-slate-400" />
                <div className="flex flex-col items-center">
                    <span className="text-[9px] text-emerald-400 font-mono font-bold">Resource</span>
                    <span className="text-[8px] text-slate-500">New Product</span>
                </div>
            </div>
        </div>

        {/* Metrics & Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Activity size={14} className="text-violet-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Reaction Metrics</h3>
                </div>
                <div className="space-y-2 text-xs font-mono text-slate-400">
                    <div className="flex justify-between">
                        <span>Desfluorination:</span>
                        <span className="text-white font-bold">{(pfas.desfluorination * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Method:</span>
                        <span className="text-cyan-400">ReMADE</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Arkhe Analog:</span>
                        <span className="text-amber-400">Solving the Unsolvable (∞ weight)</span>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Fuel size={14} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Circular Output</h3>
                </div>
                <div className="space-y-2">
                    {pfas.products.map((prod, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-slate-950 p-2 rounded border border-slate-800">
                            <span className="text-xs font-mono text-white">{prod.name} ({prod.formula})</span>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${prod.type === 'resource' ? 'bg-emerald-900/30 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                                {prod.type}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto bg-gradient-to-r from-emerald-950/20 via-slate-900/50 to-emerald-950/20 p-4 rounded-lg border border-emerald-900/20 text-center">
            <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Recycle size={12} /> The Loop is Closed
            </div>
            <p className="text-[10px] text-slate-500 font-mono italic">
                "What was eternal poison is now raw material. The coupling is broken, the energy reclaimed. Handover 99 complete."
            </p>
        </div>

      </div>
    </div>
  );
};

export default PFASLab;
