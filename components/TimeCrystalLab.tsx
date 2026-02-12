
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Infinity, Activity, Waves, MoveRight, Layers, ArrowUp, Zap, Clock } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface TimeCrystalLabProps {
  timeCrystal: SystemState['timeCrystal'];
}

// Helper for wave animation
const drawWave = (ctx: CanvasRenderingContext2D, width: number, height: number, time: number, amplitude: number, frequency: number, color: string) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin(x * frequency + time) * amplitude * Math.sin(x * 0.01 + time * 0.5); // Standing wave effect
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
};

const TimeCrystalLab: React.FC<TimeCrystalLabProps> = ({ timeCrystal }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Simulated oscillation data for the graph
  const oscillationData = Array.from({ length: 20 }, (_, i) => ({
      time: i * 7, // seconds approx
      amplitude: 9.46 * Math.cos(i * 0.5), // Simulated oscillation
  }));

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
          
          time += 0.05;

          // Draw "Acoustic" Standing Waves (The Levitation Field)
          drawWave(ctx, width, height, time, 40, 0.02, 'rgba(139, 92, 246, 0.1)'); // Violet base
          drawWave(ctx, width, height, time * 1.2, 30, 0.03, 'rgba(16, 185, 129, 0.1)'); // Emerald harmonic
          drawWave(ctx, width, height, -time * 0.8, 20, 0.05, 'rgba(6, 182, 212, 0.1)'); // Cyan harmonic

          // Draw Levitating Beads (The Nodes)
          const beadY = height / 2 + Math.sin(time) * 10; // Gentle hover
          
          // Bead 1: Drone (Left)
          const x1 = width * 0.25;
          ctx.beginPath();
          ctx.arc(x1, beadY, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#10b981'; // Emerald
          ctx.shadowColor = '#10b981';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Bead 2: Demon (Right)
          const x2 = width * 0.75;
          ctx.beginPath();
          ctx.arc(x2, beadY, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#8b5cf6'; // Violet
          ctx.shadowColor = '#8b5cf6';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Bead 3: Bola (Center, lower) - The node of pressure
          const x3 = width * 0.5;
          const y3 = height / 2 + 40 + Math.sin(time * 2) * 5;
          ctx.beginPath();
          ctx.arc(x3, y3, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b'; // Amber
          ctx.shadowColor = '#f59e0b';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Non-Reciprocal Force Indicators (Arrows)
          // Drone -> Demon (Weak/None)
          // Demon -> Drone (Strong - Déjà vu)
          
          // Arrow from Right to Left (Demon affecting Drone)
          ctx.beginPath();
          ctx.moveTo(x2 - 15, beadY);
          ctx.lineTo(x1 + 15, beadY);
          ctx.strokeStyle = 'rgba(139, 92, 246, 0.5)';
          ctx.setLineDash([5, 5]);
          ctx.stroke();
          ctx.setLineDash([]);
          // Arrow head
          ctx.beginPath();
          ctx.moveTo(x1 + 15, beadY);
          ctx.lineTo(x1 + 25, beadY - 5);
          ctx.lineTo(x1 + 25, beadY + 5);
          ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
          ctx.fill();

          animationFrameId = requestAnimationFrame(render);
      };

      render();

      return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!timeCrystal) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Crystal Facets */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(135deg, #4c1d95 25%, transparent 25%), linear-gradient(225deg, #4c1d95 25%, transparent 25%), linear-gradient(45deg, #4c1d95 25%, transparent 25%), linear-gradient(315deg, #4c1d95 25%, transparent 25%)',
                backgroundPosition: '10px 0, 10px 0, 0 0, 0 0',
                backgroundSize: '20px 20px',
                backgroundRepeat: 'repeat'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)] animate-pulse">
            <Waves size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+8</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Acoustic Time Crystal (Non-Reciprocal)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-emerald-400 font-mono font-bold text-sm flex items-center gap-1">
                    <ArrowUp size={12} /> {timeCrystal.status}
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Hidden Momentum</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    {timeCrystal.hiddenMomentum}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Levitation Chamber Visualization */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[250px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <Layers size={14} className="text-slate-400" />
                <span className="text-[10px] text-slate-400 font-mono uppercase">Acoustic Levitation Field (Standing Wave)</span>
            </div>
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Legend Overlay */}
            <div className="absolute bottom-4 left-4 z-20 flex gap-4 text-[9px] font-mono text-slate-500 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Drone</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Bola</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-violet-500"></span> Demon</span>
                <span className="flex items-center gap-1"><span className="w-4 h-0.5 bg-violet-500/50"></span> Force</span>
            </div>
        </div>

        {/* Bottom Panel: Metrics & Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-48">
            
            {/* Crystal Metrics */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <div className="flex items-center gap-2">
                        <Activity size={14} className="text-cyan-400" />
                        <h3 className="text-xs text-white font-mono font-bold uppercase">Crystal Properties</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">NYU / Arkhe</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-2">
                    <div>
                        <div className="text-[10px] text-slate-500 font-mono">Frequency (Larmor)</div>
                        <div className="text-xl font-mono font-bold text-white">{timeCrystal.frequency}</div>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-mono">Period (T)</div>
                        <div className="text-xl font-mono font-bold text-white">{timeCrystal.period}</div>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-mono">Daily Oscillations</div>
                        <div className="text-lg font-mono font-bold text-fuchsia-400">640</div>
                    </div>
                    <div>
                        <div className="text-[10px] text-slate-500 font-mono">Non-Reciprocity</div>
                        <div className="text-lg font-mono font-bold text-emerald-400">{timeCrystal.nonReciprocity}</div>
                    </div>
                </div>
            </div>

            {/* Oscillator Graph */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                        <Clock size={14} className="text-amber-400" />
                        <h3 className="text-xs text-white font-mono font-bold uppercase">Temporal Oscillation</h3>
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono">Cycles Remaining: {timeCrystal.oscillationsRemaining}</span>
                </div>
                
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={oscillationData}>
                            <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} />
                            <YAxis hide domain={[-10, 10]} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #7c3aed' }}
                                itemStyle={{ fontSize: '12px', fontFamily: 'monospace', color: '#a78bfa' }}
                                labelStyle={{ display: 'none' }}
                            />
                            <Line type="monotone" dataKey="amplitude" stroke="#8b5cf6" strokeWidth={2} dot={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Zap size={12} /> Newton Extended
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "Action and reaction are not locally conserved. The missing momentum is carried by the semantic field. The crystal floats because the wave carries the weight."
            </p>
        </div>

      </div>
    </div>
  );
};

export default TimeCrystalLab;
