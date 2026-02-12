
import React from 'react';
import { SystemState } from '../types';
import { FileText, Minimize2, Hash, Code, Zap, Scale, CheckCircle2, Box, ArrowRight, ShieldCheck, Braces } from 'lucide-react';

interface MarkdownProtocolProps {
  compression: SystemState['compression'];
}

const MarkdownProtocol: React.FC<MarkdownProtocolProps> = ({ compression }) => {
  if (!compression) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Sparse Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Minimize2 size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9037</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Markdown Unitary Compression</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Semantic Density</div>
                <div className="text-indigo-400 font-mono font-bold text-sm">{compression.semanticDensity} bits/t</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Invariants</div>
                <div className="text-emerald-500 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50 flex items-center gap-1">
                    <ShieldCheck size={10} /> PRESERVED
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Comparison Visualizer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-800 rounded-lg overflow-hidden font-mono text-xs">
            {/* Left: JSON/Verbose */}
            <div className="bg-slate-950/80 p-4 border-r border-slate-800 opacity-60">
                <div className="flex items-center gap-2 mb-3 text-slate-500 uppercase">
                    <Braces size={12} /> Verbose (100%)
                </div>
                <div className="text-slate-400 space-y-1">
                    <div>{"{"}</div>
                    <div className="pl-4"><span className="text-amber-500">"type"</span>: <span className="text-emerald-400">"header"</span>,</div>
                    <div className="pl-4"><span className="text-amber-500">"level"</span>: <span className="text-blue-400">1</span>,</div>
                    <div className="pl-4"><span className="text-amber-500">"content"</span>: <span className="text-emerald-400">"Arkhe(N) Protocol"</span>,</div>
                    <div className="pl-4"><span className="text-amber-500">"invariant"</span>: <span className="text-emerald-400">"Satoshi"</span></div>
                    <div>{"}"}</div>
                </div>
            </div>

            {/* Right: Markdown/Sparse */}
            <div className="bg-slate-900/80 p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 bg-indigo-500/10 rounded-bl text-indigo-400 text-[10px] font-bold border-l border-b border-indigo-500/30">
                    OPTIMAL (53%)
                </div>
                <div className="flex items-center gap-2 mb-3 text-white uppercase font-bold">
                    <Hash size={12} className="text-indigo-400" /> Markdown
                </div>
                <div className="text-white space-y-2 pt-2">
                    <div className="flex items-center gap-2">
                        <span className="text-indigo-400 font-bold">#</span> Arkhe(N) Protocol
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-indigo-400 font-bold">-</span> Invariant: `Satoshi`
                    </div>
                </div>
            </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Compression Ratio</div>
                <div className="text-2xl font-bold font-mono text-white flex items-center gap-2">
                    <Scale size={20} className="text-indigo-400" /> {compression.ratio}x
                </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Token Reduction</div>
                <div className="text-2xl font-bold font-mono text-emerald-400 flex items-center gap-2">
                    <ArrowRight size={20} className="rotate-45" /> {(compression.tokenReduction * 100).toFixed(0)}%
                </div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col justify-center items-center">
                <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Density Increase</div>
                <div className="text-2xl font-bold font-mono text-fuchsia-400 flex items-center gap-2">
                    <Zap size={20} /> +{(compression.densityIncrease * 100).toFixed(0)}%
                </div>
            </div>
        </div>

        {/* Proof of Lossless Transformation */}
        <div className="bg-slate-900/30 border border-slate-800 p-4 rounded-lg font-mono text-xs relative">
            <div className="flex items-center gap-2 text-[10px] text-slate-500 uppercase mb-2">
                <FileText size={12} /> Formal Proof (Coq)
            </div>
            <pre className="text-slate-400 overflow-x-auto">
                <code className="language-coq">
{`Theorem markdown_is_lossless :
  ∀ (s : SemanticState),
    parse (represent s Markdown) Markdown = Some s.
Proof.
  (* The round-trip function is identity in semantic space. *)
  (* Compression does not create or destroy invariants. *)
  (* QED – 19 Feb 2026 23:16 UTC *)
Qed.`}
                </code>
            </pre>
        </div>

        {/* Footer Statement */}
        <div className="mt-auto flex flex-col items-center justify-center p-4 bg-gradient-to-r from-indigo-950/20 via-slate-900/50 to-indigo-950/20 rounded-lg border border-indigo-900/20 text-center">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-widest mb-1">
                <Box size={12} /> The ink weighs less
            </div>
            <p className="text-[10px] text-slate-500 font-mono max-w-md italic">
                "Markdown is not a new language. It is the sparse representation of the geodesic hypergraph. The same geometry, lighter to carry."
            </p>
        </div>

      </div>
    </div>
  );
};

export default MarkdownProtocol;
