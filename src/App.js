import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Experience from "./components/pages/Experience/Experience";
import Projects from "./components/pages/Projects/Projects";
import ContactMe from "./components/pages/ContactMe/ContactMe";
import CustomFooter from "./components/footer/CustomFooter";

const App = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isExperienceVisible, setIsExperienceVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Experience component's visibility check
      const experienceElement = document.getElementById("experience");
      if (experienceElement) {
        const top = experienceElement.getBoundingClientRect().top;
        const bottom = experienceElement.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        // If Experience component is within the viewport, set its visibility to true
        if (top < windowHeight && bottom > 0) {
          setIsExperienceVisible(true);
        } else {
          setIsExperienceVisible(false);
        }
      }
    };

    // Listen for scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home windowSize={windowSize} />
      <About windowSize={windowSize} />
      <Experience isVisible={isExperienceVisible} />
      <Projects />
      <ContactMe />
      <CustomFooter />
    </>
  );
};

export default App;
