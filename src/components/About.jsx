import { motion } from 'framer-motion'
import { Server, Database, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const HIGHLIGHTS = [
  {
    icon: Server,
    title: 'Backend-first mindset',
    text: 'Node.js and Express.js APIs built around clear boundaries, validation, and secure auth.',
  },
  {
    icon: Database,
    title: 'Data that scales',
    text: 'Comfortable modeling in MongoDB and PostgreSQL, and choosing the right one for the job.',
  },
  {
    icon: Code2,
    title: 'Full-stack when needed',
    text: 'React and Tailwind CSS for interfaces that consume the APIs I build cleanly.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-container">
        <SectionHeading eyebrow="01 / About" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-base sm:text-lg text-slate-600 dark:text-slate-300"
          >
            <p>
              I am a passionate Backend Developer with experience building modern web
              applications using the MERN Stack.
            </p>
            <p>
              My primary interest is backend development using{' '}
              <span className="font-semibold text-primary">Node.js</span>,{' '}
              <span className="font-semibold text-primary">Express.js</span>,{' '}
              <span className="font-semibold text-primary">MongoDB</span>, and{' '}
              <span className="font-semibold text-primary">PostgreSQL</span>. I also create
              responsive user interfaces using <span className="font-semibold text-primary">React</span> and{' '}
              <span className="font-semibold text-primary">Tailwind CSS</span>.
            </p>
            <p>
              I enjoy solving real-world problems, designing REST APIs, working with databases,
              and continuously improving my development skills by building practical projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-5 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
