/* EDGE teams, 2026–2027.
   Descriptions, skill levels, skills and goals are transcribed from the
   BigThinkAI intro deck. Artwork is exported from the same deck into
   /public/projects.

   Order here is display order — the first entry is what loads selected on
   the home page, and the order the team pages link through. Boldest leads. */

/* The deck lists Project Lantern's level as "???", so TBD is a real state
   and renders as a glitched "???" rather than a tidy label. */
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'TBD'

/* ── Team personality ────────────────────────────────────────────────
   Every team has its own page at /projects/<id>, and every page looks
   like the thing it is about. `theme` is the single key that drives it:
   the page accent, the chrome, and which ambient motif moves behind the
   title — lanternflies crawling, particles diverging from their
   prediction, a waveform with real silence in it, a HUD locking onto
   parts, a prerequisite graph resolving node by node.

   Defined in two places, both keyed off this string:
     · components/projects/ProjectMotif.tsx  — the motif itself
     · src/styles/globals.css, .proj[data-theme='…']  — accent + chrome
   ──────────────────────────────────────────────────────────────────── */
export type ProjectTheme =
  | 'lantern'
  | 'worldmodel'
  | 'heartbeat'
  | 'jarvis'
  | 'advisor'

export type Project = {
  /** Also the URL: /projects/<id> */
  id: string
  name: string
  /** Short form for the home-page rail, where space is tight. */
  railLabel: string
  level: SkillLevel
  theme: ProjectTheme
  image: string
  imageAlt: string
  /** One line, in the team's own voice, for the top of its page. */
  blurb: string
  description: string
  /** Caption that owns up to what the ambient motif on the page is. */
  motifNote: string
  skills: string[]
  goal: string
}

/* Skill level drives the traffic-light dot and tag. It stays independent of
   the page accent on purpose: the level means something, so it keeps its
   own colour everywhere, even on a page themed another hue entirely. */
export const LEVEL_COLOR: Record<SkillLevel, string> = {
  Beginner: 'var(--lvl-beginner)',
  Intermediate: 'var(--lvl-intermediate)',
  Advanced: 'var(--lvl-advanced)',
  TBD: 'var(--lvl-tbd)',
}

/* What the skill tag actually prints. */
export const LEVEL_LABEL: Record<SkillLevel, string> = {
  Beginner: 'Beginner',
  Intermediate: 'Intermediate',
  Advanced: 'Advanced',
  TBD: '???',
}

export const PROJECTS: Project[] = [
  {
    id: 'project-lantern',
    name: 'Project Lantern',
    railLabel: 'Project Lantern',
    level: 'TBD',
    theme: 'lantern',
    image: '/projects/lantern.jpg',
    imageAlt: 'Macro photograph of a spotted lanternfly lit in red',
    blurb: 'Find the lanternflies. Then work out where they are going next.',
    description:
      'Lanternflies are damaging Maryland’s vineyards and orchards, and right now people mostly rely on spotting and reporting them by hand. We’re building a system that can automatically find lanternflies, track where they’re spreading, and help predict where they’re likely to show up next.',
    motifNote:
      'Lycorma delicatula. The swarm in the picture has not stopped moving, and the scarlet blooms are where a sighting spreads from.',
    skills: [
      'Object detection & computer vision',
      'Edge / on-device model deployment',
      'Dataset curation & annotation',
      'Spatiotemporal forecasting',
      'Geospatial data & GIS',
      'Data pipelines from public sources',
      'Model evaluation against real-world ground truth',
    ],
    goal: 'Detect lanternflies early, predict where they spread.',
  },
  {
    id: 'world-model-benchmark',
    name: 'World Model Benchmark',
    railLabel: 'World Model',
    level: 'Advanced',
    theme: 'worldmodel',
    image: '/projects/worldmodel.jpg',
    imageAlt: 'A lone figure watching a vast orbital system',
    blurb:
      'Does the model actually know physics, or does it only look like it does?',
    description:
      'We’re building the first world model benchmark that measures with particle-level ground truth instead of a VLM’s opinion, to find out where world models stop being physics engines.',
    motifNote:
      'Two orbits laid over the system in the painting: the solid body is ground truth, the hollow one is what a model predicted. Watch them come apart.',
    skills: [
      'Video & vision-language models',
      'World model evaluation',
      'Multimodal AI',
      'Temporal reasoning',
      'Physical / causal reasoning',
      'Benchmark & dataset design',
      'Model evaluation & metrics',
      'Experimental research',
    ],
    goal: 'Submit to the WACV 2027 workshop, due 11/23.',
  },
  {
    id: 'heartbeat-challenge',
    name: 'HEARTBEAT Challenge',
    railLabel: 'HEARTBEAT',
    level: 'Intermediate',
    theme: 'heartbeat',
    image: '/projects/heartbeat.jpg',
    imageAlt: 'Abstract profile of a face dissolving into an audio waveform',
    blurb:
      'Audio agents that know when to speak, when to act, and when to stay quiet.',
    description:
      'We’re building audio agents that know when to speak, when to act, and when to stay quiet. Our team will compete in the HEARTBEAT ICASSP 2027 Challenge, training AI to understand live conversations and environmental sounds, then make the right decision at the right moment.',
    motifNote:
      'A reader running the length of the waveform in the picture, closing brackets around the stretches where it goes quiet.',
    skills: [
      'Audio & speech AI',
      'Audio event detection',
      'Multimodal / acoustic ML',
      'Transformer & foundation models',
      'Temporal sequence modeling',
      'Model training & fine-tuning',
      'AI agent decision-making',
      'Evaluation & benchmarking',
      'Real-time AI systems',
    ],
    goal: 'Submit to either track of the challenge, due 12/11.',
  },
  {
    id: 'assembly-jarvis',
    name: 'Assembly Jarvis',
    railLabel: 'Assembly Jarvis',
    level: 'Intermediate',
    theme: 'jarvis',
    image: '/projects/jarvis.jpg',
    imageAlt: 'Painted scene of a workshop with robotic arms mid-assembly',
    blurb:
      'An assistant that watches you build something and talks you through it — all on your own device.',
    description:
      'We’re building a local multimodal “Jarvis” that watches a physical assembly, understands what the user has completed, and guides them through each step. The assistant can identify parts, answer questions, track progress, and catch mistakes in real time — all while keeping the camera feed and AI processing on the user’s device.',
    motifNote:
      'What the assistant sees. Every box is locked onto something actually in this workshop — the arm, the housing, the gears on the bench.',
    skills: [
      'Multimodal AI / Vision-Language Models (VLMs)',
      'Local LLM & VLM deployment',
      'Computer vision & object recognition',
      'Visual state tracking',
      'Voice / speech interfaces',
      'Prompt engineering & tool use',
      'AI agents & task planning',
      'Real-time AI systems',
    ],
    goal: 'Demo a working multimodal system in real time.',
  },
  {
    id: 'umd-ai-advisor',
    name: 'UMD AI Advisor',
    railLabel: 'UMD AI Advisor',
    level: 'Beginner',
    theme: 'advisor',
    image: '/projects/advisor.jpg',
    imageAlt: 'Illustration of McKeldin Library and the UMD mall',
    blurb:
      'Every requirement, prerequisite and catalog page at UMD — in one conversation.',
    description:
      'We’re building an AI academic advisor that turns UMD’s scattered course requirements, prerequisites, and catalog information into one conversational planning tool. Students can ask what courses they’re eligible for, understand prerequisite chains, and build multi-semester schedules, with RAG grounding responses in official UMD information rather than relying on an LLM’s memory.',
    motifNote:
      'A prerequisite chain routed across the mall, resolving toward McKeldin. Every stop sits on a real path in the picture.',
    skills: [
      'Retrieval-Augmented Generation (RAG)',
      'LLM prompting & response generation',
      'Web scraping & data preprocessing',
      'Embeddings & vector databases',
      'Knowledge graphs / prerequisite graphs',
      'Information retrieval & ranking',
      'Building an end-to-end AI application',
      'UI / chatbot development',
    ],
    goal: 'A deployed system 100 students use to get information quickly.',
  },
]

/** Look a team up by its URL segment. */
export function projectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id)
}

/** The team before and after this one, wrapping, for page-to-page paging. */
export function projectNeighbours(id: string) {
  const i = PROJECTS.findIndex((p) => p.id === id)
  if (i < 0) return { prev: undefined, next: undefined }
  const len = PROJECTS.length
  return {
    prev: PROJECTS[(i - 1 + len) % len],
    next: PROJECTS[(i + 1) % len],
  }
}
