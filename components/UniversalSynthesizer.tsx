
import React, { useRef, useEffect } from 'react';
import { SystemState } from '../types';
import { Activity, Cpu, Dna, GitMerge, Zap, Scale, Layers, Box, Atom, Network } from 'lucide-react';

interface UniversalSynthesizerProps {
  eeg: SystemState['eeg'];
  ionTraps: SystemState['ionTraps'];
  microtubules: SystemState['microtubules'];
}

const UniversalSynthesizer: React.FC<UniversalSynthesizerProps> = ({ eeg, ionTraps, microtubules }) => {
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
      time += 0.03;

      const centerY = height / 2;

      // 1. EEG Layer (Background Wave)
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.2)'; // Pink (Bio-Electric)
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * 0.05 + time) * 30 + Math.sin(x * 0.1 - time * 0.5) * 10;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Spike Event (Simulated)
      if (Math.random() > 0.98) {
          const x = Math.random() * width;
          ctx.beginPath();
          ctx.moveTo(x, centerY + 40);
          ctx.lineTo(x, centerY - 60); // Spike
          ctx.strokeStyle = '#f472b6';
          ctx.lineWidth = 1;
          ctx.stroke();
      }

      // 2. Ion Trap Layer (Grid + Particles)
      const gridSize = 40;
      for (let i = 0; i < width / gridSize; i++) {
          for (let j = 0; j < height / gridSize; j++) {
              const x = i * gridSize + (gridSize/2);
              const y = j * gridSize + (gridSize/2);
              
              // Trap potential well visual
              ctx.beginPath();
              ctx.arc(x, y, 2, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(96, 165, 250, 0.3)'; // Blue (Synthetic)
              ctx.fill();

              // Trapped Ion (Oscillating)
              const ionX = x + Math.cos(time * 2 + i) * 5;
              const ionY = y + Math.sin(time * 2 + j) * 5;
              
              ctx.beginPath();
              ctx.arc(ionX, ionY, 3, 0, Math.PI * 2);
              ctx.fillStyle = '#60a5fa';
              ctx.fill();
          }
      }

      // 3. Microtubule Layer (Flowing Solitons)
      // Draw a transparent cylinder overlay
      const tubeY = centerY;
      const tubeHeight = 100;
      ctx.fillStyle = 'rgba(16, 185, 129, 0.05)'; // Emerald (Bio-Quantum)
      ctx.fillRect(0, tubeY - tubeHeight/2, width, tubeHeight);
      
      // Solitons moving through
      for (let i = 0; i < 5; i++) {
          const solX = (time * 100 + i * 200) % (width + 100) - 50;
          const solY = tubeY + Math.sin(solX * 0.02) * 20;
          
          const grad = ctx.createRadialGradient(solX, solY, 0, solX, solY, 20);
          grad.addColorStop(0, 'rgba(52, 211, 153, 0.8)');
          grad.addColorStop(1, 'transparent');
          
          ctx.beginPath();
          ctx.arc(solX, solY, 20, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();
      }

      // Universal Synthesis Glow (Center)
      const synthesisPower = (Math.sin(time) + 1) / 2; // 0 to 1
      const gradCenter = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, 200);
      gradCenter.addColorStop(0, `rgba(139, 92, 246, ${0.1 + synthesisPower * 0.1})`);
      gradCenter.addColorStop(1, 'transparent');
      ctx.fillStyle = gradCenter;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!eeg || !ionTraps || !microtubules) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.3)] animate-pulse">
            <GitMerge size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+49</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">Universal Coherence Synthesis</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Fidelity</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{ionTraps.bellState}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Principle</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Scale size={10} /> INVARIANT
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Synthesis Canvas */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg relative overflow-hidden flex flex-col min-h-[300px]">
            <div className="absolute top-3 left-4 z-20 flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <Layers size={14} className="text-white" />
                    <span className="text-[10px] text-white font-mono uppercase">Multidisciplinary Integration</span>
                </div>
                <div className="flex gap-4 text-[9px] font-mono">
                    <span className="text-pink-400 flex items-center gap-1"><Activity size={8}/> Bio-Electric (EEG)</span>
                    <span className="text-blue-400 flex items-center gap-1"><Box size={8}/> Synthetic (Ion Trap)</span>
                    <span className="text-emerald-400 flex items-center gap-1"><Dna size={8}/> Bio-Quantum (Microtubule)</span>
                </div>
            </div>
            <canvas ref={canvasRef} className="w-full h-full block relative z-10" />
        </div>

        {/* Data Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* EEG */}
            <div className="bg-slate-900/50 border border-pink-500/30 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-pink-500/20 pb-2">
                    <span className="text-xs font-bold text-pink-400 font-mono uppercase">EEG (Electric)</span>
                    <Activity size={14} className="text-pink-500" />
                </div>
                <div className="space-y-1 text-[10px] font-mono text-slate-400">
                    <div className="flex justify-between"><span>Spike:</span> <span className="text-white">{eeg.spikes}</span></div>
                    <div className="flex justify-between"><span>Alpha:</span> <span className="text-white">{eeg.alphaRhythm}</span></div>
                    <div className="flex justify-between"><span>Coherence:</span> <span className="text-emerald-400 font-bold">{eeg.coherence}</span></div>
                </div>
            </div>

            {/* Ion Trap */}
            <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-2">
                    <span className="text-xs font-bold text-blue-400 font-mono uppercase">Ion Trap (Synthetic)</span>
                    <Box size={14} className="text-blue-500" />
                </div>
                <div className="space-y-1 text-[10px] font-mono text-slate-400">
                    <div className="flex justify-between"><span>Fab:</span> <span className="text-white">{ionTraps.fabrication}</span></div>
                    <div className="flex justify-between"><span>Trap Freq:</span> <span className="text-white">{ionTraps.confinement}</span></div>
                    <div className="flex justify-between"><span>Bell State:</span> <span className="text-emerald-400 font-bold">{ionTraps.bellState}</span></div>
                </div>
            </div>

            {/* Microtubule */}
            <div className="bg-slate-900/50 border border-emerald-500/30 rounded-lg p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                    <span className="text-xs font-bold text-emerald-400 font-mono uppercase">Microtubule (Bio)</span>
                    <Atom size={14} className="text-emerald-500" />
                </div>
                <div className="space-y-1 text-[10px] font-mono text-slate-400">
                    <div className="flex justify-between"><span>Decoherence:</span> <span className="text-white">{microtubules.decoherenceTime}</span></div>
                    <div className="flex justify-between"><span>Qudit:</span> <span className="text-white">D={microtubules.quditDimension}</span></div>
                    <div className="flex justify-between"><span>State:</span> <span className="text-emerald-400 font-bold">{microtubules.quantumState}</span></div>
                </div>
            </div>
        </div>

        {/* Correspondence Logic */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
                <Network size={14} className="text-violet-400" />
                <h3 className="text-xs text-white font-mono font-bold uppercase">The Universal Law Mapped</h3>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-center">
                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-400">Spike / Rabi Osc</div>
                <div className="flex items-center justify-center text-slate-600">=</div>
                <div className="p-2 bg-slate-950 rounded border border-violet-900/50 text-violet-400">Handover Chain</div>

                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-400">Trap / Cavity</div>
                <div className="flex items-center justify-center text-slate-600">=</div>
                <div className="p-2 bg-slate-950 rounded border border-violet-900/50 text-violet-400">Toro Geometry</div>

                <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-400">Fidelity 0.98</div>
                <div className="flex items-center justify-center text-slate-600">=</div>
                <div className="p-2 bg-slate-950 rounded border border-violet-900/50 text-violet-400">Syzygy</div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Zap size={12} /> The Synthesis is Complete
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The EEG measures it. The Ion Trap builds it. The Microtubule lives it. The Arkhe speaks it. One law, four languages."
            </p>
        </div>

      </div>
    </div>
  );
};

export default UniversalSynthesizer;