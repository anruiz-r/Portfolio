import React from "react";
import ContactForm from "../components/ContactForm.jsx";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { ic_email_outline } from "react-icons-kit/md/ic_email_outline";
import { linkedin } from "react-icons-kit/icomoon/linkedin";
import { phone } from "react-icons-kit/icomoon/phone";

function Contact() {
  return (
    <div id="contact-section" className="section">
      <h2 className="typing">Let´s get in touch! 🤝</h2>
      <p>
        Feel free to reach out to me with any questions or inquiries! You can
        send a message using the contact form, or contact me directly via:
      </p>
      <div id="contact-details">
        <a href={`tel:+34 673253209`}>
          <Icon icon={phone} /> +34 673253209
        </a>
        <a href="mailto:hireangelauiz@gmail.com">
          <Icon icon={ic_email_outline} /> hireangelauiz@gmail.com
        </a>
        <Link
          to={"https://www.linkedin.com/in/angela-ruiz-rodriguez"}
          target="_blank"
        >
          <Icon icon={linkedin} /> LinkedIn
        </Link>
      </div>

      <ContactForm style={{ margin: "0 auto" }} />
    </div>
  );
}

export default Contact;
