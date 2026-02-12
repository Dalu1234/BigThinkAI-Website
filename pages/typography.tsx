import Head from 'next/head'

export default function TypographySpec() {
  return (
    <div className="min-h-screen p-10">
      <Head>
        <title>Typography — BigThinkAI</title>
      </Head>

      <div className="max-w-3xl mx-auto">
        <div className="card mb-6">
          <p className="kicker">Typography • Design Spec</p>
          <h1 className="h1-serif">Editorial Heading — Newsreader (Serif)</h1>
          <p className="lead">This page demonstrates the font pairings used across BigThinkAI. The serif is used for headings and kickers; the sans is for UI and body copy; mono is used for code and metadata.</p>
          <div className="mb-4">
            <span className="kicker-small">Kicker</span>
            <h2 className="h2-serif">Subheading / Section Title</h2>
            <p className="font-sans">This is a paragraph in the primary UI sans font. It uses <code className="code-sample">--font-sans</code> via the CSS variable populated by next/font. Use the <code className="code-sample">.font-sans</code> utility when you want to ensure the UI font is applied within a component.</p>
          </div>

          <div className="mb-4">
            <p className="font-sans"><strong>Weights & Styles:</strong> Newsreader headings (400 / 600 / 700), Inter (300 / 400 / 600 / 700), JetBrains Mono (400 / 700).</p>
            <p className="font-mono">Example mono: const greeting = "Hello BigThinkAI";</p>
          </div>

          <div className="flex gap-3 items-center">
            <button className="btn-primary">Primary Button</button>
            <div className="card">Sample card — Serif title below</div>
          </div>
        </div>

        <div className="card">
          <h3 className="h2-serif">Fallback & Local Font Notes</h3>
          <ol>
            <li>Geist Sans / Geist Mono are preferred if you have licensed files.</li>
            <li>To enable local Geist fonts: place WOFF2 files in <code className="code-sample">/public/fonts</code> and uncomment the local font block in <code className="code-sample">src/fonts.ts</code>.</li>
            <li>next/font's <code className="code-sample">display: 'swap'</code> is used to avoid layout shifts.</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
