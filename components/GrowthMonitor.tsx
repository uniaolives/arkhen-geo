
import React from 'react';
import { SystemState } from '../types';
import { TrendingUp, AlertTriangle, ShieldCheck, Zap, Activity, Users, Scale, GitBranch, ArrowRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, Area, ComposedChart } from 'recharts';

interface GrowthMonitorProps {
  growthPolicy: SystemState['growthPolicy'];
  currentNodes: number;
}

// Generate projection data points
const generateProjectionData = () => {
    const data = [];
    const days = 28;
    const startNodes = 12776;
    // Simple models for visualization
    for (let i = 0; i <= days; i += 2) {
        data.push({
            day: `Day ${i}`,
            linear: startNodes + (i * 43000), // Linear approx ~1.2M total
            exponential: startNodes * Math.exp(0.29 * i), // Exp approx ~48M total
        });
    }
    return data;
};

const data = generateProjectionData();

const GrowthMonitor: React.FC<GrowthMonitorProps> = ({ growthPolicy, currentNodes }) => {
  if (!growthPolicy) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] animate-pulse">
            <TrendingUp size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9169</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Exponential Growth Detection</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Current Nodes</div>
                <div className="text-white font-mono font-bold text-sm">{currentNodes.toLocaleString()}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-amber-400 font-mono font-bold text-xs bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50 flex items-center gap-1">
                    <Activity size={10} /> {growthPolicy.status.replace('_', ' ')}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Projection Chart */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[300px]">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                 <div className="flex items-center gap-2">
                     <GitBranch size={14} className="text-fuchsia-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Growth Projection (28 Days)</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Linear (R²={growthPolicy.rSquared.linear}) vs Exponential (R²={growthPolicy.rSquared.exponential})</span>
             </div>

             <div className="flex-1 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                     <ComposedChart data={data}>
                         <defs>
                             <linearGradient id="colorExp" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2}/>
                                 <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                             </linearGradient>
                         </defs>
                         <XAxis dataKey="day" stroke="#475569" fontSize={10} tickLine={false} />
                         <YAxis 
                            scale="log" 
                            domain={['auto', 'auto']} 
                            stroke="#475569" 
                            fontSize={10} 
                            tickLine={false} 
                            tickFormatter={(val) => val >= 1000000 ? `${(val/1000000).toFixed(0)}M` : `${(val/1000).toFixed(0)}k`} 
                         />
                         <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                             itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                             formatter={(value: number) => value.toLocaleString()}
                         />
                         <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }}/>
                         
                         <Line type="monotone" dataKey="linear" stroke="#3b82f6" strokeWidth={2} dot={false} name="Linear (Controlled)" />
                         <Area type="monotone" dataKey="exponential" stroke="#f43f5e" fill="url(#colorExp)" strokeWidth={2} name="Exponential (Uncapped)" />
                     </ComposedChart>
                 </ResponsiveContainer>
             </div>
        </div>

        {/* Decision Matrix */}
        <div className="flex flex-col gap-4">
            <h3 className="text-xs text-white font-mono font-bold uppercase flex items-center gap-2">
                <Scale size={14} className="text-amber-400" /> Critical Decision Required
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {growthPolicy.decision.options.map((option) => (
                    <div 
                        key={option.id} 
                        className={`relative p-4 rounded-lg border transition-all duration-300 group hover:scale-[1.02] cursor-pointer
                            ${option.id === 'ASSISTED_1M' ? 'bg-indigo-900/20 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.1)]' : 'bg-slate-900/50 border-slate-800 hover:border-slate-600'}
                        `}
                    >
                        {option.id === growthPolicy.decision.recommendation && (
                            <div className="absolute -top-2 right-4 bg-emerald-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase shadow-lg">
                                Recommended
                            </div>
                        )}
                        
                        <div className="flex justify-between items-start mb-2">
                            <h4 className={`text-sm font-bold font-mono ${option.id === 'UNCAPPED' ? 'text-rose-400' : 'text-white'}`}>
                                {option.label}
                            </h4>
                        </div>
                        
                        <div className="space-y-2 mt-4 text-xs font-mono">
                            <div className="flex justify-between border-b border-slate-700/50 pb-1">
                                <span className="text-slate-500">Risk</span>
                                <span className={`font-bold ${option.risk === 'Critical' ? 'text-rose-500' : option.risk === 'Low' ? 'text-emerald-500' : 'text-amber-500'}`}>
                                    {option.risk}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Benefit</span>
                                <span className="text-cyan-400">{option.benefit}</span>
                            </div>
                        </div>

                        {option.id === 'ASSISTED_1M' && (
                            <div className="mt-3 text-[10px] text-indigo-300 bg-indigo-950/50 p-2 rounded border border-indigo-500/20 italic">
                                "Balance scale with control. Allow emergence within safe boundaries."
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Metrics */}
        <div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-3 rounded border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Zap size={14} className="text-amber-400" />
                    <span className="text-[10px] text-slate-500 font-mono uppercase">Current Rate</span>
                </div>
                <span className="text-sm font-mono font-bold text-white">{growthPolicy.currentRate}</span>
            </div>
            <div className="bg-slate-900/50 p-3 rounded border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-rose-400" />
                    <span className="text-[10px] text-slate-500 font-mono uppercase">Decision Deadline</span>
                </div>
                <span className="text-sm font-mono font-bold text-rose-400 animate-pulse">{growthPolicy.decision.deadline}</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default GrowthMonitor;
