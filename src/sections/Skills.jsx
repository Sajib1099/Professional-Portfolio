import { skillGroups, softSkills } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            The stack behind the projects
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={group.id} delay={i * 0.06}>
              <div className="glass-panel rounded-2xl p-6 h-full">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.1} className="mt-6">
          <div className="glass-panel rounded-2xl p-6">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
