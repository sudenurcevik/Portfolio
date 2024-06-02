import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";
import work from "../../../assets/ui-design.png";
import college from "../../../assets/university.png";

const Experience = ({ isVisible }) => {
  const experienceRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    console.log(isVisible);
    if (isVisible) {
      const jobContainers = document.querySelectorAll(".job-container");
      console.log(jobContainers);
      jobContainers.forEach((container, index) => {
        console.log(container);
        container.classList.add("animate");
      });
      setAnimationStarted(true);
    }
  }, [isVisible, animationStarted]);

  return (
    <div className="experience-container" ref={experienceRef} id="experience">
      <div className="container">
        <h2 className="heading">Experiences</h2>
        <div className="timeline">
          <div className="job-container right-container">
            <img src={work} alt="work" />
            <div className="text-box">
              <h2>Lead Frontend Developer</h2>
              <h3>DeltaSmart Technologies</h3>
              <small>Sep 2023 - Present</small>
              <p className="description">
                After my good work, I was promoted to the position of lead
                frontend developer. In addition to my previous responsibilities,
                I am now responsible for the deployment processes of all
                projects. I also do code review and github branch management for
                the team I manage. On the other hand, I have a very important
                role in the development process of projects by regularly
                attending meetings with customers. As one of the most important,
                I am also responsible for adapting old source codes to current
                technologies.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="job-container left-container">
            <img src={work} alt="work" />
            <div className="text-box">
              <h2>Frontend Developer</h2>
              <h3>DeltaSmart Technologies</h3>
              <small>Sep 2022 - Sep 2023</small>
              <p className="description">
                After a successful internship, I started working at DeltaSmart
                Technologies as a front-end developer. I specialize in crafting
                dynamic digital solutions tailored to modern business needs. My
                primary focus lies in spearheading three key projects: ISG,
                Disaster Notification, and Real Estate projects. Through
                collaborative efforts and innovative frontend technologies, I
                contribute to the development of intuitive and user-centric
                platforms that redefine industry standards and empower users
                with seamless experiences.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="job-container right-container">
            <img src={work} alt="work" />
            <div className="text-box">
              <h2>Frontend Developer Intern</h2>
              <h3>DeltaSmart Technologies</h3>
              <small>Jun 2022 - Oct 2022</small>
              <p className="description">
                I started my internship as frontend developer. I developed a
                company management system with my team that includes a backend
                developer and a mobile developer. I successfully completed my
                internship.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="job-container left-container">
            <img src={college} alt="college" />
            <div className="text-box">
              <h2>Bachelor of Computer Engineering</h2>
              <h3>Izmir Institute of Technology</h3>
              <small>Oct 2019 - Present</small>
              <p className="description">
                In 2019, I started preparatory school at Izmir Institute of
                Technology and completed it successfully within a year. Then, I
                started my major, Computer Engineering.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="start-point">
            <div className="point"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
