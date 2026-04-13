import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__inner">
      <div className="footer__brand">
        <div className="footer__logo" aria-hidden="true">
          <span className="footer__logo-kp">KP</span>
        </div>
        <div className="footer__brand-text">
          <span className="footer__name">Kamal Pandey</span>
          <span className="footer__title">Lead UX Designer · Design Systems Architect · Accessibility Specialist</span>
        </div>
      </div>

      <nav className="footer__nav" aria-label="Footer navigation">
        <a href="#about" className="footer__link">About</a>
        <a href="#work" className="footer__link">Work</a>
        <a href="#skills" className="footer__link">Skills</a>
        <a href="#experience" className="footer__link">Experience</a>
        <a href="#contact" className="footer__link">Contact</a>
        <a
          href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
          aria-label="LinkedIn (opens in new tab)"
        >
          LinkedIn ↗
        </a>
      </nav>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Kamal Pandey. All rights reserved.
        </p>
        <div className="footer__tags" aria-label="Expertise keywords">
          {['Product Design', 'Design Systems', 'WCAG 2.2', 'Figma', 'React', 'User Research', 'A/B Testing', 'Accessibility'].map(tag => (
            <span key={tag} className="footer__tag">{tag}</span>
          ))}
        </div>
        {/* <p className="footer__wcag">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          WCAG 2.2 Level AA Compliant
        </p> */}
      </div>
    </div>
  </footer>
);

export default Footer;
