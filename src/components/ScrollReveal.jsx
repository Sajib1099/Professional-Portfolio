import { motion } from 'framer-motion'

/**
 * Wraps children in a fade + slide reveal that triggers once when scrolled into view.
 * direction controls the slide origin; delay staggers groups of siblings.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as = 'div',
}) {
  const offset = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
  }[direction]

  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
