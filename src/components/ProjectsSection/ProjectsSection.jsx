// import React, { useState } from "react";
// import "./ProjectsSection.scss";
// import projects from "/src/assets/data/projects.json";

// function ProjectsSection() {
//   const [activeProject, setActiveProject] = useState(null);
//   const [filter, setFilter] = useState("All");

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((project) =>
//           filter === "Full-Stack"
//             ? project.techStack.includes("Node.js") ||
//               project.techStack.includes("mySQL")
//             : !project.techStack.includes("Node.js") &&
//               !project.techStack.includes("mySQL")
//         );

//   const handleClick = (id) => {
//     setActiveProject((prev) => (prev === id ? null : id));
//   };

//   return (
//     <section id="projects" className="projects">
//       <h2 className="projects__title">Projects</h2>
//       <p className="projects__subtitle">
//         Check out some of my most notable projects
//       </p>
//       <p className="projects__subtitle-instructions">
//         Hover over the project image for a live project demo
//       </p>

//       <div className="projects__filter">
//         {["All", "Full-Stack", "Front-End"].map((category) => (
//           <button
//             key={category}
//             className={`projects__filter-button ${
//               filter === category ? "active" : ""
//             }`}
//             onClick={() => setFilter(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="projects__grid">
//         {filteredProjects.map((project, index) => (
//           <div
//             key={project.id}
//             className={`project__card ${
//               activeProject === project.id ? "active" : ""
//             }`}
//             onClick={() => handleClick(project.id)}
//           >
//             <div className="project__media">
//               <video
//                 className="project__video"
//                 muted
//                 loop
//                 playsInline
//                 onMouseEnter={(e) => e.target.play()}
//                 onMouseLeave={(e) => {
//                   e.target.pause();
//                   e.target.currentTime = 0;
//                 }}
//               >
//                 <source src={project.videoSrc} type="video/mp4" />
//               </video>
//             </div>
//             <div className="project__info">
//               <h3 className="project__title">{project.title}</h3>
//               <p className="project__description">{project.description}</p>
//               <ul className="project__tech-list">
//                 {project.techStack.map((tech) => (
//                   <li key={tech} className="project__tech-item">
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;


// import React, { useState, useRef, useEffect } from "react";
// import "./ProjectsSection.scss";
// import projects from "/src/assets/data/projects.json";

// function ProjectsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [filter, setFilter] = useState("All");
//   const videoRef = useRef(null);

//   const filteredProjects =
//     filter === "All"
//       ? projects
//       : projects.filter((project) =>
//           filter === "Full-Stack"
//             ? project.techStack.includes("Node.js") ||
//               project.techStack.includes("mySQL")
//             : !project.techStack.includes("Node.js") &&
//               !project.techStack.includes("mySQL")
//         );

//   const currentProject = filteredProjects[currentIndex];

//   const handlePrev = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? filteredProjects.length - 1 : prev - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) =>
//       prev === filteredProjects.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowLeft") handlePrev();
//     if (e.key === "ArrowRight") handleNext();
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <section id="projects" className="projects projects--carousel">
//       <h2 className="projects__title">Projects</h2>
//       <p className="projects__subtitle">
//         Check out some of my most notable projects
//       </p>
//       <p className="projects__subtitle-instructions">
//         Hover to play video. Swipe, use arrows or keyboard to scroll.
//       </p>

//       <div className="projects__filter">
//         {["All", "Full-Stack", "Front-End"].map((category) => (
//           <button
//             key={category}
//             className={`projects__filter-button ${
//               filter === category ? "active" : ""
//             }`}
//             onClick={() => {
//               setFilter(category);
//               setCurrentIndex(0);
//             }}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {currentProject && (
//         <div className="carousel__wrapper">
//           <button className="carousel__arrow left" onClick={handlePrev}>
//             &#8592;
//           </button>

//           <div className="carousel__preview">
//             <video muted loop playsInline>
//               <source
//                 src={
//                   filteredProjects[
//                     currentIndex === 0
//                       ? filteredProjects.length - 1
//                       : currentIndex - 1
//                   ]?.videoSrc
//                 }
//                 type="video/mp4"
//               />
//             </video>
//           </div>

//           <div className="project__card active">
//             <div className="project__media">
//               <video
//                 className="project__video"
//                 ref={videoRef}
//                 muted
//                 loop
//                 playsInline
//                 onMouseEnter={(e) => e.target.play()}
//                 onMouseLeave={(e) => {
//                   e.target.pause();
//                   e.target.currentTime = 0;
//                 }}
//                 key={currentProject.id}
//               >
//                 <source src={currentProject.videoSrc} type="video/mp4" />
//               </video>
//             </div>
//             <div className="project__info">
//               <h3 className="project__title">{currentProject.title}</h3>
//               <p className="project__description">
//                 {currentProject.description}
//               </p>
//               <ul className="project__tech-list">
//                 {currentProject.techStack.map((tech) => (
//                   <li key={tech} className="project__tech-item">
//                     {tech}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="carousel__preview">
//             <video muted loop playsInline>
//               <source
//                 src={
//                   filteredProjects[
//                     (currentIndex + 1) % filteredProjects.length
//                   ]?.videoSrc
//                 }
//                 type="video/mp4"
//               />
//             </video>
//           </div>

//           <button className="carousel__arrow right" onClick={handleNext}>
//             &#8594;
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }

// export default ProjectsSection;


