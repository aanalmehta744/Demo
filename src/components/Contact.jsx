import { useState } from "react";
import { useInView } from "../hooks/useInView";
import { SectionHeader } from "./SectionHeader";
import { styles } from "../styles/styles";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [ref, inView] = useInView(0.2);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = () => { if (form.name && form.email) setSent(true); };

  return (
    <section id="contact" style={{ ...styles.section, background: "#080c1f" }}>
      <SectionHeader eyebrow="Get in Touch" title="Start Your Project" />
      <div ref={ref} style={{ ...styles.contactCard, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s cubic-bezier(.16,1,.3,1)" }}>
        {sent ? (
          <div style={styles.sentMsg}>
            <span style={{ fontSize: 48 }}>✅</span>
            <h3 style={{ color: "#fff", margin: "12px 0 6px" }}>Message Sent!</h3>
            <p style={{ color: "#aaa" }}>We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div style={styles.contactForm}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} style={styles.input} />
            <input name="email" placeholder="Work Email" value={form.email} onChange={handleChange} style={styles.input} />
            <textarea name="msg" placeholder="Tell us about your project…" value={form.msg} onChange={handleChange} rows={4} style={{ ...styles.input, resize: "vertical" }} />
            <button onClick={handleSubmit} style={styles.btnPrimary}>Send Message</button>
          </div>
        )}
      </div>
    </section>
  );
}
