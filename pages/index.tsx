import Navigation from '../components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      <Navigation />

      <main className="max-w-6xl mx-auto p-8">
        <section id="hero" className="py-20">
          <h1 className="text-5xl font-serif font-bold leading-tight mb-4">BigThinkAI — Applied Machine Learning, Built Together</h1>
          <p className="lead">Student-led projects, hands-on workshops, and research that bridges coursework to impact. Join a project, teach a workshop, or attend an event.</p>
          <div className="mt-8 flex gap-4">
            <a className="btn-primary" href="#join">Join Us</a>
            <a className="btn-primary" href="#projects">See Projects</a>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="h2-serif">Featured Projects</h2>
          <p className="kicker-small">EDGE • Multi-quarter team projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <article className="card">
              <h3 className="text-lg font-semibold">Autonomous Data Labeler</h3>
              <p className="mt-2 text-sm text-muted">A semi-supervised labeling pipeline that reduces annotation costs.</p>
            </article>
            <article className="card">
              <h3 className="text-lg font-semibold">Campus ML Dashboard</h3>
              <p className="mt-2 text-sm text-muted">Visualizing student projects and outcomes across teams.</p>
            </article>
            <article className="card">
              <h3 className="text-lg font-semibold">Pyoneer Curriculum</h3>
              <p className="mt-2 text-sm text-muted">Practical Python + ML modules and hands-on notebooks.</p>
            </article>
          </div>
        </section>

        <section id="workshops" className="py-12">
          <h2 className="h2-serif">Workshops & Events</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h4 className="font-semibold">Pyoneer — Intro to ML</h4>
              <p className="text-sm text-muted mt-1">Weekly hands-on sessions with exercises and recordings.</p>
            </div>
            <div className="card">
              <h4 className="font-semibold">Bitcamp — Weekend Hackathon</h4>
              <p className="text-sm text-muted mt-1">Prototype AI projects and win mentorship prizes.</p>
            </div>
          </div>
        </section>

        <section id="about" className="py-12">
          <h2 className="h2-serif">About BigThinkAI</h2>
          <p className="mt-3">We are a student-run club focused on applied machine learning, community learning, and building production-minded projects. We run projects, workshops, and speaker events across the academic year.</p>
        </section>

        <section id="typography" className="py-12">
          <h2 className="h2-serif">Typography</h2>
          <p className="kicker-small">Newsreader • Headlines — Inter / Geist for UI</p>
          <h3 className="text-3xl font-serif mt-4">Serif Heading — Newsreader</h3>
          <p className="mt-4">This is an example of body copy using the primary UI sans-serif. Use the `.font-sans` / `.font-serif` utilities to switch context where needed.</p>
        </section>

        <section id="tokens" className="py-12">
          <h2 className="h2-serif">Design Tokens</h2>
          <div className="mt-4 flex gap-4 items-start">
            <div className="card" style={{minWidth:300}}>
              <p className="kicker">Token Demo</p>
              <button className="btn-primary mt-4">Primary Button</button>
              <div style={{marginTop:12}} className="card">Card with token-based border and shadow</div>
            </div>
            <aside className="card" style={{width:260}}>
              <h4 className="text-sm font-semibold">Theme Controls</h4>
              <div style={{marginTop:12}}>
                <label className="text-sm">Primary preset</label>
                <select id="primarySelect" style={{width:'100%', padding:8, marginTop:6}} defaultValue="#2563EB" onChange={(e)=>{
                  const val = (e.target as HTMLSelectElement).value
                  document.documentElement.style.setProperty('--color-primary', val)
                  const rgb = hexToRgb(val)
                  document.documentElement.style.setProperty('--color-primary-rgb', rgb.join(', '))
                  const sw = document.getElementById('swatch')
                  if (sw) (sw as HTMLElement).style.background = val
                  const cv = document.getElementById('colorVal')
                  if (cv) cv.textContent = val
                }}>
                  <option value="#2563EB">Refined Blue — #2563EB</option>
                  <option value="#0055FF">IKB — #0055FF</option>
                  <option value="#3B82F6">Tailwind Blue — #3B82F6</option>
                </select>

                <div style={{marginTop:12}}>
                  <label className="text-sm">Toggle Theme</label>
                  <div style={{marginTop:6}}><button onClick={() => {
                    const html = document.documentElement
                    if (html.getAttribute('data-theme') === 'dark') html.removeAttribute('data-theme')
                    else html.setAttribute('data-theme','dark')
                  }} style={{width:'100%', padding:8}}>Toggle Dark</button></div>
                </div>

                <div style={{marginTop:12}}>
                  <label className="text-sm">Demo Swatch</label>
                  <div id="swatch" className="swatch" style={{height:40, borderRadius:8, background:'var(--color-primary)'}}></div>
                  <div className="meta" style={{marginTop:6}}>--color-primary: <strong id="colorVal">#2563EB</strong></div>
                </div>

                <div style={{marginTop:12}}>
                  <h4 className="text-sm font-semibold">Navigation Smoke Tests</h4>
                  <div style={{marginTop:6}}><button id="runNavTests" style={{width:'100%', padding:8}} onClick={() => {
                    const report = document.getElementById('nav-test-report')
                    const btn = document.querySelector('.site-nav button[aria-expanded]') as HTMLButtonElement | null
                    if (btn) btn.click() // quick expand/collapse smoke
                    const nav = document.querySelector('.site-nav')
                    if (nav) nav.dispatchEvent(new Event('scroll'))
                    setTimeout(()=>{
                      const out = document.getElementById('nav-test-report')
                      if (out) {
                        out.innerHTML = 'Smoke tests run. Use the "Run Nav Smoke Tests" button in the top-right of the nav to run more comprehensive checks.'
                      }
                    }, 250)
                  }}>Run Smoke Tests</button></div>
                  <div id="nav-test-report" style={{fontSize:13, marginTop:8, color:'rgba(26,26,26,0.75)'}}></div>
                </div>

              </div>
            </aside>
          </div>
        </section>

        <section id="join" className="py-12">
          <h2 className="h2-serif">Join</h2>
          <p className="mt-3">Sign up to get updates on projects and workshops.</p>
          <form style={{marginTop:12, display:'flex', gap:8, maxWidth:480}} onSubmit={(e)=>{e.preventDefault(); alert('Thanks — sign-ups are mocked in this demo.')}}>
            <input aria-label="Email address" style={{flex:1, padding:10, borderRadius:8, border:'1px solid var(--color-border)'}} placeholder="your@university.edu" />
            <button className="btn-primary" type="submit">Sign up</button>
          </form>
        </section>

        <footer className="py-12 text-sm text-muted">
          <div className="max-w-3xl mx-auto">Contact — <a href="mailto:contact@bigthinkai.org">contact@bigthinkai.org</a> • Follow us on <strong>GitHub</strong> / <strong>Twitter</strong></div>
        </footer>
      </main>
    </div>
  )
}

function hexToRgb(hex:string) {
  const h = hex.replace('#','')
  return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)]
}
