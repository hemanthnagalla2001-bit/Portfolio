import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/education";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="education__grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="edu-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="edu-card__header">
                <div className="edu-card__logo">{edu.logo}</div>
                <div className="edu-card__meta">
                  <span className="edu-card__period">{edu.period}</span>
                  <span className="edu-card__gpa">GPA {edu.gpa}</span>
                </div>
              </div>

              <h3 className="edu-card__degree">{edu.degree}</h3>
              <p className="edu-card__field">{edu.field}</p>
              <p className="edu-card__institution">
                🏛️ {edu.institution}
              </p>
              <p className="edu-card__location">📍 {edu.location}</p>

              <ul className="edu-card__highlights">
                {edu.highlights.map((h, j) => (
                  <motion.li
                    key={j}
                    className="edu-card__highlight-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.2 + j * 0.07 + 0.4 }}
                  >
                    <span className="bullet" />
                    {h}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
