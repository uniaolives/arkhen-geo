export interface Entity {
  id: string;
  name: string;
  type: string;
  value: string;
  unit?: string;
  confidence: number;
  status: 'diverged' | 'converged';
  sources: { model: string; value: string; page?: number; layout?: { type?: string; description?: string } }[];
  memoryHit?: boolean;
  memorySimilarity?: number;
  description?: string;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'success' | 'system';
  message: string;
}

export interface GlobalEntity {
    id: string;
    canonicalName: string;
    type: string;
    status: 'CONVERGED' | 'DIVERGED';
    confidence: number;
    chunks: string[];
    variations: string[];
}

export interface ArchiveFolder {
    name: string;
    children: (ArchiveFolder | ArchiveFile)[];
}

export interface ArchiveFile {
    name: string;
    language: string;
    size: string;
}

export interface SystemState {
  metrics: {
      satoshi: number;
      curvature: number;
  };
  block: number;
  handover: string;
  stones: {
      identity: boolean | 'locked' | 'partial' | 'pending';
      wp1: boolean | 'locked' | 'partial' | 'pending';
      wp1_m1: boolean | 'locked' | 'partial' | 'pending';
      chaos: boolean | 'locked' | 'partial' | 'pending';
      kernel: boolean | 'locked' | 'partial' | 'pending';
      formal: boolean | 'locked' | 'partial' | 'pending';
      integration: boolean | 'locked' | 'partial' | 'pending';
      theory7d: boolean | 'locked' | 'partial' | 'pending';
      byzantine: boolean | 'locked' | 'partial' | 'pending';
      migdal: boolean | 'locked' | 'partial' | 'pending';
  };
  phi: {
      system: number;
      formal: number;
      kernel: number;
      byzantine: number;
      migdal: number;
      geodesic: number;
  };
  tracks: {
      kernel: { status: string; latencyP99: number; optimization: string; hotPaths?: string[] };
      formal: { statesExplored: number; transitions: number };
  };
  consensus: {
      entities: Entity[];
      divergenceRate: number;
  };
  [key: string]: any;
}