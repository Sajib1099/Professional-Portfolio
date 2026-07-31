import { profile } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import AnimatedCounter from '../components/AnimatedCounter.jsx'

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">About</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            Two disciplines, one build-first mindset.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid lg:grid-cols-[1.3fr_0.7fr] gap-12">
          <div className="space-y-5">
            {profile.aboutParagraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="text-base sm:text-lg leading-relaxed text-ink-600 dark:text-ink-400">
                  {p}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="left">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 grid grid-cols-2 gap-6 sm:gap-8 h-fit">
              {profile.highlights.map((h) => (
                <div key={h.label}>
                  <p className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
                    <AnimatedCounter value={h.value} />
                  </p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-wide text-ink-500 dark:text-ink-400">
                    {h.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
