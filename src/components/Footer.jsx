import React from "react";
import "./Footer.css";

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#companies", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

const expertiseTags = [
  "Lead UX Designer",
  "Design Systems",
  "WCAG 2.2",
  "Figma",
  "React.js",
  "Next.js",
  "Accessibility",
  "DesignOps",
  "User Research",
  "A/B Testing",
  "Enterprise UX",
  "B2B · B2C",
];

const Footer = () => (
  /* <footer> carries the implicit contentinfo landmark — role="contentinfo" is redundant */
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer_child1">
        <div className="footer__brand">
          {/* Logo — purely decorative, aria-hidden */}
          <div className="footer__logo" aria-hidden="true">
            <span className="footer__logo-kp">
              <img
                src="./assets/kplogo3.jpg"
                alt="Kamal Pandey Portfolio Logo with Skills"
              />
            </span>
          </div>
          <div className="footer__brand-text">
            <span className="footer__name">Kamal Pandey</span>
            <span className="footer__title">
              Lead UX Designer · Design Systems Architect · Accessibility
              Specialist
            </span>
          </div>
          {/* Expertise keyword tags — aria-label on container provides context */}
        <ul className="footer__tags" aria-label="Expertise keywords">
          {expertiseTags.map((tag) => (
            <li key={tag} className="footer__tag">
              {tag}
            </li>
          ))}
        </ul>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footerLinks.map(({ href, label }) => (
            <a key={href} href={href} className="footer__link">
              {label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            LinkedIn ↗
          </a>
        </nav>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          <span
            aria-label={`Copyright ${new Date().getFullYear()} Kamal Pandey. All rights reserved.`}
          >
            &copy; {new Date().getFullYear()} Kamal Pandey. All rights reserved.
          </span>
        </p>
        
      </div>
    </div>
  </footer>
);

export default Footer;
