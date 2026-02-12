import { useEffect, useRef, useState } from 'react'

export default function Navigation() {
  const navRef = useRef<HTMLElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)
  const linksRef = useRef<HTMLUListElement | null>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let lastScale = '1'
    function updateScale() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const y = window.scrollY || document.documentElement.scrollTop
      let scale = 1
      if (y > 400) scale = 0.94
      else if (y > 100) scale = 0.96
      else scale = 1
      const s = String(scale)
      if (s !== lastScale) {
        nav.setAttribute('data-scale', s)
        lastScale = s
      }
      const o = Math.min(0.95, 0.6 + y / 1000)
      ;(nav.style as any).background = `rgba(255,255,255,${o})`
    }

    updateScale()
    const onScroll = () => requestAnimationFrame(updateScale)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const links = linksRef.current
    const toggle = toggleRef.current
    if (!links || !toggle) return

    if (expanded) {
      links.style.display = 'flex'
      links.style.flexDirection = 'column'
      links.style.position = 'absolute'
      links.style.top = '56px'
      links.style.right = '16px'
      links.style.background = 'var(--color-card)'
      links.style.padding = '0.5rem'
      links.style.borderRadius = '12px'
      links.style.boxShadow = '0 12px 32px rgba(10,10,10,0.08)'
      links.setAttribute('id', 'main-menu')
      toggle.setAttribute('aria-controls', 'main-menu')
      const first = links.querySelector('a') as HTMLElement | null
      if (first) first.focus()
    } else {
      links.style.display = ''
      links.removeAttribute('id')
      toggle.focus()
    }
  }, [expanded])

  function runNavSmokeTests(reportEl?: HTMLElement | null) {
    const nav = navRef.current
    const toggle = toggleRef.current
    const links = linksRef.current
    const results: Array<{ ok: boolean; msg: string }> = []
    if (!nav) {
      results.push({ ok: false, msg: 'Navigation not found' })
    } else {
      results.push({ ok: nav.getAttribute('role') === 'navigation', msg: 'Nav role set' })
      results.push({ ok: !!nav.getAttribute('aria-label'), msg: 'Nav has aria-label' })
    }
    results.push({ ok: !!toggle && toggle.getAttribute('aria-expanded') === 'false', msg: 'Toggle present and collapsed' })

    // Toggle functionality
    if (toggle) {
      toggle.click()
      results.push({ ok: toggle.getAttribute('aria-expanded') === 'true', msg: 'Toggle expands menu' })
      toggle.click()
      results.push({ ok: toggle.getAttribute('aria-expanded') === 'false', msg: 'Toggle collapses menu' })
    }

    // Scroll tests
    window.scrollTo(0, 140)
    window.dispatchEvent(new Event('scroll'))
    results.push({ ok: nav?.getAttribute('data-scale') === '0.96', msg: 'Scroll -> minor scale (0.96)' })
    window.scrollTo(0, 600)
    window.dispatchEvent(new Event('scroll'))
    results.push({ ok: nav?.getAttribute('data-scale') === '0.94', msg: 'Scroll -> deep scale (0.94)' })

    const firstLink = nav?.querySelector('.site-links a') as HTMLElement | null
    if (firstLink) {
      firstLink.focus()
      results.push({ ok: document.activeElement === firstLink, msg: 'First link is focusable via keyboard' })
    } else {
      results.push({ ok: false, msg: 'No nav links to focus' })
    }

    if (reportEl) reportEl.innerHTML = results.map(r => `${r.ok ? '✅' : '❌'} ${r.msg}`).join('<br>')
    // reset scroll
    window.scrollTo(0, 0)
    window.dispatchEvent(new Event('scroll'))
  }

  return (
    <nav ref={navRef} className="site-nav" role="navigation" aria-label="Main navigation">
      <a className="brand" href="#hero" aria-label="BigThinkAI Home">BigThinkAI</a>
      <ul ref={linksRef} className="site-links" role="menubar">
        <li role="none"><a role="menuitem" href="#projects">Projects</a></li>
        <li role="none"><a role="menuitem" href="#workshops">Workshops</a></li>
        <li role="none"><a role="menuitem" href="#events">Events</a></li>
        <li role="none"><a role="menuitem" href="#about">About</a></li>
        <li role="none"><a role="menuitem" href="#join">Join</a></li>
      </ul>

      <button
        ref={toggleRef}
        className="nav-toggle"
        aria-controls="main-menu"
        aria-expanded={String(expanded)}
        aria-label={expanded ? 'Close menu' : 'Open menu'}
        onClick={() => setExpanded((s) => !s)}
      >
        <span className="hamburger" aria-hidden="true"></span>
      </button>

      {/* Smoke test control for agent/development use */}
      <div style={{ display: 'none' }} aria-hidden>
        {/* Kept hidden by default; tests can call runNavSmokeTests and provide an element to show results */}
      </div>

      <div style={{ position: 'absolute', right: 12, top: '100%' }}>
        {/* Visible only on the index page via an element with id "nav-test-report" (set by the page) */}
        <button
          onClick={() => {
            const out = document.getElementById('nav-test-report')
            runNavSmokeTests(out)
          }}
          style={{ display: 'inline-block', padding: '6px 10px', borderRadius: 8, background: 'transparent', border: 0, fontSize: 12, cursor: 'pointer' }}
        >
          Run Nav Smoke Tests
        </button>
      </div>
    </nav>
  )
}
