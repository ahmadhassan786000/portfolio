import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-50 dark:bg-white/[0.02]">
      <div className="section-container">
        <SectionHeading
          eyebrow="02 / Skills"
          title="Tools I build with"
          description="A backend-leaning toolkit, rounded out with enough frontend to ship a full product."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-card relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-brand opacity-10 group-hover:opacity-20 transition-opacity blur-xl" />
              <h3 className="font-display font-semibold text-lg mb-4 text-slate-900 dark:text-white">
                {group.title}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
