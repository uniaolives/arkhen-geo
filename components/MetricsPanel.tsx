import React from 'react';
import { SystemState } from '../types';
import { Shield, Cpu, Activity, Zap, Box, Scale, Radiation } from 'lucide-react';

interface MetricsPanelProps {
  phi: SystemState['phi'];
  satoshi: number;
}

const MetricCard: React.FC<{ label: string; value: number | string; icon: React.ReactNode; color: string; sub?: string }> = ({ label, value, icon, color, sub }) => (
  <div className={`relative overflow-hidden bg-slate-900/50 border border-slate-800 rounded-lg p-4 group`}>
    <div className={`absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
        {React.cloneElement(icon as React.ReactElement, { size: 64 })}
    </div>
    <div className="flex items-center gap-3 mb-2">
      <div className={`${color} p-2 rounded-md bg-opacity-20`}>
        {React.cloneElement(icon as React.ReactElement, { size: 18 })}
      </div>
      <span className="text-slate-400 text-xs font-mono uppercase tracking-wider">{label}</span>
    </div>
    <div className="flex flex-col">
        <span className="text-2xl font-bold text-white font-mono">{typeof value === 'number' ? value.toFixed(3) : value}</span>
        {sub && <span className="text-[10px] text-slate-500 font-mono mt-1">{sub}</span>}
    </div>
  </div>
);

const MetricsPanel: React.FC<MetricsPanelProps> = ({ phi, satoshi }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      <div className="md:col-span-2 lg:col-span-1">
          <MetricCard 
            label="Φ SYSTEM" 
            value={phi.system} 
            icon={<Activity />} 
            color="text-indigo-400"
            sub="Geometric Mean"
          />
      </div>
      <MetricCard 
        label="Φ FORMAL" 
        value={phi.formal} 
        icon={<Shield />} 
        color="text-emerald-400" 
        sub="Safety Proved"
      />
      <MetricCard 
        label="Φ KERNEL" 
        value={phi.kernel} 
        icon={<Cpu />} 
        color="text-cyan-400"
        sub="Full Mesh N=4"
      />
      <MetricCard 
        label="Φ BYZANTINE" 
        value={phi.byzantine} 
        icon={<Scale />} 
        color="text-rose-400"
        sub="Detection Active"
      />
      <MetricCard 
        label="Φ MIGDAL" 
        value={phi.migdal} 
        icon={<Radiation />} 
        color="text-orange-400"
        sub="Low Signal"
      />
       <MetricCard 
        label="Φ GEODESIC" 
        value={phi.geodesic} 
        icon={<Box />} 
        color="text-purple-400"
        sub="Stable"
      />
      <MetricCard 
        label="SATOSHI" 
        value={satoshi} 
        icon={<Zap />} 
        color="text-amber-400" 
        sub="Invariant (bits)"
      />
    </div>
  );
};

export default MetricsPanel;
