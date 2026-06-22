import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "../hooks/useInView";
import { stats } from "../data/stats";
import { SectionHeader } from "./SectionHeader";
import { styles } from "../styles/styles";

function StatCard({ value, suffix, label, inView }) {
  const count = useCountUp(value, 2200, inView);
  return (
    <div style={styles.statCard}>
      <span style={styles.statNum}>{count}{suffix}</span>
      <span style={styles.statLabel}>{label}</span>
    </div>
  );
}

export function Stats() {
  const [ref, inView] = useInView(0.3);
  return (
    <section id="stats" style={styles.statsSection}>
      <div ref={ref} style={styles.statsInner}>
        <SectionHeader eyebrow="By the Numbers" title="Results We're Proud Of" />
        <div style={styles.statsGrid}>
          {stats.map((s) => <StatCard key={s.label} {...s} inView={inView} />)}
        </div>
      </div>
    </section>
  );
}
