# BigThink AI — Club Website

The website for **BigThink AI**, a student-run AI organization at the University of
Maryland, College Park.

> **Mission:** To push beyond the frontier of AI.

- **Discord:** https://discord.gg/CC6ZQ4cnkn
- **Instagram:** https://www.instagram.com/bigthinkai/
- **Email:** bigthinkai@gmail.com

---

## Design

The site's visual identity is taken directly from the club's own intro deck rather
than invented separately:

| Element | Treatment |
|---|---|
| **Ground** | Near-black `#08090B` with a CSS-generated diagonal brushed texture and film grain |
| **Display type** | Josefin Sans, weight 200–300, uppercase, ~0.09em tracking |
| **Label type** | Oswald, condensed and bold — kickers, skill tags, buttons, nav |
| **Body type** | JetBrains Mono — the deck sets all technical copy in mono, so does the site |
| **Accent** | Steel blue `#5B82B8`, the "THINK BIG" blue |
| **Skill levels** | Beginner `#6FE35B` · Intermediate `#F2A33C` · Advanced `#E8453A` |
| **Devices** | Corner registration marks, hatched rules under headings, crosshair markers |

Everything is defined as CSS custom properties at the top of
[`src/styles/globals.css`](src/styles/globals.css). Changing a token there
re-skins the whole site.

## Content

Site copy lives in two editable modules — **edit these, not the components**:

- [`src/content/club.ts`](src/content/club.ts) — mission, purpose, links, programs,
  recruitment pitch, upcoming events, weekly cadence
- [`src/content/projects.ts`](src/content/projects.ts) — the EDGE teams: descriptions,
  skill levels, skills taught, goals, and each team's `theme`

Project artwork in `public/projects/` is exported from the intro deck.

### Adding an event

"What's Next" is driven by the `EVENTS` array in `club.ts`. Add an entry and it
appears — no component changes:

```ts
{
  id: 'rl-workshop',
  title: 'Reinforcement Learning',
  date: '2026-10-07',          // ISO, parsed as local time
  time: '5:00–6:00 PM',
  location: 'ARM 0131',
  kind: 'workshop',            // workshop | deadline | speaker | social
  poster: '/events/reinforcement-learning.jpg',   // optional 4:5 graphic
  posterAlt: '...',
  note: 'One line about it.',
}
```

The soonest event that has a poster becomes the big featured card; the rest list
below it. Past events drop off on their own — the cutoff is computed in the browser
after mount, because the site is statically generated and a build-time "today"
would go stale. Posters go in `public/events/` at 4:5 (1080×1350 works well).

### EDGE Teams (2026–2027)

Listed in display order — the array order in `projects.ts` is what the site shows,
and the first entry loads selected. Boldest work leads.

| Team | Level | Page | Goal |
|---|---|---|---|
| Project Lantern | `???` | `/projects/project-lantern` | Detect lanternflies early, predict where they spread |
| World Model Benchmark | Advanced | `/projects/world-model-benchmark` | Submit to the WACV 2027 workshop (due 11/23) |
| HEARTBEAT Challenge | Intermediate | `/projects/heartbeat-challenge` | Submit to the ICASSP 2027 challenge (due 12/11) |
| Assembly Jarvis | Intermediate | `/projects/assembly-jarvis` | Demo a working multimodal system in real time |
| UMD AI Advisor | Beginner | `/projects/umd-ai-advisor` | A deployed system 100 students use to get information quickly |

Project Lantern's level is `TBD` in the data, which renders as a glitched `???`
in violet — the deck leaves it undeclared, and the site says so loudly rather than
flattening it to a tidy label. Reorder the array to reorder the site.

### Team pages

Every team has its own page, generated at build time from `PROJECTS` by
[`pages/projects/[slug].tsx`](pages/projects/%5Bslug%5D.tsx), plus a flat index at
`/projects`. The shell is shared. The personality is not.

One field does it: **`theme`**. It sets the page's accent and chrome through a
`data-team` attribute, and it picks the ambient motif that runs behind the title.

| Theme | Accent | What moves behind the title |
|---|---|---|
| `lantern` | violet `#C77DFF` | Spotted lanternflies crawling the page; a few flash their scarlet hindwings |
| `worldmodel` | cyan `#5FD3E8` | Particles on a perspective grid — a solid ground-truth dot and the hollow prediction drifting off it |
| `heartbeat` | mint `#2BE3B0` | A live input stream scrolling past a read head, flat stretches and all, with a level meter |
| `jarvis` | gold `#FFB03A` | A HUD: scanline, boxes locking onto parts, a drifting reticle |
| `advisor` | red `#F2545B` | A prerequisite graph resolving, a pulse down each edge lighting the node it reaches |

Skill level keeps its own colour (`--lvl`) independently of the page accent, on
every page — the level means something, so it stays a traffic light everywhere.

**Adding or changing a motif:**

1. Add the name to `ProjectTheme` in `projects.ts` and set it on the team.
2. Add `[data-team='yourtheme'] { --accent: …; --accent-rgb: …; }` near the top of
   the *EDGE TEAM PAGES* block in `globals.css`.
3. Add a branch to `ProjectMotif` in
   [`components/projects/ProjectMotif.tsx`](components/projects/ProjectMotif.tsx)
   and its CSS to the *PROJECT MOTIFS* block.
4. Pose it for `prefers-reduced-motion` in the block at the very end of
   `globals.css` — see below.

Motifs are decorative: `aria-hidden`, `pointer-events: none`, pure SVG and CSS, no
canvas, no animation library, no image bytes, and no randomness, so the server and
the client render identical markup. `motifNote` on each project is the line under
the hero that owns up to what is moving back there.

## Stack

Next.js 15 (Pages Router) · React 18 · TypeScript (strict) · Jest + React Testing Library.

```
components/
  Navigation.tsx   site nav
  SiteFooter.tsx   shared footer (home + team pages)
  projects/
    ProjectMotif.tsx   the five ambient motifs
pages/
  index.tsx        the home page
  projects/
    index.tsx      the flat index of all five teams
    [slug].tsx     one page per team, SSG from PROJECTS
  carousel.tsx     component demo
  bento.tsx        component demo
  typography.tsx   type system spec
  fonts.tsx        type specimens
src/
  content/         editable site copy
  lib/dates.ts     event date helpers (no clock reads — "today" is passed in)
  fonts.ts         next/font setup
  styles/
    globals.css    the entire design system
public/projects/   EDGE team artwork
public/events/     event posters
```

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm test` | Jest |

> If you run `npm run build` and then `npm run dev`, delete `.next/` in between —
> the two share that directory and a stale production build breaks the dev server.

## Accessibility

- Semantic landmarks, real `<button>`/`<a>` elements, visible focus rings
- The project selector is a proper ARIA tablist with `aria-selected` / `aria-controls`
- Mobile menu closes on Escape, on click-outside, and on link activation
- `prefers-reduced-motion` disables all transitions and animations. The motifs get
  a second pass at the end of `globals.css`: a collapsed-to-0ms animation would park
  a crawling fly off-screen, so their animations are switched off outright and each
  motif is posed by hand instead — the personality stays, the motion goes
- Decorative marks are `aria-hidden`; every image has a real `alt`

## Intake state

EDGE applications for the 2026–27 cohort are **closed**. The site reflects this in
one place — flip `EDGE_APPLICATIONS_OPEN` in
[`src/content/club.ts`](src/content/club.ts) to `true` when the next cycle opens and
the Join section and "Inside EDGE" status pill switch back to a live link to the
application form. The form URLs stay in `LINKS` either way.

## Known gaps

- **Tailwind is configured but not active.** `tailwind.config.ts` and the PostCSS
  plugin are installed, but `globals.css` has never imported Tailwind, so utility
  classes do nothing. The site is styled entirely by hand-written CSS. Either wire
  Tailwind up or drop the dependency — right now it is dead weight.
- `components/ProjectCard.tsx` is unused.
- `components/BentoCard.tsx` optionally imports `framer-motion`, which is not a
  dependency. It falls back to CSS transforms, but the build logs a warning.
- The site has no live event calendar. "What's Next" is driven by the hand-edited
  `EVENTS` array, not a feed.
