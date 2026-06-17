import { motion } from "framer-motion";
import { FiGithub, FiMail, FiHeart } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <motion.div
            className="footer__brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="footer__logo">HN</div>
            <p className="footer__tagline">
              Building scalable software solutions, one commit at a time.
            </p>
          </motion.div>

          <motion.div
            className="footer__links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="footer__links-title">Quick Links</h4>
            {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="footer__link"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${l.toLowerCase()}`).scrollIntoView({ behavior: "smooth" });
                }}
              >
                {l}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="footer__contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="footer__links-title">Contact</h4>
            <a href="mailto:hemanthnagalla2001@gmail.com" className="footer__link">
              hemanthnagalla2001@gmail.com
            </a>
            <span className="footer__link">+1 (613) 371-9494</span>
            <span className="footer__link">Ottawa, Ontario, Canada</span>
          </motion.div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Hemanth Nagalla. Built with <FiHeart size={12} className="heart-icon" /> using React & Framer Motion.
          </p>
          <div className="footer__socials">
            <a
              href="https://github.com/hemanthnagalla2001-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <FiGithub size={18} />
            </a>
            <a href="mailto:hemanthnagalla2001@gmail.com" className="social-link" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
