export default function FontsPage() {
  return (
    <div className="min-h-screen p-12 bg-background text-foreground film-grain">
      <div className="max-w-3xl mx-auto">
        <p className="kicker">Typography • Visual Spec</p>
        <h1 className="text-4xl font-serif font-bold mt-4 mb-2">BigThinkAI — Typeface System</h1>
        <p className="text-lg text-muted mb-8">Headlines use <strong>Newsreader</strong> (serif). Body copy uses a clean sans (Geist / Inter). Monospace is used for technical labels and dates.</p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-serif mb-4">Headlines & Kicker</h2>
          <p className="kicker">KICKER / OVERLINE • Newsreader Italic</p>
          <h3 className="text-3xl font-serif font-medium mt-3">Serif Heading — Newsreader</h3>
          <p className="mt-4">Example subheading and a short blurb demonstrating line-height, spacing, and color.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Body / UI Copy</h2>
          <p className="text-base leading-7">This is a paragraph using the primary UI sans-serif (Geist substitute). It demonstrates readable body copy with comfortable line-height. Use font utility classes `font-sans` and `font-serif` to control context-specific usage.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Monospace</h2>
          <p className="font-mono bg-muted p-4 rounded-md"><code>2026-02-11 • commit: 7a1f3c2 • size: 14KB</code></p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage guidance</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use <strong>Newsreader</strong> for headings and small italic kickers.</li>
            <li>Use the sans variable for body, buttons, and nav. Replace with Geist Sans local files if licensed.</li>
            <li>Monospace for small technical labels and code snippets.</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
