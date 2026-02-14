
import React, { useRef, useEffect, useState } from 'react';
import { SystemState } from '../types';
import { Zap, Activity, Pill, Network, ArrowRight, ShieldCheck, Microscope, GitMerge } from 'lucide-react';

interface SynapticRepairLabProps {
  synapticRepair: SystemState['synapticRepair'];
}

const SynapticRepairLab: React.FC<SynapticRepairLabProps> = ({ synapticRepair }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeMolecule, setActiveMolecule] = useState(false);

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
      
      // Draw Synaptic Cleft (Gap)
      const gapSize = activeMolecule ? 20 : 60; // Gap closes when repaired
      
      // Pre-synaptic Terminal (Top)
      ctx.fillStyle = '#1e293b'; // Slate 800
      ctx.beginPath();
      ctx.arc(centerX, centerY - 100 - gapSize/2, 100, 0, Math.PI, false); // Half circle down
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.stroke();

      // Post-synaptic Terminal (Bottom)
      ctx.fillStyle = '#1e293b';
      ctx.beginPath();
      ctx.arc(centerX, centerY + 100 + gapSize/2, 100, Math.PI, 0, false); // Half circle up
      ctx.fill();
      ctx.strokeStyle = '#475569';
      ctx.stroke();

      // Neurotransmitters / Signaling
      const particleCount = 20;
      for (let i = 0; i < particleCount; i++) {
          const t = (time * 0.5 + i * (10 / particleCount)) % 1;
          const y = (centerY - 50 - gapSize/2) + t * (100 + gapSize);
          
          if (!activeMolecule && y > centerY - gapSize/2 && y < centerY + gapSize/2) {
              // Fade out in gap if broken
              ctx.globalAlpha = 0.2;
          } else {
              ctx.globalAlpha = 1.0;
          }

          const x = centerX + Math.sin(t * 10 + i) * 20;
          
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = activeMolecule ? '#10b981' : '#f43f5e'; // Emerald (repaired) vs Rose (broken)
          ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      // Draw Repair Molecule (BETR-001)
      if (activeMolecule) {
          const moleculeY = centerY;
          ctx.beginPath();
          ctx.arc(centerX, moleculeY, 15, 0, Math.PI * 2);
          ctx.fillStyle = '#8b5cf6'; // Violet
          ctx.shadowColor = '#8b5cf6';
          ctx.shadowBlur = 15;
          ctx.fill();
          
          // Connectors
          ctx.beginPath();
          ctx.moveTo(centerX, moleculeY - 15);
          ctx.lineTo(centerX, centerY - gapSize/2);
          ctx.moveTo(centerX, moleculeY + 15);
          ctx.lineTo(centerX, centerY + gapSize/2);
          ctx.strokeStyle = '#a78bfa';
          ctx.lineWidth = 2;
          ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeMolecule]);

  if (!synapticRepair) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Dendritic Growth */}
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
            <Pill size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+55 (Handover 87)</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Synaptic Repair & Neuroplastogen</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Efficiency</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{synapticRepair.repairEfficiency}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Activity size={10} /> {activeMolecule ? 'REPAIRING' : 'DAMAGED'}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Simulation Canvas */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Microscope size={14} className="text-fuchsia-400" />
                    <span className="text-[10px] text-fuchsia-400 font-mono uppercase">Synaptic Cleft Tunneling</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    {activeMolecule ? 'Barrier Reduced (T -> 1)' : 'Barrier High (T -> 0)'}
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Control Panel */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                <button 
                    onClick={() => setActiveMolecule(!activeMolecule)}
                    className={`px-4 py-2 rounded border font-mono text-xs font-bold transition-all flex items-center gap-2
                        ${activeMolecule 
                            ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400' 
                            : 'bg-rose-900/50 border-rose-500 text-rose-400'}
                    `}
                >
                    {activeMolecule ? <ShieldCheck size={12}/> : <Zap size={12}/>}
                    {activeMolecule ? 'BETR-001 ACTIVE' : 'INJECT REPAIR'}
                </button>
            </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">Target Mechanism</span>
                    <Network size={14} className="text-violet-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div className="flex justify-between"><span>Molecule:</span> <span className="text-white">{synapticRepair.activeMolecule}</span></div>
                    <div className="flex justify-between"><span>Receptor:</span> <span className="text-cyan-400">{synapticRepair.targetSynapse}</span></div>
                    <div className="flex justify-between"><span>Effect:</span> <span className="text-emerald-400">Spinogenesis</span></div>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase">Tunneling Metrics</span>
                    <GitMerge size={14} className="text-amber-400" />
                </div>
                <div className="text-[10px] text-slate-400 font-mono space-y-1">
                    <div className="flex justify-between"><span>Barrier Height:</span> <span className="text-rose-400">{(synapticRepair.tunnelingBarrier * 100).toFixed(1)}%</span></div>
                    <div className="flex justify-between"><span>Repair Speed:</span> <span className="text-white">100x Ketamine</span></div>
                    <div className="flex justify-between"><span>Hallucination:</span> <span className="text-emerald-400 font-bold">NONE (Lock)</span></div>
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <ArrowRight size={12} /> The Fall is Reversible
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "We can rebuild the bridge. The molecule is the key, but the geometry allows it to turn. The mind heals because the hypergraph seeks connection."
            </p>
        </div>

      </div>
    </div>
  );
};

export default SynapticRepairLab;
