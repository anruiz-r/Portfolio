import React from 'react'
import ProjectCard from "../components/ProjectCard.jsx"

function Projects() {
  return (
    <div className='screen'>
    Take a look to my work. 
    <div id='projects-list'>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>
      </div>
    
  )
}

export default Projects
