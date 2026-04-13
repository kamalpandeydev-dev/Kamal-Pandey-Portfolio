# Kamal Pandey — Lead UX Designer Portfolio

A production-ready, WCAG 2.2 Level AA compliant portfolio website built with React.js.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# Clone or unzip the project
cd kamal-portfolio

# Install dependencies
npm install

# Start development server
npm start
# → Opens http://localhost:3000
```

### Build for Production

```bash
npm run build
# Output in /build folder — ready to deploy
```

---

## 📁 Project Structure

```
kamal-portfolio/
├── public/
│   └── index.html          # HTML shell with SEO meta tags
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Work.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   └── Footer.jsx / .css
│   ├── styles/
│   │   ├── global.css      # Design tokens + base reset
│   │   └── animations.css  # Scroll-triggered animations
│   ├── App.jsx             # Root layout + scroll animation logic
│   └── index.js            # React entry point
└── package.json
```

---

## 🌐 Deployment

### GitHub Pages

```bash
# 1. Add homepage to package.json
#    "homepage": "https://yourusername.github.io/kamal-portfolio"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add deploy scripts to package.json
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d build"

# 4. Deploy
npm run deploy
```

### Vercel (Recommended — zero config)

```bash
npm install -g vercel
vercel
```

### Netlify

Drag and drop the `/build` folder to https://app.netlify.com/drop

---

## ♿ Accessibility Features (WCAG 2.2 Level AA)

- **Skip navigation link** visible on keyboard focus (WCAG 2.4.1)
- **Semantic HTML** — `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>`, `<aside>`, `<time>`
- **ARIA labels** on all interactive elements and icon-only buttons
- **Focus-visible** outlines with 3px gold outline offset (WCAG 2.4.11)
- **Color contrast** — all text meets 4.5:1 ratio minimum (WCAG 1.4.3)
- **Keyboard navigation** — full tab order, no keyboard traps
- **Screen reader compatible** — `aria-hidden` on decorative SVGs, `aria-label` on links
- **Live regions** — `role="status"` and `aria-live` on availability badge
- **`role="progressbar"`** with `aria-valuenow/min/max` on skill bars
- **Reduced motion** — respects `prefers-reduced-motion` via CSS

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080808` |
| Surface | `#1a1a1a` |
| Gold accent | `#c9a84c` |
| Text | `#f0ece4` |
| Display font | Playfair Display |
| Body font | DM Sans |
| Mono font | DM Mono |

---

## 🔑 SEO Keywords Integrated

`Product Design` · `Design Systems` · `Figma Prototyping` · `User Research` · `A/B Testing` · `Accessibility Compliance` · `WCAG 2.2` · `DesignOps` · `Design Tokens` · `Information Architecture` · `Usability Testing` · `React.js` · `ARIA` · `Core Web Vitals` · `Lighthouse` · `Frontend Development`

---

## 📄 License

Personal portfolio — all rights reserved. © 2025 Kamal Pandey.
