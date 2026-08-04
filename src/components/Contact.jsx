import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import SectionHeading from './SectionHeading.jsx'

const SOCIALS = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/ahmadhassan786000' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmad-hassan-143967331/' },
  { icon: FiMail, label: 'Email', href: 'mailto:ahmad.hassan@example.com' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // Hook this up to your backend / form service (e.g. Formspree, EmailJS, or your own API).
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-slate-50 dark:bg-white/[0.02]">
      <div className="section-container">
        <SectionHeading
          eyebrow="04 / Contact"
          title="Let's build something"
          description="Open to backend and full-stack roles, freelance work, and interesting collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 sm:p-8 shadow-card"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or role..."
                className="w-full rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-4 py-2.5 text-sm outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
            >
              <FiSend />
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Thanks — your message is in. I&apos;ll reply soon.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
              <FiMapPin className="text-primary" size={20} />
              <span>Pakistan</span>
            </div>
            <div className="flex flex-col gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon size={18} /> {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
