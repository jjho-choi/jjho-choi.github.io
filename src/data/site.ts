// ---------------------------------------------------------------------------
// Everything on the homepage comes from this file. Edit here, rebuild, deploy.
// Content mirrors cv_2026.tex (September 2026).
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jinho Choi",
  roles: [
    "Ph.D. Candidate, KAIST AI",
    "Visiting Researcher, Helmholtz Munich",
  ],
  location: "Munich, Germany",
  availability:
    "Open to research internships and collaborations in the Munich area.",
  email: "jjho.choi@gmail.com",
  cv: "/cv.pdf",
  links: [
    // TODO: paste your Google Scholar profile URL
    { label: "Google Scholar", href: "https://scholar.google.com/" },
    { label: "GitHub", href: "https://github.com/jjho-choi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jinhochoi94" },
  ],
};

export const about = [
  `I am a Ph.D. candidate at KAIST and a visiting researcher at Helmholtz
   Munich, working toward <strong>safe and trustworthy AI</strong> through
   <strong>mechanistic interpretability</strong> and
   <strong>data-centric AI</strong>: making the concepts inside foundation
   models explicit and reproducible, and tracing model behavior back to the
   data it was trained on.`,
  `My current work asks whether the concepts we extract from a model are
   <em>real</em>. With sparse autoencoders, two training runs on the same
   model can disagree on what the concepts are, which undermines any analysis
   built on them. ConSDL, my latest method, recovers the same concepts run
   after run.`,
  `Before the Ph.D. I spent five years as an AI scientist at two startups,
   taking models from research prototype to deployed product: fairness in
   hiring models used by 150+ companies, conversational agents with 500K+
   users, and 3D biomedical segmentation in commercial software.`,
];

export const themes = [
  {
    title: "Mechanistic interpretability",
    body: `Sparse dictionary learning for reproducible concept discovery in
           foundation models.`,
  },
  {
    title: "Safety & trustworthy AI",
    body: `Fairness diagnosis and mitigation, and concept-level auditing of
           model behavior.`,
  },
  {
    title: "Data-centric AI",
    body: `Characterizing dataset bias through model internals, and
           human-in-the-loop annotation.`,
  },
];

export const news = [
  {
    date: "Sep 2026",
    body: `<em>Beyond SAEs: Consistent Concept Discovery with Sparse Coding</em>
           (ConSDL) submitted to <strong>ICLR 2027</strong>.`,
  },
  {
    date: "Apr 2026",
    body: `<em>VisualScratchpad</em> presented at the
           <strong>ICLR 2026 Workshop on Trustworthy AI</strong>.`,
  },
  {
    date: "Feb 2026",
    body: `Started as a visiting researcher at <strong>Helmholtz Munich</strong>
           (Dynamical Inference Lab, PI: Steffen Schneider).`,
  },
  {
    date: "Sep 2025",
    body: `<em>ConceptScope</em> accepted to <strong>NeurIPS 2025</strong>.`,
  },
  {
    date: "Jan 2025",
    body: `<em>PatchSAE</em> accepted to <strong>ICLR 2025</strong>.`,
  },
];

export type Pub = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  selected?: boolean;
  status?: string;
  /** One sentence shown under the authors. */
  tldr?: string;
  /** Path under public/, e.g. "/teasers/patchsae.gif". Falls back to `short`. */
  teaser?: string;
  /** Short name shown on the placeholder tile when there is no teaser. */
  short?: string;
  links?: { label: string; href: string }[];
};

// `authors`: wrap your own name in <b> so it reads at a glance.
// `teaser`: drop an image in public/teasers/ (≈16:10 works best; wide figures
// are letterboxed, never cropped).
export const publications: Pub[] = [
  {
    year: "2027",
    title: "Beyond SAEs: Consistent Concept Discovery with Sparse Coding",
    short: "ConSDL",
    tldr: "Replaces sparse autoencoders with sparse coding so the concepts extracted from a model come out the same, run after run.",
    authors: "<b>Jinho Choi</b>, Hyesu Lim, Jaegul Choo, Steffen Schneider",
    venue: "Under review at ICLR 2027",
    status: "review",
    selected: true,
  },
  {
    year: "2026",
    title: "VisualScratchpad: Grounding Visual Concepts in Large Vision Language Models",
    short: "VisualScratchpad",
    tldr: "Grounds visual concepts inside large vision–language models at inference time, showing what the model looks at when it answers.",
    authors:
      "Hyesu Lim, <b>Jinho Choi</b>, Taekyung Kim, Byeongho Heo, Jaegul Choo, Dongyoon Han",
    venue: "ICLR 2026 Workshop on Trustworthy AI",
    selected: true,
    links: [
      { label: "pdf", href: "https://arxiv.org/pdf/2603.07335" },
      { label: "arXiv", href: "https://arxiv.org/abs/2603.07335" },
    ],
  },
  {
    year: "2025",
    title: "ConceptScope: Characterizing Dataset Bias via Disentangled Visual Concepts",
    short: "ConceptScope",
    teaser: "/teasers/conceptscope.png",
    tldr: "Breaks image datasets into interpretable visual concepts and measures how each spreads across classes, surfacing previously unreported biases.",
    authors: "<b>Jinho Choi</b>, Hyesu Lim, Steffen Schneider, Jaegul Choo",
    venue: "NeurIPS 2025",
    selected: true,
    links: [
      { label: "pdf", href: "https://arxiv.org/pdf/2510.26186" },
      { label: "arXiv", href: "https://arxiv.org/abs/2510.26186" },
      { label: "code", href: "https://github.com/jjho-choi/ConceptScope" },
      { label: "project page", href: "https://jjho-choi.github.io/ConcepScope-projectpage/" },
    ],
  },
  {
    year: "2025",
    title:
      "Sparse Autoencoders Reveal Selective Remapping of Visual Concepts During Adaptation",
    short: "PatchSAE",
    teaser: "/teasers/patchsae.gif",
    tldr: "A patch-level sparse autoencoder on CLIP shows that adaptation mostly remaps existing visual concepts rather than learning new ones.",
    authors: "Hyesu Lim, <b>Jinho Choi</b>, Jaegul Choo, Steffen Schneider",
    venue: "ICLR 2025",
    selected: true,
    links: [
      { label: "pdf", href: "https://arxiv.org/pdf/2412.05276" },
      { label: "arXiv", href: "https://arxiv.org/abs/2412.05276" },
      { label: "code", href: "https://github.com/dynamical-inference/patchsae" },
      { label: "project page", href: "https://dynamical-inference.ai/patchsae/" },
    ],
  },
  {
    year: "2024",
    title:
      "Slice and Conquer: A Planar-to-3D Framework for Efficient Interactive Segmentation of Volumetric Images",
    short: "Slice & Conquer",
    tldr: "Lifts a few labeled 2D slices into full 3D masks and asks for correction only where the model is uncertain, speeding up volumetric annotation.",
    authors:
      "Wonwoo Cho, Dongmin Choi, Hyesu Lim, <b>Jinho Choi</b>, Saemee Choi, Hyun-seok Min, Sungbin Lim, Jaegul Choo",
    venue: "WACV 2024",
  },
  {
    year: "2023",
    title: "Fairness-aware Multimodal Learning in Automatic Video Interview Assessment",
    short: "Fair AVI",
    tldr: "Diagnoses and mitigates demographic bias in multimodal video-interview scoring without giving up accuracy.",
    authors: "Changwoo Kim, <b>Jinho Choi</b>, Jongyeon Yoon, Daehun Yoo, Woojin Lee",
    venue: "IEEE Access 2023",
  },
  {
    year: "2021",
    title:
      "Label-free Three-dimensional Analyses of Live Cells with Deep-learning-based Segmentation Exploiting Refractive Index Distributions",
    short: "Label-free 3D",
    tldr: "Segments organelles and whole cells in 3D from refractive-index tomograms of live cells, with no fluorescent labeling.",
    authors: "<b>Jinho Choi</b>, Hye-Jin Kim, et al.",
    venue: "bioRxiv 2021",
    status: "preprint",
  },
  {
    year: "2021",
    title: "3D Cell Instance Segmentation via Point Proposals using Cellular Components",
    short: "3D Cell Inst.",
    tldr: "Separates touching cells in 3D microscopy volumes by proposing cell points from their cellular components.",
    authors:
      "<b>Jinho Choi</b>, Junwoo Park, Hyun-seok Min, Hyungjoo Cho, Sungbin Lim, Jaegul Choo",
    venue: "SPIE 2021",
  },
  {
    year: "2019",
    title:
      "Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization",
    short: "Non-Visual Vis",
    tldr: "Extracts the underlying data from chart images so screen-reader users can explore visualizations.",
    authors:
      "<b>Jinho Choi</b>, Sanghun Jung, Deokgun Park, Jaegul Choo, Niklas Elmqvist",
    venue: "Computer Graphics Forum (EuroVis) 2019",
  },
  {
    year: "2018",
    title:
      "TopicOnTiles: Tile-based Spatio-Temporal Event Analytics via Exclusive Topic Modeling on Social Media",
    short: "TopicOnTiles",
    tldr: "Tile-based visual analytics that surfaces local events in social media through spatio-temporally exclusive topics.",
    authors: "Minsuk Choi, Sungbok Shin, <b>Jinho Choi</b>, et al.",
    venue: "CHI 2018",
  },
  {
    year: "2017",
    title:
      "STExNMF: Spatio-Temporally Exclusive Topic Discovery for Anomalous Event Detection",
    short: "STExNMF",
    tldr: "A non-negative matrix factorization that finds topics exclusive in space and time to flag anomalous events in social media.",
    authors: "Sungbok Shin, Minsuk Choi, <b>Jinho Choi</b>, et al.",
    venue: "IEEE ICDM 2017",
  },
];

export const experience = [
  {
    org: "Helmholtz Munich",
    unit: "Dynamical Inference Lab (PI: Steffen Schneider), joint project with KAIST DAVIAN Lab",
    role: "Visiting Researcher",
    period: "Feb 2026 — Present",
    place: "Munich, Germany",
    points: [
      `Developed <b>ConSDL</b>, which extracts the concepts a model has learned
       reproducibly. With sparse autoencoders, the standard tool, two training
       runs can disagree on what the concepts are, undermining any analysis
       built on them. ConSDL recovers the same concepts run after run and is
       the most consistent method on vision and language models
       <span class="ref">ICLR 2027, under review</span>.`,
    ],
  },
  {
    org: "KAIST, DAVIAN Lab",
    unit: "",
    role: "Ph.D. Researcher",
    period: "Aug 2022 — Present",
    place: "Daejeon, Korea",
    points: [
      `Developed <b>ConceptScope</b>, which breaks a dataset into
       human-interpretable visual concepts and measures how each concept
       distributes across classes, uncovering many previously unreported biases
       in real-world image datasets <span class="ref">NeurIPS 2025</span>.`,
      `Trained sparse autoencoders on the CLIP vision transformer
       (<b>PatchSAE</b>), discovering 49K localized visual concepts that explain
       how the model reaches its predictions and how that changes under
       adaptation to new tasks <span class="ref">ICLR 2025</span>. Extended the
       analysis to large vision–language models, grounding visual concepts at
       inference time (<b>VisualScratchpad</b>)
       <span class="ref">ICLR 2026 Workshop</span>.`,
    ],
  },
  {
    org: "Genesislab",
    unit: "",
    role: "AI Scientist",
    period: "Sep 2022 — Nov 2024",
    place: "Seoul, Korea",
    points: [
      `Built the <b>fairness pipeline</b> for <b>viewinterHR</b>, a video
       interview assessment product used by 150+ companies: a diagnosis stage
       that quantifies how sensitive and nuisance attributes affect outcomes,
       and a mitigation algorithm that reduces group disparity in features and
       outputs, cutting gender bias by 35% with no loss in accuracy
       <span class="ref">IEEE Access 2023</span>.`,
      `Developed a <b>talking-face generation</b> method with accurate lip-sync
       and high video clarity, deployed as the AI interviewer avatar in
       <b>viewinterHR</b>. Worked with HR experts to ensure the generated
       interviewer reflected real interview dynamics.`,
      `Built the <b>conversational agents</b> behind <b>Zuicy</b>, LLM personas
       of YouTube creators (500K+ downloads), using prompt chaining,
       retrieval-augmented generation, and memory recall, plus an automated
       pipeline for building each creator persona.`,
    ],
  },
  {
    org: "Tomocube",
    unit: "",
    role: "AI Researcher",
    period: "Feb 2019 — Sep 2022",
    place: "Seoul, Korea",
    points: [
      `Developed <b>3D cell segmentation</b> models for four organelle types and
       cell instances from label-free refractive index images, achieving
       state-of-the-art accuracy, and integrated them into commercial cell
       analysis software <span class="ref">SPIE 2021, bioRxiv 2021</span>.`,
      `Built a <b>human-in-the-loop segmentation</b> model that lifts labeled 2D
       slices to 3D masks and actively requests correction on uncertain slices,
       improving annotation speed and accuracy by 9.5% and serving as the
       in-house annotation system <span class="ref">WACV 2024</span>.`,
    ],
  },
];

export const education = [
  {
    degree: "Ph.D. in Artificial Intelligence",
    school: "KAIST",
    note: "Advisor: Jaegul Choo · expected Feb 2028 · part-time 2022–2024",
    period: "2022 — 2028",
  },
  {
    degree: "M.S. in Computer Science and Engineering",
    school: "Korea University",
    note: "Advisor: Jaegul Choo",
    period: "2017 — 2019",
  },
  {
    degree: "B.S. in Computer Science and Engineering",
    school: "Korea University",
    note: "",
    period: "2013 — 2017",
  },
];

export const service = [{ label: "Reviewer", body: "NeurIPS, ICLR" }];

export const sections = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];
