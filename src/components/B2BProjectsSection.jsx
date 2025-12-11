import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/b2b.json";
const handleIconClick = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const B2BProjectsSection = () => {
  const { projects } = projectsData;
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section
      id="projects-b2b"
      className="projects container"
      aria-labelledby="projects-heading"
    >
      <h2 className="projects-heading">Web Projects</h2>
      <div className="project-grid">
        {visibleProjects.map((project, index) => (
          <article className={`project web fade-slide`} key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
            {/* Thumbnail */}
            {project.image && (
              <div className="project-thumb">
                <img src={project.image} alt={project.title} />
              </div>
            )}

            {/* Title + links */}
            <div className="icon-container">
              <h3>{project.title}</h3>

              {/* Only show icon if link exists */}
              {project.links && project.links.length > 0 && (
                <Link
                  to={project.links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  <img src="/assets/link-icon.svg" alt="Visit Website" />
                </Link>
              )}
            </div>

            {/* Description */}
            <p className="project-desc">{project.description}</p>

            {/* Role & Responsibilities */}
            <h4 className="project-subheading">Role & Responsibilities</h4>
            <ul className="responsibility-list">
              {project.roleAndResponsibilities.map((role, rIndex) => (
                <li key={rIndex}>{role}</li>
              ))}
            </ul>

            {/* Tech Stack */}
            <div className="tech">
              <strong>Tech Stack:</strong> {project.technologyStack.join(", ")}
            </div>

            {/* Tags */}
            <div className="project-tags">
              {project.tags.map((tag, tIndex) => (
                <span className="project-tag" key={tIndex}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      
       <button
          className="btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
    </section>
  );
};

export default B2BProjectsSection;
