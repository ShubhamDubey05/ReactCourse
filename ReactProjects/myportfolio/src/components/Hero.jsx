import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaNode } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

import Button from "./Button";
import Button2 from "./Button2";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-6 py-16 px-4 md:px-0">
      {/* Subtitle */}
      <h4 className="text-2xl font-semibold text-gray-400 uppercase tracking-widest">
        Welcome to my world
      </h4>

      {/* Name with Gradient */}
      <h1 className="text-5xl font-bold">
        Hii, I'm{" "}
        <span className="bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent">
          Shubham Dubey
        </span>
      </h1>

      {/* Typewriter */}
      <h2 className="text-3xl font-bold text-gray-200">
        a{" "}
        <span className="bg-gradient-to-r from-[#DA7C25] to-[#B923E1] bg-clip-text text-transparent">
          <Typewriter
            words={["Frontend Developer", "Backend Developer", "UI Designer", "Full-Stack Developer"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-gray-300">
        Resolving design problems, building smart user interfaces and useful
        interactions, developing rich web applications and seamless web
        experiences. Professionally connected with the web development industry.
        Problem solver, interested in the entire frontend spectrum and working
        on ambitious projects with interesting people.
      </p>

      {/* Circular Image */}
      <img
        src="./hero2.png"
        alt="Hero"
        className="w-64 h-64 rounded-full  shadow-lg mt-4"
      />

      {/* Resume Button */}
      <Button />

      {/* Find Me & Skills */}
      <div className="mt-10 w-full max-w-2xl flex flex-col gap-8">
        {/* Find Me */}
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-gray-400 font-semibold uppercase tracking-widest">Find Me</h4>
          <div className="flex gap-4">
            <Button2 icon={<FaLinkedinIn />} />
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col items-center space-y-4">
          <h4 className="text-gray-400 font-semibold uppercase tracking-widest">Best Skills On</h4>
          <div className="flex flex-wrap justify-center gap-4">
            <Button2 icon={<FaReact />} />
            <Button2 icon={<FaNode />} />
            <Button2 icon={<AiOutlineConsoleSql />} />
            <Button2 icon={<FaNodeJs />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
