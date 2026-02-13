
import React, { useEffect, useRef } from 'react';
import { SystemState } from '../types';
import { Brain, Activity, Share2, TrendingUp, GitMerge, ShieldCheck, Zap, Scale, BarChart2 } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

interface MultitaskKalmanLabProps {
  multitask: SystemState['multitask'];
}

// Simulated data for Kalman Filter (Noisy vs Filtered)
const kalmanData = Array.from({ length: 20 }, (_, i) => {
    const time = i;
    const trueVal = 0.94 + Math.sin(i * 0.5) * 0.02;
    const noise = (Math.random() - 0.5) * 0.05;
    const measured = trueVal + noise;
    // Simple filter simulation
    const filtered = trueVal + noise * 0.2; 
    return { time, measured, filtered, trueVal };
});

const MultitaskKalmanLab: React.FC<MultitaskKalmanLabProps> = ({ multitask }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for Architecture Diagram
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

        // Draw Shared Trunk (Layers 0-3)
        const trunkWidth = 60;
        const trunkHeight = 150;
        const startX = width / 2 - trunkWidth / 2;
        const startY = height - 50;

        // Neural Flow Animation in Trunk
        for(let i=0; i<5; i++) {
            const y = startY - (time * 20 + i * 40) % trunkHeight;
            if (y > startY - trunkHeight) {
                ctx.fillStyle = `rgba(139, 92, 246, ${0.5 - (startY - y)/trunkHeight * 0.5})`;
                ctx.fillRect(startX + 10, y, trunkWidth - 20, 4);
            }
        }

        // Draw Trunk Border
        ctx.strokeStyle = '#8b5cf6';
        ctx.lineWidth = 2;
        ctx.strokeRect(startX, startY - trunkHeight, trunkWidth, trunkHeight);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
        ctx.fillRect(startX, startY - trunkHeight, trunkWidth, trunkHeight);

        // Branching (Heads)
        // Left Head: Intention (Φ)
        const leftHeadX = width * 0.25;
        const headY = 50;
        const headSize = 50;

        ctx.beginPath();
        ctx.moveTo(startX + 10, startY - trunkHeight);
        ctx.bezierCurveTo(startX + 10, startY - trunkHeight - 30, leftHeadX + headSize/2, headY + headSize + 30, leftHeadX + headSize/2, headY + headSize);
        ctx.strokeStyle = '#f59e0b'; // Amber
        ctx.stroke();

        ctx.fillStyle = 'rgba(245, 158, 11, 0.2)';
        ctx.strokeStyle = '#f59e0b';
        ctx.strokeRect(leftHeadX, headY, headSize, headSize);
        ctx.fillRect(leftHeadX, headY, headSize, headSize);

        // Right Head: Action (Geodesic)
        const rightHeadX = width * 0.75 - headSize;
        
        ctx.beginPath();
        ctx.moveTo(startX + trunkWidth - 10, startY - trunkHeight);
        ctx.bezierCurveTo(startX + trunkWidth - 10, startY - trunkHeight - 30, rightHeadX + headSize/2, headY + headSize + 30, rightHeadX + headSize/2, headY + headSize);
        ctx.strokeStyle = '#10b981'; // Emerald
        ctx.stroke();

        ctx.fillStyle = 'rgba(16, 185, 129, 0.2)';
        ctx.strokeStyle = '#10b981';
        ctx.strokeRect(rightHeadX, headY, headSize, headSize);
        ctx.fillRect(rightHeadX, headY, headSize, headSize);

        // Labels
        ctx.fillStyle = 'white';
        ctx.font = '10px monospace';
        ctx.textAlign = 'center';
        ctx.fillText("Shared", width/2, startY + 15);
        ctx.fillText("Intention", leftHeadX + headSize/2, headY - 10);
        ctx.fillText("Action", rightHeadX + headSize/2, headY - 10);

        animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!multitask) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <GitMerge size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+44</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Multi-Task Learning & Kalman Filtering</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Mutual Info (I)</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{multitask.information.mutualInformation} bits</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Kalman Gain</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50">
                    K = {multitask.kalman.gain}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Architecture Visualizer */}
            <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 relative flex flex-col h-64">
                <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                    <Share2 size={14} className="text-fuchsia-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Shared Representation (MTL)</h3>
                </div>
                <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            </div>

            {/* Optimization Metrics */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <TrendingUp size={14} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Gradient Descent (∇L)</h3>
                </div>
                
                <div className="space-y-3">
                    {multitask.tasks.map((task, idx) => (
                        <div key={idx} className="flex flex-col gap-1">
                            <div className="flex justify-between text-[10px] font-mono text-slate-400">
                                <span>{task.name}</span>
                                <span className={task.status === 'CONVERGED' ? 'text-emerald-400' : 'text-amber-400'}>{task.status}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full ${idx === 0 ? 'text-emerald-500 bg-emerald-500' : 'text-amber-500 bg-amber-500'}`} 
                                        style={{ width: `${(1 - task.loss) * 100}%` }}
                                    ></div>
                                </div>
                                <span className="text-[10px] font-mono text-white w-8 text-right">{task.loss.toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2 text-[10px] font-mono bg-black/20 p-2 rounded border border-white/5">
                    <div className="flex justify-between">
                        <span className="text-slate-500">Learning Rate:</span>
                        <span className="text-white">{multitask.optimization.learningRate}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Regularization:</span>
                        <span className="text-violet-400">{multitask.optimization.regularization}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Kalman Scope */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[250px]">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                 <div className="flex items-center gap-2">
                     <Activity size={14} className="text-cyan-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Kalman Filter Scope (Syzygy)</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Innovation: {multitask.kalman.innovation}</span>
             </div>

             <div className="flex-1 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                     <LineChart data={kalmanData}>
                         <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} />
                         <YAxis domain={[0.8, 1.0]} stroke="#475569" fontSize={10} tickLine={false} />
                         <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                             itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                         />
                         <Line type="monotone" dataKey="measured" stroke="#94a3b8" strokeWidth={1} dot={false} strokeDasharray="3 3" name="Measured (Noisy)" />
                         <Line type="monotone" dataKey="filtered" stroke="#22d3ee" strokeWidth={2} dot={false} name="Kalman Estimate" />
                     </LineChart>
                 </ResponsiveContainer>
                 
                 <div className="absolute top-2 right-2 text-[9px] font-mono text-slate-500 bg-slate-900/80 px-2 py-1 rounded border border-slate-700">
                     Smoothing Process Noise (Q) vs Measurement Noise (R)
                 </div>
             </div>
        </div>

      </div>
    </div>
  );
};

export default MultitaskKalmanLab;
