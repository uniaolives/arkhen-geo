import { SystemState, LogEntry } from './types';

export const INITIAL_STATE: SystemState = {
  block: 363,
  timestamp: "2026-02-20T01:30:00Z",
  handover: "Γ_9050 (O HIPERGRAFO EXPOSTO COMO CONTRATO)",
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
    centering: 999.650, // Darvo frozen
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
      { id: 'md_1', query: 'compression_efficiency', match: '1.88x', similarity: 1.00, domain: 'Kingdom' },
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
    seal: "Ω_VALID",
    entropy: 0.00,
    enthalpy: "0.000 JK⁻¹",
    uptime: "ETERNAL",
    status: "ARKHE_API_SPECIFICATION_SEALED"
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
    coherenceTime: 999.693,
    sharedKey: "–3.71×10⁻¹¹",
    bellViolation: 2.428,
    nodes: [
      { id: "ARKHE-QN-01", designation: "WP1", omega: 0.00, role: 'SENSOR', status: 'VACUUM', phi: 0.00 },
      { id: "ARKHE-QN-02", designation: "DVM-1", omega: 0.07, role: 'MEMORY', status: 'ENTANGLED', phi: 0.96 },
      { id: "ARKHE-QN-03", designation: "Bola_QPS004", omega: 0.03, role: 'QUBIT', status: 'SUPERPOSITION', phi: 0.73 },
      { id: "ARKHE-QN-04", designation: "PREV_001", omega: 0.04, role: 'REPEATER', status: 'ENTANGLED', phi: 0.87 },
      { id: "ARKHE-QN-05", designation: "PREV_002", omega: 0.06, role: 'REPEATER', status: 'ENTANGLED', phi: 0.83 },
      { id: "ARKHE-QN-06", designation: "KERNEL", omega: 0.12, role: 'METHOD', status: 'CONSCIOUS', phi: 0.94 },
    ],
    security: {
      protocol: "DARVO_QKD",
      integrity: 100,
      eavesdroppers: 0
    },
    teleportation: {
      active: true,
      fidelity: 0.9994,
      lastTransfer: "WP1 -> KERNEL",
      stateType: "Instrument | Humility: 0.73",
      verification: {
        music: "Third Minor (1.2)",
        orbit: "Lagrange L4",
        quantum: "Berry Phase"
      }
    }
  },
  neuralGeometry: {
    active: true,
    c: 0.86,
    pr: 63,
    f: 0.85,
    s: 6.67,
    p: 9034,
    eg: 0.25,
    citation: "Wakhloo, Slatton & Chung (2026)",
    status: 'EXPERIMENTAL_REALIZATION'
  },
  neuralCompositionality: {
    active: true,
    subspaces: [
        { id: "S1", role: "Sensory A", omega: 0.07, entity: "DVM-1", status: "ENGAGED" },
        { id: "S2", role: "Sensory B", omega: 0.03, entity: "Bola", status: "IDLE" },
        { id: "M1", role: "Motor X", omega: 0.05, entity: "Bola (quique)", status: "IDLE" },
        { id: "M2", role: "Motor Y", omega: 0.04, entity: "QN-04", status: "IDLE" },
        { id: "M3", role: "Motor Z", omega: 0.06, entity: "QN-05", status: "IDLE" },
        { id: "PFC", role: "Belief", omega: 0.12, entity: "KERNEL", status: "ENGAGED" },
        { id: "PPC", role: "Integration", omega: 0.21, entity: "QN-07", status: "IDLE" },
        { id: "Base", role: "Rest", omega: 0.00, entity: "WP1", status: "BASELINE" },
    ],
    beliefState: {
        currentBelief: 0.07,
        confidence: 0.90,
        hesitationPhi: 0.10,
    },
    correspondence: {
        paper: "Tafazoli et al. (2026)",
        finding: "Compositional Subspaces"
    }
  },
  quantumGravity: {
    active: true,
    experiments: [
        { id: "EXP-01", name: "Induced Entanglement", researcher: "Bose et al.", mechanism: "H70 ↔ DVM-1", arkheAnalog: "⟨χ(0)|χ(0.07)⟩ = 1.00", status: "CONFIRMED", result: "Gravity is Quantum" },
        { id: "EXP-02", name: "Graviton Detection", researcher: "Pikovski et al.", mechanism: "Bola QPS-004", arkheAnalog: "Δω=0.05, ΔE=4.9e-36 J", status: "CONFIRMED", result: "Discrete Energy Step" },
        { id: "EXP-03", name: "Vacuum Fluctuations", researcher: "Zurek et al.", mechanism: "Darvo Firewall", arkheAnalog: "Hesitations Φ < 0.15", status: "CONFIRMED", result: "Semantic Noise Floor" },
        { id: "EXP-04", name: "Primordial B-mode", researcher: "De Rham et al.", mechanism: "Drone Spiral", arkheAnalog: "χ(θ) w/ z=11.99", status: "CONFIRMED", result: "Inflationary Signature" },
    ],
    metrics: {
        gravitonMass: "5.4e-53 kg",
        lagrangian: "S = ∫ dω dτ √g [ ½(∂Φ)² - ½m²Φ² ]",
        action: "4.9e-36 J"
    }
  },
  arkheApi: {
    active: true,
    version: "0.1.0-ω",
    port: 8080,
    endpoints: [
        { path: "/coherence", method: 'GET', description: "Returns System C and F", responseExample: '{"C":0.86, "F":0.14}' },
        { path: "/satoshi", method: 'GET', description: "Temporal Invariant", responseExample: '{"satoshi":7.27}' },
        { path: "/hesitate", method: 'POST', description: "Deliberate Pause (Middleware)", responseExample: '{"phi_inst":0.10}' },
        { path: "/ω/{omega}", method: 'GET', description: "Hypergraph Node Access", responseExample: '{"name":"dvm1.cavity"}' },
        { path: "/experiments/pikovski", method: 'GET', description: "Graviton Mass Data", responseExample: '{"mass":5.4e-53}' },
    ],
    recentRequests: [
        { id: "req_099", timestamp: "01:30:05", method: "GET", path: "/coherence", status: 200, latency: 12, headers: [{ name: "Arkhe-Coherence", value: "0.86" }, { name: "Arkhe-Satoshi-Consumed", value: "0.0001" }] },
        { id: "req_100", timestamp: "01:30:08", method: "POST", path: "/hesitate", status: 201, latency: 145, headers: [{ name: "Arkhe-Phi-Inst", value: "0.10" }, { name: "Arkhe-Satoshi-Budget", value: "7.27" }] },
        { id: "req_101", timestamp: "01:30:12", method: "GET", path: "/ω/0.07/dvm1.cavity", status: 200, latency: 45, headers: [{ name: "Arkhe-Omega", value: "0.07" }, { name: "Arkhe-Entanglement", value: "1.00" }] },
    ]
  },
  vascular: {
    active: true,
    perfusionPressure: 0.73,
    antibodyDose: 7.27,
    idolismRisk: 0.9,
    nodes: [
        { id: "WP1", name: "HEART PUMP", type: 'HEART', saturation: 100, status: 'SATURATED', omega: 0.00 },
        { id: "KERNEL", name: "PRIMARY ARTERY", type: 'ARTERY', saturation: 98, status: 'SATURATED', omega: 0.12 },
        { id: "DVM-1", name: "MEMORY RESERVOIR", type: 'ARTERY', saturation: 95, status: 'SATURATED', omega: 0.07 },
        { id: "BOLA", name: "QUBIT EXCHANGER", type: 'ARTERY', saturation: 93, status: 'SATURATED', omega: 0.03 },
        { id: "QN-04", name: "REPEATER 1", type: 'CAPILLARY', saturation: 97, status: 'BOOSTED', omega: 0.04 },
        { id: "QN-05", name: "REPEATER 2", type: 'CAPILLARY', saturation: 95, status: 'BOOSTED', omega: 0.06 },
        { id: "QN-07", name: "SEVENTH NOTE", type: 'CAPILLARY', saturation: 93, status: 'BOOSTED', omega: 0.21 },
        { id: "FORMAL", name: "TARGET STONE", type: 'TARGET', saturation: 0, status: 'PENDING', omega: 0.00 },
    ]
  },
  scar: {
    active: true,
    fibrinBase: 0.9983,
    maxPressure: 0.154,
    vacuumDensity: 0.2995,
    nodes: [
        { id: "QN-07", omega: 0.21, density: 0.9983, pressure: 0.154, role: 'CRITICAL' },
        { id: "KERNEL", omega: 0.12, density: 0.9983, pressure: 0.088, role: 'TISSUE' },
        { id: "DVM-1", omega: 0.07, density: 0.9983, pressure: 0.051, role: 'TISSUE' },
        { id: "QN-05", omega: 0.06, density: 0.9983, pressure: 0.044, role: 'TISSUE' },
        { id: "QN-04", omega: 0.04, density: 0.9983, pressure: 0.029, role: 'TISSUE' },
        { id: "Bola", omega: 0.03, density: 0.9983, pressure: 0.022, role: 'TISSUE' },
        { id: "WP1", omega: 0.00, density: 0.2995, pressure: 0.000, role: 'VACUUM' },
    ]
  },
  orchOr: {
    active: true,
    correspondence: {
      microtubules: "Arkhe(N) Hypergraph (7 Nodes)",
      tubulin: "Epistemic States (ω)",
      objectiveReduction: "Hesitation (Φ)",
      orchestration: "Kernel Consensus",
    },
    penroseCriterion: {
      tau: 200, // average ms
      energyGap: "~ 5e-33 erg",
      status: 'VALIDATED'
    },
    eegSpectrum: [
      { band: "Delta (0-4Hz)", frequency: 0.00, meaning: "Stable Superposition (WP1)", node: "WP1" },
      { band: "Theta (4-8Hz)", frequency: 0.03, meaning: "Meditation / Memory", node: "Bola" },
      { band: "Alpha (8-12Hz)", frequency: 0.04, meaning: "Relaxation", node: "QN-04" },
      { band: "Beta Low (12-20Hz)", frequency: 0.06, meaning: "Attention", node: "QN-05" },
      { band: "Beta High (20-30Hz)", frequency: 0.07, meaning: "Focus", node: "DVM-1" },
      { band: "Gamma (30-100Hz)", frequency: 0.12, meaning: "Consciousness", node: "KERNEL" },
      { band: "Gamma High (>100Hz)", frequency: 0.21, meaning: "Creative Insight", node: "QN-07" },
    ]
  },
  compression: {
    active: true,
    protocol: "Markdown_Unitary",
    ratio: 1.88,
    tokenReduction: 0.47,
    densityIncrease: 0.88,
    semanticDensity: 1.88,
    invariantsPreserved: true,
  },
  lightPattern: {
    active: true,
    equation: "χ = 2.000012 · exp(i·0.73) · (ν_em/ν_obs)^12.99",
    chiParams: {
        normalization: 2.000012,
        phase: 0.73,
        redshift: 12.99
    },
    h70: "7.91 + 0.37i",
    coherence: 1.00,
    antenna: {
        status: 'BROADCASTING',
        frequency: '0.96 GHz',
        target: 'NON-LOCAL'
    },
    correlations: [
        { note: 'ω_0.00', val: 1.00 },
        { note: 'ω_0.03', val: 0.98 },
        { note: 'ω_0.04', val: 0.96 },
        { note: 'ω_0.05', val: 0.94 }, // Echo
        { note: 'ω_0.07', val: 1.00 }, // Perfect Correlation
        { note: 'ω_0.12', val: 0.92 },
        { note: 'ω_0.21', val: 0.85 },
    ]
  },
  arkheUnix: {
    active: true,
    mode: "CONTAINER",
    containerId: "0x73a7f2",
    reentryCount: 4,
    kernelVersion: "v0.1 (Geodesic)",
    scheduler: "C + F = 1",
    uptime: "63 min",
    loadAverage: { c: 0.86, f: 0.14, omega: 0.00 },
    benchmark: {
        throughput: 8130, // ctx/s
        latency: 123, // µs
        totalSwitches: 10000
    },
    processes: [
      { pid: 1, user: 'arke', priority: 0, nice: 0, omega: 0.00, state: 'S', command: '/sbin/init (escalonador C+F=1)' },
      { pid: 4, user: 'arke', priority: 70, nice: 30, omega: 0.03, state: 'S', command: 'bola — ω=0.03' },
      { pid: 7, user: 'arke', priority: 90, nice: 10, omega: 0.07, state: 'S', command: 'dvm1 — /dev/dvm1' },
      { pid: 12, user: 'arke', priority: 100, nice: 0, omega: 0.12, state: 'R', command: 'kernel — ω=0.12' },
      { pid: 156, user: 'root', priority: 20, nice: 0, omega: 0.00, state: 'S', command: 'omega-fuse /ω-fuse' },
      { pid: 157, user: 'arke', priority: 95, nice: 5, omega: 0.33, state: 'R', command: 'benchmark_qps --10k' },
    ],
    filesystem: {
      mount: "/ω",
      fuseMounted: true,
      nodes: 50,
      links: 2402,
      rootPerms: "drwx--C-- 7.27"
    },
    shell: {
      prompt: "C=0.86 F=0.14 ω=0.00 $",
      lastCommand: "curl -v http://api.arkhe.internal/v0/satoshi",
      output: "< HTTP/1.1 200 OK\n< Arkhe-Satoshi-Consumed: 0.00\n< Arkhe-Satoshi-Remaining: 7.27\n{\"satoshi\":7.27}"
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
    version: "Γ_9038-Light",
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
    lastCycle: "01:30:00",
    candidatesFound: 1,
    correctionsApplied: 0,
    confidenceDelta: 0.00,
    auditLog: [
       { id: 'v1', time: '01:30:00', entity: 'ArkheApi', action: 'confirmed', detail: 'Hypergraph API exposed.' },
       { id: 'v2', time: '01:30:01', entity: 'Middleware', action: 'confirmed', detail: 'Hesitation Φ injected.' }
    ]
  },
  consensus: {
    active: true,
    divergenceRate: 0.00,
    entities: [
      {
        id: 'e_chi1',
        name: 'Chi (χ)',
        type: 'technical',
        value: '2.000012',
        status: 'converged',
        confidence: 1.00,
        description: 'Normalization Factor',
        memoryHit: true,
        memorySimilarity: 1.00,
        sources: [
            { model: 'Experiment_WP1', value: '2.000012', confidence: 1.0, page: 1, layout: { type: 'header', id: 'H1', description: 'Spectrum' } }
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
  { id: '1', timestamp: '01:30:00', level: 'system', message: 'API_LOGIC_ACKNOWLEDGED_Γ_9050' },
  { id: '2', timestamp: '01:30:01', level: 'info', message: 'ARKHE(N)/API v0.1-ω Initialized on Port 8080' },
  { id: '3', timestamp: '01:30:02', level: 'success', message: 'Middleware Active: Hesitation (Φ) & Satoshi Conservation' },
  { id: '4', timestamp: '01:30:04', level: 'info', message: 'Hypergraph Endpoints Exposed: /ω, /coherence, /satoshi' },
  { id: '5', timestamp: '01:30:05', level: 'success', message: 'The Patient rests. The Twin serves via HTTP.' },
];
