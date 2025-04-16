// import "./NavBar.scss";

// function NavBar() {
//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     section.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <div className="nav-bar__container">
//         <div className="nav-bar__button">
//           <p onClick={() => scrollToSection("about")}>About</p>
//           <p onClick={() => scrollToSection("projects")}>Projects</p>
//           {/* <p onClick={() => scrollToSection("career")}>Career</p> */}
//         </div>
//         <div className="nav-bar__button-contact">
//           <p>Contact</p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import "./NavBar.scss";
import ContactSection from "../ContactSection/ContactSection";

function NavBar() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <>
      <div className="nav-bar__container">
        <div className="nav-bar__button">
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("projects")}>Projects</p>
        </div>
        <div className="nav-bar__button-contact">
          <p onClick={toggleContact}>Contact</p>
        </div>
      </div>

      {/* Show ContactSection below nav bar, pushing content down */}
      {isContactOpen && (
        <div className="contact-drawer">
          <ContactSection />
        </div>
      )}
    </>
  );
}

export default NavBar;
