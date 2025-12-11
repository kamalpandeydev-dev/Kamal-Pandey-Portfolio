# Kamal Pandey — Portfolio (React)

This project is a ReactJS conversion of the original static `porfolioJS` site.

It uses:

- [Vite](https://vitejs.dev/) for bundling and dev server
- React 18 functional components
- React Router for client-side routing
- The original CSS, slightly adjusted, for styling
- Public assets for images and logos

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build:

   ```bash
   npm run preview
   ```

## Project structure

```text
.
├── index.html          # Vite entry HTML
├── package.json
├── vite.config.js
├── public
│   └── assets/         # Static images copied from the original project
└── src
    ├── main.jsx        # React entry point
    ├── App.jsx         # Top-level layout + routing
    ├── styles.css      # Global styles (from the original project)
    └── components
        ├── Header.jsx
        ├── HeroSection.jsx
        ├── ClientsSection.jsx
        ├── B2BProjectsSection.jsx
        ├── B2CProjectsSection.jsx
        ├── AboutSection.jsx
        ├── SkillsSection.jsx
        ├── ExperienceSection.jsx
        ├── EducationSection.jsx
        ├── ContactSection.jsx
        └── Footer.jsx
```

## Notes

- Navigation links in the header still scroll to the corresponding sections using hash links (e.g. `#projects`, `#about`).
- `handleIconClick` in the project sections now uses a React-friendly `onClick` handler which opens client websites in a new tab with `noopener,noreferrer` for security.
- The CSS is kept as a single file to preserve the original visual design. If you want stricter style scoping, you can progressively migrate these rules into CSS Modules or styled-components.
