import React from "react";
import "./footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

function CustomFooter() {
  return (
    <div className="footer-container">
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon">
          <li>
            <a href="https://github.com/sudenurcevik" target="blank_">
              <img src={github} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sudenurcevik/" target="blank_">
              <img src={linkedin} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sudenurcevik/" target="blank_">
              <img src={instagram} />
            </a>
          </li>
        </ul>
        <div className="footer-text">Discover the future with me!</div>
      </footer>
    </div>
  );
}

export default CustomFooter;
