import React, { useState } from 'react';
import './Work.css';

const caseStudies = [
  {
    id: 'enterprise-accessibility',
    label: 'Happiest Minds — B2B Enterprise Platform',
    type: 'UX Strategy · Accessibility · Design Systems',
    year: '2021–2025',
    headline: 'From 32% to 98% WCAG Compliance in Enterprise SaaS',
    description:
      'Led end-to-end accessibility transformation for a large-scale B2B enterprise platform. Architected Figma Design Systems, drove ARIA-first front-end implementation, and established DesignOps workflows that became the org-wide standard.',
    outcomes: [
      { metric: '98%', detail: 'WCAG 2.1 AA compliance achieved' },
      { metric: '85%', detail: 'Reduction in accessibility violations' },
      { metric: '95+', detail: 'Lighthouse accessibility scores' },
      { metric: '35%', detail: 'Faster design review cycles' },
    ],
    tags: ['WCAG 2.1', 'ADA', 'Design Systems', 'Figma', 'ARIA', 'DesignOps', 'Accessibility Audit', 'A/B Testing'],
    color: '#c9a84c',
    featured: true,
  },
  {
    id: 'syncrasy-ui',
    label: 'Syncrasy Technologies — React Component Library',
    type: 'Frontend Engineering · Component Library · UX',
    year: '2019–2021',
    headline: 'Building an Accessible React Component Library at Scale',
    description:
      'Built 30+ accessible UI components using React.js, Redux, and SCSS. Created a documented Figma Design System with WCAG 2.1 AA accessibility tokens, reducing design-to-development time by 32%. Ran moderated usability tests to validate interaction patterns.',
    outcomes: [
      { metric: '30+', detail: 'Accessible components built' },
      { metric: '40%', detail: 'Page load time reduction' },
      { metric: '32%', detail: 'Faster design-to-development cycle' },
      { metric: '94+', detail: 'Lighthouse accessibility score' },
    ],
    tags: ['React.js', 'Redux', 'SCSS', 'Usability Testing', 'Design Tokens', 'User Research'],
    color: '#6b8cba',
    featured: false,
  },
  {
    id: 'dabur-digital',
    label: 'Dabur India Ltd — Consumer Brand Ecosystem',
    type: 'Product Design · Frontend · Web Performance',
    year: '2013-2018',
    headline: 'Designing a 50M+/Month Consumer Digital Ecosystem',
    description:
      'Designed and developed 4 flagship brand websites (RealFruitPower.com, DaburDentalCare.com, DaburHoney.com, DaburChyawanprash.com) serving over 50 million monthly users across 8+ device form factors. Executed Lighthouse and PageSpeed audits to drive conversion improvements.',
    outcomes: [
      { metric: '50M+', detail: 'Monthly users across brand properties' },
      { metric: '8+', detail: 'Device form factors supported' },
      { metric: '4', detail: 'Flagship brand sites delivered' },
      { metric: 'Reduced', detail: 'Bounce rates via performance optimization' },
    ],
    tags: ['Consumer UX', 'Responsive Design', 'Web Performance', 'Page Speed', 'Pattern Libraries'],
    color: '#7c9e6e',
    featured: true,
  },
  {
    id: 'freelance-ai',
    label: 'Sookti AI — Accessible AI Product UI',
    type: 'Product Design · Accessibility · React',
    year: '2025',
    headline: 'Architecting Accessible UI Systems for AI-First Products',
    description:
      'Architected accessible UI systems for Sookti AI using React.js, SCSS, and Figma Design Systems with full WCAG 2.1 AA compliance and accessibility token integration. Delivered cross-platform experiences aligned with modern AI product design standards.',
    outcomes: [
      { metric: 'WCAG', detail: '2.1 AA full compliance' },
      { metric: 'React', detail: 'Component-driven architecture' },
      { metric: 'Figma', detail: 'Design System with tokens' },
      { metric: 'ARIA', detail: 'Semantic + keyboard navigation' },
    ],
    tags: ['AI Products', 'Product Design', 'React.js', 'WCAG AA', 'Design Systems', 'Accessibility Tokens'],
    color: '#9c7dd4',
    featured: false,
  },
];

const Work = () => {
  const [active] = useState(null);

  return (
    <section id="work" className="work" aria-labelledby="work-heading">
      <div className="section-inner">
        <div className="section-label" aria-hidden="true">02 / Work</div>
        <div className="work__intro">
          <h2 id="work-heading" className="work__heading">
            Selected Case Studies
          </h2>
          <p className="work__subheading">
            Enterprise-grade UX strategy, design systems, and accessibility engineering —
            delivered across B2B, B2C, and AI-first product landscapes.
          </p>
        </div>

        {/* Case study cards */}
        <div className="work__list" role="list">
          {caseStudies.map((cs, i) => (
            <article
              key={cs.id}
              className={`case-card ${active === cs.id ? 'case-card--expanded' : ''} ${cs.featured ? 'case-card--featured' : ''}`}
              role="listitem"
              aria-labelledby={`cs-title-${cs.id}`}
            >
              <div className="case-card__header">
                <div className="case-card__meta">
                  <span className="case-card__index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="case-card__label">{cs.label}</span>
                  <span className="case-card__year">{cs.year}</span>
                </div>

                <h3
                  id={`cs-title-${cs.id}`}
                  className="case-card__headline"
                  style={{ '--accent-color': cs.color }}
                >
                  {cs.headline}
                </h3>

                <div className="case-card__type">{cs.type}</div>

                <p className="case-card__desc">{cs.description}</p>

                {/* Outcome metrics */}
                <div className="case-card__outcomes" role="list" aria-label="Key outcomes">
                  {cs.outcomes.map((o) => (
                    <div key={o.detail} className="case-card__outcome" role="listitem">
                      <span className="case-card__outcome-num"
                        style={{ color: cs.color }}
                        aria-label={`${o.metric}: ${o.detail}`}
                      >
                        {o.metric}
                      </span>
                      <span className="case-card__outcome-label">{o.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <ul className="case-card__tags" aria-label="Skills and tools used">
                  {cs.tags.map((tag) => (
                    <li key={tag} className="case-card__tag">{tag}</li>
                  ))}
                </ul>

                {/* CTA */}
                {/* <div className="case-card__actions">
                  <button
                    className="case-card__btn-expand"
                    onClick={() => setActive(active === cs.id ? null : cs.id)}
                    aria-expanded={active === cs.id}
                    aria-controls={`cs-detail-${cs.id}`}
                  >
                    {active === cs.id ? 'Show Less' : 'Read Full Case Study'}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false"
                      style={{ transform: active === cs.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}
                    >
                      <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div> */}
              </div>

              {/* Expanded detail */}
              {/* <div
                id={`cs-detail-${cs.id}`}
                className="case-card__detail"
                aria-hidden={active !== cs.id}
              >
                <div className="case-card__detail-inner">
                  <div className="case-card__placeholder">
                    <div className="case-card__placeholder-icon" aria-hidden="true">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="4" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4"/>
                        <circle cx="20" cy="17" r="5" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 34c2-5 6-8 12-8s10 3 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <h4>Full Case Study Coming Soon</h4>
                    <p>Detailed process documentation, wireframes, prototypes, and research findings
                    will be added here. Contact me to receive a complete case study deck.</p>
                    <a href="mailto:kamalpandey.dev@gmail.com" className="btn btn--primary">
                      Request Full Deck
                    </a>
                  </div>
                </div>
              </div> */}
            </article>
          ))}
        </div>

        {/* CTA banner */}
        <div className="work__cta-banner" role="complementary" aria-label="Work inquiry call to action">
          <div className="work__cta-content">
            <h3>Looking for a Lead UX Designer?</h3>
            <p>I'm currently available for full-time, contract, and advisory roles in product design, design systems, and accessibility engineering.</p>
          </div>
          <a href="mailto:kamalpandey.dev@gmail.com" className="btn btn--primary" aria-label="Email Kamal to discuss your project">
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Work;
