// Home.jsx
import React from "react";
import photo from "../../../assets/my-photo.jpg";
import "./Home.css"; // Ensure to have a corresponding CSS file
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import RoomIcon from "@mui/icons-material/Room";
import DownloadIcon from "@mui/icons-material/Download";

const Home = ({ windowSize }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered((prev) => !prev);
  };

  return (
    <div id="home" class="mycontainer">
      <section class="home-section">
        <div class="home">
          <img
            className="animated-image"
            src={photo}
            alt="My Photo"
            initial="initial"
            animate="animate"
          />
          <div class="intro">
            <div class="intro-text">
              <h1>Hello, I'm Sude Nur Çevik</h1>
              <p>
                I am a <b style={{ color: "#424874" }}>Frontend Developer</b> in
                Turkey.
                <RoomIcon
                  fontSize="large"
                  style={{
                    color: "red",
                    verticalAlign: "sub",
                    fontSize: "2.5rem",
                  }}
                />
              </p>
              <span className="explanation-text">
                {/* Passionate frontend developer, bringing digital visions to life
                with a blend of creativity and coding finesse. */}
                Frontend developer with a passion for crafting immersive user
                experiences and bringing digital visions to life. Let's create
                something amazing together!
              </span>
            </div>

            <div className="buttons">
              <a
                href="#projects"
                class={`explore-button ${isHovered ? "hovered" : ""}`}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                <span>My Projects</span>
                {isHovered ? (
                  <CodeOffIcon
                    className="icons"
                    style={
                      windowSize.width <= 768
                        ? { marginLeft: "0.2rem", fontSize: "1rem" }
                        : { marginLeft: "0.5rem" }
                    }
                  />
                ) : (
                  <CodeIcon
                    className="icons"
                    style={
                      windowSize.width <= 768
                        ? { marginLeft: "0.2rem", fontSize: "1rem" }
                        : { marginLeft: "0.5rem" }
                    }
                  />
                )}
              </a>
              <a
                class="download-button"
                href="/Sude_Nur_Çevik_Resume.pdf"
                target="_blank"
              >
                <span>See Resume</span>
                <DownloadIcon
                  className="icons"
                  style={
                    windowSize.width <= 768
                      ? { marginLeft: "0.2rem", fontSize: "1rem" }
                      : { marginLeft: "0.5rem" }
                  }
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
