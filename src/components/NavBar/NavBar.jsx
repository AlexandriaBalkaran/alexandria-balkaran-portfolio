import "./NavBar.scss";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="nav-bar__container">
      <div className="nav-bar__button">
        <p className="nav-bar__button-about" onClick={() => scrollToSection("about")}>About</p>
        <p onClick={() => scrollToSection("projects")}>Projects</p>
        <p onClick={() => scrollToSection("contact")}>Contact</p>
      </div>
    </div>
  );
}

export default NavBar;
