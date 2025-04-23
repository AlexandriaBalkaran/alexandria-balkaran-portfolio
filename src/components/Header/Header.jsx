import "./Header.scss";
import NavBar from "../NavBar/NavBar";

function Header({ darkMode, toggleDarkMode }) {
  return (
    <>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}

export default Header;
