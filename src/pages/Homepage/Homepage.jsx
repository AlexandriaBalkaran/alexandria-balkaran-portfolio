import "./Homepage.scss";
import AboutSection from "../../components/AboutSection/AboutSection";
import Header from "../../components/Header/Header";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

function Homepage() {

  return (
    <>
      <Header></Header>
      <AboutSection></AboutSection>
      <ProjectsSection></ProjectsSection>
    </>
  );
}

export default Homepage;
