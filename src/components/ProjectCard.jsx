import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="project-card__top">
        <div className="project-card__icon">
          {getProjectIcon(project.title)}
        </div>
        {project.featured && <span className="project-card__featured">Featured</span>}
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tech">
        {project.tech.slice(0, 5).map((t) => (
          <span key={t} className="tech-tag tech-tag--sm">
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="tech-tag tech-tag--sm tech-tag--more">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      <div className="project-card__actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn project-btn--github"
        >
          <FiGithub size={15} />
          View Code
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn--live"
          >
            <FiExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn project-btn--soon"
          >
            🚀 View Source
          </a>
        )}
      </div>
    </motion.div>
  );
}

function getProjectIcon(title) {
  const icons = {
    "Customer Analytics Platform": "📊",
    "Loan Approval Decision Engine": "🏦",
    "Construction Reporting Platform": "🏗️",
    "Location-Based Store Finder": "🗺️",
    "Retail Sales Analytics Dashboard": "🛒",
    "AI Resume Screening Assistant": "🤖",
    "Personal Finance & Investment Tracker": "💰",
    "Real-Time Crypto Price Alert System": "₿",
    "Multiplayer Quiz Battle Platform": "🎮",
  };
  return icons[title] || "💻";
}
