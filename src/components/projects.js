import React from 'react'
import ProjectData from '../constants/project-data'

const Projects = ({visible}) => {
  return (
    <main className={visible ? 'visible' : ''}>
      <ul>
        { ProjectData.map(project => (
          <li key={project.id}>
            <img src={project.image} alt={project.title} className='project-image'/ >
            <h2>{project.title}</h2>
            <span className='project-links'>
              <a target='_blank' href={project.liveURL}>
                see it live
              </a> / <a target='_blank' href={project.githubRepo}>
                see the code
              </a>
            </span>
            <p>{project.description}</p>
          </li>
        ))}
        <li style={{ opacity: 0 }}></li>
      </ul>
      <div className='projects-overlay'></div>
    </main>
  );
}

export default Projects;