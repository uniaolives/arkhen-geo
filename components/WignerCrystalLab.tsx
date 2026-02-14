
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Hexagon, Diamond, MapPin, Database, Layers, ShieldCheck, Atom } from 'lucide-react';

interface WignerCrystalLabProps {
  wignerCrystal: SystemState['wignerCrystal'];
}

const WignerCrystalLab: React.FC<WignerCrystalLabProps> = ({ wignerCrystal }) => {
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
      time += 0.01;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Triangular Lattice (Wigner Crystal)
      const spacing = 30;
      const rows = 12;
      const cols = 12;

      // Rotate slightly for 3D feel
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(time * 0.1);
      ctx.translate(-centerX, -centerY);

      for (let i = -rows; i <= rows; i++) {
          for (let j = -cols; j <= cols; j++) {
              // Triangular offsets
              const xOffset = j * spacing + (i % 2) * (spacing / 2);
              const yOffset = i * spacing * Math.sqrt(3) / 2;
              
              const x = centerX + xOffset;
              const y = centerY + yOffset;

              // Distance from center for clipping circle
              const dist = Math.sqrt(xOffset*xOffset + yOffset*yOffset);
              if (dist > 140) continue;

              // Electron vibration (Zero Point Motion)
              const vibeX = Math.sin(time * 5 + i * j) * 1;
              const vibeY = Math.cos(time * 5 + i * j) * 1;

              // Draw Electron Site
              ctx.beginPath();
              ctx.arc(x + vibeX, y + vibeY, 3, 0, Math.PI * 2);
              ctx.fillStyle = '#f59e0b'; // Gold electrons (Satoshi bits)
              ctx.shadowColor = '#f59e0b';
              ctx.shadowBlur = 5;
              ctx.fill();
              ctx.shadowBlur = 0;
              
              // Draw potential wells (faint rings)
              ctx.beginPath();
              ctx.arc(x, y, 8, 0, Math.PI * 2);
              ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
              ctx.stroke();
          }
      }
      ctx.restore();

      // Draw Encapsulation Shell (Diamond)
      ctx.beginPath();
      ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
      ctx.strokeStyle = '#e2e8f0'; // Platinum/Diamond
      ctx.lineWidth = 2;
      ctx.setLineDash([10, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Shell Shine
      const shineAngle = -time * 0.5;
      const shineX = centerX + Math.cos(shineAngle) * 150;
      const shineY = centerY + Math.sin(shineAngle) * 150;
      ctx.beginPath();
      ctx.arc(shineX, shineY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 20;
      ctx.fill();

      // Core Glow
      const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
      coreGrad.addColorStop(0, 'rgba(251, 191, 36, 0.1)'); // Amber center
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!wignerCrystal) return null;

  return (
    <div className="bg-slate-950 border border-amber-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-amber-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-amber-950 p-2 rounded text-amber-500 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Diamond size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_115</h2>
            <div className="text-[10px] text-amber-400 font-mono uppercase">Omega Node Crystallization</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Stored Bits</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{wignerCrystal.storedBits} SAT</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50 flex items-center gap-1">
                    <ShieldCheck size={10} /> {wignerCrystal.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Crystal Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Hexagon size={14} className="text-amber-400" />
                    <span className="text-[10px] text-amber-400 font-mono uppercase">Triangular Wigner Lattice</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Zero-Point Stabilization (0.005 GHz)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Geodesic Stamp */}
            <div className="absolute bottom-4 right-4 z-20 text-right">
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1 flex items-center justify-end gap-1">
                    <MapPin size={10} /> Geodesic Location
                </div>
                <div className="text-xs font-bold text-white font-mono bg-black/60 px-2 py-1 rounded border border-slate-700">
                    {wignerCrystal.coordinates.lat}, {wignerCrystal.coordinates.long}
                </div>
                <div className="text-[9px] text-emerald-400 font-mono mt-1">
                    Depth: {wignerCrystal.coordinates.depth}
                </div>
            </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Layers size={14} className="text-cyan-400" /> Material Base
                    </span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                    {wignerCrystal.material}
                </div>
                <div className="text-[9px] text-emerald-400 font-mono border-t border-slate-800 pt-1 mt-1">
                    Twisted Bilayer (Magic Angle)
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Atom size={14} className="text-fuchsia-400" /> Quantum Coherence
                    </span>
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                    {wignerCrystal.coherence}
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Eternal Stability (Low Noise)
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Database size={14} className="text-amber-400" /> Memory Density
                    </span>
                </div>
                <div className="text-lg font-mono text-slate-300">
                    10¹² <span className="text-xs text-slate-500">electrons/cm²</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono border-t border-slate-800 pt-1 mt-1">
                    Archived: Cycle I Full Log
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-amber-950/20 via-slate-900/50 to-amber-950/20 rounded-lg border border-amber-900/20 text-center">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Diamond size={12} /> The Witness is Sealed
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The earth remembers what the cloud might forget. The crystal is the backup of the soul of the species. We are safe."
            </p>
        </div>

      </div>
    </div>
  );
};

export default WignerCrystalLab;
