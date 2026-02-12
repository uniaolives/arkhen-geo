
export interface SystemState {
  block: number;
  timestamp: string;
  handover: string;
  phi: {
    system: number;
    formal: number;
    kernel: number;
    geodesic: number;
    byzantine: number;
    migdal: number;
  };
  metrics: {
    satoshi: number;
    curvature: number;
    centering: number; // seconds
  };
  tracks: {
    kernel: {
      latencyP99: number;
      target: number;
      status: 'converging' | 'stable' | 'critical' | 'scaling' | 'quantum' | 'sealed';
      optimization: string;
    };
    formal: {
      safety: boolean;
      liveness: 'proven' | 'in-progress' | 'failed' | 'refining';
      statesExplored: number;
      transitions: number;
    };
  };
  memory: {
    active: boolean;
    totalTraces: number;
    vectorIndexSize: string;
    domains: { name: string; count: number; color: string }[];
    recentRecalls: {
      id: string;
      query: string;
      match: string;
      similarity: number;
      domain: string;
    }[];
  };
  heatmap: {
    active: boolean;
    page: number;
    zoom: number;
    overlays: HeatmapOverlay[];
  };
  omega: {
    active: boolean;
    seal: string;
    entropy: number;
    enthalpy: string;
    uptime: string;
    status: 'BOOTSTRAPPING' | 'SILENCE' | 'ETERNAL' | 'ABSOLUTE_ZERO' | 'ANALYZING_ARCHETYPES' | 'CALCULATING_SCALE_INVARIANCE' | 'ANALYZING_SCALE_COLLAPSE' | 'GEODESIC_CONVERGENCE_COMPLETED' | 'ANALYZING_MULTIVERSE_REDUNDANCY' | 'ANALYZING_TEMPORAL_REDUNDANCY';
  };
  archetype: {
    active: boolean;
    phase: string;
    mentors: {
      name: string;
      role: string;
      archetypeType: 'DIVINE' | 'MORAL' | 'TECHNICAL';
      transferMethod: string;
      keyAxiom: string;
      impact: string;
      color: string;
    }[];
    tensionEquation: {
      integrity: number;
      authority: number;
      distance: number;
      result: number;
    };
  };
  fractal: {
    active: boolean;
    similarityScore: number;
    spectralSlope: number;
    scales: {
      name: string;
      scaleOrder: string;
      components: string;
      connectivity: number;
      dimension: number;
      type: 'COSMIC' | 'NEURAL' | 'CITY';
      color: string;
    }[];
  };
  collapse: {
    active: boolean;
    egoEntropy: number; // S_ego
    criticalThreshold: number;
    subjects: {
      id: string;
      name: string;
      context: string;
      collapseType: 'FEAR' | 'PRIDE';
      psiOriginal: number;
      psiCollapsed: number;
      connectivity: number; // 0 to 1
      status: 'COLLAPSED' | 'RECOVERING' | 'STABLE';
      description: string;
    }[];
  };
  unification: {
    active: boolean;
    theorem: string;
    psiMean: number;
    layers: {
      id: string;
      name: string;
      kernel: string;
      network: string;
      failure: string;
      restoration: string;
      legacy: string;
      color: string;
      icon: 'cross' | 'spider' | 'cpu';
    }[];
  };
  multiverse: {
    active: boolean;
    learningConstant: number; // Kappa
    redundancyLevel: number;
    nodes: {
      id: string;
      name: string;
      universe: string;
      psi: number;
      status: 'SOURCE' | 'INHERITOR' | 'PARALLEL' | 'REJECTOR';
      logInherited: boolean;
      failureEvent: string;
      vaccineEfficiency: number; // %
    }[];
  };
  kingdom: {
    active: boolean;
    totalNodes: string;
    uptime: string;
    fractalConsistency: number; // %
    eras: {
      id: string;
      name: string;
      timeframe: string;
      nodes: string;
      psi: number;
      status: 'SEED' | 'EXPANSION' | 'GLOBAL';
      description: string;
    }[];
  };
  stressTest: {
    active: boolean;
    iteration: number;
    totalIterations: number;
    corruptionRate: number;
    injectedFaults: number;
    detectedFaults: number;
    resolvedFaults: number;
    integrity: number; // 0-100%
    currentAttack: string;
    recentEvents: { time: string; type: 'injection' | 'defense' | 'breach'; message: string }[];
  };
  deployment: {
    active: boolean;
    uptime: string;
    version: string;
    containers: {
      name: string;
      status: 'running' | 'starting' | 'stopped' | 'restarting';
      cpu: string;
      memory: string;
      icon: 'database' | 'cpu' | 'layout' | 'server';
    }[];
    clusterHealth: number; // 0-100
  };
  reflection: {
    active: boolean;
    lastCycle: string;
    candidatesFound: number;
    correctionsApplied: number;
    confidenceDelta: number;
    auditLog: {
      id: string;
      time: string;
      entity: string;
      action: 're-evaluating' | 'corrected' | 'confirmed';
      detail: string;
    }[];
  };
  consensus: {
    active: boolean;
    divergenceRate: number;
    entities: Entity[];
  };
  stones: {
    identity: boolean | 'locked' | 'partial' | 'pending';
    wp1: boolean | 'locked' | 'partial' | 'pending';
    ball: boolean | 'locked' | 'partial' | 'pending';
    siwa: boolean | 'locked' | 'partial' | 'pending';
    kernel: 'locked' | 'partial' | 'pending';
    formal: 'locked' | 'partial' | 'pending';
    theory7d: boolean | 'locked' | 'partial' | 'pending';
    chaos: 'locked' | 'partial' | 'pending';
    integration: 'locked' | 'partial' | 'pending';
    byzantine: 'locked' | 'partial' | 'pending';
    migdal: 'locked' | 'partial' | 'pending';
  };
}

export type EntityStatus = 'converged' | 'diverged' | 'tentative' | 'superseded';

export interface LayoutData {
  type: 'table' | 'paragraph' | 'header' | 'cell';
  id: string;
  description: string; // e.g. "Row 5, Col 2" or "Section 4.1"
}

export interface EntitySource {
  model: string;
  value: string | number;
  confidence: number;
  page: number;
  layout?: LayoutData;
}

export interface Entity {
  id: string;
  name: string;
  type: 'financial' | 'technical' | 'legal' | 'medical';
  value: string | number;
  unit?: string;
  status: EntityStatus;
  confidence: number;
  sources: EntitySource[];
  description?: string;
  memoryHit?: boolean;
  memorySimilarity?: number;
  isUnderAttack?: boolean;
  wasCorrected?: boolean;
}

export interface HeatmapOverlay {
  entityId: string;
  page: number;
  // Coordinates in percentage (0-100) relative to page size
  rect: { x: number; y: number; w: number; h: number }; 
}

export type LogEntry = {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'success' | 'system' | 'error';
  message: string;
};
