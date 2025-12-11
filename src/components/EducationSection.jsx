import React from 'react';


const EducationSection = () => (
<section
        id="education"
        className="education container"
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading">Education & Certifications</h2>
        <div className="edu">
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Indira Gandhi National Open University</p>

          <h3>Professional Diploma in Multimedia & Web Design</h3>
          <p>Oxford Computer Software LTD (2006-2007)</p>

          <h3>Professional Affiliations</h3>
          <ul>
            <li>Web Accessibility Specialist — IAAP</li>
            <li>WCAG 2.1 & Accessibility Compliance Training</li>
            <li>Responsive Web Design & Mobile-First Design</li>
          </ul>
        </div>
      </section>
);

export default EducationSection;
