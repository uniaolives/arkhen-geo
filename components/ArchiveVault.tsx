
import React, { useState } from 'react';
import { ArchiveFolder, ArchiveFile } from '../types';
import { Folder, FileText, Code, FileCode, ChevronRight, ChevronDown, Database, BookOpen, HardDrive, Activity } from 'lucide-react';

interface ArchiveVaultProps {
  tree: ArchiveFolder[];
}

const ArchiveVault: React.FC<ArchiveVaultProps> = ({ tree }) => {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
      '01_FUNDAMENTALS': true,
      '02_MATHEMATICS': true
  });
  const [selectedFile, setSelectedFile] = useState<ArchiveFile | null>(null);

  const toggleFolder = (name: string) => {
      setExpandedFolders(prev => ({ ...prev, [name]: !prev[name] }));
  };

  const getFileIcon = (lang: string) => {
      switch(lang) {
          case 'python': return <Code size={14} className="text-blue-400" />;
          case 'rust': return <FileCode size={14} className="text-orange-400" />;
          case 'cpp': return <Code size={14} className="text-blue-600" />;
          case 'julia': return <Activity size={14} className="text-purple-400" />;
          case 'go': return <Code size={14} className="text-cyan-400" />;
          case 'latex': return <FileText size={14} className="text-white" />;
          default: return <FileText size={14} className="text-slate-400" />;
      }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg h-full flex flex-col relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '40px 100%' 
            }}>
      </div>

      {/* Header */}
      <div className="border-b border-indigo-900/30 bg-slate-900/80 p-4 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-950 p-2 rounded text-indigo-500 border border-indigo-900/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <HardDrive size={18} />
          </div>
          <div>
            <h2 className="text-white font-bold font-mono text-sm tracking-wide">MASTER ARCHIVE</h2>
            <div className="text-[10px] text-indigo-400 font-mono uppercase">Universal Knowledge Base (Block 467)</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Total Size</div>
                <div className="text-white font-mono font-bold text-sm">100k Lines</div>
             </div>
             <div className="w-px h-6 bg-slate-800"></div>
             <div className="text-right">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Status</div>
                <div className="text-emerald-400 font-mono font-bold text-xs bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                    COMPILED
                </div>
             </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative z-10">
          
          {/* Sidebar: File Tree */}
          <div className="w-64 bg-slate-900/50 border-r border-slate-800 overflow-y-auto custom-scrollbar p-2">
              {tree.map(folder => (
                  <div key={folder.name} className="mb-1">
                      <div 
                        className="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer text-xs font-mono text-slate-300"
                        onClick={() => toggleFolder(folder.name)}
                      >
                          {expandedFolders[folder.name] ? <ChevronDown size={12}/> : <ChevronRight size={12}/>}
                          <Folder size={14} className="text-amber-400" />
                          <span>{folder.name}</span>
                      </div>
                      
                      {expandedFolders[folder.name] && (
                          <div className="ml-4 pl-2 border-l border-slate-700">
                              {folder.children.map((child: any) => (
                                  <div 
                                    key={child.name}
                                    className={`flex items-center gap-2 p-1.5 my-0.5 rounded cursor-pointer text-[11px] font-mono transition-colors
                                        ${selectedFile?.name === child.name ? 'bg-indigo-900/50 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}
                                    `}
                                    onClick={() => setSelectedFile(child)}
                                  >
                                      {getFileIcon(child.language)}
                                      <span>{child.name}</span>
                                  </div>
                              ))}
                          </div>
                      )}
                  </div>
              ))}
          </div>

          {/* Viewer Area */}
          <div className="flex-1 bg-black/40 flex flex-col overflow-hidden">
              {selectedFile ? (
                  <div className="flex flex-col h-full">
                      <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex justify-between items-center">
                          <span className="text-xs font-mono text-white flex items-center gap-2">
                              {getFileIcon(selectedFile.language)} {selectedFile.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">{selectedFile.size} • {selectedFile.language.toUpperCase()}</span>
                      </div>
                      <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
                          <div className="text-xs font-mono text-slate-300 leading-relaxed whitespace-pre-wrap opacity-70">
                              {/* Placeholder for content since we don't have full file contents in state */}
                              <div className="text-emerald-400 mb-2">// {selectedFile.name} loaded from immutable storage</div>
                              <div className="text-slate-500">
                                  {`>>> Opening file stream...
>>> Decrypting content (Key: Γ_467)...
>>> Verifying hash integrity... OK.

[CONTENT PREVIEW]
...
(Full content requires deep-link access authorized by Lattica consensus)
...`}
                              </div>
                          </div>
                      </div>
                  </div>
              ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-600 gap-4">
                      <Database size={48} className="opacity-20" />
                      <div className="text-xs font-mono">Select a file from the Master Archive to view.</div>
                  </div>
              )}
          </div>

      </div>
    </div>
  );
};

export default ArchiveVault;
