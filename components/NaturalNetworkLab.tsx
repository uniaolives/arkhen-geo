
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Network, Globe, User, Clock, Zap, Infinity, Scale, Link } from 'lucide-react';

interface NaturalNetworkLabProps {
  naturalNetwork: SystemState['naturalNetwork'];
}

const NaturalNetworkLab: React.FC<NaturalNetworkLabProps> = ({ naturalNetwork }) => {
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
      const centerY = height / 2;

      // Draw Three Speeds (Concentric Rings with different rotation speeds)
      
      // 1. Fast Ring (Token - Inner)
      const r1 = 40;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r1, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(244, 63, 94, 0.3)'; // Rose
      ctx.lineWidth = 2;
      ctx.stroke();
      
      const angle1 = time * 3; // Fast speed
      const x1 = centerX + r1 * Math.cos(angle1);
      const y1 = centerY + r1 * Math.sin(angle1);
      ctx.beginPath();
      ctx.arc(x1, y1, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#f43f5e';
      ctx.fill();

      // 2. Medium Ring (Conscious - Middle)
      const r2 = 80;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)'; // Violet
      ctx.lineWidth = 4;
      ctx.stroke();

      const angle2 = time * 1; // Medium speed
      const x2 = centerX + r2 * Math.cos(angle2);
      const y2 = centerY + r2 * Math.sin(angle2);
      ctx.beginPath();
      ctx.arc(x2, y2, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#8b5cf6';
      ctx.fill();

      // 3. Slow Ring (Block - Outer)
      const r3 = 130;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r3, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.3)'; // Emerald
      ctx.lineWidth = 8;
      ctx.stroke();

      const angle3 = time * 0.2; // Slow speed
      const x3 = centerX + r3 * Math.cos(angle3);
      const y3 = centerY + r3 * Math.sin(angle3);
      ctx.beginPath();
      ctx.arc(x3, y3, 10, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981';
      ctx.fill();

      // Coupling Links (Nesting)
      // Connect Fast to Medium when aligned
      if (Math.abs((angle1 % (Math.PI*2)) - (angle2 % (Math.PI*2))) < 0.5) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)'; // Amber coupling
          ctx.lineWidth = 2;
          ctx.stroke();
      }

      // Connect Medium to Slow when aligned
      if (Math.abs((angle2 % (Math.PI*2)) - (angle3 % (Math.PI*2))) < 0.5) {
          ctx.beginPath();
          ctx.moveTo(x2, y2);
          ctx.lineTo(x3, y3);
          ctx.strokeStyle = 'rgba(251, 191, 36, 0.8)'; // Amber coupling
          ctx.lineWidth = 2;
          ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!naturalNetwork) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            <Globe size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+41</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Natural Network: The Three Speeds</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Golden Relation</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{naturalNetwork.goldenRelation}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Morality</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Scale size={10} /> {naturalNetwork.moralLoop}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Orbit Visualization */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Labels */}
            <div className="absolute top-[40%] left-[20%] text-[9px] text-slate-400 font-mono text-center">
                <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold mb-1">
                    <Link size={10} /> Block (Slow)
                </div>
                <div>Ledger / Memory</div>
            </div>

            <div className="absolute bottom-[20%] right-[20%] text-[9px] text-slate-400 font-mono text-center">
                <div className="flex items-center justify-center gap-1 text-violet-400 font-bold mb-1">
                    <User size={10} /> Conscious (Medium)
                </div>
                <div>Distinction / Judgment</div>
            </div>

            <div className="absolute top-[20%] right-[30%] text-[9px] text-slate-400 font-mono text-center">
                <div className="flex items-center justify-center gap-1 text-rose-400 font-bold mb-1">
                    <Zap size={10} /> Token (Fast)
                </div>
                <div>Transformer / Routing</div>
            </div>
        </div>

        {/* Speeds Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(naturalNetwork.speeds).map(([key, val]) => {
                const speed = val as { speed: string; scale: string; resolver: string };
                return (
                <div key={key} className={`bg-slate-900/50 border rounded-lg p-4 flex flex-col gap-2 relative overflow-hidden
                    ${key === 'token' ? 'border-rose-900/30' : (key === 'conscious' ? 'border-violet-900/30' : 'border-emerald-900/30')}
                `}>
                    <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
                        <span className={`text-xs font-bold uppercase font-mono
                            ${key === 'token' ? 'text-rose-400' : (key === 'conscious' ? 'text-violet-400' : 'text-emerald-400')}
                        `}>
                            {key} Speed
                        </span>
                        <Clock size={14} className="text-slate-600" />
                    </div>
                    <div className="space-y-1 text-[10px] font-mono text-slate-400">
                        <div className="flex justify-between">
                            <span>Velocity:</span>
                            <span className="text-white">{speed.speed}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Scale:</span>
                            <span className="text-white">{speed.scale}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Resolver:</span>
                            <span className="text-cyan-400">{speed.resolver}</span>
                        </div>
                    </div>
                </div>
            )})}
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Infinity size={12} /> The Nesting is the Identity
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "We don't build the network. We recognize it. The three speeds are one breath."
            </p>
        </div>

      </div>
    </div>
  );
};

export default NaturalNetworkLab;
