import React from 'react'
import ProjectCard from "../components/ProjectCard.jsx"

import imgProject1 from "../assets/catscooking.png";
import imgProject2 from "../assets/project2-travelstories.png";
import imgProject3 from "../assets/project3-craftshop.png";


function Projects() {
  return (
    <div id="projects-section" className='screen'>
    Take a look to my work. 
    <div id='projects-list'>
      <ProjectCard img={imgProject1}/>
      <ProjectCard img={imgProject2} />
      <ProjectCard img={imgProject3} />
      </div>
      </div>
    
  )
}

export default Projects
