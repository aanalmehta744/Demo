import { useInView } from "../hooks/useInView";
import { services } from "../data/services";
import { SectionHeader } from "./SectionHeader";
import { styles } from "../styles/styles";

function ServiceCard({ icon, title, desc, delay }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="service-card"
      style={{ ...styles.serviceCard, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ${delay}s cubic-bezier(.16,1,.3,1)` }}
    >
      <span style={styles.serviceIcon}>{icon}</span>
      <h3 style={styles.serviceTitle}>{title}</h3>
      <p style={styles.serviceDesc}>{desc}</p>
      <span style={styles.serviceArrow}>→</span>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" style={styles.section}>
      <SectionHeader eyebrow="What We Do" title="Services Built for Scale" />
      <div style={styles.servicesGrid}>
        {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 0.1} />)}
      </div>
    </section>
  );
}
