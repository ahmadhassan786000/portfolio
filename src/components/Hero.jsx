import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'
import { SiNodedotjs, SiMongodb, SiExpress, SiPostgresql, SiReact, SiTailwindcss } from 'react-icons/si'
import GradientBlobs from './GradientBlobs.jsx'

const ROLES = ['Backend Developer', 'MERN Stack Developer', 'Node.js Enthusiast', 'Problem Solver']

function useTypewriter(words, { typingSpeed = 70, deletingSpeed = 40, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        )
      }, deleting ? deletingSpeed : typingSpeed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause])

  return text
}

const FLOATING_ICONS = [
  { Icon: SiNodedotjs, style: 'top-4 left-2 text-green-500', delay: 0 },
  { Icon: SiMongodb, style: 'top-24 right-0 text-green-600', delay: 1.2 },
  { Icon: SiExpress, style: 'bottom-20 left-0 text-slate-500 dark:text-slate-300', delay: 2.1 },
  { Icon: SiPostgresql, style: 'bottom-4 right-6 text-sky-600', delay: 0.6 },
  { Icon: SiReact, style: 'top-1/2 -left-4 text-cyan-400', delay: 1.8 },
  { Icon: SiTailwindcss, style: 'top-2 right-1/3 text-cyan-500', delay: 2.6 },
]

export default function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 sm:pt-20 overflow-hidden">
      <GradientBlobs />

      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
            $ whoami
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I&apos;m <span className="text-gradient">Ahmad Hassan</span>
          </h1>
          <div className="mt-4 h-9 font-mono text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-primary ml-1 animate-blink align-middle" />
          </div>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-slate-500 dark:text-slate-400">
            I build scalable backend systems, REST APIs, and full-stack web applications using
            modern JavaScript technologies. My passion lies in designing secure backend
            architectures, optimizing databases, and creating reliable, high-performance
            applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/Ahmad-Hassan-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 px-6 py-3 font-semibold text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-colors"
            >
              <FiDownload /> Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right: terminal signature element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-slate-400">ahmad@backend:~</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <p className="text-slate-400">$ node server.js</p>
              <p className="text-green-500">✔ Connected to MongoDB</p>
              <p className="text-green-500">✔ Connected to PostgreSQL</p>
              <p className="text-primary">→ Server listening on port 5000</p>
              <p className="text-slate-400 mt-4">$ status --profile</p>
              <p>
                <span className="text-secondary">role:</span> {typed}
                <span className="inline-block w-[2px] h-4 bg-primary ml-1 animate-blink align-middle" />
              </p>
              <p><span className="text-secondary">location:</span> Pakistan</p>
              <p><span className="text-secondary">stack:</span> MERN + PostgreSQL</p>
            </div>
          </div>

          {FLOATING_ICONS.map(({ Icon, style, delay }, i) => (
            <motion.div
              key={i}
              className={`absolute hidden sm:flex h-11 w-11 items-center justify-center rounded-xl bg-white dark:bg-surface-dark shadow-card text-xl animate-float ${style}`}
              style={{ animationDelay: `${delay}s` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + delay * 0.2 }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
