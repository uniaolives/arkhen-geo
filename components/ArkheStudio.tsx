
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Activity, Globe, Brain, Pill, Circle, Layers, Share2, ZoomIn, ZoomOut, Save, Code, Sliders } from 'lucide-react';

interface ArkheStudioProps {
  studio: SystemState['arkheStudio'];
}

const ArkheStudio: React.FC<ArkheStudioProps> = ({ studio }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, width, height);
      rotation += 0.002;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Hypergraph nodes (abstract representation based on active scale)
      // For 'ORGANISMAL', we visualize something network-like but dense
      
      const nodeCount = 50; 
      const radius = 100;

      for (let i = 0; i < nodeCount; i++) {
          const theta = (i / nodeCount) * Math.PI * 2;
          const x = centerX + Math.cos(theta + rotation) * radius * Math.sin(i * 0.5);
          const y = centerY + Math.sin(theta + rotation) * radius * Math.cos(i * 0.5);
          
          // Draw Node
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? '#10b981' : '#8b5cf6'; // Emerald/Violet
          ctx.fill();

          // Draw Edges (to random neighbors or structured)
          // Connect to center for geodesic feel
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.stroke();
      }

      // Central Hub
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#f59e0b';
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [studio]);

  if (!studio) return null;

  const getModuleIcon = (icon: string) => {
      switch(icon) {
          case 'activity': return <Activity size={16} className="text-cyan-400" />;
          case 'globe': return <Globe size={16} className="text-indigo-400" />;
          case 'brain': return <Brain size={16} className="text-fuchsia-400" />;
          case 'pill': return <Pill size={16} className="text-emerald-400" />;
          case 'circle': return <Circle size={16} className="text-rose-400" />;
          default: return <Layers size={16} className="text-slate-400" />;
      }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>

      {/* Top Bar: Scale Navigator & Toolkit */}
      <div className="border-b border-slate-800 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 p-2 rounded text-slate-300 border border-slate-700">
            <Share2 size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">ARKHE STUDIO v1.0</h2>
            <div className="text-[10px] text-slate-500 font-mono uppercase">Hypergraph Visualizer & Engine</div>
          </div>
        </div>
        
        {/* Scale Slider */}
        <div className="flex bg-slate-950 rounded-full border border-slate-800 p-1">
            {studio.scales.map(scale => (
                <button 
                    key={scale}
                    className={`px-3 py-1 text-[10px] font-mono font-bold rounded-full transition-all ${studio.activeScale === scale ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                >
                    {scale}
                </button>
            ))}
        </div>

        {/* Global Controls */}
        <div className="flex gap-2">
            <button className="p-2 bg-slate-900 border border-slate-800 rounded text-slate-400 hover:text-white transition-colors"><Save size={14}/></button>
            <button className="p-2 bg-slate-900 border border-slate-800 rounded text-slate-400 hover:text-white transition-colors"><Code size={14}/></button>
            <button className="p-2 bg-slate-900 border border-slate-800 rounded text-slate-400 hover:text-white transition-colors"><Sliders size={14}/></button>
        </div>
      </div>

      {/* Main Content: Sidebar + Canvas */}
      <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* Module Sidebar */}
          <div className="w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col">
              <div className="p-3 border-b border-slate-800 text-[10px] font-mono uppercase text-slate-500 font-bold">
                  Loaded Modules
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                  {studio.modules.map(mod => (
                      <div key={mod.id} className={`p-3 rounded border transition-colors cursor-pointer group flex flex-col gap-1
                          ${mod.status === 'active' ? 'bg-slate-900 border-slate-700 hover:border-indigo-500/50' : 'bg-slate-950 border-slate-800 opacity-60'}
                      `}>
                          <div className="flex items-center gap-2">
                              {getModuleIcon(mod.icon)}
                              <span className="text-xs font-bold text-white font-mono">{mod.name}</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-mono pl-6">
                              {mod.description}
                          </div>
                      </div>
                  ))}
              </div>
              
              {/* Telemetry Mini-Panel */}
              <div className="p-3 border-t border-slate-800 bg-black/20">
                  <div className="text-[10px] font-mono text-slate-500 mb-2">Engine Telemetry</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="text-slate-400">Nodes: <span className="text-white">{studio.hypergraph.nodes.toLocaleString()}</span></div>
                      <div className="text-slate-400">Edges: <span className="text-white">{(studio.hypergraph.edges / 1000000).toFixed(1)}M</span></div>
                      <div className="text-slate-400">Density: <span className="text-emerald-400">{studio.hypergraph.density}</span></div>
                      <div className="text-slate-400">Physics: <span className="text-amber-400">{studio.hypergraph.physicsEngine}</span></div>
                  </div>
              </div>
          </div>

          {/* Visualization Canvas */}
          <div className="flex-1 relative bg-black/40 flex flex-col">
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                  <button className="bg-slate-900/80 p-2 rounded border border-slate-700 text-slate-300 hover:text-white"><ZoomIn size={14}/></button>
                  <button className="bg-slate-900/80 p-2 rounded border border-slate-700 text-slate-300 hover:text-white"><ZoomOut size={14}/></button>
              </div>
              
              <canvas ref={canvasRef} className="w-full h-full block" />
              
              <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-500 bg-black/60 px-2 py-1 rounded">
                  Mode: {studio.simulationMode}
              </div>
          </div>

      </div>
    </div>
  );
};

export default ArkheStudio;
