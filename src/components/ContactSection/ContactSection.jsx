import "./ContactSection.scss";

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="contact__text">Reach out via email or find me on LinkedIn and GitHub.</p>
      <div className="contact__icons-container">
        <a href="mailto:alexandria.balkaran@gmail.com">
          <img className="contact__icons" src="/images/Email-icon.svg" alt="email icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/alexandria-balkaran/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__icons" src="/images/Linkedin-icon.svg" alt="linkedin icon" />
        </a>

        <a
          href="https://github.com/AlexandriaBalkaran"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact__icons" src="/images/Github-icon.svg" alt="github icon" />
        </a>
      </div>
      <p className="contact__text">I'm always open to discussing new projects, creative ideas or opportunities for collaboration.</p>
      <div className="contact__image-alexandria--center">
        <img
          className="contact__image-alexandria"
          src="src/assets/images/Alexandria-selfie.jpg"
          alt="image of alexandria"
        ></img>
      </div>
      <p className="contact__text">⚲ Toronto, Canada</p>
      <p className="contact__text">Let's connect!</p>
    </section>
  );
}

export default ContactSection;
