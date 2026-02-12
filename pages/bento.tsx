import Head from 'next/head'
import { useState } from 'react'
import BentoCard from '../components/BentoCard'

export default function BentoPage() {
  const [reduced, setReduced] = useState(false)
  const [intensity, setIntensity] = useState(18)

  return (
    <>
      <Head>
        <title>Bento Card Demo — BigThinkAI</title>
      </Head>
      <main style={{ padding: '4rem', maxWidth: 1100, margin: '0 auto' }}>
        <h1 className="h1-serif">Bento Cards — Motion & Variants</h1>
        <p className="lead">Interactive demos of `BentoCard` with magnetic cursor tracking and visual variants. Toggle motion to test reduced-motion and performance behavior.</p>

        <section style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
          <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="checkbox" checked={reduced} onChange={(e) => setReduced(e.target.checked)} />
            <span>Simulate Reduced Motion</span>
          </label>

          <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <span>Intensity</span>
            <input type="range" min={6} max={36} value={intensity} onChange={(e) => setIntensity(Number(e.target.value))} />
            <span style={{ width: 48, textAlign: 'right' }}>{intensity}</span>
          </label>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <div>
            <BentoCard title="EDGE: Autonomous SatOps" subtitle="Project • 6 members" image="/token-demo/preview-1.jpg">
              <p className="lead" style={{ margin: 0 }}>A project card variant with short blurb and tags.</p>
            </BentoCard>
          </div>

          <div>
            <BentoCard variant="gallery" title="Pyoneer Workshop" subtitle="Workshop • Beginner" image="/token-demo/preview-2.jpg">
              <p className="lead" style={{ margin: 0 }}>Gallery-style card — use for events and showcases.</p>
            </BentoCard>
          </div>

          <div>
            <BentoCard variant="featured" title="Bitcamp Winners" subtitle="Hackathon • 2025" image="/token-demo/preview-3.jpg">
              <p className="lead" style={{ margin: 0 }}>Featured card with elevated shadow and emphasis.</p>
            </BentoCard>
          </div>
        </div>

        <hr style={{ margin: '2.25rem 0' }} />

        <h2 className="h2-serif">Performance & Accessibility</h2>
        <p>Notes & acceptance criteria:</p>
        <ul>
          <li>Motion is disabled when <code>prefers-reduced-motion</code> is set (or when user toggles the control).</li>
          <li>Framer Motion is used if available; component gracefully falls back to CSS transforms for environments without the library.</li>
          <li>Perf budget: keep main animation work off main thread where possible and avoid layout-triggering style changes. Target <strong>60 FPS</strong> on modern hardware for the hover interactions.</li>
        </ul>

        <p style={{ marginTop: 24 }}><em>To test:</em> run the dev server then open <code>/bento</code>; use the toggle to simulate reduced motion and the range to change intensity.</p>
      </main>
    </>
  )
}
