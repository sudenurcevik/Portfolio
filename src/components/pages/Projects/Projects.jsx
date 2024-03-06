// Projects.jsx

import React, { useState } from "react";
import githubIcon from "../../../assets/github.png";
import externalLinkIcon from "../../../assets/expand-arrows.png";
import ImageSlider from "../../image-slider/ImageSlider";
import icon from "../../../assets/idea.png";
import ProjectsList from "./ProjectsList";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="container" id="projects">
      <h2 className="heading">
        Projects <img src={icon} />
      </h2>
      <div className="projects-container">
        {ProjectsList.projects.map((prj, index) => {
          console.log(index);
          return (
            <div
              className={index % 2 === 0 ? "project" : "project left"}
              style={index === 0 ? { marginTop: "10rem" } : null}
              key={index}
            >
              <div
                className={
                  index % 2 === 0 ? "project-info" : "project-info info-right"
                }
              >
                <div>
                  <h2>{prj.title}</h2>
                  <p>{prj.explanation}</p>
                </div>
                <div className="project-links">
                  <a
                    href={prj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a
                    href={prj.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={externalLinkIcon} alt="External Link" />
                  </a>
                </div>
              </div>
              <div className="project-images">
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "10/3",
                    margin: "0 auto",
                    position: "relative",
                  }}
                >
                  <ImageSlider imageUrls={prj.urls} prjIndex={index} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
