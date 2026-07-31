import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'
import MagneticButton from '../components/MagneticButton.jsx'
import SignalGraph from '../components/SignalGraph.jsx'
import TypingEffect from '../components/TypingEffect.jsx'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 sm:pt-32"
    >
      {/* Ambient grid + signal graph backdrop */}
      <div className="absolute inset-0 -z-10 bg-grid-light dark:bg-grid-dark [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-10 right-[-10%] w-[560px] max-w-[70vw] text-primary-600/70 dark:text-primary-400/50 -z-10">
        <SignalGraph className="w-full h-auto" />
      </div>

      <div className="container-page grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
        {/* Copy */}
        <div>
          {profile.availableForInternship && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 rounded-full border border-primary-500/30 bg-primary-50 dark:bg-primary-500/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
              </span>
              <span className="text-xs font-mono font-medium text-primary-700 dark:text-primary-300">
                Available for Software Engineering Internships
              </span>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="eyebrow mb-4"
          >
            Hi, I&apos;m Sajib Sarker
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08]"
          >
            Software Engineering Student.
            <br />
            <span className="gradient-text">Aspiring Software Engineer.</span>
            <br />
            AI &amp; Data Science Enthusiast.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 h-7 text-lg text-primary-600 dark:text-primary-400"
          >
            <TypingEffect words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-ink-600 dark:text-ink-400"
          >
            Building intelligent software solutions through clean code, modern technologies
            and continuous learning — currently pursuing my B.Sc. in Software Engineering
            at Daffodil International University.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.36 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary"
            >
              Let&apos;s Connect <FiArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} download className="btn-secondary">
              Download Resume <FiDownload size={16} />
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sajib Sarker on GitHub"
              className="text-ink-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sajib Sarker on LinkedIn"
              className="text-ink-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Portrait — the visual focal point */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[580px] lg:max-w-none lg:scale-[1.12] lg:origin-center"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-signal-gradient opacity-20 blur-3xl -z-10" />
          <div className="relative rounded-[2.25rem] p-2 glass-panel">
            <div className="relative overflow-hidden rounded-[1.85rem] aspect-[4/5]">
              <img
                src={profile.avatar}
                alt={`Portrait of ${profile.name}, ${profile.title}`}
                className="h-full w-full object-cover"
                width="640"
                height="800"
                loading="eager"
                fetchpriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:flex glass-panel rounded-2xl px-5 py-4 items-center gap-3"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div className="leading-tight">
              <p className="text-xs font-mono text-ink-500 dark:text-ink-400">Based in</p>
              <p className="text-sm font-semibold">{profile.location}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
