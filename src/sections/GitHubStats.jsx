import { useState } from 'react'
import { github, profile } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { FiGithub } from 'react-icons/fi'

export default function GitHubStats() {
  const [statsFailed, setStatsFailed] = useState(false)
  const [langFailed, setLangFailed] = useState(false)

  const bothFailed = statsFailed && langFailed

  return (
    <section id="github" className="section-padding bg-surface-subtle dark:bg-white/[0.02]">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Open Source Activity</p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
              GitHub, live
            </h2>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
            >
              <FiGithub size={16} /> @{github.username}
            </a>
          </div>
        </ScrollReveal>

        {bothFailed ? (
          <ScrollReveal delay={0.1} className="mt-10">
            <div className="glass-panel rounded-2xl p-8 text-center text-sm text-ink-500 dark:text-ink-400">
              Live GitHub stats couldn&apos;t load right now — view the activity directly on{' '}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                GitHub
              </a>
              .
            </div>
          </ScrollReveal>
        ) : (
          <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-5">
            {!statsFailed && (
              <ScrollReveal delay={0.05}>
                <div className="glass-panel rounded-2xl p-4 sm:p-6 overflow-hidden">
                  <img
                    src={github.statsImage}
                    alt={`GitHub statistics for ${github.username}`}
                    loading="lazy"
                    className="w-full h-auto"
                    onError={() => setStatsFailed(true)}
                  />
                </div>
              </ScrollReveal>
            )}
            {!langFailed && (
              <ScrollReveal delay={0.1}>
                <div className="glass-panel rounded-2xl p-4 sm:p-6 overflow-hidden h-full flex items-center">
                  <img
                    src={github.langImage}
                    alt={`Most used languages for ${github.username} on GitHub`}
                    loading="lazy"
                    className="w-full h-auto"
                    onError={() => setLangFailed(true)}
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
