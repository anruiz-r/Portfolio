import React from 'react'
import ProjectCard from "../components/ProjectCard.jsx"

import imgProject1 from "../assets/catscooking.png";
import imgProject2 from "../assets/project2-travelstories.png";
import imgProject3 from "../assets/project3-craftshop.png";



function Projects() {
  
  return (
    <div id="projects-section" className='section'>
    <h2>Check out my work 👾</h2>
    <p>These are the projects I´ve been working on lately. I hope you like them!</p>
    <div id='projects-list'>
      <ProjectCard img={imgProject1} title={"Cats Cooking"} description={"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus neque repudiandae beatae"}/>
      <ProjectCard img={imgProject2} title={"Travel Stories"} description={"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus neque repudiandae beatae"}/>
      <ProjectCard img={imgProject3} title={"CraftShop"} description={"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus neque repudiandae beatae"}/>
      </div>
      </div>
    
  )
}

export default Projects
