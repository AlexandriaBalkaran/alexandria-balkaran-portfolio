import React from "react";
import "./AboutSection.scss";
import techStack from "/src/assets/data/techStack.json"; 

function AboutSection() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        After 6+ years in Sales & Marketing I've decided to pivot my career to focus on Software Engineering. I love tackling new challenges, learning new things,
        and turning ideas into reality. 
      </p>
      <p>When I'm not working, you can find me exploring new hiking trails, camping, fishing or reading.</p>
      <p>Let’s make something great!</p>

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
    </section>
  );
}

export default AboutSection;

