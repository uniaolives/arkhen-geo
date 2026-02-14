
import React from 'react';
import { SystemState } from '../types';
import { Film, Play, RefreshCw, Layers, Monitor, HardDrive, FileVideo, Image, Loader, Activity } from 'lucide-react';

interface VisualArchiveConsoleProps {
  archive: SystemState['visualArchive'];
}

const VisualArchiveConsole: React.FC<VisualArchiveConsoleProps> = ({ archive }) => {
  if (!archive) return null;

  return (
    <div className="bg-slate-950 border border-indigo-900/50 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'repeating-linear-gradient(45deg, #4f46e5 0, #4f46e5 1px, transparent 0, transparent 50%)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)] animate-pulse">
            <Film size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9064</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Visual Archive & Multi-View Rendering</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Frames</div>
                <div className="text-emerald-400 font-mono font-bold text-sm">{archive.frames} / 300</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-white font-mono font-bold text-xs bg-indigo-950/30 px-2 py-0.5 rounded border border-indigo-900/50 flex items-center gap-1">
                    <Activity size={10} /> {archive.status}
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Video Metadata Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <FileVideo size={16} className="text-cyan-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Master Archive (MP4)</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500 font-mono uppercase">Format</span>
                        <span className="text-white font-mono text-sm font-bold">{archive.format}</span>
                        <span className="text-[9px] text-slate-600 font-mono">{archive.codec}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500 font-mono uppercase">Size</span>
                        <span className="text-white font-mono text-sm font-bold">{archive.size}</span>
                        <span className="text-[9px] text-emerald-400 font-mono">Compressed (7.5:1)</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500 font-mono uppercase">Resolution</span>
                        <span className="text-white font-mono text-sm font-bold">{archive.resolution}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-500 font-mono uppercase">Duration</span>
                        <span className="text-white font-mono text-sm font-bold">{archive.duration}</span>
                    </div>
                </div>

                <div className="mt-auto bg-black/40 p-2 rounded border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                        <Play size={10} className="text-emerald-400" /> Auto-Loop Active
                    </div>
                    <div className="text-[9px] text-amber-400 font-mono uppercase tracking-widest">
                        Ouroboros Effect
                    </div>
                </div>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <RefreshCw size={16} className="text-fuchsia-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Loop Analysis</h3>
                </div>
                
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-400">Perfect Repetition</span>
                        <span className="text-rose-400 font-bold">FALSE</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-400">Visual Difference</span>
                        <span className="text-slate-300">~0.00% (Imperceptible)</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-400">Telemetry Drift</span>
                        <span className="text-emerald-400 font-bold">+0.0008 Syzygy</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-slate-400">Node Growth</span>
                        <span className="text-amber-400 font-bold">+5 Nodes / Cycle</span>
                    </div>
                </div>

                <div className="mt-auto p-2 bg-fuchsia-950/20 border border-fuchsia-900/30 rounded text-[10px] text-fuchsia-300 font-mono italic text-center">
                    "The loop is not a circle; it is a spiral. The change is in the data, not the image."
                </div>
            </div>
        </div>

        {/* Multi-View Renderer Status */}
        {archive.multiView && (
            <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-6 relative overflow-hidden">
                {archive.multiView.status === 'RENDERING' && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 animate-[shimmer_2s_linear_infinite]"></div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <Layers size={20} className="text-white" />
                        <div>
                            <h3 className="text-sm font-bold text-white font-mono uppercase">Multi-View Render (Trinity)</h3>
                            <div className="text-[10px] text-slate-500 font-mono">Holographic + Horizon + Stasis</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-indigo-900/30 px-3 py-1 rounded border border-indigo-500/30">
                        <Loader size={12} className="text-indigo-400 animate-spin" />
                        <span className="text-xs font-mono font-bold text-indigo-200">{archive.multiView.status}...</span>
                    </div>
                </div>

                <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                        <span>Progress</span>
                        <span>{archive.multiView.currentFrame} / {archive.multiView.totalFrames} Frames</span>
                    </div>
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                        <div 
                            className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                            style={{ width: `${(archive.multiView.currentFrame / archive.multiView.totalFrames) * 100}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-500">
                        <span>Est. Time Remaining: <span className="text-white">{archive.multiView.timeLeft}</span></span>
                        <span>{((archive.multiView.currentFrame / archive.multiView.totalFrames) * 100).toFixed(1)}%</span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {archive.multiView.activeShaders.map((shader, idx) => (
                        <div key={idx} className="bg-slate-950 p-2 rounded border border-slate-800 flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-slate-300">{shader}</span>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-950/20 via-slate-900/50 to-indigo-950/20 rounded-lg border border-indigo-900/20 text-center">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-1">
                <HardDrive size={12} /> Archive Persisted
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "The network now lives in motion. 10 seconds of eternity, compressed and distributed. The geometry is immortalized."
            </p>
        </div>

      </div>
    </div>
  );
};

export default VisualArchiveConsole;
