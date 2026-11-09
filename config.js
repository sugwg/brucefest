/**
 * ============================================================================
 * CONFERENCE CONFIGURATION FILE — BRUCEFEST 2027
 * "Gravity Across Scales: from the early Universe to SMBHs"
 * ============================================================================
 *
 * HOW TO UPDATE THIS WEBSITE ON GITHUB:
 * 1. Click the pencil icon ("Edit this file") on GitHub in `config.js`.
 * 2. Update any text, links, speakers, or schedule sessions below.
 * 3. Change `wip: true` to `wip: false` on any section once it is finalized.
 * 4. Commit changes — GitHub Pages will update automatically within ~1 minute.
 */

window.CONFERENCE_CONFIG = {
  // --------------------------------------------------------------------------
  // 1. CORE EVENT METADATA
  // --------------------------------------------------------------------------
  event: {
    title: "Gravity Across Scales",
    subtitle: "From the Early Universe to SMBHs",
    honoreeBadge: "A Workshop Celebrating the Career of Prof. Bruce Allen",
    shortName: "BruceFest 2027",
    datesDisplay: "Saturday, 22 May – Wednesday, 26 May 2027",
    startDateISO: "20270522",
    endDateISO: "20270527", // Exclusive end date for all-day .ics events (May 22-26 inclusive)
    locationShort: "Ischia Island, Italy",
    locationDetail: "Gulf of Naples, Italy (Exact conference venue & hotel TBA)",
    statusBanner: {
      enabled: true,
      badge: "Save the Date",
      message: "22–26 May 2027 • Ischia Island, Italy — Registration, payment link, speakers, and detailed schedule are currently work in progress."
    },
    description: [
      "From quantum fields in the early Universe and cosmic strings to the direct detection of gravitational waves with LIGO, distributed volunteer supercomputing with Einstein@Home, and the nanohertz stochastic background revealed by Pulsar Timing Arrays, Bruce Allen's scientific career spans orders of magnitude in frequency, energy, and cosmic time.",
      "Join colleagues, collaborators, former students, and friends on Ischia Island from May 22–26, 2027 for five days of scientific talks, discussions, and celebration exploring gravitational physics across all scales."
    ]
  },

  // --------------------------------------------------------------------------
  // 2. SCIENTIFIC TOPICS (From SOC Planning Document)
  // --------------------------------------------------------------------------
  topics: [
    {
      title: "Curved Spacetime QFT & Cosmic Strings",
      scale: "10⁻³⁵ m – Cosmic Horizon",
      category: "Early Universe & Theory",
      description: "Quantum field theory in curved spacetime, vacuum states in de Sitter space, and gravitational radiation from cosmic string networks."
    },
    {
      title: "Early Universe Gravitational Waves",
      scale: "10⁻¹⁰ – 10¹⁰ Hz",
      category: "Early Universe & Theory",
      description: "Primordial gravitational-wave relics, phase transitions, inflation, and cosmological signatures across the gravitational spectrum."
    },
    {
      title: "LIGO & Ground-Based Detectors",
      scale: "10 – 10⁴ Hz",
      category: "Interferometry & Observations",
      description: "Kilometer-scale laser interferometry, observational milestones, data analysis foundations, and next-generation ground-based observatories."
    },
    {
      title: "Stochastic Gravitational-Wave Background",
      scale: "10⁻⁹ – 10³ Hz",
      category: "Backgrounds & Correlations",
      description: "Cross-correlation methods, optimal filtering, astrophysical and cosmological backgrounds, and isotropic/anisotropic searches."
    },
    {
      title: "Compact Binary Coalescences (CBCs)",
      scale: "1 – 10³ M☉",
      category: "Transient Sources",
      description: "Matched filtering, binary black holes and neutron stars, waveform modeling, population inference, and tests of general relativity."
    },
    {
      title: "Continuous Gravitational Waves (CWs)",
      scale: "10 – 10³ Hz",
      category: "Persistent Sources",
      description: "Long-duration searches for rapidly rotating non-axisymmetric neutron stars, hierarchical semi-coherent methods, and galactic targets."
    },
    {
      title: "Detector Calibration",
      scale: "Sub-percent Precision",
      category: "Instrumentation & Metrology",
      description: "Photon calibrators, strain reconstruction, time-dependent calibration systematics, and precision metrology for gravitational-wave astronomy."
    },
    {
      title: "Clusters & High-Performance Computing",
      scale: "Petaflops & Global Citizen Science",
      category: "Computing Infrastructure",
      description: "Dedicated gravitational-wave compute clusters (such as Atlas), distributed volunteer computing via Einstein@Home, and algorithmic advances."
    },
    {
      title: "Pulsars",
      scale: "Millisecond Rotators",
      category: "Relativistic Astrophysics",
      description: "Radio and gamma-ray pulsar astrophysics, precision timing, neutron star equations of state, and relativistic binary laboratories."
    },
    {
      title: "Discovering New Pulsars",
      scale: "All-Sky Surveys",
      category: "Observational Surveys",
      description: "Blind periodicity and binary searches in radio and Fermi-LAT gamma-ray data, citizen-science discoveries, and deep survey pipelines."
    },
    {
      title: "Pulsar Timing Arrays (PTAs) & SMBHs",
      scale: "10⁻⁹ – 10⁻⁷ Hz • 10⁸–10¹⁰ M☉",
      category: "Nanohertz Gravity",
      description: "The Hellings–Downs spatial correlation curve, cosmic variance, supermassive black hole binaries, and nanohertz gravitational-wave astronomy."
    }
  ],

  // --------------------------------------------------------------------------
  // 3. TRIBUTE: BRUCE ALLEN'S CAREER ACROSS SCALES
  // --------------------------------------------------------------------------
  tribute: {
    heading: "Celebrating Bruce Allen: A Career Across Scales",
    lead: "Throughout four decades of research, Bruce Allen has shaped how we theorize, compute, and observe the gravitational Universe—bridging mathematical relativity, large-scale scientific computing, and observational discovery.",
    highlights: [
      {
        era: "Cambridge, Tufts & Early Universe Theory",
        title: "Quantum Fields in Curved Spacetime & Cosmic Strings",
        summary: "Completing his PhD at Cambridge under Stephen Hawking (1984), Bruce made foundational contributions to quantum field theory in de Sitter space (the Allen–Faccioli/Chernikov–Tagirov vacuum states) and pioneered studies of gravitational radiation emitted by cosmic strings."
      },
      {
        era: "UW–Milwaukee & LIGO Scientific Collaboration",
        title: "Foundations of Gravitational-Wave Data Analysis",
        summary: "At the University of Wisconsin–Milwaukee, Bruce built one of the premier gravitational-wave groups, co-developing the foundational mathematical framework for stochastic gravitational-wave background searches (Allen & Romano 1999), signal-consistency veto tests (χ² time-frequency tests), and LIGO data analysis."
      },
      {
        era: "Einstein@Home & High-Performance Computing",
        title: "Global Citizen Science & Compute Clusters",
        summary: "To tackle the immense computational cost of blind searches for continuous gravitational waves and radio/gamma-ray pulsars, Bruce launched Einstein@Home (2005) and spearheaded the design of high-efficiency Linux compute clusters, discovering dozens of new radio and gamma-ray pulsars."
      },
      {
        era: "Max Planck Institute for Gravitational Physics (AEI Hannover)",
        title: "Observational Relativity, LIGO Detections & Pulsar Timing Arrays",
        summary: "Joining AEI Hannover as Director in 2007, Bruce led the Observational Relativity and Cosmology division through the historic first direct detections of gravitational waves (GW150914 and beyond) and authored deep theoretical analyses of the Hellings–Downs correlation and its cosmic variance in Pulsar Timing Arrays."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. INVITED SPEAKERS (Currently Work in Progress)
  // --------------------------------------------------------------------------
  speakers: {
    wip: true,
    wipBadge: "Work in Progress",
    wipTitle: "Invited Speakers — To Be Announced",
    wipMessage: "The Scientific Organizing Committee is currently finalizing the invitee list across all eleven workshop themes. Confirmed speakers will be listed here as responses are received.",
    // When speakers are confirmed, add objects here:
    // { name: "First Last", affiliation: "Institution", topic: "Session / Topic" }
    confirmedList: []
  },

  // --------------------------------------------------------------------------
  // 5. SCIENTIFIC PROGRAM / SCHEDULE (Currently Work in Progress)
  // --------------------------------------------------------------------------
  schedule: {
    wip: true,
    wipBadge: "Under Construction",
    wipNote: "Session topic assignments, session chairs, and talk timetables for Saturday, May 22 – Wednesday, May 26, 2027 are currently being organized by the SOC. The session skeleton below is a placeholder.",
    sessions: [
      {
        sessionName: "Morning Session I",
        dayLabel: "Day / Date TBD",
        topic: "TBD",
        chair: "TBD",
        talks: []
      },
      {
        sessionName: "Afternoon Session I",
        dayLabel: "Day / Date TBD",
        topic: "TBD",
        chair: "TBD",
        talks: []
      },
      {
        sessionName: "Morning Session II",
        dayLabel: "Day / Date TBD",
        topic: "TBD",
        chair: "TBD",
        talks: []
      },
      {
        sessionName: "Afternoon Session II",
        dayLabel: "Day / Date TBD",
        topic: "TBD",
        chair: "TBD",
        talks: []
      },
      {
        sessionName: "Morning Session III",
        dayLabel: "Day / Date TBD",
        topic: "TBD",
        chair: "TBD",
        talks: []
      },
      {
        sessionName: "Afternoon Session III",
        dayLabel: "Day / Date TBD",
        topic: "TBD",
        chair: "TBD",
        talks: []
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 6. REGISTRATION & EXTERNAL PAYMENT PORTAL (Currently Work in Progress)
  // --------------------------------------------------------------------------
  registration: {
    wip: true,
    wipBadge: "Work in Progress — Links Coming Soon",
    wipMessage: "Registration and conference fee payment will be handled via external portals. These links are currently being set up and will be activated here once registration opens.",
    registrationUrl: "", // Put external registration URL here when ready
    registrationButtonText: "Registration Portal (Under Construction)",
    paymentUrl: "", // Put external payment portal URL here when ready
    paymentButtonText: "External Payment Portal (Under Construction)",
    details: [
      {
        label: "Registration Opening Date",
        value: "To Be Determined (TBD)"
      },
      {
        label: "Registration Deadline",
        value: "To Be Determined (TBD)"
      },
      {
        label: "Conference Fee & Banquet",
        value: "To Be Determined — Payment will be processed via an external link provided on this page"
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 7. VENUE, TRAVEL & ISCHIA ISLAND GUIDE
  // --------------------------------------------------------------------------
  venueAndTravel: {
    venueWip: true,
    venueWipBadge: "Venue Details TBD",
    venueName: "Ischia Island, Gulf of Naples, Italy",
    venueDescription: "The exact conference venue and hotel block booking instructions on Ischia Island are currently being finalized and will be posted here soon.",
    hotelBlockNote: "Information on reserved hotel room blocks, special conference rates, and booking deadlines is currently under construction.",
    travelSteps: [
      {
        step: "1. Arrive in Naples (Air or High-Speed Rail)",
        title: "Naples International Airport (NAP) or Napoli Centrale",
        description: "Fly into Naples International Airport (NAP) or take an Italian high-speed train (Frecciarossa / Italo) from Rome (approx. 1 hr 10 min from Roma Termini) to Napoli Centrale station."
      },
      {
        step: "2. Transfer to Naples Ferry Ports",
        title: "Molo Beverello or Calata Porta di Massa",
        description: "From Naples Airport, the Alibus shuttle or a taxi (fixed airport tariff available; ask the driver before boarding) goes directly to Molo Beverello (hydrofoils) and Calata Porta di Massa (car/passenger ferries). From Napoli Centrale, take Metro Line 1 to 'Municipio' (a 3-minute walk to Molo Beverello) or a short taxi ride."
      },
      {
        step: "3. Hydrofoil or Ferry to Ischia Island",
        title: "Gulf of Naples Crossing (50–85 mins)",
        description: "High-speed passenger hydrofoils (Alilauro, SNAV) depart regularly from Molo Beverello to Ischia Porto, Casamicciola, and Forio (~50 minutes). Regular ferries (Caremar, Medmar) depart from Calata Porta di Massa (~75–85 minutes)."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 8. ORGANIZING COMMITTEE
  // --------------------------------------------------------------------------
  committees: {
    soc: [
      { name: "Duncan Brown", affiliation: "Syracuse University", status: "Confirmed" },
      { name: "Robert Caldwell", affiliation: "Dartmouth College", status: "Confirmed" },
      { name: "Irene Di Palma", affiliation: "Sapienza Università di Roma", status: "Confirmed" },
      { name: "Stephen Fairhurst", affiliation: "Cardiff University", status: "Confirmed" },
      { name: "Badri Krishnan", affiliation: "Radboud University Nijmegen & AEI Hannover", status: "Confirmed" },
      { name: "Alex Nitz", affiliation: "Syracuse University", status: "Confirmed" },
      { name: "Maria Alessandra Papa", affiliation: "AEI Hannover & Leibniz University Hannover", status: "Confirmed" },
      { name: "Xavier Siemens", affiliation: "Oregon State University", status: "Confirmed" }
    ],
    coordination: [
      {
        name: "Gabriele Richardson",
        role: "Conference Administration & Coordination",
        affiliation: "Max Planck Institute for Gravitational Physics (Albert Einstein Institute), Hannover"
      }
    ]
  }
};
