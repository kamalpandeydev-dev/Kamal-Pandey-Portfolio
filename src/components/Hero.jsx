import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion — WCAG 2.3.3 Animation from Interactions
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return; // Skip animation; element is visible by default

    el.style.opacity = '0';
    el.style.transform = 'translateY(32px)';
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.transition =
          'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 80);
    });
  }, []);

  return (
    <section id="hero" className="hero" aria-labelledby="hero-headline">
      {/* Decorative background elements — hidden from AT */}
      <div className="hero__bg-orb hero__bg-orb--1" aria-hidden="true"></div>
      <div className="hero__bg-orb hero__bg-orb--2" aria-hidden="true"></div>
      <div className="hero__bg-grid" aria-hidden="true"></div>

      <div className="hero__inner">
        <div className="hero__content" ref={headlineRef}>
          {/* Main headline */}
          <h1 id="hero-headline" className="hero__headline">
            <span className="hero__headline-sub">Lead UX UI Designer &amp;</span>
            <em className="hero__headline-em">Design Systems</em>
            <br />
            <span className="hero__headline-main">Architect</span>
          </h1>

          {/* Descriptor paragraph */}
          <p className="hero__descriptor">
            14+ years crafting accessible, high-performance digital products for
            Fortune B2B &amp; B2C. Expert in{' '}
            <strong>Figma Design Systems</strong>,{' '}
            <strong>WCAG 2.1/2.2 Compliance</strong>,{' '}
            <strong>React.js Frontend Engineering</strong>, and{' '}
            <strong>Product Design Strategy</strong> trusted by Accenture,
            Dabur India, Oracle &amp; Happiest Minds.
          </p>

          {/* Career stats — use <ul>/<li> for proper list semantics */}
          <ul className="hero__stats" aria-label="Career highlights">
            <li className="hero__stat">
              <span className="hero__stat-num" aria-label="14 plus years">
                14+
              </span>
              <span className="hero__stat-label">Years Experience</span>
            </li>
            <li className="hero__stat-divider" aria-hidden="true"></li>
            <li className="hero__stat">
              <span
                className="hero__stat-num"
                aria-label="98 percent WCAG compliance achieved"
              >
                98%
              </span>
              <span className="hero__stat-label">WCAG Compliance</span>
            </li>
            <li className="hero__stat-divider" aria-hidden="true"></li>
            <li className="hero__stat">
              <span
                className="hero__stat-num"
                aria-label="50 million plus monthly users"
              >
                50M+
              </span>
              <span className="hero__stat-label">Monthly Users Reached</span>
            </li>
          </ul>

          {/* Call-to-action buttons */}
          <div className="hero__actions">
            <a
              href="#work"
              className="btn btn--primary"
              aria-label="View Kamal's UX case studies"
            >
              View Case Studies
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
            <a
              href="mailto:kamalpandey.dev@gmail.com"
              className="btn btn--ghost"
              aria-label="Contact Kamal by email"
            >
              Let's Talk
            </a>
          </div>

          {/* Social links */}
          <nav className="hero__social" aria-label="Social and contact links">
            <a
              href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Kamal Pandey on LinkedIn (opens in new tab)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://kamal-pandey-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Kamal Pandey's live portfolio website (opens in new tab)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Portfolio
            </a>
            <a
              href="mailto:kamalpandey.dev@gmail.com"
              className="hero__social-link"
              aria-label="Send an email to Kamal Pandey"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                focusable="false"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              Email
            </a>
          </nav>
        </div>

        {/*
          Hero visual — purely decorative.
          aria-hidden="true" hides the entire subtree from assistive technology.
          No keyboard-focusable elements inside.
        */}
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__avatar-ring">
            <div className="hero__avatar-inner">
              <div className="hero__avatar-text">
                <span className="hero__avatar-initials">
                  <img src="./assets/kplogo3.jpg" alt="Kamal Pandey Portfolio Logo with Skills" />
                </span>
              </div>
            </div>
            <div className="hero__ring hero__ring--1"></div>
            <div className="hero__ring hero__ring--2"></div>
            <div className="hero__ring hero__ring--3"></div>
          </div>

          {/* Floating skill chips — decorative, aria-hidden from parent */}
          <div className="hero__chip hero__chip--1">Product Design</div>
          <div className="hero__chip hero__chip--2">Design Systems</div>
          <div className="hero__chip hero__chip--3">WCAG 2.2</div>
          <div className="hero__chip hero__chip--4">Figma Expert</div>
          <div className="hero__chip hero__chip--5">UI Development</div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll down to About section"
      >
        <span className="hero__scroll-text">Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true"></span>
      </a>
    </section>
  );
};

export default Hero;
