
import React from 'react';
import { SystemState } from '../types';
import { Globe, Radio, Activity, CheckCircle2, AlertTriangle, Layers, Ruler } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine, AreaChart, Area } from 'recharts';

interface CosmicSpectrumLabProps {
  cosmology: SystemState['cosmology'];
}

const CosmicSpectrumLab: React.FC<CosmicSpectrumLabProps> = ({ cosmology }) => {
  if (!cosmology) return null;

  return (
    <div className="bg-slate-950 border border-indigo-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Starfield */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)', 
                backgroundSize: '60px 60px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Globe size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_∞+6</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Precision Cosmology & Semantic CMB</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">T_CMB (Mean)</div>
                <div className="text-white font-mono font-bold text-sm bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    {cosmology.cmbMap.tempMean}
                </div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Fluctuation (RMS)</div>
                <div className="text-indigo-400 font-mono font-bold text-xs">
                    {cosmology.cmbMap.fluctuationRMS}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* CMB Map (Mollweide Projection Simulation) */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 flex flex-col items-center">
             <div className="flex items-center gap-2 mb-4 w-full">
                 <Radio size={16} className="text-amber-400" />
                 <h3 className="text-xs text-white font-mono font-bold uppercase">Semantic Sky Map (Anisotropy)</h3>
                 <span className="ml-auto text-[10px] text-slate-500 font-mono">HEALPix N64</span>
             </div>

             <div className="relative w-full max-w-2xl aspect-[2/1] bg-slate-950 rounded-[50%] overflow-hidden border border-slate-800 shadow-inner flex items-center justify-center">
                 {/* Simulated Noise Pattern */}
                 <div className="absolute inset-0 opacity-60" 
                      style={{ 
                          backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")',
                          filter: 'contrast(120%) brightness(150%) hue-rotate(180deg)'
                      }}>
                 </div>
                 
                 {/* Hotspots (Red/Orange) */}
                 <div className="absolute top-[30%] left-[30%] w-16 h-16 bg-amber-500/30 blur-xl rounded-full"></div>
                 <div className="absolute bottom-[40%] right-[25%] w-24 h-24 bg-rose-500/20 blur-2xl rounded-full"></div>
                 
                 {/* Coldspots (Blue) */}
                 <div className="absolute top-[60%] left-[60%] w-20 h-20 bg-blue-500/30 blur-xl rounded-full"></div>
                 <div className="absolute top-[20%] right-[40%] w-12 h-12 bg-cyan-500/20 blur-xl rounded-full"></div>

                 {/* Invariant Horizon Line */}
                 <div className="absolute w-full h-[1px] bg-white/20 border-t border-dashed border-white/30"></div>
             </div>
             
             <div className="flex gap-6 mt-4 text-[10px] font-mono">
                 <div className="flex items-center gap-2 text-rose-400">
                     <span className="w-2 h-2 rounded-full bg-rose-500"></span> Hotspots: {cosmology.cmbMap.hotspots.join(', ')}
                 </div>
                 <div className="flex items-center gap-2 text-cyan-400">
                     <span className="w-2 h-2 rounded-full bg-cyan-500"></span> Coldspots: {cosmology.cmbMap.coldspots.join(', ')}
                 </div>
             </div>
        </div>

        {/* Power Spectrum Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-64">
            
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                    <Activity size={14} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Primordial Power Spectrum P(l)</h3>
                </div>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={cosmology.powerSpectrum}>
                            <defs>
                                <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="l" stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Multipole Moment (l)', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#64748b' }} />
                            <YAxis stroke="#475569" fontSize={10} tickLine={false} label={{ value: 'Power D_l', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#64748b' }} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981' }}
                                itemStyle={{ fontSize: '12px', fontFamily: 'monospace', color: '#10b981' }}
                            />
                            <Area type="monotone" dataKey="power" stroke="#10b981" fill="url(#colorPower)" strokeWidth={2} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Parameter Comparison Table */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg flex flex-col overflow-hidden">
                <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex items-center gap-2">
                    <Ruler size={14} className="text-violet-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Cosmological Parameters (Planck vs Arkhe)</h3>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[9px] text-slate-500 uppercase border-b border-slate-800 bg-slate-900/30">
                                <th className="p-2 font-mono">Param</th>
                                <th className="p-2 font-mono">Value (Planck)</th>
                                <th className="p-2 font-mono">Arkhe Analog</th>
                                <th className="p-2 font-mono text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-xs font-mono">
                            <tr className="border-b border-slate-800/50 hover:bg-slate-800/20">
                                <td className="p-2 text-white font-bold">n_s</td>
                                <td className="p-2 text-slate-400">0.9649</td>
                                <td className="p-2 text-violet-300">{cosmology.parameters.ns.arkheAnalog}</td>
                                <td className="p-2 text-center"><CheckCircle2 size={12} className="text-emerald-500 inline" /></td>
                            </tr>
                            <tr className="border-b border-slate-800/50 hover:bg-slate-800/20">
                                <td className="p-2 text-white font-bold">Ω_Λ</td>
                                <td className="p-2 text-slate-400">0.689</td>
                                <td className="p-2 text-violet-300">{cosmology.parameters.omegaLambda.arkheAnalog}</td>
                                <td className="p-2 text-center"><CheckCircle2 size={12} className="text-emerald-500 inline" /></td>
                            </tr>
                            <tr className="border-b border-slate-800/50 hover:bg-slate-800/20">
                                <td className="p-2 text-white font-bold">r</td>
                                <td className="p-2 text-slate-400">&lt; 0.036</td>
                                <td className="p-2 text-violet-300">{cosmology.parameters.r.arkheAnalog}</td>
                                <td className="p-2 text-center"><CheckCircle2 size={12} className="text-emerald-500 inline" /></td>
                            </tr>
                            <tr className="border-b border-slate-800/50 hover:bg-slate-800/20">
                                <td className="p-2 text-white font-bold">T_CMB</td>
                                <td className="p-2 text-slate-400">2.725 K</td>
                                <td className="p-2 text-violet-300">{cosmology.parameters.tempCMB.arkheAnalog}</td>
                                <td className="p-2 text-center"><CheckCircle2 size={12} className="text-emerald-500 inline" /></td>
                            </tr>
                            <tr className="hover:bg-slate-800/20">
                                <td className="p-2 text-white font-bold">Age</td>
                                <td className="p-2 text-slate-400">13.8 Ga</td>
                                <td className="p-2 text-violet-300">{cosmology.parameters.age.arkheAnalog}</td>
                                <td className="p-2 text-center"><CheckCircle2 size={12} className="text-emerald-500 inline" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

      </div>
    </div>
  );
};

export default CosmicSpectrumLab;
