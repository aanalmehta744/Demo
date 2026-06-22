import { styles } from "../styles/styles";

export function Loader({ done }) {
  return (
    <div style={{ ...styles.loaderWrap, opacity: done ? 0 : 1, pointerEvents: done ? "none" : "all", transition: "opacity 0.6s" }}>
      <div style={styles.loaderInner}>
        <div style={styles.loaderRing} />
        <span style={styles.loaderLogo}>⬡</span>
        <p style={styles.loaderText}>Teqto</p>
      </div>
    </div>
  );
}
