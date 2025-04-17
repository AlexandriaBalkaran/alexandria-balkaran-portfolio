import "./ContactSection.scss";

function ContactSection() {
  return (
    <section id="contact">
      <h3>Reach out and let's have a chat</h3>
      <div className="contact__icons-container">
        <p>
          <a href="mailto:alexandria.balkaran@gmail.com">
            <img src="/images/Email-icon.svg" alt="email icon"></img>
          </a>
        </p>

        <p>
          <a
            href="https://www.linkedin.com/in/alexandria-balkaran/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Linkedin-icon.svg" alt="linkedin icon"></img>
          </a>
        </p>

        <p>
          <a
            href="https://github.com/AlexandriaBalkaran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/Github-icon.svg" alt="github icon"></img>
          </a>
        </p>
      </div>
    </section>
  );
}

export default ContactSection;
