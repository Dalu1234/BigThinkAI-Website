import Navigation from '../components/Navigation'

/* ── AI + X domain data ── */
const roadmapData = [
  {
    id: 'psychology',
    title: 'AI + Psychology',
    color: '#8B5CF6',
    colorLight: 'rgba(139, 92, 246, 0.08)',
    description: 'Cognitive modeling, sentiment analysis, behavioral prediction & therapeutic AI assistants.',
    children: [
      'Sentiment & Emotion Detection',
      'Cognitive Behavioral Therapy Bots',
      'Behavioral Pattern Prediction',
      'Neuro-Symbolic Reasoning',
    ],
  },
  {
    id: 'finance',
    title: 'AI + Finance',
    color: '#059669',
    colorLight: 'rgba(5, 150, 105, 0.08)',
    description: 'Algorithmic trading, fraud detection, credit scoring & financial forecasting models.',
    children: [
      'Algorithmic & Quant Trading',
      'Fraud & Anomaly Detection',
      'Credit Risk Scoring',
      'Financial NLP & Forecasting',
    ],
  },
  {
    id: 'healthcare',
    title: 'AI + Healthcare',
    color: '#DC2626',
    colorLight: 'rgba(220, 38, 38, 0.08)',
    description: 'Medical imaging, drug discovery, clinical NLP & patient outcome prediction.',
    children: [
      'Medical Image Diagnostics',
      'Drug Discovery & Genomics',
      'Clinical NLP & EHR Mining',
      'Patient Outcome Prediction',
    ],
  },
  {
    id: 'education',
    title: 'AI + Education',
    color: '#2563EB',
    colorLight: 'rgba(37, 99, 235, 0.08)',
    description: 'Adaptive learning, intelligent tutoring, automated grading & curriculum design.',
    children: [
      'Adaptive Learning Platforms',
      'Intelligent Tutoring Systems',
      'Automated Essay Scoring',
      'Curriculum Optimization',
    ],
  },
  {
    id: 'law',
    title: 'AI + Law',
    color: '#B45309',
    colorLight: 'rgba(180, 83, 9, 0.08)',
    description: 'Legal document analysis, contract review, case prediction & regulatory compliance.',
    children: [
      'Legal Document Summarization',
      'Contract Analysis & Review',
      'Case Outcome Prediction',
      'Regulatory Compliance AI',
    ],
  },
  {
    id: 'climate',
    title: 'AI + Climate',
    color: '#0D9488',
    colorLight: 'rgba(13, 148, 136, 0.08)',
    description: 'Climate modeling, carbon tracking, energy optimization & environmental monitoring.',
    children: [
      'Climate & Weather Modeling',
      'Carbon Footprint Analytics',
      'Smart Grid Optimization',
      'Satellite Environmental Monitoring',
    ],
  },
  {
    id: 'creativity',
    title: 'AI + Creativity',
    color: '#DB2777',
    colorLight: 'rgba(219, 39, 119, 0.08)',
    description: 'Generative art, music composition, creative writing & design co-pilots.',
    children: [
      'Generative Art & Design',
      'AI Music Composition',
      'Creative Writing Assistants',
      'Video & Film Generation',
    ],
  },
  {
    id: 'robotics',
    title: 'AI + Robotics',
    color: '#6366F1',
    colorLight: 'rgba(99, 102, 241, 0.08)',
    description: 'Autonomous navigation, manipulation, human-robot interaction & sim-to-real transfer.',
    children: [
      'Autonomous Navigation',
      'Robotic Manipulation',
      'Human-Robot Interaction',
      'Sim-to-Real Transfer Learning',
    ],
  },
]

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      <Navigation />

      <main className="roadmap-main">
        {/* ── Hero ── */}
        <section className="roadmap-hero">
          <p className="kicker-small">Explore Intersections</p>
          <h1 className="roadmap-hero-title">AI + X Roadmap</h1>
          <p className="roadmap-hero-lead">
            Discover how artificial intelligence intersects with every
            discipline. Each path maps the skills, tools, and research frontiers
            where AI meets a new domain.
          </p>
          <div className="roadmap-legend">
            <span className="roadmap-legend-item">
              <span className="roadmap-legend-dot" style={{ background: '#2563EB' }} />
              Domain Node
            </span>
            <span className="roadmap-legend-item">
              <span className="roadmap-legend-dot roadmap-legend-dot--sub" />
              Sub-topic
            </span>
            <span className="roadmap-legend-item">
              <span className="roadmap-legend-line" />
              Connection
            </span>
          </div>
        </section>

        {/* ── Trunk line ── */}
        <section className="roadmap-tree" aria-label="AI + X Roadmap Tree">
          {/* Central trunk */}
          <div className="roadmap-trunk" aria-hidden="true" />

          {/* Central label */}
          <div className="roadmap-root-node">
            <span className="roadmap-root-node__label">Artificial Intelligence</span>
          </div>

          {/* Domain branches */}
          <div className="roadmap-branches">
            {roadmapData.map((domain, i) => {
              const side = i % 2 === 0 ? 'left' : 'right'
              return (
                <div
                  key={domain.id}
                  className={`roadmap-branch roadmap-branch--${side}`}
                  style={{ '--branch-color': domain.color, '--branch-color-light': domain.colorLight } as React.CSSProperties}
                >
                  {/* Connector arm */}
                  <div className="roadmap-arm" aria-hidden="true" />

                  {/* Domain card */}
                  <div className="roadmap-domain-card" tabIndex={0}>
                    <div className="roadmap-domain-card__text">
                      <h3 className="roadmap-domain-card__title">{domain.title}</h3>
                      <p className="roadmap-domain-card__desc">{domain.description}</p>
                    </div>
                  </div>

                  {/* Sub-topic nodes */}
                  <ul className="roadmap-children">
                    {domain.children.map((child, ci) => (
                      <li key={ci} className="roadmap-child">
                        <span className="roadmap-child__connector" aria-hidden="true" />
                        <span className="roadmap-child__node">{child}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Bottom cap */}
          <div className="roadmap-cap">
            <span className="roadmap-cap__label">The future is interdisciplinary</span>
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
          </div>
          <p className="footer-copy">&copy; {new Date().getFullYear()} BigThinkAI Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
