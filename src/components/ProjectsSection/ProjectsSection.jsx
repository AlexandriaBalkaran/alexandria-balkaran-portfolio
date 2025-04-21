import React, { useEffect } from "react";
import "./ProjectsSection.scss";

function ProjectsSection() {
  useEffect(() => {
    const videos = document.querySelectorAll(".project__video");
  
    const handleMouseEnter = (e) => e.target.play();
    const handleMouseLeave = (e) => {
      e.target.pause();
      e.target.currentTime = 0;
    };
  
    videos.forEach((video) => {
      video.addEventListener("mouseenter", handleMouseEnter);
      video.addEventListener("mouseleave", handleMouseLeave);
    });
  
    return () => {
      videos.forEach((video) => {
        video.removeEventListener("mouseenter", handleMouseEnter);
        video.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>Check out some of my most notable projects</p>
      <video
        className="project__video pour-decisions__video"
        muted
        loop
        playsInline
      >
        <source
          src="src/assets/projects/Pour Decisions video.mp4"
          type="video/mp4"
        />
      </video>
      <video
        className="project__video biz-bot__video"
        muted
        loop
        playsInline
      >
        <source
          src="src/assets/projects/Biz-Bot video.mp4"
          type="video/mp4"
          />
      </video>
      <video
        className="project__video snaps__video"
        muted
        loop
        playsInline
      >
        <source
          src="src/assets/projects/Snaps video.mp4"
          type="video/mp4"
          />
      </video>
      <video
        className="project__video insta-cards__video"
        muted
        loop
        playsInline
      >
        <source
          src="src/assets/projects/Insta-cards video.mp4"
          type="video/mp4"
          />
      </video>
      <video
        className="project__video harry-potter__video"
        muted
        loop
        playsInline
      >
        <source
          src="src/assets/projects/Harry-potter-game video.mp4"
          type="video/mp4"
          />
      </video>
    </section>
  );
}

export default ProjectsSection;
