import { useInView } from "../hooks/useInView";
import { styles } from "../styles/styles";

export function About() {
  const [ref, inView] = useInView(0.2);
  return (
    <section id="about" style={{ ...styles.section, background: "#080c1f" }}>
      <div ref={ref} style={styles.aboutGrid}>
        <div style={{ ...styles.aboutLeft, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)", transition: "all 0.8s cubic-bezier(.16,1,.3,1)" }}>
          <p style={styles.eyebrow}>About Teqto</p>
          <h2 style={styles.sectionH2}>Powering Innovation<br />Since 2008</h2>
          <p style={styles.bodyText}>
            Teqto started as a three-person consultancy in a co-working space. Today we're a 300-strong team of engineers, architects, and strategists trusted by Fortune 500s and high-growth startups alike.
          </p>
          <p style={styles.bodyText}>
            We believe great technology is invisible — it just works, reliably, at any load, in any geography. Our obsession with reliability is why clients stay with us for an average of 7 years.
          </p>
          <div style={styles.pills}>
            {["ISO 27001 Certified", "AWS Premier Partner", "Google Cloud Partner", "SOC 2 Type II"].map((p) => (
              <span key={p} style={styles.pill}>{p}</span>
            ))}
          </div>
        </div>
        <div style={{ ...styles.aboutRight, opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)", transition: "all 0.8s 0.2s cubic-bezier(.16,1,.3,1)" }}>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80" alt="IT team at work" style={styles.aboutImg} />
        </div>
      </div>
    </section>
  );
}
