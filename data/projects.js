/* ---------------------------------------------------------------------------
   PROJECTS & SYSTEMS
   Order here is the order on the page. `id` becomes the anchor (#wildwing …) —
   DO NOT rename existing ids, they are linked from elsewhere on the web.
     id, name, tagline, blurb (1–2 sentences)
     thrust    1 | 2 | 3   — ties the project to a research thrust
     tags      one or two from data/tags.js (the three research themes)
     image     representative image (omit if none — nothing broken renders)
     collaborators  optional string
     links     project, code, data, paper, preprint, demo, docs, community
     related   array of publication titles, matched against data/publications.js
     page      "projects" (projects.html) or "datasets" (datasets.html)
   --------------------------------------------------------------------------- */

const PROJECTS = [
  {
    id: "wildwing",
    page: "datasets",
    name: "WildWing",
    tagline: "Open-source, autonomous, affordable UAS for animal behaviour video",
    blurb: "An open-source autonomous unmanned aerial system that translates expert flight behaviour into autonomous navigation, letting researchers capture ecologically valid observations of free-ranging animals without piloting every mission by hand.",
    thrust: 1,
    tags: ["adaptive-autonomy"],
    image: "images/wildwing.jpg",
    featured: true,
    links: {
      project: "https://imageomics.github.io/wildwing/",
      paper: "https://doi.org/10.1111/2041-210X.70018",
      code: "https://imageomics.github.io/wildwing/"
    },
    related: ["WildWing: An Open-Source, Autonomous and Affordable UAS for Animal Behaviour Video Monitoring"]
  },
  {
    id: "smartwilds",
    page: "datasets",
    name: "SmartWilds / NatureLab",
    tagline: "Multimodal wildlife monitoring at The Wilds",
    blurb: "A multimodal monitoring deployment at The Wilds, a 10,000-acre conservation centre in southeastern Ohio, combining drones, camera traps, and bioacoustic sensors into a coordinated observation system with public datasets.",
    thrust: 2,
    tags: ["cross-modal-sensing", "field-ai-infrastructure"],
    image: "images/smartwildsmap.jpg",
    collaborators: "In collaboration with <a href=\"https://www.thewilds.org/\" target=\"_blank\" rel=\"noopener\">The Wilds</a>",
    featured: true,
    links: {
      project: "https://imageomics.github.io/naturelab/",
      preprint: "https://arxiv.org/abs/2509.18894",
      data: "https://huggingface.co/collections/imageomics/smartwilds-6880ec9381da004aa5682cf6"
    },
    related: ["SmartWilds: Multimodal Wildlife Monitoring Dataset"]
  },
  {
    id: "fair-drones",
    page: "datasets",
    name: "FAIR² Drones",
    tagline: "An AI-ready standard for cross-domain wildlife drone datasets",
    blurb: "A standard for collecting, documenting, and sharing wildlife drone datasets so they are Findable, Accessible, Interoperable, Reusable, ready for AI, and compliant with existing Darwin Core biodiversity standards.",
    thrust: 3,
    tags: ["field-ai-infrastructure"],
    image: "media/fair-drones-venn.webp",
    featured: true,
    links: {
      project: "https://imageomics.github.io/fair_drones/",
      preprint: "https://arxiv.org/abs/2606.00355",
      data: "https://huggingface.co/collections/imageomics/fair2-drones"
    },
    related: ["FAIR² Drones: An AI-Ready Standard for Cross-Domain Wildlife Drone Datasets"]
  },
  {
    id: "kabr",
    page: "datasets",
    name: "Kenyan Animal Behavior Recognition (KABR)",
    tagline: "In-situ behaviour datasets and an automated analysis framework",
    blurb: "KABR is an in-situ dataset of Kenyan ungulate behaviour from drone video; kabr-tools is the open-source framework that turns that video into detection, tracking, and behaviour classification for multi-species behavioural monitoring.",
    thrust: 3,
    tags: ["field-ai-infrastructure"],
    image: "images/kabr.jpg",
    media: { poster: "media/kabr-poster.jpg", video: "media/kabr" },
    featured: true,
    links: {
      project: "https://imageomics.github.io/KABR/",
      code: "https://github.com/imageomics/KABR",
      preprint: "https://arxiv.org/abs/2510.02030",
      data: "https://huggingface.co/collections/imageomics/kabr"
    },
    related: [
      "kabr-tools: Automated Framework for Multi-Species Behavioral Monitoring",
      "KABR: In-Situ Dataset for Kenyan Animal Behavior Recognition from Drone Videos",
      "Deep Dive into KABR: A Dataset for Understanding Ungulate Behavior from In-Situ Drone Video"
    ]
  },
  {
    id: "mmla",
    page: "datasets",
    name: "MMLA",
    tagline: "Multi-environment, multi-species, low-altitude aerial dataset",
    blurb: "A low-altitude aerial dataset spanning multiple environments and species, with detection and pose annotations and trained models, built to test how well aerial wildlife models transfer across sites.",
    thrust: 3,
    tags: ["field-ai-infrastructure"],
    image: "images/mmla_preview.png",
    links: {
      preprint: "https://arxiv.org/abs/2504.07744"
      /* TODO: MMLA Hugging Face collection URL not present on the current site */
    },
    related: ["MMLA: Multi-Environment, Multi-Species, Low-Altitude Aerial Footage Dataset"]
  },
  {
    id: "coastal",
    page: "projects",
    name: "Coastal and Salt-Marsh Monitoring",
    tagline: "Drones and computer vision for coastal resilience",
    blurb: "Developing drone-based sensing and computer vision for coastal and salt-marsh environments as part of ongoing postdoctoral work in MIT Civil &amp; Environmental Engineering.",
    thrust: 2,
    tags: ["adaptive-autonomy"],
    image: "media/coastal-waquoit.webp",
    collaborators: "With Dr. Heidi Nepf, MIT Civil &amp; Environmental Engineering, through the <a href=\"https://climateproject.mit.edu/building-coastal-resilience\" target=\"_blank\" rel=\"noopener\">Climate Project at MIT</a>",
    links: {
      project: "https://climateproject.mit.edu/building-coastal-resilience"
    },
    related: []
  },
  {
    id: "maneuver",
    page: "datasets",
    name: "Maneuver-Indexed Drone Testbed",
    tagline: "Reproducible evaluation for behavior-adaptive flight",
    blurb: "An interactive evaluation environment that indexes system behaviour by flight maneuver, enabling reproducible comparison of adaptive navigation policies before field deployment.",
    thrust: 1,
    tags: ["field-ai-infrastructure", "adaptive-autonomy"],
    image: "media/maneuver-grevys.webp",
    links: {
      demo: "https://huggingface.co/spaces/imageomics/drone-maneuver-demo"
    },
    related: ["A Maneuver-Indexed Testbed for Context-Aware Adaptive Wildlife Drones"]
  },
  {
    id: "adae",
    page: "datasets",
    name: "AI-Driven Animal Ecology at the Edge",
    tagline: "Characterizing and modeling ADAE workloads",
    blurb: "A characterization and modeling tool for AI-driven animal ecology workloads at the edge, covering computational requirements, energy consumption, and deployment strategy for field wildlife monitoring systems.",
    thrust: 1,
    tags: ["field-ai-infrastructure"],
    image: "images/adae.png",
    links: {
      demo: "https://jennamk14.github.io/adae_model/",
      code: "https://github.com/jennamk14/adae_model"
    },
    related: ["Characterizing and Modeling AI-Driven Animal Ecology Studies at the Edge"]
  },
  {
    id: "edge-computing",
    page: "projects",
    name: "WILDLABS Edge Computing Group",
    tagline: "Community for edge AI in conservation",
    blurb: "A community group uniting people working at the intersection of edge AI and conservation, sharing tools, models, and strategies for real-time on-device processing in remote, low-connectivity areas.",
    thrust: 3,
    tags: ["field-ai-infrastructure"],
    image: "images/edgeconservationgroup.png",
    collaborators: "Co-lead, 2025–2026 Group Leadership Programme",
    links: {
      community: "https://wildlabs.net/groups/edge-computing",
      project: "https://jennamk14.github.io/edge_ai_conservation/"
    },
    related: []
  },
  {
    id: "project-management",
    page: "datasets",
    name: "Academic Project Tracker",
    tagline: "A lightweight planning tool for academic research",
    blurb: "A project management tool that centralizes notes, tasks, and priorities in one place, built to replace the scattered mix of documents and boards that academic research tends to accumulate.",
    tags: [],
    image: "images/projects-overview.png",
    links: {
      demo: "https://jennamk14.github.io/academic_project_tracker/"
    },
    related: []
  }
];
