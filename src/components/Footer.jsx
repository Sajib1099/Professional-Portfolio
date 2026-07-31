import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { profile, navLinks } from '../data/portfolioData.js'

const ICONS = { github: FiGithub, linkedin: FiLinkedin, email: FiMail }

const socialLinks = [
  { id: 'github', href: profile.github, label: 'GitHub' },
  { id: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
  { id: 'email', href: `mailto:${profile.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-ink-800/5 dark:border-white/10 bg-surface-subtle dark:bg-white/[0.02]">
      <div className="container-page py-14">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('hero') }} className="font-display text-lg font-semibold">
              Sajib<span className="text-primary-600">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-400 max-w-xs">
              Software Engineering student building intelligent, well-crafted software —
              one project at a time.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((s) => {
                const Icon = ICONS[s.id]
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target={s.id === 'email' ? undefined : '_blank'}
                    rel={s.id === 'email' ? undefined : 'noopener noreferrer'}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-800/10 dark:border-white/15 text-ink-600 dark:text-ink-300 hover:border-primary-500/50 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="text-sm text-ink-600 dark:text-ink-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Get in touch</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1 text-ink-600 dark:text-ink-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {profile.email} <FiArrowUpRight size={14} />
                </a>
              </li>
              <li className="text-ink-600 dark:text-ink-400">{profile.phone}</li>
              <li className="text-ink-600 dark:text-ink-400">{profile.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-800/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500 dark:text-ink-400">
          <p>© {year} Sajib Sarker. All rights reserved.</p>
          <p className="font-mono">Designed &amp; built by Sajib Sarker.</p>
        </div>
      </div>
    </footer>
  )
}
