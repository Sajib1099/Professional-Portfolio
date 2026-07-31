import { experience } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            Where the projects came from
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent"
          />
          <ol className="space-y-8">
            {experience.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.06} as="li">
                <div className="relative flex gap-6 sm:gap-8">
                  <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white dark:bg-ink-900 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-mono text-xs font-semibold">
                    {item.current ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-600" />
                      </span>
                    ) : (
                      item.period.slice(-2)
                    )}
                  </div>
                  <div className="glass-panel rounded-2xl p-5 sm:p-6 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                      <span className="chip">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                      {item.org}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
