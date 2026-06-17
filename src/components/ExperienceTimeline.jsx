import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../data/experience";

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`timeline-item ${isEven ? "timeline-item--left" : "timeline-item--right"}`}
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="timeline-dot">
        <div className="timeline-dot__inner" />
      </div>

      <motion.div
        className="exp-card"
        whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(108, 99, 255, 0.2)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="exp-card__period">{exp.period}</div>
        <h3 className="exp-card__role">{exp.role}</h3>
        <p className="exp-card__project">{exp.project}</p>

        <ul className="exp-card__highlights">
          {exp.highlights.map((h, i) => (
            <li key={i} className="exp-card__highlight-item">
              <span className="bullet" />
              {h}
            </li>
          ))}
        </ul>

        <div className="exp-card__tech">
          {exp.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Work Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            Over 3 years of building enterprise software across analytics, fintech, and cloud domains.
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline__line" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
