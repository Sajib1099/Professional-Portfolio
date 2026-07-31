import { education } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { FiBookOpen } from 'react-icons/fi'

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface-subtle dark:bg-white/[0.02]">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            Academic foundation
          </h2>
        </ScrollReveal>

        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="absolute left-[19px] sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent"
          />
          <ol className="space-y-10">
            {education.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08} as="li">
                <div className="relative flex gap-6 sm:gap-8 pl-0">
                  <div className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-glow-primary">
                    <FiBookOpen size={18} />
                  </div>
                  <div className="glass-panel rounded-2xl p-5 sm:p-6 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg sm:text-xl font-semibold">
                        {item.degree}
                      </h3>
                      <span className="chip">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                      {item.institution}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                      {item.description}
                    </p>
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
