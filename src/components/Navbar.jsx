import { useState } from "react";
import { styles } from "../styles/styles";

const links = ["Home", "Services", "About", "Stats", "Team", "Contact"];

export function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : styles.navTop) }}>
      <div style={styles.navInner}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>⬡</span>
          <span style={styles.logoText}>Teqto</span>
        </div>
        <ul style={{ ...styles.navLinks, display: open ? "flex" : undefined }} className="nav-links">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={styles.navLink} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
          <li><a href="#contact" style={styles.navCta}>Get a Quote</a></li>
        </ul>
        <button className="burger" style={styles.burger} onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
