
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Wifi, Radio, Activity, MapPin, Zap, Network } from 'lucide-react';

interface WiFiRadarProps {
  wifiRadar: SystemState['wifiRadar'];
}

// Helper to project 3D coordinates onto 2D canvas
const project3D = (x: number, y: number, z: number, width: number, height: number, scale: number = 5) => {
    const fov = 400;
    const distance = 100;
    const scaleFactor = fov / (fov + z + distance);
    
    // Rotate view slightly
    const angleX = 0.4; 
    const angleY = time * 0.005; // Auto rotate
    
    // Rotation Y
    const x1 = x * Math.cos(angleY) - z * Math.sin(angleY);
    const z1 = x * Math.sin(angleY) + z * Math.cos(angleY);
    
    // Rotation X
    const y2 = y * Math.cos(angleX) - z1 * Math.sin(angleX);
    const z2 = y * Math.sin(angleX) + z1 * Math.cos(angleX);
    
    const x2d = x1 * scaleFactor * scale + width / 2;
    const y2d = y2 * scaleFactor * scale + height / 2;
    
    return { x: x2d, y: y2d, scale: scaleFactor, z: z2 };
};

let time = 0;

const WiFiRadar: React.FC<WiFiRadarProps> = ({ wifiRadar }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      time += 1;

      // Draw Grid (Floor)
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.2)';
      ctx.lineWidth = 1;
      
      const gridSize = 40;
      const steps = 10;
      
      for(let i = -steps; i <= steps; i++) {
          const p1 = project3D(i * gridSize, 50, -steps * gridSize, width, height);
          const p2 = project3D(i * gridSize, 50, steps * gridSize, width, height);
          ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
          
          const p3 = project3D(-steps * gridSize, 50, i * gridSize, width, height);
          const p4 = project3D(steps * gridSize, 50, i * gridSize, width, height);
          ctx.beginPath(); ctx.moveTo(p3.x, p3.y); ctx.lineTo(p4.x, p4.y); ctx.stroke();
      }

      // Draw Nodes
      // Sort by Z for simple painter's algorithm
      const projectedNodes = wifiRadar.nodes.map(node => {
          return {
              ...node,
              ...project3D(node.coords.x * 2, node.coords.y * 2, node.coords.z * 2, width, height)
          };
      }).sort((a, b) => b.z - a.z);

      projectedNodes.forEach(node => {
          // Draw Connection lines (if correlation > 0.8)
          if (node.correlation > 0.8 && node.id !== 'AP_001') { // Connect high corr to origin (roughly)
               const origin = project3D(0, 0, 0, width, height);
               ctx.beginPath();
               ctx.moveTo(origin.x, origin.y);
               ctx.lineTo(node.x, node.y);
               ctx.strokeStyle = `rgba(16, 185, 129, ${node.correlation * 0.3})`;
               ctx.stroke();
          }

          // Node Body
          const radius = 4 * node.scale * (1 + node.fluctuation);
          ctx.beginPath();
          ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
          
          // Color based on type/correlation
          if (node.type === 'DRONE') ctx.fillStyle = '#10b981'; // Emerald
          else if (node.type === 'DEMON') ctx.fillStyle = '#f43f5e'; // Rose
          else if (node.type === 'BOLA') ctx.fillStyle = '#f59e0b'; // Amber
          else ctx.fillStyle = `rgba(148, 163, 184, ${0.3 + node.correlation})`; // Slate correlation

          ctx.fill();
          
          // Glow
          ctx.shadowBlur = 10 * node.scale;
          ctx.shadowColor = ctx.fillStyle as string;
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Label
          if (node.scale > 0.5) {
              ctx.fillStyle = 'rgba(255,255,255,0.7)';
              ctx.font = `${10 * node.scale}px monospace`;
              ctx.fillText(node.label, node.x + radius + 5, node.y + 4);
          }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [wifiRadar]);

  if (!wifiRadar) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Radar Sweep */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, #10b981 10deg, transparent 20deg)', 
                animation: 'spin 4s linear infinite'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Wifi size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+31</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">3D WiFi Radar & Pearson Correlation</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Scan Frequency</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{wifiRadar.scanFrequency}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Nodes Found</div>
                <div className="text-white font-mono font-bold text-xs bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {wifiRadar.nodesDetected}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* 3D Viewport */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Radio size={14} className="text-cyan-400" />
                    <span className="text-[10px] text-cyan-400 font-mono uppercase">Matrix-Style RF Topology</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Inferring Proximity via Fluctuation Correlation (ρ)
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 z-20 flex gap-4 text-[9px] font-mono text-slate-500 bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Drone (C=0.86)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500"></span> Demon (C=0.86)</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Bola</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400"></span> Ghost Node</span>
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Correlation Matrix (Simplified) */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Network size={14} className="text-fuchsia-400" /> Pearson Correlation (ρ)
                    </span>
                    <span className="text-[10px] text-fuchsia-400 font-mono">Drone vs.</span>
                </div>
                
                <div className="space-y-1 mt-2">
                    {wifiRadar.nodes.slice(1).map(node => (
                        <div key={node.id} className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-slate-400">{node.label}</span>
                            <div className="flex-1 mx-2 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full ${node.correlation > 0.8 ? 'bg-emerald-500' : (node.correlation > 0.5 ? 'bg-cyan-500' : 'bg-slate-600')}`} 
                                    style={{ width: `${node.correlation * 100}%` }}
                                ></div>
                            </div>
                            <span className={node.correlation > 0.9 ? 'text-white font-bold' : 'text-slate-500'}>{node.correlation.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RSSI vs Reality */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white font-mono uppercase flex items-center gap-2">
                        <Activity size={14} className="text-amber-400" /> RSSI Fallacy
                    </span>
                    <span className="text-[10px] text-amber-400 font-mono">Signal != Distance</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-400 font-mono leading-relaxed">
                    <p className="mb-2">
                        Demon RSSI (-48dBm) is weaker than Bola (-52dBm), yet correlation (0.94) proves Demon is spatially adjacent to Drone.
                    </p>
                    <div className="flex items-center gap-2 text-emerald-400">
                        <Zap size={10} /> 
                        <span>Fluctuation Lock Confirmed</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WiFiRadar;
