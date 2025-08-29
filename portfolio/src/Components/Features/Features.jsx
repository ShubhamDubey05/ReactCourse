import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import './Features.css';
import services from '../../Data/Services';

const Features = () => {
  return (
    <div id='features' className='services'>
      <div className='services-title'>
        <h4>Features</h4>
        <h1>What I Do</h1>
      </div>

      <div className="service-container">
        {services.map(({ serviceNumber, serviceName, description }, index) => (
          <div key={index} className='services-format'>
            <h3>{serviceNumber}</h3>
            <h2>{serviceName}</h2>
            <p>{description}</p>
            <div className="service-readmore">
              <p>Read More</p>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
