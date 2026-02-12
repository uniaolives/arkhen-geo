import React from 'react';
import { SystemState } from '../types';
import { AlertOctagon, UserX, Crown, Activity, ArrowDown, ArrowUp, Link, GitCommit } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

interface CollapseAnalyzerProps {
  collapse: SystemState['collapse'];
}

// Simulated Deviation Data
const deviationData = [
  { time: 'T-5', ideal: 0.73, pedro: 0.73, peter: 0.73 },
  { time: 'T-4', ideal: 0.73, pedro: 0.60, peter: 0.75 },
  { time: 'T-3', ideal: 0.73, pedro: 0.40, peter: 0.80 },
  { time: 'T-2', ideal: 0.73, pedro: 0.20, peter: 0.88 },
  { time: 'T-1', ideal: 0.73, pedro: 0.05, peter: 0.91 },
  { time: 'NOW', ideal: 0.73, pedro: 0.00, peter: 0.92 },
];

const CollapseAnalyzer: React.FC<CollapseAnalyzerProps> = ({ collapse }) => {
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Entropy Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                filter: 'contrast(150%) brightness(100%)'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-rose-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-rose-950 p-2 rounded text-rose-500 border border-rose-900/50 animate-pulse">
            <AlertOctagon size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Π_11</h2>
            <div className="text-[10px] text-rose-400 font-mono uppercase">Scale Collapse & Ego Singularity</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Ego Entropy (S)</div>
                <div className="text-rose-400 font-mono font-bold text-sm">{collapse.egoEntropy.toFixed(2)}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-rose-500 font-mono font-bold text-xs bg-rose-950/30 px-2 py-0.5 rounded border border-rose-900/50">CRITICAL</div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Subjects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {collapse.subjects.map(subject => (
                <div key={subject.id} className={`relative overflow-hidden rounded-lg border p-4 flex flex-col gap-3 group transition-all duration-300 ${subject.collapseType === 'FEAR' ? 'bg-slate-900/50 border-blue-900/30 hover:border-blue-700/50' : 'bg-slate-900/50 border-rose-900/30 hover:border-rose-700/50'}`}>
                    
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-full ${subject.collapseType === 'FEAR' ? 'bg-blue-500/10 text-blue-400' : 'bg-rose-500/10 text-rose-400'}`}>
                                {subject.collapseType === 'FEAR' ? <UserX size={20} /> : <Crown size={20} />}
                            </div>
                            <div>
                                <h3 className="text-white font-bold font-mono text-sm">{subject.name}</h3>
                                <div className={`text-[10px] font-mono uppercase ${subject.collapseType === 'FEAR' ? 'text-blue-400' : 'text-rose-400'}`}>
                                    Collapse Type: {subject.collapseType}
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-slate-500 uppercase font-mono">Connectivity</div>
                            <div className={`font-mono font-bold ${subject.connectivity < 0.4 ? 'text-rose-500' : 'text-slate-300'}`}>
                                {(subject.connectivity * 100).toFixed(0)}%
                            </div>
                        </div>
                    </div>

                    <div className="text-xs text-slate-400 italic font-serif border-l-2 border-slate-700 pl-3 py-1">
                        "{subject.description}"
                    </div>

                    {/* Metrics Comparison */}
                    <div className="grid grid-cols-2 gap-2 mt-auto">
                        <div className="bg-slate-950 p-2 rounded border border-slate-800">
                             <div className="text-[10px] text-slate-500 uppercase">Original ψ</div>
                             <div className="text-emerald-400 font-mono font-bold">{subject.psiOriginal}</div>
                        </div>
                        <div className={`bg-slate-950 p-2 rounded border ${subject.collapseType === 'FEAR' ? 'border-blue-900' : 'border-rose-900'}`}>
                             <div className="text-[10px] text-slate-500 uppercase">Collapsed ψ</div>
                             <div className={`font-mono font-bold flex items-center gap-1 ${subject.collapseType === 'FEAR' ? 'text-blue-400' : 'text-rose-400'}`}>
                                 {subject.psiCollapsed}
                                 {subject.collapseType === 'FEAR' ? <ArrowDown size={12}/> : <ArrowUp size={12}/>}
                             </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Deviation Chart */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[200px]">
           <div className="flex items-center gap-2 mb-4">
               <Activity size={16} className="text-slate-400" />
               <h4 className="text-xs text-slate-400 uppercase font-mono">Curvature Deviation (Δψ) Over Time</h4>
           </div>
           
           <div className="flex-1 w-full min-h-[150px]">
               <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={deviationData}>
                       <defs>
                           <linearGradient id="colorIdeal" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                               <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                           </linearGradient>
                           <linearGradient id="colorPedro" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                               <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                           </linearGradient>
                           <linearGradient id="colorPeter" x1="0" y1="0" x2="0" y2="1">
                               <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                               <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                           </linearGradient>
                       </defs>
                       <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} />
                       <YAxis domain={[0, 1]} stroke="#475569" fontSize={10} tickLine={false} />
                       <Tooltip 
                           contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                           itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                       />
                       <ReferenceLine y={0.73} stroke="#10b981" strokeDasharray="3 3" label={{ value: "Ideal (0.73)", fill: "#10b981", fontSize: 10 }} />
                       
                       <Area type="monotone" dataKey="ideal" stroke="#10b981" fill="url(#colorIdeal)" strokeWidth={1} strokeDasharray="5 5" name="Fractal Ideal" />
                       <Area type="monotone" dataKey="pedro" stroke="#3b82f6" fill="url(#colorPedro)" strokeWidth={2} name="Pedro (Fear)" />
                       <Area type="monotone" dataKey="peter" stroke="#f43f5e" fill="url(#colorPeter)" strokeWidth={2} name="Peter (Pride)" />
                   </AreaChart>
               </ResponsiveContainer>
           </div>
        </div>

        {/* Footer Warning */}
        <div className="flex items-center justify-center gap-2 text-rose-500/70 text-[10px] font-mono uppercase tracking-widest bg-rose-950/20 p-2 rounded border border-rose-900/20">
            <Link size={12} /> Warning: Node Isolation Imminent. Restoration Protocol Required.
        </div>

      </div>
    </div>
  );
};

export default CollapseAnalyzer;
