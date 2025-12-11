import React from 'react';


const Header = () => (
<header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#"
          ><img src="/assets/KP-logo.png" alt="" className="logo" />Kamal Pandey</a
        >
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
);

export default Header;
