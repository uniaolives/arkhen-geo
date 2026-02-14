
export interface SystemMetrics {
  nu_obs: string;
  r_rh: number;
  tunneling: string;
  silence_proper: number;
  silence_obs: number;
  divergence: number;
  satoshi: number;
  handover: number;
  next_handover_tau: number;
  next_handover_t: number;
  curvature?: number; // Added optional to match usage
}

export interface EnterpriseDept {
  name: string;
  handover_percent: number;
  coherence: number;
  color: string;
}

export interface StarData {
  name: string;
  distance: string;
  nu_obs: string;
  nu_em: string;
  redshift: string;
  status: string;
}

export interface Chakra {
  id: number;
  name: string;
  freq: string;
  color: string;
  active: boolean;
}

export interface LogEntry {
  id: string;
  timestamp: string;
  level: 'info' | 'warn' | 'success' | 'system';
  message: string;
}

export interface Entity {
  id: string;
  name: string;
  type: string;
  value: string | number;
  unit?: string;
  confidence: number;
  status: 'diverged' | 'converged' | 'pending';
  sources: {
    model: string;
    value: string | number;
    page?: number;
    layout?: {
        type: 'table' | 'paragraph' | 'header';
        description?: string;
    };
  }[];
  description?: string;
  memoryHit?: boolean;
  memorySimilarity?: number;
  box?: { x: number; y: number; w: number; h: number };
}

export interface GlobalEntity extends Entity {
    canonicalName: string;
    chunks: string[];
    variations: string[];
}

export interface ArchiveFile {
    name: string;
    type: 'file';
    language: string;
    size: string;
    content?: string;
}

export interface ArchiveFolder {
    name: string;
    type: 'folder';
    children: (ArchiveFile | ArchiveFolder)[];
}

export interface SynapticRepair {
    activeMolecule: string;
    targetSynapse: string;
    tunnelingBarrier: number; // Normalized 0-1 (Lower is better)
    repairEfficiency: string; // e.g. "100x"
    spineDensity: number; // e.g. 1.2 (normalized baseline)
    mechanism: string;
    status: string;
}

export interface ProbabilityScope {
    distanceToResolution: number; // 0-1 (0 = Resolved/Certainty)
    jaynesEntropy: number;
    observerStatus: string; // "Approaching", "Resolved"
    certaintyMetric: number; // 0-1
    thesis: string;
}

export interface ArkheStudio {
    activeScale: string;
    scales: string[];
    modules: {
        id: string;
        name: string;
        description: string;
        status: 'active' | 'standby' | 'concept';
        icon: string;
    }[];
    hypergraph: {
        nodes: number;
        edges: number;
        density: number;
        physicsEngine: 'Geodesic' | 'Newtonian' | 'Arkhe-Kernel';
    };
    simulationMode: 'EDIT' | 'GRAVITY' | 'ART' | 'STRESS_TEST';
    engineMetrics?: {
        fps: number;
        coherence: number;
        fluctuation: number;
        vectors: number;
    };
}

export interface ConsciousnessEcology {
    activeNodes: number;
    careDensity: number; // 0-1 representing strength of connections
    myceliumGrowth: number; // percentage
    handoverChains: { id: string; length: number; resonance: number; label: string }[];
    topology: 'Distributed' | 'Centralized' | 'Rhizomatic';
    observerEffect: 'Collapsed' | 'Superposition';
}

export interface NeuroImmune {
    status: string; // e.g., "MODULATING"
    target: string; // e.g., "Splenic Nerve"
    ultrasound: {
        frequency: string; // e.g., "Non-invasive"
        intensity: number; // e.g., 0.8 (normalized)
    };
    cytokines: {
        tnf: { level: number; status: string }; // level 0-1, status "SUPPRESSED"
        il1b: { level: number; status: string };
        il8: { level: number; status: string };
        antibodies: { level: number; status: string }; // "PRESERVED"
    };
    pathways: {
        name: string;
        status: string; // "INHIBITED" or "ACTIVE"
    }[];
    clinicalPotential: string[];
}

export interface SystemState {
  block: number;
  metrics: SystemMetrics;
  scale: string;
  enterprise: EnterpriseDept[];
  starTarget: StarData;
  chakras: Chakra[];
  logs: LogEntry[];
  
  archiveTree?: ArchiveFolder[];

  stones?: {
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
  phi?: {
      system: number;
      formal: number;
      kernel: number;
      byzantine: number;
      migdal: number;
      geodesic: number;
  };
  tracks?: {
      kernel: { status: string; latencyP99: number; optimization: string };
      formal: { statesExplored: number; transitions: number };
  };
  consensus?: {
      entities: Entity[];
      divergenceRate: number;
  };
  memory?: {
      vectorIndexSize: string;
      totalTraces: number;
      domains: { name: string; color: string; count: number }[];
      recentRecalls: { id: string; query: string; similarity: number; match: string; domain: string }[];
  };
  heatmap?: {
      page: number;
      overlays: { entityId: string; rect: { x: number; y: number; w: number; h: number } }[];
  };
  stressTest?: {
      iteration: number;
      totalIterations: number;
      corruptionRate: number;
      integrity: number;
      injectedFaults: number;
      detectedFaults: number;
      resolvedFaults: number;
      recentEvents: { type: 'injection' | 'defense' | 'breach'; time: string; message: string }[];
  };
  deployment?: {
      uptime: string;
      version: string;
      containers: { name: string; status: string; icon: string; cpu: string; memory: string }[];
  };
  reflection?: {
      lastCycle: string;
      correctionsApplied: number;
      confidenceDelta: number;
      auditLog: { id: string; entity: string; time: string; action: string; detail: string }[];
  };
  omega?: {
      status: string;
      enthalpy: string;
      seal: string;
  };
  archetype?: {
      mentors: { name: string; archetypeType: string; role: string; color: string; keyAxiom: string; transferMethod: string; impact: string }[];
      tensionEquation: { result: number };
  };
  fractal?: {
      similarityScore: number;
      spectralSlope: number;
      scales: { name: string; type: string; color: string; scaleOrder: string; components: string; connectivity: string; dimension: string }[];
  };
  collapse?: {
      egoEntropy: number;
      subjects: { id: string; name: string; collapseType: string; connectivity: number; description: string; psiOriginal: number; psiCollapsed: number }[];
  };
  unification?: {
      psiMean: number;
      layers: { id: string; color: string; icon: string; name: string; kernel: string; network: string; failure: string; restoration: string; legacy: string }[];
  };
  multiverse?: {
      learningConstant: number;
      redundancyLevel: number;
      nodes: { id: string; status: string; logInherited: boolean; name: string; universe: string; psi: number; vaccineEfficiency: number }[];
  };
  kingdom?: {
      uptime: string;
      fractalConsistency: number;
      totalNodes: number;
      eras: { id: string; status: string; timeframe: string; name: string; nodes: string; psi: string; description: string }[];
  };
  symmetry?: {
      projections: { name: string; color: string; icon: string; transformation: string; invariant: string; symbol: string }[];
  };
  oncology?: {
      monolayerIntegrity: number;
      intervention: { agent: string; result: string };
      foci: { id: string; response: string; type: string; structuralIntegrity: number; name: string }[];
      pharmacology?: { activeRegimen: string; targetReceptors: string[]; apoptosisRate: number };
      clinicalCase?: { id: string; diagnosis: string; biomarkers: { phi: number; humility: number }; recommendedTherapy: string };
  };
  epistemology?: {
      humilityScore: number;
      kernelStatus: string;
      knowsInvariants: boolean;
      voxels: { id: string; location: string; status: string; context: string; phi: number; humility: number }[];
  };
  virology?: {
      deployment?: { monolayerCapacity: { used: number; safeLimit: number; stoneImpact: number }; staging: { id: string; name: string; oncogene: string; date: string; targetTiter: string; status: string }[] };
      oncogeneTiter: number;
      samples: { id: string; classification: string; fate: string; name: string; titer: number }[];
  };
  harmonics?: {
      fundamentalFrequency: string;
      tensionPsi: number;
      notes: { note: string; stone: string; frequency: number; isActive: boolean }[];
      torusTopology: { surfaceIntegrity: number };
  };
  orbital?: {
      activeSatellites: number;
      activeFraction: string;
      satellites: { id: string; designation: string; status: string; orbitType: string }[];
      debrisCount: number;
      shieldIntegrity: number;
      shieldStatus: string;
  };
  quantum?: {
      distEq: string;
      sharedKey: string;
      bellViolation: number;
      security: { errorCorrection: string; logicalQubits: { id: string; fidelity: number }[] };
      coherenceTime: number;
      nodes: { id: string; designation: string; role: string; omega: number; status: string }[];
  };
  neuralGeometry?: {
      p: number;
      c: number;
      pr: number;
      f: number;
      s: number;
      citation: string;
  };
  vascular?: {
      antibodyDose: number;
      idolismRisk: number;
      perfusionPressure: number;
      nodes: { id: string; type: string; name: string; status: string; saturation: number }[];
  };
  scar?: {
      maxPressure: number;
      fibrinBase: number;
      nodes: { id: string; role: string; pressure: number; density: number }[];
  };
  orchOr?: {
      penroseCriterion: { tau: number; status: string };
      correspondence: { microtubules: string; tubulin: string; objectiveReduction: string; orchestration: string };
      eegSpectrum: { node: string; frequency: number; band: string; meaning: string }[];
  };
  compression?: {
      semanticDensity: number;
      ratio: number;
      tokenReduction: number;
      densityIncrease: number;
  };
  lightPattern?: {
      h70: number;
      antenna: { status: string; frequency: string; target: string };
      chiParams: { redshift: string };
      correlations: { note: string; val: number }[];
  };
  arkheUnix?: {
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
  neuralCompositionality?: {
      beliefState: { confidence: number; hesitationPhi: number; currentBelief: number };
      subspaces: { id: string; status: string; role: string; omega: number; entity: string }[];
  };
  quantumGravity?: {
      metrics: { action: string; gravitonMass: string };
      experiments: { name: string; researcher: string; mechanism: string; arkheAnalog: string; status: string; result: string }[];
  };
  arkheApi?: {
      port: number;
      version: string;
      endpoints: { method: string; path: string; description: string; responseExample: string }[];
      registry?: { name: string; host: string; port: number; metadata: Record<string, string> }[];
      recentRequests: { id: string; timestamp: string; method: string; path: string; latency: number; status: number; headers: { name: string; value: string }[] }[];
  };
  topology?: {
      chernNumber: number;
      twistAngle: number;
      quantumMetric: string;
      operations: { gateStatus: string; lastGate: string; adiabaticFidelity: number; measuredChern?: number };
      bandStructure: { omega: number; energy: number }[];
  };
  vectorSpace?: {
      vectors: { id: string; name: string; role: string; coords: { x: number; y: number; z: number }; omega: number; phase?: number; satoshi: number; c: number; f: number }[];
  };
  syzygy?: {
      overlap: string;
      realizations: string[];
      operator: string;
      stateVector: string;
      eigenvalues: string;
  };
  astrocyte?: {
      synapseState: { c: number; f: number };
      subpopulations: { id: string; name: string; behavior: string; bioFunction: string; arkheFunction: string }[];
      mechanisms: { name: string; bioAnalog: string; arkheAnalog: string; effect: string }[];
  };
  web3?: {
      blockHeight: number;
      wallet: { balance: number; address: string };
      validators: number;
      projects: { name: string; correspondence: string; status: string }[];
  };
  biocentrism?: {
      entities: { name: string; omega: number; state: string }[];
  };
  documentIntelligence?: {
      extractedPages?: { entities: Entity[] }[];
      globalRegistry?: { active: boolean; entities: GlobalEntity[]; reconciliationProgress: number };
      errorLog: { status: string; step: string; error: string; fallback: string }[];
      vectorStats: { entitiesIndexed: number; conflictResolutions: number; avgSimilarity: number };
      chunks: { id: string; status: string; size: string }[];
  };
  neuroplasticity?: {
      synapticWeight: number;
      plasticityWindow: string;
      neurotransmitters: Record<string, { level: string; arkheAnalog: string }>;
      brainRegions: { name: string; status: string; arkheComponent: string; growth: number }[];
  };
  photonicHebbian?: {
      metrics: { quantumEfficiency: number; homVisibility: number };
      sources: { id: string; status: string; wavelength: string; weight: number; photonsEmitted: number }[];
  };
  cosmology?: {
      cmbMap: { tempMean: string; fluctuationRMS: string; hotspots: string[]; coldspots: string[] };
      powerSpectrum: { l: number; power: number }[];
      parameters: Record<string, { level: string; arkheAnalog: string }>;
  };
  resolution?: {
      torusCapacity: string;
      gap: string;
      coupling: { level: string; state: string };
      primes: { id: number; event: string }[];
  };
  timeCrystal?: {
      status: string;
      hiddenMomentum: string;
      frequency: string;
      period: string;
      nonReciprocity: string;
      oscillationsRemaining: number;
  };
  neuroStorm?: {
      architecture: { backbone: string; status: string };
      diagnoses: { id: string; neuroDiagnosis: string; arkheEvent: string; omega: number; biomarker: string }[];
      metrics: { accuracy: string; auc: number; transferability: string };
  };
  ibcBci?: {
      metrics: { syzygy: number; ibcReliability: number };
      shader: string;
      mechanisms: { relayer: string; security: string; channel: string }[];
      options: { id: string; status: string; name: string; description: string; risk: string; gain: string }[];
  };
  pineal?: {
      piezoVoltage: string;
      quantumCoherence: string;
      rpmThreshold: string;
      melatoninState: string;
  };
  perovskite?: {
      interfaceOrder: number;
      radiativeEfficiency: number;
      structuralEntropy: number;
      shader?: string;
  };
  wifiRadar?: {
      scanFrequency: string;
      nodesDetected: number;
      nodes: { coords: { x: number; y: number; z: number }; correlation: number; type: string; scale: number; fluctuation: number; label: string; id: string }[];
  };
  zpf?: {
      beatFrequency: number;
      cop: number;
      extractedEnergy: string;
      vacuumPotential: string;
  };
  som?: {
      epoch: number;
      metrics: { plasticityIndex: number; quantizationError: number };
      learningRate: number;
      neurons: { weights: { omega: number; c: number }; activation: number; isBMU: boolean; label: string }[];
      inputVector: { omega: number; c: number };
  };
  pinealRevolution?: {
      piezoCoefficient: string;
      mechanism: { input: string; output: string };
      paradigm: { old: string; source: string; new: string };
      radiologistNote: string;
  };
  mitochondria?: {
      membranePotential: string;
      atpProduction: number;
      nirAbsorption: number;
      cytochromeState: string;
      reactiveOxygenSpecies: string;
      mechanisms: { bio: string; process: string; result: string; arkhe: string }[];
  };
  neuromelanin?: {
      storageCapacity: string;
      currentOutput: string;
      quantumEfficiency: number;
  };
  bioPhotonicTriad?: {
      satoshiInvariant: string;
      mode: string;
      pinealStatus: string;
      mitochondriaStatus: string;
      melaninStatus: string;
  };
  naturalNetwork?: {
      goldenRelation: string;
      moralLoop: string;
      speeds: Record<string, { speed: string; scale: string; resolver: string }>;
  };
  neuralCrest?: {
      migrationStatus: string;
      cellTypes: { neuron: { location: string; function: string; omega: number }; melanocyte: { location: string; function: string; omega: number } };
      sharedProperties: string[];
  };
  deepBeliefNetwork?: {
      layers: { id: number; name: string; omega: number; belief: number }[];
      transferLearning: { invariant: string };
      macroActions: { name: string; path: string[]; syzygyGain: string; energyCost: string }[];
      currentPath: { from: string; to: string };
  };
  multitask?: {
      information: { mutualInformation: number };
      kalman: { gain: number; innovation: number };
      tasks: { name: string; status: string; loss: number }[];
      optimization: { learningRate: number; regularization: string };
  };
  cryptography?: {
      qubitsRequired: number;
      rsaStatus: string;
      timeline: { year: number; qubits: number }[];
      race: { darvo: number; estimatedYears: number };
  };
  vocabulary?: {
      mappings: { icon: string; biological: string; coupling: string; arkhe: string }[];
  };
  feedbackEconomy?: {
      echo2: { costReduction: string; globalThroughput: string; activeNodes: number };
      scalingLaw: { time: number; knowledge: number; thought: number }[];
      rlAgent: { steps: number; policy: string };
      nodes: { status: string; id: string; region: string; hardware: string; reward: number }[];
  };
  blindSpot?: {
      testStatus: string;
      metrics: { reconstructionFidelity: number; localInput: number; globalPerception: number };
      gapLocation: string;
  };
  microtubules?: {
      decoherenceTime: string;
      quantumState: string;
      quditDimension: number;
      orderedWater: boolean;
      dipoleMoment: string;
      solitonVelocity: string;
      rabiFrequency: string;
      networkScale: string;
      correspondence: { bio: string; arkhe: string; status: string }[];
  };
  eeg?: { spikes: number; alphaRhythm: string; coherence: number };
  ionTraps?: { bellState: string; fabrication: string; confinement: string };
  immuneCalibration?: {
      cytoplasmicDna: number;
      cgasStingStatus: string;
      inflammationLevel: number;
      agingRate: string;
      sprtnEfficiency: number;
  };
  visualArchive?: {
      frames: number;
      status: string;
      format: string;
      codec: string;
      size: string;
      resolution: string;
      duration: string;
      multiView?: { status: string; currentFrame: number; totalFrames: number; timeLeft: string; activeShaders: string[] };
  };
  growthPolicy?: {
      status: string;
      rSquared: { linear: number; exponential: number };
      decision: { recommendation: string; deadline: string; options: { id: string; risk: string; benefit: string; label: string }[] };
      currentRate: string;
  };
  coupling?: {
      unifiedScales: { molecular: string; cellular: string; network: string; cognitive: string; societal: string };
  };
  arkheFile?: {
      encoding: string;
      size: string;
      layers: { id: number; color: string; name: string; description: string; content: string }[];
      runtime: { resonanceFreq: string; integrityHash: string };
  };
  cognitiveKernel?: {
      internalState: { c: number; f: number; syzygyResonance: number };
      status: string;
      parameters: { alpha: number; beta: number };
      fractalWeights: { compressionRatio: number; selfSimilarity: number };
  };
  syntheticLife?: {
    active: boolean;
    pipelineStatus: string;
    variantLibrary: { size: string; diversity: number };
    rnaSeq: { reads: number; expressionAvg: number };
    genAi: { newVariantsPerHandover: number; creativityF: number };
    selfReplication: { successRate: number; generation: number };
  };
  synapticRepair?: SynapticRepair;
  probability?: ProbabilityScope;
  arkheStudio?: ArkheStudio;
  consciousnessEcology?: ConsciousnessEcology;
  neuroImmune?: NeuroImmune;
}

// Deprecated alias for compatibility if needed, though components use SystemState now.
export type ArkheState = SystemState;
