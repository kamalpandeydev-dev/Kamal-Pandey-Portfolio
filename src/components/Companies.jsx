import React from 'react';
import './Companies.css';

const companies = [
  {
    name: 'Happiest Minds Technologies',
    role: 'Senior UI/UX Designer & Frontend Developer',
    period: '2021 - 2025',
    sector: 'Enterprise Tech / Digital Transformation',
    highlight: 'Led accessibility transformation — 32% → 98% WCAG compliance',
    initials: 'HM',
    accentColor: '#c9a84c',
    bgColor: 'rgba(201,168,76,0.08)',
  },
  {
    name: 'Accenture',
    role: 'Senior Web Designer (Client Engagement)',
    period: '2013 - 2018',
    sector: 'Global IT Services & Consulting',
    highlight: "Delivered consumer UX for Dabur India's 50M+ user digital ecosystem",
    initials: 'AC',
    accentColor: '#a855f7',
    bgColor: 'rgba(168,85,247,0.08)',
  },
  {
    name: 'Dabur India Limited',
    role: 'Web Designer (via Accenture)',
    period: '2013 - 2018',
    sector: 'FMCG / Consumer Goods (Fortune India 500)',
    highlight: 'Designed 4 flagship brand websites reaching 50M+ monthly users',
    initials: 'DI',
    accentColor: '#22c55e',
    bgColor: 'rgba(34,197,94,0.08)',
  },
  {
    name: 'Oracle',
    role: 'E-Learning Product Developer (via Infopro India)',
    period: '2010 - 2013',
    sector: 'Enterprise Software / Global Technology',
    highlight: "Built SCORM/xAPI e-learning modules for Oracle's global user base",
    initials: 'OR',
    accentColor: '#f97316',
    bgColor: 'rgba(249,115,22,0.08)',
  },
  {
    name: 'Infopro India',
    role: 'E-Learning & Web Developer',
    period: '2010 - 2013',
    sector: 'E-Learning / Digital Content Production',
    highlight: 'Developed Oracle Global E-Learning Platform using Articulate Storyline & Captivate',
    initials: 'IP',
    accentColor: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.08)',
  },
];

const Companies = () => (
  <section id="companies" className="companies" aria-labelledby="companies-heading">
    <div className="section-inner">
      <div className="section-label" aria-hidden="true">05 / Clients &amp; Employers</div>

      <div className="companies__intro">
        <h2 id="companies-heading" className="companies__heading">
          Worked With &amp; <em>Supported</em>
        </h2>
        <p className="companies__subheading">
          14+ years of delivering enterprise-grade UX, accessibility, and front-end engineering
          for globally recognised organisations across technology, consulting, and consumer industries.
        </p>
      </div>

      <div
        className="companies__grid"
        role="list"
        aria-label="Companies and organisations worked with"
      >
        {companies.map((co) => (
          <article
            key={co.name}
            className="company-card"
            role="listitem"
            aria-label={`${co.name} — ${co.role}`}
            style={{ '--card-accent': co.accentColor, '--card-bg': co.bgColor }}
          >
            {/* Logo / Initials badge */}
            <div className="company-card__logo" aria-hidden="true">
              <span className="company-card__initials">{co.initials}</span>
            </div>

            <div className="company-card__body">
              <h3 className="company-card__name">{co.name}</h3>
              <p className="company-card__role">{co.role}</p>

              <div className="company-card__meta">
                <span className="company-card__sector">{co.sector}</span>
                <span className="company-card__period">{co.period}</span>
              </div>

              <p className="company-card__highlight">
                <span className="company-card__highlight-icon" aria-hidden="true">✦</span>
                {co.highlight}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Trust signals banner */}
      <div className="companies__trust" aria-label="Experience summary">
        <div className="companies__trust-item">
          <span className="companies__trust-num">5+</span>
          <span className="companies__trust-label">Major Organisations</span>
        </div>
        <div className="companies__trust-divider" aria-hidden="true" />
        <div className="companies__trust-item">
          <span className="companies__trust-num">14+</span>
          <span className="companies__trust-label">Years Experience</span>
        </div>
        <div className="companies__trust-divider" aria-hidden="true" />
        <div className="companies__trust-item">
          <span className="companies__trust-num">50M+</span>
          <span className="companies__trust-label">Users Reached</span>
        </div>
        <div className="companies__trust-divider" aria-hidden="true" />
        <div className="companies__trust-item">
          <span className="companies__trust-num">B2B + B2C</span>
          <span className="companies__trust-label">Product Domains</span>
        </div>
      </div>
    </div>
  </section>
);

export default Companies;
