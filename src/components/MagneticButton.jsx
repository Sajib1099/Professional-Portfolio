import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * A button that subtly follows the cursor within its bounds ("magnetic" hover),
 * used for primary calls-to-action. Falls back to a static button on touch devices.
 */
export default function MagneticButton({ as = 'a', className = '', children, strength = 18, ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    setPos({ x: (relX / rect.width) * strength, y: (relY / rect.height) * strength })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const MotionTag = motion[as] ?? motion.a

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
