import React from "react";
import "./AboutSection.scss";
import techStack from "/src/assets/data/techStack.json"; 

function AboutSection() {
  return (
    <section id="about">
      <h2>About</h2>
      <p className="about__text">
      Sales & Marketing pro turned Software Engineer with a curious mind and a get-it-done spirit. 
      After years of working in sales and marketing within the tech space, I decided it was time 
      to better myself and learn to code.
      </p>
      <p className="about__text">
        I love tackling new challenges, learning new things,
        and turning ideas into reality. 
      </p>
      <p className="about__text">When I'm not working, you can find me exploring new hiking trails, camping, fishing or reading.</p>
      <p className="about__text">Let’s make something great!</p>

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

