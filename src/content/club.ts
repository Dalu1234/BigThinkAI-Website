/* Club facts and links.
   Everything here comes from the BigThinkAI intro deck or the club's
   official listing — edit this file, not the components. */

export const CLUB = {
  name: 'BigThink AI',
  tagline: 'Think Big',
  mission: 'To push beyond the frontier of AI',
  school: 'University of Maryland',
  location: 'College Park, MD 20742',
  email: 'bigthinkai@gmail.com',
  purpose:
    'The purpose of this student organization is to bring awareness and appreciation towards the growing interdisciplinary field of artificial intelligence. We intend to advance our members’ knowledge and experience with fields within and related to AI through meetings, discussions, seminars, and projects.',
} as const

/* Intake state. EDGE applications for the 2026-27 cohort closed on 9/24.
   Flip this to true when the next cycle opens and the Join section switches
   from "closed, watch Discord" back to a live link to the form. */
export const EDGE_APPLICATIONS_OPEN: boolean = false

export const LINKS = {
  discord: 'https://discord.gg/CC6ZQ4cnkn',
  instagram: 'https://www.instagram.com/bigthinkai/',
  edgeApplication: 'https://forms.gle/Q5zeqbd2UFwzD5gV6',
  leadershipApplication: 'https://forms.gle/MMpdyPmkhaHidDHR6',
} as const

/* What the club runs, per the "What do we do?" slide. */
export const PILLARS = [
  {
    index: '01',
    name: 'Workshops',
    desc: 'Weekly, hands-on, and built so you can walk in without a background in AI.',
    facts: [
      'One hour, every week',
      'Non-technical → technical progression across the series',
      'Starter code provided for every session',
    ],
  },
  {
    index: '02',
    name: 'EDGE',
    desc: 'Semester-long, team-based AI projects with real deliverables and full ownership.',
    facts: [
      'Weekly one-hour build session',
      'Small teams, end-to-end development',
      'Ships something real — a paper, a benchmark, a deployed tool',
    ],
  },
  {
    index: '03',
    name: 'Events',
    desc: 'The rest of it — the talks, the demos, and the people you build with.',
    facts: [
      'Speaker sessions and discussions',
      'Project demos and showcases',
      'Socials across teams',
    ],
  },
] as const

/* Why join EDGE / what we look for — from the recruitment slide. */
export const EDGE_PITCH = {
  why: [
    'Join your Avengers dream team of other passionate, highly motivated people',
    'Work on cool projects that ACTUALLY solve problems',
    'Full ownership of your work, end-to-end AI development',
    'Get recognized for your work',
  ],
  looking: [
    'Experience coding end-to-end projects and delivering fast',
    'Domain knowledge in the area — or a track record of ramping up quickly',
  ],
} as const

/* ── Upcoming events ──────────────────────────────────────────────
   Add an event here and it appears in "What's Next". The soonest one
   with a poster becomes the featured card; anything whose date has
   passed drops off the list on its own.

   date  — ISO 'YYYY-MM-DD', the day it happens (or is due)
   poster — optional 4:5 graphic in /public/events
   ─────────────────────────────────────────────────────────────── */

export type EventKind = 'workshop' | 'deadline' | 'speaker' | 'social'

export type ClubEvent = {
  id: string
  title: string
  date: string
  time?: string
  location?: string
  kind: EventKind
  poster?: string
  posterAlt?: string
  note?: string
  /** Project id from projects.ts — the date then also shows on that team's page. */
  projectId?: string
}

export const EVENT_KIND_LABEL: Record<EventKind, string> = {
  workshop: 'Workshop',
  deadline: 'Deadline',
  speaker: 'Speaker',
  social: 'Social',
}

export const EVENTS: ClubEvent[] = [
  {
    id: 'rl-workshop',
    title: 'Reinforcement Learning',
    date: '2026-10-07',
    time: '5:00–6:00 PM',
    location: 'ARM 0131',
    kind: 'workshop',
    poster: '/events/reinforcement-learning.jpg',
    posterAlt:
      'Reinforcement Learning workshop poster — an engraved brain on a teal starfield',
    note: 'Agents, rewards, and learning by trial and error. No background needed — starter code provided.',
  },
  {
    id: 'wacv-submission',
    title: 'WACV Submission',
    date: '2026-11-23',
    kind: 'deadline',
    projectId: 'world-model-benchmark',
    note: 'World Model Benchmark targets the WACV 2027 workshop.',
  },
  {
    id: 'heartbeat-submission',
    title: 'HEARTBEAT Submission',
    date: '2026-12-11',
    kind: 'deadline',
    projectId: 'heartbeat-challenge',
    note: 'Audio agents team submits to the ICASSP 2027 challenge.',
  },
]

/* What runs every week, regardless of what is on the calendar. */
export const CADENCE = [
  {
    what: 'Workshop',
    note: 'One hour, hands-on, starter code provided. Open to everyone.',
  },
  {
    what: 'EDGE Build',
    note: 'One hour per team, every week of the semester.',
  },
] as const
