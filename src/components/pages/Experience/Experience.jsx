import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";
import work from "../../../assets/ui-design.png";
import college from "../../../assets/university.png";

const Experience = ({ isVisible }) => {
  const experienceRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    console.log(isVisible);
    if (isVisible && !animationStarted) {
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
          <div className="job-container left-container">
            <img src={college} alt="college" />
            <div className="text-box">
              <h2>Bachelor of Computer Engineering Graduation</h2>
              <h3>Izmir Institute of Technology</h3>
              <small>October 2019 - June 2024</small>
              <p className="description">
                I successfully completed my Bachelor of Computer Engineering degree with a GPA of 3.45.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="job-container right-container">
            <img src={work} alt="work" />
            <div className="text-box">
              <h2>Lead Frontend Developer</h2>
              <h3>DeltaSmart Technologies</h3>
              <small>September 2023 - Present</small>
              <p className="description">
                I was promoted to lead frontend developer due to my outstanding performance. Besides my previous responsibilities, I oversee deployment processes, conduct code reviews, and manage GitHub branches for my team. Additionally, I actively participate in client meetings and play a crucial role in updating legacy code to current technologies.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="job-container left-container">
            <img src={work} alt="work" />
            <div className="text-box">
              <h2>Frontend Developer</h2>
              <h3>DeltaSmart Technologies</h3>
              <small>September 2022 - September 2023</small>
              <p className="description">
                After a successful internship, I joined DeltaSmart Technologies as a frontend developer. My focus includes developing dynamic digital solutions tailored to modern business needs. I lead projects such as ISG, Disaster Notification, and Real Estate platforms, utilizing innovative frontend technologies to enhance user experiences.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="job-container right-container">
            <img src={work} alt="work" />
            <div className="text-box">
              <h2>Frontend Developer Intern</h2>
              <h3>DeltaSmart Technologies</h3>
              <small>June 2022 - October 2022</small>
              <p className="description">
                During my internship, I collaborated with backend and mobile developers to create a comprehensive company management system. I successfully completed the internship, gaining valuable experience in frontend development.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
          <div className="job-container left-container">
            <img src={college} alt="college" />
            <div className="text-box">
              <h2>Bachelor of Computer Engineering Beginnings</h2>
              <h3>Izmir Institute of Technology</h3>
              <small>October 2019 - June 2022</small>
              <p className="description">
                I began my journey at Izmir Institute of Technology in 2019, completing preparatory school before starting my major in Computer Engineering.
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
