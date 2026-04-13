import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('kamalpandey.dev@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="section-inner">
        <div className="section-label" aria-hidden="true">05 / Contact</div>

        <div className="contact__grid">
          {/* Left: Headline + CTA */}
          <div className="contact__content">
            <h2 id="contact-heading" className="contact__heading">
              Let's build something
              <em> exceptional</em>.
            </h2>
            <p className="contact__lead">
              I'm currently open to full-time, contract, and advisory
              opportunities in <strong>Product Design</strong>,{' '}
              <strong>Design Systems</strong>, and{' '}
              <strong>Accessibility Engineering</strong>.
            </p>
            <p className="contact__body">
              Whether you need a design system architect, an accessibility
              champion, or a senior UX leader — I'd love to hear about what
              you're building.
            </p>

            <div className="contact__actions">
              <a
                href="mailto:kamalpandey.dev@gmail.com"
                className="btn btn--primary"
                aria-label="Email Kamal at kamalpandey.dev@gmail.com"
              >
                Send Me a Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
                aria-label="Connect with Kamal on LinkedIn (opens in new tab)"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right: Contact cards */}
          <div className="contact__cards" aria-label="Contact details">
            {/* Email card */}
            <div className="contact-card" aria-label="Email contact">
              <div className="contact-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">Email</span>
                <a href="mailto:kamalpandey.dev@gmail.com" className="contact-card__value">
                  kamalpandey.dev@gmail.com
                </a>
              </div>
              <button
                className="contact-card__copy"
                onClick={handleCopyEmail}
                aria-label={copied ? 'Email address copied to clipboard' : 'Copy email address to clipboard'}
              >
                {copied ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
                    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                )}
                <span className="contact-card__copy-label">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone card */}
            <div className="contact-card" aria-label="Phone contact">
              <div className="contact-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.1 3.4 2 2 0 0 1 3.08 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1A16 16 0 0 0 13 15l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">Phone</span>
                <a href="tel:+919266306689" className="contact-card__value">
                  +91 92663 06689
                </a>
              </div>
            </div>

            {/* Location card */}
            <div className="contact-card" aria-label="Location">
              <div className="contact-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">Location</span>
                <span className="contact-card__value">Delhi, India</span>
              </div>
              <span className="contact-card__note">Open to remote &amp; relocation</span>
            </div>

            {/* LinkedIn card */}
            <div className="contact-card contact-card--linkedin" aria-label="LinkedIn profile">
              <div className="contact-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="contact-card__info">
                <span className="contact-card__label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/kamal-pandey-0a69b7387/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card__value"
                  aria-label="Kamal Pandey's LinkedIn profile (opens in new tab)"
                >
                  kamal-pandey-0a69b7387
                </a>
              </div>
              <span className="contact-card__arrow" aria-hidden="true">↗</span>
            </div>
          </div>
        </div>

        {/* Availability status bar */}
        <div className="contact__status" role="status" aria-live="polite" aria-label="Current availability status">
          <span className="contact__status-dot" aria-hidden="true"></span>
          <span className="contact__status-text">
            <strong>Available for Work</strong> — Actively considering full-time, contract, and advisory roles.
            Typically responds within 24 hours.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
