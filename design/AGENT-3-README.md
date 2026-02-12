Agent 3 — Header / Navigation & Glassmorphism

What I added:
- `components/Navigation.tsx` — React component implementing the pill-shaped glass nav, scroll scaling (0.96 / 0.94), mobile toggle, ARIA roles, and a small "Run Nav Smoke Tests" control that writes results to `#nav-test-report` on the index page.
- `pages/index.tsx` — Single-page site with consolidated sections (Hero, Projects, Workshops, Typography, Design Tokens, Join, Footer). Pulls in the new `Navigation` component. The token controls (primary color / theme toggle) are present and update CSS variables.
- `src/styles/globals.css` — added `scroll-behavior: smooth;` so anchor links behave smoothly.
- `DESIGN.md` — marked Agent 3 as **in progress** and noted next steps.

How to test locally:
1. npm install && npm run dev (or your usual Next.js dev command)
2. Open http://localhost:3000/ and verify the single-page layout.
3. Click nav links (Projects, Workshops, About, Join) — page should smoothly scroll to sections.
4. Use the Nav "Run Nav Smoke Tests" button (top-right of the nav) or the "Run Smoke Tests" button in the Tokens area to run quick checks and see results in the page report.
5. Test keyboard accessibility: Tab into the nav and press Enter to open the mobile menu.

Next steps:
- Add unit tests (React Testing Library + Vitest/Jest) for `Navigation` behavior and focus management.
- Componentize further (logo, menu items) and extract ARIA-friendly patterns.
- Add small Framer Motion interactions (magnetic scaling) and start Agent 4 for `BentoCard` components.

Branch: `agent/3-navigation`