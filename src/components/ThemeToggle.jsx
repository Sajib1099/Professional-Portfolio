import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex h-9 w-16 items-center rounded-full border border-ink-800/10 dark:border-white/15 bg-white/70 dark:bg-white/5 backdrop-blur transition-colors ${className}`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="absolute top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-white shadow-glow-primary"
        style={{ left: isDark ? '2rem' : '0.25rem' }}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </motion.span>
    </button>
  )
}
