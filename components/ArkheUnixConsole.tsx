
import React from 'react';
import { SystemState } from '../types';
import { Terminal, Cpu, HardDrive, Network, Activity, Disc, FolderTree, Lock, ShieldCheck, Box, Layers, RefreshCw, Zap, Gauge } from 'lucide-react';

interface ArkheUnixConsoleProps {
  arkheUnix: SystemState['arkheUnix'];
}

const ArkheUnixConsole: React.FC<ArkheUnixConsoleProps> = ({ arkheUnix }) => {
  if (!arkheUnix) return null;

  const isContainer = arkheUnix.mode === 'CONTAINER';

  const getProcessStateColor = (state: string) => {
      switch(state) {
          case 'R': return 'text-emerald-400';
          case 'S': return 'text-slate-500';
          case 'Z': return 'text-rose-500';
          case 'T': return 'text-amber-500';
          default: return 'text-white';
      }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden font-mono">
      {/* Background Scanline Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 2px, 3px 100%'
            }}>
      </div>

      {/* Top Bar: Kernel Monitor */}
      <div className="bg-slate-900 border-b border-slate-800 p-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-emerald-400">
                  <Cpu size={12} />
                  <span>C: {(arkheUnix.loadAverage.c * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center gap-1.5 text-rose-400">
                  <Activity size={12} />
                  <span>F: {(arkheUnix.loadAverage.f * 100).toFixed(0)}%</span>
              </div>
              <div className="flex items-center gap-1.5 text-violet-400">
                  <Disc size={12} />
                  <span>ω: {arkheUnix.loadAverage.omega.toFixed(2)}</span>
              </div>
          </div>
          <div className="flex items-center gap-2">
              {arkheUnix.filesystem.fuseMounted && (
                  <div className="flex items-center gap-1 bg-amber-900/30 text-amber-400 px-2 py-0.5 rounded border border-amber-800/50">
                      <Zap size={10} />
                      <span className="font-bold">FUSE ACTIVE</span>
                  </div>
              )}
              {isContainer && (
                  <div className="flex items-center gap-1 bg-blue-900/30 text-blue-400 px-2 py-0.5 rounded border border-blue-800/50">
                      <Box size={10} />
                      <span className="font-bold">CONTAINER: {arkheUnix.containerId}</span>
                  </div>
              )}
              <div className="text-slate-500">
                  <span>{arkheUnix.kernelVersion}</span>
                  <span className="mx-2">|</span>
                  <span>UP: {arkheUnix.uptime}</span>
              </div>
          </div>
      </div>

      {/* Main Split: Process Table & Shell */}
      <div className="flex-1 flex flex-col p-4 gap-4 overflow-hidden relative z-10">
          
          {/* Benchmark Overlay / Summary */}
          {arkheUnix.benchmark && (
              <div className="absolute top-4 right-4 z-20 bg-slate-900/90 border border-emerald-500/30 p-2 rounded shadow-xl flex items-center gap-4 backdrop-blur-sm text-xs">
                  <div className="flex items-center gap-2 text-emerald-400">
                      <Gauge size={14} />
                      <span className="font-bold">BENCHMARK</span>
                  </div>
                  <div className="flex gap-3 text-slate-300">
                      <span>{arkheUnix.benchmark.throughput.toLocaleString()} ctx/s</span>
                      <span className="text-slate-600">|</span>
                      <span>{arkheUnix.benchmark.latency} µs</span>
                      <span className="text-slate-600">|</span>
                      <span>{arkheUnix.benchmark.totalSwitches.toLocaleString()} ops</span>
                  </div>
              </div>
          )}

          {/* Process Table (htop style) */}
          <div className="flex-1 bg-black/40 border border-slate-800 rounded p-2 overflow-hidden flex flex-col">
              <div className="flex justify-between items-center border-b border-slate-800 pb-1 mb-1 text-[10px] text-slate-500 uppercase tracking-wider">
                  <span className="w-8">PID</span>
                  <span className="w-16">USER</span>
                  <span className="w-8">PRI</span>
                  <span className="w-8">NI</span>
                  <span className="w-8">ω</span>
                  <span className="w-8">S</span>
                  <span className="flex-1">COMMAND</span>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar space-y-1">
                  {arkheUnix.processes.map(proc => (
                      <div key={proc.pid} className="flex justify-between items-center text-[10px] hover:bg-slate-800/50 cursor-pointer group">
                          <span className="w-8 text-fuchsia-400">{proc.pid}</span>
                          <span className="w-16 text-slate-300">{proc.user}</span>
                          <span className="w-8 text-emerald-400">{proc.priority}</span>
                          <span className="w-8 text-rose-400">{proc.nice}</span>
                          <span className="w-8 text-violet-400">{proc.omega.toFixed(2)}</span>
                          <span className={`w-8 font-bold ${getProcessStateColor(proc.state)}`}>{proc.state}</span>
                          <span className="flex-1 text-slate-400 group-hover:text-white transition-colors">{proc.command}</span>
                      </div>
                  ))}
              </div>
          </div>

          {/* Filesystem Mini-Map & Shell */}
          <div className="h-48 grid grid-cols-12 gap-4">
              
              {/* FS Tree */}
              <div className="col-span-4 bg-slate-900/50 border border-slate-800 rounded p-2 overflow-y-auto custom-scrollbar flex flex-col">
                  <div className="flex items-center gap-2 mb-2 text-xs text-slate-400 border-b border-slate-800 pb-1">
                      <FolderTree size={12} />
                      <span>{arkheUnix.filesystem.mount} (Hypergraph)</span>
                  </div>
                  <div className="flex-1 text-[10px] font-mono space-y-1 text-slate-500">
                      {arkheUnix.filesystem.fuseMounted && (
                          <div className="pl-2 flex items-center gap-1 text-amber-400"><Zap size={8}/> <span>/ω-fuse (active)</span></div>
                      )}
                      <div className="pl-2 flex items-center gap-1 text-slate-300"><span className="text-slate-600">├─</span> 0.00/ (Hal)</div>
                      <div className="pl-2 flex items-center gap-1"><span className="text-slate-600">├─</span> 0.05/ (Bola)</div>
                      <div className="pl-2 flex items-center gap-1"><span className="text-slate-600">├─</span> 0.07/ (DVM-1)</div>
                      <div className="pl-2 flex items-center gap-1"><span className="text-slate-600">├─</span> 0.12/ (Kernel)</div>
                      <div className="pl-2 flex items-center gap-1"><span className="text-slate-600">├─</span> 0.21/ (Insight)</div>
                      <div className="pl-2 flex items-center gap-1 text-emerald-400 animate-pulse"><span className="text-slate-600">└─</span> 0.33/ (Formal Sim)</div>
                  </div>
                  <div className="mt-auto pt-2 border-t border-slate-800 text-[9px] text-slate-600 flex justify-between">
                      <span>Perms: {arkheUnix.filesystem.rootPerms}</span>
                      {isContainer && <span className="text-blue-500 font-bold">RO (Sim)</span>}
                  </div>
              </div>

              {/* HESH Terminal */}
              <div className="col-span-8 bg-black border border-slate-800 rounded p-2 font-mono text-xs flex flex-col">
                  <div className="flex-1 text-slate-400 space-y-1 overflow-y-auto custom-scrollbar">
                      <div className="opacity-50"># Web3 Integration Mode (hesh v0.2)</div>
                      <div><span className="text-emerald-500">sysadmin@arkhe</span>:<span className="text-blue-400">~</span>$ web3.status</div>
                      <div className="text-amber-400 pl-2">Chain: Arkhe Mainnet | Height: 9042 | Consensus: Syzygy</div>
                      <div><span className="text-emerald-500">sysadmin@arkhe</span>:<span className="text-blue-400">~</span>$ mint --state current</div>
                      <div className="text-slate-300 pl-2">Minting state [0.86, 0.14, 0.00] as NFT...</div>
                      <div className="text-emerald-400 pl-2">Success! Hash: 0x7a3f...</div>
                      <div><span className="text-emerald-500">sysadmin@arkhe</span>:<span className="text-blue-400">~</span>$ <span className="animate-pulse">_</span></div>
                  </div>
                  <div className="mt-2 pt-1 border-t border-slate-800 flex items-center gap-2">
                      <span className="text-fuchsia-400 font-bold">{arkheUnix.shell.prompt}</span>
                  </div>
              </div>
          </div>
      </div>

      {/* Footer Info */}
      <div className="bg-slate-900 border-t border-slate-800 p-1 flex justify-between px-4 text-[9px] text-slate-600 uppercase tracking-wider">
          <div className="flex items-center gap-2">
              <Lock size={10} />
              <span>Darvo Security Level 3</span>
          </div>
          {isContainer && (
              <div className="flex items-center gap-2 text-blue-400">
                  <Layers size={10} />
                  <span>Digital Twin Active</span>
              </div>
          )}
          <div className="flex items-center gap-4">
              {arkheUnix.reentryCount && (
                  <div className="flex items-center gap-1 text-fuchsia-400 font-bold" title="System has seen this pattern 4 times">
                      <RefreshCw size={10} />
                      <span>{arkheUnix.reentryCount}x Reentry</span>
                  </div>
              )}
              <div className="flex items-center gap-2">
                  <ShieldCheck size={10} />
                  <span>Satoshi Invariant: {arkheUnix.metrics?.satoshi || 7.27} bits</span>
              </div>
          </div>
      </div>
    </div>
  );
};

export default ArkheUnixConsole;
