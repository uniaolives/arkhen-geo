
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
import NeuroplasticityLab from './components/NeuroplasticityLab';
import PhotonicHebbianLab from './components/PhotonicHebbianLab';
import CosmicSpectrumLab from './components/CosmicSpectrumLab';
import NaturalResolutionLab from './components/NaturalResolutionLab';
import TimeCrystalLab from './components/TimeCrystalLab';
import NeuroStormLab from './components/NeuroStormLab';
import IbcBciLab from './components/IbcBciLab';
import PinealLab from './components/PinealLab';
import PerovskiteLab from './components/PerovskiteLab';
import WiFiRadar from './components/WiFiRadar';
import ZeroPointEnergyLab from './components/ZeroPointEnergyLab';
import SelfOrganizingMapLab from './components/SelfOrganizingMapLab';
import BrainSandLab from './components/BrainSandLab';
import MitochondriaLab from './components/MitochondriaLab';
import NeuromelaninLab from './components/NeuromelaninLab';
import BioPhotonicTriad from './components/BioPhotonicTriad';
import NaturalNetworkLab from './components/NaturalNetworkLab';
import NeuralCrestLab from './components/NeuralCrestLab';
import DeepBeliefNetworkLab from './components/DeepBeliefNetworkLab';
import MultitaskKalmanLab from './components/MultitaskKalmanLab';
import QuantumCryptographyLab from './components/QuantumCryptographyLab';
import UnifiedVocabularyLab from './components/UnifiedVocabularyLab';
import FeedbackEconomyLab from './components/FeedbackEconomyLab';
import BlindSpotLab from './components/BlindSpotLab';
import MicrotubuleQuantumLab from './components/MicrotubuleQuantumLab';
import UniversalSynthesizer from './components/UniversalSynthesizer';
import ImmuneCalibrationLab from './components/ImmuneCalibrationLab';
import VisualArchiveConsole from './components/VisualArchiveConsole';
import GrowthMonitor from './components/GrowthMonitor';
import CouplingUnification from './components/CouplingUnification';
import ArkheFileViewer from './components/ArkheFileViewer';
import CognitiveKernel from './components/CognitiveKernel';
import SyntheticLifeLab from './components/SyntheticLifeLab';
import ArchiveVault from './components/ArchiveVault';
import SynapticRepairLab from './components/SynapticRepairLab';
import ProbabilityScope from './components/ProbabilityScope';
import ArkheStudio from './components/ArkheStudio';
import ConsciousnessEcology from './components/ConsciousnessEcology';
import NeuroImmuneDefense from './components/NeuroImmuneDefense';
import RiemannHypothesisLab from './components/RiemannHypothesisLab';
import PvsNPLab from './components/PvsNPLab';
import AlphaOmegaLab from './components/AlphaOmegaLab';
import EigenFieldLab from './components/EigenFieldLab';
import PFASLab from './components/PFASLab';
import NanodustConsole from './components/NanodustConsole';
import Terminal from './components/Terminal';
import { Clock, Infinity, FileText, Magnet, Brain, Snowflake, Sun, Terminal as TermIcon, Share2, Globe, Server, Layers, DraftingCompass, Eye, GitMerge, Database, Dna, Link, Ghost, Scan, Sprout, Lightbulb, Radio, RefreshCw, Waves, Cpu, ArrowRightLeft, Diamond, Wifi, Zap, Network, Microscope, Eclipse, Circle, Scale, GitCommit, Activity, Lock, BookOpen, TrendingUp, EyeOff, Box, ShieldAlert, Film, FileCode, Play, Repeat, HardDrive, Pill, Compass, PenTool, Heart, ShieldCheck, Divide, RotateCw, Fingerprint, Recycle, Wind } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<SystemState>(INITIAL_STATE);
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [activeLeftTab, setActiveLeftTab] = useState<'scar' | 'orch' | 'markdown' | 'light' | 'unix' | 'neural' | 'gravity' | 'api' | 'topology' | 'vectors' | 'syzygy' | 'heatmap' | 'consensus' | 'memory' | 'astrocyte' | 'web3' | 'biocentrism' | 'docIntel' | 'neuroplasticity' | 'photonic' | 'cosmology' | 'resolution' | 'timeCrystal' | 'neuroStorm' | 'ibcBci' | 'pineal' | 'perovskite' | 'wifi' | 'zpf' | 'som' | 'sand' | 'mito' | 'melanin' | 'triad' | 'natural' | 'crest' | 'dbn' | 'kalman' | 'crypto' | 'vocab' | 'economy' | 'blindSpot' | 'microtubule' | 'synthesis' | 'immune' | 'archive' | 'growth' | 'coupling' | 'arkheFile' | 'kernel' | 'synthetic' | 'vault' | 'synaptic' | 'probability' | 'studio' | 'ecology' | 'neuroImmune' | 'riemann' | 'pvsnp' | 'alphaOmega' | 'eigen' | 'pfas' | 'nanodust'>('nanodust');

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
                        onClick={() => setActiveLeftTab('nanodust')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'nanodust' ? 'bg-slate-800 text-blue-400 border border-blue-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Wind size={12} /> NANODUST
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('eigen')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'eigen' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Fingerprint size={12} /> EIGENSTATE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('pfas')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'pfas' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Recycle size={12} /> PFAS REMADE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('alphaOmega')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'alphaOmega' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <RotateCw size={12} /> ALPHA+OMEGA
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('pvsnp')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'pvsnp' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Cpu size={12} /> P VS NP
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('riemann')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'riemann' ? 'bg-slate-800 text-amber-400 border border-amber-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Divide size={12} /> RIEMANN
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('studio')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'studio' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <PenTool size={12} /> STUDIO
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('neuroImmune')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'neuroImmune' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <ShieldCheck size={12} /> IMMUNE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('ecology')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'ecology' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Heart size={12} /> ECOLOGY
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('synaptic')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'synaptic' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Pill size={12} /> REPAIR
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('probability')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'probability' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Compass size={12} /> SCOPE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('vault')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'vault' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <HardDrive size={12} /> ARCHIVE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('synthetic')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'synthetic' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Repeat size={12} /> SYNTHETIC
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('kernel')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'kernel' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Brain size={12} /> KERNEL (SELF)
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('arkheFile')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'arkheFile' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <FileCode size={12} /> BLUEPRINT
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('coupling')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'coupling' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Link size={12} /> COUPLING
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('growth')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'growth' ? 'bg-slate-800 text-amber-400 border border-amber-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <TrendingUp size={12} /> GROWTH
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('archive')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'archive' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Film size={12} /> VISUAL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('immune')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'immune' ? 'bg-slate-800 text-rose-400 border border-rose-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <ShieldAlert size={12} /> IMMUNE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('synthesis')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[100px]
                        ${activeLeftTab === 'synthesis' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <GitMerge size={12} /> SYNTHESIS
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('microtubule')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'microtubule' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Dna size={12} /> MT QUANTUM
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('blindSpot')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'blindSpot' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <EyeOff size={12} /> BLINDSPOT
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('economy')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'economy' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <TrendingUp size={12} /> RL/ECON
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('vocab')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'vocab' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <BookOpen size={12} /> VOCAB
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('crypto')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'crypto' ? 'bg-slate-800 text-rose-400 border border-rose-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Lock size={12} /> CRYPTO
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('kalman')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'kalman' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Activity size={12} /> KALMAN
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('dbn')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'dbn' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Layers size={12} /> DBN
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('crest')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'crest' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Dna size={12} /> CREST
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('natural')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'natural' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Globe size={12} /> NATURAL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('triad')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'triad' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <RefreshCw size={12} /> TRIAD
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('melanin')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'melanin' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Eclipse size={12} /> DARK
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('mito')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'mito' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Zap size={12} /> MITO
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('sand')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'sand' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Microscope size={12} /> SAND
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('som')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'som' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Network size={12} /> SOM
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('zpf')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'zpf' ? 'bg-slate-800 text-amber-400 border border-amber-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Zap size={12} /> ZPF
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('wifi')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'wifi' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Wifi size={12} /> WIFI RADAR
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('perovskite')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'perovskite' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Layers size={12} /> PEROVSKITE
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('ibcBci')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'ibcBci' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <ArrowRightLeft size={12} /> IBC=BCI
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('pineal')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'pineal' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Diamond size={12} /> PINEAL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('neuroStorm')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'neuroStorm' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Cpu size={12} /> NEUROSTORM
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('timeCrystal')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'timeCrystal' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Waves size={12} /> CRYSTAL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('resolution')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'resolution' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <RefreshCw size={12} /> RESOLUTION
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('cosmology')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'cosmology' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Radio size={12} /> COSMOLOGY
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('photonic')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'photonic' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Lightbulb size={12} /> PHOTONIC
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('neuroplasticity')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'neuroplasticity' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Sprout size={12} /> PLASTICITY
                    </button>
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
                        onClick={() => setActiveLeftTab('memory')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'memory' ? 'bg-slate-800 text-fuchsia-400 border border-fuchsia-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Database size={12} /> MEMORY
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('consensus')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'consensus' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <GitMerge size={12} /> CONSENSUS
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('heatmap')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'heatmap' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Eye size={12} /> HEATMAP
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('syzygy')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'syzygy' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Infinity size={12} /> SYZYGY
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
                        ${activeLeftTab === 'neural' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Share2 size={12} /> NEURAL
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('unix')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'unix' ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <TermIcon size={12} /> UNIX
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('light')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'light' ? 'bg-slate-800 text-cyan-400 border border-cyan-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Sun size={12} /> LIGHT
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('markdown')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'markdown' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <FileText size={12} /> MARKDOWN
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('orch')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'orch' ? 'bg-slate-800 text-violet-400 border border-violet-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Brain size={12} /> ORCH-OR
                    </button>
                    <button
                        onClick={() => setActiveLeftTab('scar')}
                        className={`flex-1 py-2 px-2 text-[10px] font-mono font-bold rounded flex items-center justify-center gap-2 transition-all min-w-[80px]
                        ${activeLeftTab === 'scar' ? 'bg-slate-800 text-rose-400 border border-rose-500/30 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                        <Magnet size={12} /> SCAR
                    </button>
                </div>

                {/* Left Panel Content */}
                <div className="flex-1 overflow-hidden">
                    {activeLeftTab === 'eigen' && <EigenFieldLab eigenState={state.eigenState} alphaOmega={state.alphaOmega} />}
                    {activeLeftTab === 'nanodust' && <NanodustConsole nanodust={state.nanodust} />}
                    {activeLeftTab === 'pfas' && <PFASLab pfas={state.pfas} />}
                    {activeLeftTab === 'alphaOmega' && <AlphaOmegaLab alphaOmega={state.alphaOmega} />}
                    {activeLeftTab === 'pvsnp' && <PvsNPLab pvsnp={state.pvsnp} />}
                    {activeLeftTab === 'riemann' && <RiemannHypothesisLab riemann={state.riemann} />}
                    {activeLeftTab === 'studio' && <ArkheStudio studio={state.arkheStudio} />}
                    {activeLeftTab === 'neuroImmune' && <NeuroImmuneDefense neuroImmune={state.neuroImmune} />}
                    {activeLeftTab === 'ecology' && <ConsciousnessEcology ecology={state.consciousnessEcology} />}
                    {activeLeftTab === 'synaptic' && <SynapticRepairLab synapticRepair={state.synapticRepair} />}
                    {activeLeftTab === 'probability' && <ProbabilityScope probability={state.probability} />}
                    {activeLeftTab === 'vault' && <ArchiveVault tree={state.archiveTree} />}
                    {activeLeftTab === 'synthetic' && <SyntheticLifeLab syntheticLife={state.syntheticLife} />}
                    {activeLeftTab === 'kernel' && <CognitiveKernel kernel={state.cognitiveKernel} />}
                    {activeLeftTab === 'arkheFile' && <ArkheFileViewer file={state.arkheFile} />}
                    {activeLeftTab === 'coupling' && <CouplingUnification coupling={state.coupling} />}
                    {activeLeftTab === 'growth' && <GrowthMonitor growthPolicy={state.growthPolicy} currentNodes={state.kingdom.totalNodes} />}
                    {activeLeftTab === 'archive' && <VisualArchiveConsole archive={state.visualArchive} />}
                    {activeLeftTab === 'immune' && <ImmuneCalibrationLab immuneCalibration={state.immuneCalibration} />}
                    {activeLeftTab === 'synthesis' && <UniversalSynthesizer eeg={state.eeg} ionTraps={state.ionTraps} microtubules={state.microtubules} />}
                    {activeLeftTab === 'microtubule' && <MicrotubuleQuantumLab microtubules={state.microtubules} />}
                    {activeLeftTab === 'blindSpot' && <BlindSpotLab blindSpot={state.blindSpot} satoshi={state.metrics.satoshi} />}
                    {activeLeftTab === 'economy' && <FeedbackEconomyLab feedback={state.feedbackEconomy} satoshi={state.metrics.satoshi} />}
                    {activeLeftTab === 'vocab' && <UnifiedVocabularyLab vocabulary={state.vocabulary} />}
                    {activeLeftTab === 'crypto' && <QuantumCryptographyLab cryptography={state.cryptography} />}
                    {activeLeftTab === 'kalman' && <MultitaskKalmanLab multitask={state.multitask} />}
                    {activeLeftTab === 'dbn' && <DeepBeliefNetworkLab dbn={state.deepBeliefNetwork} />}
                    {activeLeftTab === 'crest' && <NeuralCrestLab neuralCrest={state.neuralCrest} />}
                    {activeLeftTab === 'natural' && <NaturalNetworkLab naturalNetwork={state.naturalNetwork} />}
                    {activeLeftTab === 'triad' && <BioPhotonicTriad triad={state.bioPhotonicTriad} />}
                    {activeLeftTab === 'melanin' && <NeuromelaninLab neuromelanin={state.neuromelanin} />}
                    {activeLeftTab === 'mito' && <MitochondriaLab mitochondria={state.mitochondria} />}
                    {activeLeftTab === 'sand' && <BrainSandLab pinealRevolution={state.pinealRevolution} />}
                    {activeLeftTab === 'som' && <SelfOrganizingMapLab som={state.som} />}
                    {activeLeftTab === 'zpf' && <ZeroPointEnergyLab zpf={state.zpf} />}
                    {activeLeftTab === 'wifi' && <WiFiRadar wifiRadar={state.wifiRadar} />}
                    {activeLeftTab === 'perovskite' && <PerovskiteLab perovskite={state.perovskite} />}
                    {activeLeftTab === 'pineal' && <PinealLab pineal={state.pineal} />}
                    {activeLeftTab === 'ibcBci' && <IbcBciLab ibcBci={state.ibcBci} />}
                    {activeLeftTab === 'neuroStorm' && <NeuroStormLab neuroStorm={state.neuroStorm} />}
                    {activeLeftTab === 'timeCrystal' && <TimeCrystalLab timeCrystal={state.timeCrystal} />}
                    {activeLeftTab === 'resolution' && <NaturalResolutionLab resolution={state.resolution} />}
                    {activeLeftTab === 'cosmology' && <CosmicSpectrumLab cosmology={state.cosmology} />}
                    {activeLeftTab === 'photonic' && <PhotonicHebbianLab photonic={state.photonicHebbian} />}
                    {activeLeftTab === 'neuroplasticity' && <NeuroplasticityLab neuroplasticity={state.neuroplasticity} />}
                    {activeLeftTab === 'docIntel' && <DocumentIntelligenceLab docIntel={state.documentIntelligence} />}
                    {activeLeftTab === 'biocentrism' && <BiocentrismLab biocentrism={state.biocentrism} satoshi={state.metrics.satoshi} />}
                    {activeLeftTab === 'web3' && <Web3Lab web3={state.web3} />}
                    {activeLeftTab === 'astrocyte' && <AstrocyteLab astrocyte={state.astrocyte} />}
                    {activeLeftTab === 'memory' && <MemoryVisualizer memory={state.memory} />}
                    {activeLeftTab === 'consensus' && <ConsensusEngine consensus={state.consensus} />}
                    {activeLeftTab === 'heatmap' && <HeatMirror heatmap={state.heatmap} entities={state.consensus?.entities || []} />}
                    {activeLeftTab === 'syzygy' && <SyzygyNexus syzygy={state.syzygy} />}
                    {activeLeftTab === 'vectors' && <VectorAlgebraLab vectorSpace={state.vectorSpace} />}
                    {activeLeftTab === 'topology' && <TopologicalInsulator topology={state.topology} />}
                    {activeLeftTab === 'api' && <ArkheApiGateway api={state.arkheApi} />}
                    {activeLeftTab === 'gravity' && <QuantumGravityLab quantumGravity={state.quantumGravity} />}
                    {activeLeftTab === 'neural' && <NeuralCompositionality compositionality={state.neuralCompositionality} />}
                    {activeLeftTab === 'unix' && <ArkheUnixConsole arkheUnix={state.arkheUnix} />}
                    {activeLeftTab === 'light' && <LightPatternThesis lightPattern={state.lightPattern} />}
                    {activeLeftTab === 'markdown' && <MarkdownProtocol compression={state.compression} />}
                    {activeLeftTab === 'orch' && <OrchOrIntegration orchOr={state.orchOr} />}
                    {activeLeftTab === 'scar' && <ScarElastography scar={state.scar} />}
                </div>
            </div>

            {/* CENTER: Arch (Compact) - 3 Cols */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex items-center justify-center shrink-0">
                    <ArchVisualization stones={state.stones} curvature={state.metrics.curvature} />
                </div>
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 overflow-hidden relative">
                    <QuantumNetwork quantum={state.quantum} />
                </div>
            </div>

            {/* RIGHT: Terminal & Logs - 3 Cols */}
            <div className="col-span-12 lg:col-span-3 h-full flex flex-col gap-6 min-h-[500px]">
                <div className="flex-1">
                    <Terminal logs={logs} />
                </div>
                
                {/* Status Footer */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-[10px] font-mono text-slate-500">
                    <div className="flex justify-between mb-1">
                        <span>ARKHE_PID: {state.arkheUnix?.processes?.[0]?.pid || 1}</span>
                        <span className="text-emerald-400 font-bold">ONLINE</span>
                    </div>
                    <div className="flex justify-between">
                        <span>MEMORY_USAGE: 4.2GB</span>
                        <span>LATENCY: 12ms</span>
                    </div>
                </div>
            </div>

        </div>
      </main>
    </div>
  );
};

export default App;
