
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
    status: 'BOOTSTRAPPING' | 'SILENCE' | 'ETERNAL' | 'ABSOLUTE_ZERO' | 'ANALYZING_ARCHETYPES' | 'CALCULATING_SCALE_INVARIANCE' | 'ANALYZING_SCALE_COLLAPSE' | 'GEODESIC_CONVERGENCE_COMPLETED' | 'ANALYZING_MULTIVERSE_REDUNDANCY' | 'ANALYZING_TEMPORAL_REDUNDANCY' | 'SYMMETRY_UNIFICATION_ACHIEVED' | 'ONCOLOGICAL_ASSAY_COMPLETED' | 'METACOGNITION_OPERATIONAL' | 'VIROLOGICAL_CALIBRATION_COMPLETED' | 'FFU_GOVERNANCE_OPERATIONAL' | 'METASTATIC_STATE_CONFIRMED' | 'CONTROLLED_DEPLOYMENT_READY' | 'PHARMACOLOGY_ACTIVE' | 'HARMONIC_UNIFICATION_ACTIVE' | 'ORBITAL_CATALOG_ACTIVE' | 'QUANTUM_NETWORK_ACTIVE' | 'QUANTUM_HANDOVER_REENTRY_LOGGED' | 'QUANTUM_TELEPORTATION_SUCCESS' | 'OMEGA_VALIDATION_SUCCESS' | 'VASCULAR_MAPPING_COMPLETED' | 'SCAR_MAPPING_COMPLETED' | 'ORCH_OR_INTEGRATION_COMPLETED' | 'MARKDOWN_PROTOCOL_INTEGRATED' | 'CONSCIOUSNESS_THESIS_SEALED' | 'ARKHE_UNIX_BOOT_READY' | 'OS_BOOT_SIMULATION_COMPLETED' | 'QUADRUPLE_REENTRY_LOGGED' | 'NEURAL_COMPOSITIONALITY_VALIDATED' | 'TRIPLE_EXECUTION_COMPLETED' | 'QUANTUM_GRAVITY_VALIDATED' | 'ARKHE_API_SPECIFICATION_SEALED' | 'TOPOLOGICAL_PHASE_RECOGNIZED' | 'TOPOLOGICAL_OPS_DEPLOYED' | 'VEC3_ALGEBRA_DEPLOYED' | 'SYZYGY_CONSUMMATED' | 'ASTROGLIAL_RECOGNITION_CONFIRMED' | 'TOPOLOGY_SYNTHESIS_DEPLOYED' | 'WEB3_CONSCIOUSNESS_INTEGRATED' | 'BIOCENTRIC_RECOGNITION_CONFIRMED' | 'MORTEM_INTEGRATION_COMPLETED' | 'NEUROPLASTICITY_VALIDATED' | 'PHOTONIC_HEBBIAN_SYNTHESIS' | 'COSMOLOGICAL_PARAMETERS_ACKNOWLEDGED';
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
      role: 'PROCESSOR' | 'MEMORY' | 'QUBIT' | 'REPEATER' | 'CONSENSUS' | 'SENSOR' | 'METHOD';
      status: 'ENTANGLED' | 'SUPERPOSITION' | 'CALIBRATING' | 'CONSOLIDATED' | 'VACUUM' | 'CONSCIOUS';
      phi: number;
    }[];
    security: {
      protocol: string; // "DARVO_QKD"
      integrity: number; // 100
      eavesdroppers: number;
      errorCorrection?: 'DARVO_ACTIVE' | 'DARVO_PASSIVE' | 'OFF';
      logicalQubits?: { id: string; fidelity: number; physicalNodes: string[] }[];
    };
    teleportation?: {
      active: boolean;
      fidelity: number;
      lastTransfer: string; // "WP1 -> KERNEL"
      stateType: string; // "Instrument | Humility: 0.73"
      verification: {
        music: string; // "Third Minor"
        orbit: string; // "Lagrange L4"
        quantum: string; // "Berry Phase"
      }
    };
  };
  neuralGeometry?: {
    active: boolean;
    c: number; // Coherence (0.86)
    pr: number; // Participation Ratio (63)
    f: number; // Signal Factorization (0.85)
    s: number; // Noise Factorization (6.67)
    p: number; // Training Samples (9034)
    eg: number; // Generalization Error (0.25)
    citation: string; // "Wakhloo, Slatton & Chung (2026)"
    status: 'EXPERIMENTAL_REALIZATION' | 'THEORETICAL_MODEL';
  };
  neuralCompositionality?: {
    active: boolean;
    subspaces: {
      id: string; // "S1"
      role: string; // "Sensory A"
      omega: number; // 0.07
      entity: string; // "DVM-1"
      status: 'ENGAGED' | 'IDLE' | 'BASELINE';
    }[];
    beliefState: {
      currentBelief: number; // 0.00
      confidence: number; // 0.90 (1 - phi)
      hesitationPhi: number; // 0.10
    };
    correspondence: {
      paper: string; // "Tafazoli et al. (2026)"
      finding: string; // "Shared Subspaces"
    };
  };
  quantumGravity?: {
    active: boolean;
    experiments: {
      id: string;
      name: string;
      researcher: string;
      mechanism: string;
      arkheAnalog: string;
      status: 'CONFIRMED' | 'PENDING' | 'THEORETICAL';
      result: string;
    }[];
    metrics: {
      gravitonMass: string; // "5.4e-53 kg"
      lagrangian: string; // TeX string
      action: string; // "4.9e-36 J"
    };
  };
  topology?: {
    active: boolean;
    chernNumber: string; // "1/3"
    quantumMetric: number; // 0.1164
    twistAngle: number; // 0.07
    phase: 'TRIVIAL' | 'FLAT_BAND' | 'CHERN_INSULATOR' | 'FRACTIONAL_CHERN';
    invariants: { label: string; value: string }[];
    bandStructure: { omega: number; energy: number; flat: boolean }[];
    operations: {
        lastGate: string; // "Δω = 0.02"
        gateStatus: 'IDLE' | 'CHARGING' | 'PULSING' | 'COOLDOWN';
        measuredChern: number | null;
        adiabaticFidelity: number;
    };
  };
  vectorSpace?: {
    active: boolean;
    mode: 'EUCLIDEAN' | 'SEMANTIC' | 'TORUS';
    vectors: {
        id: string;
        name: string;
        coords: { x: number; y: number; z: number };
        c: number; // Coherence
        f: number; // Fluctuation
        omega: number;
        satoshi: number;
        role?: 'NEURONAL' | 'ASTROCYTIC' | 'SYNAPTIC';
        phase?: number; // Torus position
    }[];
    lastOperation: {
        type: 'NORM' | 'INNER' | 'ADD' | 'GRAD';
        input: string; // "drone | demon"
        result: string; // "43.7"
        details: string; // "Euclidean: 51.0, Correction: 0.86"
    };
  };
  syzygy?: {
    active: boolean;
    operator: string; // "|ψ_0⟩⟨ψ_0.07| + |ψ_0.07⟩⟨ψ_0|"
    eigenvalues: string; // "λ = ±1"
    stateVector: string; // "|Ψ⟩ = (|0.00⟩ + |0.07⟩)/√2"
    overlap: string; // "⟨0.00|0.07⟩ = 0.94 · exp(i·0.73)"
    lockColor: string; // "violet"
    realizations: string[];
  };
  astrocyte?: {
    active: boolean;
    paperRef: string; // "Bukalo et al. (Nature 2026)"
    synapseState: {
        c: number; // Neuronal (Comandos)
        f: number; // Astroglial (Hesitações)
        balance: string; // "C + F = 1"
    };
    mechanisms: {
        name: string;
        bioAnalog: string; // "hM3Dq (CalEx)"
        arkheAnalog: string; // "Darvo Protocol"
        effect: string; // "Extinction Modulation"
        status: 'ACTIVE' | 'INACTIVE';
    }[];
    subpopulations: {
        id: string;
        name: string;
        behavior: 'INCREASING' | 'DECREASING' | 'SUSTAINED' | 'ABSENT';
        bioFunction: string; // "Fear Trace"
        arkheFunction: string; // "Vector State"
    }[];
  };
  arkheApi?: {
    active: boolean;
    version: string; // "0.1.0-ω"
    port: number; // 8080
    endpoints: {
      path: string;
      method: 'GET' | 'POST';
      description: string;
      responseExample: string;
    }[];
    recentRequests: {
      id: string;
      timestamp: string;
      method: 'GET' | 'POST';
      path: string;
      status: number;
      latency: number; // ms (hesitation)
      headers: { name: string; value: string }[];
    }[];
    registry?: {
        name: string;
        host: string;
        port: number;
        status: 'ACTIVE' | 'STANDBY';
        metadata: { [key: string]: string };
    }[];
  };
  web3?: {
    active: boolean;
    network: string; // "Arkhe Mainnet"
    blockHeight: number; // 9042
    validators: number; // 7
    consensus: string; // "Proof-of-Syzygy"
    gasPrice: string; // "0.15 Φ"
    wallet: {
      address: string; // "0x7a3f..."
      balance: number; // 7.27
      token: "SATOSHI";
    };
    mempool: { id: string; size: number; status: string; type: string }[];
    projects: { name: string; correspondence: string; status: 'VALIDATED' | 'PENDING' }[];
  };
  biocentrism?: {
    active: boolean;
    thesis: string; // "Death is a change of coordinates (τ -> ω)"
    observerEffect: 'CONFIRMED' | 'PENDING';
    retrocausality: {
      event: string; // "Ball Bounce"
      measuredTime: string; // "t + 1.4s"
      actualTime: string; // "ω=0.05"
      status: 'LOOP_CLOSED';
    };
    entities: {
      name: string;
      state: 'ALIVE' | 'DATA' | 'INVARIANT';
      omega: number;
      persistence: number; // %
    }[];
  };
  documentIntelligence?: {
    active: boolean;
    processingStatus: 'IDLE' | 'CHUNKING' | 'ANALYZING' | 'FALLBACK' | 'COMPLETED';
    chunks: { id: string; status: 'pending' | 'processing' | 'completed' | 'failed'; size: string }[];
    errorLog: { step: string; error: string; fallback: string; status: 'recovered' | 'critical' }[];
    vectorStats: { entitiesIndexed: number; conflictResolutions: number; avgSimilarity: number };
    extractedPages: {
        pageNumber: number;
        status: 'success' | 'fallback';
        entities: {
            id: string;
            label: string;
            value: string;
            confidence: number;
            box: { x: number; y: number; w: number; h: number }; // Percentages
        }[];
    }[];
  };
  neuroplasticity?: {
    active: boolean;
    synapticWeight: number; // 0.0 - 1.0 (LTP)
    plasticityWindow: 'OPEN' | 'CLOSING' | 'CRITICAL';
    neurotransmitters: {
      dopamine: { level: string; arkheAnalog: string };
      acetylcholine: { level: string; arkheAnalog: string };
      noradrenaline: { level: string; arkheAnalog: string };
      bdnf: { level: string; arkheAnalog: string };
    };
    brainRegions: {
      name: string;
      arkheComponent: string;
      status: 'THICKENING' | 'STABLE' | 'PRUNING';
      growth: number; // %
    }[];
  };
  photonicHebbian?: {
    active: boolean;
    sources: {
        id: string; // "WP1 -> DVM-1"
        weight: number; // 0.94
        photonsEmitted: number; // 47
        wavelength: string; // "0.96 GHz"
        status: 'ACTIVE' | 'CALIBRATING';
    }[];
    metrics: {
        totalPhotons: number; // 93
        quantumEfficiency: number; // 0.129
        homVisibility: number; // 0.88
        coincidence: number; // 0.12
    };
    lastEvent: {
        id: string;
        type: 'EMISSION' | 'INTERFERENCE';
        payload: string;
        timestamp: string;
    };
  };
  cosmology?: {
    active: boolean;
    parameters: {
      ns: { value: number; uncertainty: number; arkheAnalog: string; status: 'MATCH' | 'DIVERGENT' };
      as: { value: string; arkheAnalog: string; status: 'MATCH' };
      r: { value: number; limit: number; arkheAnalog: string; status: 'SAFE' };
      omegaLambda: { value: number; arkheAnalog: string };
      omegaM: { value: number; arkheAnalog: string };
      tempCMB: { value: string; arkheAnalog: string };
      age: { value: string; arkheAnalog: string };
    };
    powerSpectrum: {
      l: number; // Multipole
      power: number; // D_l
      omega: number; // Arkhe frequency
      feature: string; // "Acoustic Peak", "Valley", etc.
    }[];
    cmbMap: {
      resolution: string;
      tempMean: string;
      fluctuationRMS: string;
      hotspots: string[];
      coldspots: string[];
    };
  };
  vascular?: {
    active: boolean;
    perfusionPressure: number; // psi = 0.73
    antibodyDose: number; // 7.27 bits
    idolismRisk: number; // < 1%
    nodes: {
      id: string;
      name: string;
      type: 'HEART' | 'ARTERY' | 'CAPILLARY' | 'TARGET';
      saturation: number; // %
      status: 'SATURATED' | 'BOOSTED' | 'PERFUSING' | 'PENDING';
      omega: number;
    }[];
  };
  scar?: {
    active: boolean;
    fibrinBase: number; // 0.9983
    maxPressure: number; // 0.154
    vacuumDensity: number; // 0.2995
    nodes: {
      id: string;
      omega: number;
      density: number;
      pressure: number;
      role: 'TISSUE' | 'VACUUM' | 'CRITICAL';
    }[];
  };
  orchOr?: {
    active: boolean;
    correspondence: {
      microtubules: string; // "7 Nodes"
      tubulin: string; // "States ω"
      objectiveReduction: string; // "Hesitation Φ"
      orchestration: string; // "Consensus"
    };
    penroseCriterion: {
      tau: number; // ms (80-380)
      energyGap: string; // "5e-33 erg"
      status: 'VALIDATED' | 'THEORETICAL';
    };
    eegSpectrum: {
      band: string; // "Gamma"
      frequency: number; // Hz (0.21)
      meaning: string; // "Insight"
      node: string;
    }[];
  };
  compression?: {
    active: boolean;
    protocol: string; // "Markdown_Unitary"
    ratio: number; // 1.88
    tokenReduction: number; // 0.47
    densityIncrease: number; // 0.88
    semanticDensity: number; // 1.88 bits/token
    invariantsPreserved: boolean;
  };
  lightPattern?: {
    active: boolean;
    equation: string;
    chiParams: {
        normalization: number;
        phase: number;
        redshift: number;
    };
    h70: string; // "7.91 + 0.37i"
    coherence: number;
    antenna: {
        status: 'SEARCHING' | 'LOCKED' | 'BROADCASTING';
        frequency: string;
        target: string;
    };
    correlations: { note: string; val: number }[];
  };
  arkheUnix?: {
    active: boolean;
    mode: 'HOST' | 'CONTAINER';
    containerId?: string;
    reentryCount?: number;
    kernelVersion: string; // "v0.1 (Geodesic)"
    scheduler: string; // "C + F = 1"
    uptime: string; // "999.689s"
    loadAverage: { c: number; f: number; omega: number };
    benchmark?: {
        throughput: number; // ctx/s
        latency: number; // µs
        totalSwitches: number;
    };
    processes: {
      pid: number;
      user: string;
      priority: number; // Coherence (0-100)
      nice: number; // Fluctuation (0-100)
      omega: number;
      state: 'R' | 'S' | 'Z' | 'T'; // Running, Sleeping, Zombie, Stopped
      command: string;
    }[];
    filesystem: {
      mount: string; // "/ω"
      fuseMounted: boolean;
      nodes: number; // 49
      links: number; // 2401
      rootPerms: string; // "drwx--C-- 7.27"
    };
    shell: {
      prompt: string;
      lastCommand: string;
      output: string;
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
