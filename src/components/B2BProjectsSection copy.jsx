import React from 'react';

const handleIconClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
const B2BProjectsSection = () => (
  <>
<section
        id="projects-b2b"
        className="projects container"
        aria-labelledby="projects-heading"
      >
        <h2 className="projects-heading">Web Projects</h2>
        <div className="project-grid">
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/snacksCom.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>PepsiCo Snacks.com</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.snacks.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              PepsiCo, Inc. is an American multinational food, snack, and
              beverage corporation. PepsiCo's business encompasses all aspects
              of the food and beverage market, including manufacturing,
              distribution, and marketing of its products.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Responsible for UI/Frontend development.</li>
              <li>
                Handling the UI development and code implementation in ReactJS.
              </li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - HTML, SCSS, MUI, ADA validation and
              fixes, Emailer development with email client compatibility
              supporting code, Web Optimization
            </p>
            <div className="project-tags">
              <span className="project-tag">ReactJS</span>
              <span className="project-tag">E-commerce</span>
              <span className="project-tag">Accessibility</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/epop.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>PepsiCo – EQPLUS</h3>
            </div>
            <p className="project-desc">
              ePOP/EQPLUS is an internal PepsiCo application used to sell
              equipment to various units within the PepsiCo organization.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Responsible for UI/Frontend development.</li>
              <li>
                Handling the UI development and code implementation in ReactJS.
              </li>
            </ul>

            
            <p className="tech">
              <b>Technology Stack:</b> HTML, SCSS, React Bootstrap, Web
              Optimization, Fundamental ReactJS, Figma, React Bootstrap,
              Responsive
            </p>
            <div className="project-tags">
              <span className="project-tag">ReactJS</span>
              <span className="project-tag">Internal Tool</span>
              <span className="project-tag">React Bootstrap</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/snacks2you.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>PepsiCo Snackstoyoucanada</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://shop.snackstoyoucanada.ca/home')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              PepsiCo, Inc. is an American multinational food, snack, and
              beverage corporation. PepsiCo's business encompasses all aspects
              of the food and beverage market, including manufacturing,
              distribution, and marketing of its products.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Responsible for UI/Frontend development.</li>
              <li>
                Handling the UI development and code implementation in ReactJS.
              </li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - HTML, SCSS, MUI, ADA validation and
              fixes, Emailer development with email client compatibility
              supporting code, Web Optimization
            </p>
            <div className="project-tags">
              <span className="project-tag">ReactJS</span>
              <span className="project-tag">Accessibility</span>
              <span className="project-tag">Emailers</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/continental.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>Continental / LPE Project</h3>
            </div>
            <p className="project-desc">
              Continental LPE is a catalogue generation project for Continental
              Tyre's domain. Catalogues are generated for different regions
              based on different templates.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Responsible for UI development for the catalogue.</li>
              <li>
                Handling the UI development and implementation in PDFreactor.
              </li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - HTML, CSS, Print media supporting code,
              PDFreactor
            </p>
            <div className="project-tags">
              <span className="project-tag">Catalogue Generation</span>
              <span className="project-tag">Print Media</span>
              <span className="project-tag">Tyre Domain</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/nbb.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>Nielsen Brand Bank</h3>
            </div>
            <p className="project-desc">
              Nielsen Brandbank is a world-leading provider of product content
              for e-commerce sites and merchandising.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Responsible for UI/Frontend development.</li>
              <li>
                Handling the UI development and implementation for the
                application.
              </li>
            </ul>

            
            <p className="tech">
              <b>Technology Stack:</b> HTML, CSS, ADA validation, Web
              Optimization, Adobe XD
            </p>
            <div className="project-tags">
              <span className="project-tag">Product Content</span>
              <span className="project-tag">E-commerce</span>
              <span className="project-tag">Accessibility</span>
            </div>
          </article>

          
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/b2bB2c.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>Sony</h3>
            </div>
            <p className="project-desc">
              Sony PIM system is used for product enrichment and publishing
              enrichment of product information from multiple channels and
              exporting to multiple outbound channels.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Responsible for UI development for PDF generation in Pimcore.
              </li>
              <li>
                Handling the UI development for PDF generation in Pimcore.
              </li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML, CSS, Printmedia supporting code,
              wkhtmltopdf
            </p>
            <div className="project-tags">
              <span className="project-tag">PIM</span>
              <span className="project-tag">PDF Generation</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img
                src="/assets/northgatemarket.jpg"
                alt="Northgate Market"
                width="70%"
              />
            </div>

            <div className="icon-container">
              <h3>Northgate Market</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.northgategiftcard.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Sony PIM system is used for product enrichment and publishing
              enrichment of product information from multiple channels and
              exporting to multiple outbound channels.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Responsible for UI/Frontend development.</li>
            </ul>

            <p className="tech"><b>Technology Stack:</b> HTML, CSS, JS, GIT</p>
            <div className="project-tags">
              <span className="project-tag">E-commerce</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/b2bB2c.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>Multi-client B2B &amp; B2C Applications</h3>
            </div>
            <p className="project-desc">
              <b>Projects:</b> jjkeller Trip <b>|</b> Butler Supply
              <b>|</b> Carlsberg <b>|</b> PepsiCo Smart Shelf <b>|</b> Ingram
              <b>|</b> Continental Pim <b>|</b> Pipelife <b>|</b> Franklin &amp;
              Young <b>|</b> Alshaya <b>|</b> Pepsico POC<b>|</b>
              CASA(Continental)
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Responsible for UI development and UI development support.
              </li>
              <li>
                Handling the UI development and implementation for the
                applications.
              </li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML, CSS, JavaScript, jQuery, Web
              Optimization
            </p>
            <div className="project-tags">
              <span className="project-tag">B2B</span>
              <span className="project-tag">B2C</span>
              <span className="project-tag">Web Applications</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/realfruitpower.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>Dabur Real Fruit Power</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.realfruitpower.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              A web-based consumer-facing product site for Real Fruit Power,
              featuring content, interactive experiences, and product-related
              engagement. Some URLs include jQuery animations and parallax
              effects. Includes desktop and mobile versions.
            </p>

            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Developed UI layouts based on PSD/storyboards.</li>
              <li>
                Implemented responsiveness for desktop, tablet, and mobile
                views.
              </li>

              <li>
                Performed HTML, CSS, JS updates and fixes in a .NET environment.
              </li>

              <li>
                Designed and edited graphics such as banners and UI elements.
              </li>

              <li>Implemented animations (jQuery + CSS3)</li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML5, CSS3, JavaScript, jQuery, Parallax
              scrolling effects, Photoshop graphics, Responsive design,
              Bootstrap
            </p>
            <div className="project-tags">
              <span className="project-tag">Digital Website</span>
              <span className="project-tag">Web Design & Front-end</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/daburhoney.webp" alt="" />
            </div>

            <div className="icon-container">
              <h3>Dabur Dabur Honey</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.daburhoney.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Corporate product website under Dabur's digital ecosystem,
              content-rich and designed for marketing, product information, and
              consumer engagement.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Developed UI layouts based on PSD/storyboards.</li>
              <li>
                Implemented responsiveness for desktop, tablet, and mobile
                views.
              </li>

              <li>UI/UX design and development.</li>
              <li>Responsive layout development.</li>
              <li>Integrated front-end code into .NET environment.</li>
              <li>Updated HTML/CSS and JavaScript functionality.</li>
              <li>Worked on banners, icons, and promotional graphics.</li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML5, CSS3, JavaScript, jQuery,
              Bootstrap (framework reference), Responsive/mobile-first
              development, Photoshop (design assets), Accessibility Fixes,
              Performance Optimization, Lighthouse Audits
            </p>
            <div className="project-tags">
              <span className="project-tag">Digital Website</span>
              <span className="project-tag">Web Design & Front-end</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/realactiv.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>Dabur Real Activ</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.realactiv.com')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              A web-based consumer-facing product site for Real Fruit Power,
              featuring content, interactive experiences, and product-related
              engagement. Some URLs include jQuery animations and parallax
              effects. Includes desktop and mobile versions.
            </p>

            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Developed UI layouts based on PSD/storyboards.</li>
              <li>
                Implemented responsiveness for desktop, tablet, and mobile
                views.
              </li>

              <li>
                Performed HTML, CSS, JS updates and fixes in a .NET environment.
              </li>

              <li>
                Designed and edited graphics such as banners and UI elements.
              </li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML5, CSS3, JavaScript, Photoshop
              graphics, Responsive design, Bootstrap
            </p>
            <div className="project-tags">
              <span className="project-tag">Digital Website</span>
              <span className="project-tag">Web Design & Front-end</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/odomosprotect.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>Dabur Odomos Protect</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.odomosprotect.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              Product marketing website for Dabur Odomos, aimed at enhancing
              consumer awareness, brand presence, and providing product
              education.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Created responsive pages from PSD designs.</li>
              <li>Edited HTML, CSS, JS in existing .NET codebase.</li>
              <li>Built UI components and fixed UI issues.</li>
              <li>Contributed to animations and interactive content.</li>
              <li>
                Designed and updated digital assets (banners, icons,
                micro-interactions).
              </li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML5, CSS3, JS, jQuery, Responsive
              design frameworks, .NET environment deployment, Photoshop-based
              asset creation
            </p>
            <div className="project-tags">
              <span className="project-tag">Digital Website</span>
              <span className="project-tag">Web Design & Front-end</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/daburchyawanprash.png" alt="" />
            </div>

            <div className="icon-container">
              <h3>Dabur Chyawanprash</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.daburchyawanprash.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              An promotional e-content site focused on Ayurvedic health with
              interactive informational modules and heavy jQuery animation
              involvement.
            </p>

            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Developed animated UI experiences using jQuery and CSS3
                animations.
              </li>
              <li>Built responsive screens for desktop and mobile.</li>
              <li>
                Designed and updated front-end graphics and interface elements.
              </li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML5, CSS3, JavaScript, jQuery,
              Parallax/animation, Photoshop and UI visual tools
            </p>
            <div className="project-tags">
              <span className="project-tag">Digital Website</span>
              <span className="project-tag">Web Design & Front-end</span>
            </div>
          </article>
          <article className="project">
            <div className="project-thumb" aria-hidden="true">
              <img src="/assets/hoodaki.jpg" alt="" />
            </div>

            <div className="icon-container">
              <h3>Hoodaki</h3>
              <div
                className="icon"
                onClick={() => handleIconClick('https://www.hoodaki.com/')}
              >
                
                <img src="/assets/link-icon.svg" alt="Visit Website" />
              </div>
            </div>
            <p className="project-desc">
              A commercial web platform—likely a booking or travel service
              portal. Includes responsive website and subpages.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Front-end UI development and layout structuring.</li>
              <li>Creation and refinement of UI components.</li>
              <li>
                Ensured browser compatibility and responsive layout across
                devices.
              </li>
            </ul>

            <p className="tech">
              <b>Technology Stack:</b> HTML, CSS, JavaScript, Photoshop, Flash
            </p>
            <div className="project-tags">
              <span className="project-tag">Digital Website</span>
              <span className="project-tag">Flash animations</span>
            </div>
          </article>
        </div>
        <a className="btn" href="#">See All Projects</a>
      </section>
      </>
);

export default B2BProjectsSection;
