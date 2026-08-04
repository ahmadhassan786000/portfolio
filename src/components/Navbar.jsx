import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-surface-dark/80 backdrop-blur-lg shadow-card border-b border-slate-200/60 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container flex h-16 sm:h-20 items-center justify-between">
        <a href="#home" className="font-display text-lg sm:text-xl font-bold tracking-tight">
          AHMAD <span className="text-gradient">HASSAN</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-medium text-sm transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-brand"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="https://github.com/ahmadhassan786000" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
            <FiGithub size={19} />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-hassan-143967331/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
            <FiLinkedin size={19} />
          </a>
          <a href="mailto:ahmad.hassan@example.com" aria-label="Email" className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
            <FiMail size={19} />
          </a>
          <a
            href="/Ahmad-Hassan-Resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            <FiDownload size={15} /> Resume
          </a>
        </div>

        <button
          className="md:hidden text-slate-700 dark:text-slate-200"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-surface-dark/95 backdrop-blur-lg border-b border-slate-200/60 dark:border-white/5"
          >
            <ul className="section-container flex flex-col gap-4 py-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 pt-2">
                <button onClick={toggleTheme} aria-label="Toggle dark mode" className="rounded-full p-2 bg-slate-100 dark:bg-white/10">
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <a href="https://github.com/ahmadhassan786000" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub size={20} /></a>
                <a href="https://www.linkedin.com/in/ahmad-hassan-143967331/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
                <a href="mailto:ahmad.hassan@example.com" aria-label="Email"><FiMail size={20} /></a>
              </li>
              <li>
                <a
                  href="/Ahmad-Hassan-Resume.pdf"
                  download
                  className="flex w-fit items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white"
                >
                  <FiDownload size={15} /> Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
