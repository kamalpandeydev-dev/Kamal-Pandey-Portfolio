import React from "react";

const AboutSection = () => (
  <>
    <section
      id="about"
      className="container"
      aria-labelledby="about-heading"
    >
      <div className="about-grid">
        <img
          className="portrait"
          src="/assets/portfolioPic.png"
          alt="Portrait of Kamal Pandey"
        />
        <div className="about-text">
          <section id="home" aria-labelledby="hero-heading">
            <p className="lead">
              Senior Frontend Engineer – React | Next.js | Web Accessibility •
              WCAG 2.1 AA/AAA
            </p>
            <p className="lead">
              Delhi, India • +91 9266306689 •
              <a href="mailto:kamalpandey.dev@gmail.com">
                kamalpandey.dev@gmail.com
              </a>{" "}
              •
              <a
                href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>{" "}
              •
              <a href="https://kamalpandey.dev" target="_blank" rel="noopener">
                Portfolio
              </a>
            </p>
          </section>
          <p>
            <strong>Professional Summary</strong>
            <br />
            Senior Frontend Engineer with 14+ years delivering high-performance,
            accessible, and scalable web applications. Expert in modern React
            (Hooks, Context API), state management (Redux), Next.js, ES6+
            JavaScript, semantic HTML5, advanced CSS (SASS, CSS-in-JS), and
            major UI frameworks (Tailwind CSS, Bootstrap, Material UI). Proven
            track record improving accessibility (WCAG 2.1 AA/AAA), Lighthouse
            scores (95+), and Core Web Vitals while reducing accessibility
            violations by 85% and increasing user engagement by 32%.
          </p>
        </div>
      </div>
    </section>
    <section id="about"
      className="container"
      aria-labelledby="about-heading">
      <div className="about-text">
        <p>
          <strong>Highlights</strong>: Frontend Developer specializing in
          building modern, high-performance web applications with React (Hooks,
          Suspense, concurrent patterns) and Next.js, using JavaScript (ES6+)
          and working knowledge of TypeScript. Experienced in scalable state and
          data management with Redux Toolkit, Context API, and React Query.
          Skilled in crafting responsive, maintainable user interfaces using
          Semantic HTML5, CSS3, SASS/SCSS, Tailwind CSS, Bootstrap (latest),
          Material UI (v5+), and CSS-in-JS solutions such as Styled-Components
          and Emotion. Proficient with modern frontend tooling including npm,
          Webpack, Vite, ESBuild, and Babel. Strong advocate for accessibility,
          implementing WCAG 2.1 (A/AA/AAA) and ARIA best practices with hands-on
          testing using keyboard navigation and screen readers like NVDA, JAWS,
          and VoiceOver. Focused on performance optimization through
          code-splitting, lazy loading, image optimization, and continuous
          improvement of Lighthouse and Core Web Vitals scores. Ensures code
          quality with Jest, React Testing Library, Cypress (E2E), CI/CD
          pipelines via GitHub Actions, and contributes effectively in
          collaborative environments using Figma handoff, Storybook-driven
          development, Agile/Scrum practices, and Git-based workflows
          (GitHub/GitLab).
        </p>
      </div>
    </section>
  </>
);

export default AboutSection;
