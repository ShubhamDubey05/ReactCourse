import React from 'react';
import './Hero.css';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src="./Images/hero2.png" alt="hero" />
      <h1>
        I'm Shubham Dubey,{" "}
        <span>
          <Typewriter
            options={{
              strings: ["Frontend Developer", "UI Designer", "Full Stack Developer", "Coder"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </span>
      </h1>
      <p>I am a Frontend Developer from Lucknow, India with 1 year of experience.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect With Me</div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
