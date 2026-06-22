import { styles } from "../styles/styles";

export function SectionHeader({ eyebrow, title }) {
  return (
    <div style={styles.sectionHeader}>
      <p style={styles.eyebrow}>{eyebrow}</p>
      <h2 style={styles.sectionH2}>{title}</h2>
    </div>
  );
}
