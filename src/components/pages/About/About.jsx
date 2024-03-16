import React from "react";
import "./About.css";
import wave from "../../../assets/goodbye.png";

const About = ({ windowSize }) => {
  return (
    <div className="container" id="about">
      <h2 className="heading">
        About me
        <img src={wave} />
      </h2>
      <div className="about-me-container">
        <div className="about-me-content">
          <p>
            I'm Sude, a passionate frontend developer based in Turkey. I have 2
            years of experience in crafting beautiful and responsive user
            interfaces using modern web technologies.
          </p>
          <p>
            My journey as a frontend developer began with curiosity then I found
            an internship. As I completed my internship journey successfully, I
            started working as Frontend Developer. Since then, I've worked on
            various projects, honing my skills in HTML, CSS, Material UI,
            JavaScript, Typescript, and a popular frontend framework React.
          </p>
          <p>
            I believe in the power of code to bring ideas to life and make a
            positive impact. Whether it's building intuitive user experiences or
            solving complex problems, I strive to create solutions that delight
            users and exceed expectations.
          </p>
          <p>
            Apart from coding, I enjoy reading and learning new languages a lot.
            I'm always eager to learn and explore new technologies, and I'm
            excited about the endless possibilities that lie ahead in the world
            of frontend development.
          </p>
        </div>
        <div className="skills-container">
          <div className="skills">
            <div className="skill-card" id="first-card">
              <h4>Hard Skills</h4>
              <ul>
                <li>HTML / CSS</li>
                <li>Tailwind</li>
                <li>Material UI</li>
                <li>JS / TS</li>
                <li>React</li>
              </ul>
            </div>
            <div className="skill-card" id="second-card">
              <h4>Soft Skills</h4>
              <ul>
                <li>Communication</li>
                <li>Problem-solving</li>
                <li>Creativity</li>
                <li>Teamwork</li>
              </ul>
            </div>
          </div>
          {windowSize.width > "992" && (
            <div className="circle-container">
              <div className="circle"></div>
              <div className="circle" id="circle-two"></div>
            </div>
          )}
        </div>
      </div>
      {windowSize.width <= "992" && (
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle" id="circle-two"></div>
        </div>
      )}
    </div>
  );
};

export default About;
