import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import "./NavBar.scss";

function NavBar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     setIsMenuOpen(false);
  //   }
  // };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`nav-bar__container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-bar__left">
        <p className="nav-bar__logo" onClick={() => scrollToSection("home")}>
          <span className="highlight">A</span>lexandria{" "}
          <span className="highlight">B</span>alkaran
        </p>
      </div>

      <div className="nav-bar__right">
        {/* Desktop nav */}
        <div className="nav-bar__links">
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("projects")}>Projects</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>

        {/* Theme toggle */}
        <button onClick={toggleDarkMode} className="nav-bar__theme-toggle">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile menu button */}
        <button
          className="nav-bar__menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <div className="nav-bar__mobile-menu">
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("projects")}>Projects</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>
      )}
    </div>
  );
}

export default NavBar;
