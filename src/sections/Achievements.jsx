import { achievements, interests, languages } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { FiAward } from 'react-icons/fi'

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-surface-subtle dark:bg-white/[0.02]">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Achievements</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            What I&apos;m proud of so far
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {achievements.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.06}>
              <div className="glass-panel rounded-2xl p-6 h-full flex gap-4">
                <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  <FiAward size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1.5">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-5">
          <ScrollReveal>
            <div className="glass-panel rounded-2xl p-6 h-full">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span key={interest} className="chip">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="glass-panel rounded-2xl p-6 h-full">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-4">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-ink-500 dark:text-ink-400 font-mono text-xs">
                        {lang.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-ink-800/5 dark:bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-signal-gradient"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
