import { useState, useEffect } from "react";
import "./index.css";

import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { styles } from "./styles/styles";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <div style={styles.app}>
      <Loader done={loaded} />
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Stats />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
