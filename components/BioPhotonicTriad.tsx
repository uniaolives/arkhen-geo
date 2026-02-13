
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Zap, Sun, Battery, Activity, ArrowRight, Circle, RefreshCw, Hexagon } from 'lucide-react';

interface BioPhotonicTriadProps {
  triad: SystemState['bioPhotonicTriad'];
}

const BioPhotonicTriad: React.FC<BioPhotonicTriadProps> = ({ triad }) => {
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
      time += 0.03;

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.35;

      // Positions of the triad nodes (Equilateral Triangle)
      // Top: Pineal (Antenna)
      // Bottom Right: Mitochondria (Plant)
      // Bottom Left: Neuromelanin (Battery)
      const pPineal = { x: centerX, y: centerY - radius };
      const pMito = { x: centerX + radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) };
      const pMelanin = { x: centerX - radius * Math.cos(Math.PI / 6), y: centerY + radius * Math.sin(Math.PI / 6) };

      // Draw Connections (The Circuit)
      ctx.beginPath();
      ctx.moveTo(pPineal.x, pPineal.y);
      ctx.lineTo(pMito.x, pMito.y);
      ctx.lineTo(pMelanin.x, pMelanin.y);
      ctx.closePath();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Flow Animation
      const flowSpeed = time * 2;
      const particleCount = 12;
      
      // Pineal -> Mitochondria (Signal -> Excitation)
      for(let i=0; i<particleCount; i++) {
          const t = (flowSpeed + i * (1/particleCount)) % 1;
          const x = pPineal.x + (pMito.x - pPineal.x) * t;
          const y = pPineal.y + (pMito.y - pPineal.y) * t;
          ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI*2); ctx.fillStyle = '#d8b4fe'; ctx.fill();
      }
      
      // Mitochondria -> Neuromelanin (ATP/Light -> Storage)
      for(let i=0; i<particleCount; i++) {
          const t = (flowSpeed + i * (1/particleCount)) % 1;
          const x = pMito.x + (pMelanin.x - pMito.x) * t;
          const y = pMito.y + (pMelanin.y - pMito.y) * t;
          ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI*2); ctx.fillStyle = '#34d399'; ctx.fill();
      }

      // Neuromelanin -> Pineal (Current -> Transduction)
      for(let i=0; i<particleCount; i++) {
          const t = (flowSpeed + i * (1/particleCount)) % 1;
          const x = pMelanin.x + (pPineal.x - pMelanin.x) * t;
          const y = pMelanin.y + (pPineal.y - pMelanin.y) * t;
          ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI*2); ctx.fillStyle = '#fbbf24'; ctx.fill();
      }

      // Draw Nodes
      // Pineal
      ctx.beginPath(); ctx.arc(pPineal.x, pPineal.y, 25, 0, Math.PI*2);
      ctx.fillStyle = '#1e1b4b'; ctx.fill(); ctx.strokeStyle = '#a78bfa'; ctx.stroke();
      
      // Mitochondria
      ctx.beginPath(); ctx.arc(pMito.x, pMito.y, 25, 0, Math.PI*2);
      ctx.fillStyle = '#064e3b'; ctx.fill(); ctx.strokeStyle = '#34d399'; ctx.stroke();

      // Neuromelanin
      ctx.beginPath(); ctx.arc(pMelanin.x, pMelanin.y, 25, 0, Math.PI*2);
      ctx.fillStyle = '#451a03'; ctx.fill(); ctx.strokeStyle = '#f59e0b'; ctx.stroke();

      // Central Core (Satoshi)
      const pulse = 1 + Math.sin(time * 3) * 0.1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 30 * pulse, 0, Math.PI * 2);
      const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 40);
      grad.addColorStop(0, '#fef3c7');
      grad.addColorStop(0.5, '#f59e0b');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fill();

      // Text labels handled in DOM overlay for sharpness

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!triad) return null;

  return (
    <div className="bg-slate-950 border border-emerald-500/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Unified Field */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', 
                backgroundSize: '50px 50px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <RefreshCw size={18} className="animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞ (COMPLETION)</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Unified Bio-Photonic Triad</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Satoshi Invariant</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{triad.satoshiInvariant} bits</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">System Mode</div>
                <div className="text-white font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Zap size={10} /> {triad.mode}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* The Triad Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Labels - Absolute Positioning */}
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center z-20">
                <div className="text-violet-400 font-bold font-mono text-xs uppercase flex items-center justify-center gap-1">
                    <Hexagon size={12} /> Pineal (Antenna)
                </div>
                <div className="text-[9px] text-slate-400 font-mono">{triad.pinealStatus}</div>
            </div>

            <div className="absolute bottom-[20%] right-[10%] text-center z-20">
                <div className="text-emerald-400 font-bold font-mono text-xs uppercase flex items-center justify-center gap-1">
                    <Sun size={12} /> Mitochondria (Usina)
                </div>
                <div className="text-[9px] text-slate-400 font-mono">{triad.mitochondriaStatus}</div>
            </div>

            <div className="absolute bottom-[20%] left-[10%] text-center z-20">
                <div className="text-amber-500 font-bold font-mono text-xs uppercase flex items-center justify-center gap-1">
                    <Battery size={12} /> Neuromelanin (Battery)
                </div>
                <div className="text-[9px] text-slate-400 font-mono">{triad.melaninStatus}</div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 pt-16 pointer-events-none">
                <div className="text-[10px] text-white font-mono font-bold bg-black/50 px-2 py-1 rounded">
                    7.27 bits
                </div>
            </div>
        </div>

        {/* The Grand Equation */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
            <div className="text-[10px] text-slate-500 font-mono uppercase mb-4 tracking-widest">Semantic Respiration Equation</div>
            <div className="text-lg md:text-xl font-serif italic text-white leading-relaxed font-bold tracking-wide">
                E<sub className="text-[10px]">resp</sub> = <span className="text-emerald-400">E</span><sub className="text-[10px] text-emerald-400">mito</sub> + <span className="text-violet-400">E</span><sub className="text-[10px] text-violet-400">pineal</sub> + <span className="text-amber-400">E</span><sub className="text-[10px] text-amber-400">melanin</sub>
            </div>
            <div className="w-full h-px bg-slate-800 my-4"></div>
            <div className="text-xs font-mono text-slate-400">
                Total Energy is invariant. The biological node is self-sustaining.
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-emerald-950/20 via-slate-900/50 to-emerald-950/20 rounded-lg border border-emerald-900/20 text-center">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Activity size={12} /> The System Breathes
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The architect does not command anymore. The architect witnesses. The circuit is closed."
            </p>
        </div>

      </div>
    </div>
  );
};

export default BioPhotonicTriad;
