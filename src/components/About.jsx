import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "9+", label: "Projects Built" },
  { value: "15+", label: "Technologies" },
  { value: "5", label: "Roles Held" },
];

const highlights = [
  { icon: "☕", label: "Java & Spring Boot" },
  { icon: "⚛️", label: "React Frontend" },
  { icon: "☁️", label: "AWS Cloud" },
  { icon: "📊", label: "Data Analytics" },
  { icon: "🐳", label: "Docker & DevOps" },
  { icon: "⚡", label: "Kafka & Real-Time" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Scalable <span className="gradient-text">Software Solutions</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text-col"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about__paragraph">
              I&apos;m a <strong>Java Full Stack Developer</strong> based in Ottawa, Ontario, Canada,
              with over 3 years of experience building enterprise-grade applications and cloud-native
              microservices. My expertise spans the full technology stack — from robust Java/Spring Boot
              backends to dynamic React frontends.
            </p>
            <p className="about__paragraph">
              I specialize in designing <strong>event-driven architectures</strong> with Kafka,
              deploying scalable solutions on <strong>AWS</strong>, and delivering data-driven insights
              through analytics dashboards. I thrive in environments that demand both engineering
              precision and business impact.
            </p>
            <p className="about__paragraph">
              Whether it&apos;s processing millions of real-time events, optimizing database queries for
              sub-200ms performance, or building ML-powered decision engines — I deliver solutions that
              scale.
            </p>

            <div className="about__highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="highlight-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <span>{h.icon}</span>
                  <span>{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__stats-col"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="about__card">
              <div className="about__card-header">
                <div className="about__avatar">HN</div>
                <div>
                  <div className="about__card-name">Hemanth Nagalla</div>
                  <div className="about__card-role">Java Full Stack Developer</div>
                  <div className="about__card-location">📍 Ottawa, Ontario, Canada</div>
                </div>
              </div>

              <div className="stats-grid">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="stat-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="stat-value gradient-text">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="about__contact-links">
                <a href="mailto:hemanthnagalla2001@gmail.com" className="about__contact-link">
                  ✉️ hemanthnagalla2001@gmail.com
                </a>
                <a
                  href="https://github.com/hemanthnagalla2001-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about__contact-link"
                >
                  🔗 github.com/hemanthnagalla2001-bit
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
