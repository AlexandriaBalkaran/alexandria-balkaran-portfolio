import "./ContactSection.scss";

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Reach out via email or find me on LinkedIn and GitHub.</p>
      <p>I'm always open to discussing new projects, creative ideas or opportunities for collaboration.</p>
      <div className="contact__icons-container">
        <a href="mailto:alexandria.balkaran@gmail.com">
          <img src="/images/Email-icon.svg" alt="email icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/alexandria-balkaran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/Linkedin-icon.svg" alt="linkedin icon" />
        </a>

        <a
          href="https://github.com/AlexandriaBalkaran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/Github-icon.svg" alt="github icon" />
        </a>
      </div>
      <div>
        <img
          className="hero__image-alexandria"
          src="src/assets/images/Alexandria-selfie.jpg"
          alt="image of alexandria"
        ></img>
      </div>
      <p>⚲ Toronto, Canada</p>
      <p>Let's connect!</p>
    </section>
  );
}

export default ContactSection;
