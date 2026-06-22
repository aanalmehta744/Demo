import { useState, useEffect } from "react";
import { styles } from "../styles/styles";
import "../styles/animation.css";

import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaAngular,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

const outerIcons = [
  <FaReact color="#61DAFB" />,
  <FaNodeJs color="#68A063" />,
  <FaAngular color="#DD0031" />,
  <SiMongodb color="#47A248" />,
  <FaFigma color="#F24E1E" />,
  <FaAws color="#FF9900" />,
];

const innerIcons = [
  <SiNextdotjs color="#FFFFFF" />,
  <FaDocker color="#2496ED" />,
  <SiTypescript color="#3178C6" />,
  <SiFirebase color="#FFCA28" />,
];

export function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.gridBg} aria-hidden="true" />
      <div style={styles.glowBlob1} aria-hidden="true" />
      <div style={styles.glowBlob2} aria-hidden="true" />
      <div style={{ ...styles.heroContent, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: "all 0.9s cubic-bezier(.16,1,.3,1)" }}>
        <div style={styles.heroBadge}>🚀 Next-Gen IT Solutions</div>
        <h1 style={styles.heroH1}>
          We Build the<br />
          <span style={styles.heroAccent}>Digital Backbone</span><br />
          of Tomorrow
        </h1>
        <p style={styles.heroSub}>
          Cloud infrastructure, cybersecurity, and enterprise software — delivered with precision by Teqto's elite engineers.
        </p>
        <div style={styles.heroBtns}>
          <a href="#services" style={styles.btnPrimary}>Explore Services</a>
          <a href="#contact" style={styles.btnGhost}>Talk to Us →</a>
        </div>
      </div>
   <div
  style={{
    ...styles.heroVisual,
    opacity: visible ? 1 : 0,
    transition: "opacity 1.2s 0.4s",
    position: "relative",
    width: "340px",
    height: "340px",
  }}
>
  <svg
    viewBox="0 0 340 340"
    width="340"
    height="340"
    style={{
      position: "absolute",
      inset: 0,
      filter: "drop-shadow(0 0 40px #6c63ff88)",
    }}
  >
    <defs>
      <radialGradient id="rg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6c63ff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#0a0f2e" stopOpacity="0" />
      </radialGradient>
    </defs>

    <circle cx="170" cy="170" r="155" fill="url(#rg)" />

    <circle
      cx="170"
      cy="170"
      r="120"
      fill="none"
      stroke="#6c63ff55"
      strokeWidth="1.5"
      strokeDasharray="8 8"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 170 170"
        to="360 170 170"
        dur="25s"
        repeatCount="indefinite"
      />
    </circle>

    <circle
      cx="170"
      cy="170"
      r="80"
      fill="none"
      stroke="#00d4ff55"
      strokeWidth="1.5"
      strokeDasharray="5 10"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="360 170 170"
        to="0 170 170"
        dur="18s"
        repeatCount="indefinite"
      />
    </circle>

    <circle
      cx="170"
      cy="170"
      r="42"
      fill="rgba(108,99,255,.15)"
      stroke="#6c63ff"
      strokeWidth="2"
    />

    <text
      x="170"
      y="182"
      textAnchor="middle"
      fontSize="28"
      fontWeight="700"
      fill="#fff"
    >
      TQ
    </text>
  </svg>

  {/* OUTER RING */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      animation: "spinClockwise 25s linear infinite",
    }}
  >
    {outerIcons.map((icon, i) => {
      const angle = (360 / outerIcons.length) * i;
      const radius = 120;

      const x =
        170 + radius * Math.cos((angle * Math.PI) / 180) - 18;
      const y =
        170 + radius * Math.sin((angle * Math.PI) / 180) - 18;

      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            animation: `float 3s ease-in-out infinite`,
          }}
        >
          {icon}
        </div>
      );
    })}
  </div>

  {/* INNER RING */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      animation: "spinCounter 18s linear infinite",
    }}
  >
    {innerIcons.map((icon, i) => {
      const angle = 45 + (360 / innerIcons.length) * i;
      const radius = 80;

      const x =
        170 + radius * Math.cos((angle * Math.PI) / 180) - 15;
      const y =
        170 + radius * Math.sin((angle * Math.PI) / 180) - 15;

      return (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            animation: `pulse 2s ease-in-out infinite`,
          }}
        >
          {icon}
        </div>
      );
    })}
  </div>
</div>
    </section>
  );
}
