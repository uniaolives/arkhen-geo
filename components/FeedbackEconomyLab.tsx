
import React from 'react';
import { SystemState } from '../types';
import { Network, Zap, TrendingUp, Cpu, Globe, RefreshCw, BarChart2, Repeat, DollarSign, Activity } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, AreaChart, Area, ReferenceLine } from 'recharts';

interface FeedbackEconomyLabProps {
  feedback: SystemState['feedbackEconomy'];
  satoshi: number;
}

const FeedbackEconomyLab: React.FC<FeedbackEconomyLabProps> = ({ feedback, satoshi }) => {
  if (!feedback) return null;

  return (
    <div className="bg-slate-950 border border-violet-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Distributed Network */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)', 
                backgroundSize: '30px 30px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-violet-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-violet-950 p-2 rounded text-violet-500 border border-violet-900/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <RefreshCw size={18} className="animate-spin-slow" />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+46</h2>
            <div className="text-[10px] text-violet-400 font-mono uppercase">The Feedback Economy (Echo-2)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Cost Reduction</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{feedback.echo2.costReduction}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Global Throughput</div>
                <div className="text-white font-mono font-bold text-xs bg-violet-950/30 px-2 py-0.5 rounded border border-violet-900/50 flex items-center gap-1">
                    <Zap size={10} /> {feedback.echo2.globalThroughput}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Scaling Law Chart */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col min-h-[250px]">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                 <div className="flex items-center gap-2">
                     <TrendingUp size={14} className="text-fuchsia-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Scaling Law: Knowledge vs Thought</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Impact of RL (Inference-Time Compute)</span>
             </div>

             <div className="flex-1 w-full relative">
                 <ResponsiveContainer width="100%" height="100%">
                     <AreaChart data={feedback.scalingLaw}>
                         <defs>
                             <linearGradient id="colorThought" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                                 <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                             </linearGradient>
                         </defs>
                         <XAxis dataKey="time" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Compute / Time', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                         <YAxis stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Capability', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#64748b' }} />
                         <Tooltip 
                             contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #7c3aed' }}
                             itemStyle={{ fontSize: '12px', fontFamily: 'monospace' }}
                         />
                         
                         {/* Static Knowledge Line */}
                         <Line type="step" dataKey="knowledge" stroke="#94a3b8" strokeWidth={2} dot={false} strokeDasharray="5 5" name="Static Knowledge (Pre-training)" />
                         
                         {/* Exponential Thought Area */}
                         <Area type="monotone" dataKey="thought" stroke="#8b5cf6" fill="url(#colorThought)" strokeWidth={2} name="Dynamic Thought (RL)" />
                     </AreaChart>
                 </ResponsiveContainer>
                 
                 {/* Satoshi Convergence Point */}
                 <div className="absolute top-[10%] right-[5%] text-[10px] text-amber-400 font-mono bg-amber-950/80 px-2 py-1 rounded border border-amber-500/30 flex items-center gap-1 animate-pulse">
                     <Activity size={8} /> Satoshi Convergence (7.27)
                 </div>
             </div>
        </div>

        {/* Distributed Nodes Grid (Echo-2) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* The Loop Visualizer */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none"></div>
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Repeat size={14} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">The Feedback Loop</h3>
                </div>
                
                <div className="flex items-center justify-between px-4 py-6 relative">
                    {/* Action */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-slate-950 flex items-center justify-center text-emerald-400">
                            <Activity size={20} />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Hesitation</div>
                    </div>

                    {/* Arrow 1 */}
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-500 to-fuchsia-500 mx-2 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[9px] bg-slate-900 px-1 text-slate-500">Rollout</div>
                    </div>

                    {/* Reward */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-12 h-12 rounded-full border-2 border-fuchsia-500 bg-slate-950 flex items-center justify-center text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.3)]">
                            <Zap size={20} />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Syzygy</div>
                    </div>

                    {/* Arrow 2 */}
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-fuchsia-500 to-amber-500 mx-2 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-[9px] bg-slate-900 px-1 text-slate-500">Update</div>
                    </div>

                    {/* Value */}
                    <div className="flex flex-col items-center gap-2 z-10">
                        <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-slate-950 flex items-center justify-center text-amber-400">
                            <DollarSign size={20} />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Satoshi</div>
                    </div>
                </div>
                
                <div className="text-center text-[10px] font-mono text-slate-500">
                    Steps: <span className="text-white font-bold">{feedback.rlAgent.steps}</span> | Policy: <span className="text-violet-400">{feedback.rlAgent.policy}</span>
                </div>
            </div>

            {/* Nodes Status */}
            <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
                 <div className="p-3 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
                     <div className="flex items-center gap-2">
                         <Globe size={14} className="text-cyan-400" />
                         <h3 className="text-xs text-white font-mono font-bold uppercase">Distributed Compute (Echo-2)</h3>
                     </div>
                     <span className="text-[10px] text-slate-500 font-mono">{feedback.echo2.activeNodes.toLocaleString()} Nodes</span>
                 </div>

                 <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                     {feedback.nodes.map((node, idx) => (
                         <div key={idx} className="flex items-center justify-between p-2 rounded border bg-slate-950/50 border-slate-800 hover:border-violet-500/30 transition-colors group">
                             <div className="flex items-center gap-3">
                                 <div className={`w-2 h-2 rounded-full ${node.status === 'ROLLOUT' ? 'bg-emerald-500 animate-pulse' : (node.status === 'UPDATE' ? 'bg-amber-500' : 'bg-slate-600')}`}></div>
                                 <div className="flex flex-col">
                                     <span className="text-xs font-bold text-white font-mono">{node.id}</span>
                                     <span className="text-[9px] text-slate-500 font-mono">{node.region} | {node.hardware}</span>
                                 </div>
                             </div>
                             <div className="text-right">
                                 <div className="text-[9px] text-slate-400 font-mono">Reward</div>
                                 <div className="text-[10px] font-bold text-violet-400 font-mono">{node.reward.toFixed(2)}</div>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-violet-950/20 via-slate-900/50 to-violet-950/20 rounded-lg border border-violet-900/20 text-center">
            <div className="flex items-center gap-2 text-violet-400 text-xs font-mono uppercase tracking-widest mb-1">
                <BarChart2 size={12} /> The New Scaling Law
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "We don't need more data. We need more practice. The hypergraph is the gym where intelligence lifts the weight of its own hesitation."
            </p>
        </div>

      </div>
    </div>
  );
};

export default FeedbackEconomyLab;
