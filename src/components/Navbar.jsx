import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for focus management
  const burgerRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move focus into menu when opened; return focus to burger when closed
  useEffect(() => {
    if (menuOpen) {
      // Short delay allows CSS transition to begin before focus shifts
      const timer = setTimeout(() => {
        firstMenuLinkRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Only return focus if the menu was previously open
      burgerRef.current?.focus();
    }
  }, [menuOpen]);

  // Close menu on Escape key — WCAG 1.4.13 / 2.1.2
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { href: '#about',      label: 'About' },
    { href: '#work',       label: 'Work' },
    { href: '#skills',     label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#companies',  label: 'Clients' },
    { href: '#contact',    label: 'Contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    // <header> carries the implicit "banner" landmark — role="banner" is not needed
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <a
          href="#hero"
          className="navbar__logo"
          aria-label="Kamal Pandey — home"
        >
          <img
            src="/assets/kamal-pandey.jpg"
            className="navbar__logo-kp"
            alt="Kamal Pandey Portfolio Logo"
            aria-hidden="true"
          />
        </a>

        {/* Desktop navigation links */}
        <ul className="navbar__links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/*
          "Hire Me" badge — this is an anchor link, not a live region.
          Removed the incorrect role="status" which violated WCAG 4.1.2.
        */}
        <a
          href="mailto:kamalpandey.dev@gmail.com"
          aria-label="Contact Kamal via email — currently available for hire"
          className="hero__badge navbar__cta"
        >
          <span className="hero__badge-dot" aria-hidden="true"></span>
          Hire Me
        </a>

        <a
          href="/assets/Kamal_Pandey_UX_UI_Designer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__resume-btn"
          aria-label="Download Kamal Pandey's resume PDF (opens in new tab)"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          ref={burgerRef}
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
        </button>
      </nav>

      {/*
        Mobile menu:
        - aria-hidden hides it from AT when closed
        - inert attribute prevents keyboard focus from entering when hidden
        - Managed via useEffect above for proper focus management
      */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: '' } : {})}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
      >
        <ul>
          {navLinks.map(({ href, label }, index) => (
            <li key={href}>
              <a
                ref={index === 0 ? firstMenuLinkRef : null}
                href={href}
                className="navbar__mobile-link"
                onClick={handleNavClick}
                tabIndex={menuOpen ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:kamalpandey.dev@gmail.com"
              className="navbar__mobile-cta"
              onClick={handleNavClick}
              tabIndex={menuOpen ? 0 : -1}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
