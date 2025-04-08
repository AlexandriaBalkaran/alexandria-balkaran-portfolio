import "./NavBar.scss";

function NavBar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div>
        <p onClick={() => scrollToSection("about")}>About</p>
        <p onClick={() => scrollToSection("projects")}>Projects</p>
        <p onClick={() => scrollToSection("career")}>Career</p>
      </div>
      <div>
        <p>Contact</p>
      </div>
    </>
  );
}

export default NavBar;
