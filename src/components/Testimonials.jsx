import { useState, useEffect } from "react";
import { testimonials } from "../data/testimonials";
import { SectionHeader } from "./SectionHeader";
import { styles } from "../styles/styles";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];
  return (
    <section style={styles.section}>
      <SectionHeader eyebrow="Client Voices" title="What They Say" />
      <div style={styles.testimonialWrap}>
        <div key={active} style={styles.testimonialCard}>
          <p style={styles.testimonialQuote}>"{t.quote}"</p>
          <p style={styles.testimonialAuthor}>{t.author}</p>
          <p style={styles.testimonialCompany}>{t.company}</p>
        </div>
        <div style={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              style={{ ...styles.dot, background: i === active ? "#6c63ff" : "#ffffff33" }}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
