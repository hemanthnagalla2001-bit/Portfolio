import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const words = ["Java Full Stack Developer", "Cloud Engineer", "Backend Architect", "React Developer"];

function TypewriterText({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="hero__typewriter">
      {displayed}
      <span className="cursor">|</span>
    </span>
  );
}

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid" />
      </div>

      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="badge-dot" />
          Available for opportunities
        </motion.div>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Hemanth Nagalla</span>
        </motion.h1>

        <motion.div
          className="hero__role-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <span className="hero__role-prefix">I build </span>
          <TypewriterText words={words} />
        </motion.div>

        <motion.p
          className="hero__summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Results-driven Java Full Stack Developer with over 3 years of experience designing
          enterprise applications, cloud-native microservices, real-time systems, and data-driven
          solutions. Proficient in Java, Spring Boot, React, AWS, and event-driven architectures.
        </motion.p>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          <span className="hero__meta-item">
            <FiMapPin size={14} /> Ottawa, Ontario, Canada
          </span>
          <span className="hero__meta-item">
            <FiPhone size={14} /> +1 (613) 371-9494
          </span>
          <a href="mailto:hemanthnagalla2001@gmail.com" className="hero__meta-item hero__meta-link">
            <FiMail size={14} /> hemanthnagalla2001@gmail.com
          </a>
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <button className="btn btn--primary" onClick={() => handleScroll("#projects")}>
            View Projects
          </button>
          <a href="/resume/Hemanth_Nagalla_Resume.pdf" download className="btn btn--secondary">
            Download Resume
          </a>
          <button className="btn btn--ghost" onClick={() => handleScroll("#contact")}>
            Contact Me
          </button>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="https://github.com/hemanthnagalla2001-bit"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a href="mailto:hemanthnagalla2001@gmail.com" className="social-link" aria-label="Email">
            <FiMail size={20} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll down</span>
      </motion.div>
    </section>
  );
}
