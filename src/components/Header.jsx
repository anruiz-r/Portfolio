import React from "react";
import { Link as ScrollLink } from "react-scroll";
import imgMe from "../assets/IMG_02753.jpg";
import placeholder from "../assets/placeholder.png";
import { Icon } from 'react-icons-kit'
import {ic_file_download} from 'react-icons-kit/md/ic_file_download'

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
            <a href="/CV-Angela Ruiz.pdf" download aria-label="Link to download my CV"><button className="white-btn"><Icon icon={ic_file_download}></Icon> My CV</button></a> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
