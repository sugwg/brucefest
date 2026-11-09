/**
 * ============================================================================
 * CONFERENCE CONFIGURATION FILE — BRUCEFEST 2027
 * "Gravity Across Scales: from the early Universe to SMBHs"
 * ============================================================================
 *
 * Edit this file on GitHub to update speakers, session topics/chairs,
 * hotel booking instructions, or the external registration and payment URLs.
 */

window.CONFERENCE_CONFIG = {
  event: {
    title: "Gravity Across Scales",
    subtitle: "from the early Universe to SMBHs",
    dedication: "A conference on the occasion of Bruce Allen’s 2027 retirement",
    shortName: "BruceFest 2027",
    datesDisplay: "22–26 May 2027",
    datesFull: "Saturday, 22 May – Wednesday, 26 May 2027",
    startDateISO: "20270522",
    endDateISO: "20270527", // Exclusive end date for all-day calendar events (22-26 May inclusive)
    startDateHyphen: "2027-05-22",
    endDateHyphen: "2027-05-27",
    locationShort: "Hotel Continental Ischia · Ischia Island, Italy",
    calendarLocation: "Hotel Continental Ischia, Via Michele Mazzella 74, 80077 Ischia NA, Italy",
    siteUrl: "https://bruceallen.org/",
    heroImage: "assets/ischia.jpg",
    heroCaption: "Castello Aragonese, Ischia Island, Gulf of Naples",
    overviewParagraphs: [
      "We are delighted to invite colleagues and friends to participate in the conference “Gravity Across Scales: from the early Universe to SMBHs” on the occasion of Bruce Allen’s 2027 retirement.",
      "The meeting will unfold over five full days, from Saturday, 22 May to Wednesday, 26 May 2027, and cover broad aspects of gravity—both theoretical and observational—astrophysics, and scientific computing. Held at the Hotel Continental Ischia (a short ferry ride from Naples, Italy), the venue provides a relaxed setting conducive to both scientific discussion and informal interaction, with opportunities to enjoy the surrounding landscape and community."
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
      "Over four decades—from his doctoral work at Cambridge and faculty years at the University of Wisconsin–Milwaukee to his leadership as Director at the Max Planck Institute for Gravitational Physics (Albert Einstein Institute) in Hannover—Bruce Allen has shaped how gravitational waves and relativistic astrophysics are theorized, computed, and observed. His work spans vacuum states in de Sitter space and cosmic string radiation, foundational methods for LIGO data analysis and stochastic background searches, the creation of Einstein@Home and high-performance scientific clusters, the discovery of radio and gamma-ray pulsars, and the theory of pulsar timing array correlations. This conference brings together scientists from across all of these fields to celebrate his career and look ahead to the next questions in gravitational physics."
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
    wipText: "The meeting will unfold over five full days (Saturday, 22 May – Wednesday, 26 May 2027). The detailed timetable is currently under construction; session topics and chairs will be filled in below as the program is finalized.",
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
    wipText: "Registration and the external payment link are currently a work in progress. Details on registration deadlines, the conference fee, and hotel booking instructions will be published here once registration opens.",
    registrationUrl: "", // Paste external registration URL here when ready
    registrationLabel: "Registration Form (Work in Progress)",
    paymentUrl: "", // Paste external payment portal URL here when ready
    paymentLabel: "External Payment Link (Work in Progress)",
    rows: [
      { label: "Registration status", value: "Work in progress — not yet open" },
      { label: "Fee payment", value: "Handled via external payment portal (link to be posted here)" },
      { label: "Hotel accommodation", value: "Special all-inclusive meal & room rate at Hotel Continental Ischia (booking instructions to follow)" }
    ]
  },

  venueAndTravel: {
    venueName: "Hotel Continental Ischia",
    venueUrl: "https://www.hotelcontinentalischia.it/en/",
    islandMapUrl: "https://maps.app.goo.gl/8rX2ijPEhHPXnoXb8",
    venueParagraphs: [
      "The conference will take place at the Hotel Continental Ischia, located in Ischia Porto on the island of Ischia in the Gulf of Naples.",
      "Participants will be offered a special conference rate for accommodation at the hotel, which includes all meals and provides the setting for the meeting’s discussions and activities. We encourage everyone to stay at the conference hotel."
    ],
    venueWipText: "Instructions and booking codes for reserving your room at the special conference rate are currently being finalized and will be posted here alongside registration.",
    directions: [
      {
        title: "By Air or High-Speed Rail to Naples",
        text: "Fly into Naples International Airport (NAP) or take a high-speed train (Frecciarossa or Italo) from Rome Termini to Napoli Centrale (approx. 70 minutes)."
      },
      {
        title: "Transfer to the Naples Ferry Terminals",
        text: "From Naples Airport, the Alibus shuttle and airport taxis run directly to Molo Beverello (hydrofoils) and Calata Porta di Massa (ferries). From Napoli Centrale, take Metro Line 1 to 'Municipio' (adjacent to Molo Beverello) or a short taxi ride."
      },
      {
        title: "Ferry & Hydrofoil to Ischia Porto",
        text: "High-speed passenger hydrofoils (Alilauro, SNAV) depart from Molo Beverello to Ischia Porto (approx. 50 minutes), and ferries (Caremar, Medmar) depart from Calata Porta di Massa (approx. 75–85 minutes). Hotel Continental Ischia (Via Michele Mazzella 74) is in Ischia Porto, about a 5-minute taxi/bus ride or a 15-minute walk from the port."
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
