import React from 'react';


const ContactSection = () => (
<section
        id="contact"
        className="contact container"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading">Contact</h2>
        
        <p className="email">
          Email:
          <a href="mailto:kamalpandey.dev@gmail.com"
            >kamalpandey.dev@gmail.com</a
          >
        </p>
        <p className="phone">
          Phone: <a href="tel:+919266306689">+91 92663 06689</a>
        </p>
      </section>
);

export default ContactSection;
