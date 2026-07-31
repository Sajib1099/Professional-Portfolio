import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Animates a numeric value counting up when it scrolls into view.
 * Non-numeric values (e.g. "AI · Full-Stack") are rendered as-is with a fade only.
 */
export default function AnimatedCounter({ value, duration = 1.2 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState('0')

  const numericMatch = String(value).match(/^([\d.]+)(.*)$/)
  const targetNumber = numericMatch ? parseFloat(numericMatch[1]) : null
  const suffix = numericMatch ? numericMatch[2] : ''

  useEffect(() => {
    if (!isInView || targetNumber === null) {
      if (isInView) setDisplay(String(value))
      return
    }
    let start = 0
    const startTime = performance.now()
    const step = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (targetNumber - start) * eased
      const isFloat = String(targetNumber).includes('.')
      setDisplay(isFloat ? current.toFixed(2) : Math.round(current).toString())
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, targetNumber, duration, value])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="tabular-nums"
    >
      {display}
      {suffix}
    </motion.span>
  )
}
