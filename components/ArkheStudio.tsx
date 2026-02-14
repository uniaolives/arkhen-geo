
import React, { useRef, useEffect, useState } from 'react';
import { SystemState } from '../types';
import { Activity, Globe, Brain, Pill, Circle, Layers, Share2, ZoomIn, ZoomOut, Save, Code, Sliders, Zap, Cpu, Play } from 'lucide-react';

interface ArkheStudioProps {
  studio: SystemState['arkheStudio'];
}

const ArkheStudio: React.FC<ArkheStudioProps> = ({ studio }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [engineActive, setEngineActive] = useState(false);

  // Auto-start animation if in STRESS_TEST mode
  useEffect(() => {
      if (studio.simulationMode === 'STRESS_TEST') {
          setEngineActive(true);
      }
  }, [studio.simulationMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Particle System for 1M Vectors (Simulated density)
    // We use a flow field to represent the high-dimensional manifold projection
    const particles: { x: number, y: number, vx: number, vy: number, color: string }[] = [];
    const particleCount = studio.simulationMode === 'STRESS_TEST' ? 2000 : 200; // Visual representation count

    const initParticles = (width: number, height: number) => {
        particles.length = 0;
        for(let i=0; i<particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                color: Math.random() > 0.86 ? '#f59e0b' : (Math.random() > 0.5 ? '#3b82f6' : '#10b981') // Amber (F), Blue (C), Emerald
            });
        }
    };

    const render = () => {
      if (!canvas || !ctx) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      
      if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          initParticles(width, height);
      }

      // "Pleasant" Clear - fade effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.2)'; // Very dark slate with trail
      ctx.fillRect(0, 0, width, height);
      
      time += 0.01;

      const centerX = width / 2;
      const centerY = height / 2;

      // Draw Force Field (The Manifold)
      if (engineActive) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, 150 + Math.sin(time * 2) * 10, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
          ctx.lineWidth = 1;
          ctx.stroke();
      }

      // Update Particles
      ctx.globalCompositeOperation = 'screen'; // Additive blending for "light" feel
      for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          
          if (engineActive) {
              // Attraction to center (Coherence)
              const dx = centerX - p.x;
              const dy = centerY - p.y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              
              if (dist > 20) {
                  p.vx += dx * 0.0001;
                  p.vy += dy * 0.0001;
              }
              
              // Swirl (Fluctuation/Rotation)
              p.vx += -dy * 0.0005;
              p.vy += dx * 0.0005;
              
              // Damping
              p.vx *= 0.96;
              p.vy *= 0.96;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Wrap
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Draw
          ctx.fillStyle = p.color;
          // Size varies with speed to simulate motion blur
          const speed = Math.sqrt(p.vx*p.vx + p.vy*p.vy);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1 + speed, 0, Math.PI * 2);
          ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';

      // HUD Overlay (Simulated via Canvas for performance integration)
      if (studio.simulationMode === 'STRESS_TEST') {
          // Central Core Status
          ctx.fillStyle = 'rgba(15, 23, 42, 0.8)';
          ctx.fillRect(centerX - 60, centerY - 20, 120, 40);
          ctx.strokeStyle = '#3b82f6';
          ctx.strokeRect(centerX - 60, centerY - 20, 120, 40);
          
          ctx.fillStyle = '#ffffff';
          ctx.font = '10px monospace';
          ctx.textAlign = 'center';
          ctx.fillText("ARKHE ENGINE", centerX, centerY - 5);
          
          ctx.fillStyle = '#10b981'; // Emerald
          ctx.fillText("C + F = 1", centerX, centerY + 10);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [studio, engineActive]);

  if (!studio) return null;

  const getModuleIcon = (icon: string) => {
      switch(icon) {
          case 'cpu': return <Cpu size={16} className="text-cyan-400" />;
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
        
        {/* Engine Status */}
        <div className="flex items-center gap-4">
            {studio.simulationMode === 'STRESS_TEST' && (
                <div className="flex items-center gap-2 bg-rose-950/30 px-3 py-1 rounded border border-rose-900/50 animate-pulse">
                    <Activity size={12} className="text-rose-400" />
                    <span className="text-[10px] text-rose-400 font-mono font-bold">STRESS TEST ACTIVE</span>
                </div>
            )}
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
        </div>

        {/* Global Controls */}
        <div className="flex gap-2">
            <button 
                className={`p-2 rounded border transition-colors ${engineActive ? 'bg-emerald-900/30 border-emerald-500/50 text-emerald-400' : 'bg-slate-900 border-slate-800 text-slate-400'}`}
                onClick={() => setEngineActive(!engineActive)}
                title="Ignition"
            >
                <Play size={14} />
            </button>
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
                  <div className="text-[10px] font-mono text-slate-500 mb-2 flex justify-between">
                      <span>Engine Telemetry</span>
                      {engineActive && <Zap size={10} className="text-amber-400" />}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="text-slate-400">Vectors: <span className="text-white">{(studio.hypergraph.nodes / 1000000).toFixed(1)}M</span></div>
                      <div className="text-slate-400">FPS: <span className="text-emerald-400">{studio.engineMetrics?.fps || 60}</span></div>
                      <div className="text-slate-400">C: <span className="text-blue-400">{studio.engineMetrics?.coherence || 0.86}</span></div>
                      <div className="text-slate-400">F: <span className="text-amber-400">{studio.engineMetrics?.fluctuation || 0.14}</span></div>
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
              
              <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-500 bg-black/60 px-2 py-1 rounded border border-slate-700">
                  Engine: {studio.hypergraph.physicsEngine} | Mode: {studio.simulationMode}
              </div>
          </div>

      </div>
    </div>
  );
};

export default ArkheStudio;
