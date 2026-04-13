import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#work', label: 'Work' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      role="banner"
    >
      <nav className="navbar__inner" aria-label="Main navigation">
        <a href="#hero" className="navbar__logo" aria-label="Kamal Pandey Portfolio - home">
          {/* <span className="navbar__logo-kp" aria-hidden="true">KP</span>
          <span className="navbar__logo-name">Kamal Pandey</span> */}
          <img src="/assets/kamal-pandey.jpg" className='navbar__logo-kp' alt='Portfolio Logo Kamal Pandey' />
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__link">
                {label}
              </a>
            </li>
          ))}
        </ul>

     <a
          href="mailto:kamalpandey.dev@gmail.com"
          aria-label="Contact Kamal via email"
          className="hero__badge navbar__cta"
          role="status"
        >
          {/* Badge */}
          <span className="hero__badge-dot" aria-hidden="true"></span>
          Available for Opportunity
        </a>
 
        {/* Mobile menu toggle */}
        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
          <span className="navbar__burger-line"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="navbar__mobile-link" onClick={handleNavClick}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:kamalpandey.dev@gmail.com"
              className="navbar__mobile-cta"
              onClick={handleNavClick}
            >
              Available for Work
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
