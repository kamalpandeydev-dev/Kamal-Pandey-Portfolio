import React, { useState, useRef, useEffect } from 'react';
import './Work.css';

const caseStudies = [
  {
    id: 'enterprise-accessibility',
    label: 'Happiest Minds Technologies — B2B Enterprise Platform',
    type: 'UX Strategy · Accessibility Transformation · Design Systems',
    year: '2021–2025',
    headline: 'From 32% to 98% WCAG Compliance in Enterprise SaaS',
    description:
      'Led end-to-end accessibility transformation for a large-scale B2B enterprise platform serving global clients. Architected Figma Design Systems, drove ARIA-first front-end implementation, and established DesignOps workflows that became the org-wide standard for accessibility and quality.',
    outcomes: [
      { metric: '98%',  detail: 'WCAG 2.1 AA compliance achieved' },
      { metric: '85%',  detail: 'Reduction in accessibility violations' },
      { metric: '+28%', detail: 'Task completion rate increase' },
      { metric: '+32%', detail: 'User engagement improvement' },
    ],
    tags: ['WCAG 2.1','ADA Compliance','Design Systems','Figma','ARIA','DesignOps','Axe DevTools','NVDA/JAWS','A/B Testing'],
    color: '#c9a84c',
    featured: true,
    fullStudy: [
      { icon: '🎯', title: 'Problem',                 body: 'The enterprise platform had critically low accessibility compliance (~32%), a high volume of WCAG violations, and poor usability for assistive technology users — creating legal risk and excluding a significant segment of end users.' },
      { icon: '🔍', title: 'Research & Discovery',    body: 'Conducted comprehensive accessibility audits using Axe DevTools, WAVE, and Lighthouse. Identified critical issues including insufficient colour contrast ratios, missing ARIA labels and roles, broken keyboard navigation paths, and inaccessible form patterns. Held stakeholder interviews and screen reader testing sessions with NVDA and JAWS.' },
      { icon: '📐', title: 'Wireframes & Architecture',body: 'Created accessible wireframes with a strong focus on logical DOM structure, predictable tab order and focus management, semantic HTML landmark regions, and inclusive form design patterns. Information architecture was restructured to support assistive technology navigation efficiently.' },
      { icon: '🎨', title: 'UI Design & Design System', body: 'Designed a scalable Figma Design System incorporating accessibility tokens — colour contrast-tested palettes, scalable typography hierarchy meeting WCAG 1.4.3/1.4.11, reusable accessible components with built-in ARIA annotations, and variant states covering focus, hover, error, and disabled interactions.' },
      { icon: '♿', title: 'Accessibility Approach',   body: 'Implemented WCAG 2.1 AA compliance across all product surfaces. ARIA roles, live regions, and landmarks were applied systematically. Keyboard navigation was validated through manual testing. Screen reader compatibility was verified with NVDA and JAWS across Windows Chrome and Edge. Colour contrast and motion preferences (prefers-reduced-motion) were respected throughout.' },
      { icon: '🚀', title: 'Final Solution & Delivery', body: 'Shipped an accessible UI system across multiple enterprise product lines through close design–development collaboration. Delivered a comprehensive DesignOps workflow including accessibility checklists, component review processes, and a developer handoff system in Figma with ARIA specs embedded in every component annotation.' },
      { icon: '📊', title: 'Impact & Outcomes',       body: 'WCAG compliance lifted from 32% to 98%. Accessibility violations reduced by 85%. Task completion rate improved by 28%. User engagement increased by 32%. Accessibility-related support tickets dropped by 67%. Core Web Vitals improved by 42%. Received Chairman Teams Award (PepsiCo 2022) and UI Star of the Quarter (2021).' },
    ],
  },
  {
    id: 'syncrasy-ui',
    label: 'Syncrasy Technologies — React Component Library',
    type: 'Frontend Engineering · Component Library · UX Research',
    year: '2019–2021',
    headline: 'Building an Accessible React Component Library at Scale',
    description:
      'Built 30+ accessible UI components using React.js, Redux, and SCSS. Created a documented Figma Design System with WCAG 2.1 AA accessibility tokens, reducing design-to-development time by 32%. Ran moderated usability tests to validate interaction patterns before each release.',
    outcomes: [
      { metric: '40%',  detail: 'Page load time reduction' },
      { metric: '+22%', detail: 'Task completion improvement' },
      { metric: '+18%', detail: 'User satisfaction score' },
      { metric: '32%',  detail: 'Faster design-to-dev cycle' },
    ],
    tags: ['React.js','Redux','SCSS','Usability Testing','Design Tokens','User Research','Code Splitting','Lazy Loading'],
    color: '#6b8cba',
    featured: false,
    fullStudy: [
      { icon: '🎯', title: 'Problem',                        body: 'Slow page load times and inconsistent UI patterns were causing high drop-off rates and user dissatisfaction. The lack of a shared component library led to duplicated effort and diverging design standards across teams.' },
      { icon: '🔍', title: 'Research & Discovery',           body: 'Analysed user behaviour through session recordings, heatmaps, and performance audits. Conducted moderated usability testing sessions identifying key friction points. Performance profiling revealed render-blocking resources and unoptimised asset delivery as primary culprits.' },
      { icon: '📐', title: 'Wireframes & Layout Optimisation', body: 'Redesigned key layouts to reduce cognitive load, prioritise above-the-fold content, and streamline interaction flows. Component wireframes were structured to support lazy loading and deferred rendering strategies.' },
      { icon: '🎨', title: 'UI Design & Component Library',  body: 'Built a documented Figma Design System with consistent UI patterns, spacing tokens, and accessible colour pairs. Developed 30+ React components with WCAG 2.1 AA compliance, semantic HTML, and keyboard accessibility baked in from inception.' },
      { icon: '♿', title: 'Accessibility Considerations',    body: 'Applied semantic HTML across all components, verified keyboard navigation flows, improved colour contrast ratios to meet WCAG 1.4.3, and ensured form elements had accessible labels and error messaging patterns.' },
      { icon: '🚀', title: 'Final Solution',                 body: 'Implemented code-splitting, lazy loading, and optimised image delivery to dramatically improve performance. The shared component library standardised UI delivery and reduced front-end build time significantly.' },
      { icon: '📊', title: 'Impact & Outcomes',              body: 'Page load time reduced by 40%. Task completion rate improved by 22%. User satisfaction scores increased by 18%. Design-to-development cycle time cut by 32%. Lighthouse accessibility score sustained at 94+.' },
    ],
  },
  {
    id: 'dabur-digital',
    label: 'Dabur India Ltd (via Accenture) — Consumer Brand Ecosystem',
    type: 'Product Design · Large-Scale Consumer UX · Web Performance',
    year: '2013–2018',
    headline: 'Designing a 50M+/Month Consumer Digital Ecosystem',
    description:
      'Designed and developed 4 flagship brand websites (RealFruitPower.com, DaburDentalCare.com, DaburHoney.com, DaburChyawanprash.com) via Accenture, serving over 50 million monthly users across 8+ device form factors. Executed Lighthouse and PageSpeed audits to reduce bounce rates and drive conversion uplift.',
    outcomes: [
      { metric: '50M+', detail: 'Monthly users across brand properties' },
      { metric: '8+',   detail: 'Device form factors supported' },
      { metric: '4',    detail: 'Flagship brand sites delivered' },
      { metric: '↓',    detail: 'Bounce rates via performance optimisation' },
    ],
    tags: ['Consumer UX','Responsive Design','Web Performance','PageSpeed','Pattern Libraries','Brand Design','Multi-device'],
    color: '#7c9e6e',
    featured: true,
    fullStudy: [
      { icon: '🎯', title: 'Problem',                     body: "Dabur India's consumer brand websites were experiencing high bounce rates and delivering an inconsistent user experience across 8+ device types. Multiple brand websites lacked UX coherence, slowing conversion and undermining brand equity for one of India's most recognised consumer goods companies." },
      { icon: '🔍', title: 'Research & Discovery',        body: 'Analysed user flow data, bounce rate patterns, and device usage distribution. Identified key drop-off points and page performance bottlenecks through Google Analytics and PageSpeed Insights. Studied competitor benchmarks in the FMCG digital space to identify experience gaps.' },
      { icon: '📐', title: 'Wireframes & UX Standardisation', body: 'Established standardised UX patterns across 4 distinct brand websites while preserving individual brand identity. Created responsive wireframes optimised for mobile-first delivery across 8+ device form factors including feature phones, tablets, and desktop.' },
      { icon: '🎨', title: 'UI Design & Responsive Components', body: "Designed brand-aligned responsive UI components ensuring visual consistency within Dabur's brand guidelines. Built a reusable pattern library that accelerated delivery across multiple properties and maintained quality at scale." },
      { icon: '♿', title: 'Accessibility & Readability', body: 'Improved readability through typography hierarchy refinements, enhanced colour contrast for outdoor lighting conditions on mobile, and responsive accessibility improvements ensuring content was legible across all screen sizes.' },
      { icon: '🚀', title: 'Final Solution',              body: 'Delivered a unified design system and performance-optimised front-end across all brand properties. Implemented PageSpeed and Lighthouse audit recommendations, reducing page weight and improving critical rendering paths across high-traffic consumer portals.' },
      { icon: '📊', title: 'Impact & Outcomes',           body: "Improved user engagement and reduced bounce rates across brand properties collectively reaching 50M+ monthly users. Increased conversions across high-traffic consumer sites. Delivered responsive, accessible experiences across 8+ device types for one of India's largest consumer brands." },
    ],
  },
  {
    id: 'freelance-ai',
    label: 'Sookti AI — UI Design',
    type: 'Product Design',
    year: '2025',
    headline: 'Architecting UI Systems',
    description:
      'Architected UI systems for Sookti AI using Figma Design Systems with modern inclusive design standards.',
    outcomes: [
      { metric: 'Figma', detail: 'UI presentation deck' },
    ],
    tags: ['AI Products','Product Design','Design Systems','Figma','Layout','Typography','Color Schemes'],
    color: '#9c7dd4',
    featured: false,
    fullStudy: [
      { icon: '🎯', title: 'Challenge',    body: 'The challenge was to design an AI product/presentation in Figma UI that was visually compelling.' },
      { icon: '🎨', title: 'Design System', body: 'Built a Figma Design System.' },
      { icon: '📊', title: 'Outcome',      body: 'Delivered a fully Figma UI presentation that was visually compelling for production deployment.' },
    ],
  },
];

/**
 * CaseStudyDetail — manages its own visibility/inert state
 * to prevent keyboard focus entering hidden content (WCAG 2.1.1).
 */
const CaseStudyDetail = ({ id, isOpen, fullStudy }) => {
  const detailRef = useRef(null);

  // Apply/remove inert to prevent focus reaching hidden content
  useEffect(() => {
    const el = detailRef.current;
    if (!el) return;
    if (isOpen) {
      el.removeAttribute('inert');
    } else {
      el.setAttribute('inert', '');
    }
  }, [isOpen]);

  return (
    <div
      ref={detailRef}
      id={`cs-detail-${id}`}
      className="case-card__detail"
      aria-hidden={!isOpen}
    >
      <div className="case-card__detail-inner">
        {fullStudy ? (
          <div className="case-study-full">
            {fullStudy.map((section) => (
              <div key={section.title} className="case-study-full__section">
                <h4 className="case-study-full__section-title">
                  <span className="case-study-full__section-icon" aria-hidden="true">
                    {section.icon}
                  </span>
                  {section.title}
                </h4>
                <p className="case-study-full__section-body">{section.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="case-card__placeholder">
            <h4>Full Case Study Available on Request</h4>
            <p>
              Contact me to receive a complete case study deck with wireframes,
              prototypes, and research findings.
            </p>
            <a href="mailto:kamalpandey.dev@gmail.com" className="btn btn--primary">
              Request Full Deck
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Work = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => setActive(active === id ? null : id);

  return (
    <section id="work" className="work" aria-labelledby="work-heading">
      <div className="section-inner">
        <div className="section-label" aria-hidden="true">02 / Work</div>
        <div className="work__intro">
          <h2 id="work-heading" className="work__heading">
            Selected Case Studies
          </h2>
          <p className="work__subheading">
            Enterprise-grade UX strategy, design systems, and accessibility
            engineering — delivered across B2B, B2C, and AI-first product
            landscapes.
          </p>
        </div>

        {/* Case study list — using <ul>/<li> for proper list semantics */}
        <ul className="work__list">
          {caseStudies.map((cs, i) => (
            <li
              key={cs.id}
              className={`case-card ${active === cs.id ? 'case-card--expanded' : ''} ${cs.featured ? 'case-card--featured' : ''}`}
            >
              <article aria-labelledby={`cs-title-${cs.id}`}>
                <div className="case-card__header">
                  <div className="case-card__meta">
                    <span className="case-card__index" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="case-card__label">{cs.label}</span>
                    <span className="case-card__year" aria-hidden="true">{cs.year}</span>
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
                  <ul className="case-card__outcomes" aria-label="Key outcomes">
                    {cs.outcomes.map((o) => (
                      <li key={o.detail} className="case-card__outcome">
                        <span
                          className="case-card__outcome-num"
                          style={{ color: cs.color }}
                          aria-label={`${o.metric}: ${o.detail}`}
                        >
                          {o.metric}
                        </span>
                        <span className="case-card__outcome-label" aria-hidden="true">
                          {o.detail}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <ul className="case-card__tags" aria-label="Skills and tools used">
                    {cs.tags.map((tag) => (
                      <li key={tag} className="case-card__tag">
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Expand/collapse toggle */}
                  <div className="case-card__actions">
                    <button
                      className="case-card__btn-expand"
                      onClick={() => handleToggle(cs.id)}
                      aria-expanded={active === cs.id}
                      aria-controls={`cs-detail-${cs.id}`}
                    >
                      {active === cs.id ? 'Show Less' : 'Read Full Case Study'}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{
                          transform: active === cs.id ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.3s',
                        }}
                      >
                        <path
                          d="M2 5l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Expandable case study detail */}
                <CaseStudyDetail
                  id={cs.id}
                  isOpen={active === cs.id}
                  fullStudy={cs.fullStudy}
                />
              </article>
            </li>
          ))}
        </ul>

        {/* CTA banner */}
        <aside className="work__cta-banner" aria-label="Work inquiry">
          <div className="work__cta-content">
            <h3>Looking for a Lead UX Designer?</h3>
            <p>
              I'm currently available for full-time, contract, and advisory
              roles in product design, design systems, and accessibility
              engineering.
            </p>
          </div>
          <a
            href="mailto:kamalpandey.dev@gmail.com"
            className="btn btn--primary"
            aria-label="Email Kamal to discuss your project"
          >
            Start a Conversation
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </aside>
      </div>
    </section>
  );
};

export default Work;
