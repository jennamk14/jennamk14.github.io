/* ---------------------------------------------------------------------------
   RESEARCH THEME TAGS
   Three tags only — one per research thrust. Each links back to its section
   in the research overview on the homepage.

   Rules:
     • one primary tag per publication
     • a second only when the work genuinely bridges two thrusts
     • domain keywords (wildlife, coastal…) stay OUT of the visible card
   --------------------------------------------------------------------------- */

const TAGS = {
  "adaptive-autonomy": {
    label: "Adaptive autonomy",
    thrust: 1,
    anchor: "#adaptive-autonomy"
  },
  "cross-modal-sensing": {
    label: "Cross-modal sensing",
    thrust: 2,
    anchor: "#cross-modal-sensing"
  },
  "field-ai-infrastructure": {
    label: "Data infrastructure",
    thrust: 3,
    anchor: "#field-ai-infrastructure"
  }
};

/* ---------------------------------------------------------------------------
   BADGES
   Occasional status markers — NOT research themes. Used sparingly.
   `award` on a publication renders its own starred badge automatically.
   --------------------------------------------------------------------------- */

const BADGES = {
  "featured":       { label: "Featured" },
  "field-deployed": { label: "Field-deployed" },
  "dataset":        { label: "Dataset" }
};
