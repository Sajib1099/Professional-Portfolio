import { currentlyWorkingOn } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { FiCpu, FiCode, FiPackage, FiBookOpen } from 'react-icons/fi'

const ICONS = {
  'cwo-ai': FiCpu,
  'cwo-swe': FiCode,
  'cwo-projects': FiPackage,
  'cwo-learning': FiBookOpen,
}

export default function CurrentlyWorkingOn() {
  return (
    <section id="currently" className="section-padding">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Right now</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            Currently working on
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentlyWorkingOn.map((item, i) => {
            const Icon = ICONS[item.id] ?? FiCode
            return (
              <ScrollReveal key={item.id} delay={i * 0.07}>
                <div className="glass-panel rounded-2xl p-6 h-full">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
