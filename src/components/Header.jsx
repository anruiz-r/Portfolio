import React from "react";
import { Link as ScrollLink } from "react-scroll";
import imgMe from "../assets/IMG_02753.jpg";

function Header() {
  return (
    <div id="header">
      <div className="banner">
        <img src={imgMe} alt="profile pic" loading="lazy"/>
        <div className="banner-info">
          <h1>Hi! This is Angela Ruiz</h1>
          <h2 className="typing">Junior Web Developer </h2>
          <div>
          <ScrollLink to="contact-section" smooth={true} duration={500} offset={-70} ><button className="white-btn">Contact me</button></ScrollLink>
            <a href="/cv.pdf" download aria-label="Link to download my CV"><button className="white-btn">My CV</button></a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
