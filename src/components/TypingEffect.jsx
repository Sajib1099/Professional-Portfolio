import { useEffect, useState } from 'react'

/**
 * Terminal-style typing effect that cycles through a list of roles,
 * typing each one out, holding, then deleting before moving to the next.
 */
export default function TypingEffect({ words, typingSpeed = 55, deletingSpeed = 30, holdTime = 1400 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), holdTime)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      const nextText = isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
      timeout = setTimeout(() => setText(nextText), isDeleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, holdTime])

  return (
    <span className="font-mono">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle ml-1 bg-primary-500 animate-caret" />
    </span>
  )
}
