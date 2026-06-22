import { styles } from "../styles/styles";

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerInner}>
        <div>
          <div style={styles.logo}><span style={styles.logoIcon}>⬡</span><span style={styles.logoText}>Teqto</span></div>
          <p style={{ color: "#666", marginTop: 8, fontSize: 14 }}>Building the digital backbone of tomorrow.</p>
        </div>
        <div style={styles.footerLinks}>
          {["Services", "About", "Team", "Contact", "Privacy Policy"].map((l) => (
            <a key={l} href="#" style={styles.footerLink}>{l}</a>
          ))}
        </div>
      </div>
      <p style={styles.footerCopy}>© 2026 Teqto. All rights reserved.</p>
    </footer>
  );
}
