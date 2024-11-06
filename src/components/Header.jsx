import React from "react";
import NavBar from "./NavBar";
import imgMe from "../assets/me-pic.jpg";

function Header() {
  return (
    <div id="header">
      <NavBar />
      <div className="banner">
        <img src={imgMe} alt="" />
        <div>
          <h1>Hi, this is Angela Ruiz</h1>
          <h2>Junior Web Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
