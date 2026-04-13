import React, { useEffect } from 'react';
import './styles/global.css';
import './styles/animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Animate sections into view on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section--visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((s) => {
      s.classList.add('section--hidden');
      io.observe(s);
    });

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Skip navigation for screen readers — WCAG 2.4.1 */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Back to top */}
      <BackToTop />
    </>
  );
}

function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#hero"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      aria-label="Back to top of page"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '44px',
        height: '44px',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border-2)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-muted)',
        textDecoration: 'none',
        zIndex: 50,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease, background 0.2s ease, color 0.2s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--color-gold-pale)';
        e.currentTarget.style.color = 'var(--color-gold-light)';
        e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--color-surface)';
        e.currentTarget.style.color = 'var(--color-text-muted)';
        e.currentTarget.style.borderColor = 'var(--color-border-2)';
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </a>
  );
}

export default App;
