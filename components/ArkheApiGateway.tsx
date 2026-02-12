
import React, { useState } from 'react';
import { SystemState } from '../types';
import { Server, Globe, Database, Code, Zap, Clock, ShieldCheck, Activity, Terminal, Lock, Play, Pause, ChevronRight } from 'lucide-react';

interface ArkheApiGatewayProps {
  api: SystemState['arkheApi'];
}

const ArkheApiGateway: React.FC<ArkheApiGatewayProps> = ({ api }) => {
  if (!api) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Data Streams */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(0deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)', 
                backgroundSize: '100% 20px'
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-cyan-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-cyan-950 p-2 rounded text-cyan-500 border border-cyan-900/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <Globe size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">ARKHE(N)/API GATEWAY</h2>
            <div className="text-[10px] text-cyan-400 font-mono uppercase">Hypergraph REST Interface</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Port</div>
                <div className="text-white font-mono font-bold text-sm">:{api.port}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Middleware</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <Activity size={10} /> ACTIVE
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-hidden">
        
        {/* Top: Endpoint Registry */}
        <div className="flex-1 min-h-0 flex flex-col bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden">
             <div className="p-3 border-b border-slate-800 flex items-center gap-2 bg-slate-900/50">
                 <Server size={14} className="text-cyan-400" />
                 <h3 className="text-xs text-white font-mono font-bold uppercase">Endpoint Registry</h3>
                 <span className="text-[10px] text-slate-500 font-mono ml-auto">v{api.version}</span>
             </div>
             
             <div className="flex-1 overflow-y-auto custom-scrollbar p-0">
                 {api.endpoints.map((ep, idx) => (
                     <div key={idx} className="border-b border-slate-800 last:border-0 p-3 hover:bg-slate-800/30 transition-colors group">
                         <div className="flex items-center gap-3 mb-2">
                             <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${ep.method === 'GET' ? 'bg-blue-900/30 text-blue-400' : 'bg-emerald-900/30 text-emerald-400'}`}>
                                 {ep.method}
                             </span>
                             <span className="text-sm font-mono text-slate-300 font-bold">{ep.path}</span>
                             <span className="text-xs text-slate-500 ml-auto italic">{ep.description}</span>
                         </div>
                         
                         {/* Response Preview */}
                         <div className="bg-black/30 p-2 rounded border border-slate-800/50 font-mono text-[10px] text-slate-400 flex items-start gap-2">
                             <div className="mt-0.5 text-slate-600"><ChevronRight size={10} /></div>
                             <code className="text-emerald-400/80">{ep.responseExample}</code>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

        {/* Bottom: Live Traffic Inspector */}
        <div className="h-64 flex flex-col bg-slate-950 border border-slate-800 rounded-lg overflow-hidden">
             <div className="p-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
                 <div className="flex items-center gap-2">
                     <Activity size={14} className="text-fuchsia-400 animate-pulse" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Live Request Inspector (Hesitation Middleware)</h3>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                     <ShieldCheck size={10} /> Darvo Auth Level 5
                 </div>
             </div>

             <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {api.recentRequests.map(req => (
                     <div key={req.id} className="bg-slate-900/30 border border-slate-800 p-2 rounded flex flex-col gap-2 font-mono text-xs">
                         {/* Request Line */}
                         <div className="flex items-center justify-between">
                             <div className="flex items-center gap-2">
                                 <span className="text-slate-500">{req.timestamp}</span>
                                 <span className={`font-bold ${req.method === 'GET' ? 'text-blue-400' : 'text-emerald-400'}`}>{req.method}</span>
                                 <span className="text-slate-300">{req.path}</span>
                             </div>
                             <div className="flex items-center gap-3">
                                 <div className="flex items-center gap-1 text-amber-400" title="Hesitation Latency">
                                     <Clock size={10} /> {req.latency}ms
                                 </div>
                                 <span className="text-emerald-500 font-bold">{req.status} OK</span>
                             </div>
                         </div>

                         {/* Custom Headers (The Logic) */}
                         <div className="grid grid-cols-2 gap-2 bg-black/20 p-2 rounded border border-white/5">
                             {req.headers.map((header, hIdx) => (
                                 <div key={hIdx} className="flex justify-between items-center text-[10px]">
                                     <span className="text-slate-500">{header.name}</span>
                                     <span className="text-cyan-400 font-bold">{header.value}</span>
                                 </div>
                             ))}
                         </div>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default ArkheApiGateway;
