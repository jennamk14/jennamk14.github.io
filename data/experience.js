/* ---------------------------------------------------------------------------
   FIELD EXPERIENCE, MENTORSHIP, AWARDS, AND SERVICE
   Mirrors CV/Kline_CV.tex. Newest first throughout.
   --------------------------------------------------------------------------- */

/* Field deployments. `role` is the position held on that campaign. */
const FIELDWORK = [
  {
    site: "Waquoit Bay National Estuarine Research Reserve",
    place: "Massachusetts",
    date: "Summer 2026",
    role: "Team lead and drone pilot",
    body: "Conducted drone fieldwork monitoring salt-marsh habitats with computer vision, supervising a team of undergraduate researchers. Part of the <a href=\"projects.html#coastal\">coastal resilience</a> project with Dr. Heidi Nepf, through MIT's Climate Project."
  },
  {
    site: "Ol Pejeta Conservancy",
    place: "Kenya",
    date: "Feb – Mar 2026",
    role: "Drone pilot",
    body: "Tested a behavior-adaptive drone system for wildlife monitoring. Funded by The Ohio State University Graduate School's Alumni Grants for Graduate Research and Scholarship (AGGRS)."
  },
  {
    site: "The Wilds Conservation Center",
    place: "Ohio",
    date: "Summer 2025",
    role: "Team lead",
    body: "Led a team of a dozen students — undergraduate, master's, and PhD researchers — collecting the SmartWilds multimodal dataset of camera-trap, bioacoustic, and drone data."
  },
  {
    site: "Ol Pejeta Conservancy",
    place: "Kenya",
    date: "Jan 2025",
    role: "Drone pilot",
    body: "Tested the WildWing system and collected the MMLA dataset."
  },
  {
    site: "The Wilds Conservation Center",
    place: "Ohio",
    date: "Summer – Fall 2024",
    role: "Lead drone pilot",
    body: "Tested the WildWing system and collected the MMLA dataset."
  },
  {
    site: "Mpala Research Centre",
    place: "Kenya",
    date: "Jan 2023",
    role: "Lead drone pilot",
    body: "Collected the KABR dataset for in situ animal behavior recognition."
  }
];

/* Student supervision, by institution. */
const MENTORING = [
  {
    org: "Massachusetts Institute of Technology",
    date: "2026 – present",
    body: "Supervised two summer undergraduate researchers on a salt-marsh monitoring study using drones and computer vision."
  },
  {
    org: "The Ohio State University",
    date: "2022 – 2026",
    body: "Supervised five undergraduate researchers, including a team conducting fieldwork at The Wilds Conservation Center, and led a field-campaign team of undergraduate, master's, and PhD students. Student-led projects were published at CV4Animals at CVPR 2026 and SEC 2025."
  },
  {
    org: "University of Bologna",
    date: "2024",
    body: "Co-supervised Denys Grushchak's master's thesis, <em>Herd Monitoring with Autonomous Drones: A Decentralized k-Coverage-Inspired Approach</em>, with Dr. Danilo Pianini. The thesis resulted in two publications at the IEEE International Conference on Autonomic Computing and Self-Organizing Systems (ACSOS)."
  }
];

/* All courses at The Ohio State University, Dept. of Computer Science and Engineering. */
const TEACHING = [
  {
    kind: "Lab Instructor",
    title: "CSE 2111: Modeling and Problem Solving with Spreadsheets and Databases",
    role: "Undergraduate required course",
    body: "Led two 30-student lab sections twice weekly and supervised a team of undergraduate graders. Topics: spreadsheet and database modeling, programming concepts, business applications."
  },
  {
    kind: "Graduate Teaching Assistant",
    title: "CSE 3244: Data Management in the Cloud",
    role: "Senior-level elective",
    body: "Sole graduate teaching assistant responsible for grading and supervising lab assignments and the final project. Topics: data organization on cloud computing architectures, B-tree and hash-based indexing, query optimization fundamentals, data partitioning, and distributed task scheduling."
  }
];

/* Grants, awards, fellowships, and honors.
   `featured: true` also puts the entry on the homepage. */
const AWARDS = [
  { featured: true, name: "Presidential Fellow", detail: "The Ohio State University Presidential Fellowship", date: "2025 – 2026",
    url: "https://gradsch.osu.edu/news/2025/11/24/2025-26-presidential-fellowship-recipients" },
  { featured: true, name: "Robert May Prize", detail: "Best early-career-author paper, British Ecological Society", date: "2025",
    url: "https://methodsblog.com/2026/03/18/jenna-kline-studying-collective-animal-behaviour-with-drones-and-computer-vision/" },
  { featured: true, name: "Student Research Competition, First Place", detail: "ACM/IEEE Symposium on Edge Computing", date: "2025" },
  { featured: true, name: "Departmental Research Award", detail: "Outstanding Graduate Research in CSE, The Ohio State University", date: "2025" },
  { name: "Hayes Forum, First Place", detail: "Hayes Advanced Research Forum, The Ohio State University", date: "2025" },
  { featured: true, name: "Rising Stars in EECS", detail: "MIT &amp; Boston University Rising Stars Workshop", date: "2025",
    url: "https://risingstars-eecs.mit.edu/" },
  { name: "WiscProf Workshop", detail: "Future Faculty in Engineering, University of Wisconsin–Madison", date: "2025",
    url: "https://wiscprof.engr.wisc.edu/" },
  { featured: true, name: "Research Grant", detail: "OSU Alumni Grant for Graduate Research and Scholarship", date: "2025",
    url: "https://imageomics.osu.edu/news/2025/11/smart-win-smart-wilds" },
  { featured: true, name: "NSF NAIRR Pilot Allocation", detail: "Digital Twins for Ecological Research (NAIRR250091)", date: "2025",
    url: "https://nairrpilot.org/awarded-projects?_requestNumber=NAIRR250091" },
  { name: "Best Poster Award", detail: "IEEE Conference on Autonomic Computing and Self-Organizing Systems (ACSOS)", date: "2024" },
  { name: "TDAI Best Poster Award", detail: "OSU Translational Data Analytics Institute Fall Forum", date: "2024" },
  { name: "Travel Grant", detail: "ACM/IEEE Symposium on Edge Computing", date: "2022 &amp; 2024" },
  { name: "CRA-WP Grad Cohort", detail: "Computing Research Association Grad Cohort for Women", date: "2023" },
  { name: "Grace Hopper Scholar", detail: "The Ohio State University ACM-W", date: "2022" }
];

/* Organizing, committees, and community roles.
   `highlight: true` marks a leadership / high-impact role. */
const SERVICE = [
  { name: "Program Committee Member", detail: "AI4Nature Workshop on Computer Vision and AI for Environmental Monitoring, Biodiversity Analysis, and Ecosystem Restoration, IEEE AVSS", date: "2026",
    url: "https://www.ai4nature.tech/" },
  { highlight: true, name: "Community Building Co-chair", detail: "ACSOS 2026; organized the community-building seminar series", date: "2026 – present",
    url: "https://2026.acsos.org/committee/acsos-2026-organizing-committee" },
  { name: "Workshop Organizer &amp; Lead Facilitator", detail: "Edge AI for Conservation workshop, International Conservation Technology Conference (ICTC), Lima, Peru", date: "2026",
    url: "https://jennamk14.github.io/edgeAI-ICTC-2025/index.html" },
  { highlight: true, name: "Group Co-lead", detail: "Edge Computing for Conservation Group, WILDLABS Network", date: "2025 – present",
    url: "https://wildlabs.net/groups/edge-computing" },
  { name: "Workshop Organizer", detail: "Imageomics Image Datapalooza Hackathon", date: "2023",
    url: "https://imageomics.osu.edu/news/2023/08/image-datapalooza-recap" },
  { name: "Volunteer", detail: "Code I/O coding camp, The Ohio State University ACM-W Chapter", date: "2023",
    url: "https://acmwosu.github.io/codeio.html" },
  { name: "Peer Mentor", detail: "Graduate Student Peer Mentoring Program, The Ohio State University", date: "2022 – 2024",
    url: "https://engineering.osu.edu/graduate/peer-mentors" }
];
