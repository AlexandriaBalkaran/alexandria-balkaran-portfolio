// import "./ProjectsSection.scss";

// function ProjectsSection() {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>
//       <video
//           className="pour-decisions__video"
//           width="100%"
//           height="auto"
//           loop
//           muted
//           playsInline
//         >
//           <source
//             src="src/assets/projects/Pour Decisions video.mp4"
//             type="video/mp4"
//           />
//         </video>
//     </section>
//   );
// }

// export default ProjectsSection;

import React, { useEffect } from "react";
import "./ProjectsSection.scss";

function ProjectsSection() {
  useEffect(() => {
    const video = document.querySelector(".pour-decisions__video");
    if (!video) return;

    const handleMouseEnter = () => video.play();
    const handleMouseLeave = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("mouseenter", handleMouseEnter);
    video.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      video.removeEventListener("mouseenter", handleMouseEnter);
      video.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <video
        className="pour-decisions__video"
        width="100%"
        height="auto"
        muted
        loop
        playsInline
      >
        <source
          src="src/assets/projects/Pour Decisions video.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default ProjectsSection;
