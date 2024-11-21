import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import {linkedin} from 'react-icons-kit/icomoon/linkedin';
import {phone} from 'react-icons-kit/icomoon/phone';

function Contact() {
  return (
    <div id="contact-section" className="screen contact" >
      <h2 className="typing">Let´s get in touch</h2>
      <ContactForm />

      <div >
      <a href={`tel:+34 673253209`}> <Icon icon={phone}/> Call me! </a>
     
        <Link to={"https://github.com/anruiz-r"}>
          <Icon icon={github} />
        </Link>
        <Icon icon={linkedin}/>
      </div>
   
    </div>


  );
}

export default Contact;
