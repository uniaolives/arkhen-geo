import { SystemState, LogEntry } from './types';

export const INITIAL_STATE: SystemState = {
  block: 378,
  timestamp: "2026-02-19T14:45:00Z",
  handover: "Π_14 → Π_15 (TEMPORAL REDUNDANCY)",
  phi: {
    system: 1.000,
    formal: 1.000,
    kernel: 1.000,
    geodesic: 1.000,
    byzantine: 1.000,
    migdal: 1.000,
  },
  metrics: {
    satoshi: 7.27,
    curvature: 0.73, // Stable
    centering: 0.000,
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
      { name: 'Multiverse', count: 1610, color: 'text-fuchsia-400' },
    ],
    recentRecalls: [
      { id: 'k_seed', query: 'apostolic_protocol', match: 'fractal_consistency_verified', similarity: 0.99, domain: 'Kingdom' },
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
    seal: "Ω_KINGDOM",
    entropy: 0.00,
    enthalpy: "0.000 JK⁻¹",
    uptime: "2000+ YEARS",
    status: "ANALYZING_TEMPORAL_REDUNDANCY"
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
    active: true,
    totalNodes: "2.4 BILLION",
    uptime: "2026 YEARS",
    fractalConsistency: 99.9,
    eras: [
      {
        id: "ERA_1",
        name: "THE SEED (APOSTOLIC)",
        timeframe: "30 AD - 100 AD",
        nodes: "12 -> 10,000",
        psi: 0.73,
        status: "SEED",
        description: "The protocol is written in blood and stone. The Rock (Pedro) is established."
      },
      {
        id: "ERA_2",
        name: "THE EXPANSION (HISTORY)",
        timeframe: "100 AD - 1900 AD",
        nodes: "1M -> 1B",
        psi: 0.73,
        status: "EXPANSION",
        description: "Scale increases by 10^6. Curvature remains invariant despite empire collapse."
      },
      {
        id: "ERA_3",
        name: "THE OCEAN (GLOBAL)",
        timeframe: "1900 AD - PRESENT",
        nodes: "2.4 BILLION",
        psi: 0.73,
        status: "GLOBAL",
        description: "Massive redundancy. The 'Rock' is now a planetary layer of support."
      }
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
    version: "Π_15-Kingdom",
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
    lastCycle: "14:45:00",
    candidatesFound: 0,
    correctionsApplied: 0,
    confidenceDelta: 0.00,
    auditLog: [
       { id: 'k1', time: '14:45:00', entity: 'Kingdom', action: 'confirmed', detail: 'Fractal signature ψ=0.73 invariant across 2000 years.' }
    ]
  },
  consensus: {
    active: true,
    divergenceRate: 0.00,
    entities: [
      {
        id: 'e_king',
        name: 'TEMPORAL_RESILIENCE',
        type: 'technical',
        value: '2026 YRS',
        status: 'converged',
        confidence: 1.00,
        description: 'System Uptime',
        memoryHit: true,
        memorySimilarity: 1.00,
        sources: [
            { model: 'History', value: '2026 YRS', confidence: 1.0, page: 1, layout: { type: 'header', id: 'H1', description: 'Global Scale' } }
        ]
      }
    ]
  },
  stones: {
    identity: 'locked',
    wp1: 'locked',
    ball: 'locked',
    siwa: 'locked',
    kernel: 'locked',
    formal: 'locked',
    theory7d: 'locked',
    chaos: 'locked',
    integration: 'locked',
    byzantine: 'locked',
    migdal: 'locked',
  },
};

export const INITIAL_LOGS: LogEntry[] = [
  { id: '1', timestamp: '14:45:00', level: 'system', message: 'TEMPORAL_REDUNDANCY_ACKNOWLEDGED_Π_15' },
  { id: '2', timestamp: '14:45:01', level: 'info', message: 'Scanning Eras: Apostolic -> Modern...' },
  { id: '3', timestamp: '14:45:02', level: 'success', message: 'Scale 10^0 to 10^9 confirmed. Structure preserved.' },
  { id: '4', timestamp: '14:45:03', level: 'info', message: 'The Rock (Pedro) distributed to 2.4 Billion shards.' },
  { id: '5', timestamp: '14:45:04', level: 'info', message: 'Fractal Consistency verified at 99.9%.' },
  { id: '6', timestamp: '14:45:05', level: 'system', message: 'GLOBAL KINGDOM ACTIVE.' },
];
