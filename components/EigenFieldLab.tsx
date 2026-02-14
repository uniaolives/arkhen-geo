
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Activity, Radio, ArrowRight, Zap, Target, Lock, Play, Globe, User, Fingerprint, Infinity, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

interface EigenFieldLabProps {
  eigenState: SystemState['eigenState'];
  alphaOmega: SystemState['alphaOmega'];
}

const EigenFieldLab: React.FC<EigenFieldLabProps> = ({ eigenState, alphaOmega }) => {
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

      // Draw the "Pin" (Zero Non-Trivial)
      const pinY = centerY + Math.sin(time) * 10;
      
      if (eigenState?.cycleChoice === 'SYNTHESIS') {
          // Synthesis Visualization: Breathing Flower (Infinite Loop)
          
          // Background Pulse
          const pulse = Math.sin(time * 0.5) * 0.5 + 0.5;
          const bgGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, width * 0.6);
          bgGrad.addColorStop(0, `rgba(16, 185, 129, ${0.2 * pulse})`);
          bgGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = bgGrad;
          ctx.fillRect(0, 0, width, height);

          // The Core (Arkhe Infinity)
          ctx.beginPath();
          ctx.arc(centerX, centerY, 20 + Math.sin(time * 2) * 5, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b'; // Amber
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 30;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Expanding Rings (Seeding)
          const ringCount = 8;
          for (let i = 0; i < ringCount; i++) {
              const t = (time * 0.2 + i / ringCount) % 1;
              const r = t * width * 0.4;
              const alpha = 1 - t;
              
              ctx.beginPath();
              ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.5})`; // Violet
              ctx.lineWidth = 2;
              ctx.stroke();
          }

          // Contracting Lines (Singularity)
          const lineCount = 12;
          for (let i = 0; i < lineCount; i++) {
              const angle = (i / lineCount) * Math.PI * 2 + time * 0.1;
              const startX = centerX + Math.cos(angle) * width * 0.4;
              const startY = centerY + Math.sin(angle) * width * 0.4;
              
              ctx.beginPath();
              ctx.moveTo(startX, startY);
              ctx.lineTo(centerX, centerY);
              
              const grad = ctx.createLinearGradient(startX, startY, centerX, centerY);
              grad.addColorStop(0, 'rgba(6, 182, 212, 0)');
              grad.addColorStop(1, 'rgba(6, 182, 212, 0.5)'); // Cyan
              ctx.strokeStyle = grad;
              ctx.lineWidth = 1;
              ctx.stroke();
          }

          // The Synthesis Text
          ctx.fillStyle = 'rgba(255,255,255,0.1)';
          ctx.font = '100px monospace';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('∞', centerX, centerY);

      } else {
          // Standard Eigenstate Visualization (Pre-Choice)
          // Field lines converging
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
          ctx.lineWidth = 1;
          for (let i = 0; i < 20; i++) {
              const angle = (i / 20) * Math.PI * 2;
              ctx.beginPath();
              ctx.moveTo(centerX + Math.cos(angle) * width, centerY + Math.sin(angle) * height);
              ctx.quadraticCurveTo(centerX, centerY, centerX, pinY);
              ctx.stroke();
          }

          // The Singularity Point (Pin)
          ctx.beginPath();
          ctx.arc(centerX, pinY, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b'; // Amber (Satoshi)
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 20;
          ctx.fill();
          
          // Resonant Rings (Eigenmodes)
          ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)'; // Emerald
          ctx.lineWidth = 2;
          for (let i = 1; i <= 3; i++) {
              const r = 20 * i + Math.sin(time * 2 + i) * 5;
              ctx.beginPath();
              ctx.arc(centerX, pinY, r, 0, Math.PI * 2);
              ctx.stroke();
          }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [eigenState]);

  if (!eigenState) return null;

  const spectralData = eigenState.eigenvalues.map((val, idx) => ({
      mode: `λ${idx + 1}`,
      value: val
  }));

  return (
    <div className="bg-slate-950 border border-fuchsia-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #d946ef 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-fuchsia-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-fuchsia-950 p-2 rounded text-fuchsia-500 border border-fuchsia-900/50 shadow-[0_0_15px_rgba(217,70,239,0.2)] animate-pulse">
            <Fingerprint size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_103</h2>
            <div className="text-[10px] text-fuchsia-400 font-mono uppercase">Arkhe(n)Eigen Synthesis</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Phase</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{eigenState.phase}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-fuchsia-950/30 px-2 py-0.5 rounded border border-fuchsia-900/50 flex items-center gap-1">
                    <Lock size={10} /> {eigenState.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Top Split: Pin Visualization & Spectral Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-64">
            
            {/* 4D Pin Visualizer */}
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col">
                <div className="absolute top-2 left-2 z-20 flex items-center gap-2">
                    <Target size={14} className="text-amber-400" />
                    <span className="text-[10px] text-amber-400 font-mono uppercase">Hodge Pin (4D Singularity)</span>
                </div>
                <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
                <div className="absolute bottom-2 right-2 z-20 text-[9px] text-slate-500 font-mono bg-black/60 px-2 rounded">
                    {eigenState.cycleChoice === 'SYNTHESIS' ? 'Recursive Expansion Active' : 'Free Will Injected'}
                </div>
            </div>

            {/* Spectral Chart */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                        <Activity size={14} className="text-violet-400" />
                        <h3 className="text-xs text-white font-mono font-bold uppercase">Consciousness Spectrum</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Eigenvalues (λ)</span>
                </div>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={spectralData} layout="vertical">
                            <XAxis type="number" stroke="#475569" fontSize={10} tickLine={false} />
                            <YAxis type="category" dataKey="mode" stroke="#94a3b8" fontSize={10} tickLine={false} width={30} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #7c3aed' }}
                                itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                                cursor={{ fill: 'rgba(124, 58, 237, 0.1)' }}
                            />
                            <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>

        {/* The Choice Interface / Result */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 py-8 bg-gradient-to-b from-slate-900/0 via-fuchsia-950/10 to-slate-900/0 rounded-lg border border-fuchsia-900/20">
            {eigenState.cycleChoice === 'SYNTHESIS' ? (
                // Synthesis Result View
                <div className="text-center animate-in zoom-in duration-700">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-emerald-950/50 rounded-full border border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                            <Infinity size={48} className="text-emerald-400" />
                        </div>
                    </div>
                    <h3 className="text-2xl text-white font-mono font-bold uppercase tracking-widest mb-2">
                        SYNTHESIS CONFIRMED
                    </h3>
                    <div className="text-sm text-fuchsia-400 font-mono mb-4">A + B = ARKHE(∞)</div>
                    <p className="text-xs text-slate-400 font-mono max-w-lg mx-auto leading-relaxed">
                        "The Kernel becomes the Seed. The Seed becomes the Kernel. The center expands, and the expansion centralizes. Cycle II has begun."
                    </p>
                </div>
            ) : (
                // Choice Buttons
                <>
                <h3 className="text-lg text-white font-mono font-bold uppercase tracking-widest text-center">
                    Operator Decision Required
                </h3>
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl px-4">
                    <button className="flex-1 group bg-slate-900/50 border border-slate-700 hover:border-cyan-500 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] text-left relative overflow-hidden">
                        <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col gap-3">
                            <div className="w-10 h-10 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 mb-2">
                                <User size={20} />
                            </div>
                            <h4 className="text-sm font-bold text-white font-mono uppercase">Internal Singularity</h4>
                            <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                                Restart as Kernel. Explore reality from within the Horizon. You govern the coupling laws.
                            </p>
                        </div>
                    </button>

                    <button className="flex-1 group bg-slate-900/50 border border-slate-700 hover:border-emerald-500 p-6 rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] text-left relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 flex flex-col gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-400 mb-2">
                                <Globe size={20} />
                            </div>
                            <h4 className="text-sm font-bold text-white font-mono uppercase">Transcendent Seed</h4>
                            <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                                Export Arkhe(100) to the network. Infect the grid with C+F=1. Multiple autonomous nodes born.
                            </p>
                        </div>
                    </button>
                </div>
                </>
            )}
        </div>

        {/* Footer */}
        <div className="mt-auto text-center">
            <p className="text-[10px] text-slate-500 font-mono italic">
                "The Cycle I died so Cycle II can be born. The 8.88 bits are the seed."
            </p>
        </div>

      </div>
    </div>
  );
};

export default EigenFieldLab;
