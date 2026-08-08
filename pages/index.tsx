import { useState } from 'react'
import Navigation from '../components/Navigation'
import Carousel from '../components/Carousel'

const features = [
  {
    title: 'EDGE Projects',
    subtitle: 'Applied Machine Learning',
    description: 'Multi-quarter, team-led projects exploring real-world ML applications. From autonomous data labeling to campus dashboards — build practical systems and ship real impact.',
  },
  {
    title: 'Pyoneer Workshops',
    subtitle: 'Hands-on ML Curriculum',
    description: 'Beginner to advanced Python and ML workshops. Weekly hands-on sessions with exercises, notebooks, and recorded sessions. Learn by building.',
  },
  {
    title: 'Bitcamp Hackathon',
    subtitle: 'Weekend Innovation Sprint',
    description: 'Intensive 24-48 hour hackathons to prototype AI projects, collaborate across teams, and compete for mentorship prizes and recognition.',
  },
  {
    title: 'Research Spotlight',
    subtitle: 'Student-Led Exploration',
    description: 'Peer-reviewed research groups diving deep into cutting-edge ML topics. Present your findings, publish papers, and contribute to the field.',
  },
]

const projects = [
  {
    title: 'Vex Voodoo Recommendation Engine',
    tabLabel: 'Vex Voodoo',
    description:
      'Builds an agent-based AI system that generates architecture recommendations by combining recommender systems with autonomous reasoning.',
    tags: ['multi-agent systems', 'recommender systems', 'AI architecture'],
    leaders: ['TBD'],
    thumbColorA: '#2563EB',
    thumbColorB: '#0EA5E9',
  },
  {
    title: 'Skin Lesion Analysis',
    tabLabel: 'Skin Lesion',
    description:
      'Uses JEPA-based self-supervised learning to align medical images and improve skin cancer diagnosis accuracy.',
    tags: ['self-supervised learning', 'medical AI', 'computer vision'],
    leaders: ['TBD'],
    thumbColorA: '#DC2626',
    thumbColorB: '#F97316',
  },
  {
    title: 'AI Dungeon Master',
    tabLabel: 'Dungeon Master',
    description:
      'Creates a real-time storytelling agent that adapts narratives dynamically based on player input and persistent world state.',
    tags: ['LLM agents', 'interactive systems', 'game AI'],
    leaders: ['TBD'],
    thumbColorA: '#6366F1',
    thumbColorB: '#8B5CF6',
  },
  {
    title: 'Autonomous Warehouse Route Planner',
    tabLabel: 'Warehouse RL',
    description:
      'Trains reinforcement learning agents to optimize multi-robot navigation and logistics in warehouse environments.',
    tags: ['reinforcement learning', 'robotics', 'optimization'],
    leaders: ['TBD'],
    thumbColorA: '#059669',
    thumbColorB: '#22C55E',
  },
  {
    title: 'AI Medical Report Summarizer & Risk Flagger',
    tabLabel: 'Med Reports',
    description:
      'Develops an LLM-powered system to summarize complex medical reports and identify potential health risks using RAG and tool-augmented reasoning.',
    tags: ['NLP', 'LLMs', 'healthcare AI'],
    leaders: ['TBD'],
    thumbColorA: '#B45309',
    thumbColorB: '#F59E0B',
  },
]

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']

type EventType = 'workshop' | 'hackathon' | 'speaker' | 'social'

type CalendarEvent = {
  label: string
  type: EventType
  color: string
  detail: string
}

const EVENT_CATEGORIES: { type: EventType; label: string; color: string; count: string; desc: string }[] = [
  { type: 'workshop', label: 'Workshops', color: '#2563EB', count: '08 Planned', desc: 'Hands-on Pyoneer labs covering Python, ML, and deep learning.' },
  { type: 'hackathon', label: 'Hackathons', color: '#DC2626', count: '02 Active', desc: 'Bitcamp sprints and hack nights — 24-48 hour builds.' },
  { type: 'speaker', label: 'Speakers', color: '#8B5CF6', count: '04 Planned', desc: 'Monthly talks from researchers, engineers, and founders.' },
  { type: 'social', label: 'Socials', color: '#059669', count: '03 Planned', desc: 'Community meetups, mentorship mixers, and cross-team bonding.' },
]

const calendarEvents: Record<string, CalendarEvent> = {
  '2026-03-20': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Intro to Pandas and data wrangling basics.' },
  '2026-03-27': { label: 'Speaker Series', type: 'speaker', color: '#8B5CF6', detail: 'Guest talk on large-scale ML infrastructure.' },
  '2026-04-03': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Neural network fundamentals with PyTorch.' },
  '2026-04-09': { label: 'Hack Night', type: 'hackathon', color: '#DC2626', detail: 'Open-format evening hack session — bring your project.' },
  '2026-04-10': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Convolutional networks and image classification.' },
  '2026-04-15': { label: 'Speaker Series', type: 'speaker', color: '#8B5CF6', detail: 'Research talk on self-supervised learning methods.' },
  '2026-04-17': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Transfer learning and fine-tuning pretrained models.' },
  '2026-04-22': { label: 'Community Social', type: 'social', color: '#059669', detail: 'Casual mixer with pizza and project demos.' },
  '2026-04-24': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Sequence models — RNNs, LSTMs, and attention.' },
  '2026-04-26': { label: 'Bitcamp Day 1', type: 'hackathon', color: '#DC2626', detail: 'Kickoff, team formation, and hacking begins.' },
  '2026-04-27': { label: 'Bitcamp Day 2', type: 'hackathon', color: '#DC2626', detail: 'Final submissions, demos, and awards.' },
  '2026-05-01': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Intro to transformers and HuggingFace.' },
  '2026-05-08': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Deploying ML models to production.' },
  '2026-05-13': { label: 'Speaker Series', type: 'speaker', color: '#8B5CF6', detail: 'Industry panel on AI careers and hiring.' },
  '2026-05-16': { label: 'End-of-Sem Social', type: 'social', color: '#059669', detail: 'Wrap-up celebration and project showcase.' },
  '2026-05-22': { label: 'Pyoneer Workshop', type: 'workshop', color: '#2563EB', detail: 'Reinforcement learning fundamentals.' },
}

function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function buildCalendarGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const daysInPrev = new Date(year, month, 0).getDate()

  // Monday = 0 ... Sunday = 6
  const startOffset = (firstDay + 6) % 7

  const cells: { day: number; current: boolean; key: string }[] = []

  // Previous month filler
  for (let i = startOffset - 1; i >= 0; i--) {
    const d = daysInPrev - i
    const pm = month === 0 ? 11 : month - 1
    const py = month === 0 ? year - 1 : year
    cells.push({ day: d, current: false, key: `${py}-${String(pm + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true, key: `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
  }

  // Next month filler to complete the grid row
  const remaining = (7 - (cells.length % 7)) % 7
  for (let d = 1; d <= remaining; d++) {
    const nm = month === 11 ? 0 : month + 1
    const ny = month === 11 ? year + 1 : year
    cells.push({ day: d, current: false, key: `${ny}-${String(nm + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}` })
  }

  return cells
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const active = projects[activeProject]

  const [calMonth, setCalMonth] = useState(3) // April (0-indexed)
  const [calYear, setCalYear] = useState(2026)
  const [activeFilter, setActiveFilter] = useState<EventType | null>(null)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const today = todayKey()
  const calCells = buildCalendarGrid(calYear, calMonth)

  const selectedEvent = selectedDate ? calendarEvents[selectedDate] ?? null : null

  function prevMonth() {
    setSelectedDate(null)
    if (calMonth === 0) { setCalMonth(11); setCalYear(y => y - 1) }
    else setCalMonth(m => m - 1)
  }
  function nextMonth() {
    setSelectedDate(null)
    if (calMonth === 11) { setCalMonth(0); setCalYear(y => y + 1) }
    else setCalMonth(m => m + 1)
  }

  function toggleFilter(type: EventType) {
    setActiveFilter(f => f === type ? null : type)
    setSelectedDate(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      <Navigation />

      <main className="homepage-main">
        {/* ── Hero ── */}
        <section id="hero" className="hero-section">
          <p className="kicker-small">Student-run AI Club</p>
          <h1 className="hero-title">
            Applied Machine Learning,<br />Built Together
          </h1>
          <p className="hero-lead">
            Cross-disciplinary projects, hands-on workshops, and research that
            bridges coursework to real-world impact. Join a project, teach a
            workshop, or attend an event.
          </p>
          <div className="hero-cta-row">
            <a className="btn-primary" href="#join">Join Us</a>
            <a className="btn-secondary" href="#projects">Explore Projects</a>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="section">
          <div className="section-header">
            <p className="kicker-small">Who We Are</p>
            <h2 className="h2-serif">About BigThinkAI</h2>
          </div>
          <div className="about-content">
            <p>
              BigThinkAI is a student-run club focused on applied machine learning,
              research, and community learning. We organize cross-disciplinary
              projects (EDGE), hands-on workshops (Pyoneer), hackathons (Bitcamp),
              speaker series, and student-led research groups.
            </p>
            <p>
              Our goal is to build practical AI projects, teach production-level
              skills, and create pathways from coursework to real-world impact — all
              within a supportive, beginner-friendly community.
            </p>
          </div>
        </section>

        {/* ── Featured Initiatives Carousel ── */}
        <section id="featured" className="section">
          <div className="section-header">
            <p className="kicker-small">What We Do</p>
            <h2 className="h2-serif">Featured Initiatives</h2>
          </div>
          <Carousel
            autoPlay
            autoPlayInterval={6000}
            showIndicators
            showControls
          >
            {features.map((f) => (
              <div key={f.title} className="carousel-card">
                <h3 className="carousel-card__title">{f.title}</h3>
                <p className="carousel-card__subtitle">{f.subtitle}</p>
                <p className="carousel-card__desc">{f.description}</p>
                <button className="btn-primary carousel-card__cta">Learn More</button>
              </div>
            ))}
          </Carousel>
        </section>

        {/* ── Projects (Showcase + Tabs) ── */}
        <section id="projects" className="section">
          <div className="section-header">
            <p className="kicker-small">EDGE &middot; Multi-quarter Team Projects</p>
            <h2 className="h2-serif">Featured Projects</h2>
          </div>

          <div className="project-showcase">
            {/* Left: showcase panel */}
            <div
              className="project-showcase__panel"
              style={{ background: active.thumbColorA }}
            >
              <h3 className="project-showcase__title">{active.title}</h3>
              <p className="project-showcase__desc">{active.description}</p>
              <div className="project-showcase__tags">
                {active.tags.map((t) => (
                  <span key={t} className="project-showcase__tag">{t}</span>
                ))}
              </div>
              <div className="project-showcase__leaders">
                <span className="project-showcase__leaders-label">Project Leaders</span>
                <span className="project-showcase__leaders-names">
                  {active.leaders.join(' · ')}
                </span>
              </div>
            </div>

            {/* Right: stacked tabs */}
            <div className="project-tabs" role="tablist" aria-label="Project tabs">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  role="tab"
                  aria-selected={i === activeProject}
                  className={`project-tab ${i === activeProject ? 'project-tab--active' : ''}`}
                  style={{
                    '--tab-color-a': p.thumbColorA,
                    '--tab-color-b': p.thumbColorB,
                  } as React.CSSProperties}
                  onClick={() => setActiveProject(i)}
                >
                  <span className="project-tab__label">{p.tabLabel}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workshops & Events ── */}
        <section id="workshops" className="section">
          <div className="section-header">
            <p className="kicker-small">Learn &middot; Build &middot; Compete</p>
            <h2 className="h2-serif">Workshops &amp; Events</h2>
          </div>

          <div className="events-layout">
            {/* Left: mini calendar */}
            <div className="events-calendar">
              <div className="events-calendar__header">
                <h3 className="events-calendar__month">{MONTH_NAMES[calMonth]} {calYear}</h3>
                <div className="events-calendar__nav">
                  <button className="events-calendar__arrow" aria-label="Previous month" onClick={prevMonth}>&lsaquo;</button>
                  <button className="events-calendar__arrow" aria-label="Next month" onClick={nextMonth}>&rsaquo;</button>
                </div>
              </div>

              {/* Detail strip — shown when a day with an event is clicked */}
              {selectedEvent && selectedDate && (
                <div className="events-calendar__detail" style={{ borderLeftColor: selectedEvent.color }}>
                  <div className="events-calendar__detail-head">
                    <span className="events-calendar__detail-dot" style={{ background: selectedEvent.color }} />
                    <span className="events-calendar__detail-label">{selectedEvent.label}</span>
                    <span className="events-calendar__detail-date">{selectedDate}</span>
                  </div>
                  <p className="events-calendar__detail-text">{selectedEvent.detail}</p>
                </div>
              )}

              {/* Color legend */}
              <div className="events-calendar__legend">
                {EVENT_CATEGORIES.map((cat) => (
                  <span
                    key={cat.type}
                    className={`events-calendar__legend-item${activeFilter === cat.type ? ' events-calendar__legend-item--active' : ''}`}
                    onClick={() => toggleFilter(cat.type)}
                  >
                    <span className="events-calendar__legend-dot" style={{ background: cat.color }} />
                    {cat.label}
                  </span>
                ))}
                {activeFilter && (
                  <button className="events-calendar__legend-clear" onClick={() => { setActiveFilter(null); setSelectedDate(null) }}>
                    Clear
                  </button>
                )}
              </div>

              <div className="events-calendar__days">
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                  <span key={d} className="events-calendar__day-label">{d}</span>
                ))}
              </div>

              <div className="events-calendar__grid">
                {calCells.map((cell) => {
                  const ev = calendarEvents[cell.key]
                  const isToday = cell.key === today
                  const isSelected = cell.key === selectedDate
                  const isFiltered = ev && activeFilter && ev.type !== activeFilter
                  const showDot = ev && !isFiltered

                  return (
                    <button
                      key={cell.key}
                      type="button"
                      className={[
                        'events-calendar__cell',
                        !cell.current && 'events-calendar__cell--muted',
                        showDot && 'events-calendar__cell--event',
                        isToday && 'events-calendar__cell--today',
                        isSelected && 'events-calendar__cell--selected',
                      ].filter(Boolean).join(' ')}
                      onClick={() => {
                        if (ev && showDot) setSelectedDate(cell.key === selectedDate ? null : cell.key)
                      }}
                      tabIndex={cell.current ? 0 : -1}
                    >
                      <span className="events-calendar__date">{cell.day}</span>
                      {showDot && (
                        <span className="events-calendar__dot" style={{ background: ev.color }} />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right: event categories sidebar */}
            <div className="events-sidebar">
              <h3 className="events-sidebar__heading">Events</h3>

              {EVENT_CATEGORIES.map((cat) => (
                <button
                  key={cat.type}
                  type="button"
                  className={`events-protocol${activeFilter === cat.type ? ' events-protocol--active' : ''}`}
                  onClick={() => toggleFilter(cat.type)}
                >
                  <span className="events-protocol__dot" style={{ background: cat.color }} />
                  <span className="events-protocol__count">{cat.count}</span>
                  <span className="events-protocol__title">{cat.label}</span>
                  <span className="events-protocol__desc">{cat.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Join / CTA ── */}
        <section id="join" className="section join-section">
          <div className="join-card">
            <h2 className="h2-serif">Get Involved</h2>
            <p className="join-desc">
              Sign up to receive updates on projects, workshops, and events.
              Whether you&apos;re a beginner or a researcher — there&apos;s a place for you.
            </p>
            <form
              className="join-form"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks for signing up! (Demo)')
              }}
            >
              <input
                aria-label="Email address"
                className="join-input"
                type="email"
                placeholder="your@university.edu"
                required
              />
              <button className="btn-primary" type="submit">Sign Up</button>
            </form>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <strong className="footer-logo">BigThinkAI</strong>
            <p className="footer-tagline">Applied ML &middot; Research &middot; Community</p>
          </div>
          <div className="footer-links">
            <a href="mailto:contact@bigthinkai.org">Email</a>
            <a href="https://github.com/bigthinkai" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com/bigthinkai" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/bigthinkai" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com/company/bigthinkai" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} BigThinkAI Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
