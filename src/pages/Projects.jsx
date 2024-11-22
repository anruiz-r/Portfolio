import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";

import imgProject1 from "../assets/catscooking.png";
import imgProject2 from "../assets/project2-travelstories.png";
import imgProject3 from "../assets/project3-craftshop.png";

function Projects() {
  return (
    <div id="projects-section" >
      <h2>Check out my work 👾</h2>
      <p>
        These are the projects I´ve been working on lately. I hope you like
        them!
      </p>
      <div id="projects-list">
        <ProjectCard
          img={imgProject1}
          title={"Cats Cooking"}
          description={
            "A time-based game where a chef cat must deliver the food ordered by customers in the correct sequence."}
            linkDemo= {"https://anruiz-r.github.io/cats-cooking/"}
            linkCode= {"https://github.com/anruiz-r/cats-cooking"}
          
        />
        <ProjectCard
          img={imgProject2}
          title={"Travel Stories"}
          description={
            "A single-page application (SPA) built with React for sharing travel stories, including CRUD operations and a simulated backend connection"}
            linkDemo= {"https://travelstories-as.netlify.app/"}
              linkCode= {"https://github.com/anruiz-r/TravelStories-frontend"}
          
        />
        <ProjectCard
          img={imgProject3}
          title={"CraftShop"}
          description={
            "A full-featured e-commerce application for an artist, created using the MERN stack. Includes user authentication, roles for admin and user, and product management with a responsive UI. "}
            linkDemo= {"https://craftshop-ih.netlify.app/"}
              linkCode= {"https://github.com/anruiz-r/CraftShop-frontend"}
          
        />
      </div>
    </div>
  );
}

export default Projects;
