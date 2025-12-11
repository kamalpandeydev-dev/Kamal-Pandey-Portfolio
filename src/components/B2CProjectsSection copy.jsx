import React from 'react';
import React, { useState } from "react";
import data from "../data/eLearningProjects.json";
const handleIconClick = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
const B2CProjectsSection = () => {
  const section = data.section;
  const projects = section.projects;

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
<section
        id="projects-b2c"
        className="projects container"
        aria-labelledby="projects-heading"
      >
        <h2 className="projects-heading">E-learning Projects</h2>
        <img
                src="/assets/eLearning.jpg"
                alt="elearning projects"
                width="60%"
                style={{justifySelf: "center", display: "flex"}}
              />
        <div className="headerE">
          <div className="headerE-inner">
            <div className="headerE-title">
              
              <p className="headerE-subtitle">
                Key e-learning and content-development projects based on XML,
                HTML, Flash, and related technologies.
              </p>
              <br />
            </div>
            <div className="headerE-tags" aria-label="Key competencies">
              <span className="tag">E-learning Projects</span>
              <span className="tag">HTML / CSS</span>
              <span className="tag">XML / Flash</span>
              <span className="tag">Storyline</span>
              <span className="tag">Online Learning Modules</span>
            </div>
          </div>
        </div>
        <div className="project-grid">
          <article className="project">
            <div className="icon-container">
              <h3>Articulate</h3>
            </div>
            <p className="project-desc">
              Development using Articulate Storyline and Rise, SCORM/xAPI, and
              LMS integration.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Work with visual storyboards, multimedia learning assets, and
                LMS content integration.
              </li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - Articulate Storyline & Rise, SCORM,
              xAPI, LMS platforms
            </p>
          </article>

          <article className="project">
            <div className="icon-container">
              <h3>Sun Micro System – Sun Project</h3>
            </div>
            <p className="project-desc">
              Project based on XML/HTML, generating XML/HTML files according to
              defined standards and guidelines.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Generate and Integration XML/HTML files as per standards and
                guidelines.
              </li>
            </ul>
            
            <p className="tech"><b>Technology Stack</b> - XML, HTML</p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>Knet (Knowledge Net Studio)</h3>
            </div>
            <p className="project-desc">
              This Project is from Thomson Netg (World Leading E-Learning Course
              Developer in World, now known as Skill soft). It consists of
              Hierarchy/Flash elements and my role is to create Hierarchy and to
              Map Audio and Visual Files to them.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Create hierarchy and map audio and visual files.</li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - Flash, audio/visual mapping
            </p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>TMIT</h3>
            </div>
            <p className="project-desc">
              This project is based on XML/HTML/Flash. My role is to create XML
              for the pages as per client requirement/Storyboard.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Create XML for pages as per client requirements/storyboard
              </li>
            </ul>
            
            <p className="tech"><b>Technology Stack</b> - XML, HTML, Flash</p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>Elsevier</h3>
            </div>
            <p className="project-desc">
              This project is based on HTML/Flash. My role is to create pages by
              HTML as per client provided storyboard.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Create pages in HTML based on client-provided storyboards.
              </li>
            </ul>
            
            <p className="tech"><b>Technology Stack</b> - HTML, Flash</p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>E-LFH</h3>
            </div>
            <p className="project-desc">
              Project is a part of Giuddnti Labs Learn exact suite, of which
              Packager and the Lobster are used by e-learning for Healthcare
              (Department of health in partnership with professional bodies and
              the NHS).
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                E-learning content development as part of suite components such
                as Packager and the Lobster.
              </li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - E-learning suite tools (Packager, the
              Lobster)
            </p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>Perkinswill</h3>
            </div>
            <p className="project-desc">
              Project is based on Graphic creation using Flash. My role is to
              create graphics and as per the SB provided.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Create graphics in Flash as per storyboard.</li>
            </ul>
            
            <p className="tech"><b>Technology Stack</b> - Flash, graphic design</p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>DELL</h3>
            </div>
            <p className="project-desc">
              Project is based on XML/HTML/Flash. My role is to create HTML
              Files for the pages as per client requirement/storyboard.
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>
                Create HTML files for pages as per client
                requirements/storyboard.
              </li>
            </ul>
            
            <p className="tech"><b>Technology Stack</b> - XML, HTML, Flash</p>
          </article>
          <article className="project">
            <div className="icon-container">
              <h3>Oracle</h3>
            </div>
            <p className="project-desc">
              Product Developer General Ledger, Alpha Brains (Worked on
              Generating XML Pages Audio Editing).
            </p>
            <p className="project-subheading">Role &amp; Responsibilities</p>
            <ul className="responsibility-list">
              <li>Generate XML pages and perform audio editing.</li>
            </ul>
            
            <p className="tech">
              <b>Technology Stack</b> - XML, audio editing tools
            </p>
          </article>
        </div>
      </section>
);
};

export default B2CProjectsSection;
