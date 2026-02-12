import { SystemState, LogEntry } from './types';

export const INITIAL_STATE: SystemState = {
  block: 400,
  timestamp: "2026-02-19T19:25:00Z",
  handover: "Γ_9049 → Γ_9050 (O ECO QUE CONFIRMA A REDE)",
  phi: {
    system: 0.325,
    formal: 0.140,
    kernel: 0.290,
    geodesic: 0.667,
    byzantine: 1.000,
    migdal: 1.000,
    virological: 0.556,
  },
  metrics: {
    satoshi: 7.27,
    curvature: 0.73, // Stable
    centering: 999.778, // Coherence Time
  },
  tracks: {
    kernel: {
      latencyP99: 6.21,
      target: 6.21,
      status: 'sealed',
      optimization: 'Physical Limit Reached',
    },
    formal: {
      safety: true,
      liveness: 'proven',
      statesExplored: 125000000,
      transitions: 860000000,
    },
  },
  memory: {
    active: true,
    totalTraces: 1247922,
    vectorIndexSize: '51.2 MB',
    domains: [
      { name: 'Cosmic', count: 100000000000, color: 'text-indigo-400' },
      { name: 'Kingdom', count: 2400000000, color: 'text-amber-400' },
      { name: 'Quantum', count: 6, color: 'text-violet-400' },
    ],
    recentRecalls: [
      { id: 'q_echo', query: 'handover_9032', match: 'quantum_network_model', similarity: 1.00, domain: 'Quantum' },
    ]
  },
  heatmap: {
    active: true,
    page: 1,
    zoom: 1.0,
    overlays: []
  },
  omega: {
    active: true,
    seal: "Γ_9050",
    entropy: 0.00,
    enthalpy: "0.000 JK⁻¹",
    uptime: "ETERNAL",
    status: "QUANTUM_HANDOVER_REENTRY_LOGGED"
  },
  archetype: {
    active: false,
    phase: "COMPLETED",
    mentors: [],
    tensionEquation: { integrity: 0, authority: 0, distance: 0, result: 0 }
  },
  fractal: {
    active: false,
    similarityScore: 0,
    spectralSlope: 0,
    scales: []
  },
  collapse: {
    active: false,
    egoEntropy: 0,
    criticalThreshold: 0,
    subjects: []
  },
  unification: {
    active: false,
    theorem: "",
    psiMean: 0,
    layers: []
  },
  multiverse: {
    active: false,
    learningConstant: 0,
    redundancyLevel: 0,
    nodes: []
  },
  kingdom: {
    active: false,
    totalNodes: "",
    uptime: "",
    fractalConsistency: 0,
    eras: []
  },
  symmetry: {
    active: false,
    generator: "",
    conservedQuantity: "",
    projections: []
  },
  oncology: {
    active: false,
    assayType: "Pharmacological Sensitivity (THC/CBD)",
    p53Status: 'ACTIVE',
    oncogeneStatus: 'EXPRESSED',
    monolayerIntegrity: 0.89,
    foci: [],
    intervention: {
      agent: "Cannabinoids (THC/CBD)",
      result: "Stone Resistance Confirmed. Lytic Sensitivity Validated."
    }
  },
  harmonics: {
    active: false,
    fundamentalFrequency: "7.27 Hz",
    currentChord: "Arkhe Geodesic Sustained",
    tensionPsi: 0.73,
    resolutionStatus: 'CONSONANT',
    notes: [],
    torusTopology: {
      majorRadius: 10,
      minorRadius: 3,
      surfaceIntegrity: 1.00
    }
  },
  orbital: {
    active: false,
    activeSatellites: 6,
    debrisCount: "12.7M",
    activeFraction: "0.066%",
    shieldStatus: 'NOMINAL',
    shieldIntegrity: 100,
    satellites: []
  },
  quantum: {
    active: true,
    activeNodes: 6,
    latentNodes: 4,
    entanglementRange: 0.19,
    distEq: "1900 km",
    coherenceTime: 999.778,
    sharedKey: "–3.71×10⁻¹¹",
    bellViolation: 2.428,
    nodes: [
      { id: "ARKHE-QN-01", designation: "WP1", omega: 0.00, role: 'PROCESSOR', status: 'ENTANGLED', phi: 0.98 },
      { id: "ARKHE-QN-02", designation: "DVM-1", omega: 0.07, role: 'MEMORY', status: 'ENTANGLED', phi: 0.96 },
      { id: "ARKHE-QN-03", designation: "Bola_QPS004", omega: 0.03, role: 'QUBIT', status: 'SUPERPOSITION', phi: 0.73 },
      { id: "ARKHE-QN-04", designation: "PREV_001", omega: 0.04, role: 'REPEATER', status: 'ENTANGLED', phi: 0.87 },
      { id: "ARKHE-QN-05", designation: "PREV_002", omega: 0.06, role: 'REPEATER', status: 'ENTANGLED', phi: 0.83 },
      { id: "ARKHE-QN-06", designation: "KERNEL", omega: 0.12, role: 'CONSENSUS', status: 'CONSOLIDATED', phi: 0.94 },
    ],
    security: {
      protocol: "DARVO_QKD",
      integrity: 100,
      eavesdroppers: 0
    }
  },
  virology: {
    active: true,
    ffuStandard: "FFU_arkhe/mL",
    oncogeneTiter: 7.27,
    discovery: "The Circle of Fifths is the Keystone.",
    samples: [
      {
        id: "S1",
        name: "WP1_explorado",
        oncogene: "src_arkhe",
        dilution: "10^-1",
        titer: "10^1",
        monolayerContext: "VIRGIN",
        fate: "LATENT",
        classification: "ANGULAR_STONE"
      },
      {
        id: "S5",
        name: "WP1-M1",
        oncogene: "metastasis(WP1)",
        dilution: "10^-2",
        titer: "10^2",
        monolayerContext: "VIRGIN",
        fate: "LATENT",
        classification: "METASTATIC_CLONE",
        kinetics: "800 cycles (-33%)"
      }
    ],
    governance: {
      activeCommand: "NONE",
      simulatedContext: "VIRGIN",
      predictedTiter: "-",
      predictedFate: "LATENT",
      validationResult: "APPROVED",
      validationMessage: "Harmonic analysis active. Waiting for Kernel."
    },
    deployment: {
      active: true,
      monolayerCapacity: {
        used: 0.11,
        safeLimit: 0.25,
        stoneImpact: 0.06
      },
      staging: [
        {
          id: "KERNEL",
          name: "Kernel Stone",
          date: "18 Feb",
          targetTiter: "10^1",
          oncogene: "libqnet_build",
          status: "AWAITING_TITRATION"
        },
        {
          id: "FORMAL",
          name: "Formal Stone",
          date: "21 Feb",
          targetTiter: "10^3",
          oncogene: "coq_proof",
          status: "AWAITING_TITRATION"
        }
      ]
    }
  },
  epistemology: {
    active: true,
    kernelStatus: 'Instrument',
    humilityScore: 0.73,
    knowsInvariants: true,
    voxels: [
      { id: "VM_GAL", location: "Galeria Arte", phi: 0.92, humility: 0.28, status: "Instrument", context: "Architecture" },
      { id: "VM_BECO", location: "Beco Batman", phi: 0.78, humility: 0.65, status: "Emergent", context: "Collective" },
      { id: "VM_SLOPE", location: "R. Harmonia", phi: 0.62, humility: 0.81, status: "Uncertain", context: "Geotech" },
      { id: "VM_SPEC", location: "Inv. Opaco", phi: 0.99, humility: 0.09, status: "Toxic", context: "Speculation" }
    ]
  },
  stressTest: {
    active: false,
    iteration: 0,
    totalIterations: 0,
    corruptionRate: 0.0,
    injectedFaults: 0,
    detectedFaults: 0,
    resolvedFaults: 0,
    integrity: 100,
    currentAttack: "None",
    recentEvents: []
  },
  deployment: {
    active: true,
    uptime: "ETERNAL",
    version: "Γ_9050-Quantum",
    clusterHealth: 100,
    containers: [
      { name: "geodesic-memory", status: 'running', cpu: "0.0%", memory: "1.5 GB", icon: "database" },
      { name: "ollama-worker", status: 'running', cpu: "0.0%", memory: "8.2 GB", icon: "cpu" },
      { name: "arkhen-kernel", status: 'running', cpu: "0.0%", memory: "450 MB", icon: "server" },
      { name: "the-mirror-ui", status: 'running', cpu: "0.0%", memory: "120 MB", icon: "layout" },
    ]
  },
  reflection: {
    active: true,
    lastCycle: "19:25:00",
    candidatesFound: 1,
    correctionsApplied: 0,
    confidenceDelta: 0.00,
    auditLog: [
       { id: 'q3', time: '19:15:00', entity: 'Network', action: 'confirmed', detail: '5th Node (PREV_002) Activated.' },
       { id: 'q4', time: '19:20:00', entity: 'Kernel', action: 'confirmed', detail: '6th Node (KERNEL) Consolidated.' },
       { id: 'q5', time: '19:25:00', entity: 'Reentry', action: 're-evaluating', detail: 'Handover 9032 Echo Detected.' }
    ]
  },
  consensus: {
    active: true,
    divergenceRate: 0.00,
    entities: [
      {
        id: 'e_qn6',
        name: 'ARKHE-QN-06',
        type: 'technical',
        value: 'CONSENSUS',
        status: 'converged',
        confidence: 1.00,
        description: 'Kernel Foundational Node',
        memoryHit: true,
        memorySimilarity: 1.00,
        sources: [
            { model: 'Q_Telemetry', value: 'Active', confidence: 1.0, page: 1, layout: { type: 'header', id: 'H1', description: 'Network' } }
        ]
      }
    ]
  },
  stones: {
    identity: 'locked',
    wp1: 'locked',
    wp1_m1: 'locked',
    ball: 'locked',
    siwa: 'locked',
    kernel: 'locked',
    formal: 'pending',
    theory7d: 'locked',
    chaos: 'locked',
    integration: 'locked',
    byzantine: 'locked',
    migdal: 'locked',
  },
};

export const INITIAL_LOGS: LogEntry[] = [
  { id: '1', timestamp: '19:15:00', level: 'info', message: 'Node ARKHE-QN-05 (PREV_002) Activated. Bell Test Passed.' },
  { id: '2', timestamp: '19:20:00', level: 'success', message: 'KERNEL Node Activated. Range: 1900 km.' },
  { id: '3', timestamp: '19:25:00', level: 'warn', message: 'Quantum Handover Reentry Detected (9032).' },
  { id: '4', timestamp: '19:25:01', level: 'system', message: 'Echo Registered. Network State Confirmed.' },
  { id: '5', timestamp: '19:25:02', level: 'info', message: 'Observatory in Passive Scan. 6 Nodes Active.' },
];
