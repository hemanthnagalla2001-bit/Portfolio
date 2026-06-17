import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, projectFilters } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Live Projects") return p.live !== null;
    return p.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of real-world projects spanning full-stack development, cloud architecture, and data analytics.
          </p>
        </motion.div>

        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {projectFilters.map((filter) => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? "filter-btn--active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects__grid"
          layout
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            className="projects__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects match this filter yet.
          </motion.p>
        )}

        <motion.div
          className="projects__github-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <p>Want to see more?</p>
          <a
            href="https://github.com/hemanthnagalla2001-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
