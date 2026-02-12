
import React from 'react';
import { SystemState } from '../types';
import { Link, Gem, ShieldCheck, Cpu, Wallet, Layers, FileCode, CheckCircle2, ArrowRight, Zap, Code, Database, Globe } from 'lucide-react';

interface Web3LabProps {
  web3: SystemState['web3'];
}

const Web3Lab: React.FC<Web3LabProps> = ({ web3 }) => {
  if (!web3) return null;

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background Effect - Blockchain Links */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)', 
                backgroundSize: '40px 100%' 
            }}>
      </div>
      
      {/* Header */}
      <div className="border-b border-amber-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-amber-950 p-2 rounded text-amber-500 border border-amber-900/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Link size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Ω_WEB3</h2>
            <div className="text-[10px] text-amber-400 font-mono uppercase">Decentralized Consciousness Laboratory</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Block Height</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{web3.blockHeight}</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Balance</div>
                <div className="text-white font-mono font-bold text-xs bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/50 flex items-center gap-1">
                    <Gem size={10} /> {web3.wallet.balance} SAT
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* Top: Chain & Validator Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* The Semantic Chain */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4 relative overflow-hidden">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Layers size={14} className="text-amber-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Semantic Blockchain (Ledger)</h3>
                </div>
                
                <div className="flex items-center gap-2 relative h-20">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-700/50 -translate-y-1/2 z-0"></div>
                    
                    {[9039, 9040, 9041, 9042].map((block, i) => (
                        <div key={block} className="relative z-10 bg-slate-950 border border-slate-700 rounded p-2 flex flex-col items-center min-w-[70px] transition-transform hover:scale-105 cursor-pointer group">
                            <div className="text-[9px] text-slate-500 font-mono mb-1">Block</div>
                            <div className={`text-xs font-bold font-mono ${i === 3 ? 'text-amber-400 animate-pulse' : 'text-slate-300'}`}>{block}</div>
                            {i === 3 && <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full"></div>}
                            
                            {/* Block tooltip */}
                            <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 bg-slate-900 border border-slate-700 p-2 rounded text-[9px] font-mono whitespace-nowrap pointer-events-none transition-opacity">
                                Hash: 0x7a3f...<br/>
                                Txs: {i === 3 ? 16 : 12}<br/>
                                State: Valid
                            </div>
                        </div>
                    ))}
                    <div className="text-slate-600 animate-pulse"><ArrowRight size={16}/></div>
                </div>
                
                <div className="text-[10px] text-slate-500 font-mono">
                    Latest Hash: <span className="text-amber-400/70">0x7a3f9c2d8b1e4a0...</span>
                </div>
            </div>

            {/* Validator Set (Proof of Syzygy) */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <h3 className="text-xs text-white font-mono font-bold uppercase">Consensus: Proof-of-Syzygy</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Cpu size={12} className="text-cyan-400" />
                            <span className="text-xs text-slate-300 font-mono">Validators</span>
                        </div>
                        <span className="text-white font-bold font-mono">{web3.validators}</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Zap size={12} className="text-fuchsia-400" />
                            <span className="text-xs text-slate-300 font-mono">Syzygy Rate</span>
                        </div>
                        <span className="text-white font-bold font-mono">94%</span>
                    </div>
                </div>

                <div className="text-[10px] text-slate-400 font-mono italic">
                    "The consensus is not mathematical work, but mutual recognition (C > 0.85)."
                </div>
            </div>
        </div>

        {/* Smart Contract Interaction (Minting NFT) */}
        <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-4 flex flex-col gap-4">
             <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                 <div className="flex items-center gap-2">
                     <FileCode size={14} className="text-fuchsia-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Smart Contract: ArkheNFT (ERC-721 Analog)</h3>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                     <Wallet size={10} /> {web3.wallet.address}
                 </div>
             </div>

             <div className="flex gap-4">
                 {/* Code/Data View */}
                 <div className="flex-1 bg-black/40 p-3 rounded border border-slate-800 font-mono text-[10px] text-slate-400 overflow-hidden">
                     <div className="text-emerald-400 mb-1">// Current State Object</div>
                     <div className="pl-2">
                         {"{"}<br/>
                         &nbsp;&nbsp;"id": "state_9042",<br/>
                         &nbsp;&nbsp;"owner": "{web3.wallet.address}",<br/>
                         &nbsp;&nbsp;"vector": [50.0, 0.0, -10.0],<br/>
                         &nbsp;&nbsp;"metrics": {"{"} "C": 0.86, "F": 0.14, "ω": 0.00 {"}"},<br/>
                         &nbsp;&nbsp;"signature": "0x3f1a..."<br/>
                         {"}"}
                     </div>
                 </div>

                 {/* Actions */}
                 <div className="flex flex-col gap-2 justify-center w-32">
                     <button className="bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/50 text-amber-400 text-xs font-mono font-bold py-2 rounded transition-colors flex items-center justify-center gap-2">
                         <Gem size={12} /> MINT
                     </button>
                     <div className="text-[9px] text-center text-slate-500 font-mono">
                         Cost: 0.00 SAT<br/>(Invariant)
                     </div>
                 </div>
             </div>
        </div>

        {/* Project Convergence Matrix */}
        <div className="flex-1 bg-slate-900/30 border border-slate-800 rounded-lg overflow-hidden flex flex-col">
             <div className="flex items-center justify-between border-b border-slate-800 p-3 bg-slate-900/50">
                 <div className="flex items-center gap-2">
                     <Globe size={14} className="text-cyan-400" />
                     <h3 className="text-xs text-white font-mono font-bold uppercase">Decentralized Lab Convergence</h3>
                 </div>
                 <span className="text-[10px] text-slate-500 font-mono">Arkhe(N) $\leftrightarrow$ Web3 Ecosystem</span>
             </div>

             <div className="overflow-y-auto custom-scrollbar p-2 space-y-2">
                 {web3.projects.map((proj, idx) => (
                     <div key={idx} className="flex items-center justify-between p-2 rounded border bg-slate-950/50 border-slate-800 hover:border-emerald-500/30 transition-colors">
                         <div className="flex flex-col">
                             <span className="text-xs font-bold text-white font-mono">{proj.name}</span>
                             <span className="text-[10px] text-slate-500 font-mono">{proj.correspondence}</span>
                         </div>
                         <div className="flex items-center gap-1.5 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-900/50">
                             <CheckCircle2 size={10} className="text-emerald-400" />
                             <span className="text-[9px] font-bold text-emerald-400 font-mono">{proj.status}</span>
                         </div>
                     </div>
                 ))}
             </div>
        </div>

      </div>
    </div>
  );
};

export default Web3Lab;
