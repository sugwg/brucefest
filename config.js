/**
 * ============================================================================
 * CONFERENCE CONFIGURATION FILE — BRUCEFEST 2027
 * "Gravity Across Scales: from the early Universe to SMBHs"
 * ============================================================================
 *
 * Edit this file on GitHub to update speakers, session topics/chairs,
 * venue details, or the external registration and payment URLs.
 */

window.CONFERENCE_CONFIG = {
  event: {
    title: "Gravity Across Scales",
    subtitle: "from the early Universe to SMBHs",
    dedication: "A workshop celebrating the career of Bruce Allen",
    shortName: "BruceFest 2027",
    datesDisplay: "22–26 May 2027",
    datesFull: "Saturday, 22 May – Wednesday, 26 May 2027",
    startDateISO: "20270522",
    endDateISO: "20270527", // Exclusive end date for .ics all-day event (22-26 May inclusive)
    locationShort: "Ischia Island, Italy",
    heroImage: "assets/ischia.jpg",
    heroCaption: "Castello Aragonese, Ischia Island, Gulf of Naples",
    overviewParagraphs: [
      "From quantum fields in curved spacetime and cosmic strings to ground-based laser interferometry, distributed volunteer computing, and nanohertz pulsar timing arrays, gravitational physics connects phenomena across dozens of orders of magnitude in wavelength and mass.",
      "From 22 to 26 May 2027, colleagues, collaborators, and friends will gather on Ischia Island in the Gulf of Naples for a five-day workshop celebrating Bruce Allen and exploring gravitational physics across scales."
    ]
  },

  // Exact topic list from the SOC planning document
  topics: [
    "Curved spacetime QFT, cosmic strings",
    "Early universe GWs",
    "LIGO",
    "Stochastic background",
    "CBCs",
    "CWs",
    "Calibration",
    "Clusters and HP computing",
    "Pulsars",
    "Discovering new pulsars",
    "PTAs"
  ],

  tribute: {
    heading: "In Honor of Bruce Allen",
    image: "assets/bruce-allen.jpg",
    imageCaption: "Bruce Allen at the Max Planck Institute for Gravitational Physics (AEI Hannover)",
    paragraphs: [
      "Over four decades—from his doctoral work at Cambridge and faculty years at the University of Wisconsin–Milwaukee to his leadership as Director at the Max Planck Institute for Gravitational Physics (Albert Einstein Institute) in Hannover—Bruce Allen has shaped how gravitational waves and relativistic astrophysics are theorized, computed, and observed. His work spans vacuum states in de Sitter space and cosmic string radiation, foundational methods for LIGO data analysis and stochastic background searches, the creation of Einstein@Home and high-performance scientific clusters, the discovery of radio and gamma-ray pulsars, and the theory of pulsar timing array correlations. This workshop brings together scientists from across all of these fields to celebrate his contributions and look ahead to the next questions in gravitational physics."
    ]
  },

  speakers: {
    wip: true,
    wipText: "The list of invited speakers is currently in preparation (work in progress) and will be posted here as confirmations are received.",
    // Add confirmed speakers here: { name: "First Last", affiliation: "Institution" }
    confirmedList: []
  },

  schedule: {
    wip: true,
    wipText: "The scientific timetable for Saturday, 22 May – Wednesday, 26 May 2027 is currently under construction. Session topics and chairs will be filled in below as the program is finalized.",
    sessions: [
      { sessionName: "Morning Session I", topic: "To be determined", chair: "TBD" },
      { sessionName: "Afternoon Session I", topic: "To be determined", chair: "TBD" },
      { sessionName: "Morning Session II", topic: "To be determined", chair: "TBD" },
      { sessionName: "Afternoon Session II", topic: "To be determined", chair: "TBD" },
      { sessionName: "Morning Session III", topic: "To be determined", chair: "TBD" },
      { sessionName: "Afternoon Session III", topic: "To be determined", chair: "TBD" }
    ]
  },

  registration: {
    wip: true,
    wipText: "Registration and the external payment link are currently a work in progress. Details on registration deadlines, the conference fee, and the external payment portal will be published here once registration opens.",
    registrationUrl: "", // Paste external registration URL here when ready
    registrationLabel: "Registration Form (Work in Progress)",
    paymentUrl: "", // Paste external payment portal URL here when ready
    paymentLabel: "External Payment Link (Work in Progress)",
    rows: [
      { label: "Registration status", value: "Work in progress — not yet open" },
      { label: "Fee payment", value: "Handled via external payment portal (link to be posted here)" },
      { label: "Registration deadline", value: "To be announced" }
    ]
  },

  venueAndTravel: {
    venueWipText: "The conference venue on Ischia Island and information on reserved hotel room blocks are currently being finalized (work in progress) and will be posted here.",
    travelIntro: "Ischia is located at the northern end of the Gulf of Naples and is reached by regular hydrofoil or ferry from the port of Naples.",
    directions: [
      {
        title: "By Air or Rail to Naples",
        text: "Fly into Naples International Airport (NAP) or take a high-speed train (Frecciarossa or Italo) from Rome Termini to Napoli Centrale (approx. 70 minutes)."
      },
      {
        title: "Transfer to the Naples Port",
        text: "From Naples Airport, the Alibus shuttle and airport taxis run directly to the port terminals at Molo Beverello (hydrofoils) and Calata Porta di Massa (ferries). From Napoli Centrale, take Metro Line 1 to 'Municipio' (adjacent to Molo Beverello) or a short taxi ride."
      },
      {
        title: "Ferry & Hydrofoil Crossing",
        text: "High-speed passenger hydrofoils (Alilauro, SNAV) depart from Molo Beverello to Ischia Porto, Casamicciola, and Forio (approx. 50 minutes). Car and passenger ferries (Caremar, Medmar) depart from Calata Porta di Massa (approx. 75–85 minutes)."
      }
    ]
  },

  committees: {
    soc: [
      { name: "Duncan Brown", affiliation: "Syracuse University" },
      { name: "Robert Caldwell", affiliation: "Dartmouth College" },
      { name: "Irene Di Palma", affiliation: "Sapienza Università di Roma" },
      { name: "Stephen Fairhurst", affiliation: "Cardiff University" },
      { name: "Badri Krishnan", affiliation: "Radboud University Nijmegen & AEI Hannover" },
      { name: "Alex Nitz", affiliation: "Syracuse University" },
      { name: "Maria Alessandra Papa", affiliation: "AEI Hannover & Leibniz University Hannover" },
      { name: "Xavier Siemens", affiliation: "Oregon State University" }
    ],
    coordination: [
      {
        name: "Gabriele Richardson",
        role: "Conference Organization & Administration",
        affiliation: "Max Planck Institute for Gravitational Physics (Albert Einstein Institute), Hannover"
      }
    ]
  }
};
