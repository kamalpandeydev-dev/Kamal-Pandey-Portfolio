import React from "react";

const ExperienceSection = () => (
  <section
    id="experience"
    className="experience container"
    aria-labelledby="experience-heading"
  >
    <h2 className="projects-heading">Professional Experience</h2>
<div className="job">
      <h3>
        Freelance UI/UX Designer & Frontend Developer For Sookti AI | Crazyeggz | Pratual Solar Power| 
      </h3>
      <p className="job-meta">Delhi/NCR, India | May 2025 – Present</p>
      <ul>
        <li>
          Designed and developed accessible UI interfaces using React.js and SCSS, Figma Design System with accessibility.
        </li>
        <li>
          https://sookti.ai/ | https://crazyeggz.in/about-us/ | https://www.pratualsolar.com/about
        </li>
      </ul>
    </div>
    <div className="job">
      <h3>
        Senior UI/UX Designer & Frontend Developer — Happiest Minds Technologies
      </h3>
      <p className="job-meta">Noida, India — Feb 2021 – Feb 2025</p>
      <ul>
        <li>
          Led frontend engineering and accessibility efforts for enterprise
          B2B/B2C products using React, Redux, Next.js, Material UI, and SCSS.
        </li>
        <li>
          Architected and implemented server-side rendering and
          static-generation strategies (Next.js) to improve initial load times
          and SEO; implemented ISR for time-sensitive content.
        </li>
        <li>
          Performed comprehensive accessibility audits (Axe DevTools, WAVE,
          Lighthouse) and executed remediation plans that reduced WCAG
          violations by 85% and raised accessibility scores from 32% to 98%.
        </li>
        <li>
          Developed a modular component library (Storybook) with ARIA patterns,
          keyboard navigation, and automated accessibility tests — decreased
          regression bugs by 40%.
        </li>
        <li>
          Mentored front-end engineers on React Hooks, Context API, state
          management best practices (Redux/Zustand), and accessibility-first CSS
          patterns.
        </li>
        <li>
          Delivered feature work and performance upgrades that increased user
          engagement by 32% and improved Core Web Vitals metrics by 42%.
        </li>
      </ul>
    </div>

    <div className="job">
      <h3>Frontend Engineer — Syncrasy Technologies</h3>
      <p className="job-meta">Noida, India — Jan 2019 – Jan 2021</p>
      <ul>
        <li>
          Implemented accessible React interfaces with Redux and SCSS;
          introduced lazy-loading, route-based code splitting, and image
          optimization to reduce load times by 40%.
        </li>
        <li>
          Standardized UI patterns using a Figma-linked design system and
          Tailwind utilities — improved front-end delivery speed and
          consistency.
        </li>
        <li>
          Integrated CI/CD pipelines and automated Lighthouse checks to enforce
          performance and accessibility gates before production merges.
        </li>
      </ul>
    </div>

    <div className="job">
      <h3>Senior Web Designer — Dabur India Ltd (via Accenture)</h3>
      <p className="job-meta">Ghaziabad, India — Nov 2013 – Aug 2018</p>
      <ul>
        <li>
          Built enterprise-grade responsive websites (HTML5, CSS3, JavaScript)
          and SharePoint solutions, achieving 92% accessibility compliance and
          85+ Lighthouse scores.
        </li>
        <li>
          Optimized large-scale sites (50M+ monthly visits across properties)
          with performance tuning and accessibility improvements that lowered
          bounce rates by 19% and increased conversions by 14%.
        </li>
      </ul>
    </div>

    <div className="job">
      <h3>Earlier Roles</h3>
      <h3>
        Frontend &amp; E-Learning Developer — Infopro India, Moretimer Pvt Ltd,
        Freelance (2007–2013)
      </h3>

      <ul>
        <li>
          Worked across multiple roles including E-Learning Product Developer
          (Infopro India), Web Developer (Moretimer Pvt Ltd), and Freelance Web
          &amp; Graphic Designer. Built interactive e-learning modules using
          Knet LCMS, Exact Packager, Adobe Captivate, Articulate 360 (Storyline,
          Rise), LMS and SCORM standards, while also developing responsive
          websites using HTML, CSS, JavaScript, and multimedia tools such as
          Adobe Acrobat, Sound Forge, SIM Builder, and Director.
        </li>
      </ul>
    </div>
  </section>
);

export default ExperienceSection;
