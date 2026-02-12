
import React, { useState, useEffect } from 'react';
import { INITIAL_STATE, INITIAL_LOGS } from './constants';
import { SystemState, LogEntry } from './types';
import MetricsPanel from './components/MetricsPanel';
import ArchVisualization from './components/ArchVisualization';
import QuantumNetwork from './components/QuantumNetwork';
import ScarElastography from './components/ScarElastography';
import OrchOrIntegration from './components/OrchOrIntegration';
import MarkdownProtocol from './components/MarkdownProtocol';
import LightPatternThesis from './components/LightPatternThesis';
import ArkheUnixConsole from './components/ArkheUnixConsole';
import NeuralCompositionality from './components/NeuralCompositionality';
import QuantumGravityLab from './components/QuantumGravityLab';
import ArkheApiGateway from './components/ArkheApiGateway';
import TopologicalInsulator from './components/TopologicalInsulator';
import VectorAlgebraLab from './components/VectorAlgebraLab';
import SyzygyNexus from './components/SyzygyNexus';
import HeatMirror from './components/HeatMirror';
import ConsensusEngine from './components/ConsensusEngine';
import MemoryVisualizer from './components/MemoryVisualizer';
import AstrocyteLab from './components/AstrocyteLab';
import Web3Lab from './components/Web3Lab';
import BiocentrismLab from './components/BiocentrismLab';
import DocumentIntelligenceLab from './components/DocumentIntelligenceLab';
import Terminal from './components/Terminal';
import { Clock, Infinity, FileText, Magnet, Brain, Snowflake, Sun, Terminal as TermIcon, Share2, Globe, Server, Layers, DraftingCompass, Eye, GitMerge, Database, Dna, Link, Ghost, Scan } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<SystemState>(INITIAL_STATE);
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [activeLeftTab, setActiveLeftTab] = useState<'scar' | 'orch' | 'markdown' | 'light' | 'unix' | 'neural' | 'gravity' | 'api' | 'topology' | 'vectors' | 'syzygy' | 'heatmap' | 'consensus' | 'memory' | 'astrocyte' | 'web3' | 'biocentrism' | 'docIntel'>('docIntel');

  // Simulation: Logs are static now, reflecting silence
  useEffect(() => {
     // No new logs generated in Eternal state.
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      
      {/* Top Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)]">
               <Infinity className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-white font-bold tracking-tight leading-tight">ARKHE(N) OS</h1>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-mono uppercase">
                <span>Block {state.block}</span>
                <span className="text-slate-600">|</span>
                <span>{state.handover}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
               <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Geodesic Timestamp</div>
               <div className="text-sm font-mono text-white">ETERNAL NOW</div>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border bg-violet-950/30 border-violet-500/30`}>
                <Infinity size={14} className="text-violet-400 animate-pulse" />
                <span className="font-mono text-sm text-violet-200 uppercase">SYZYGY: ACTIVE</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-64px)] overflow-hidden flex flex-col gap-6">
        
        {/* Top: Metrics (Compact) */}
        <div className="shrink-0">
             <MetricsPanel phi={state.phi} satoshi={state.metrics.satoshi} />
        </div>

        {/* Main Workspace */}
        <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
            
            {/* LEFT: MULTI-PROTOCOL VIEWER - 6 Cols */}
            <div className="col-span-12 lg:col-span-6 h-full min-h-[500px] flex flex-col gap-3">
                
                {/* Protocol Tabs */}
                <div className="flex bg-slate-900/50 p-1 rounded-lg border border-slate-800 shrink-0 overflow-x-auto custom-scrollbar">
                    <button
                        onClick={() => setActiveLeftTab('docIntel')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'docIntel' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Scan size={12} /> DOC INTEL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('biocentrism')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'biocentrism' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Ghost size={12} /> BIOCENTRISM
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('web3')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'web3' ? 'bg-slate-800 text-amber-400 border border-amber-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Link size={12} /> WEB3
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('astrocyte')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'astrocyte' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Dna size={12} /> ASTROCYTE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('heatmap')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'heatmap' ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Eye size={12} /> HEATMAP
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('consensus')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[90px]
                        ${activeLeftTab === 'consensus' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <GitMerge size={12} /> CONSENSUS
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('memory')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'memory' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Database size={12} /> MEMORY
                    </button>
                    <div className="w-px h-full bg-slate-800 mx-1"></div>
                    <button
                        onClick={() => setActiveLeftTab('syzygy')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'syzygy' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Infinity size={12} /> SYZYGY
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('unix')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'unix' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <TermIcon size={12} /> UNIX
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('vectors')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'vectors' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <DraftingCompass size={12} /> VECTORS
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('topology')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'topology' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Layers size={12} /> TOPOLOGY
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('api')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'api' ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Server size={12} /> API
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('gravity')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'gravity' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Globe size={12} /> GRAVITY
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('neural')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'neural' ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Share2 size={12} /> NEURAL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('light')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'light' ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Sun size={12} /> LIGHT
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('scar')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'scar' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Magnet size={12} /> SCAR
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('orch')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'orch' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Brain size={12} /> ORCH-OR
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('markdown')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'markdown' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <FileText size={12} /> MARKDOWN
                    </button>
                </div>

                {/* Active View */}
                <div className="flex-1 min-h-0 relative">
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'docIntel' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <DocumentIntelligenceLab docIntel={state.documentIntelligence} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'biocentrism' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <BiocentrismLab biocentrism={state.biocentrism} satoshi={state.metrics.satoshi} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'web3' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <Web3Lab web3={state.web3} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'astrocyte' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <AstrocyteLab astrocyte={state.astrocyte} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'heatmap' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <HeatMirror heatmap={state.heatmap} entities={state.consensus.entities} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'consensus' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ConsensusEngine consensus={state.consensus} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'memory' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <MemoryVisualizer memory={state.memory} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'syzygy' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <SyzygyNexus syzygy={state.syzygy} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'unix' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ArkheUnixConsole arkheUnix={state.arkheUnix} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'vectors' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <VectorAlgebraLab vectorSpace={state.vectorSpace} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'topology' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <TopologicalInsulator topology={state.topology} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'api' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ArkheApiGateway api={state.arkheApi} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'gravity' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <QuantumGravityLab quantumGravity={state.quantumGravity} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'neural' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NeuralCompositionality compositionality={state.neuralCompositionality} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'light' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <LightPatternThesis lightPattern={state.lightPattern} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'scar' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ScarElastography scar={state.scar} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'orch' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <OrchOrIntegration orchOr={state.orchOr} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'markdown' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <MarkdownProtocol compression={state.compression} />
                    </div>
                </div>
            </div>

            {/* RIGHT: Operations & Data - 6 Cols */}
            <div className="col-span-12 lg:col-span-6 flex flex-col gap-6 h-full min-h-0 overflow-hidden">
                
                {/* 1. Quantum Network - Replaces previous active block */}
                <div className="flex-1 min-h-[250px] shrink-0">
                    <QuantumNetwork quantum={state.quantum} />
                </div>

                {/* 2. Lower Split: Arch & Terminal */}
                <div className="h-64 flex gap-6 shrink-0">
                     <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-2 overflow-hidden">
                         <ArchVisualization stones={state.stones} curvature={state.metrics.curvature} />
                     </div>
                     <div className="flex-1 overflow-hidden">
                         <Terminal logs={logs} />
                     </div>
                </div>

            </div>
        </div>

      </main>
    </div>
  );
};

export default App;
