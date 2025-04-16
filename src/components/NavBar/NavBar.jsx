import "./NavBar.scss";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="nav-bar__container">
        <div className="nav-bar__button">
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("projects")}>Projects</p>
          {/* <p onClick={() => scrollToSection("career")}>Career</p> */}
        </div>
        <div className="nav-bar__button-contact">
          <p>Contact</p>
        </div>
      </div>
    </>
  );
}

export default NavBar;

