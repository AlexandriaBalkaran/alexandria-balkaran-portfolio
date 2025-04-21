import React, { useState } from "react";
import "./ProjectsSection.scss";
import projects from "/src/assets/data/projects.json"; 

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  const handleClick = (id) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Check out some of my most notable projects</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-box ${activeProject === project.id ? "active" : ""}`}
            onClick={() => handleClick(project.id)}
          >
            <h3>{project.title}</h3>
            {activeProject === project.id && (
              <div className="project-details">
                <p>{project.description}</p>
                <ul>
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
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
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
