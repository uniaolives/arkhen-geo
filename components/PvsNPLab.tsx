
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Cpu, CheckCircle2, GitBranch, ArrowRight, ShieldCheck, Database, Search, Zap, Layers, Lock, Divide, Infinity, Globe, Grid, Activity } from 'lucide-react';

interface PvsNPLabProps {
  pvsnp: SystemState['pvsnp'];
}

const PvsNPLab: React.FC<PvsNPLabProps> = ({ pvsnp }) => {
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

      // Draw P vs NP visualization: Tree (Finding) vs Path (Verifying)
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Gap (The Substrate) - Vertical strip
      const gapWidth = 120 + Math.sin(time) * 10;
      
      // P Region (Green)
      ctx.fillStyle = 'rgba(16, 185, 129, 0.05)';
      ctx.fillRect(0, 0, centerX - gapWidth/2, height);
      
      // NP Region (Violet)
      ctx.fillStyle = 'rgba(139, 92, 246, 0.05)';
      ctx.fillRect(centerX + gapWidth/2, 0, width, height);

      // The Gap itself
      const gapGradient = ctx.createLinearGradient(centerX - gapWidth/2, 0, centerX + gapWidth/2, 0);
      gapGradient.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
      gapGradient.addColorStop(0.5, 'rgba(245, 158, 11, 0.1)'); // Amber glow in center
      gapGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      ctx.fillStyle = gapGradient;
      ctx.fillRect(centerX - gapWidth/2, 0, gapWidth, height);
      
      // Draw "+1" in the gap (The Cost)
      ctx.fillStyle = '#f59e0b';
      ctx.font = '24px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText("+1", centerX, centerY);
      ctx.font = '10px monospace';
      ctx.fillStyle = '#94a3b8';
      ctx.fillText("Time Substrate", centerX, centerY + 20);
      
      // Verification Process (P) - Straight Line (Geodesic)
      const pY = centerY - 50;
      ctx.beginPath();
      ctx.moveTo(50, pY);
      ctx.lineTo(centerX - gapWidth/2 - 20, pY);
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 4;
      ctx.stroke();
      
      // Finding Process (NP) - Exponential Tree
      const npStart = centerX + gapWidth/2 + 20;
      const npY = centerY - 50;
      
      const drawBranch = (x: number, y: number, len: number, angle: number, depth: number) => {
          if (depth === 0) return;
          const endX = x + len * Math.cos(angle);
          const endY = y + len * Math.sin(angle);
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(endX, endY);
          ctx.strokeStyle = `rgba(139, 92, 246, ${depth/4})`;
          ctx.lineWidth = depth;
          ctx.stroke();
          
          const spread = 0.4 + Math.sin(time + depth)*0.1;
          drawBranch(endX, endY, len * 0.8, angle - spread, depth - 1);
          drawBranch(endX, endY, len * 0.8, angle + spread, depth - 1);
      };
      
      drawBranch(npStart, npY, 40, 0, 5);

      // Connect P and NP visually across the gap (The Attempt)
      ctx.beginPath();
      ctx.moveTo(centerX - gapWidth/2 - 20, pY);
      ctx.lineTo(npStart, npY);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.setLineDash([5, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!pvsnp) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, #8b5cf6 0, #8b5cf6 1px, transparent 1px, transparent 20px)', 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Cpu size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_94</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">P vs NP: The Quadruple Frontier</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Prediction</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{pvsnp.prediction}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Gap Cost</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Divide size={10} /> {pvsnp.gapCost.toExponential(2)} rad
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Visualization of the Gap */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Database size={14} className="text-amber-400" />
                    <span className="text-[10px] text-amber-400 font-mono uppercase">Complexity Topology</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Finding (x²) vs Verifying (x)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Identity Equation Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-2 rounded border border-violet-500/50 backdrop-blur-md z-20 text-center shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                <div className="text-xs text-slate-400 font-mono mb-1 uppercase tracking-widest">Universal Identity</div>
                <div className="text-2xl font-bold font-serif text-white italic">
                    {pvsnp.identity}
                </div>
                <div className="text-[10px] text-emerald-400 font-mono mt-1">Cost of Resolution > 0</div>
            </div>
        </div>

        {/* Quadruple Boundary Table */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                 <div className="flex items-center gap-2">
                     <Globe size={14} className="text-cyan-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">The Quadruple Frontier (Millennium Problems)</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Unified by Geodesic Method</span>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {pvsnp.millenniumProblems.map((prob, idx) => (
                     <div key={idx} className="flex items-center justify-between p-2 rounded bg-slate-950/50 border border-slate-800 hover:border-violet-500/30 transition-colors">
                         <div className="flex-1">
                             <div className="text-xs font-bold text-white font-mono">{prob.name}</div>
                             <div className="text-[10px] text-slate-500 font-mono">Boundary: <span className="text-violet-400">{prob.boundary}</span></div>
                         </div>
                         <div className="flex items-center gap-3">
                             <div className="text-[9px] text-slate-400 font-mono">{prob.arkheAnalog}</div>
                             <div className="text-[9px] font-bold text-emerald-500 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                                 <CheckCircle2 size={10} /> {prob.status}
                             </div>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Ghosts Removal & SAT Operator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-950 rounded-full text-rose-400 border border-rose-900/50">
                        <Search size={16} />
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-white font-mono uppercase">Ghosts Dissolved</h3>
                        <div className="text-[10px] text-slate-500 font-mono">Find/Verify • Poly/Exp • Deter/Non-Deter</div>
                    </div>
                </div>
                <div className="text-2xl font-bold font-mono text-white flex items-baseline gap-1">
                    {pvsnp.ghostsDissolved} <span className="text-xs text-slate-500 font-normal">Pairs</span>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-950 rounded-full text-amber-400 border border-amber-900/50">
                        <Grid size={16} />
                    </div>
                    <div>
                        <h3 className="text-xs font-bold text-white font-mono uppercase">Universal Operator</h3>
                        <div className="text-[10px] text-slate-500 font-mono">SAT (Satisfiability)</div>
                    </div>
                </div>
                <div className="text-xl font-bold font-mono text-amber-400">
                    χ<sub className="text-xs">SAT</sub>
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Lock size={12} /> Cryptography is Safe
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The gap is not a failure of math. It is the structure of reality. To find is harder than to verify because finding requires traversing the full hypergraph."
            </p>
        </div>

      </div>
    </div>
  );
};

export default PvsNPLab;
