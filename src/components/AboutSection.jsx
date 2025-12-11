import React from 'react';


const AboutSection = () => (
<section
        id="about"
        className="about container"
        aria-labelledby="about-heading"
      >
        <h2 id="about-heading">About Me</h2>
        <div className="about-grid">
          <img
            className="portrait"
            src="/assets/portfolioPic.png"
            alt="Portrait of Kamal Pandey"
          />
          <div className="about-text">
            <p>
              <strong>Professional Summary</strong><br />
              Senior UI/UX Designer & Frontend Developer with 14+ years of
              experience in user-centered design, WCAG accessibility compliance,
              and cross-functional leadership. I specialise in accessibility
              audits, design systems, and building performant, inclusive
              interfaces that improve engagement and reduce support tickets.
            </p>

            <p>
              <strong>Highlights</strong>: Led accessibility remediation across
              8 product lines, improved accessibility scores from ~35% to 94%
              and performance to 95+ Lighthouse scores, reduced accessibility
              violations by 85% and improved task completion by 28%.
            </p>

            <p>
              <strong>Links</strong>:
              <a href="https://kamalpandey.dev" target="_blank" rel="noopener"
                >Portfolio</a
              >
              •
              <a
                href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
                target="_blank"
                rel="noopener"
                >LinkedIn</a
              >
            </p>
          </div>
        </div>
      </section>
);

export default AboutSection;
