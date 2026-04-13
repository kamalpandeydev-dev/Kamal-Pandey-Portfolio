import React from 'react';
import './Experience.css';

const experiences = [
  {
    role: 'Freelance Lead UI/UX Designer & Frontend Developer',
    company: 'Self-Employed',
    location: 'Delhi/NCR, India',
    period: 'May 2025 – Present',
    current: true,
    description: 'Architecting accessible UI systems for clients including Sookti AI, Crazyeggz, Pratual Solar Power, and Bharat Rover using React.js, SCSS, and Figma Design Systems with full WCAG 2.1 AA compliance and accessibility token integration.',
    highlights: [
      'Full WCAG 2.1 AA compliance with accessibility token integration',
      'React.js + SCSS component architecture',
      'Figma Design System authoring for each client',
      '4 active client engagements',
    ],
    tags: ['Freelance', 'React.js', 'WCAG', 'Figma'],
  },
  {
    role: 'Senior UI/UX Designer & Frontend Developer',
    company: 'Happiest Minds Technologies',
    location: 'Noida, India',
    period: 'Feb 2021 – Feb 2025',
    current: false,
    description: 'Spearheaded end-to-end UX strategy for 3+ enterprise digital products. Championed accessibility-first initiatives, established scalable Figma Design Systems, and mentored a team of 6 designers and developers.',
    highlights: [
      'Lifted WCAG compliance from 32% → 98% across all product lines',
      'Reduced accessibility violations by 85%; achieved 95+ Lighthouse scores',
      'Established DesignOps workflows — 35% faster design review cycles',
      'Task completion +28%, engagement +32%, support tickets -67%',
      'Awards: Chairman Teams Award (PepsiCo 2022), UI Star of the Quarter (2021)',
    ],
    tags: ['Enterprise UX', 'Design Systems', 'DesignOps', 'Accessibility', 'Mentoring'],
    awards: ['Chairman Teams Award — PepsiCo 2022', 'UI Star of the Quarter 2021', 'UI Problem Solver Insta Award 2025'],
  },
  {
    role: 'Frontend Engineer',
    company: 'Syncrasy Technologies',
    location: 'Noida, India',
    period: 'Jan 2019 – Jan 2021',
    current: false,
    description: 'Built 30+ accessible UI components with React.js, Redux, and SCSS. Created a Figma Design System library with WCAG 2.1 AA tokens. Ran moderated usability tests to validate interaction design before each release.',
    highlights: [
      '30+ accessible UI components; 94+ Lighthouse accessibility score',
      '40% reduction in page load times via code-splitting and lazy loading',
      '32% faster design-to-development via standardized UI patterns',
      'A/B testing and usability sessions integrated into release planning',
    ],
    tags: ['React.js', 'Redux', 'Figma', 'Usability Testing', 'A/B Testing'],
  },
  {
    role: 'Senior Web Designer',
    company: 'Dabur India Ltd (via Accenture)',
    location: 'Ghaziabad, India',
    period: 'Nov 2013 – Aug 2018',
    current: false,
    description: 'Designed and developed Dabur brand websites with combined 50M+ monthly visitors. Executed Lighthouse audits and performance remediation. Delivered pixel-perfect responsive patterns across 8+ device form factors.',
    highlights: [
      '50M+ monthly visitors across 4 flagship brand websites',
      'Responsive component libraries for 8+ device form factors',
      'PageSpeed and Lighthouse audits — bounce rate reduction + conversion uplift',
      'Ongoing maintenance, optimization, and feature delivery',
    ],
    tags: ['Consumer UX', 'Brand Web', 'Performance', 'Responsive Design'],
  },
  {
    role: 'Earlier Career',
    company: 'Multiple Organizations',
    location: 'India',
    period: '2007–2013',
    current: false,
    description: 'Freelance Web & Graphic Designer · Web Developer at Moretimer Pvt Ltd · E-Learning Product Developer at Infopro India (Oracle Global E-Learning Platform — SCORM/xAPI, Articulate Storyline, Captivate)',
    highlights: [
      'Oracle Global E-Learning Platform — served Oracle\'s international user base',
      'Articulate Storyline, Captivate, SCORM/xAPI, LMS development',
    ],
    tags: ['E-Learning', 'Web Design', 'Freelance'],
    condensed: true,
  },
];

const Experience = () => (
  <section id="experience" className="experience" aria-labelledby="exp-heading">
    <div className="section-inner">
      <div className="section-label" aria-hidden="true">04 / Experience</div>

      <h2 id="exp-heading" className="experience__heading">
        Career Timeline
      </h2>
      <p className="experience__subheading">
        14+ years of progressive roles spanning accessibility engineering,
        product design, design systems architecture, and front-end development.
      </p>

      <ol className="timeline" aria-label="Career experience timeline">
        {experiences.map((exp, i) => (
          <li key={i} className={`timeline__item ${exp.current ? 'timeline__item--current' : ''} ${exp.condensed ? 'timeline__item--condensed' : ''}`}>
            {/* Dot */}
            <div className="timeline__dot" aria-hidden="true">
              {exp.current && <span className="timeline__dot-pulse"></span>}
            </div>

            {/* Content */}
            <div className="timeline__content">
              <header className="timeline__header">
                <div className="timeline__role-row">
                  <h3 className="timeline__role">{exp.role}</h3>
                  {exp.current && (
                    <span className="timeline__current-badge" aria-label="Current position">Current</span>
                  )}
                </div>
                <div className="timeline__meta">
                  <span className="timeline__company">{exp.company}</span>
                  <span className="timeline__sep" aria-hidden="true">·</span>
                  <span className="timeline__location">{exp.location}</span>
                  <span className="timeline__sep" aria-hidden="true">·</span>
                  <time className="timeline__period">{exp.period}</time>
                </div>
              </header>

              <p className="timeline__desc">{exp.description}</p>

              {!exp.condensed && (
                <ul className="timeline__highlights" aria-label="Key achievements">
                  {exp.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              {exp.awards && (
                <div className="timeline__awards" aria-label="Awards">
                  {exp.awards.map((a) => (
                    <span key={a} className="timeline__award">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {a}
                    </span>
                  ))}
                </div>
              )}

              <ul className="timeline__tags" aria-label="Skills used" role="list">
                {exp.tags.map((t) => (
                  <li key={t} className="timeline__tag">{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
