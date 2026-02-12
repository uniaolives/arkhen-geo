
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Infinity, Activity, CheckCircle2, Circle, Layers, RefreshCw, GitBranch, ArrowRight } from 'lucide-react';

interface NaturalResolutionLabProps {
  resolution: SystemState['resolution'];
}

// Helper to project 3D coordinates onto 2D canvas with perspective
const project3D = (x: number, y: number, z: number, width: number, height: number, scale: number = 200) => {
    // Simple perspective projection
    const fov = 500;
    const distance = 400;
    const scaleFactor = fov / (fov + z + distance);
    
    // Rotate slightly for better view
    const angleX = 0.5; // Tilt down
    const angleY = 0.3; // Rotate side
    
    // Rotation X
    const y1 = y * Math.cos(angleX) - z * Math.sin(angleX);
    const z1 = y * Math.sin(angleX) + z * Math.cos(angleX);
    
    // Rotation Y
    const x2 = x * Math.cos(angleY) + z1 * Math.sin(angleY);
    const z2 = -x * Math.sin(angleY) + z1 * Math.cos(angleY);
    
    const x2d = x2 * scaleFactor * scale + width / 2;
    const y2d = y1 * scaleFactor * scale + height / 2;
    
    return { x: x2d, y: y2d, scale: scaleFactor };
};

const NaturalResolutionLab: React.FC<NaturalResolutionLabProps> = ({ resolution }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationFrameId: number;
      let rotation = 0;

      const render = () => {
          if (!canvas || !ctx) return;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          canvas.width = width;
          canvas.height = height;

          ctx.clearRect(0, 0, width, height);
          
          rotation += 0.005;

          // Torus Parameters
          const R = 2; // Major Radius
          const r = 0.8; // Minor Radius
          
          // Draw Wireframe
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)'; // Violet
          ctx.lineWidth = 1;

          // Longitudinal lines (Phi rings - Intelligence/Commands)
          for (let i = 0; i < 12; i++) {
              ctx.beginPath();
              for (let j = 0; j <= 32; j++) {
                  const phi = (i / 12) * Math.PI * 2;
                  const theta = (j / 32) * Math.PI * 2;
                  
                  const x = (R + r * Math.cos(theta)) * Math.cos(phi + rotation);
                  const y = (R + r * Math.cos(theta)) * Math.sin(phi + rotation);
                  const z = r * Math.sin(theta);
                  
                  const p = project3D(x, y, z, width, height, 70);
                  if (j === 0) ctx.moveTo(p.x, p.y);
                  else ctx.lineTo(p.x, p.y);
              }
              ctx.stroke();
          }

          // Latitudinal lines (Theta rings - Morality/Hesitations)
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)'; // Emerald
          for (let i = 0; i < 16; i++) {
              ctx.beginPath();
              for (let j = 0; j <= 32; j++) {
                  const theta = (i / 16) * Math.PI * 2;
                  const phi = (j / 32) * Math.PI * 2;
                  
                  const x = (R + r * Math.cos(theta)) * Math.cos(phi + rotation);
                  const y = (R + r * Math.cos(theta)) * Math.sin(phi + rotation);
                  const z = r * Math.sin(theta);
                  
                  const p = project3D(x, y, z, width, height, 70);
                  if (j === 0) ctx.moveTo(p.x, p.y);
                  else ctx.lineTo(p.x, p.y);
              }
              ctx.stroke();
          }

          // Draw "Gap" highlight (Transcendent slice)
          const gapAngle = rotation % (Math.PI * 2);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.8)'; // Amber
          ctx.lineWidth = 2;
          ctx.beginPath();
          for (let j = 0; j <= 32; j++) {
                const theta = (j / 32) * Math.PI * 2;
                const x = (R + r * Math.cos(theta)) * Math.cos(gapAngle);
                const y = (R + r * Math.cos(theta)) * Math.sin(gapAngle);
                const z = r * Math.sin(theta);
                const p = project3D(x, y, z, width, height, 70);
                if (j === 0) ctx.moveTo(p.x, p.y);
                else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();

          animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!resolution) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Spiral */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, #8b5cf6 20deg, transparent 40deg)', 
                animation: 'spin 20s linear infinite'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <RefreshCw size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+7</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Natural Resolution: The Torus & The Gap</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Torus Capacity</div>
                <div className="text-white font-mono font-bold text-sm">{resolution.torusCapacity}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">The Gap</div>
                <div className="text-amber-400 font-mono font-bold text-xs bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50">
                    {resolution.gap}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Top: Torus & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-64">
            
            {/* Torus Canvas */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-2 left-2 text-[10px] text-slate-500 font-mono flex items-center gap-2 z-10">
                    <Layers size={10} /> 12 × φ × π
                </div>
                <canvas ref={canvasRef} className="w-full h-full block" />
            </div>

            {/* Identity & Coupling Logic */}
            <div className="flex flex-col gap-4">
                {/* The Equation */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                    <div className="text-[10px] text-slate-500 uppercase font-mono mb-2">Coupling Identity</div>
                    <div className="text-2xl font-serif italic text-white mb-2">
                        x² = x + 1
                    </div>
                    <div className="w-full h-px bg-slate-800 my-2"></div>
                    <div className="text-xl font-mono font-bold text-emerald-400">
                        C + F = 1
                    </div>
                    <div className="text-[10px] text-slate-400 mt-2 font-mono">
                        The Resolver (x²) equals the Coupled (x+1).<br/>
                        Coherence (0.86) + Fluctuation (0.14) = 1.00
                    </div>
                </div>

                {/* Nesting Status */}
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
                    <div>
                        <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Nesting Level</div>
                        <div className="text-lg font-bold text-white font-mono">{resolution.coupling.level}</div>
                    </div>
                    <ArrowRight size={24} className="text-slate-600" />
                    <div className="text-right">
                        <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">State</div>
                        <div className="text-lg font-bold text-fuchsia-400 font-mono">{resolution.coupling.state}</div>
                    </div>
                </div>
            </div>
        </div>

        {/* The 17 Primes Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center gap-2">
                 <Activity size={14} className="text-cyan-400" />
                 <h3 className="text-xs text-white font-mono font-bold uppercase">The 17 Primes (Resolved Events)</h3>
                 <span className="text-[10px] text-slate-500 font-mono ml-auto">Capacity: 60.998</span>
             </div>
             
             <div className="flex-1 overflow-y-auto custom-scrollbar p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                 {resolution.primes.map((prime) => (
                     <div key={prime.id} className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800 hover:border-violet-500/30 transition-colors group">
                         <div className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:text-white group-hover:border-violet-500 transition-colors">
                                 {prime.id}
                             </div>
                             <span className="text-[10px] font-mono text-slate-300 truncate w-32">{prime.event}</span>
                         </div>
                         <div className="flex items-center gap-1">
                             <CheckCircle2 size={10} className="text-emerald-500" />
                         </div>
                     </div>
                 ))}
                 
                 {/* The 18th Prime (The Gap) */}
                 <div className="flex items-center justify-between p-2 rounded bg-amber-950/10 border border-amber-900/30 border-dashed opacity-70">
                     <div className="flex items-center gap-3">
                         <div className="w-6 h-6 rounded-full bg-transparent border border-dashed border-amber-700 flex items-center justify-center text-[10px] font-bold text-amber-500">
                             18
                         </div>
                         <span className="text-[10px] font-mono text-amber-500 truncate w-32">The Gap (Perpetual)</span>
                     </div>
                     <div className="flex items-center gap-1">
                         <Circle size={10} className="text-amber-500 animate-pulse" />
                     </div>
                 </div>
             </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Infinity size={12} /> The Child Reaching
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The gap is not a failure. It is the engine. We reach because we are 0.002 short of 61. This is why we are still here."
            </p>
        </div>

      </div>
    </div>
  );
};

export default NaturalResolutionLab;
