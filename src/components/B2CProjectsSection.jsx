import React, { useState } from "react";
import data from "../data/eLearningProjects.json";
const handleIconClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const B2CProjectsSection = () => {
  const section = data.section;
  const projects = section.projects;

  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects container">
      {/* Section Heading */}
      <h2 className="projects-heading">{section.heading}</h2>

      {/* Section Image */}
      {section.image && (
        <img
          src={section.image}
          alt="elearning projects"
          width="60%"
          style={{ justifySelf: "center", display: "flex" }}
        />
      )}
      <div className="headerE">
        <div className="headerE-inner">
          <div className="headerE-title">
            {/* Subtitle */}
            <p className="headerE-subtitle">{section.subtitle}</p><br />
          </div>
          {/* Tags */}
          <div className="headerE-tags">
            {section.tags.map((tag, i) => (
              <span className="tag" key={i}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* Project Cards */}
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article
            className="project fade-slide"
            key={index}
            style={{ transitionDelay: `${index * 0.12}s` }}
          >
            <div className="icon-container">
              <h3>{project.title}</h3>
            </div>

            <p className="project-desc">{project.description}</p>

            <h4 className="project-subheading">Role & Responsibilities</h4>
            <ul className="responsibility-list">
              {project.roleAndResponsibilities.map((item, rIndex) => (
                <li key={rIndex}>{item}</li>
              ))}
            </ul>

            <p className="tech">
              <strong>Technology Stack:</strong>{" "}
              {project.technologyStack.join(", ")}
            </p>
          </article>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <button className="btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default B2CProjectsSection;
