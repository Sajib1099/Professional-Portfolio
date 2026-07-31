import { projects } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-surface-subtle dark:bg-white/[0.02]">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Featured Projects</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            Four builds, four different problems
          </h2>
          <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-400">
            Each project below links to source code and lists exactly who built it —
            independently or as part of an academic team.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
