import React from 'react';

const handleIconClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
const ClientsSection = () => (
<section
        id="projects"
        className="projects container"
        aria-labelledby="projects-heading"
      >
        <h2 className="projects-heading">Organizations I've Worked With</h2>
        <div className="project-grid clients">
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/hm.jpg" alt="" />
            </div>
            <div className="icon-container">
              <h3>Happiest Minds Technologies</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.happiestminds.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>

            <p className="project-desc">
              Happiest Minds Technologies is a digital transformation and IT
              services company focused on creating innovative, scalable, and
              secure technology solutions. With expertise in AI, cloud,
              automation, and analytics, the company helps businesses accelerate
              digital adoption. Guided by the philosophy “Happiest People.
              Happiest Customers,” it delivers high-quality, customer-centric
              outcomes.
            </p>
          </article>

          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/project-3.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>Dabur India Pvt Ltd</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.dabur.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Dabur India Pvt Ltd is a cornerstone of India's FMCG sector,
              offering a diversified range of Ayurvedic health, personal care,
              and nutrition products built on decades of heritage. Combining
              traditional wisdom with rigorous quality standards, Dabur delivers
              products that meet everyday wellness and lifestyle needs. With
              widespread distribution and brand recognition, it remains
              committed to promoting health, sustainability, and consumer trust.
            </p>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/accenture.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>Accenture</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.accenture.com/in-en')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Accenture is a global professional services and consulting company
              specializing in digital transformation, strategy, technology, and
              operations. With deep expertise in cloud, AI, cybersecurity, and
              automation, Accenture helps organizations innovate and scale. The
              company partners with clients worldwide to deliver impactful,
              technology-driven business outcomes.
            </p>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/oracle.png" alt="" />
            </div>
            <div className="icon-container">
              <h3>Oracle</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.oracle.com/in/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Oracle is a global leader in enterprise software and cloud
              technology, offering innovative solutions for data management,
              business applications, and digital transformation. With its
              powerful Oracle Cloud Infrastructure and industry-specific
              applications, the company helps organizations optimize operations
              and scale efficiently. Oracle empowers businesses worldwide with
              secure, reliable, and high-performance technology.
            </p>
          </article>
          <article className="project infopro">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/infopro.jfif" alt="" />
            </div>

            <div className="icon-container">
              <h3>Infopro India</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.infoprolearning.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Infopro Learning is a global leader in talent development and
              corporate e-learning solutions, focused on delivering measurable
              performance and workforce transformation. The company offers a
              comprehensive suite of services including custom digital learning,
              learning technology platforms, and outsourced learning operations.
              With a data-driven approach and a strong commitment to innovation,
              Infopro Learning helps organizations upskill talent, enhance
              productivity, and achieve strategic business goals.
            </p>
          </article>
        </div>
      </section>
);

export default ClientsSection;
