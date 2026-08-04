import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 max-w-2xl"
    >
      {eyebrow && (
        <span className="font-mono text-sm tracking-widest text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{title}</h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400">
          {description}
        </p>
      )}
    </motion.div>
  )
}
