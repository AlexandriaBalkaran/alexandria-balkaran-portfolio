import React, { useState, useEffect } from "react";
import "./Homepage.scss";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

function Homepage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.title = "Alexandria Balkaran | Web Developer";
  }, []);

  return (
    <div className={`homepage__container ${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero></Hero>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default Homepage;

