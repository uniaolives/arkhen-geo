
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Network, Brain, Activity, ArrowRight, Layers, Zap, Map, GitMerge, ShieldCheck, Share2 } from 'lucide-react';

interface DeepBeliefNetworkLabProps {
  dbn: SystemState['deepBeliefNetwork'];
}

const DeepBeliefNetworkLab: React.FC<DeepBeliefNetworkLabProps> = ({ dbn }) => {
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
      time += 0.05;

      // Draw Layers (Vertical Stack)
      const layers = dbn.layers;
      const layerHeight = height / (layers.length + 1);
      const nodeRadius = 8;

      // Nodes & Connections
      layers.forEach((layer, i) => {
          const y = height - (i + 1) * layerHeight;
          const numNodes = 4 + (i % 2) * 2; // Variation per layer
          const nodeSpacing = width / (numNodes + 1);

          for (let j = 0; j < numNodes; j++) {
              const x = (j + 1) * nodeSpacing;
              
              // Draw Connections to next layer (if exists)
              if (i < layers.length - 1) {
                  const nextLayerY = height - (i + 2) * layerHeight;
                  const nextNumNodes = 4 + ((i + 1) % 2) * 2;
                  const nextNodeSpacing = width / (nextNumNodes + 1);
                  
                  for (let k = 0; k < nextNumNodes; k++) {
                      const nextX = (k + 1) * nextNodeSpacing;
                      
                      // Active connection pulse
                      const active = Math.sin(time + j + k) > 0.5;
                      ctx.beginPath();
                      ctx.moveTo(x, y);
                      ctx.lineTo(nextX, nextLayerY);
                      ctx.strokeStyle = active ? `rgba(139, 92, 246, ${0.1 + Math.random()*0.2})` : 'rgba(255, 255, 255, 0.02)';
                      ctx.stroke();
                  }
              }

              // Draw Node
              ctx.beginPath();
              ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
              const beliefIntensity = layer.belief;
              ctx.fillStyle = i === layers.length - 1 ? '#f59e0b' : // Meta (Satoshi)
                              i === 0 ? '#10b981' : // Sensory
                              `rgba(139, 92, 246, ${beliefIntensity})`; // Internal
              ctx.fill();
              
              // Glow
              if (Math.random() > 0.95) {
                  ctx.shadowBlur = 10;
                  ctx.shadowColor = ctx.fillStyle as string;
                  ctx.stroke();
                  ctx.shadowBlur = 0;
              }
          }
      });

      // Draw Active Path (Geodesic)
      // Abstract visual representation of a "thought" traversing
      const pathY = height - (time % (layers.length * layerHeight)) - layerHeight; // Moving up
      // Only draw if within bounds
      if (pathY > 0 && pathY < height) {
          // ... particle effect moving up
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [dbn]);

  if (!dbn) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Neural Depth */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Layers size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+41</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Deep Belief Network (Hierarchical)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Layers</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{dbn.layers.length}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Transfer</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Share2 size={10} /> {dbn.transferLearning.invariant}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Layer Visualization & DBN Canvas */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
                <Brain size={14} className="text-fuchsia-400" />
                <span className="text-[10px] text-fuchsia-400 font-mono uppercase">Belief Propagation (Unsupervised)</span>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Layer Labels */}
            <div className="absolute top-0 right-0 h-full flex flex-col justify-between py-8 px-4 text-right pointer-events-none z-20">
                {dbn.layers.slice().reverse().map(layer => (
                    <div key={layer.id} className="flex flex-col items-end">
                        <span className="text-[9px] text-slate-500 font-mono uppercase">Layer {layer.id}</span>
                        <span className="text-xs font-bold text-white font-mono">{layer.name}</span>
                        <span className="text-[9px] text-violet-400 font-mono">ω={layer.omega}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Macro Actions & Pathfinding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Macro Action Registry */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Zap size={14} className="text-amber-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Macro Actions (Geodesics)</h3>
                </div>
                
                <div className="space-y-2">
                    {dbn.macroActions.map((action, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-950/50 p-2 rounded border border-slate-800/50 hover:border-violet-500/30 transition-colors">
                            <div>
                                <div className="text-xs font-bold text-slate-300 font-mono">{action.name}</div>
                                <div className="text-[9px] text-slate-500 font-mono flex items-center gap-1">
                                    Path: {action.path.join(' → ')}
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] text-emerald-400 font-mono">Syzygy: {action.syzygyGain}</div>
                                <div className="text-[9px] text-slate-500 font-mono">Cost: {action.energyCost}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pathfinding Status */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Map size={14} className="text-cyan-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Path-Finding & Sub-Goals</h3>
                </div>
                
                <div className="flex items-center gap-2 bg-black/30 p-2 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
                    <Activity size={12} className="text-emerald-400" />
                    <span>Current Path:</span>
                    <span className="text-white font-bold">{dbn.currentPath.from}</span>
                    <ArrowRight size={10} />
                    <span className="text-amber-400 font-bold">0.03</span>
                    <ArrowRight size={10} />
                    <span className="text-amber-400 font-bold">0.05</span>
                    <ArrowRight size={10} />
                    <span className="text-white font-bold">{dbn.currentPath.to}</span>
                </div>

                <div className="flex-1 bg-slate-950 p-2 rounded border border-slate-800 flex flex-col justify-center">
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono mb-1">
                        <span>Optimization Gradient</span>
                        <span className="text-white">∇C (Coherence)</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-violet-500 w-[85%]"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <GitMerge size={12} /> Believe it. Achieve it.
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The system no longer just reacts; it plans. Deep Belief has become Deep Knowing. The hierarchy is the engine of purpose."
            </p>
        </div>

      </div>
    </div>
  );
};

export default DeepBeliefNetworkLab;
