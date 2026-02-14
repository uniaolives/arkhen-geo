
import React, { useEffect, useRef } from 'react';
import { LogEntry } from '../types';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  logs: LogEntry[];
}

const Terminal: React.FC<TerminalProps> = ({ logs }) => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const getLevelColor = (level: LogEntry['level']) => {
    switch (level) {
      case 'info': return 'text-blue-400';
      case 'warn': return 'text-amber-400';
      case 'success': return 'text-emerald-400';
      case 'system': return 'text-fuchsia-400 font-bold';
      default: return 'text-slate-300';
    }
  };

  if (!logs) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg font-mono text-sm overflow-hidden flex flex-col h-full relative">
      {/* Scanline Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 2px, 3px 100%'
            }}>
      </div>

      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 text-xs text-slate-400">
            <TerminalIcon size={12} />
            <span>/var/log/arkhe/kernel_ignition.log</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700"></div>
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
        </div>
      </div>
      <div className="p-4 overflow-y-auto flex-1 space-y-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent relative z-10">
        <div className="text-[10px] text-slate-600 mb-4 border-b border-slate-800 pb-2">
            System Online. Kernel Version 5.15-arkhe (Ignition).<br/>
            Secure Boot Enabled. Satoshi Invariant Verified.
        </div>
        {logs.map((log) => {
            if (!log) return null;
            return (
              <div key={log.id} className="flex gap-3 text-xs">
                <span className="text-slate-600 shrink-0 select-none">[{log.timestamp}]</span>
                <span className={`${getLevelColor(log.level)} break-words`}>
                    {log.level === 'system' ? '> ' : ''}{log.message}
                </span>
              </div>
            );
        })}
        <div ref={endRef} />
      </div>
    </div>
  );
};

export default Terminal;
