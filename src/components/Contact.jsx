import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "hemanthnagalla2001@gmail.com",
    href: "mailto:hemanthnagalla2001@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+1 (613) 371-9494",
    href: "tel:+16133719494",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Ottawa, Ontario, Canada",
    href: null,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/hemanthnagalla2001-bit",
    href: "https://github.com/hemanthnagalla2001-bit",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:hemanthnagalla2001@gmail.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus("sent");
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to new opportunities, collaborations, and interesting projects. Drop me a message!
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info-col"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="contact__info-heading">Contact Information</h3>
            <p className="contact__info-sub">
              Feel free to reach out through any of the channels below. I&apos;ll respond within 24 hours.
            </p>

            <div className="contact__info-list">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact-info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="contact-info-item__icon">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <div className="contact-info-item__label">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-info-item__value contact-info-item__link"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info-item__value">{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact__form-col"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Job Opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Hi Hemanth, I'd like to discuss..."
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn--primary btn--full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiSend size={16} />
                {status === "sent" ? "Message Sent!" : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
