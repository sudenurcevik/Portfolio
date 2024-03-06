import React, { useState, useEffect } from "react";
import logo from "../../assets/logo2.png";
import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const handleToggling = () => {
    setToggle((current) => !current);
    document.body.style.overflow = toggle ? 'auto' : 'hidden';
  };

  const handleScroll = () => {
    const scrolled = window.scrollY > 10;
    setIsTransparent(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setToggle(false);
  };

  return (
    <div className={`body ${isTransparent ? "transparent" : ""}`}>
      <nav>
        <a className="logo" href="#">
          <img src={logo} alt="Logo" />
        </a>
        <div
          className={toggle ? "hamburger toggle" : "hamburger"}
          onClick={handleToggling}
        >
          <div className="line" id="line1"></div>
          <div className="line" id="line2"></div>
          <div className="line" id="line3"></div>
        </div>
        <ul className={toggle ? "nav-links open" : "nav-links"}>
          <li className={toggle ? "fade" : ""}>
            <a href="#" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className={toggle ? "fade" : ""}>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>

          <li className={toggle ? "fade" : ""}>
            <a href="#experience" onClick={handleLinkClick}>
              Experience
            </a>
          </li>
          <li className={toggle ? "fade" : ""}>
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li className={toggle ? "fade" : ""}>
            <a href="#contact" onClick={handleLinkClick}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
