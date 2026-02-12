import Navigation from '../components/Navigation'
import Carousel from '../components/Carousel'
import BentoCard from '../components/BentoCard'

const features = [
  {
    title: 'EDGE Projects',
    subtitle: 'Applied Machine Learning',
    description: 'Multi-quarter, team-led projects exploring real-world ML applications. From autonomous data labeling to campus dashboards — build practical systems and ship real impact.',
    icon: '🚀',
  },
  {
    title: 'Pyoneer Workshops',
    subtitle: 'Hands-on ML Curriculum',
    description: 'Beginner to advanced Python and ML workshops. Weekly hands-on sessions with exercises, notebooks, and recorded sessions. Learn by building.',
    icon: '🐍',
  },
  {
    title: 'Bitcamp Hackathon',
    subtitle: 'Weekend Innovation Sprint',
    description: 'Intensive 24-48 hour hackathons to prototype AI projects, collaborate across teams, and compete for mentorship prizes and recognition.',
    icon: '⚡',
  },
  {
    title: 'Research Spotlight',
    subtitle: 'Student-Led Exploration',
    description: 'Peer-reviewed research groups diving deep into cutting-edge ML topics. Present your findings, publish papers, and contribute to the field.',
    icon: '📚',
  },
]

const projects = [
  {
    title: 'Autonomous Data Labeler',
    description: 'A semi-supervised labeling pipeline that reduces annotation costs by 60% using active learning and human-in-the-loop feedback.',
    tags: ['Active Learning', 'NLP', 'Python'],
  },
  {
    title: 'Campus ML Dashboard',
    description: 'Real-time analytics platform visualizing student project outcomes, team velocity, and workshop engagement across semesters.',
    tags: ['React', 'D3.js', 'FastAPI'],
  },
  {
    title: 'Pyoneer Curriculum',
    description: 'A structured sequence of hands-on Python and ML modules — from pandas basics to deploying transformer models in production.',
    tags: ['Education', 'PyTorch', 'Jupyter'],
  },
]

export default function Home() {
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
                <span className="carousel-card__icon">{f.icon}</span>
                <h3 className="carousel-card__title">{f.title}</h3>
                <p className="carousel-card__subtitle">{f.subtitle}</p>
                <p className="carousel-card__desc">{f.description}</p>
                <button className="btn-primary carousel-card__cta">Learn More</button>
              </div>
            ))}
          </Carousel>
        </section>

        {/* ── Projects (Bento Grid) ── */}
        <section id="projects" className="section">
          <div className="section-header">
            <p className="kicker-small">EDGE &middot; Multi-quarter Team Projects</p>
            <h2 className="h2-serif">Featured Projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <BentoCard key={p.title} title={p.title} subtitle={p.tags.join(' · ')}>
                <p className="project-desc">{p.description}</p>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </BentoCard>
            ))}
          </div>
        </section>

        {/* ── Workshops & Events ── */}
        <section id="workshops" className="section">
          <div className="section-header">
            <p className="kicker-small">Learn &middot; Build &middot; Compete</p>
            <h2 className="h2-serif">Workshops &amp; Events</h2>
          </div>
          <div className="workshops-grid">
            <div className="card workshop-card">
              <span className="workshop-icon">🐍</span>
              <div>
                <h4 className="workshop-title">Pyoneer — Intro to ML</h4>
                <p className="workshop-desc">Weekly hands-on sessions from pandas basics to building neural networks. Exercises, notebooks, and recorded sessions included.</p>
              </div>
            </div>
            <div className="card workshop-card">
              <span className="workshop-icon">⚡</span>
              <div>
                <h4 className="workshop-title">Bitcamp — Weekend Hackathon</h4>
                <p className="workshop-desc">48-hour prototyping sprints where teams build AI-powered products, compete for prizes, and connect with industry mentors.</p>
              </div>
            </div>
            <div className="card workshop-card">
              <span className="workshop-icon">🎤</span>
              <div>
                <h4 className="workshop-title">Speaker Series</h4>
                <p className="workshop-desc">Monthly talks from researchers, engineers, and founders working on the frontier of machine learning and AI systems.</p>
              </div>
            </div>
            <div className="card workshop-card">
              <span className="workshop-icon">🤝</span>
              <div>
                <h4 className="workshop-title">Mentorship Program</h4>
                <p className="workshop-desc">1-on-1 pairing with senior members and alumni for project guidance, career advice, and skill development throughout the semester.</p>
              </div>
            </div>
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
