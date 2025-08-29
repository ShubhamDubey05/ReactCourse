import React from 'react';
import './Projects.css';
import projects_data from '../../Photo/photo';
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className='mywork-title'>
        <h1>My Projects</h1>
      </div>
      <div className="mywork-container">
        {projects_data.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.projectImg} alt={project.projectName} />
            <p className="project-name">{project.projectName}</p>
          </div>
        ))}
      </div>
      <div className="show-more">
        <p>Show more</p>
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default Projects;
