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
              Senior UI/UX Designer — Design Systems & Web Accessibility
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
              <a href="https://kamal-pandey-portfolio.vercel.app/" target="_blank" rel="noopener">
                Portfolio
              </a>
            </p>
          </section>
          <p>
            <strong>Professional Summary</strong>
            <br />
            Senior UI/UX Designer with 14+ years experience building inclusive, high-impact digital products for B2B and B2C clients. Expertise in Figma, Adobe XD and Adobe Creative Suite (Photoshop, Illustrator) to create and scale Design Systems, high-fidelity prototypes, and accessible interfaces. Proven track record in driving WCAG 2.1 AA/AAA compliance, leading cross-functional teams, and delivering measurable UX improvements (task completion, engagement, Core Web Vitals). Strong collaborator in Agile/Scrum environments with hands-on front-end knowledge (HTML/CSS/JavaScript) to bridge design and engineering for pixel perfect, accessible implementations.
          </p>
        </div>
      </div>
    </section>
    <section id="about"
      className="container"
      aria-labelledby="about-heading">
      <div className="about-text">
        <p>
          <strong>Highlights</strong>: Senior UI/UX Designer and Design Systems Lead with 14+ years of experience crafting intuitive, research-driven, and scalable digital experiences. Specialized in end-to-end product design including user research, information architecture, wireframing, prototyping, usability testing, and advanced Figma-based design systems (Auto Layout, Variants, Team Libraries). Proven track record of improving user engagement, optimizing task flows, and delivering measurable business impact through data-informed design decisions and cross-functional collaboration in Agile environments.
Web Accessibility specialist with hands-on expertise in WCAG 2.1 (A/AA/AAA) compliance, ARIA implementation, semantic structuring, and assistive technology testing using NVDA, JAWS, VoiceOver, Axe, WAVE, and Lighthouse. Successfully improved accessibility compliance from 32% to 98%, significantly reducing violations and enhancing inclusive user experiences.
Strong frontend implementation background supporting design-to-development alignment using React.js, JavaScript (ES6+), Redux, HTML5, CSS3/SCSS, and responsive component-based architecture. Experienced in performance optimization techniques such as code-splitting, lazy loading, image optimization, and Core Web Vitals improvements, along with modern tooling workflows (Git, npm/yarn, CI/CD) to ensure scalable, maintainable, and production-ready interfaces.
        </p>
      </div>
    </section>
  </>
);

export default AboutSection;
