// import { useInView } from "../hooks/useInView";
// import { services } from "../data/services";
// import { SectionHeader } from "./SectionHeader";
// import { styles } from "../styles/styles";

// function ServiceCard({ icon, title, desc, delay }) {
//   const [ref, inView] = useInView(0.1);
//   return (
//     <div
//       ref={ref}
//       className="service-card"
//       style={{ ...styles.serviceCard, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)", transition: `all 0.6s ${delay}s cubic-bezier(.16,1,.3,1)` }}
//     >
//       <span style={styles.serviceIcon}>{icon}</span>
//       <h3 style={styles.serviceTitle}>{title}</h3>
//       <p style={styles.serviceDesc}>{desc}</p>
//       <span style={styles.serviceArrow}>→</span>
//     </div>
//   );
// }

// export function Services() {
//   return (
//     <section id="services" style={styles.section}>
//       <SectionHeader eyebrow="What We Do" title="Services Built for Scale" />
//       <div style={styles.servicesGrid}>
//         {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 0.1} />)}
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { services } from "../data/services";

/* ─── Keyframe injection (once) ──────────────────── */
function injectKF() {
  if (document.getElementById("tq-svc-kf")) return;
  const s = document.createElement("style");
  s.id = "tq-svc-kf";
  s.textContent = `
    @keyframes tq-svc-in {
      from { opacity:0; transform:translateY(32px); }
      to   { opacity:1; transform:translateY(0); }
    }
    @keyframes tq-svc-num {
      from { opacity:0; transform:translateX(-12px); }
      to   { opacity:1; transform:translateX(0); }
    }
    @keyframes tq-svc-line {
      from { transform:scaleX(0); }
      to   { transform:scaleX(1); }
    }
    @keyframes tq-marquee {
      from { transform:translateX(0); }
      to   { transform:translateX(-50%); }
    }
  `;
  document.head.appendChild(s);
}

/* ─── useInView (intersection observer) ─────────── */
function useInView(threshold = 0.15) {
  const ref  = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Marquee tag strip ──────────────────────────── */
const TAGS = [
  "Cloud Infrastructure", "Cybersecurity", "Enterprise Software",
  "DevOps", "System Architecture", "UI / UX", "API Integration",
  "Data Engineering", "Mobile Apps", "AI Solutions",
];

function Marquee() {
  const items = [...TAGS, ...TAGS]; // doubled for seamless loop
  return (
    <div style={{
      overflow: "hidden",
      borderTop:    "1px solid rgba(255,255,255,.07)",
      borderBottom: "1px solid rgba(255,255,255,.07)",
      padding: "18px 0",
      marginBottom: 96,
    }}>
      <div style={{
        display: "flex",
        gap: 0,
        width: "max-content",
        animation: "tq-marquee 28s linear infinite",
      }}>
        {items.map((tag, i) => (
          <span key={i} style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 16,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,.35)",
            paddingRight: 40,
            whiteSpace: "nowrap",
          }}>
            <span style={{
              width: 4, height: 4, borderRadius: "50%",
              background: "#6c63ff", flexShrink: 0,
            }} />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Single service row (Buzzworthy accordion style) */
function ServiceRow({ icon, title, desc, index, total }) {
  const [ref, inView] = useInView(0.12);
  const [hovered, setHovered] = useState(false);

  const delay = `${index * 0.08}s`;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "64px 1fr auto",
        alignItems: "center",
        gap: 32,
        padding: "36px 0",
        borderBottom: index === total - 1
          ? "none"
          : "1px solid rgba(255,255,255,.07)",
        cursor: "default",
        opacity: inView ? 1 : 0,
        animation: inView
          ? `tq-svc-in 0.6s ${delay} cubic-bezier(.16,1,.3,1) forwards`
          : "none",
        transition: "background .25s",
      }}
    >
      {/* Index number */}
      <span style={{
        fontSize: 11,
        letterSpacing: "0.12em",
        color: hovered ? "#6c63ff" : "rgba(255,255,255,.2)",
        fontWeight: 500,
        transition: "color .25s",
        userSelect: "none",
        animation: inView ? `tq-svc-num 0.5s ${delay} both` : "none",
      }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Title + desc */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <span style={{
            fontSize: 22,
            lineHeight: 1,
            filter: hovered ? "none" : "grayscale(40%)",
            transition: "filter .25s",
          }}>
            {icon}
          </span>
          <h3 style={{
            margin: 0,
            fontSize: "clamp(18px,2.2vw,24px)",
            fontWeight: 700,
            color: hovered ? "#fff" : "rgba(255,255,255,.85)",
            letterSpacing: "-0.02em",
            transition: "color .25s",
            fontFamily: "'Inter','Segoe UI',sans-serif",
          }}>
            {title}
          </h3>
        </div>
        <p style={{
          margin: 0,
          fontSize: 14,
          color: "rgba(255,255,255,.4)",
          lineHeight: 1.65,
          maxWidth: 560,
          transition: "color .25s",
          ...(hovered ? { color: "rgba(255,255,255,.6)" } : {}),
          fontFamily: "'Inter','Segoe UI',sans-serif",
        }}>
          {desc}
        </p>

        {/* Animated underline */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg,#6c63ff,#00d4ff)",
          marginTop: 16,
          transformOrigin: "left",
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
          transition: "transform .4s cubic-bezier(.16,1,.3,1)",
          maxWidth: 200,
        }} />
      </div>

      {/* Arrow */}
      <span style={{
        width: 44,
        height: 44,
        border: "1px solid",
        borderColor: hovered ? "#6c63ff" : "rgba(255,255,255,.12)",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 18,
        color: hovered ? "#6c63ff" : "rgba(255,255,255,.25)",
        transform: hovered ? "translate(4px,-4px) rotate(-45deg)" : "rotate(-45deg)",
        transition: "all .3s cubic-bezier(.16,1,.3,1)",
        flexShrink: 0,
      }}>
        →
      </span>
    </div>
  );
}

/* ─── Section header ─────────────────────────────── */
function Header() {
  const [ref, inView] = useInView(0.2);
  return (
    <div ref={ref} style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 64,
      gap: 32,
      flexWrap: "wrap",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: "all .8s cubic-bezier(.16,1,.3,1)",
      fontFamily: "'Inter','Segoe UI',sans-serif",
    }}>
      <div>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 11,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.35)",
          marginBottom: 20,
        }}>
          <span style={{
            width: 20, height: 1,
            background: "#6c63ff",
            display: "inline-block",
          }} />
          What We Do
        </div>
        <h2 style={{
          margin: 0,
          fontSize: "clamp(32px,5vw,60px)",
          fontWeight: 900,
          color: "#fff",
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}>
          Services Built<br />
          <span style={{
            background: "linear-gradient(135deg,#6c63ff,#00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            for Scale.
          </span>
        </h2>
      </div>

      <p style={{
        margin: 0,
        fontSize: 15,
        color: "rgba(255,255,255,.4)",
        lineHeight: 1.7,
        maxWidth: 340,
        paddingBottom: 8,
      }}>
        End-to-end technology solutions engineered by Teqto's elite team —
        from architecture to deployment and beyond.
      </p>
    </div>
  );
}

/* ─── Main export ────────────────────────────────── */
export function Services() {
  useEffect(() => { injectKF(); }, []);

  return (
    <section
      id="services"
      style={{
        background: "#060612",
        padding: "120px 60px",
        fontFamily: "'Inter','Segoe UI',sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background hex pattern */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92'%3E%3Cpolygon points='40,2 78,22 78,70 40,90 2,70 2,22' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "80px 92px",
        pointerEvents: "none",
      }} />

      {/* Glow orb */}
      <div aria-hidden="true" style={{
        position: "absolute",
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "#6c63ff",
        top: -100,
        left: "50%",
        transform: "translateX(-50%)",
        filter: "blur(140px)",
        opacity: 0.08,
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
        <Header />
        <Marquee />

        {/* Service rows */}
        <div>
          {services.map((svc, i) => (
            <ServiceRow
              key={svc.title}
              {...svc}
              index={i}
              total={services.length}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </section>
  );
}

/* ─── Bottom CTA strip ───────────────────────────── */
function BottomCTA() {
  const [ref, inView] = useInView(0.2);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        marginTop: 80,
        paddingTop: 60,
        borderTop: "1px solid rgba(255,255,255,.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "all .8s .2s cubic-bezier(.16,1,.3,1)",
        fontFamily: "'Inter','Segoe UI',sans-serif",
      }}
    >
      <p style={{
        margin: 0,
        fontSize: "clamp(18px,2.5vw,28px)",
        fontWeight: 700,
        color: "rgba(255,255,255,.75)",
        letterSpacing: "-0.02em",
      }}>
        Not sure which service fits?<br />
        <span style={{ color: "rgba(255,255,255,.3)", fontWeight: 400, fontSize: "0.72em" }}>
          Let's talk through your challenge.
        </span>
      </p>

      <a
        href="#contact"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: hov ? "#7d75ff" : "#6c63ff",
          color: "#fff",
          padding: "16px 36px",
          borderRadius: 100,
          fontSize: 14,
          fontWeight: 600,
          textDecoration: "none",
          letterSpacing: "0.02em",
          boxShadow: hov
            ? "0 0 60px rgba(108,99,255,.6)"
            : "0 0 40px rgba(108,99,255,.35)",
          transform: hov ? "translateY(-2px)" : "translateY(0)",
          transition: "all .25s cubic-bezier(.16,1,.3,1)",
        }}
      >
        Start a Conversation
        <span style={{
          width: 28, height: 28,
          border: "1px solid rgba(255,255,255,.35)",
          borderRadius: "50%",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          transform: hov ? "translateX(3px)" : "translateX(0)",
          transition: "transform .25s",
        }}>→</span>
      </a>
    </div>
  );
}