import React from "react";
import "./AboutSection.scss";
import techStack from "/src/assets/data/techStack.json"; 

function AboutSection() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
      Former Sales & Marketing pro turned Software Engineer with a curious mind and a get-it-done spirit. After years of working in marketing within the tech space, I decided it was time follow my dreams and learn to code.
      </p>
      <p>
        I love tackling new challenges, learning new things,
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

