import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="section-inner">
        <div className="section-label" aria-hidden="true">01 / About</div>
        <div className="about__grid">
          {/* Text column */}
          <div className="about__content">
            <h2 id="about-heading" className="about__heading">
              I architect digital experiences that{' '}
              <em>perform</em>, <em>include</em>, and <em>convert</em>.
            </h2>

            <p className="about__lead">
              With 14+ years at the intersection of UX design, accessibility
              engineering, and front-end development, I bring a rare combination
              of creative direction and technical execution — trusted by
              Accenture, Dabur India, Oracle, and Happiest Minds Technologies.
            </p>

            <p className="about__body">
              At Happiest Minds Technologies, I led the UX transformation of
              enterprise and consumer products — lifting WCAG compliance from
              32% to 98%, improving Core Web Vitals by 42%, and driving a 28%
              increase in task completion rates. I've shipped products reaching
              50M+ monthly users and mentored design teams of six.
            </p>

            <p className="about__body">
              My practice blends <strong>Design Ops workflows</strong>,{' '}
              <strong>Figma Design System</strong> architecture, and{' '}
              <strong>ARIA-first front-end development</strong> — turning complex
              business requirements into elegant, human-centered solutions.
            </p>

            <div className="about__affiliations">
              <span className="about__affil-label" id="affil-label">
                Professional Affiliations:
              </span>
              <ul
                className="about__affil-list"
                aria-labelledby="affil-label"
              >
                <li>IAAP — Accessibility Professionals</li>
                <li>IxDA — Interaction Design Association</li>
                <li>UXPA — User Experience Professionals</li>
              </ul>
            </div>
          </div>

          {/* Credentials column */}
          <aside className="about__aside" aria-label="Credentials and highlights">
            {/* Certifications */}
            <div className="about__card" aria-labelledby="cert-heading">
              <h3 id="cert-heading" className="about__card-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                Certifications &amp; Professional Training
              </h3>
              <ul className="about__cert-list">
                <li>
                  <strong>WAS</strong> — Web Accessibility Specialist
                  <span>Advanced Level</span>
                </li>
                <li>
                  <strong>WCAG 2.1</strong> — Accessibility Compliance
                  <span>Advanced Level</span>
                </li>
                <li>
                  <strong>Web Design and Multimedia</strong>
                  <span>Certified</span>
                </li>
              </ul>
            </div>

            {/* Key metrics */}
            <div className="about__metrics" aria-labelledby="metrics-heading">
              <h3 id="metrics-heading" className="about__card-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
                Impact Numbers
              </h3>
              <dl className="about__metrics-grid">
                {[
                  { num: '85%', label: 'Reduction in accessibility violations' },
                  { num: '42%', label: 'Core Web Vitals improvement' },
                  { num: '35%', label: 'Faster design review cycles' },
                  { num: '67%', label: 'Drop in accessibility support tickets' },
                ].map(({ num, label }) => (
                  <div key={label} className="about__metric-item">
                    <dt className="about__metric-label">{label}</dt>
                    <dd
                      className="about__metric-num"
                      aria-label={`${num} — ${label}`}
                    >
                      {num}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Education */}
            <div className="about__card" aria-labelledby="edu-heading">
              <h3 id="edu-heading" className="about__card-title">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Education
              </h3>
              <ul className="about__edu-list">
                <li>
                  <strong>BCA</strong>
                  <span>Indira Gandhi National Open University</span>
                </li>
                <li>
                  <strong>Diploma — Multimedia &amp; Web Design</strong>
                  <span>Oxford Computer Software Ltd, 2006–2007</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
