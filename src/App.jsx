import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

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

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2500);

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!loaded) return <Loader />;

  return (
    <div className="app">
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