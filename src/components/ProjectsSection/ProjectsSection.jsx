import React, { useState, useRef, useEffect } from "react";
import "./ProjectsSection.scss";
import projects from "/src/assets/data/projects.json";

// Custom hook to detect if the screen is mobile
function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const videoRef = useRef(null);
  const isMobile = useIsMobile();

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) =>
          filter === "Full-Stack"
            ? project.techStack.includes("Node.js") ||
              project.techStack.includes("mySQL")
            : !project.techStack.includes("Node.js") &&
              !project.techStack.includes("mySQL")
        );

  const currentProject = filteredProjects[currentIndex];

  // Carousel navigation handlers (only used on tablet/desktop)
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation for carousel (only on desktop/tablet)
  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile, filteredProjects.length]);

  return (
    <section
      id="projects"
      className={`projects${isMobile ? "" : " projects--carousel"}`}
    >
      <h2 className="projects__title">Projects</h2>
      <p className="projects__subtitle">
        Check out some of my most notable projects.
      </p>
      <p className="projects__subtitle-instructions">
        Click to play live project demo.
      </p>

      <div className="projects__filter">
        {["All", "Full-Stack", "Front-End"].map((category) => (
          <button
            key={category}
            className={`projects__filter-button ${
              filter === category ? "active" : ""
            }`}
            onClick={() => {
              setFilter(category);
              setCurrentIndex(0);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {isMobile ? (
        // MOBILE: Show all projects in a column
        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <div className="project__card active" key={project.id}>
              <div className="project__media">
                <video
                  className="project__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="project__info">
                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>
                <ul className="project__tech-list">
                  {project.techStack.map((tech) => (
                    <li key={tech} className="project__tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // TABLET/DESKTOP: Show carousel
        currentProject && (
          <div className="carousel__wrapper">
            <button className="carousel__arrow left" onClick={handlePrev}>
              &#8592;
            </button>

            {/* Left Preview */}
            <div className="carousel__preview">
              <video
                muted
                loop
                playsInline
                key={
                  filteredProjects[
                    currentIndex === 0
                      ? filteredProjects.length - 1
                      : currentIndex - 1
                  ]?.id
                }
              >
                <source
                  src={
                    filteredProjects[
                      currentIndex === 0
                        ? filteredProjects.length - 1
                        : currentIndex - 1
                    ]?.videoSrc
                  }
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="project__card active">
              <div className="project__media">
                <video
                  className="project__video"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={currentProject.poster}
                  key={currentProject.id}
                  onClick={(e) => {
                    if (e.target.paused) {
                      e.target.play();
                    } else {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }
                  }}
                >
                  <source src={currentProject.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="project__info">
                <h3 className="project__title">{currentProject.title}</h3>
                <p className="project__description">
                  {currentProject.description}
                </p>
                <ul className="project__tech-list">
                  {currentProject.techStack.map((tech) => (
                    <li key={tech} className="project__tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Preview */}
            <div className="carousel__preview">
              <video
                muted
                loop
                playsInline
                key={
                  filteredProjects[(currentIndex + 1) % filteredProjects.length]
                    ?.id
                }
              >
                <source
                  src={
                    filteredProjects[
                      (currentIndex + 1) % filteredProjects.length
                    ]?.videoSrc
                  }
                  type="video/mp4"
                />
              </video>
            </div>

            <button className="carousel__arrow right" onClick={handleNext}>
              &#8594;
            </button>
          </div>
        )
      )}
    </section>
  );
}

export default ProjectsSection;
