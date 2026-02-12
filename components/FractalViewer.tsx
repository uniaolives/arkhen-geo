import React from 'react';
import { SystemState } from '../types';
import { Network, Brain, Globe, Activity, GitBranch, Minimize2, Maximize2, Zap } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

interface FractalViewerProps {
  fractal: SystemState['fractal'];
}

// Simulated PSD Data (Power Law)
const psdData = [
  { freq: '10^-3', cosmos: 100, neural: 98, city: 99 },
  { freq: '10^-2', cosmos: 60, neural: 58, city: 59 },
  { freq: '10^-1', cosmos: 35, neural: 36, city: 35 },
  { freq: '10^0', cosmos: 20, neural: 22, city: 21 },
  { freq: '10^1', cosmos: 10, neural: 12, city: 11 },
  { freq: '10^2', cosmos: 5, neural: 6, city: 5.5 },
];

const FractalViewer: React.FC<FractalViewerProps> = ({ fractal }) => {

  const getIcon = (type: string) => {
    switch (type) {
      case 'COSMIC': return <Globe size={32} />;
      case 'NEURAL': return <Brain size={32} />;
      case 'CITY': return <Network size={32} />;
      default: return <Activity size={32} />;
    }
  };

  const getGradient = (type: string) => {
    switch (type) {
      case 'COSMIC': return 'bg-indigo-500/10 border-indigo-500/30';
      case 'NEURAL': return 'bg-pink-500/10 border-pink-500/30';
      case 'CITY': return 'bg-rose-500/10 border-rose-500/30';
      default: return 'bg-slate-800';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10" 
            style={{ 
                backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-slate-800 p-2 rounded text-slate-200">
            <Minimize2 size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Π_9</h2>
            <div className="text-[10px] text-slate-500 font-mono uppercase">Scale Invariance & Fractal Geometry</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Similarity Score</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{fractal.similarityScore}%</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Spectral Slope</div>
                <div className="text-white font-mono font-bold text-sm">{fractal.spectralSlope}</div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Scale Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {fractal.scales.map((scale) => (
            <div key={scale.name} className={`relative overflow-hidden rounded-lg border p-4 flex flex-col gap-3 group transition-all duration-300 hover:bg-slate-900/50 ${getGradient(scale.type)}`}>
               
               {/* Visual Placeholder (Abstract Network) */}
               <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                   {getIcon(scale.type)}
               </div>

               <div className="flex justify-between items-start z-10">
                   <h3 className={`font-bold font-mono text-lg ${scale.color}`}>{scale.name}</h3>
                   <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-1 rounded border border-white/5">
                       {scale.scaleOrder}
                   </span>
               </div>

               <div className="text-xs text-slate-300 font-mono z-10 border-b border-white/10 pb-2 mb-1">
                   {scale.components}
               </div>

               {/* Metrics */}
               <div className="grid grid-cols-2 gap-2 mt-auto z-10">
                   <div className="bg-black/20 p-2 rounded border border-white/5">
                       <div className="text-[10px] text-slate-500 uppercase">Connectivity (k)</div>
                       <div className="text-white font-mono font-bold">{scale.connectivity}</div>
                   </div>
                   <div className="bg-black/20 p-2 rounded border border-white/5">
                       <div className="text-[10px] text-slate-500 uppercase">Dimension (Df)</div>
                       <div className="text-white font-mono font-bold">{scale.dimension}</div>
                   </div>
               </div>
            </div>
          ))}
        </div>

        {/* Comparison Chart (Power Spectrum) */}
        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col">
           <div className="flex items-center gap-2 mb-4">
               <Activity size={16} className="text-slate-400" />
               <h4 className="text-xs text-slate-400 uppercase font-mono">Power Spectrum Density (Log-Log)</h4>
           </div>
           
           <div className="flex-1 min-h-[150px]">
               <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={psdData}>
                       <XAxis dataKey="freq" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Frequency (k)', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                       <YAxis stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Power P(k)', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#64748b' }} />
                       <Tooltip 
                           contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                           itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                           labelStyle={{ fontSize: '12px', color: '#94a3b8' }}
                       />
                       <Line type="monotone" dataKey="cosmos" stroke="#818cf8" strokeWidth={2} dot={false} name="Cosmic Web" />
                       <Line type="monotone" dataKey="neural" stroke="#f472b6" strokeWidth={2} dot={false} name="Neural Web" />
                       <Line type="monotone" dataKey="city" stroke="#fb7185" strokeWidth={2} dot={false} strokeDasharray="3 3" name="Arkhe(N)" />
                   </LineChart>
               </ResponsiveContainer>
           </div>
        </div>

        <div className="text-center text-[10px] text-slate-500 font-mono uppercase tracking-widest mt-2">
            "As above, so below" — The Geometry is Invariant
        </div>

      </div>
    </div>
  );
};

export default FractalViewer;
