import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiChevronDown, FiUsers, FiUser } from 'react-icons/fi'

const GRADIENTS = {
  'gradient-ai': 'from-primary-600 via-primary-800 to-ink-900',
  'gradient-auction': 'from-indigo-500 via-primary-700 to-ink-900',
  'gradient-drug': 'from-sky-500 via-primary-700 to-ink-900',
  'gradient-iot': 'from-primary-500 via-indigo-700 to-ink-900',
}

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const gradient = GRADIENTS[project.image] ?? GRADIENTS['gradient-ai']
  const isTeam = project.team?.toLowerCase().includes('team')

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-3xl overflow-hidden glass-panel"
    >
      <div className={`relative h-52 sm:h-64 bg-gradient-to-br ${gradient} overflow-hidden`}>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <span className="chip !bg-white/15 !border-white/20 !text-white">{project.tag}</span>
            <span className="chip !bg-white/15 !border-white/20 !text-white">{project.year}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white drop-shadow-sm">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono ${
              isTeam
                ? 'bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-300'
                : 'bg-ink-800/5 text-ink-600 dark:bg-white/5 dark:text-ink-400'
            }`}
          >
            {isTeam ? <FiUsers size={13} /> : <FiUser size={13} />}
            {project.team}
          </span>
        </div>

        <p className="text-ink-600 dark:text-ink-400 leading-relaxed">{project.summary}</p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-5 text-sm">
                <DetailBlock label="Problem" text={project.problem} />
                <DetailBlock label="Solution" text={project.solution} />
                <div>
                  <p className="eyebrow mb-2">Features</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-ink-600 dark:text-ink-300">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <DetailBlock label="Challenges" text={project.challenges} />
                <DetailBlock label="Outcome" text={project.outcome} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6 pt-6 border-t border-ink-800/5 dark:border-white/10">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            {expanded ? 'Show less' : 'View case study'}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
              <FiChevronDown size={16} />
            </motion.span>
          </button>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source code on GitHub`}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-ink-800/10 dark:border-white/15 text-ink-700 dark:text-white hover:border-primary-500/50 hover:text-primary-600 transition-colors"
            >
              <FiGithub size={16} />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-ink-800/10 dark:border-white/15 text-ink-700 dark:text-white hover:border-primary-500/50 hover:text-primary-600 transition-colors"
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function DetailBlock({ label, text }) {
  return (
    <div>
      <p className="eyebrow mb-1.5">{label}</p>
      <p className="text-ink-600 dark:text-ink-300 leading-relaxed">{text}</p>
    </div>
  )
}
