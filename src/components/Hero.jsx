// import { useState, useEffect } from "react";
// import { styles } from "../styles/styles";
// import "../styles/animation.css";

// import {
//   FaReact,
//   FaNodeJs,
//   FaFigma,
//   FaAngular,
//   FaAws,
//   FaDocker,
// } from "react-icons/fa";

// import {
//   SiMongodb,
//   SiNextdotjs,
//   SiTypescript,
//   SiFirebase,
// } from "react-icons/si";

// const outerIcons = [
//   <FaReact color="#61DAFB" />,
//   <FaNodeJs color="#68A063" />,
//   <FaAngular color="#DD0031" />,
//   <SiMongodb color="#47A248" />,
//   <FaFigma color="#F24E1E" />,
//   <FaAws color="#FF9900" />,
// ];

// const innerIcons = [
//   <SiNextdotjs color="#FFFFFF" />,
//   <FaDocker color="#2496ED" />,
//   <SiTypescript color="#3178C6" />,
//   <SiFirebase color="#FFCA28" />,
// ];

// export function Hero() {
//   const [visible, setVisible] = useState(false);
//   useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

//   return (
//     <section id="home" style={styles.hero}>
//       <div style={styles.gridBg} aria-hidden="true" />
//       <div style={styles.glowBlob1} aria-hidden="true" />
//       <div style={styles.glowBlob2} aria-hidden="true" />
//       <div style={{ ...styles.heroContent, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 0.9s cubic-bezier(.16,1,.3,1)" }}>
//         <div style={styles.heroBadge}>🚀 Next-Gen IT Solutions</div>
//         <h1 style={styles.heroH1}>
//           We Build the<br />
//           <span style={styles.heroAccent}>Digital Backbone</span><br />
//           of Tomorrow
//         </h1>
//         <p style={styles.heroSub}>
//           Cloud infrastructure, cybersecurity, and enterprise software — delivered with precision by Teqto's elite engineers.
//         </p>
//         <div style={styles.heroBtns}>
//           <a href="#services" style={styles.btnPrimary}>Explore Services</a>
//           <a href="#contact" style={styles.btnGhost}>Talk to Us →</a>
//         </div>
//       </div>
//    <div
//   style={{
//     ...styles.heroVisual,
//     opacity: visible ? 1 : 0,
//     transition: "opacity 1.2s 0.4s",
//     position: "relative",
//     width: "340px",
//     height: "340px",
//   }}
// >
//   <svg
//     viewBox="0 0 340 340"
//     width="340"
//     height="340"
//     style={{
//       position: "absolute",
//       inset: 0,
//       filter: "drop-shadow(0 0 40px #6c63ff88)",
//     }}
//   >
//     <defs>
//       <radialGradient id="rg" cx="50%" cy="50%" r="50%">
//         <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.6" />
//         <stop offset="100%" stopColor="#0a0f2e" stopOpacity="0" />
//       </radialGradient>
//     </defs>

//     <circle cx="170" cy="170" r="155" fill="url(#rg)" />

//     <circle
//       cx="170"
//       cy="170"
//       r="120"
//       fill="none"
//       stroke="#6c63ff55"
//       strokeWidth="1.5"
//       strokeDasharray="8 8"
//     >
//       <animateTransform
//         attributeName="transform"
//         type="rotate"
//         from="0 170 170"
//         to="360 170 170"
//         dur="25s"
//         repeatCount="indefinite"
//       />
//     </circle>

//     <circle
//       cx="170"
//       cy="170"
//       r="80"
//       fill="none"
//       stroke="#00d4ff55"
//       strokeWidth="1.5"
//       strokeDasharray="5 10"
//     >
//       <animateTransform
//         attributeName="transform"
//         type="rotate"
//         from="360 170 170"
//         to="0 170 170"
//         dur="18s"
//         repeatCount="indefinite"
//       />
//     </circle>

//     <circle
//       cx="170"
//       cy="170"
//       r="42"
//       fill="rgba(108,99,255,.15)"
//       stroke="#6c63ff"
//       strokeWidth="2"
//     />

//     <text
//       x="170"
//       y="182"
//       textAnchor="middle"
//       fontSize="28"
//       fontWeight="700"
//       fill="#fff"
//     >
//       TQ
//     </text>
//   </svg>

//   {/* OUTER RING */}
//   <div
//     style={{
//       position: "absolute",
//       inset: 0,
//       animation: "spinClockwise 25s linear infinite",
//     }}
//   >
//     {outerIcons.map((icon, i) => {
//       const angle = (360 / outerIcons.length) * i;
//       const radius = 120;

//       const x =
//         170 + radius * Math.cos((angle * Math.PI) / 180) - 18;
//       const y =
//         170 + radius * Math.sin((angle * Math.PI) / 180) - 18;

//       return (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             left: `${x}px`,
//             top: `${y}px`,
//             width: "36px",
//             height: "36px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "28px",
//             animation: `float 3s ease-in-out infinite`,
//           }}
//         >
//           {icon}
//         </div>
//       );
//     })}
//   </div>

//   {/* INNER RING */}
//   <div
//     style={{
//       position: "absolute",
//       inset: 0,
//       animation: "spinCounter 18s linear infinite",
//     }}
//   >
//     {innerIcons.map((icon, i) => {
//       const angle = 45 + (360 / innerIcons.length) * i;
//       const radius = 80;

//       const x =
//         170 + radius * Math.cos((angle * Math.PI) / 180) - 15;
//       const y =
//         170 + radius * Math.sin((angle * Math.PI) / 180) - 15;

//       return (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             left: `${x}px`,
//             top: `${y}px`,
//             width: "30px",
//             height: "30px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontSize: "22px",
//             animation: `pulse 2s ease-in-out infinite`,
//           }}
//         >
//           {icon}
//         </div>
//       );
//     })}
//   </div>
// </div>
//     </section>
//   );
// }
import { useState, useEffect, useRef } from "react";
import {
  FaReact, FaNodeJs, FaFigma, FaAngular, FaAws, FaDocker,
} from "react-icons/fa";
import {
  SiMongodb, SiNextdotjs, SiTypescript, SiFirebase,
} from "react-icons/si";

/* ─── Tech icon rings ─────────────────────────────── */
const outerIcons = [
  { icon: <FaReact color="#61DAFB" />,    label: "React"      },
  { icon: <FaNodeJs color="#68A063" />,   label: "Node.js"    },
  { icon: <FaAngular color="#DD0031" />,  label: "Angular"    },
  { icon: <SiMongodb color="#47A248" />,  label: "MongoDB"    },
  { icon: <FaFigma color="#F24E1E" />,    label: "Figma"      },
  { icon: <FaAws color="#FF9900" />,      label: "AWS"        },
];
const innerIcons = [
  { icon: <SiNextdotjs color="#FFFFFF" />, label: "Next.js"   },
  { icon: <FaDocker color="#2496ED" />,    label: "Docker"    },
  { icon: <SiTypescript color="#3178C6" />,label: "TypeScript" },
  { icon: <SiFirebase color="#FFCA28" />,  label: "Firebase"  },
];

/* ─── Word rotator phrases ────────────────────────── */
const PHRASES = [
  "Build Foundations",
  "Secure Systems",
  "Ship at Scale",
  "Drive Growth",
  "Deliver Precision",
];

/* ─── Inline styles (no extra CSS file needed) ───── */
const S = {
  section: {
    position: "relative",
    overflow: "hidden",
    background: "#060612",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 60px",
    gap: "40px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  hexBg: {
    position: "absolute",
    inset: 0,
    opacity: 0.07,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92'%3E%3Cpolygon points='40,2 78,22 78,70 40,90 2,70 2,22' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")`,
    backgroundSize: "80px 92px",
    pointerEvents: "none",
  },
  orb1: {
    position: "absolute",
    width: 600,
    height: 600,
    borderRadius: "50%",
    background: "#6c63ff",
    top: -150,
    right: -100,
    filter: "blur(120px)",
    opacity: 0.25,
    pointerEvents: "none",
  },
  orb2: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: "50%",
    background: "#00d4ff",
    bottom: -80,
    right: 280,
    filter: "blur(100px)",
    opacity: 0.12,
    pointerEvents: "none",
  },
  cursorGlow: {
    position: "fixed",
    width: 320,
    height: 320,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 1,
    transform: "translate(-50%,-50%)",
    background: "radial-gradient(circle, rgba(108,99,255,.15) 0%, transparent 70%)",
    transition: "left .12s ease, top .12s ease",
  },
  left: {
    position: "relative",
    zIndex: 5,
    maxWidth: 620,
    paddingTop: 80,
    paddingBottom: 80,
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "rgba(255,255,255,.45)",
    textTransform: "uppercase",
    marginBottom: 32,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#6c63ff",
    animation: "tq-pulse-dot 2s ease-in-out infinite",
  },
  rotatorRow: {
    display: "flex",
    alignItems: "center",
    fontSize: "clamp(32px, 5vw, 64px)",
    fontWeight: 900,
    color: "#fff",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    marginBottom: 4,
    overflow: "hidden",
  },
  weText: {
    marginRight: 14,
    color: "rgba(255,255,255,.22)",
    fontStyle: "italic",
    flexShrink: 0,
  },
  rotatorWrap: {
    position: "relative",
    height: "1.12em",
    overflow: "hidden",
    flex: 1,
    minWidth: 0,
  },
  h1: {
    fontSize: "clamp(32px, 5vw, 64px)",
    fontWeight: 900,
    color: "#fff",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
    margin: "4px 0 32px",
  },
  h1Dim: {
    color: "rgba(255,255,255,.22)",
    fontStyle: "italic",
  },
  sub: {
    fontSize: 16,
    color: "rgba(255,255,255,.5)",
    lineHeight: 1.75,
    maxWidth: 480,
    marginBottom: 44,
  },
  btns: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#6c63ff",
    color: "#fff",
    padding: "14px 32px",
    borderRadius: 100,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
    letterSpacing: "0.02em",
    boxShadow: "0 0 40px rgba(108,99,255,.45)",
    transition: "all .25s",
    display: "inline-block",
  },
  btnGhost: {
    color: "rgba(255,255,255,.6)",
    fontSize: 14,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 8,
    letterSpacing: "0.02em",
    transition: "color .2s",
  },
  arrowCircle: {
    width: 30,
    height: 30,
    border: "1px solid rgba(255,255,255,.25)",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    transition: "all .2s",
  },
  statsRow: {
    display: "flex",
    gap: 40,
    marginTop: 56,
    paddingTop: 40,
    borderTop: "1px solid rgba(255,255,255,.08)",
  },
  statNum: {
    fontSize: 26,
    fontWeight: 900,
    color: "#fff",
    letterSpacing: "-0.03em",
    lineHeight: 1,
  },
  statAccent: { color: "#6c63ff", fontSize: 16 },
  statLabel: {
    fontSize: 10,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,.3)",
    marginTop: 4,
  },
  /* Right visual */
  right: {
    position: "relative",
    zIndex: 5,
    flexShrink: 0,
    width: 360,
    height: 360,
  },
};

export function Hero() {
  const [visible, setVisible]     = useState(false);
  const [phrase, setPhrase]       = useState(0);
  const [exiting, setExiting]     = useState(false);
  const [glowPos, setGlowPos]     = useState({ x: -999, y: -999 });
  const heroRef                   = useRef(null);

  /* Fade-in on mount */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  /* Phrase rotator */
  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setPhrase(p => (p + 1) % PHRASES.length);
        setExiting(false);
      }, 500);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  /* Custom glow cursor */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const handle = e => setGlowPos({ x: e.clientX, y: e.clientY });
    el.addEventListener("mousemove", handle);
    return () => el.removeEventListener("mousemove", handle);
  }, []);

  /* Keyframe injection (runs once) */
  useEffect(() => {
    if (document.getElementById("tq-hero-kf")) return;
    const style = document.createElement("style");
    style.id = "tq-hero-kf";
    style.textContent = `
      @keyframes tq-pulse-dot {
        0%,100% { opacity:1; transform:scale(1); }
        50%      { opacity:.35; transform:scale(.65); }
      }
      @keyframes tq-spin-cw  { to { transform:rotate(360deg); } }
      @keyframes tq-spin-ccw { to { transform:rotate(-360deg); } }
      @keyframes tq-float {
        0%,100% { transform:translateY(0); }
        50%      { transform:translateY(-5px); }
      }
      @keyframes tq-pulse-icon {
        0%,100% { opacity:1; transform:scale(1); }
        50%      { opacity:.7; transform:scale(.9); }
      }
      @keyframes tq-rot-in {
        from { transform:translateY(110%); opacity:0; }
        to   { transform:translateY(0);    opacity:1; }
      }
      @keyframes tq-rot-out {
        from { transform:translateY(0);     opacity:1; }
        to   { transform:translateY(-110%); opacity:0; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  /* ── Render ── */
  return (
    <section id="home" ref={heroRef} style={S.section}>

      {/* Backgrounds */}
      <div style={S.hexBg} aria-hidden="true" />
      <div style={S.orb1}  aria-hidden="true" />
      <div style={S.orb2}  aria-hidden="true" />
      <div
        aria-hidden="true"
        style={{ ...S.cursorGlow, left: glowPos.x, top: glowPos.y }}
      />

      {/* ── LEFT CONTENT ── */}
      <div
        style={{
          ...S.left,
          opacity:   visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(36px)",
          transition: "opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1)",
        }}
      >
        {/* Badge */}
        <div style={S.badge}>
          <span style={S.badgeDot} aria-hidden="true" />
          Next-Gen IT Solutions
        </div>

        {/* Rotating headline */}
        <div style={S.rotatorRow} aria-live="polite">
          <span style={S.weText}>We</span>
          <div style={S.rotatorWrap}>
            <span
              key={phrase}
              style={{
                display: "block",
                background: "linear-gradient(135deg,#6c63ff,#00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: exiting
                  ? "tq-rot-out .45s cubic-bezier(.4,0,1,1) forwards"
                  : "tq-rot-in  .55s cubic-bezier(.16,1,.3,1) forwards",
              }}
            >
              {PHRASES[phrase]}
            </span>
          </div>
        </div>

        {/* Static headline */}
        <h1 style={S.h1}>
          <span style={S.h1Dim}>for the</span> Digital<br />
          Backbone <span style={S.h1Dim}>of Tomorrow.</span>
        </h1>

        {/* Sub */}
        <p style={S.sub}>
          Cloud infrastructure, cybersecurity, and enterprise software —
          delivered with precision by Teqto's elite engineers.
        </p>

        {/* CTAs */}
        <div style={S.btns}>
          <a
            href="#services"
            style={S.btnPrimary}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 0 60px rgba(108,99,255,.65)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(108,99,255,.45)";
            }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            style={S.btnGhost}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.querySelector(".tq-arrow").style.transform = "translateX(4px)";
              e.currentTarget.querySelector(".tq-arrow").style.borderColor = "rgba(255,255,255,.7)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "rgba(255,255,255,.6)";
              e.currentTarget.querySelector(".tq-arrow").style.transform = "translateX(0)";
              e.currentTarget.querySelector(".tq-arrow").style.borderColor = "rgba(255,255,255,.25)";
            }}
          >
            Talk to Us
            <span className="tq-arrow" style={{ ...S.arrowCircle, transition: "all .2s" }}>→</span>
          </a>
        </div>

      </div>

      {/* ── RIGHT VISUAL ── */}
      <div
        style={{
          ...S.right,
          opacity:    visible ? 1 : 0,
          transition: "opacity 1.2s .4s",
        }}
        aria-hidden="true"
      >
        {/* SVG orbits + centre */}
        <svg
          viewBox="0 0 360 360"
          width="360"
          height="360"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="tq-rg" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#6c63ff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#060612" stopOpacity="0"    />
            </radialGradient>
          </defs>

          {/* Ambient glow */}
          <circle cx="180" cy="180" r="160" fill="url(#tq-rg)" />

          {/* Outer orbit ring */}
          <circle
            cx="180" cy="180" r="126"
            fill="none" stroke="#6c63ff44" strokeWidth="1.5" strokeDasharray="7 7"
          >
            <animateTransform attributeName="transform" type="rotate"
              from="0 180 180" to="360 180 180" dur="26s" repeatCount="indefinite" />
          </circle>

          {/* Inner orbit ring */}
          <circle
            cx="180" cy="180" r="82"
            fill="none" stroke="#00d4ff44" strokeWidth="1.5" strokeDasharray="4 9"
          >
            <animateTransform attributeName="transform" type="rotate"
              from="360 180 180" to="0 180 180" dur="18s" repeatCount="indefinite" />
          </circle>

          {/* Centre badge */}
          <circle cx="180" cy="180" r="44"
            fill="rgba(108,99,255,.18)" stroke="#6c63ff" strokeWidth="2" />
          <text x="180" y="192"
            textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff">
            TQ
          </text>
        </svg>

        {/* Outer spinning ring of icons */}
        <div style={{
          position: "absolute", inset: 0,
          animation: "tq-spin-cw 26s linear infinite",
        }}>
          {outerIcons.map(({ icon, label }, i) => {
            const angle  = (360 / outerIcons.length) * i;
            const rad    = 126;
            const left   = 180 + rad * Math.cos((angle * Math.PI) / 180) - 18;
            const top    = 180 + rad * Math.sin((angle * Math.PI) / 180) - 18;
            return (
              <div key={label} title={label} style={{
                position: "absolute", left, top,
                width: 36, height: 36,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 26,
                animation: "tq-float 3.2s ease-in-out infinite",
                animationDelay: `${i * 0.4}s`,
              }}>
                {icon}
              </div>
            );
          })}
        </div>

        {/* Inner counter-spinning ring */}
        <div style={{
          position: "absolute", inset: 0,
          animation: "tq-spin-ccw 18s linear infinite",
        }}>
          {innerIcons.map(({ icon, label }, i) => {
            const angle = 45 + (360 / innerIcons.length) * i;
            const rad   = 82;
            const left  = 180 + rad * Math.cos((angle * Math.PI) / 180) - 14;
            const top   = 180 + rad * Math.sin((angle * Math.PI) / 180) - 14;
            return (
              <div key={label} title={label} style={{
                position: "absolute", left, top,
                width: 28, height: 28,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20,
                animation: "tq-pulse-icon 2.4s ease-in-out infinite",
                animationDelay: `${i * 0.5}s`,
              }}>
                {icon}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}