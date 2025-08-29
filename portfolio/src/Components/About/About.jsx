import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About Me</h1>
        {/* Optional: Add a decorative image here */}
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src="/Images/profile1.png" alt="profile" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              My passion lies in creating beautiful, responsive, and
              user-centric web experiences that blend design with functionality.
              As a Frontend Developer, I love bringing ideas to life on the
              screen.
            </p>
            <p>
              I’m passionate about turning creative ideas into seamless,
              interactive web experiences through frontend development.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>MongoDB</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap & Tailwind</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="about-achievments">
        <div className="about-achievment">
          <h1>1+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="about-achievment">
          <h1>50+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="about-achievment">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
