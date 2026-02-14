
import React, { useState } from 'react';
import { SystemState } from '../types';
import { FileText, Eye, AlertTriangle, CheckCircle2, ShieldCheck, Database, Layers, RefreshCw, Braces, Code, Zap, Scan, MousePointer2, GitMerge, FileCode2, Terminal, ArrowRight, Link } from 'lucide-react';
import GlobalEntityRegistry from './GlobalEntityRegistry';

interface DocumentIntelligenceLabProps {
  docIntel: SystemState['documentIntelligence'];
}

const DocumentIntelligenceLab: React.FC<DocumentIntelligenceLabProps> = ({ docIntel }) => {
  const [activeTab, setActiveTab] = useState<'viewer' | 'logs' | 'schema' | 'registry'>('viewer');
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  if (!docIntel) return null;

  const activePage = docIntel.extractedPages?.[0];

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Scan size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">PROTOCOL Γ_9060</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Robust OCR & Resurrection</div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex bg-slate-900 rounded p-1 border border-slate-800">
             <button 
                onClick={() => setActiveTab('viewer')}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-colors ${activeTab === 'viewer' ? 'bg-slate-800 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 VIEWER
             </button>
             <button 
                onClick={() => setActiveTab('registry')}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-colors ${activeTab === 'registry' ? 'bg-slate-800 text-emerald-400 shadow' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 REGISTRY (GLOBAL)
             </button>
             <button 
                onClick={() => setActiveTab('logs')}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-colors ${activeTab === 'logs' ? 'bg-slate-800 text-amber-400 shadow' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 RESILIENCE LOG
             </button>
             <button 
                onClick={() => setActiveTab('schema')}
                className={`px-3 py-1 text-[10px] font-mono rounded transition-colors ${activeTab === 'schema' ? 'bg-slate-800 text-fuchsia-400 shadow' : 'text-slate-500 hover:text-slate-300'}`}
             >
                 SCHEMA
             </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 flex flex-col gap-6 relative z-10 overflow-y-auto custom-scrollbar">
        
        {/* --- VIEWER TAB --- */}
        {activeTab === 'viewer' && activePage && (
            <div className="flex h-full gap-6">
                {/* Document Canvas */}
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-8 flex justify-center relative overflow-hidden group">
                    <div className="relative bg-white shadow-2xl transition-transform duration-200 w-[400px] h-[565px]"
                         style={{ 
                            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                        
                        {/* Mock PDF Content */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="h-4 bg-black w-3/4 m-8 mb-4"></div>
                            <div className="h-2 bg-slate-600 w-full mx-8 mb-2"></div>
                            <div className="h-2 bg-slate-600 w-5/6 mx-8 mb-2"></div>
                            <div className="h-2 bg-slate-600 w-full mx-8 mb-8"></div>
                            <div className="h-32 bg-slate-300 w-[calc(100%-4rem)] mx-8 border border-slate-400"></div>
                        </div>

                        {/* Interactive Overlays */}
                        {activePage.entities?.map(entity => {
                            const isHovered = hoveredEntity === entity.id;
                            const isSelected = selectedEntity === entity.id;
                            
                            if (!entity.box) return null;

                            return (
                                <div
                                    key={entity.id}
                                    className={`absolute cursor-pointer transition-all duration-200 border-2
                                        ${isSelected ? 'bg-amber-500/20 border-amber-500 z-20' : 
                                          isHovered ? 'bg-emerald-500/20 border-emerald-500 z-20' : 
                                          'border-indigo-500/30 hover:border-emerald-500/50 z-10'}
                                    `}
                                    style={{
                                        left: `${entity.box?.x}%`,
                                        top: `${entity.box?.y}%`,
                                        width: `${entity.box?.w}%`,
                                        height: `${entity.box?.h}%`
                                    }}
                                    onMouseEnter={() => setHoveredEntity(entity.id)}
                                    onMouseLeave={() => setHoveredEntity(null)}
                                    onClick={() => setSelectedEntity(entity.id === selectedEntity ? null : entity.id)}
                                >
                                    {(isHovered || isSelected) && (
                                        <div className="absolute -top-6 left-0 bg-slate-900 text-white text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700 whitespace-nowrap z-30 shadow-xl">
                                            {entity.name} ({entity.confidence})
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Sidebar Info */}
                <div className="w-80 flex flex-col gap-4">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                        <div className="text-[10px] text-slate-500 font-mono uppercase mb-2 flex items-center gap-1">
                            <MousePointer2 size={12} /> Interactive Mode
                        </div>
                        <div className="text-xs text-slate-300 font-mono">
                            Hover list or document to validate.<br/>
                            <span className="text-emerald-400">Two-way binding active.</span>
                        </div>
                    </div>

                    <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 overflow-hidden flex flex-col">
                        <div className="text-[10px] text-slate-500 font-mono uppercase mb-3 flex items-center gap-1 border-b border-slate-800 pb-2">
                            <Database size={12} /> Extracted Entities
                        </div>
                        <div className="flex-1 overflow-y-auto custom-scrollbar space-y-2">
                            {activePage.entities?.map(entity => (
                                <div 
                                    key={entity.id}
                                    className={`p-3 rounded border text-xs font-mono transition-all cursor-pointer flex flex-col gap-1
                                        ${selectedEntity === entity.id 
                                            ? 'bg-amber-900/20 border-amber-500/50 text-amber-100 shadow-[0_0_10px_rgba(245,158,11,0.1)]' 
                                            : hoveredEntity === entity.id
                                                ? 'bg-emerald-900/20 border-emerald-500/50 text-emerald-100 transform translate-x-1'
                                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-600'}
                                    `}
                                    onMouseEnter={() => setHoveredEntity(entity.id)}
                                    onMouseLeave={() => setHoveredEntity(null)}
                                    onClick={() => setSelectedEntity(entity.id === selectedEntity ? null : entity.id)}
                                >
                                    <div className="flex justify-between items-start">
                                        <span className="font-bold uppercase text-[10px]">{entity.name}</span>
                                        <span className={`text-[9px] px-1 rounded ${entity.confidence > 0.9 ? 'text-emerald-400 bg-emerald-950/50' : 'text-amber-400 bg-amber-950/50'}`}>
                                            {entity.confidence}
                                        </span>
                                    </div>
                                    <div className="text-white text-sm">{entity.value}</div>
                                    {entity.memoryHit && (
                                        <div className="flex items-center gap-1 text-[9px] text-fuchsia-400 pt-1 border-t border-white/5 mt-1">
                                            <GitMerge size={8} /> Memory Match: {(entity.memorySimilarity! * 100).toFixed(0)}%
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* --- REGISTRY TAB --- */}
        {activeTab === 'registry' && docIntel.globalRegistry && (
            <GlobalEntityRegistry registry={docIntel.globalRegistry} />
        )}

        {/* --- LOGS TAB --- */}
        {activeTab === 'logs' && (
            <div className="flex flex-col gap-6 h-full">
                {/* Fallback Chain Visualization */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                    <h3 className="text-xs text-white font-mono font-bold uppercase mb-4 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-emerald-400" /> Robustness Chain (The Resurrection)
                    </h3>
                    <div className="space-y-2">
                        {docIntel.errorLog.map((log, idx) => (
                            <div key={idx} className="flex items-center gap-4 text-xs font-mono p-3 rounded bg-slate-950 border border-slate-800">
                                <div className={`w-2 h-2 rounded-full ${log.status === 'recovered' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                                <div className="w-24 text-slate-400 uppercase font-bold">{log.step}</div>
                                <div className="flex-1 text-rose-400 flex items-center gap-2">
                                    <AlertTriangle size={12} /> {log.error}
                                </div>
                                <div className="text-emerald-400 flex items-center gap-2 bg-emerald-950/20 px-2 py-1 rounded border border-emerald-900/50">
                                    <RefreshCw size={12} /> Fallback: {log.fallback}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Vector Memory Stats */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center">
                        <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Entities Indexed</div>
                        <div className="text-2xl font-bold font-mono text-white">{docIntel.vectorStats.entitiesIndexed}</div>
                        <div className="text-[9px] text-emerald-400 font-mono mt-1">pgvector Active</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center">
                        <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Conflicts Resolved</div>
                        <div className="text-2xl font-bold font-mono text-amber-400">{docIntel.vectorStats.conflictResolutions}</div>
                        <div className="text-[9px] text-slate-400 font-mono mt-1">via Semantic Recall</div>
                    </div>
                    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-center">
                        <div className="text-[10px] text-slate-500 uppercase font-mono mb-1">Avg Similarity</div>
                        <div className="text-2xl font-bold font-mono text-fuchsia-400">{docIntel.vectorStats.avgSimilarity}</div>
                        <div className="text-[9px] text-slate-400 font-mono mt-1">Cosine Distance</div>
                    </div>
                </div>

                {/* Parallel Processing Progress */}
                <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-lg p-4 overflow-hidden">
                    <h3 className="text-xs text-white font-mono font-bold uppercase mb-4 flex items-center gap-2">
                        <Zap size={14} className="text-amber-400" /> Parallel Chunk Processing (Context Awareness)
                    </h3>
                    <div className="space-y-3">
                        {docIntel.chunks.map((chunk) => (
                            <div key={chunk.id} className="flex items-center gap-3 p-2 bg-slate-950/30 rounded border border-slate-800/50">
                                <span className="text-[10px] font-mono text-slate-500 w-8">{chunk.id}</span>
                                <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full ${chunk.status === 'completed' ? 'bg-emerald-500' : (chunk.status === 'processing' ? 'bg-amber-500 animate-pulse' : 'bg-slate-700')}`} 
                                        style={{ width: chunk.status === 'completed' ? '100%' : (chunk.status === 'processing' ? '60%' : '0%') }}
                                    ></div>
                                </div>
                                <span className="text-[10px] font-mono text-slate-400 w-12 text-right">{chunk.size}</span>
                                {chunk.contextPassed && (
                                    <span className="text-[10px] font-mono text-indigo-400 flex items-center gap-1" title="Context Passed"><Link size={8}/> CTX</span>
                                )}
                                <span className={`text-[10px] font-mono uppercase w-16 text-right ${chunk.status === 'completed' ? 'text-emerald-400' : 'text-amber-400'}`}>
                                    {chunk.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* --- SCHEMA TAB --- */}
        {activeTab === 'schema' && (
            <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs overflow-hidden flex flex-col">
                <div className="flex items-center gap-2 text-emerald-400 mb-4 pb-2 border-b border-slate-800">
                    <Braces size={14} />
                    <span className="font-bold uppercase">Pydantic Schema (Strict Enforcement)</span>
                </div>
                <div className="flex-1 overflow-auto custom-scrollbar text-slate-400">
                    <pre className="language-python">
{`from pydantic import BaseModel, Field, confloat
from typing import List, Optional

class ExtractedEntity(BaseModel):
    name: str = Field(..., description="Canonical name of the entity")
    entity_type: str = Field(..., pattern=r"^[a-z_]+$")
    value: str | float | int
    unit: Optional[str] = None
    
    # Validation Layer
    confidence: confloat(ge=0.0, le=1.0) = 0.95
    bounding_box: List[float] = Field(..., min_items=4, max_items=4)
    
    # Semantic Linking
    vector_embedding: Optional[List[float]] = None
    
    class Config:
        json_schema_extra = {
            "example": {
                "name": "Invoice Total",
                "entity_type": "currency",
                "value": 1250.00,
                "confidence": 0.99,
                "bounding_box": [0.7, 0.85, 0.15, 0.04]
            }
        }

class ExtractionReport(BaseModel):
    document_id: str
    total_pages: int
    entities: List[ExtractedEntity]
    
    # The Invariant survives the extraction
    processing_time_ms: float
    status: str = "completed"`}
                    </pre>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center">
                     <div className="text-[10px] text-emerald-500 flex items-center gap-2">
                        <CheckCircle2 size={12} /> Gemini & Ollama Outputs Validated
                    </div>
                    <div className="text-[10px] text-indigo-400 flex items-center gap-2">
                        <FileCode2 size={12} /> Automatic JSON Repair Active
                    </div>
                </div>
            </div>
        )}

      </div>
    </div>
  );
};

export default DocumentIntelligenceLab;
