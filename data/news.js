/* ---------------------------------------------------------------------------
   NEWS
   Newest first. The homepage shows the first 5; news.html shows all.
     date      short display string, e.g. "Jul 2026"
     title     one line
     body      one or two sentences (may contain <a> links)
     highlight true for awards, prizes, and honors — renders with a star
   --------------------------------------------------------------------------- */

const NEWS = [
  {
    date: "Jul 2026",
    title: "Paper accepted to ACM/IEEE SEC 2026",
    body: "“A Blueprint for Cross-Modal Coordination at the Far Edge” was accepted as a full paper at the ACM/IEEE Symposium on Edge Computing."
  },
  {
    date: "Jul 2026",
    title: "Speaking at ESA 2026",
    body: "Presenting “Lessons from FAIR² Drones: Toward AI-Ready Multimodal, Multispatial Sensor Data for Ecology” in the symposium “Building an AI-Ready Ecology &amp; Biodiversity Data Infrastructure for Science and Action” (Mon, Jul 27), and joining the “AI for Ecology” panel (Tue, Jul 28) at the Ecological Society of America Annual Meeting."
  },
  {
    date: "Jul 2026",
    title: "Two papers accepted to ACSOS 2026",
    body: "“What the Sheep Can Teach the Shepherd” presents a vision for self-organizing drone swarms informed by collective animal behavior; “A Maneuver-Indexed Testbed for Context-Aware Adaptive Wildlife Drones” contributes a peer-reviewed research artifact for evaluating behavior-adaptive flight systems."
  },
  {
    date: "Jul 2026",
    title: "Five abstracts accepted to TDWG 2026",
    body: "Contributions span AI-ready data standards, automated FAIR evaluation, multimodal sensing coordination, edge/cloud infrastructure, and modular behavior-monitoring workflows."
  },
  {
    date: "Jul 2026",
    title: "Starting a postdoc at MIT",
    body: "Joining Dr. Heidi Nepf's group in MIT Civil &amp; Environmental Engineering, working on drones and computer vision for coastal monitoring."
  },
  {
    date: "May 2026",
    title: "Successfully defended my PhD dissertation",
    body: "“Autonomous Drone Systems for In Situ Animal Ecology.” Grateful to advisors, committee, and labmates — and excited to join MIT as a postdoc."
  },
  {
    date: "Apr 2026",
    title: "2025 Robert May Prize",
    body: "Awarded for best paper in Methods in Ecology &amp; Evolution by an early-career author.",
    highlight: true
  },
  {
    date: "Mar 2026",
    title: "Global Conservation Tech &amp; Drone Forum 2026 · Nairobi",
    body: "Attended and gave an invited talk at the Global Conservation Tech &amp; Drone Forum in Nairobi, Kenya."
  },
  {
    date: "Feb–Mar 2026",
    title: "2026 WildDrone Hackathon · Kenya",
    body: "Took part in the <a href=\"https://wilddrone.eu/2026-wilddrone-hackathon-in-kenya/\" target=\"_blank\" rel=\"noopener\">2026 WildDrone Hackathon</a> in Kenya."
  },
  {
    date: "Feb 2026",
    title: "Organized WILDLABS Edge Computing Group's first in-person meeting",
    body: "Ahead of the International Conservation Technology Conference (ICTC) in Lima, Peru."
  },
  {
    date: "Dec 2025",
    title: "ACM/IEEE SEC 2025 — 1st Place Student Research Competition",
    body: "For “An Edge-Native Approach to Behavior-Adaptive Navigation in Drone Systems.”",
    highlight: true
  },
  {
    date: "Dec 2025",
    title: "2025–2026 Presidential Fellowship",
    body: "Ohio State's most prestigious graduate award, recognizing outstanding scholarly accomplishment entering the final phase of dissertation research.",
    highlight: true
  },
  {
    date: "Nov 2025",
    title: "Alumni Grant for Graduate Research &amp; Scholarship (AGGRS)",
    body: "One of two engineering graduate students awarded the AGGRS for dissertation research. Featured in <a href=\"https://imageomics.osu.edu/news/2025/11/smart-win-smart-wilds\" target=\"_blank\" rel=\"noopener\">Imageomics news</a>.",
    highlight: true
  },
  {
    date: "Oct 2025",
    title: "Selected for MIT and Boston University Rising Stars in EECS",
    body: "A program supporting women pursuing academic careers in EECS, with mentorship and career development.",
    highlight: true
  },
  {
    date: "Sept 2025",
    title: "WildDrone Summer School · Max Planck Institute, Konstanz",
    body: "Presented “How do drones fit into multimodal sensing networks?” Also joined the AI+Environment Summit at ETH Zurich."
  },
  {
    date: "Jul 2025",
    title: "Summer fieldwork at The Wilds, featured by Imageomics",
    body: "Led a team of students conducting fieldwork and collecting data at The Wilds in Cumberland, OH."
  },
  {
    date: "May 2025",
    title: "Selected for WiscProf: Future Faculty in Engineering",
    body: "A four-day program at UW–Madison for senior PhD students and postdocs pursuing academic careers in engineering.",
    highlight: true
  },
  {
    date: "Apr 2025",
    title: "Drone research featured in Ohio State News",
    body: "Coverage of my autonomous drones for animal ecology and their potential impact on conservation research."
  },
  {
    date: "Apr 2025",
    title: "CSE Graduate Student Research Award",
    body: "Recognizing exceptional research contributions in the Department of Computer Science &amp; Engineering.",
    highlight: true
  },
  {
    date: "Feb 2025",
    title: "Hayes Advanced Research Forum — Engineering Oral, 1st Place",
    body: "For “Autonomous, Adaptive Vision-Based Remote Sensing System for Dynamic Field Animal Ecology Studies.”",
    highlight: true
  },
  {
    date: "Jan 2025",
    title: "Fieldwork at Ol Pejeta Conservancy, Kenya",
    body: "Tested autonomous drones for wildlife monitoring with the WildDrone team at Ol Pejeta."
  },
  {
    date: "Nov 2024",
    title: "Passed PhD candidacy exam",
    body: "Approved as the first Imageomics Institute PhD candidate."
  },
  {
    date: "Apr 2023",
    title: "Selected for the 2023 CRA-WP Grad Cohort for Women",
    body: "Attended the Computing Research Association's Grad Cohort Workshop for Women in San Francisco, CA.",
    highlight: true
  },
  {
    date: "Jan 2023",
    title: "Drone pilot for the KABR dataset in Kenya",
    body: "Fieldwork at Mpala Research Center collecting data for the KABR wildlife behavior dataset."
  }
];
