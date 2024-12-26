import React from "react";
import "./About.css";
import Pic from '../../../src/assets/pic.jpg';
const About = () => {
  return (
    <div id="about" className="about-me">
      <div className="container">
        <h1>About <span>Me</span></h1>
        <div className="sidebar" >
          <div className="left">
            <div className="profile-section">
              <img
                src={Pic}
                alt="Arpit"
                className="profile-img"
              />
            </div>
          </div>
          <div className="right">
            <div className="content-section">
              <p>
                My passion for frontend development is not only reflected in my
                extensive experience but also in the enthusiasm and dedication I bring
                to each project.
              </p>

              <div className="skills">
                <div className="skill">
                  <span>HTML & CSS</span>
                  <div className="skill-bar html"></div>
                </div>
                <div className="skill">
                  <span>React JS</span>
                  <div className="skill-bar react"></div>
                </div>
                <div className="skill">
                  <span>JavaScript</span>
                  <div className="skill-bar javascript"></div>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <h2>Fresher</h2>
                  <p>Years of Experience</p>
                </div>
                <div className="stat">
                  <h2>15<span>+</span></h2>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
