// ── Shared style objects ────────────────────────────────────────────────────
// Glass tokens: a frosted-glass treatment is applied to the elements that sit
// "above" the page (nav on scroll, cards, badges, pills) so they read as
// floating panels over the animated grid/blob background instead of flat
// opaque boxes.
const glassPanel = {
  background: "rgba(18, 24, 56, 0.45)",
  backdropFilter: "blur(18px) saturate(160%)",
  WebkitBackdropFilter: "blur(18px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 30px rgba(0,0,0,0.35)",
};

const glassPill = {
  background: "rgba(108, 99, 255, 0.14)",
  backdropFilter: "blur(12px) saturate(180%)",
  WebkitBackdropFilter: "blur(12px) saturate(180%)",
  border: "1px solid rgba(167,139,250,0.35)",
};

export const styles = {
  app: { minHeight: "100vh", background: "#070a19" },

  // Loader
  loaderWrap: { position: "fixed", inset: 0, background: "#070a19", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 },
  loaderInner: { textAlign: "center", position: "relative" },
  loaderRing: { width: 72, height: 72, border: "3px solid #6c63ff33", borderTop: "3px solid #6c63ff", borderRadius: "50%", animation: "spin 0.9s linear infinite", margin: "0 auto 16px" },
  loaderLogo: { fontSize: 32, position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-68%)" },
  loaderText: { color: "#6c63ff", fontWeight: 700, letterSpacing: 4, fontSize: 13, textTransform: "uppercase" },

  // Nav — glass panel once scrolled (see scrolled prop in Navbar.jsx)
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, transition: "background 0.4s, backdrop-filter 0.4s, box-shadow 0.4s", padding: "0 24px" },
  navScrolled: { background: "rgba(7,10,25,0.55)", backdropFilter: "blur(18px) saturate(160%)", WebkitBackdropFilter: "blur(18px) saturate(160%)", boxShadow: "0 2px 24px #0006", borderBottom: "1px solid rgba(255,255,255,0.06)" },
  navTop: { background: "transparent", boxShadow: "none" },
  navInner: { maxWidth: 1200, margin: "0 auto", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" },
  logo: { display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 20, color: "#fff" },
  logoIcon: { fontSize: 22, color: "#6c63ff" },
  logoText: {},
  navLinks: {},
  navLink: { color: "#ccc", fontSize: 14, fontWeight: 500, transition: "color 0.2s" },
  navCta: { background: "#6c63ff", color: "#fff", padding: "8px 20px", borderRadius: 24, fontSize: 14, fontWeight: 600, transition: "opacity 0.2s" },
  burger: { display: "none", background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer", zIndex: 999 },

  // Hero
  hero: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "100px 48px 60px", maxWidth: 1200, margin: "0 auto", gap: 40, position: "relative", flexWrap: "wrap" },
  gridBg: { position: "fixed", inset: 0, backgroundImage: "linear-gradient(#6c63ff11 1px,transparent 1px),linear-gradient(90deg,#6c63ff11 1px,transparent 1px)", backgroundSize: "60px 60px", animation: "gridMove 8s linear infinite", zIndex: -1, pointerEvents: "none" },
  glowBlob1: { position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,#6c63ff22,transparent 70%)", top: "10%", left: "-10%", animation: "blob1 8s ease-in-out infinite", pointerEvents: "none" },
  glowBlob2: { position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,#00d4ff18,transparent 70%)", bottom: "5%", right: "-5%", animation: "blob2 10s ease-in-out infinite", pointerEvents: "none" },
  heroContent: { flex: "1 1 400px", maxWidth: 560 },
  heroBadge: { display: "inline-block", color: "#a78bfa", fontSize: 13, fontWeight: 600, padding: "6px 16px", borderRadius: 24, marginBottom: 24, ...glassPill },
  heroH1: { fontSize: "64px", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, color: "#fff" },
  heroAccent: { background: "linear-gradient(90deg,#6c63ff,#00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSub: { color: "#9ca3c0", fontSize: 17, lineHeight: 1.7, marginBottom: 32 },
  heroBtns: { display: "flex", gap: 16, flexWrap: "wrap" },
  heroVisual: { flex: "1 1 300px", display: "flex", justifyContent: "center", animation: "float 5s ease-in-out infinite" },

  // Buttons — ghost button gets a light glass treatment, primary stays solid for contrast
  btnPrimary: { display: "inline-block", background: "linear-gradient(135deg,#6c63ff,#5a52d5)", color: "#fff", padding: "14px 30px", borderRadius: 30, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", transition: "opacity 0.2s,transform 0.2s" },
  btnGhost: { display: "inline-block", background: "rgba(255,255,255,0.05)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", color: "#fff", padding: "14px 30px", borderRadius: 30, fontWeight: 600, fontSize: 15, border: "1px solid #ffffff33", transition: "border-color 0.2s,transform 0.2s" },

  // Sections
  section: { padding: "90px 24px", background: "#070a19" },
  sectionHeader: { textAlign: "center", marginBottom: 56 },
  eyebrow: { color: "#6c63ff", fontWeight: 700, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 },
  sectionH2: { fontSize: "48px", fontWeight: 800, color: "#fff", lineHeight: 1.15 },

  // Services — frosted glass cards over the grid background
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, maxWidth: 1160, margin: "0 auto" },
  serviceCard: { borderRadius: 16, padding: "32px 28px", cursor: "pointer", transition: "all 0.3s", ...glassPanel },
  serviceIcon: { fontSize: 36, display: "block", marginBottom: 16 },
  serviceTitle: { fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 },
  serviceDesc: { color: "#8892b0", fontSize: 14, lineHeight: 1.7 },
  serviceArrow: { display: "inline-block", color: "#6c63ff", fontWeight: 700, marginTop: 16, fontSize: 18 },

  // About
  aboutGrid: { display: "flex", gap: 64, alignItems: "center", maxWidth: 1100, margin: "0 auto", flexWrap: "wrap" },
  aboutLeft: { flex: "1 1 360px" },
  aboutRight: { flex: "1 1 320px" },
  bodyText: { color: "#8892b0", lineHeight: 1.8, marginBottom: 16, fontSize: 15 },
  aboutImg: { width: "100%", borderRadius: 20, border: "1px solid #ffffff11" },
  pills: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 },
  pill: { color: "#a78bfa", fontSize: 12, fontWeight: 600, padding: "6px 14px", borderRadius: 20, ...glassPill },

  // Stats — glass cards floating over the gradient band
  statsSection: { background: "linear-gradient(135deg,#0e0b2e,#0a1a2e)", padding: "90px 24px" },
  statsInner: { maxWidth: 1100, margin: "0 auto" },
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 32, maxWidth: 900, margin: "0 auto" },
  statCard: { textAlign: "center", padding: "32px 16px", borderRadius: 16, ...glassPanel },
  statNum: { display: "block", fontSize: "46px", fontWeight: 800, background: "linear-gradient(90deg,#6c63ff,#00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  statLabel: { color: "#8892b0", fontSize: 14, fontWeight: 500, marginTop: 6, display: "block" },

  // Team
  teamGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 24, maxWidth: 1060, margin: "0 auto" },
  teamCard: { borderRadius: 18, padding: "32px 24px", textAlign: "center", transition: "all 0.3s", cursor: "default", ...glassPanel },
  teamAvatar: { fontSize: 52, display: "block", marginBottom: 16, lineHeight: 1 },
  teamName: { color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 4 },
  teamRole: { color: "#6c63ff", fontSize: 13, fontWeight: 600, marginBottom: 16 },
  teamSkills: { display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" },
  teamSkill: { color: "#a78bfa", fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 20, ...glassPill },

  // Testimonials
  testimonialWrap: { maxWidth: 680, margin: "0 auto", textAlign: "center" },
  testimonialCard: { borderRadius: 20, padding: "40px 36px", animation: "pulse 0.4s ease", ...glassPanel },
  testimonialQuote: { color: "#d1d5db", fontSize: 17, lineHeight: 1.8, fontStyle: "italic", marginBottom: 24 },
  testimonialAuthor: { color: "#fff", fontWeight: 700, fontSize: 15 },
  testimonialCompany: { color: "#6c63ff", fontSize: 13, fontWeight: 600, marginTop: 4 },
  dots: { display: "flex", gap: 8, justifyContent: "center", marginTop: 24 },
  dot: { width: 10, height: 10, borderRadius: "50%", border: "none", cursor: "pointer", transition: "background 0.3s" },

  // Contact
  contactCard: { maxWidth: 600, margin: "0 auto", borderRadius: 20, padding: "48px 40px", ...glassPanel },
  contactForm: { display: "flex", flexDirection: "column", gap: 16 },
  input: { background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid #ffffff15", borderRadius: 10, padding: "14px 18px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit", transition: "border 0.2s" },
  sentMsg: { textAlign: "center", padding: "20px 0" },

  // Footer
  footer: { background: "#04060f", borderTop: "1px solid #ffffff0a", padding: "48px 24px 24px" },
  footerInner: { maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32, marginBottom: 32 },
  footerLinks: { display: "flex", gap: 24, flexWrap: "wrap" },
  footerLink: { color: "#666", fontSize: 13, transition: "color 0.2s" },
  footerCopy: { textAlign: "center", color: "#444", fontSize: 12 },



  
};




