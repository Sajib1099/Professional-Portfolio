import { motion } from 'framer-motion'
import { FiDownload, FiFileText } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'
import MagneticButton from '../components/MagneticButton.jsx'

export default function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <div className="container-page">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-signal-gradient p-10 sm:p-14 text-white">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-10 -bottom-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-white/10 px-3 py-1 text-xs font-mono">
                  <FiFileText size={14} /> One page · Always current
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold">
                  Want the short version?
                </h2>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Download my resume for a compact summary of my education, skills and
                  projects — the same information on this page, formatted for a quick scan.
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <MagneticButton
                  href={profile.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-white text-primary-700 px-7 py-3.5 font-semibold shadow-lg whitespace-nowrap"
                >
                  Download Resume <FiDownload size={18} />
                </MagneticButton>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
