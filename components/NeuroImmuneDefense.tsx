
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { ShieldCheck, Activity, Radio, AlertTriangle, Syringe, HeartPulse, Scale, Dna, Mic2, Shield } from 'lucide-react';

interface NeuroImmuneDefenseProps {
  neuroImmune: SystemState['neuroImmune'];
}

const NeuroImmuneDefense: React.FC<NeuroImmuneDefenseProps> = ({ neuroImmune }) => {
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

      // Draw Spleen (Hub)
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 40, 25, Math.PI / 6, 0, Math.PI * 2);
      ctx.fillStyle = '#4c1d95'; // Dark Violet
      ctx.fill();
      ctx.strokeStyle = '#8b5cf6';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Ultrasound Waves (Concentric Rings)
      for (let i = 0; i < 5; i++) {
          const r = (time * 10 + i * 20) % 100;
          const opacity = 1 - r / 100;
          ctx.beginPath();
          ctx.arc(centerX, centerY, r + 40, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(34, 211, 238, ${opacity * 0.5})`; // Cyan waves
          ctx.lineWidth = 1;
          ctx.stroke();
      }

      // Cytokine Flow (Particles being suppressed)
      const numParticles = 20;
      for (let i = 0; i < numParticles; i++) {
          const angle = (i / numParticles) * Math.PI * 2 + time * 0.2;
          const r = 80 + Math.sin(time + i) * 10;
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;

          // Inflammatory Cytokines (Red, fading)
          if (i % 2 === 0) {
              const fade = (Math.sin(time + i) + 1) / 2;
              ctx.beginPath();
              ctx.arc(x, y, 3, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(244, 63, 94, ${fade * 0.3})`; // Rose (Suppressed)
              ctx.fill();
          } 
          // Antibodies (Green, stable)
          else {
              ctx.beginPath();
              ctx.arc(x, y, 3, 0, Math.PI * 2);
              ctx.fillStyle = '#10b981'; // Emerald (Preserved)
              ctx.fill();
          }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!neuroImmune) return null;

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
            <ShieldCheck size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_91</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Splenic Ultrasound Modulation</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Modulation</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">NON-INVASIVE</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Activity size={10} className="animate-pulse" /> {neuroImmune.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Spleen Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Radio size={14} className="text-cyan-400" />
                    <span className="text-[10px] text-cyan-400 font-mono uppercase">Target: {neuroImmune.target}</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Ultrasound Intensity: {(neuroImmune.ultrasound.intensity * 100).toFixed(0)}%
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Legend */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded border border-slate-700 backdrop-blur-sm z-20 flex gap-4 text-[9px] font-mono">
                <span className="text-rose-400 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500"></div> TNF/IL-1β (Falling)</span>
                <span className="text-emerald-400 flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Antibodies (Stable)</span>
            </div>
        </div>

        {/* Cytokine & Pathway Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Cytokine Levels */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Scale size={14} className="text-rose-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Inflammatory Markers</h3>
                </div>
                
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">TNF</span>
                        <div className="flex-1 mx-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-500 transition-all duration-1000" style={{ width: `${neuroImmune.cytokines.tnf.level * 100}%` }}></div>
                        </div>
                        <span className="text-[10px] font-bold text-rose-400">{neuroImmune.cytokines.tnf.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">IL-1β</span>
                        <div className="flex-1 mx-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-rose-500 transition-all duration-1000" style={{ width: `${neuroImmune.cytokines.il1b.level * 100}%` }}></div>
                        </div>
                        <span className="text-[10px] font-bold text-rose-400">{neuroImmune.cytokines.il1b.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">Antibodies</span>
                        <div className="flex-1 mx-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 transition-all duration-1000" style={{ width: `${neuroImmune.cytokines.antibodies.level * 100}%` }}></div>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400">{neuroImmune.cytokines.antibodies.status}</span>
                    </div>
                </div>
            </div>

            {/* Pathway Suppression */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Dna size={14} className="text-amber-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Targeted Pathways</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                    {neuroImmune.pathways.map((path, idx) => (
                        <div key={idx} className="bg-slate-950 p-2 rounded border border-slate-800 flex justify-between items-center">
                            <span className="text-[10px] font-mono text-slate-300">{path.name}</span>
                            <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${path.status === 'INHIBITED' ? 'bg-rose-900/30 text-rose-400' : 'bg-emerald-900/30 text-emerald-400'}`}>
                                {path.status}
                            </span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-auto pt-2 text-[10px] text-slate-500 font-mono italic text-center">
                    "Selective inhibition. The structure is preserved."
                </div>
            </div>
        </div>

        {/* Clinical Application Footer */}
        <div className="mt-auto bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 p-4 rounded-lg border border-violet-900/20 flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest">
                <HeartPulse size={12} /> Clinical Horizon
            </div>
            <div className="flex gap-2 justify-center flex-wrap">
                {neuroImmune.clinicalPotential.map((pot, i) => (
                    <span key={i} className="text-[10px] bg-violet-900/30 text-violet-200 px-2 py-1 rounded border border-violet-500/30">
                        {pot}
                    </span>
                ))}
            </div>
            <p className="text-[10px] text-slate-500 font-mono italic mt-1">
                "We do not cut. We tune. The hypergraph heals through resonance."
            </p>
        </div>

      </div>
    </div>
  );
};

export default NeuroImmuneDefense;
