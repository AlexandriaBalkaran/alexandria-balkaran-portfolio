import "./Homepage.scss";
import AboutSection from "../../components/AboutSection/AboutSection";
import Header from "../../components/Header/Header";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";

function Homepage() {

  return (
    <>
      <Header></Header>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>
    </>
  );
}

export default Homepage;
