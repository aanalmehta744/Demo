import { useInView } from "../hooks/useInView";
import { team } from "../data/team";
import { SectionHeader } from "./SectionHeader";
import { styles } from "../styles/styles";

function TeamCard({ name, role, emoji, skills, delay }) {
  const [ref, inView] = useInView(0.1);
  return (
    <div
      ref={ref}
      className="team-card"
      style={{ ...styles.teamCard, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ${delay}s` }}
    >
      <div style={styles.teamAvatar}>{emoji}</div>
      <h3 style={styles.teamName}>{name}</h3>
      <p style={styles.teamRole}>{role}</p>
      <div style={styles.teamSkills}>
        {skills.map((s) => <span key={s} style={styles.teamSkill}>{s}</span>)}
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" style={{ ...styles.section, background: "#080c1f" }}>
      <SectionHeader eyebrow="Our People" title="Meet the Experts" />
      <div style={styles.teamGrid}>
        {team.map((t, i) => <TeamCard key={t.name} {...t} delay={i * 0.12} />)}
      </div>
    </section>
  );
}
