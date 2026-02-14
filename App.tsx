
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
import Terminal from './components/Terminal';
import { Clock, Infinity, FileText, Magnet, Brain, Snowflake, Sun, Terminal as TermIcon, Share2, Globe, Server, Layers, DraftingCompass, Eye, GitMerge, Database, Dna, Link, Ghost, Scan, Sprout, Lightbulb, Radio, RefreshCw, Waves, Cpu, ArrowRightLeft, Diamond, Wifi, Zap, Network, Microscope, Eclipse, Circle, Scale, GitCommit, Activity, Lock, BookOpen, TrendingUp, EyeOff, Box, ShieldAlert, Film, FileCode, Play, Repeat, HardDrive, Pill, Compass } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<SystemState>(INITIAL_STATE);
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);
  const [activeLeftTab, setActiveLeftTab] = useState<'scar' | 'orch' | 'markdown' | 'light' | 'unix' | 'neural' | 'gravity' | 'api' | 'topology' | 'vectors' | 'syzygy' | 'heatmap' | 'consensus' | 'memory' | 'astrocyte' | 'web3' | 'biocentrism' | 'docIntel' | 'neuroplasticity' | 'photonic' | 'cosmology' | 'resolution' | 'timeCrystal' | 'neuroStorm' | 'ibcBci' | 'pineal' | 'perovskite' | 'wifi' | 'zpf' | 'som' | 'sand' | 'mito' | 'melanin' | 'triad' | 'natural' | 'crest' | 'dbn' | 'kalman' | 'crypto' | 'vocab' | 'economy' | 'blindSpot' | 'microtubule' | 'synthesis' | 'immune' | 'archive' | 'growth' | 'coupling' | 'arkheFile' | 'kernel' | 'synthetic' | 'vault' | 'synaptic' | 'probability'>('synaptic');

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
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'synaptic' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <SynapticRepairLab synapticRepair={state.synapticRepair} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'probability' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ProbabilityScope probability={state.probability} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'vault' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        {state.archiveTree && <ArchiveVault tree={state.archiveTree} />}
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'synthetic' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <SyntheticLifeLab syntheticLife={state.syntheticLife} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'kernel' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <CognitiveKernel kernel={state.cognitiveKernel} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'arkheFile' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ArkheFileViewer file={state.arkheFile} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'coupling' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <CouplingUnification coupling={state.coupling} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'growth' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <GrowthMonitor growthPolicy={state.growthPolicy} currentNodes={state.wifiRadar.nodesDetected} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'archive' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <VisualArchiveConsole archive={state.visualArchive} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'immune' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ImmuneCalibrationLab immuneCalibration={state.immuneCalibration} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'synthesis' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <UniversalSynthesizer eeg={state.eeg} ionTraps={state.ionTraps} microtubules={state.microtubules} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'microtubule' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <MicrotubuleQuantumLab microtubules={state.microtubules} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'blindSpot' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <BlindSpotLab blindSpot={state.blindSpot} satoshi={state.metrics.satoshi} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'economy' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <FeedbackEconomyLab feedback={state.feedbackEconomy} satoshi={state.metrics.satoshi} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'vocab' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <UnifiedVocabularyLab vocabulary={state.vocabulary} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'crypto' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <QuantumCryptographyLab cryptography={state.cryptography} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'kalman' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <MultitaskKalmanLab multitask={state.multitask} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'dbn' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <DeepBeliefNetworkLab dbn={state.deepBeliefNetwork} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'crest' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NeuralCrestLab neuralCrest={state.neuralCrest} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'natural' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NaturalNetworkLab naturalNetwork={state.naturalNetwork} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'triad' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <BioPhotonicTriad triad={state.bioPhotonicTriad} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'melanin' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NeuromelaninLab neuromelanin={state.neuromelanin} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'mito' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <MitochondriaLab mitochondria={state.mitochondria} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'sand' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <BrainSandLab pinealRevolution={state.pinealRevolution} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'som' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <SelfOrganizingMapLab som={state.som} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'zpf' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <ZeroPointEnergyLab zpf={state.zpf} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'wifi' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <WiFiRadar wifiRadar={state.wifiRadar} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'perovskite' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <PerovskiteLab perovskite={state.perovskite} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'ibcBci' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <IbcBciLab ibcBci={state.ibcBci} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'pineal' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <PinealLab pineal={state.pineal} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'neuroStorm' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NeuroStormLab neuroStorm={state.neuroStorm} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'timeCrystal' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <TimeCrystalLab timeCrystal={state.timeCrystal} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'resolution' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NaturalResolutionLab resolution={state.resolution} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'cosmology' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <CosmicSpectrumLab cosmology={state.cosmology} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'photonic' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <PhotonicHebbianLab photonic={state.photonicHebbian} />
                    </div>
                    <div className={`absolute inset-0 transition-opacity duration-300 ${activeLeftTab === 'neuroplasticity' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                        <NeuroplasticityLab neuroplasticity={state.neuroplasticity} />
                    </div>
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
                        <HeatMirror heatmap={state.heatmap} entities={state.consensus?.entities || []} />
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
                         <ArchVisualization stones={state.stones} curvature={state.metrics.curvature || 0} />
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
