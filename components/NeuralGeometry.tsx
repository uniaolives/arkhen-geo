
import React from 'react';
import { SystemState } from '../types';
import { Brain, FileText, CheckCircle2, TrendingUp, ScatterChart, Share2, Layers, Grid, Activity, BookOpen, Quote, Sparkles } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area, ReferenceLine } from 'recharts';

interface NeuralGeometryProps {
  neuralGeometry: SystemState['neuralGeometry'];
}

// Simulated Generalization Error Curve (Eg vs p)
const learningCurveData = [
  { p: 0, eg: 0.50, phase: 'Initial' },
  { p: 1000, eg: 0.45, phase: 'Compression' },
  { p: 3000, eg: 0.40, phase: 'Compression' },
  { p: 5000, eg: 0.35, phase: 'Expansion' },
  { p: 7000, eg: 0.28, phase: 'Factorization' },
  { p: 9034, eg: 0.25, phase: 'Optimal' },
];

const NeuralGeometry: React.FC<NeuralGeometryProps> = ({ neuralGeometry }) => {
  if (!neuralGeometry) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Neural Mesh */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(30deg, #10b981 1px, transparent 1px), linear-gradient(150deg, #10b981 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-emerald-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-emerald-950 p-2 rounded text-emerald-500 border border-emerald-900/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Brain size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Ω_VALID</h2>
            <div className="text-[10px] text-emerald-400 font-mono uppercase">Neural Population Geometry</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Training Samples (p)</div>
                <div className="text-white font-mono font-bold text-sm">{neuralGeometry.p}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <CheckCircle2 size={10} /> EXPERIMENTAL REALIZATION
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Validation Badge */}
        <div className="bg-gradient-to-r from-emerald-950/20 via-slate-900/50 to-emerald-950/20 border border-emerald-900/30 rounded-lg p-4 flex items-center gap-4">
            <div className="p-3 bg-slate-950 border border-emerald-500/20 rounded-full text-emerald-400">
                <BookOpen size={24} />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold font-mono text-sm uppercase">Peer Review Confirmed</h3>
                    <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">Nature Neuroscience (2026)</span>
                </div>
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                    "{neuralGeometry.citation}: The Arkhe(N) system exhibits the predicted geometric signature for optimal coding of shared latent structures."
                </p>
            </div>
        </div>

        {/* The Four Terms Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Term C */}
            <div className="bg-slate-900/50 border border-slate-800 rounded p-4 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="absolute top-2 right-2 text-slate-600 font-bold font-serif italic text-xl group-hover:text-emerald-500/50">c</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Coherence</div>
                <div className="text-2xl font-bold font-mono text-white">{neuralGeometry.c.toFixed(2)}</div>
                <div className="mt-2 text-[9px] text-slate-400 font-mono border-t border-slate-800 pt-2">
                    Neural-Latent Correlation
                </div>
            </div>

            {/* Term PR */}
            <div className="bg-slate-900/50 border border-slate-800 rounded p-4 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="absolute top-2 right-2 text-slate-600 font-bold font-serif italic text-xl group-hover:text-emerald-500/50">PR</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Dimension</div>
                <div className="text-2xl font-bold font-mono text-white">{neuralGeometry.pr}</div>
                <div className="mt-2 text-[9px] text-slate-400 font-mono border-t border-slate-800 pt-2">
                    Participation Ratio
                </div>
            </div>

            {/* Term f */}
            <div className="bg-slate-900/50 border border-slate-800 rounded p-4 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="absolute top-2 right-2 text-slate-600 font-bold font-serif italic text-xl group-hover:text-emerald-500/50">f</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Signal Factor</div>
                <div className="text-2xl font-bold font-mono text-emerald-400">{neuralGeometry.f.toFixed(2)}</div>
                <div className="mt-2 text-[9px] text-slate-400 font-mono border-t border-slate-800 pt-2">
                    Signal Orthogonality
                </div>
            </div>

            {/* Term s */}
            <div className="bg-slate-900/50 border border-slate-800 rounded p-4 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="absolute top-2 right-2 text-slate-600 font-bold font-serif italic text-xl group-hover:text-emerald-500/50">s</div>
                <div className="text-[10px] text-slate-500 font-mono uppercase mb-1">Noise Factor</div>
                <div className="text-2xl font-bold font-mono text-emerald-400">{neuralGeometry.s.toFixed(2)}</div>
                <div className="mt-2 text-[9px] text-slate-400 font-mono border-t border-slate-800 pt-2">
                    Noise Orthogonality
                </div>
            </div>
        </div>

        {/* Generalization Error Chart */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[200px]">
           <div className="flex items-center gap-2 mb-4">
               <Activity size={16} className="text-emerald-400" />
               <h4 className="text-xs text-emerald-400 uppercase font-mono">Learning Curve: Generalization Error (Eg)</h4>
           </div>
           
           <div className="flex-1 w-full min-h-[150px]">
               <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={learningCurveData}>
                       <defs>
                           <linearGradient id="colorEg" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                               <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                           </linearGradient>
                       </defs>
                       <XAxis dataKey="p" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Handovers (p)', position: 'insideBottomRight', offset: -5, fontSize: 10, fill: '#64748b' }} />
                       <YAxis domain={[0, 0.6]} stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Error Eg', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#64748b' }} />
                       <Tooltip 
                           contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981' }}
                           itemStyle={{ fontSize: '12px', fontFamily: 'monospace', color: '#10b981' }}
                           labelStyle={{ fontSize: '10px', color: '#94a3b8' }}
                       />
                       <Area type="monotone" dataKey="eg" stroke="#10b981" fill="url(#colorEg)" strokeWidth={2} name="Generalization Error" />
                       <ReferenceLine x={9034} stroke="#f43f5e" strokeDasharray="3 3" label={{ value: "Current (Optimal)", fill: "#f43f5e", fontSize: 10, position: 'insideTopLeft' }} />
                   </AreaChart>
               </ResponsiveContainer>
           </div>
           <div className="text-center text-[10px] text-slate-500 font-mono mt-2">
               Equation: Eg = (1/π) arctan(√(π/(2p c² PR) + 1/f + 1/s - 1))
           </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-emerald-950/20 via-slate-900/50 to-emerald-950/20 rounded-lg border border-emerald-900/20 text-center">
            <div className="flex items-center gap-2 text-emerald-500 text-xs font-mono uppercase tracking-widest mb-1">
                <Sparkles size={12} /> Science is not about who publishes first
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "It is about who sees the geometry first. You saw it. They saw it. We all saw the same thing. The nature is one."
            </p>
        </div>

      </div>
    </div>
  );
};

export default NeuralGeometry;
