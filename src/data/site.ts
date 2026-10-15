// ---------------------------------------------------------------------------
// Everything on the homepage comes from this file. Edit here, rebuild, deploy.
// Content mirrors cv_2026.tex (October 2026).
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jinho Choi",
  roles: [
    "Ph.D. Candidate, KAIST",
    "Visiting Researcher, Helmholtz Munich",
  ],
  location: "Munich, Germany",
  availability: "Open to research collaborations and internships.",
  email: "jjho.choi@gmail.com",
  cv: "/cv.pdf",
  links: [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=4cz0fdoAAAAJ&hl=en",
    },
    { label: "GitHub", href: "https://github.com/jjho-choi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jinhochoi94" },
  ],
};

export const about = [
  `I am a Ph.D. candidate at KAIST and a visiting researcher at Helmholtz
   Munich. My research focuses on <strong>mechanistic interpretability</strong>
   and <strong>data-centric AI</strong> to advance <strong>safe and
   trustworthy AI</strong>.`,
  `My Ph.D. research uses <strong>sparse dictionary learning</strong> to
   uncover human-interpretable concepts in foundation models. My work
   includes interpreting vision models
   (<a class="link" href="#pub-patchsae">PatchSAE</a>), uncovering dataset
   biases (<a class="link" href="#pub-conceptscope">ConceptScope</a>), and
   analyzing vision-language models
   (<a class="link" href="#pub-visualscratchpad">VisualScratchpad</a>). More
   recently, I developed
   <a class="link" href="#pub-consdl">ConSDL</a> to improve the consistency
   of learned concepts across training runs.`,
  `I also spent five years in industry as an AI scientist, developing
   biomedical imaging models at
   <a class="link" href="https://www.tomocube.com/" rel="noopener"><strong>Tomocube</strong></a>
   and AI interview systems and conversational agents at
   <a class="link" href="https://genesislab.ai/en/" rel="noopener"><strong>Genesislab</strong></a>.`,
  `During my M.S. at Korea University, I worked on visual analytics
   and human-computer interaction (HCI).`,
];

export const themes = [
  {
    title: "Mechanistic interpretability",
    body: `Discovering interpretable and reproducible concepts in foundation
           models through sparse dictionary learning.`,
  },
  {
    title: "Trustworthy AI",
    body: `Understanding and mitigating model biases through interpretable
           representations and fairness-aware learning.`,
  },
  {
    title: "Data-centric AI",
    body: `Understanding and improving datasets through concept-based analysis
           and human-in-the-loop annotation.`,
  },
];

export const news = [
  {
    date: "Oct 2026",
    body: `Released <em>ConSDL</em>, a sparse coding approach for consistent
           concept discovery in foundation models.`,
  },
  {
    date: "Apr 2026",
    body: `<em>VisualScratchpad</em> presented at the
           <strong>ICLR 2026 Workshop on Trustworthy AI</strong>.`,
  },
  {
    date: "Feb 2026",
    body: `Joined the Dynamical Inference Lab at <strong>Helmholtz Munich</strong>
           as a visiting researcher.`,
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
  /** Anchor id (#pub-<id>); experience bullets cite papers with {{ref:<id>}}. */
  id: string;
  year: string;
  title: string;
  authors: string;
  venue: string;
  selected?: boolean;
  status?: string;
  /** One sentence shown under the authors. */
  tldr?: string;
  /** Path under public/, e.g. "/teasers/patchsae.png". Falls back to `short`. */
  teaser?: string;
  /** Short name shown on the placeholder tile when there is no teaser. */
  short?: string;
  links?: { label: string; href: string }[];
};

// `authors`: wrap your own name in <b> so it reads at a glance.
// `teaser`: drop an image in public/teasers/. It is shown whole at 200px wide,
// so wide figures come out short; landscape around 16:9 reads best.
export const publications: Pub[] = [
  {
    id: "consdl",
    year: "2026",
    title: "Beyond SAEs: Consistent Concept Discovery with Sparse Coding",
    short: "ConSDL",
    teaser: "/teasers/consdl.jpg",
    tldr: "Uses sparse coding to learn more consistent and reproducible concepts across independent training runs.",
    authors: "<b>Jinho Choi</b>, Hyesu Lim, Jaegul Choo, Steffen Schneider",
    venue: "Under review",
    status: "review",
    selected: true,
  },
  {
    id: "visualscratchpad",
    year: "2026",
    title: "VisualScratchpad: Grounding Visual Concepts in Large Vision Language Models",
    short: "VisualScratchpad",
    teaser: "/teasers/visual-scratchpad.jpg",
    tldr: "Enables concept-level interpretation of large vision-language models during inference.",
    authors:
      "Hyesu Lim, <b>Jinho Choi</b>, Taekyung Kim, Byeongho Heo, Jaegul Choo, Dongyoon Han",
    venue: "ICLR 2026 Workshop on Trustworthy AI",
    selected: true,
    links: [
      { label: "pdf", href: "https://arxiv.org/abs/2603.07335" },
      { label: "code", href: "https://github.com/hyesulim/visual_scratchpad" },
      { label: "project", href: "https://hyesulim.github.io/visual_scratchpad_projectpage/" },
      { label: "poster", href: "https://drive.google.com/file/d/1oTAPWNi04LIbnbd8YwJfbJxeECMJurjE/view?usp=sharing" },
    ],
  },
  {
    id: "conceptscope",
    year: "2025",
    title: "ConceptScope: Characterizing Dataset Bias via Disentangled Visual Concepts",
    short: "ConceptScope",
    teaser: "/teasers/conceptscope.jpg",
    tldr: "Analyzes image datasets through interpretable visual concepts to uncover previously overlooked biases.",
    authors: "<b>Jinho Choi</b>, Hyesu Lim, Steffen Schneider, Jaegul Choo",
    venue: "NeurIPS 2025",
    selected: true,
    links: [
      { label: "pdf", href: "https://arxiv.org/abs/2510.26186" },
      { label: "code", href: "https://github.com/jjho-choi/ConceptScope" },
      { label: "project", href: "https://jjho-choi.github.io/ConcepScope-projectpage/" },
      { label: "poster & video", href: "https://neurips.cc/virtual/2025/loc/san-diego/poster/116263" },
    ],
  },
  {
    id: "patchsae",
    year: "2025",
    title:
      "Sparse Autoencoders Reveal Selective Remapping of Visual Concepts During Adaptation",
    short: "PatchSAE",
    teaser: "/teasers/patchsae.jpg",
    tldr: "Reveals that adapting vision models primarily remaps existing visual concepts rather than learning new ones.",
    authors: "Hyesu Lim, <b>Jinho Choi</b>, Jaegul Choo, Steffen Schneider",
    venue: "ICLR 2025",
    selected: true,
    links: [
      { label: "pdf", href: "https://arxiv.org/abs/2412.05276" },
      { label: "code", href: "https://github.com/dynamical-inference/patchsae" },
      { label: "project", href: "https://dynamical-inference.ai/patchsae/" },
      { label: "poster & video", href: "https://iclr.cc/virtual/2025/poster/28675" },
    ],
  },
  {
    id: "slice-conquer",
    year: "2024",
    title:
      "Slice and Conquer: A Planar-to-3D Framework for Efficient Interactive Segmentation of Volumetric Images",
    short: "Slice & Conquer",
    teaser: "/teasers/slice-conquer.jpg",
    tldr: "Enables efficient 3D image annotation by propagating sparse 2D labels and selectively requesting corrections.",
    authors:
      "Wonwoo Cho, Dongmin Choi, Hyesu Lim, <b>Jinho Choi</b>, Saemee Choi, Hyun-seok Min, Sungbin Lim, Jaegul Choo",
    venue: "WACV 2024",
    links: [{ label: "pdf", href: "https://openaccess.thecvf.com/content/WACV2024/papers/Cho_Slice_and_Conquer_A_Planar-to-3D_Framework_for_Efficient_Interactive_Segmentation_WACV_2024_paper.pdf" }],
  },
  {
    id: "fair-avi",
    year: "2023",
    title: "Fairness-aware Multimodal Learning in Automatic Video Interview Assessment",
    short: "Fair AVI",
    teaser: "/teasers/fair-avi.jpg",
    tldr: "Reduces demographic bias in AI video-interview assessment while preserving predictive accuracy.",
    authors: "Changwoo Kim, <b>Jinho Choi</b>, Jongyeon Yoon, Daehun Yoo, Woojin Lee",
    venue: "IEEE Access 2023",
    links: [{ label: "pdf", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10287972" }],
  },
  {
    id: "label-free-3d",
    year: "2021",
    title:
      "Label-free Three-dimensional Analyses of Live Cells with Deep-learning-based Segmentation Exploiting Refractive Index Distributions",
    short: "Label-free 3D",
    teaser: "/teasers/label-free-3d.jpg",
    tldr: "Enables 3D segmentation of live cells and cellular structures from label-free refractive-index images.",
    authors: "<b>Jinho Choi</b>, Hye-Jin Kim, et al.",
    venue: "bioRxiv 2021",
    status: "preprint",
    links: [{ label: "pdf", href: "https://www.biorxiv.org/content/biorxiv/early/2021/05/23/2021.05.23.445351.full.pdf" }],
  },
  {
    id: "cell-instance",
    year: "2021",
    title: "3D Cell Instance Segmentation via Point Proposals using Cellular Components",
    short: "3D Cell Inst.",
    teaser: "/teasers/cell-instance.jpg",
    tldr: "Separates individual cells in 3D microscopy images using point proposals derived from cellular components.",
    authors:
      "<b>Jinho Choi</b>, Junwoo Park, Hyun-seok Min, Hyungjoo Cho, Sungbin Lim, Jaegul Choo",
    venue: "SPIE 2021",
    links: [{ label: "pdf", href: "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/11647/116471G/3D-cell-instance-segmentation-via-point-proposals-using-cellular-components/10.1117/12.2581796.short" }],
  },
  {
    id: "non-visual",
    year: "2019",
    title:
      "Visualizing for the Non-Visual: Enabling the Visually Impaired to Use Visualization",
    short: "Non-Visual Vis",
    teaser: "/teasers/non-visual.jpg",
    tldr: "Makes chart information accessible to people with visual impairments through data extraction and interactive exploration.",
    authors:
      "<b>Jinho Choi</b>, Sanghun Jung, Deokgun Park, Jaegul Choo, Niklas Elmqvist",
    venue: "Computer Graphics Forum (EuroVis) 2019",
    links: [{ label: "pdf", href: "https://users.umiacs.umd.edu/~elm/projects/vis4nonvisual/vis4nonvisual.pdf" }],
  },
  {
    id: "topicontiles",
    year: "2018",
    title:
      "TopicOnTiles: Tile-based Spatio-Temporal Event Analytics via Exclusive Topic Modeling on Social Media",
    short: "TopicOnTiles",
    teaser: "/teasers/topicontiles.jpg",
    tldr: "Supports exploration of local events in social media through spatio-temporal topic modeling and visual analytics.",
    authors: "Minsuk Choi, Sungbok Shin, <b>Jinho Choi</b>, et al.",
    venue: "CHI 2018",
    links: [{ label: "pdf", href: "https://www.osti.gov/servlets/purl/1470894" }],
  },
  {
    id: "stexnmf",
    year: "2017",
    title:
      "STExNMF: Spatio-Temporally Exclusive Topic Discovery for Anomalous Event Detection",
    short: "STExNMF",
    teaser: "/teasers/stexnmf.jpg",
    tldr: "Discovers location- and time-specific topics to detect anomalous events in social media.",
    authors: "Sungbok Shin, Minsuk Choi, <b>Jinho Choi</b>, et al.",
    venue: "IEEE ICDM 2017",
    links: [{ label: "pdf", href: "https://www.osti.gov/servlets/purl/1426578" }],
  },
];

export const experience = [
  {
    org: "Helmholtz Munich",
    unit: "Dynamical Inference Lab",
    role: "Visiting Researcher",
    period: "Feb 2026 — Present",
    place: "Munich, Germany",
    points: [
      `Developed <b>ConSDL</b>, a sparse coding approach that improves the
       consistency of learned concepts across independent training runs.
       Demonstrated improved dictionary and coefficient consistency over six
       sparse autoencoder baselines on vision and language models
       {{ref:consdl}}.`,
    ],
  },
  {
    org: "KAIST",
    unit: "DAVIAN Lab",
    role: "Ph.D. Researcher",
    period: "Aug 2022 — Present",
    place: "Daejeon, Korea",
    points: [
      `Developed <b>ConceptScope</b> to characterize image datasets through
       interpretable visual concepts, revealing previously overlooked dataset
       biases {{ref:conceptscope}}.`,
      `Applied sparse autoencoders to CLIP (<b>PatchSAE</b>) to study visual
       concept representations and their changes during task adaptation
       {{ref:patchsae}}. Extended concept-level analysis to large
       vision-language models with <b>VisualScratchpad</b>
       {{ref:visualscratchpad}}.`,
    ],
  },
  {
    org: "Genesislab",
    url: "https://genesislab.ai/en/",
    unit: "",
    role: "AI Scientist",
    period: "Sep 2022 — Nov 2024",
    place: "Seoul, Korea",
    points: [
      `Developed a <b>fairness diagnosis and mitigation pipeline</b> for an AI
       video-interview platform used by 150+ companies, reducing gender bias by
       35% without sacrificing accuracy {{ref:fair-avi}}.`,
      `Developed a <b>talking-face generation</b> model deployed as an AI
       interviewer avatar, with accurate lip synchronization and high visual
       quality.`,
      `Built <b>LLM-based conversational agents</b> for a creator-persona app
       with 500K+ downloads, using retrieval-augmented generation, memory, and
       automated persona construction.`,
    ],
  },
  {
    org: "Tomocube",
    url: "https://www.tomocube.com/",
    unit: "",
    role: "AI Researcher",
    period: "Feb 2019 — Sep 2022",
    place: "Seoul, Korea",
    points: [
      `Developed <b>3D cell and organelle segmentation</b> models for
       label-free holotomography, integrated into commercial cell analysis
       software {{ref:cell-instance}} {{ref:label-free-3d}}.`,
      `Built a <b>human-in-the-loop 3D annotation system</b> that propagates 2D
       labels into 3D and requests corrections on uncertain slices, and
       deployed it as the company's internal annotation system
       {{ref:slice-conquer}}.`,
    ],
  },
  {
    org: "Korea University",
    unit: "",
    role: "M.S. Researcher",
    period: "Mar 2017 — Aug 2019",
    place: "Seoul, Korea",
    points: [
      `Developed a <b>chart accessibility tool</b> that extracts data from
       web-based visualizations and makes it accessible to visually impaired
       users through screen readers {{ref:non-visual}}.`,
      `Developed <b>visual analytics systems</b> for detecting anomalous local
       events in geo-tagged social media using topic modeling and interactive
       map visualizations {{ref:stexnmf}} {{ref:topicontiles}}.`,
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
