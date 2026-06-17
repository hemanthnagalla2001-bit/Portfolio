import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "../data/skills";

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-item__header">
        <span className="skill-item__name">{name}</span>
        <span className="skill-item__pct">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar__fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Technical Skills</span>
          <h2 className="section-title">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit built across enterprise development, cloud engineering, and data analytics.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <div className="skill-group__header">
                <span className="skill-group__icon">{group.icon}</span>
                <h3 className="skill-group__title">{group.category}</h3>
              </div>
              <div className="skill-group__items">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills__badges"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          {skillGroups.flatMap((g) => g.skills).map((s) => (
            <motion.span
              key={s.name}
              className="skill-badge"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {s.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
