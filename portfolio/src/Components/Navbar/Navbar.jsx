import React from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="./Images/logo1.png" alt="logo" />
      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor" href="#hero">Home</AnchorLink>
        </li>
        <li>
          <AnchorLink  className="anchor" href="#about">About</AnchorLink>
        </li>
        <li>
          <AnchorLink  className="anchor" href="#about">Features</AnchorLink>
        </li>
        <li>
          <AnchorLink  className="anchor" href="#projects">Projects</AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor"  href="#contact">Contact</AnchorLink>
        </li>
      </ul>
      <div  className="nav-connect">Connect</div>
    </div>
  );
};

export default Navbar;
