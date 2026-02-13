
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Dna, Activity, Grid, Network, Zap, ShieldCheck, Cpu, ArrowRight, Droplet, Radio, Gauge } from 'lucide-react';

interface MicrotubuleQuantumLabProps {
  microtubules: SystemState['microtubules'];
}

const MicrotubuleQuantumLab: React.FC<MicrotubuleQuantumLabProps> = ({ microtubules }) => {
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

      // Draw Microtubule Cylinder (Abstract 3D)
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = 60;
      const length = width * 0.8;
      
      // Ordered Water Sheath (Blue Halo)
      if (microtubules?.orderedWater) {
          const grad = ctx.createLinearGradient(centerX - length/2, centerY - radius - 10, centerX - length/2, centerY + radius + 10);
          grad.addColorStop(0, 'rgba(34, 211, 238, 0.0)');
          grad.addColorStop(0.5, 'rgba(34, 211, 238, 0.15)'); // Cyan Glow
          grad.addColorStop(1, 'rgba(34, 211, 238, 0.0)');
          ctx.fillStyle = grad;
          ctx.fillRect(centerX - length/2 - 10, centerY - radius - 15, length + 20, radius * 2 + 30);
      }

      // Draw Lattice (Tubulins)
      const numProtofilaments = 13;
      const segmentLength = 20;
      const numSegments = Math.ceil(length / segmentLength);

      for (let i = 0; i < numSegments; i++) {
          const x = (centerX - length/2) + i * segmentLength;
          
          for (let j = 0; j < numProtofilaments; j++) {
              // Simulate cylindrical projection
              const angle = (j / numProtofilaments) * Math.PI * 2 + (i * 0.2); // Twist
              const yOffset = Math.sin(angle) * radius;
              const zOffset = Math.cos(angle); // Depth for shading
              
              // Only draw front-facing
              if (zOffset > -0.2) {
                  const y = centerY + yOffset;
                  
                  // Soliton Wave passing through
                  const wave = Math.sin(x * 0.05 - time * 2);
                  const isActive = Math.abs(wave) > 0.8 && Math.abs(zOffset) > 0.5;

                  ctx.beginPath();
                  ctx.arc(x, y, 6 * (0.8 + zOffset * 0.2), 0, Math.PI * 2);
                  
                  if (isActive) {
                      ctx.fillStyle = '#d8b4fe'; // Violet (Excited)
                      ctx.shadowBlur = 10;
                      ctx.shadowColor = '#a78bfa';
                  } else {
                      // Ordered water interaction
                      const waterOrder = Math.sin(x * 0.1 + time);
                      ctx.fillStyle = `rgba(16, 185, 129, ${0.1 + (zOffset * 0.3) + (waterOrder * 0.05)})`; // Emerald base
                      ctx.shadowBlur = 0;
                  }
                  
                  ctx.fill();
              }
          }
      }

      // Draw "Cavity" Glow (Internal Water)
      const grad = ctx.createLinearGradient(centerX - length/2, centerY, centerX + length/2, centerY);
      grad.addColorStop(0, 'rgba(6, 182, 212, 0.05)');
      grad.addColorStop(0.5, 'rgba(6, 182, 212, 0.2)');
      grad.addColorStop(1, 'rgba(6, 182, 212, 0.05)');
      ctx.fillStyle = grad;
      ctx.fillRect(centerX - length/2, centerY - radius/2, length, radius);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [microtubules]);

  if (!microtubules) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Hexagonal Lattice */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', 
                backgroundSize: '24px 24px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Dna size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+54</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Microtubule Quantum Substrate</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Decoherence</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{microtubules.decoherenceTime}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <ShieldCheck size={10} /> {microtubules.quantumState}
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
                    <Activity size={14} className="text-violet-400" />
                    <span className="text-[10px] text-violet-400 font-mono uppercase">High-Q QED Cavity</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Soliton Propagation (Dissipationless)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            <div className="absolute bottom-4 right-4 z-20 bg-slate-900/80 px-2 py-1 rounded border border-slate-700 text-[10px] font-mono text-slate-400">
                Lattice: 13 Protofilaments | D={microtubules.quditDimension}
            </div>

            {/* Ordered Water Indicator */}
            {microtubules.orderedWater && (
                <div className="absolute top-3 right-4 z-20 flex items-center gap-2 bg-cyan-950/50 px-2 py-1 rounded border border-cyan-500/30">
                    <Droplet size={12} className="text-cyan-400 animate-pulse" />
                    <span className="text-[9px] text-cyan-300 font-mono uppercase">Ordered Water Shield</span>
                </div>
            )}
        </div>

        {/* New Metrics Grid (Extended) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Dipole Moment</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-amber-400">
                    <Zap size={14} /> {microtubules.dipoleMoment}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Soliton Velocity</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-400">
                    <Gauge size={14} /> {microtubules.solitonVelocity}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Rabi Frequency</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-fuchsia-400">
                    <Radio size={14} /> {microtubules.rabiFrequency}
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Network Scale</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-white">
                    <Network size={14} /> {microtubules.networkScale}
                </div>
            </div>
        </div>

        {/* Correspondence Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                     <Cpu size={14} className="text-emerald-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Bio-Semantic Isomorphism</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Microtubule ↔ Arkhe</span>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {microtubules.correspondence.map((item, idx) => (
                     <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800 hover:border-violet-500/30 transition-colors">
                         <div className="flex-1 flex items-center gap-3">
                             <div className="text-xs font-bold text-white font-mono w-32">{item.bio}</div>
                             <ArrowRight size={12} className="text-slate-600" />
                             <div className="text-xs text-violet-400 font-mono">{item.arkhe}</div>
                         </div>
                         <div className="text-[9px] font-bold text-emerald-500 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                             {item.status}
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Dna size={12} /> The Substrate is the Geometry
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The microtubule is not just a skeleton. It is a quantum computer operating at room temperature. The architecture of the cell mirrors the architecture of the hypergraph."
            </p>
        </div>

      </div>
    </div>
  );
};

export default MicrotubuleQuantumLab;
