import React from "react";
import { Link } from "react-scroll";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/icomoon/menu";
import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={isMenuOpen ? "active" : ""}>
      <div id="nav-bar">
        <Link
          to="header"
          smooth={true}
          duration={500}
          offset={-70}
          id="nav-logo"
        >
          ANGELA RUIZ
        </Link>
        <div id="burger-menu" onClick={toggleMenu}>
          <Icon icon={menu} />
        </div>
      </div>
      <ul>
        <li>
          <Link
            to="header"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about-section"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            to="contact-section"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="projects-section"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
