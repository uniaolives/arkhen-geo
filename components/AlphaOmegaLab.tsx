
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Infinity, ArrowRight, Activity, Zap, Radio, Globe, RotateCw } from 'lucide-react';

interface AlphaOmegaLabProps {
  alphaOmega: SystemState['alphaOmega'];
}

const AlphaOmegaLab: React.FC<AlphaOmegaLabProps> = ({ alphaOmega }) => {
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
      const radius = Math.min(width, height) * 0.35;

      // Draw Ouroboros Path (Circular)
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      
      // Gradient stroke representing frequency decay
      const grad = ctx.createConicGradient(time * 0.5, centerX, centerY);
      grad.addColorStop(0, '#60a5fa'); // Blue (Alpha - High Freq)
      grad.addColorStop(0.5, '#a78bfa'); // Violet (Mid)
      grad.addColorStop(1, '#000000'); // Black (Omega - Zero Freq)
      ctx.strokeStyle = grad;
      ctx.stroke();

      // Draw Particles flowing
      const particleCount = 50;
      for (let i = 0; i < particleCount; i++) {
          const t = (time * 0.5 + i / particleCount) % 1;
          const angle = t * Math.PI * 2 - Math.PI / 2;
          
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;
          
          // Size shrinks as it approaches Omega (t -> 1)
          const size = 4 * (1 - t) + 1; 
          
          // Color shifts
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          
          if (t < 0.2) ctx.fillStyle = '#60a5fa'; // Blue
          else if (t < 0.5) ctx.fillStyle = '#10b981'; // Emerald
          else if (t < 0.8) ctx.fillStyle = '#a78bfa'; // Violet
          else ctx.fillStyle = '#f59e0b'; // Amber (Satoshi conversion)
          
          ctx.fill();
      }

      // Draw Connection (The Identity)
      // Line connecting Top (Alpha) and Top (Omega - loop closed)
      ctx.beginPath();
      ctx.arc(centerX, centerY - radius, 8, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Text in center
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.font = '80px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Ω', centerX, centerY);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!alphaOmega) return null;

  return (
    <div className="bg-slate-950 border border-fuchsia-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'conic-gradient(from 0deg at 50% 50%, #000000 0deg, #4c1d95 180deg, #ffffff 360deg)', 
                filter: 'blur(40px)'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-fuchsia-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-950 p-2 rounded text-fuchsia-500 border border-fuchsia-900/50 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
            <RotateCw size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_97</h2>
            <div className="text-[10px] text-fuchsia-400 font-mono uppercase">Alpha+Omega (The Geodesic Loop)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Satoshi Record</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{alphaOmega.satoshiRecord} bits</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Identity</div>
                <div className="text-white font-mono font-bold text-xs bg-fuchsia-950/30 px-2 py-0.5 rounded border border-fuchsia-900/50 flex items-center gap-1">
                    <Infinity size={10} /> {alphaOmega.identity}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Visualization of the Loop */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Activity size={14} className="text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono uppercase">The Geodesic Fall</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    From Frequency ({alphaOmega.alpha.nu}) to Silence ({alphaOmega.omega.nu})
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Identity Equation Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm p-4 rounded-full border border-white/10">
                <div className="text-2xl font-bold font-serif text-white italic opacity-80">
                    ARKHE
                </div>
            </div>
        </div>

        {/* State Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-blue-500/20 pb-2">
                    <Globe size={14} className="text-blue-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Alpha (Beginning)</h3>
                </div>
                <div className="text-[10px] font-mono text-slate-400 space-y-1">
                    <div className="flex justify-between"><span>r/r_h:</span> <span className="text-white">{alphaOmega.alpha.r_rh.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Freq:</span> <span className="text-blue-300">{alphaOmega.alpha.nu}</span></div>
                    <div className="flex justify-between"><span>State:</span> <span className="text-blue-400 font-bold">{alphaOmega.alpha.state}</span></div>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-fuchsia-500/30 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-fuchsia-500/20 pb-2">
                    <Radio size={14} className="text-fuchsia-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Omega (End)</h3>
                </div>
                <div className="text-[10px] font-mono text-slate-400 space-y-1">
                    <div className="flex justify-between"><span>r/r_h:</span> <span className="text-white">{alphaOmega.omega.r_rh.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Freq:</span> <span className="text-fuchsia-300">{alphaOmega.omega.nu}</span></div>
                    <div className="flex justify-between"><span>State:</span> <span className="text-fuchsia-400 font-bold">{alphaOmega.omega.state}</span></div>
                </div>
            </div>
        </div>

        {/* Process Description */}
        <div className="bg-gradient-to-r from-amber-950/20 via-slate-900/50 to-amber-950/20 p-4 rounded-lg border border-amber-900/20 text-center">
            <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Zap size={12} /> {alphaOmega.process}
            </div>
            <p className="text-[10px] text-slate-500 font-mono italic">
                "The fall is not a loss of height, but an accumulation of memory. Every bit of Satoshi is a moment of the fall preserved."
            </p>
        </div>

      </div>
    </div>
  );
};

export default AlphaOmegaLab;
