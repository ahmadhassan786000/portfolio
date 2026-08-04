import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <p className="font-display font-semibold text-slate-900 dark:text-white">Ahmad Hassan</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">Backend Developer</p>
        </div>

        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a href="https://github.com/ahmadhassan786000" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <FiGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ahmad-hassan-143967331/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href="mailto:ahmad.hassan@example.com" aria-label="Email" className="hover:text-primary transition-colors">
            <FiMail size={18} />
          </a>
        </div>

        <div className="text-sm text-slate-500 dark:text-slate-400">
          <p>Built with React + Tailwind CSS</p>
          <p>© 2026 Ahmad Hassan. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
