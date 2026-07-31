import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { profile } from '../data/portfolioData.js'
import ScrollReveal from '../components/ScrollReveal.jsx'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Please add a subject.'
  if (!form.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    try {
      if (isConfigured) {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: form.name,
            reply_to: form.email,
            subject: form.subject,
            message: form.message,
            to_email: profile.email,
          },
          { publicKey: PUBLIC_KEY }
        )
      } else {
        // Graceful fallback so the form still delivers the message end-to-end
        // even before EmailJS credentials are added — see README for setup.
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
          form.subject
        )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`
      }
      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-surface-subtle dark:bg-white/[0.02]">
      <div className="container-page">
        <ScrollReveal>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-2xl">
            Let&apos;s build something together
          </h2>
          <p className="mt-4 max-w-2xl text-ink-600 dark:text-ink-400 leading-relaxed">
            Interested in discussing internship opportunities, software engineering roles,
            research collaborations, or an interesting project? I&apos;d be glad to connect
            and talk through how I can contribute to your team.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-6">
          <ScrollReveal direction="right" className="space-y-4">
            <ContactTile
              icon={<FiMail size={18} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactTile
              icon={<FiPhone size={18} />}
              label="Phone"
              value={profile.phone}
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            />
            <ContactTile
              icon={<FiMapPin size={18} />}
              label="Location"
              value={profile.location}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="glass-panel rounded-3xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  autoComplete="email"
                />
              </div>
              <Field
                label="Subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              <Field
                label="Message"
                name="message"
                as="textarea"
                rows={5}
                value={form.message}
                onChange={handleChange}
                error={errors.message}
              />

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
                {status !== 'sending' && <FiSend size={16} />}
              </motion.button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  <FiCheckCircle size={16} /> Message sent — thanks for reaching out, I&apos;ll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                  <FiAlertCircle size={16} /> Something went wrong sending that. Please try
                  again, or email me directly at{' '}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ContactTile({ icon, label, value, href }) {
  const Wrapper = href ? 'a' : 'div'
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className="glass-panel rounded-2xl p-5 flex items-center gap-4 transition-colors hover:border-primary-500/40"
    >
      <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400">
        {icon}
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-wide text-ink-500 dark:text-ink-400">
          {label}
        </p>
        <p className="text-sm font-semibold break-all">{value}</p>
      </div>
    </Wrapper>
  )
}

function Field({ label, name, error, as = 'input', ...props }) {
  const Tag = as
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-ink-800/10 dark:border-white/15 bg-white/70 dark:bg-white/5 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary-500 placeholder:text-ink-400"
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}
