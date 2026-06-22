# Teqto Website

Split into one file per component, plus shared hooks, data, and styles.

```
src/
├── main.jsx                # Vite entry point
├── App.jsx                 # Composes all sections
├── index.css               # Resets, keyframes, mobile menu, hover states
├── components/
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionHeader.jsx
│   ├── Services.jsx        # includes ServiceCard
│   ├── About.jsx
│   ├── Stats.jsx           # includes StatCard
│   ├── Team.jsx            # includes TeamCard
│   ├── Testimonials.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   ├── useCountUp.js
│   └── useInView.js
├── data/
│   ├── services.js
│   ├── stats.js
│   ├── team.js
│   └── testimonials.js
└── styles/
    └── styles.js            # all inline-style objects, including glass tokens
```

## Run it

```bash
npm install
npm run dev
```

## Glass effect

Added a frosted-glass (glassmorphism) treatment to the surfaces that float
above the animated grid/blob background: the navbar once you scroll, the
hero badge, service cards, stat cards, team cards, the testimonial card,
the contact form card, and the small pill tags. Each uses:

- a translucent background (`rgba(...)` instead of a solid hex)
- `backdrop-filter: blur(...) saturate(...)` (with the `-webkit-` prefix for Safari)
- a faint `1px` border for the glass "edge"
- an inset highlight + soft drop shadow for depth

These all live in `src/styles/styles.js` under the `glassPanel` / `glassPill`
tokens at the top of the file, so you can tune blur radius, opacity, or
saturation in one place and it cascades everywhere. Buttons that need strong
contrast (the primary CTA) were left solid on purpose — glass everywhere
gets muddy and hurts legibility.
