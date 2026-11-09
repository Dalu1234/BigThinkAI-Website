import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../../components/Navigation'
import SiteFooter from '../../components/SiteFooter'
import { CLUB, LINKS, EDGE_APPLICATIONS_OPEN } from '../../src/content/club'
import { PROJECTS, LEVEL_COLOR, LEVEL_LABEL } from '../../src/content/projects'

/* The index of the five EDGE teams. The home page has the interactive
   dossier; this is the flat, linkable, shareable version — and the place
   every team page points back to. */

export default function ProjectsIndex() {
  return (
    <>
      <Head>
        <title>{`EDGE Teams 2026–2027 — ${CLUB.name}`}</title>
        <meta
          name="description"
          content={`The five EDGE build teams at ${CLUB.name}, ${CLUB.school}: semester-long, student-owned AI projects.`}
        />
      </Head>

      <div className="page film-grain">
        <Navigation />

        <main>
          <section className="section index-head">
            <div className="shell">
              <div className="section-head">
                <p className="kicker">EDGE Teams · 2026–2027</p>
                <h1 className="section-title">The Projects</h1>
                <span className="hatch" aria-hidden="true" />
                <p className={`status${EDGE_APPLICATIONS_OPEN ? '' : ' status--closed'}`}>
                  <span className="status__dot" aria-hidden="true" />
                  {EDGE_APPLICATIONS_OPEN
                    ? 'Applications open'
                    : '2026–27 applications closed'}
                </p>
                <p className="section-lede">
                  Five teams, each one semester-long, student-owned, and aimed at
                  something real — a deployed tool, a live demo, a paper. Every team
                  has its own page.
                </p>
              </div>

              <div className="team-cards">
                {PROJECTS.map((p, i) => (
                  <a
                    className="team-card"
                    key={p.id}
                    data-team={p.theme}
                    href={`/projects/${p.id}`}
                    style={{ ['--lvl' as string]: LEVEL_COLOR[p.level] }}
                  >
                    <span className="team-card__art">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        priority={i < 2}
                      />
                    </span>

                    <span className="team-card__body">
                      <span className="team-card__num">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="team-card__name">{p.name}</span>
                      <span className="team-card__blurb">{p.blurb}</span>
                      <span className="team-card__foot">
                        <span className="team-card__lvl">
                          <span className="team-card__dot" aria-hidden="true" />
                          {LEVEL_LABEL[p.level]}
                        </span>
                        <span className="team-card__go">
                          Read the brief <span className="arrow" aria-hidden="true">→</span>
                        </span>
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <p className="index-foot">
                <a
                  className="btn btn-primary"
                  href={LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Discord <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost" href="/#what-we-do">
                  What else we run
                </a>
              </p>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}
