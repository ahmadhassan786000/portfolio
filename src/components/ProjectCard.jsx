import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-card transition-shadow hover:shadow-glow"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-white/10">
        <img
          src={project.image}
          alt={`${project.name} preview`}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src =
              'data:image/svg+xml;utf8,' +
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400"><rect width="100%" height="100%" fill="#7C3AED22"/><text x="50%" y="50%" font-family="monospace" font-size="20" fill="#7C3AED" text-anchor="middle" dominant-baseline="middle">${project.name}</text></svg>`
              )
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white">
          {project.name}
        </h3>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary dark:text-primary-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-white/15 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary transition-colors"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  )
}
