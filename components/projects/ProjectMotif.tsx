import type { CSSProperties } from 'react'
import type { ProjectTheme } from '../../src/content/projects'

/* ════════════════════════════════════════════════════════════════════
   PROJECT MOTIFS
   One ambient layer per EDGE team, so a team page looks like the thing
   the team is actually building. Every motif here is decorative: the
   wrapper is aria-hidden and pointer-events: none, nothing it draws
   carries information, and `prefers-reduced-motion` parks all of it
   (see the end of globals.css).

   Pure SVG + CSS — no canvas, no animation library, no image bytes, and
   no randomness, so the server and the client render the same markup.
   ════════════════════════════════════════════════════════════════════ */

/** Inline CSS custom properties, which React's types do not cover. */
const vars = (v: Record<string, string | number>) => v as CSSProperties

export default function ProjectMotif({ theme }: { theme: ProjectTheme }) {
  return (
    <div className="motif" data-motif={theme} aria-hidden="true">
      {theme === 'lantern' && <Lanternflies />}
      {theme === 'worldmodel' && <ParticleField />}
      {theme === 'heartbeat' && <Waveform />}
      {theme === 'jarvis' && <Hud />}
      {theme === 'advisor' && <PrereqGraph />}
    </div>
  )
}

/* ── Project Lantern ─────────────────────────────────────────────────
   Spotted lanternflies crawling across the page. Dorsal view, so a fly
   can be rotated to any heading and still look right. Each one gets its
   own size, heading, distance, pace and start offset; a couple startle
   and flash the scarlet hindwings that give the species away.
   ─────────────────────────────────────────────────────────────────── */

type FlySpec = {
  x: number       // start, % of the layer
  y: number
  w: number       // body length, px
  r: number       // heading, deg
  dx: number      // distance travelled along that heading, px
  t: number       // seconds for the trip
  d: number       // start delay, seconds
  flick?: boolean // flashes its hindwings
}

const FLIES: FlySpec[] = [
  { x: 2,  y: 66, w: 50, r: -5,   dx: 340,  t: 30, d: 0,  flick: true },
  { x: 80, y: 15, w: 34, r: 171,  dx: -250, t: 38, d: 4 },
  { x: 31, y: 85, w: 27, r: 9,    dx: 210,  t: 25, d: 9 },
  { x: 71, y: 72, w: 42, r: -151, dx: -190, t: 43, d: 2,  flick: true },
  { x: 11, y: 26, w: 23, r: 26,   dx: 165,  t: 28, d: 15 },
  { x: 93, y: 52, w: 31, r: 194,  dx: -205, t: 34, d: 7 },
  { x: 45, y: 8,  w: 21, r: -17,  dx: 145,  t: 32, d: 19 },
  { x: 60, y: 94, w: 36, r: -169, dx: -230, t: 40, d: 12, flick: true },
]

function Lanternflies() {
  return (
    <>
      {FLIES.map((f, i) => (
        <span
          className="fly"
          key={i}
          style={vars({
            '--x': `${f.x}%`,
            '--y': `${f.y}%`,
            '--w': `${f.w}px`,
            '--r': `${f.r}deg`,
            '--dx': `${f.dx}px`,
            '--t': `${f.t}s`,
            '--d': `${f.d}s`,
          })}
        >
          <Fly flick={f.flick} />
        </span>
      ))}

      {/* One perched on the frame, going nowhere, just breathing. */}
      <span
        className="fly fly--perched"
        style={vars({ '--x': '87%', '--y': '82%', '--w': '58px', '--r': '-13deg' })}
      >
        <Fly flick />
      </span>
    </>
  )
}

function Fly({ flick }: { flick?: boolean }) {
  return (
    <svg
      className={`fly__svg${flick ? ' fly__svg--flick' : ''}`}
      viewBox="0 0 62 40"
      role="presentation"
    >
      {/* scarlet hindwings — folded away until it startles */}
      <g className="fly__hind">
        <path d="M14 18 C18 5 32 -1 49 4 C41 14 28 18 16 19 Z" />
        <path d="M14 22 C18 35 32 41 49 36 C41 26 28 22 16 21 Z" />
        <circle cx="27" cy="9" r="1.5" />
        <circle cx="36" cy="7" r="1.2" />
        <circle cx="27" cy="31" r="1.5" />
        <circle cx="36" cy="33" r="1.2" />
      </g>

      {/* legs, three a side, bent at the knee */}
      <g className="fly__legs">
        <path d="M44 9.5 L49.5 4.2 L55.5 2.2" />
        <path d="M33 7.6 L33.8 2.2 L30 0.4" />
        <path d="M22 11 L17.6 5.2 L11.5 2.8" />
        <path d="M44 30.5 L49.5 35.8 L55.5 37.8" />
        <path d="M33 32.4 L33.8 37.8 L30 39.6" />
        <path d="M22 29 L17.6 34.8 L11.5 37.2" />
      </g>

      {/* forewings, tented over the back */}
      <g className="fly__fore">
        <path d="M8 19.2 C11 11 19 7.4 29 7 C42 6.5 50 10.8 53 16.6 L53 19.2 Z" />
        <path d="M8 20.8 C11 29 19 32.6 29 33 C42 33.5 50 29.2 53 23.4 L53 20.8 Z" />
      </g>

      {/* the reticulated rear third */}
      <g className="fly__retic">
        <path d="M8 19.2 C9.2 14.6 12.4 11.4 16.4 9.6 L20 18.9 Z" />
        <path d="M8 20.8 C9.2 25.4 12.4 28.6 16.4 30.4 L20 21.1 Z" />
      </g>

      {/* the spots it is named for */}
      <g className="fly__spots">
        <circle cx="26" cy="12" r="1.6" />
        <circle cx="34" cy="11" r="1.5" />
        <circle cx="42" cy="13" r="1.3" />
        <circle cx="30" cy="16" r="1.1" />
        <circle cx="38.5" cy="16.2" r="0.95" />
        <circle cx="21.5" cy="15" r="0.9" />
        <circle cx="26" cy="28" r="1.6" />
        <circle cx="34" cy="29" r="1.5" />
        <circle cx="42" cy="27" r="1.3" />
        <circle cx="30" cy="24" r="1.1" />
        <circle cx="38.5" cy="23.8" r="0.95" />
        <circle cx="21.5" cy="25" r="0.9" />
      </g>

      {/* the seam where the wings meet, then thorax and head */}
      <rect className="fly__seam" x="8" y="19.2" width="45" height="1.6" rx="0.8" />
      <ellipse className="fly__thorax" cx="50" cy="20" rx="5" ry="3.1" />
      <circle className="fly__head" cx="56" cy="20" r="2.6" />
      <g className="fly__ant">
        <path d="M57.6 18.5 L61.4 15.2" />
        <path d="M57.6 21.5 L61.4 24.8" />
      </g>
    </svg>
  )
}

/* ── World Model Benchmark ───────────────────────────────────────────
   Pairs of particles on a perspective grid. The solid dot is ground
   truth; the hollow one is a prediction leaving it. The gap between
   them is what the benchmark measures.
   ─────────────────────────────────────────────────────────────────── */

type PairSpec = {
  x: number
  y: number
  tx: number  // truth displacement, px
  ty: number
  px: number  // prediction displacement — deliberately off
  py: number
  t: number
  d: number
}

const PAIRS: PairSpec[] = [
  { x: 8,  y: 34, tx: 210, ty: 90,  px: 150, py: 24,  t: 13, d: 0 },
  { x: 26, y: 12, tx: 160, ty: 150, px: 190, py: 70,  t: 16, d: 2.5 },
  { x: 54, y: 22, tx: -130, ty: 130, px: -70, py: 160, t: 15, d: 6 },
  { x: 76, y: 8,  tx: -180, ty: 110, px: -200, py: 40, t: 18, d: 1.2 },
  { x: 90, y: 40, tx: -220, ty: 70,  px: -140, py: 130, t: 14, d: 8 },
  { x: 40, y: 48, tx: 120, ty: -90,  px: 60,  py: -40,  t: 17, d: 4 },
  { x: 64, y: 58, tx: -90, ty: -120, px: -130, py: -50, t: 15, d: 10 },
  { x: 16, y: 58, tx: 170, ty: -60,  px: 110, py: -110, t: 19, d: 7 },
]

function ParticleField() {
  return (
    <>
      <span className="pf-grid" />
      {PAIRS.map((p, i) => (
        <span
          className="pf-pair"
          key={i}
          style={vars({
            '--x': `${p.x}%`,
            '--y': `${p.y}%`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--px': `${p.px}px`,
            '--py': `${p.py}px`,
            '--t': `${p.t}s`,
            '--d': `${p.d}s`,
          })}
        >
          <span className="pf-dot pf-dot--truth" />
          <span className="pf-dot pf-dot--pred" />
        </span>
      ))}
    </>
  )
}

/* ── HEARTBEAT Challenge ─────────────────────────────────────────────
   A live input stream scrolling past a fixed read head, with real flat
   stretches in it — telling signal from silence is half the task. The
   level meter answers the wave; the rings are the agent listening.
   ─────────────────────────────────────────────────────────────────── */

/* Amplitudes, fixed rather than random so SSR and the client agree:
   a spike, chatter, then genuine silence, repeating unevenly. */
const WAVE_STEPS = [
  0, 0, 0, 0, -27, 21, -7, 0, 0, 0,
  8, -11, 6, -4, 10, -7, 3, 0, 0, 0, 0, 0, 0, 0,
  -19, 15, -4, 0, 6, -9, 4, -6, 8, -3, 0, 0, 0, 0, 0, 0,
  -31, 25, -9, 2, 0, 5, -6, 3, -4, 2, 0, 0, 0, 0, 0, 0, 0, 0,
]
const WAVE_STEP_W = 16
const WAVE_MID = 42
const WAVE_REPS = 2
const WAVE_W = WAVE_STEPS.length * WAVE_REPS * WAVE_STEP_W

/** Two identical passes side by side, so scrolling by exactly half loops. */
function wavePath() {
  const pts: string[] = []
  let x = 0
  for (let r = 0; r < WAVE_REPS; r++) {
    for (const a of WAVE_STEPS) {
      pts.push(`${x} ${WAVE_MID + a}`)
      x += WAVE_STEP_W
    }
  }
  pts.push(`${x} ${WAVE_MID}`)
  return `M${pts.join(' L')}`
}
const WAVE_D = wavePath()

const VU = [0.35, 0.7, 0.45, 0.95, 0.6, 0.8, 0.3, 0.55]

function Waveform() {
  return (
    <>
      <span className="wave">
        <svg viewBox={`0 0 ${WAVE_W} 84`} preserveAspectRatio="none" role="presentation">
          <path className="wave__line" d={WAVE_D} vectorEffect="non-scaling-stroke" />
        </svg>
      </span>

      {/* the read head the stream passes under */}
      <span className="wave__head" />

      {/* level meter */}
      <span className="vu">
        {VU.map((h, i) => (
          <span
            className="vu__bar"
            key={i}
            style={vars({ '--h': h, '--d': `${i * 0.11}s` })}
          />
        ))}
      </span>

      {/* listening */}
      <span className="listen">
        <span className="listen__ring" style={vars({ '--d': '0s' })} />
        <span className="listen__ring" style={vars({ '--d': '1.4s' })} />
        <span className="listen__ring" style={vars({ '--d': '2.8s' })} />
      </span>
    </>
  )
}

/* ── Assembly Jarvis ────────────────────────────────────────────────
   Roughly the assistant's own view: a scanline sweeping the frame,
   boxes locking onto parts and letting go, a reticle drifting between
   them. Labels are chrome, not readings.
   ─────────────────────────────────────────────────────────────────── */

type BoxSpec = {
  x: number
  y: number
  w: number
  h: number
  t: number
  d: number
  tag: string
}

/* Kept small on purpose: a box the size of a part reads as a detection,
   a box the size of the viewport reads as a border. */
const BOXES: BoxSpec[] = [
  { x: 10, y: 22, w: 13, h: 15, t: 8,  d: 0,   tag: 'Lock' },
  { x: 63, y: 14, w: 15, h: 12, t: 9,  d: 2.4, tag: 'Track' },
  { x: 40, y: 58, w: 16, h: 14, t: 11, d: 4.8, tag: 'Seen' },
  { x: 79, y: 56, w: 10, h: 16, t: 7,  d: 6.6, tag: 'Lock' },
  { x: 24, y: 70, w: 9,  h: 11, t: 10, d: 1.3, tag: 'Track' },
  { x: 52, y: 27, w: 11, h: 13, t: 12, d: 8.2, tag: 'Track' },
  { x: 88, y: 32, w: 8,  h: 10, t: 9,  d: 3.7, tag: 'Seen' },
]

function Hud() {
  return (
    <>
      <span className="hud-grid" />
      <span className="hud-scan" />

      {BOXES.map((b, i) => (
        <span
          className="hud-box"
          key={i}
          style={vars({
            '--x': `${b.x}%`,
            '--y': `${b.y}%`,
            '--w': `${b.w}%`,
            '--h': `${b.h}%`,
            '--t': `${b.t}s`,
            '--d': `${b.d}s`,
          })}
        >
          <span className="hud-box__tag">{b.tag}</span>
        </span>
      ))}

      <span className="hud-reticle">
        <span className="hud-reticle__ring" />
      </span>
    </>
  )
}

/* ── UMD AI Advisor ─────────────────────────────────────────────────
   A prerequisite chain resolving: a pulse runs down each edge and the
   node at the far end lights when it arrives. This is the shape of the
   problem the advisor has to walk.
   ─────────────────────────────────────────────────────────────────── */

/* A deliberately large coordinate space: the SVG is scaled to cover the
   hero, so small numbers here would blow a 9-unit node up to 70px. */
const GRAPH_NODES = [
  { id: 'a', x: 90,   y: 180 },
  { id: 'b', x: 90,   y: 420 },
  { id: 'c', x: 90,   y: 640 },
  { id: 'd', x: 330,  y: 110 },
  { id: 'e', x: 330,  y: 330 },
  { id: 'f', x: 330,  y: 560 },
  { id: 'g', x: 330,  y: 720 },
  { id: 'h', x: 570,  y: 200 },
  { id: 'i', x: 570,  y: 430 },
  { id: 'j', x: 570,  y: 660 },
  { id: 'k', x: 810,  y: 130 },
  { id: 'l', x: 810,  y: 360 },
  { id: 'm', x: 810,  y: 600 },
  { id: 'n', x: 1050, y: 250 },
  { id: 'o', x: 1050, y: 520 },
] as const

const GRAPH_EDGES: [string, string][] = [
  ['a', 'd'], ['a', 'e'], ['b', 'e'], ['b', 'f'], ['c', 'f'], ['c', 'g'],
  ['d', 'h'], ['e', 'h'], ['e', 'i'], ['f', 'i'], ['f', 'j'], ['g', 'j'],
  ['h', 'k'], ['i', 'k'], ['i', 'l'], ['j', 'l'], ['j', 'm'],
  ['k', 'n'], ['l', 'n'], ['l', 'o'], ['m', 'o'],
]

/* How deep in the chain each node sits — it decides when the pulse
   reaching it should light it up. */
const GRAPH_DEPTH: Record<string, number> = {
  a: 0, b: 0, c: 0,
  d: 1, e: 1, f: 1, g: 1,
  h: 2, i: 2, j: 2,
  k: 3, l: 3, m: 3,
  n: 4, o: 4,
}

const NODE = 22

const nodeAt = (id: string) => GRAPH_NODES.find((n) => n.id === id)

function PrereqGraph() {
  const edges = GRAPH_EDGES.map(([from, to]) => {
    const a = nodeAt(from)
    const b = nodeAt(to)
    if (!a || !b) return null
    // bow each edge slightly so parallel runs stay legible
    const mx = (a.x + b.x) / 2
    const my = (a.y + b.y) / 2 + (b.y - a.y) * 0.14
    return { d: `M${a.x} ${a.y} Q${mx} ${my} ${b.x} ${b.y}`, from }
  }).filter(Boolean) as { d: string; from: string }[]

  return (
    <svg
      className="graph"
      viewBox="0 0 1140 830"
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
    >
      <g className="graph__base">
        {edges.map((e, i) => (
          <path d={e.d} key={`base-${i}`} />
        ))}
      </g>

      <g className="graph__pulses">
        {edges.map((e, i) => (
          <path
            className="graph__pulse"
            d={e.d}
            pathLength={100}
            key={`pulse-${i}`}
            style={vars({
              '--d': `${(GRAPH_DEPTH[e.from] ?? 0) * 1.1 + (i % 3) * 0.16}s`,
            })}
          />
        ))}
      </g>

      <g className="graph__nodes">
        {GRAPH_NODES.map((n) => (
          <g
            key={n.id}
            style={vars({ '--d': `${(GRAPH_DEPTH[n.id] ?? 0) * 1.1 + 0.85}s` })}
          >
            <rect
              className="graph__node"
              x={n.x - NODE / 2}
              y={n.y - NODE / 2}
              width={NODE}
              height={NODE}
              rx="2"
            />
            <rect
              className="graph__node-lit"
              x={n.x - NODE / 2}
              y={n.y - NODE / 2}
              width={NODE}
              height={NODE}
              rx="2"
            />
          </g>
        ))}
      </g>
    </svg>
  )
}
