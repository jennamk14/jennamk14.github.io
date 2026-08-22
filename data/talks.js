/* ---------------------------------------------------------------------------
   TALKS & PRESENTATIONS
   Newest first. talks.html shows ~5 at a time in a scrollable panel.
     title, type, venue, date   required-ish
     award                      optional, rendered with a star
     link { label, url }        optional single resource link
   --------------------------------------------------------------------------- */

const TALKS = [
  {
    title: "Lessons from FAIR² Drones: Toward AI-Ready Multimodal, Multispatial Sensor Data for Ecology",
    type: "Invited Talk",
    venue: "Symposium: Building an AI-Ready Ecology &amp; Biodiversity Data Infrastructure · Ecological Society of America (ESA)",
    date: "Salt Lake City, UT · July 2026"
  },
  {
    title: "AI for Ecology: Accelerating Discoveries, Reducing Uncertainties, and Scaling Solutions",
    type: "Panel",
    venue: "Special Session SS23 · Ecological Society of America (ESA)",
    date: "Salt Lake City, UT · July 2026"
  },
  {
    title: "FAIR² Drones: An AI-Ready Standard for Cross-Domain Wildlife Drone Datasets",
    type: "Poster",
    venue: "FARR Workshop (FAIR in ML, AI Readiness &amp; Reproducibility) · AGU Conference Center",
    date: "Washington, D.C. · April 2026"
  },
  {
    title: "Autonomous Drones for Animal Studies with Edge AI",
    type: "Invited Talk",
    venue: "Global Conservation Tech &amp; Drone Forum (GCTDF)",
    date: "Nairobi, Kenya · March 2026",
    link: { label: "Conference", url: "https://www.gctdf.org/conference-tracks" }
  },
  {
    title: "Autonomous AI-Driven Environmental Sensing Systems",
    type: "Poster",
    venue: "MIT and Boston University Rising Stars in EECS Workshop",
    date: "2025",
    link: { label: "Poster", url: "https://www.canva.com/design/DAG3CIlrMTE/DqAfhmRGc1zGdd-KtPrQpA/watch" }
  },
  {
    title: "How do drones fit into multimodal sensing networks?",
    type: "Poster",
    venue: "WildDrone Summer School · Max Planck Institute for Animal Behavior, Konstanz",
    date: "2025",
    link: { label: "Poster", url: "https://figshare.com/articles/poster/How_do_drones_fit_into_multimodal_sensing_networks_/30217195?file=58284163" }
  },
  {
    title: "Autonomous, Adaptive Vision-Based Remote Sensing System for Dynamic Field Animal Ecology Studies",
    type: "Conference Talk",
    venue: "Edward F. Hayes Advanced Research Forum",
    date: "2025",
    award: "First Place, Engineering Oral"
  },
  {
    title: "Drones and AI in Field Animal Ecology",
    type: "Invited Talk",
    venue: "University of Findlay",
    date: "2025",
    link: { label: "Recording", url: "https://www.youtube.com/watch?v=ztL_9dyuXVk&list=PLXoz45DUWHPnJhSeSV4LL_y-V4vrA07lq&index=1&t=1850s" }
  },
  {
    title: "From Ohio to Kenya: Autonomous Drones in Field Ecology &amp; Conservation",
    type: "Invited Talk",
    venue: "Conservation Science Symposium · Muskingum University &amp; The Wilds, OH",
    date: "2025"
  },
  {
    title: "Autonomous Drones for Collective Wildlife Behavior",
    type: "Invited Talk",
    venue: "WildDrone Seminar Series",
    date: "2025",
    link: { label: "Slides", url: "https://www.canva.com/design/DAGHR7re88M/-5eS6P0f-m309iU5dcfPAw/view" }
  },
  {
    title: "Individual Identification of Zebras with Autonomous UAV Swarms",
    type: "Poster",
    venue: "TDAI Interdisciplinary Research Fall Forum",
    date: "2024",
    award: "Best Poster Award"
  },
  {
    title: "PhD Forum: An Adaptive Autonomous Aerial System for Dynamic Field Animal Ecology",
    type: "PhD Forum",
    venue: "IEEE ACSOS",
    date: "2024",
    link: { label: "Slides", url: "https://www.canva.com/design/DAGQ9PwaJu4/ZXTv-SuIz4OAKo0dVYtRZQ/view" }
  },
  {
    title: "Adaptive, Autonomous Aerial Systems for Dynamic Field Animal Ecology Studies",
    type: "Invited Talk",
    venue: "University of Bologna",
    date: "Cesena, Italy · September 2024"
  },
  {
    title: "Intelligent Cyberinfrastructure for Remote Sensing with Autonomous Aerial Robotics",
    type: "Poster",
    venue: "TDAI Interdisciplinary Research Fall Forum",
    date: "Columbus, OH · 2023"
  },
  {
    title: "Describing HPC Filesystem Trees with the Grand Unified File-Index",
    type: "Poster",
    venue: "SC23 · ACM Student Research Competition (Graduate Posters)",
    date: "Denver, CO · November 2023"
  },
  {
    title: "Interdisciplinary Applications of Autonomous Unmanned Aerial Vehicles",
    type: "Conference Talk",
    venue: "STARS Celebration @ Tapia · &amp; Ohio Celebration of Women in Computing",
    date: "2023"
  },
  {
    title: "Autonomous UAV Missions for Studying Wildlife Behavior: A Case Study for the Individual Identification of Zebras",
    type: "Poster",
    venue: "Midwest Machine Learning Symposium (MMLS)",
    date: "Chicago, IL · May 2023"
  },
  {
    title: "Individual Identification of Zebras with Autonomous UAV Swarms",
    type: "Poster",
    venue: "CRA-WP Grad Cohort for Women",
    date: "San Francisco, CA · April 2023"
  },
  {
    title: "PhD Forum: Edge Computing for Software-Defined Cartography",
    type: "PhD Forum",
    venue: "ACM/IEEE Symposium on Edge Computing (SEC)",
    date: "Seattle, WA · 2022"
  }
];
