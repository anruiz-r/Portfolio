import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import {linkedin} from 'react-icons-kit/icomoon/linkedin';
import {phone} from 'react-icons-kit/icomoon/phone'


function Footer() {
  return (
    <div id="footer">
      <small>© 2024 Coded by Angela Ruiz</small>
      <div className="footer-icons">
      <a href={`tel:+34 673253209`} ><Icon icon={phone}/></a>
        <Link to={"https://github.com/anruiz-r"} target="_blank" >
          <Icon icon={github} />
        </Link>
        <Link to={"https://www.linkedin.com/in/angela-ruiz-rodriguez"} target="_blank" ><Icon icon={linkedin}/></Link>
      </div>
    </div>
  );
}

export default Footer;
