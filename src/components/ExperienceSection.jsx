import React from 'react';


const ExperienceSection = () => (
<section
        id="experience"
        className="experience container"
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading">Professional Experience</h2>

        <div className="job">
          <h3>
            Senior UI/UX Designer & Frontend Developer — Happiest Minds
            Technologies
          </h3>
          <p className="job-meta">Noida, India — Feb 2021 – Feb 2025</p>
          <ul>
            <li>
              Delivered WCAG 2.1 AA/AAA compliant products across multiple
              enterprise clients, reaching 98% accessibility on audited
              deliverables.
            </li>
            <li>
              Conducted accessibility audits with Axe, WAVE and Lighthouse,
              reduced accessibility violations by 85% through remediation.
            </li>
            <li>
              Improved Core Web Vitals and performance, achieving 95+ Lighthouse
              performance scores.
            </li>
            <li>
              Led accessibility training, mentored junior developers, and
              documented accessibility patterns.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Frontend Engineer — Syncrasy Technologies</h3>
          <p className="job-meta">Noida, India — Jan 2019 – Jan 2021</p>
          <ul>
            <li>
              Built 30+ accessible interfaces with React.js and SCSS, achieved
              94+ Lighthouse accessibility scores.
            </li>
            <li>
              Optimized performance with code-splitting and lazy loading,
              reducing page load times by ~40%.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Senior Web Designer — Dabur India Ltd (via Accenture)</h3>
          <p className="job-meta">Ghaziabad, India — Nov 2013 – Aug 2018</p>
          <ul>
            <li>
              Designed and maintained high-traffic brand websites, improving
              accessibility compliance to ~92%.
            </li>
            <li>
              Implemented performance and accessibility improvements that
              reduced bounce rate and increased conversions.
            </li>
          </ul>
        </div>

        <div className="job">
          <h3>Earlier Roles</h3>
          <p className="job-meta">Various — 2007 – 2013</p>
          <ul>
            <li>
              Front-end and e-learning development roles at Infopro India,
              Moretimer, and freelance engagements.
            </li>
          </ul>
        </div>
      </section>
);

export default ExperienceSection;
