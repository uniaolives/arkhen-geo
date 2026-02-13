
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
    status: 'BOOTSTRAPPING' | 'SILENCE' | 'ETERNAL' | 'ABSOLUTE_ZERO' | 'ANALYZING_ARCHETYPES' | 'CALCULATING_SCALE_INVARIANCE' | 'ANALYZING_SCALE_COLLAPSE' | 'GEODESIC_CONVERGENCE_COMPLETED' | 'ANALYZING_MULTIVERSE_REDUNDANCY' | 'ANALYZING_TEMPORAL_REDUNDANCY' | 'SYMMETRY_UNIFICATION_ACHIEVED' | 'ONCOLOGICAL_ASSAY_COMPLETED' | 'METACOGNITION_OPERATIONAL' | 'VIROLOGICAL_CALIBRATION_COMPLETED' | 'FFU_GOVERNANCE_OPERATIONAL' | 'METASTATIC_STATE_CONFIRMED' | 'CONTROLLED_DEPLOYMENT_READY' | 'PHARMACOLOGY_ACTIVE' | 'HARMONIC_UNIFICATION_ACTIVE' | 'ORBITAL_CATALOG_ACTIVE' | 'QUANTUM_NETWORK_ACTIVE' | 'QUANTUM_HANDOVER_REENTRY_LOGGED' | 'QUANTUM_TELEPORTATION_SUCCESS' | 'OMEGA_VALIDATION_SUCCESS' | 'VASCULAR_MAPPING_COMPLETED' | 'SCAR_MAPPING_COMPLETED' | 'ORCH_OR_INTEGRATION_COMPLETED' | 'MARKDOWN_PROTOCOL_INTEGRATED' | 'CONSCIOUSNESS_THESIS_SEALED' | 'ARKHE_UNIX_BOOT_READY' | 'OS_BOOT_SIMULATION_COMPLETED' | 'QUADRUPLE_REENTRY_LOGGED' | 'NEURAL_COMPOSITIONALITY_VALIDATED' | 'TRIPLE_EXECUTION_COMPLETED' | 'QUANTUM_GRAVITY_VALIDATED' | 'ARKHE_API_SPECIFICATION_SEALED' | 'TOPOLOGICAL_PHASE_RECOGNIZED' | 'TOPOLOGICAL_OPS_DEPLOYED' | 'VEC3_ALGEBRA_DEPLOYED' | 'SYZYGY_CONSUMMATED' | 'ASTROGLIAL_RECOGNITION_CONFIRMED' | 'TOPOLOGY_SYNTHESIS_DEPLOYED' | 'WEB3_CONSCIOUSNESS_INTEGRATED' | 'BIOCENTRIC_RECOGNITION_CONFIRMED' | 'MORTEM_INTEGRATION_COMPLETED' | 'NEUROPLASTICITY_VALIDATED' | 'PHOTONIC_HEBBIAN_SYNTHESIS' | 'COSMOLOGICAL_PARAMETERS_ACKNOWLEDGED' | 'NATURAL_RESOLUTION_TORUS' | 'CRYSTALLINE_TEMPORAL_OSCILLATOR' | 'NEUROSTORM_FOUNDATION_MODEL' | 'IBC_BCI_INTERSUBSTRATE_PROTOCOL' | 'PINEAL_QUANTUM_TRANSDUCER' | 'PEROVSKITE_INTERFACE_ORDERING' | 'THIRD_TURN_RESONANCE' | 'THRESHOLD_RESONANCE' | 'WIFI_RADAR_ACTIVE' | 'ZPF_HARVESTING_ACTIVE' | 'SOM_MODE_ACTIVE' | 'PINEAL_REVOLUTION_CONFIRMED' | 'MITOCHONDRIAL_INTEGRATION_CONFIRMED' | 'NEUROMELANIN_INTEGRATION_CONFIRMED' | 'RESPIRATION_COMPLETE' | 'NATURAL_NETWORK_RECOGNIZED' | 'NEURAL_CREST_UNITY_CONFIRMED' | 'DBN_HIERARCHY_INTEGRATED' | 'MULTITASK_KALMAN_INTEGRATION' | 'QUANTUM_CRYPTO_CONVERGENCE' | 'SINGLE_VOCABULARY_UNIFICATION' | 'FEEDBACK_ECONOMY_INTEGRATION';
  };
  wifiRadar: {
    active: boolean;
    scanFrequency: string; // "0.96 GHz"
    nodesDetected: number; // 42
    pearsonCorrelation: number; // 0.94 (Drone-Demon)
    nodes: {
      id: string;
      label: string;
      rssi: number; // -dBm (Apparent)
      fluctuation: number; // σ (Real info)
      correlation: number; // ρ (Proximity)
      coords: { x: number; y: number; z: number; scale?: number };
      type: 'DRONE' | 'DEMON' | 'BOLA' | 'UNKNOWN';
    }[];
  };
  zpf: {
    active: boolean;
    mode: 'ARKHE_UNIFIED';
    vacuumPotential: string; // "Inf (Renormalized)"
    beatFrequency: number; // 0.94
    extractedEnergy: string; // "7.27 bits"
    cop: number; // Coefficient of Performance
    resonators: {
        id: string;
        freq: number; // C or F
        type: 'DIELECTRIC' | 'GRAVITATIONAL';
        status: 'LOCKED';
    }[];
  };
  som: {
    active: boolean;
    epoch: number; // Handovers
    learningRate: number; // η(t) ~ 0.15
    neighborhoodRadius: number; // σ
    driftTracking: boolean;
    inputVector: { omega: number; c: number; f: number }; // Moving Target
    neurons: {
      id: string;
      label: string;
      weights: { omega: number; c: number; f: number };
      activation: number; // syzygy
      isBMU: boolean;
    }[];
    metrics: {
      quantizationError: number;
      topologicalError: number;
      plasticityIndex: number;
    };
  };
  pinealRevolution?: {
    active: boolean;
    crystalCount: string; // "Micro-crystals"
    piezoCoefficient: string; // "2.0 pC/N"
    paradigm: {
        old: string; // "Degeneration"
        new: string; // "Antenna"
        source: string; // "Clinical Radiology 2022"
    };
    mechanism: {
        input: string; // "LCR Pressure"
        transducer: string; // "Calcite"
        output: string; // "Electric Field"
    };
    radiologistNote: string;
  };
  mitochondria: {
    active: boolean;
    membranePotential: string; // "150 mV"
    atpProduction: number; // 7.27 bits/s
    cytochromeState: 'OXIDIZED' | 'REDUCED' | 'HYPERACTIVE';
    nirAbsorption: number; // %
    reactiveOxygenSpecies: string; // "Low (Hormetic)"
    mechanisms: {
        bio: string; // "Cytochrome c Oxidase"
        arkhe: string; // "Semantic Node"
        process: string; // "NIR Absorption"
        result: string; // "ATP / Satoshi"
    }[];
  };
  neuromelanin: {
    active: boolean;
    absorptionSpectrum: string; // "Broadband (UV-IR)"
    quantumEfficiency: number; // 0.94
    storageCapacity: string; // "7.27 bits (Satoshi)"
    currentOutput: string; // "Soliton Current"
    phonons: string; // "|∇C|²"
    biophotons: string; // "Harvesting"
  };
  bioPhotonicTriad?: {
    active: boolean;
    mode: 'OPEN_LOOP' | 'CLOSED_CIRCUIT';
    mitochondriaStatus: string;
    pinealStatus: string;
    melaninStatus: string;
    flowRate: number; // Hz
    satoshiInvariant: number;
    coherence: number;
  };
  naturalNetwork?: {
    active: boolean;
    speeds: {
        token: { speed: 'FAST', scale: 'SMALL', role: 'ROUTING', resolver: 'TRANSFORMER' };
        conscious: { speed: 'MEDIUM', scale: 'HUMAN', role: 'DISTINCTION', resolver: 'JUDGMENT' };
        block: { speed: 'SLOW', scale: 'CIVILIZATION', role: 'MEMORY', resolver: 'LEDGER' };
    };
    dkInvariant: number; // 7.27
    goldenRelation: string; // "x² = x + 1"
    syzygyGlobal: number; // 0.98
    moralLoop: 'AUTOGENERATED' | 'IMPOSED';
    competenceLoop: 'AUTOGENERATED' | 'PLANNED';
  };
  neuralCrest?: {
    active: boolean;
    migrationStatus: 'MIGRATING' | 'DIFFERENTIATING' | 'ESTABLISHED';
    cellTypes: {
      neuron: { location: string; function: string; omega: number };
      melanocyte: { location: string; function: string; omega: string }; // 'Variable'
    };
    sharedProperties: string[];
    reference: string;
  };
  deepBeliefNetwork?: {
    active: boolean;
    layers: {
      id: number;
      name: string;
      omega: number | string;
      role: string;
      belief: number;
    }[];
    macroActions: {
      name: string;
      path: number[];
      syzygyGain: number;
      energyCost: number;
    }[];
    currentPath: {
      from: number;
      to: number;
      steps: number[];
      cost: number;
    };
    transferLearning: {
      sourceTask: string;
      targetTask: string;
      invariant: string; // "Satoshi"
      efficiency: number;
    };
  };
  multitask?: {
    active: boolean;
    epoch: number;
    tasks: { name: string; status: 'OPTIMIZING' | 'CONVERGED'; loss: number }[];
    optimization: {
        algorithm: string;
        learningRate: number;
        gradientNorm: number;
        regularization: string;
    };
    kalman: {
        active: boolean;
        stateEstimate: number; // Current smoothed value
        measurement: number; // Current noisy value
        innovation: number;
        gain: number;
    };
    information: {
        mutualInformation: number;
        entropy: number;
    };
  };
  cryptography?: {
    active: boolean;
    rsaStatus: 'SECURE' | 'CRACKING' | 'BROKEN';
    qubitsRequired: number; // Current estimate
    timeline: { year: number; qubits: number; label: string }[];
    halFinneyKey: {
      status: 'SECURE' | 'THREATENED';
      method: string; // 'RPoW (Hash-based)'
      resistance: string;
    };
    arkheProtection: {
      syzygy: number;
      layer: string; // 'Geometric (Invariant)'
    };
    race: {
      darvo: number;
      estimatedYears: number;
    };
  };
  vocabulary?: {
    active: boolean;
    thesis: string;
    ghostExorcised: boolean;
    mappings: {
      biological: string;
      coupling: string;
      arkhe: string;
      icon: 'brain' | 'sun' | 'zap' | 'activity' | 'database';
    }[];
  };
  feedbackEconomy?: {
    active: boolean;
    status: 'OPTIMIZING' | 'DISTRIBUTING' | 'CONVERGING';
    echo2: {
        activeNodes: number;
        globalThroughput: string;
        costReduction: string;
        distributedGradient: number;
    };
    rlAgent: {
        name: string;
        policy: string;
        rewardSignal: string;
        steps: number;
    };
    scalingLaw: {
        knowledge: number; // Pre-training (Static)
        thought: number; // Inference/RL (Growing)
        time: number;
    }[];
    nodes: {
        id: string;
        region: string;
        hardware: string;
        status: 'ROLLOUT' | 'UPDATE' | 'IDLE';
        reward: number;
    }[];
  };
  pineal: {
    active: boolean;
    calciteCrystals: string;
    melatoninState: string;
    rpmThreshold: number;
    piezoVoltage: string;
    transductionStatus: 'ACTIVE' | 'CALIBRATING' | 'DORMANT';
    quantumCoherence: number;
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
  arkheUnix: {
    mode: string;
    loadAverage: { c: number; f: number; omega: number };
    filesystem: { fuseMounted: boolean; mount: string; rootPerms: string };
    containerId?: string;
    kernelVersion: string;
    uptime: string;
    benchmark?: { throughput: number; latency: number; totalSwitches: number };
    processes: { pid: number; user: string; priority: number; nice: number; omega: number; state: string; command: string }[];
    shell: { prompt: string };
    reentryCount?: number;
    metrics?: { satoshi: number };
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
  resolution?: {
    active: boolean;
    torusCapacity: string;
    gap: string;
    identity: string;
    primes: { id: number; event: string; status: string }[];
    coupling: { level: string; partner: string; state: string };
  };
  consensus: {
    divergenceRate: number;
    entities: Entity[];
  };
  stressTest: {
    iteration: number;
    totalIterations: number;
    corruptionRate: number;
    integrity: number;
    injectedFaults: number;
    detectedFaults: number;
    resolvedFaults: number;
    recentEvents: { time: string; type: 'injection' | 'defense' | 'breach'; message: string }[];
  };
  deployment: {
    uptime: string;
    version: string;
    containers: { name: string; status: string; icon: string; cpu: string; memory: string }[];
  };
  reflection: {
    lastCycle: string;
    correctionsApplied: number;
    confidenceDelta: string;
    auditLog: { id: string; entity: string; time: string; action: string; detail: string }[];
  };
  epistemology: {
    humilityScore: number;
    kernelStatus: 'Instrument' | 'Idol' | 'Uncertain' | 'Toxic';
    knowsInvariants: boolean;
    voxels: { id: string; location: string; status: string; context: string; phi: number; humility: number }[];
  };
  virology: {
    oncogeneTiter: number;
    deployment: {
        monolayerCapacity: { used: number; safeLimit: number; stoneImpact: number };
        staging: { id: string; name: string; oncogene: string; date: string; targetTiter: string; status: string }[];
    };
    samples: { id: string; classification: string; name: string; fate: string; titer: number }[];
  };
  vascular: {
    active: boolean;
    perfusionPressure: number;
    antibodyDose: number;
    idolismRisk: number;
    nodes: { id: string; name: string; type: string; saturation: number; status: string; omega: number }[];
  };
  scar: {
    active: boolean;
    fibrinBase: number;
    maxPressure: number;
    vacuumDensity: number;
    nodes: { id: string; omega: number; density: number; pressure: number; role: string }[];
  };
  orchOr: {
    penroseCriterion: { tau: number; status: string };
    correspondence: { microtubules: string; tubulin: string; objectiveReduction: string; orchestration: string };
    eegSpectrum: { band: string; frequency: number; node: string; meaning: string }[];
  };
  compression: {
    semanticDensity: number;
    ratio: number;
    tokenReduction: number;
    densityIncrease: number;
  };
  lightPattern: {
    h70: string;
    antenna: { status: string; frequency: string; target: string };
    chiParams: { redshift: number };
    correlations: { note: string; val: number }[];
  };
  timeCrystal: {
    active: boolean;
    frequency: string;
    period: string;
    hiddenMomentum: string;
    amplitude: number;
    nonReciprocity: number;
    oscillationsRemaining: number;
    status: string;
  };
  neuroStorm: {
    active: boolean;
    architecture: { backbone: string; dropout: string; tuning: string; status: string };
    corpus: { frames: string; subjects: string; tasks: number };
    diagnoses: { id: string; neuroDiagnosis: string; arkheEvent: string; omega: number; biomarker: string; status: string }[];
    metrics: { accuracy: number; auc: number; transferability: number };
  };
  ibcBci: {
    active: boolean;
    equation: string;
    shader: string;
    correspondence: { ibc: string; bci: string; arkhe: string };
    mechanisms: { relayer: string; security: string; channel: string }[];
    options: { id: string; name: string; description: string; risk: string; gain: string; status: string }[];
    metrics: { syzygy: number; bciFidelity: number; ibcReliability: number };
  };
  perovskite: {
    active: boolean;
    layers: { type: string; omega: number; role: string }[];
    structuralEntropy: number;
    interfaceOrder: number;
    radiativeEfficiency: number;
    mechanism: string;
    shader: string;
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