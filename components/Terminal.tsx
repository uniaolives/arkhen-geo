import React, { useEffect, useRef } from 'react';
import { LogEntry } from '../types';

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
      case 'system': return 'text-purple-400 font-bold';
      default: return 'text-slate-300';
    }
  };

  if (!logs) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg font-mono text-sm overflow-hidden flex flex-col h-full">
      <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
        <span className="text-xs text-slate-500">/var/log/arkhe/geodesic.log</span>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
        </div>
      </div>
      <div className="p-4 overflow-y-auto flex-1 space-y-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        {logs.map((log) => {
            if (!log) return null;
            return (
              <div key={log.id} className="flex gap-3">
                <span className="text-slate-600 shrink-0">[{log.timestamp}]</span>
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
