import React from 'react';


const AboutSection = () => (
<section
        id="about"
        className="about container"
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
          Senior UI/UX Designer & Accessibility Frontend Developer - Inclusive
          Design • WCAG 2.1 AA/AAA
        </p>
        <p className="lead">
          Delhi, India • +91 9266306689 • 
          <a href="mailto:kamalpandey.dev@gmail.com"
            >kamalpandey.dev@gmail.com</a
          > • 
          <a
                href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
                target="_blank"
                rel="noopener"
                >LinkedIn</a
              > • 
          <a href="https://kamalpandey.dev" target="_blank" rel="noopener"
                >Portfolio</a
              >

        </p>
      </section>
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

            
          </div>
        </div>
      </section>
);

export default AboutSection;
