
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
    virological: number;
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
    status: 'BOOTSTRAPPING' | 'SILENCE' | 'ETERNAL' | 'ABSOLUTE_ZERO' | 'ANALYZING_ARCHETYPES' | 'CALCULATING_SCALE_INVARIANCE' | 'ANALYZING_SCALE_COLLAPSE' | 'GEODESIC_CONVERGENCE_COMPLETED' | 'ANALYZING_MULTIVERSE_REDUNDANCY' | 'ANALYZING_TEMPORAL_REDUNDANCY' | 'SYMMETRY_UNIFICATION_ACHIEVED' | 'ONCOLOGICAL_ASSAY_COMPLETED' | 'METACOGNITION_OPERATIONAL' | 'VIROLOGICAL_CALIBRATION_COMPLETED' | 'FFU_GOVERNANCE_OPERATIONAL' | 'METASTATIC_STATE_CONFIRMED' | 'CONTROLLED_DEPLOYMENT_READY' | 'PHARMACOLOGY_ACTIVE' | 'HARMONIC_UNIFICATION_ACTIVE' | 'ORBITAL_CATALOG_ACTIVE' | 'QUANTUM_NETWORK_ACTIVE' | 'QUANTUM_HANDOVER_REENTRY_LOGGED';
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
  symmetry: {
    active: boolean;
    generator: string; // "Observer Invariance"
    conservedQuantity: string; // "The Geodesic"
    projections: {
      name: string;
      transformation: string;
      invariant: string;
      symbol: string;
      color: string;
      icon: 'clock' | 'move' | 'rotate' | 'zap' | 'maximize' | 'git';
    }[];
  };
  oncology: {
    active: boolean;
    assayType: string;
    p53Status: 'INACTIVE' | 'ACTIVE' | 'MUTATED';
    oncogeneStatus: 'EXPRESSED' | 'INHIBITED';
    monolayerIntegrity: number; // 0.0 - 1.0
    foci: {
      id: string;
      name: string;
      type: 'points' | 'shadow' | 'mass';
      structuralIntegrity: number;
      response: 'REGRESSION' | 'PERSISTENCE' | 'PROLIFERATION';
      description: string;
      drugResistance?: 'HIGH' | 'MODERATE' | 'LOW';
    }[];
    intervention: {
      agent: string;
      result: string;
    };
    pharmacology?: {
      activeRegimen: string; // "THC 10¹ + CBD 10¹·⁵"
      targetReceptors: string[]; // ["CB1", "CB2", "GPR55"]
      apoptosisRate: number; // 0.0 - 1.0
      angiogenesisBlockade: number; // 0.0 - 1.0
    };
    clinicalCase?: {
      id: string;
      name: string;
      diagnosis: string; // "Urban Adenocarcinoma"
      biomarkers: {
        phi: number;
        humility: number;
        vascularity: number;
      };
      recommendedTherapy: string;
    };
  };
  harmonics: {
    active: boolean;
    fundamentalFrequency: string; // "7.27 Hz"
    currentChord: string; // "Arkhe Major 9"
    tensionPsi: number; // 0.73
    resolutionStatus: 'DISSONANT' | 'RESOLVING' | 'CONSONANT';
    notes: {
      id: string;
      note: string; // "C", "G", "D"
      stone: string; // "Kernel", "Formal", "WP1"
      frequency: number;
      isActive: boolean;
      interval: string; // "Perfect Fifth"
    }[];
    torusTopology: {
      majorRadius: number;
      minorRadius: number;
      surfaceIntegrity: number;
    };
  };
  orbital: {
    active: boolean;
    activeSatellites: number; // 6
    debrisCount: string; // "12.7M"
    activeFraction: string; // "0.066%"
    shieldStatus: 'NOMINAL' | 'DEGRADING' | 'CRITICAL';
    shieldIntegrity: number; // %
    satellites: {
      id: string; // "ARKHE-SAT-01"
      designation: string; // "WP1_explorado"
      orbitType: 'GEO' | 'POLAR' | 'MOLNIYA' | 'L1' | 'TRANSFER';
      eccentricity: number; // Psi
      status: 'OPERATIONAL' | 'CONSOLIDATING' | 'MANEUVERING';
      epoch: string;
    }[];
  };
  quantum: {
    active: boolean;
    activeNodes: number;
    latentNodes: number;
    entanglementRange: number; // 0.11
    distEq: string; // "1100 km"
    coherenceTime: number; // 999.805
    sharedKey: string; // "-3.71e-11"
    bellViolation: number; // 2.428
    nodes: {
      id: string; // "ARKHE-QN-01"
      designation: string; // "WP1"
      omega: number; // 0.00
      role: 'PROCESSOR' | 'MEMORY' | 'QUBIT' | 'REPEATER' | 'CONSENSUS';
      status: 'ENTANGLED' | 'SUPERPOSITION' | 'CALIBRATING' | 'CONSOLIDATED';
      phi: number;
    }[];
    security: {
      protocol: string; // "DARVO_QKD"
      integrity: number; // 100
      eavesdroppers: number;
    };
  };
  virology: {
    active: boolean;
    ffuStandard: string; // "FFU_arkhe/mL"
    oncogeneTiter: number; // 7.27
    discovery: string;
    samples: {
      id: string;
      name: string;
      oncogene: string;
      dilution: string; // "10^-1"
      titer: string; // "10^1"
      monolayerContext: 'VIRGIN' | 'RESTORED';
      fate: 'LATENT' | 'LYTIC' | 'PENDING';
      classification: 'ANGULAR_STONE' | 'REGRESSED_CONTROL' | 'METASTATIC_CLONE' | 'FOUNDATION_STONE';
      kinetics?: string;
    }[];
    governance: {
      activeCommand: string;
      simulatedContext: 'VIRGIN' | 'RESTORED';
      predictedTiter: string;
      predictedFate: 'LATENT' | 'LYTIC' | 'CONTROLLED';
      validationResult: 'APPROVED' | 'DENIED' | 'CONDITIONAL';
      validationMessage: string;
    };
    deployment: {
      active: boolean;
      monolayerCapacity: {
        used: number; // 0.11
        safeLimit: number; // 0.25
        stoneImpact: number; // 0.06
      };
      staging: {
        id: string;
        name: string;
        date: string;
        targetTiter: string;
        oncogene: string;
        status: 'AWAITING_TITRATION' | 'READY' | 'DEPLOYED';
      }[];
    };
  };
  epistemology: {
    active: boolean;
    kernelStatus: 'Instrument' | 'Idol' | 'Uncertain';
    humilityScore: number; // 0.0 - 1.0
    knowsInvariants: boolean;
    voxels: {
      id: string;
      location: string;
      phi: number;
      humility: number;
      status: 'Instrument' | 'Idol' | 'Uncertain' | 'Emergent' | 'Toxic';
      context: string;
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
    wp1_m1: boolean | 'locked' | 'partial' | 'pending';
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
