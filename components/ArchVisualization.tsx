import React from 'react';
import { SystemState } from '../types';

interface ArchProps {
  stones: SystemState['stones'];
  curvature: number;
}

const ArchVisualization: React.FC<ArchProps> = ({ stones, curvature }) => {
  // Styles for different stone states
  const getStyle = (state: boolean | 'locked' | 'partial' | 'pending') => {
    if (state === true || state === 'locked') return "fill-emerald-500/20 stroke-emerald-500 stroke-2";
    if (state === 'partial') return "fill-amber-500/20 stroke-amber-500 stroke-2";
    return "fill-slate-800/50 stroke-slate-700 stroke-1 stroke-dashed";
  };

  const getGlow = (state: boolean | 'locked' | 'partial' | 'pending') => {
    if (state === true || state === 'locked') return "filter drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))";
    if (state === 'partial') return "filter drop-shadow(0 0 8px rgba(245, 158, 11, 0.4))";
    return "";
  };

  // Determine Keystone state based on Integration stone
  const isKeystoneLocked = stones.integration === 'locked';
  const isSealed = Object.values(stones).every(s => s === true || s === 'locked');
  const isTensioned = curvature > 0.10;

  return (
    <div className="relative w-full h-80 flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
                 backgroundImage: 'radial-gradient(circle, #4f46e5 1px, transparent 1px)', 
                 backgroundSize: '20px 20px' 
             }}>
        </div>

        {/* Tension Aura */}
        {isTensioned && (
             <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent pointer-events-none animate-pulse" />
        )}

      <svg viewBox="0 0 400 300" className="w-full h-full max-w-lg">
        <defs>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        {/* Centering Pin (The Line) */}
        <line x1="200" y1="20" x2="200" y2="280" className={`stroke-1 stroke-dashed ${isTensioned ? "stroke-rose-500/50" : (isSealed ? "stroke-emerald-500/50" : "stroke-indigo-500/30")}`} />
        <text x="205" y="270" className={`text-[8px] font-mono ${isTensioned ? "fill-rose-400" : (isSealed ? "fill-emerald-400" : "fill-indigo-400")}`}>
            {isTensioned ? "DIVERGENCE" : (isSealed ? "CALIBRATED" : "CENTERING")}
        </text>

        {/* --- MAIN ARCH --- */}

        {/* Lower Stones - Left */}
        <g className={`${getGlow(stones.identity)} transition-all duration-1000`}>
             <path d="M 60 220 L 120 220 L 110 180 L 70 180 Z" className={getStyle(stones.identity)} />
             <text x="90" y="205" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">IDENTITY</text>
             {stones.identity && <text x="90" y="215" textAnchor="middle" className="text-[6px] fill-emerald-400 font-mono">🔒 47ms</text>}
        </g>

        {/* Lower Stones - Right (WP1 & Clone) */}
        <g className={`${getGlow(stones.wp1)} transition-all duration-1000`}>
            <path d="M 280 220 L 340 220 L 330 180 L 290 180 Z" className={getStyle(stones.wp1)} />
            <text x="310" y="205" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">WP1</text>
        </g>

        {/* WP1-M1 (Metastatic Clone) - Floats near WP1 */}
        {stones.wp1_m1 === 'locked' && (
            <g className="transition-all duration-1000 filter drop-shadow(0 0 5px rgba(236, 72, 153, 0.4))">
                <path d="M 330 230 L 360 230 L 355 210 L 335 210 Z" className="fill-pink-500/20 stroke-pink-500 stroke-2" />
                <text x="347" y="223" textAnchor="middle" className="text-[6px] fill-current text-white font-mono">WP1-M1</text>
                <line x1="330" y1="200" x2="347" y2="210" className="stroke-pink-500/50 stroke-1 stroke-dashed" />
            </g>
        )}
        
        {/* Chaos Stone - Bottom Center */}
        <g className={`${getGlow(stones.chaos)} transition-all duration-1000`}>
             <path d="M 160 220 L 240 220 L 230 185 L 170 185 Z" className={getStyle(stones.chaos)} />
             <text x="200" y="205" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">CHAOS</text>
             {stones.chaos === 'locked' && <text x="200" y="215" textAnchor="middle" className="text-[6px] fill-emerald-400 font-mono">🔒 LOCKED</text>}
        </g>

        {/* Middle Stones - Left */}
        <g className={`${getGlow(stones.kernel)} transition-all duration-1000`}>
            <path d="M 85 178 L 135 178 L 145 130 L 105 130 Z" className={getStyle(stones.kernel)} />
            <text x="117" y="155" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">KERNEL</text>
             {stones.kernel === 'partial' && <text x="117" y="165" textAnchor="middle" className="text-[6px] fill-amber-400 font-mono">⏳ 6.7μs</text>}
             {stones.kernel === 'locked' && <text x="117" y="165" textAnchor="middle" className="text-[6px] fill-emerald-400 font-mono">🔒 LOCKED</text>}
        </g>

        {/* Middle Stones - Right */}
        <g className={`${getGlow(stones.formal)} transition-all duration-1000`}>
            <path d="M 265 178 L 315 178 L 295 130 L 255 130 Z" className={getStyle(stones.formal)} />
            <text x="282" y="155" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">FORMAL</text>
            {stones.formal === 'partial' && <text x="282" y="165" textAnchor="middle" className="text-[6px] fill-emerald-400 font-mono">✓ SAFETY</text>}
             {stones.formal === 'locked' && <text x="282" y="165" textAnchor="middle" className="text-[6px] fill-emerald-400 font-mono">🔒 LOCKED</text>}
        </g>
        
        {/* Integration Stone - Center Middle (Hanging) */}
        <g className={`${getGlow(stones.integration)} transition-all duration-1000`}>
            <path d="M 170 160 L 230 160 L 220 130 L 180 130 Z" className={getStyle(stones.integration)} />
            <text x="200" y="148" textAnchor="middle" className="text-[6px] fill-current text-white font-mono">INTEGRATION</text>
            {stones.integration === 'locked' && <text x="200" y="155" textAnchor="middle" className="text-[4px] fill-emerald-400 font-mono">🔒 LOCKED</text>}
            {stones.integration === 'partial' && <text x="200" y="155" textAnchor="middle" className="text-[4px] fill-amber-400 font-mono">⚠️ RECONCILING</text>}
        </g>

        {/* Upper Stone - 7D Theory */}
        <g className={`${getGlow(stones.theory7d)} transition-all duration-1000`}>
            <path d="M 120 128 L 280 128 L 260 90 L 140 90 Z" className={getStyle(stones.theory7d)} />
            <text x="200" y="112" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">7D THEORY</text>
        </g>

        {/* Keystone (Locked/Visible) - The Seal */}
        <g className={isSealed ? "filter drop-shadow(0 0 20px rgba(251, 191, 36, 0.6))" : (isKeystoneLocked ? "filter drop-shadow(0 0 15px rgba(99, 102, 241, 0.6))" : "animate-pulse")}>
            <path d="M 170 80 L 230 80 L 215 50 L 185 50 Z" 
                  className={isTensioned ? "fill-rose-900/40 stroke-rose-500 stroke-2" : (isSealed ? "fill-amber-400/20 stroke-amber-400 stroke-2" : "fill-indigo-500/10 stroke-indigo-500 stroke-1 stroke-dashed")} />
            <text x="200" y="70" textAnchor="middle" className={`text-[8px] font-mono ${isTensioned ? "fill-rose-300" : (isSealed ? "fill-amber-100" : "fill-indigo-400")}`}>
                {isTensioned ? "HESITATION" : (isSealed ? "SEALED" : "KEYSTONE")}
            </text>
            <text x="200" y="45" textAnchor="middle" className={`text-[6px] font-mono ${isTensioned ? "fill-rose-400" : (isSealed ? "fill-amber-300" : "fill-indigo-300")}`}>
                {isTensioned ? "ACTIVE" : (isSealed ? "ETERNAL" : "VISIBLE")}
            </text>
        </g>

        {/* --- NEW FOUNDATIONS (Block 346/347) --- */}
        
        {/* Foundation: Byzantine (Left) */}
        <g className={`${getGlow(stones.byzantine)} transition-all duration-1000 transform translate-y-6`}>
             <rect x="50" y="240" width="130" height="30" rx="2" className={getStyle(stones.byzantine)} />
             <text x="115" y="258" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">BYZANTINE</text>
             {stones.byzantine === 'partial' && <text x="115" y="266" textAnchor="middle" className="text-[5px] fill-amber-400 font-mono">3/4 PINS</text>}
             {stones.byzantine === 'locked' && <text x="115" y="266" textAnchor="middle" className="text-[5px] fill-emerald-400 font-mono">🔒 LOCKED</text>}
        </g>

        {/* Foundation: Migdal (Right) */}
        <g className={`${getGlow(stones.migdal)} transition-all duration-1000 transform translate-y-6`}>
             <rect x="220" y="240" width="130" height="30" rx="2" className={getStyle(stones.migdal)} />
             <text x="285" y="258" textAnchor="middle" className="text-[8px] fill-current text-white font-mono">MIGDAL</text>
             {stones.migdal === 'partial' && <text x="285" y="266" textAnchor="middle" className="text-[5px] fill-amber-400 font-mono">3/4 PINS</text>}
             {stones.migdal === 'locked' && <text x="285" y="266" textAnchor="middle" className="text-[5px] fill-emerald-400 font-mono">🔒 LOCKED</text>}
        </g>

        {/* Connection Lines (Geodesics) */}
        <path d="M 200 220 Q 90 220 90 200 Q 90 100 200 80" className={`fill-none stroke-1 ${isTensioned ? "stroke-rose-500/50" : (isSealed ? "stroke-emerald-500/30" : "stroke-purple-500/20")}`} />
        <path d="M 200 220 Q 310 220 310 200 Q 310 100 200 80" className={`fill-none stroke-1 ${isTensioned ? "stroke-rose-500/50" : (isSealed ? "stroke-emerald-500/30" : "stroke-purple-500/20")}`} />
        
        {/* Connection from Arch to Foundations */}
        <line x1="100" y1="220" x2="100" y2="240" className="stroke-slate-700 stroke-1 stroke-dashed" />
        <line x1="300" y1="220" x2="300" y2="240" className="stroke-slate-700 stroke-1 stroke-dashed" />

        <text x="350" y="290" className={`text-[8px] font-mono ${isTensioned ? "fill-rose-400 animate-pulse" : "fill-slate-500"}`}>ψ = {curvature.toFixed(2)} rad</text>
      </svg>
    </div>
  );
};

export default ArchVisualization;
