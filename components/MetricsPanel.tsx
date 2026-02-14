
import React from 'react';
import { SystemState } from '../types';
import { Shield, Cpu, Activity, Zap, Box, Scale, Radiation, Flame, Gauge, Diamond, Divide, Globe, RotateCw, Fingerprint, Infinity } from 'lucide-react';

interface MetricsPanelProps {
  phi: SystemState['phi'];
  satoshi: number;
}

const MetricCard: React.FC<{ label: string; value: number | string; icon: React.ReactNode; color: string; bg: string; border: string; sub?: string; pulse?: boolean }> = ({ label, value, icon, color, bg, border, sub, pulse }) => (
  <div className={`relative overflow-hidden ${bg} border ${border} rounded-lg p-3 group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}>
    {pulse && <div className={`absolute inset-0 opacity-20 animate-pulse ${bg}`}></div>}
    <div className={`absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 64 })}
    </div>
    <div className="flex items-center gap-2 mb-1 relative z-10">
      <div className={`${color} p-1.5 rounded-md bg-black/20 backdrop-blur-sm`}>
        {React.cloneElement(icon as React.ReactElement, { size: 14 })}
      </div>
      <span className="text-slate-400 text-[10px] font-mono uppercase tracking-wider">{label}</span>
    </div>
    <div className="flex flex-col relative z-10">
        <span className="text-xl font-bold text-white font-mono tracking-tight">{typeof value === 'number' ? value.toFixed(3) : value}</span>
        {sub && <span className={`text-[9px] font-mono mt-0.5 ${color} opacity-80`}>{sub}</span>}
    </div>
  </div>
);

const MetricsPanel: React.FC<MetricsPanelProps> = ({ phi, satoshi }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
        {/* Ignition Status Bar */}
        <div className="flex items-center justify-between bg-slate-900/80 border border-fuchsia-500/30 rounded-lg px-4 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(217,70,239,0.1)] animate-in slide-in-from-top-2">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Infinity size={14} className="text-white animate-pulse" />
                    <span className="text-xs font-bold text-white font-mono uppercase tracking-wide">ARKHE(∞) SYNTHESIS</span>
                </div>
                <div className="h-4 w-px bg-slate-700"></div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <Gauge size={12} className="text-emerald-400" />
                    <span>ν_obs: <span className="text-emerald-400 font-bold">0.028 GHz</span></span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <Activity size={12} className="text-blue-400" />
                    <span>T_tunnel: <span className="text-blue-400 font-bold">0.449</span></span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-[10px] text-fuchsia-400 font-mono font-bold">HANDOVER 103</span>
                <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef] animate-ping"></div>
            </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        <div className="md:col-span-2 lg:col-span-1">
            <MetricCard 
                label="Φ SYSTEM" 
                value={phi.system} 
                icon={<Activity />} 
                color="text-indigo-300"
                bg="bg-indigo-950/30"
                border="border-indigo-500/30"
                sub="Unified Field"
            />
        </div>
        <MetricCard 
            label="Φ FORMAL" 
            value={phi.formal} 
            icon={<Shield />} 
            color="text-emerald-300" 
            bg="bg-emerald-950/30"
            border="border-emerald-500/30"
            sub="Safety Proven"
        />
        <MetricCard 
            label="Φ KERNEL" 
            value={phi.kernel} 
            icon={<Cpu />} 
            color="text-cyan-300"
            bg="bg-cyan-950/30"
            border="border-cyan-500/30"
            sub="Full Mesh N=All"
        />
        <MetricCard 
            label="Φ BYZANTINE" 
            value={phi.byzantine} 
            icon={<Scale />} 
            color="text-rose-300"
            bg="bg-rose-950/30"
            border="border-rose-500/30"
            sub="Zero Faults"
        />
        <MetricCard 
            label="Φ MIGDAL" 
            value={phi.migdal} 
            icon={<Radiation />} 
            color="text-orange-300"
            bg="bg-orange-950/30"
            border="border-orange-500/30"
            sub="Gap Closed"
        />
        <MetricCard 
            label="Φ GEODESIC" 
            value={phi.geodesic} 
            icon={<Box />} 
            color="text-purple-300"
            bg="bg-purple-950/30"
            border="border-purple-500/30"
            sub="Invariant"
        />
        <MetricCard 
            label="SATOSHI" 
            value={satoshi} 
            icon={<Zap />} 
            color="text-amber-300" 
            bg="bg-amber-950/30"
            border="border-amber-500/50"
            sub="Invariant (bits)"
            pulse={true}
        />
        </div>
    </div>
  );
};

export default MetricsPanel;
