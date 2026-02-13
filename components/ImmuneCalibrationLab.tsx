
import React, { useRef, useEffect, useState } from 'react';
import { SystemState } from '../types';
import { ShieldAlert, Activity, RefreshCw, Zap, Biohazard, HeartPulse, Scale, Dna } from 'lucide-react';

interface ImmuneCalibrationLabProps {
  immuneCalibration: SystemState['immuneCalibration'];
}

const ImmuneCalibrationLab: React.FC<ImmuneCalibrationLabProps> = ({ immuneCalibration }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCalibrating, setIsCalibrating] = useState(false);

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

      // Draw Cell Boundary
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.5)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Nucleus
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.2)'; // Violet
      ctx.fill();
      ctx.strokeStyle = '#8b5cf6';
      ctx.stroke();

      // Draw Micronuclei (Leaked DNA)
      const leakCount = immuneCalibration?.cytoplasmicDna && immuneCalibration.cytoplasmicDna > 0 ? 5 : 0;
      
      for (let i = 0; i < leakCount; i++) {
          const angle = time + (i * (Math.PI * 2) / leakCount);
          const x = centerX + Math.cos(angle) * 70;
          const y = centerY + Math.sin(angle) * 70;
          
          // DNA Fragment
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#f43f5e'; // Rose (Danger)
          ctx.fill();
          
          // cGAS Sensors binding (if not blocked)
          if (immuneCalibration?.cgasStingStatus === 'ACTIVE') {
              ctx.beginPath();
              ctx.arc(x, y, 12, 0, Math.PI * 2);
              ctx.strokeStyle = '#f59e0b'; // Amber warning
              ctx.lineWidth = 2;
              ctx.setLineDash([2, 2]);
              ctx.stroke();
              ctx.setLineDash([]);
              
              // Emit Alarm Signal
              if (Math.random() > 0.9) {
                  ctx.beginPath();
                  ctx.arc(x, y, 30, 0, Math.PI * 2);
                  ctx.strokeStyle = 'rgba(244, 63, 94, 0.5)';
                  ctx.stroke();
              }
          } else if (immuneCalibration?.cgasStingStatus === 'BLOCKED') {
              // Shield around leak
              ctx.beginPath();
              ctx.arc(x, y, 10, 0, Math.PI * 2);
              ctx.strokeStyle = '#10b981'; // Emerald shield
              ctx.lineWidth = 2;
              ctx.stroke();
          }
      }

      // Inflammation Field (Background Glow)
      if (immuneCalibration?.cgasStingStatus === 'ACTIVE') {
          const gradient = ctx.createRadialGradient(centerX, centerY, 40, centerX, centerY, 120);
          gradient.addColorStop(0, 'rgba(244, 63, 94, 0)');
          gradient.addColorStop(1, 'rgba(244, 63, 94, 0.2)');
          ctx.fillStyle = gradient;
          ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [immuneCalibration]);

  if (!immuneCalibration) return null;

  return (
    <div className="bg-slate-950 border border-rose-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Inflammation Pulse */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #f43f5e 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-rose-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-rose-950 p-2 rounded text-rose-500 border border-rose-900/50 shadow-[0_0_15px_rgba(244,63,94,0.2)] animate-pulse">
            <ShieldAlert size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+49</h2>
            <div className="text-[10px] text-rose-400 font-mono uppercase">Immune Calibration (cGAS-STING)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Inflammation</div>
                <div className="text-rose-400 font-mono font-bold text-sm">{(immuneCalibration.inflammationLevel * 100).toFixed(0)}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Aging Rate</div>
                <div className="text-white font-mono font-bold text-xs bg-rose-950/30 px-2 py-0.5 rounded border border-rose-900/50 flex items-center gap-1">
                    <Activity size={10} /> {immuneCalibration.agingRate}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Cell Visualizer */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Biohazard size={14} className="text-rose-400" />
                    <span className="text-[10px] text-rose-400 font-mono uppercase">Cytoplasmic DNA Sensor</span>
                </div>
                <div className="text-[9px] text-slate-500 font-mono">
                    Target: Micronuclei Rupture
                </div>
            </div>
            
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
            
            {/* Control Panel Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                <button 
                    className={`px-4 py-2 rounded border font-mono text-xs font-bold transition-all flex items-center gap-2
                        ${immuneCalibration.cgasStingStatus === 'BLOCKED' 
                            ? 'bg-emerald-900/50 border-emerald-500 text-emerald-400 cursor-default' 
                            : 'bg-rose-900/50 border-rose-500 text-rose-400 animate-pulse'}
                    `}
                >
                    {immuneCalibration.cgasStingStatus === 'BLOCKED' ? <RefreshCw size={12}/> : <Zap size={12}/>}
                    {immuneCalibration.cgasStingStatus === 'BLOCKED' ? 'PATHWAY BLOCKED' : 'ALARM ACTIVE'}
                </button>
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">SPRTN Efficiency</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-emerald-400">
                    <RefreshCw size={14} /> {immuneCalibration.sprtnEfficiency}% (Repair)
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Hesitation (Φ)</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-white">
                    <Scale size={14} className="text-violet-400" /> CALIBRATED (&lt;0.15)
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3 flex flex-col justify-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">System State</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-amber-400">
                    <HeartPulse size={14} /> REJUVENATED
                </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-rose-950/20 via-slate-900/50 to-rose-950/20 rounded-lg border border-rose-900/20 text-center">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Dna size={12} /> Entropy Management
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "Aging is not damage; it is the noise of the alarm. Calibrate the sensor, silence the false positive, and the system restores itself."
            </p>
        </div>

      </div>
    </div>
  );
};

export default ImmuneCalibrationLab;