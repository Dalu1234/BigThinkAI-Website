import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import type { GetStaticPaths, GetStaticProps } from 'next'
import Navigation from '../../components/Navigation'
import SiteFooter from '../../components/SiteFooter'
import ProjectMotif from '../../components/projects/ProjectMotif'
import {
  CLUB,
  LINKS,
  EVENTS,
  EDGE_APPLICATIONS_OPEN,
} from '../../src/content/club'
import {
  PROJECTS,
  LEVEL_COLOR,
  LEVEL_LABEL,
  projectById,
  projectNeighbours,
} from '../../src/content/projects'
import { longDate, daysAway, countdownLabel } from '../../src/lib/dates'

/* One page per EDGE team, generated at build time from PROJECTS.

   The page is built around the team's own artwork: the hero is that
   picture, full bleed, graded to the palette taken out of it, with a
   motif moving inside it that is registered to the picture's own pixel
   space. `data-team` is the switch — it swaps the whole scene.      */

type Props = { slug: string }

export default function ProjectPage({ slug }: Props) {
  const project = projectById(slug) ?? PROJECTS[0]
  const { prev, next } = projectNeighbours(project.id)
  const position = PROJECTS.findIndex((p) => p.id === project.id) + 1

  const milestones = EVENTS.filter((e) => e.projectId === project.id).sort((a, b) =>
    a.date.localeCompare(b.date)
  )

  // Resolved after mount — the page is static, so a build-time "today"
  // would freeze on the day it was last deployed.
  const [today, setToday] = useState<Date | null>(null)
  useEffect(() => setToday(new Date()), [])

  return (
    <>
      <Head>
        <title>{`${project.name} — EDGE Team · ${CLUB.name}`}</title>
        <meta name="description" content={`${project.name}: ${project.blurb} An EDGE build team at ${CLUB.name}, ${CLUB.school}.`} />
      </Head>

      <div
        className="page film-grain proj"
        data-team={project.theme}
        style={{ ['--lvl' as string]: LEVEL_COLOR[project.level] }}
      >
        <Navigation />

        <main>
          {/* ════════ THE SCENE ════════
              The artwork, full bleed, with the team's motif alive inside
              it. The plate is sized to the art's exact aspect ratio so
              the motif's coordinates land on the art. */}
          <header className="proj-hero">
            <div className="scene">
              <div className="scene__plate">
                <Image
                  className="scene__art"
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="100vw"
                  priority
                />
                <div className="scene__grade" aria-hidden="true" />
                <ProjectMotif theme={project.theme} />
              </div>
              <div className="scene__scrim" aria-hidden="true" />
            </div>

            <div className="shell proj-hero__inner">
              <a className="proj-back" href="/projects">
                <span aria-hidden="true">←</span> All EDGE teams
              </a>

              <p className="kicker">
                EDGE Team {String(position).padStart(2, '0')} · 2026–2027
              </p>

              <h1 className="proj-hero__name">{project.name}</h1>
              <p className="proj-hero__blurb">{project.blurb}</p>

              <div className="proj-chips">
                <span className="proj-chip proj-chip--lvl">
                  <span className="proj-chip__key">Skill lvl</span>
                  <span
                    className={`proj-chip__val${
                      project.level === 'TBD' ? ' lvl__val--glitch' : ''
                    }`}
                    data-text={LEVEL_LABEL[project.level]}
                  >
                    {LEVEL_LABEL[project.level]}
                  </span>
                </span>
                <span className="proj-chip">Semester-long</span>
                <span className="proj-chip">One build hour a week</span>
                <span className="proj-chip">Student-owned, end to end</span>
              </div>

              <div className="proj-hero__cta">
                <a
                  className="btn btn-primary"
                  href={LINKS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the Discord <span className="arrow" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost" href="#brief">
                  Read the brief
                </a>
              </div>
            </div>

            {/* owns up to whatever is moving in the picture */}
            <p className="motif-note">
              <span className="motif-note__key">In this scene</span>
              {project.motifNote}
            </p>
          </header>

          {/* ════════ THE BRIEF ════════ */}
          <section className="section proj-brief" id="brief">
            <div className="shell">
              <div className="section-head">
                <p className="kicker">The brief</p>
                <h2 className="section-title">What we&apos;re building</h2>
                <span className="hatch" aria-hidden="true" />
              </div>

              <div className="proj-grid">
                <div className="proj-main">
                  <p className="proj-desc">{project.description}</p>

                  <div className="proj-goal">
                    <p className="proj-goal__key">Our goal</p>
                    <p className="proj-goal__text">{project.goal}</p>
                  </div>
                </div>

                <aside className="proj-aside">
                  <div className="proj-card">
                    <p className="field__label">Skills you&apos;ll learn</p>
                    <ul className="skills">
                      {project.skills.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>

                  {milestones.length > 0 && (
                    <div className="proj-card">
                      <p className="field__label">Dates that matter</p>
                      <ul className="mstones">
                        {milestones.map((e) => {
                          const delta = daysAway(e.date, today)
                          const count = countdownLabel(delta)
                          return (
                            <li
                              className="mstone"
                              key={e.id}
                              data-past={delta !== null && delta < 0}
                            >
                              <span className="mstone__date">{longDate(e.date)}</span>
                              <span className="mstone__title">{e.title}</span>
                              {count && <span className="mstone__count">{count}</span>}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}

                  <div className="proj-card proj-card--cta">
                    <p className="field__label">Getting on this team</p>
                    {EDGE_APPLICATIONS_OPEN ? (
                      <>
                        <p className="proj-card__note">
                          EDGE applications are open. Apply and tell us which team you
                          want.
                        </p>
                        <a
                          className="btn btn-primary"
                          href={LINKS.edgeApplication}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply to EDGE <span className="arrow" aria-hidden="true">→</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <p className="proj-card__note">
                          The 2026–27 roster is set, so this team is not taking new
                          members right now. The next intake gets called in Discord —
                          and the weekly workshops are open to everyone in the meantime.
                        </p>
                        <a
                          className="btn btn-ghost"
                          href={LINKS.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch for the next call{' '}
                          <span className="arrow" aria-hidden="true">→</span>
                        </a>
                      </>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {/* ════════ THE OTHER FOUR ════════ */}
          <section className="section proj-siblings">
            <div className="shell">
              <div className="section-head">
                <p className="kicker">Keep going</p>
                <h2 className="section-title">Other teams</h2>
                <span className="hatch" aria-hidden="true" />
              </div>

              <div className="pager">
                {prev && (
                  <a className="pager__link" data-team={prev.theme} href={`/projects/${prev.id}`}>
                    <span className="pager__art" aria-hidden="true">
                      <Image src={prev.image} alt="" fill sizes="(max-width: 620px) 100vw, 50vw" />
                    </span>
                    <span className="pager__text">
                      <span className="pager__dir">
                        <span aria-hidden="true">←</span> Previous
                      </span>
                      <span className="pager__name">{prev.name}</span>
                      <span className="pager__blurb">{prev.blurb}</span>
                    </span>
                  </a>
                )}
                {next && (
                  <a
                    className="pager__link pager__link--next"
                    data-team={next.theme}
                    href={`/projects/${next.id}`}
                  >
                    <span className="pager__art" aria-hidden="true">
                      <Image src={next.image} alt="" fill sizes="(max-width: 620px) 100vw, 50vw" />
                    </span>
                    <span className="pager__text">
                      <span className="pager__dir">
                        Next <span aria-hidden="true">→</span>
                      </span>
                      <span className="pager__name">{next.name}</span>
                      <span className="pager__blurb">{next.blurb}</span>
                    </span>
                  </a>
                )}
              </div>

              <p className="proj-siblings__all">
                <a className="btn btn-ghost" href="/projects">
                  All five teams <span className="arrow" aria-hidden="true">→</span>
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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PROJECTS.map((p) => ({ params: { slug: p.id } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : ''
  if (!projectById(slug)) return { notFound: true }
  return { props: { slug } }
}
