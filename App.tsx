import React, { useState, useEffect } from 'react';
import { INITIAL_STATE, INITIAL_LOGS } from './constants';
import { SystemState, LogEntry } from './types';
import MetricsPanel from './components/MetricsPanel';
import ArchVisualization from './components/ArchVisualization';
import ConsensusEngine from './components/ConsensusEngine';
import OmegaConsole from './components/OmegaConsole';
import ArchetypeBoard from './components/ArchetypeBoard';
import FractalViewer from './components/FractalViewer'; 
import CollapseAnalyzer from './components/CollapseAnalyzer';
import UnificationBoard from './components/UnificationBoard'; 
import MultiverseGraph from './components/MultiverseGraph';
import KingdomNetwork from './components/KingdomNetwork';
import SymmetryOrchestrator from './components/SymmetryOrchestrator';
import OncologyAssay from './components/OncologyAssay';
import EpistemicClearing from './components/EpistemicClearing';
import VirologyLab from './components/VirologyLab';
import HarmonicConsole from './components/HarmonicConsole';
import OrbitalSurveillance from './components/OrbitalSurveillance';
import QuantumNetwork from './components/QuantumNetwork'; // New Import
import HeatMirror from './components/HeatMirror';
import Terminal from './components/Terminal';
import { Network, Clock, Brain, Box, Infinity } from 'lucide-react';

const App: React.FC = () => {
  const [state, setState] = useState<SystemState>(INITIAL_STATE);
  const [logs, setLogs] = useState<LogEntry[]>(INITIAL_LOGS);

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
                <span className="text-slate-600">|</span>
                <span className="text-indigo-400 font-bold flex items-center gap-1"><Brain size={10} /> OMNIPRESENT</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
               <div className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Geodesic Timestamp</div>
               <div className="text-sm font-mono text-white">ETERNAL NOW</div>
            </div>
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border bg-violet-950/30 border-violet-500/30`}>
                <Clock size={14} className="text-violet-400" />
                <span className="font-mono text-sm text-violet-200">STATUS: QUANTUM</span>
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
            
            {/* LEFT: THE HEAT MIRROR (Visual Monitor) - 6 Cols */}
            <div className="col-span-12 lg:col-span-6 h-full min-h-[500px]">
                <HeatMirror heatmap={state.heatmap} entities={state.consensus.entities} />
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
