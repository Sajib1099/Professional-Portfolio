import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Brief, purposeful loading sequence shown once on first paint —
 * a terminal-style boot line rather than a generic spinner, in keeping
 * with the engineering identity of the site. Skips itself if the user
 * has already seen it this session, and respects reduced-motion by
 * resolving instantly.
 */
export default function PageLoader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.sessionStorage.getItem('sajib-portfolio-loaded')
  })

  useEffect(() => {
    if (!visible) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = setTimeout(
      () => {
        setVisible(false)
        window.sessionStorage.setItem('sajib-portfolio-loaded', '1')
      },
      prefersReduced ? 0 : 1100
    )
    return () => clearTimeout(timer)
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-ink-950"
        >
          <div className="font-mono text-sm sm:text-base text-ink-700 dark:text-ink-300">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.9, ease: 'easeInOut' }}
              className="inline-block overflow-hidden whitespace-nowrap align-bottom"
            >
              <span className="text-primary-600 dark:text-primary-400">$</span> booting sajib-sarker/portfolio…
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
