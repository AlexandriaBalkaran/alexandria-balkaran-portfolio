import React from "react";
import "./AboutSection.scss";
import techStack from "/src/assets/data/techStack.json"; 

function AboutSection() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        From Sales & Marketing to Software Engineering—rewiring my career to
        build, create, and solve. I love tackling challenges, learning fast,
        and turning ideas into reality. Let’s make something great!
      </p>

      <h3>Tech Stack</h3>
      <div className="tech-stack">
        {techStack.map((tech) => (
          <div key={tech.name} className="tech-card">
            <img src={tech.icon} alt={tech.name} className="tech-card__icon" />
            <div className="tech-card__info">
              <h4 className="tech-card__name">{tech.name}</h4>
              <p className="tech-card__description">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <h3>Skills and Expertise</h3>
      <p>UX/UI</p>
      <p></p>
      <p></p> */}
    </section>
  );
}

export default AboutSection;

