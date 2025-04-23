import React from "react";
import { ArrowRight } from "lucide-react";
import "./Hero.scss";

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <h1>
        Hey, I'm <span className="highlight">Alexandria Balkaran</span>
      </h1>
      <p>
        After 6+ years working in Sales and Marketing, I’ve decided to switch
        gears and conquer the world of Software Engineering!
      </p>
      <div>
        <img
          className="hero__image-alexandria"
          src="src/assets/images/Alexandria-picture.JPG"
          alt="image of alexandria"
        ></img>
      </div>

      <div className="buttons">
        <button onClick={() => scrollTo("projects")}>
          View my work <ArrowRight size={16} />
        </button>
        <button onClick={() => scrollTo("contact")} className="outline">
          Get in touch
        </button>
      </div>
    </section>
  );
}

export default Hero;
