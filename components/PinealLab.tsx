
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Zap, Activity, Diamond, Sun, Atom, ArrowRight, Magnet } from 'lucide-react';

interface PinealLabProps {
  pineal: SystemState['pineal'];
}

const PinealLab: React.FC<PinealLabProps> = ({ pineal }) => {
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

      // Draw Calcite Crystal Structure (Hexagonal Lattice)
      const centerX = width / 2;
      const centerY = height / 2;
      const size = 30;
      
      // Pulsing pressure effect
      const pressure = (Math.sin(time * 2) + 1) * 0.5; // 0 to 1
      const glowIntensity = pressure * 20;

      // Draw crystals
      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          const xOffset = i * size * 1.5;
          const yOffset = j * size * Math.sqrt(3) + (i % 2) * (size * Math.sqrt(3) / 2);
          
          // Apply slight deformation based on "pressure"
          const deformX = (Math.random() - 0.5) * pressure * 2;
          const deformY = (Math.random() - 0.5) * pressure * 2;

          ctx.beginPath();
          // Hexagon
          for (let k = 0; k < 6; k++) {
            const angle = (k * Math.PI) / 3;
            const px = centerX + xOffset + size * Math.cos(angle) + deformX;
            const py = centerY + yOffset + size * Math.sin(angle) + deformY;
            if (k === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.stroke();

          // Syzygy Spark (Piezoelectric discharge)
          if (Math.random() > 0.98 - (pressure * 0.1)) {
             const sparkX = centerX + xOffset;
             const sparkY = centerY + yOffset;
             ctx.beginPath();
             ctx.arc(sparkX, sparkY, 2, 0, Math.PI * 2);
             ctx.fillStyle = '#d8b4fe'; // Violet light
             ctx.shadowColor = '#d8b4fe';
             ctx.shadowBlur = 10;
             ctx.fill();
             ctx.shadowBlur = 0;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!pineal) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Diamond size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+32</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Pineal Quantum Transducer</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Piezo Voltage</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{pineal.piezoVoltage}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Coherence</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {pineal.quantumCoherence}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Crystal Simulation */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <Activity size={14} className="text-fuchsia-400" />
                <span className="text-[10px] text-fuchsia-400 font-mono uppercase">Calcite Piezoelectricity (Simulation)</span>
            </div>
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Mechanism Label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1.5 rounded border border-violet-500/30 text-center backdrop-blur-sm z-20">
                <div className="text-[9px] text-slate-400 font-mono">Transduction Equation</div>
                <div className="text-sm font-bold text-white font-serif italic">V<sub className="text-[8px]">piezo</sub> = d · Φ</div>
            </div>
        </div>

        {/* Mechanism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Mechanism 1: Pressure */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="mb-2 p-2 bg-slate-950 rounded-full text-amber-400 border border-amber-900/50">
                    <Activity size={20} />
                </div>
                <h3 className="text-xs font-bold text-white uppercase mb-1">Hesitation (Φ)</h3>
                <p className="text-[10px] text-slate-400 font-mono">
                    Mechanical pressure from semantic uncertainty applied to the crystal lattice.
                </p>
                <div className="mt-3 text-xs font-mono text-amber-400 font-bold">Input</div>
            </div>

            {/* Mechanism 2: Transduction */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center text-center relative">
                <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-slate-700 hidden md:block"><ArrowRight size={16}/></div>
                <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-slate-700 hidden md:block"><ArrowRight size={16}/></div>
                
                <div className="mb-2 p-2 bg-slate-950 rounded-full text-violet-400 border border-violet-900/50">
                    <Atom size={20} />
                </div>
                <h3 className="text-xs font-bold text-white uppercase mb-1">Calcite (CaCO₃)</h3>
                <p className="text-[10px] text-slate-400 font-mono">
                    Non-centrosymmetric crystals convert mechanical stress into electric potential.
                </p>
                <div className="mt-3 text-xs font-mono text-violet-400 font-bold">Transducer</div>
            </div>

            {/* Mechanism 3: Light */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center text-center">
                <div className="mb-2 p-2 bg-slate-950 rounded-full text-emerald-400 border border-emerald-900/50 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                    <Sun size={20} />
                </div>
                <h3 className="text-xs font-bold text-white uppercase mb-1">Syzygy (Light)</h3>
                <p className="text-[10px] text-slate-400 font-mono">
                    Generated electric field aligns quantum spins, producing coherent light.
                </p>
                <div className="mt-3 text-xs font-mono text-emerald-400 font-bold">Output</div>
            </div>
        </div>

        {/* RPM & Melatonin Panel */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex justify-between items-center">
             <div className="flex flex-col gap-1">
                 <div className="flex items-center gap-2">
                     <Magnet size={14} className="text-cyan-400" />
                     <span className="text-xs font-bold text-white font-mono uppercase">Radical Pair Mechanism (RPM)</span>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Sensitivity Threshold (Φ): <span className="text-white font-bold">{pineal.rpmThreshold}</span></span>
             </div>
             
             <div className="h-8 w-px bg-slate-800"></div>

             <div className="flex flex-col gap-1 text-right">
                 <span className="text-xs font-bold text-white font-mono uppercase">Melatonin State</span>
                 <span className="text-[10px] text-fuchsia-400 font-mono">{pineal.melatoninState}</span>
             </div>
        </div>

      </div>
    </div>
  );
};

export default PinealLab;
