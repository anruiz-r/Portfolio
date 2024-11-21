import React from "react";
import aboutPic from "../assets/IMG_02778.jpg";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { github } from "react-icons-kit/icomoon/github";
import { linkedin } from "react-icons-kit/icomoon/linkedin";

function About() {
  return (
    <div className="screen" id="about-section">
      <div id="about-info">
        <h2>About me</h2>
        <p>
        👋 Hi, I’m Angela, a Junior Frontend Developer transitioning from a career in tourism to tech. With over 5 years of experience as a receptionist, I’ve developed exceptional communication, problem-solving, and teamwork skills, which now enhance my approach to building user-centered web solutions.

<br /><br />💻 After completing the IronHack Full Stack Web Development Bootcamp, I gained solid knowledge in HTML, CSS, JavaScript (ES6), and the MERN stack. Currently, I’m studying at 42 Málaga, where I’m sharpening my coding skills, tackling complex challenges, and learning in a collaborative, peer-driven environment.

<br /> <br />🚀 I’m passionate about learning, growth, and contributing to meaningful projects. Soon, I’ll begin training in Blue Team Cybersecurity, expanding my expertise to create secure and reliable digital experiences.

<br /><br />✨ When I’m not coding or diving into tech, I enjoy getting lost in a good book, exploring new destinations, and experimenting with DIY crafts. I’m also passionate about learning new things—whether it’s a skill, a concept, or just a random fun fact.
<br /><br />🤝 Let’s connect! Check out my work on GitHub or reach out on LinkedIn—I’d love to collaborate and grow together in the tech world.


        </p>

        <div>
          <Link
            to={"https://www.linkedin.com/in/angela-ruiz-rodriguez"}
            target="_blank"
          >
            <button className="blue-btn">
              <Icon icon={linkedin} /> LinkedIn
            </button>
          </Link>
          <Link to={"https://github.com/anruiz-r"} target="_blank">
            <button className="blue-btn">
              <Icon icon={github} /> GitHub
            </button>
          </Link>
        </div>
      </div>
      <div id="about-pic">
        <img src={aboutPic} alt="" />
      </div>
    </div>
  );
}

export default About;
