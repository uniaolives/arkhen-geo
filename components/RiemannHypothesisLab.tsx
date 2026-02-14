
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Infinity, Divide, CheckCircle2, GitMerge, Lock, Sigma, FunctionSquare, Zap } from 'lucide-react';

interface RiemannHypothesisLabProps {
  riemann: SystemState['riemann'];
}

const RiemannHypothesisLab: React.FC<RiemannHypothesisLabProps> = ({ riemann }) => {
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
      const criticalLineX = centerX;

      // Draw Critical Line (Re(s) = 1/2)
      ctx.beginPath();
      ctx.moveTo(criticalLineX, 0);
      ctx.lineTo(criticalLineX, height);
      ctx.strokeStyle = '#f59e0b'; // Amber (Satoshi)
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw "Ghost" regions fading away
      const ghostOpacity = Math.max(0, 1 - time * 0.5); // Ghosts fade out
      ctx.fillStyle = `rgba(255, 255, 255, ${ghostOpacity * 0.1})`;
      ctx.fillRect(0, 0, width, height);

      // Draw Zeros (Oscillations on the line)
      const numZeros = 10;
      for (let i = 0; i < numZeros; i++) {
          const y = (i / numZeros) * height + (time * 20) % (height / numZeros);
          const active = Math.abs(y - height/2) < 50;
          
          ctx.beginPath();
          ctx.arc(criticalLineX, y, active ? 6 : 3, 0, Math.PI * 2);
          ctx.fillStyle = active ? '#ffffff' : '#fcd34d';
          ctx.fill();
          
          if (active) {
              ctx.shadowColor = '#f59e0b';
              ctx.shadowBlur = 20;
              ctx.stroke();
              ctx.shadowBlur = 0;
          }
      }

      // Draw Coupling Vectors (Primes vs Integers)
      // Left Side: Additive (Integers) -> Blue
      // Right Side: Multiplicative (Primes) -> Red
      
      const numVectors = 20;
      for (let i = 0; i < numVectors; i++) {
          const y = (i / numVectors) * height;
          const offset = Math.sin(y * 0.05 + time) * 20;
          
          // Integers converging
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(criticalLineX - 5, y + offset);
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)'; // Blue
          ctx.stroke();

          // Primes converging
          ctx.beginPath();
          ctx.moveTo(width, y);
          ctx.lineTo(criticalLineX + 5, y - offset);
          ctx.strokeStyle = 'rgba(244, 63, 94, 0.2)'; // Rose
          ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!riemann) return null;

  return (
    <div className="bg-slate-950 border border-amber-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(90deg, #f59e0b 0, #f59e0b 1px, transparent 1px, transparent 40px)', 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-amber-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-amber-950 p-2 rounded text-amber-500 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Infinity size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_100</h2>
            <div className="text-[10px] text-amber-400 font-mono uppercase">Riemann Hypothesis Integration</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Zeros Calculated</div>
                <div className="text-white font-mono font-bold text-sm">{riemann.zerosCalculated}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Critical Line</div>
                <div className="text-emerald-400 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Lock size={10} /> {riemann.criticalLineStatus}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Visualization of Critical Line */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <FunctionSquare size={14} className="text-amber-400" />
                    <span className="text-[10px] text-amber-400 font-mono uppercase">Zeta Function Coupling</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Additive (N) + Multiplicative (P) $\rightarrow$ Resolution (Re=1/2)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Identity Equation Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80 px-4 py-2 rounded border border-amber-500/50 backdrop-blur-md z-20 text-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <div className="text-xs text-slate-400 font-mono mb-1 uppercase tracking-widest">The Identity</div>
                <div className="text-2xl font-bold font-serif text-white italic">
                    {riemann.identityVerify}
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1">C + F = 1</div>
            </div>
        </div>

        {/* Ghosts Removal Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Ghosts Exorcised</h3>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-4xl font-bold font-mono text-white">{riemann.ghostsRemoved}</div>
                    <div className="text-xs text-slate-500 font-mono">/ 10</div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                    Statistical Interpretation Removed. Operator Identified.
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <GitMerge size={14} className="text-violet-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Zeta Zero Lock</h3>
                </div>
                <div className="space-y-1">
                    {riemann.zetaZero.map((zero, idx) => (
                        <div key={idx} className="flex justify-between items-center text-[10px] font-mono bg-slate-950/50 p-1.5 rounded border border-slate-800/50">
                            <span className="text-slate-400">ρ{idx+1}</span>
                            <span className="text-white">0.5 + i{zero.imag}</span>
                            <span className="text-amber-400 font-bold">{zero.status}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-amber-950/20 via-slate-900/50 to-amber-950/20 rounded-lg border border-amber-900/20 text-center">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Zap size={12} /> The Prime Number Theorem is a Law of Motion
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The zeros are not random. They are the resonant frequencies of the number line. The music of the primes is the hum of the Arkhe."
            </p>
        </div>

      </div>
    </div>
  );
};

export default RiemannHypothesisLab;
