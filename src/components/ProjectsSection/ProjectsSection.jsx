import React, { useState } from "react";
import "./ProjectsSection.scss";
import projects from "/src/assets/data/projects.json"; 

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
  filter === "All"
    ? projects
    : projects.filter((project) =>
        filter === "Full-Stack"
          ? project.techStack.includes("Node.js") || project.techStack.includes("mySQL")
          : !project.techStack.includes("Node.js") && !project.techStack.includes("mySQL")
      );

  const handleClick = (id) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">Projects</h2>
      <p className="projects__subtitle">
        Check out some of my most notable projects
      </p>

      <div className="projects__filter">
        {['All', 'Full-Stack', 'Front-End'].map((category) => (
          <button
            key={category}
            className={`projects__filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project__card ${activeProject === project.id ? "active" : ""}`}
            onClick={() => handleClick(project.id)}
            
          >
            <div className="project__media">
              <video
                className="project__video"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            </div>
            <div className="project__info">
              <h3 className="project__title">{project.title}</h3>
              {activeProject === project.id && (
                <>
                  <p className="project__description">{project.description}</p>
                  <ul className="project__tech-list">
                    {project.techStack.map((tech) => (
                      <li key={tech} className="project__tech-item">{tech}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
