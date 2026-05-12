import React from 'react';
import './Companies.css';

const companies = [
  {
    name: 'Happiest Minds Technologies',
    role: 'Senior UI/UX Designer & Frontend Developer',
    period: '2021-2025',
    sector: 'Enterprise Tech / Digital Transformation',
    highlight: 'Led accessibility transformation — 32% → 98% WCAG compliance',
    initials: 'HM',
    accentColor: '#fee600',
    bgColor: 'rgba(254, 230, 0, 0.08)',
    image: '/assets/HM_Logo.png',
  },
  {
    name: 'Accenture',
    role: 'Senior Web Designer (Client Engagement)',
    period: '2013-2018',
    sector: 'Global IT Services & Consulting',
    highlight: "Delivered consumer UX for Dabur India's 50M+ user digital ecosystem",
    initials: 'AC',
    accentColor: '#a100ff',
    bgColor: 'rgba(161, 0, 255, 0.08)',
    image: '/assets/accenture_logo.png',
  },
  {
    name: 'Dabur India Limited (Client)',
    role: 'Senior Web Designer (via Accenture)',
    period: '2013-2018',
    sector: 'FMCG / Consumer Goods',
    highlight: 'Designed brand websites reaching 50M+ monthly users',
    initials: 'DI',
    accentColor: '#2d9e4e',
    bgColor: 'rgba(45, 158, 78, 0.08)',
    image: '/assets/Dabur_Logo.png',
  },
  {
    name: 'Oracle (Client)',
    role: 'E-Learning Product Developer (via Infopro India)',
    period: '2008-2009',
    sector: 'Enterprise Software / Global Technology',
    highlight: "Built SCORM/xAPI e-learning modules for Oracle's global user base",
    initials: 'OR',
    accentColor: '#e84444',
    bgColor: 'rgba(232, 68, 68, 0.08)',
    image: '/assets/oracle-logo-1.png',
  },
  {
    name: 'Infopro India',
    role: 'E-Learning & Web Developer',
    period: '2007-2009',
    sector: 'E-Learning / Digital Content Production',
    highlight: 'Developed Oracle Global E-Learning Platform using Articulate Storyline & Captivate',
    initials: 'IP',
    accentColor: '#f8c301',
    bgColor: 'rgba(248, 195, 1, 0.08)',
    image: '/assets/infopro_logo.png',
  },
];

const Companies = () => (
  <section
    id="companies"
    className="companies"
    aria-labelledby="companies-heading"
  >
    <div className="section-inner">
      <div className="section-label" aria-hidden="true">
        05 / Clients &amp; Employers
      </div>

      <div className="companies__intro">
        <h2 id="companies-heading" className="companies__heading">
          Worked With &amp; <em>Supported</em>
        </h2>
        <p className="companies__subheading">
          14+ years of delivering enterprise-grade UX, accessibility, and
          front-end engineering for globally recognised organisations across
          technology, consulting, and consumer industries.
        </p>
      </div>

      {/* Use <ul>/<li> for proper list semantics */}
      <ul
        className="companies__grid"
        aria-label="Companies and organisations worked with"
      >
        {companies.map((co) => (
          <li key={co.name}>
            <article
              className="company-card"
              aria-label={`${co.name} — ${co.role}`}
              style={{ '--card-accent': co.accentColor, '--card-bg': co.bgColor }}
            >
              {/* Logo / Initials badge — decorative */}
              <div className="company-col">
                <div className="company-card__logo" aria-hidden="true">
                  <span className="company-card__initials">
                    <img src={co.image} alt={co.name + ' Logo'} />
                  </span>
                </div>

                <div className="company-card__body">
                  <h3 className="company-card__name">{co.name}</h3>
                  <p className="company-card__role">{co.role}</p>
                </div>
              </div>

              <div>
                <div className="company-card__meta">
                  <span className="company-card__sector">{co.sector}</span>
                  <span className="company-card__period">{co.period}</span>
                </div>

                <p className="company-card__highlight">
                  <span
                    className="company-card__highlight-icon"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  {co.highlight}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Trust signals */}
      <dl className="companies__trust" aria-label="Experience summary">
        <div className="companies__trust-item">
          <dt className="companies__trust-label">Major Organisations</dt>
          <dd className="companies__trust-num">5+</dd>
        </div>
        <div className="companies__trust-divider" aria-hidden="true" />
        <div className="companies__trust-item">
          <dt className="companies__trust-label">Years Experience</dt>
          <dd className="companies__trust-num">14+</dd>
        </div>
        <div className="companies__trust-divider" aria-hidden="true" />
        <div className="companies__trust-item">
          <dt className="companies__trust-label">Users Reached</dt>
          <dd className="companies__trust-num">50M+</dd>
        </div>
        <div className="companies__trust-divider" aria-hidden="true" />
        <div className="companies__trust-item">
          <dt className="companies__trust-label">Product Domains</dt>
          <dd className="companies__trust-num">B2B + B2C</dd>
        </div>
      </dl>
    </div>
  </section>
);

export default Companies;
