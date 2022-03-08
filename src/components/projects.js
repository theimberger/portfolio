import React from 'react'
import ProjectData from '../constants/project-data'

const Projects = ({visible}) => {
  return (
    <main className={visible ? 'visible' : ''}>
      <div className='projects-wrapper'>
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
          <div className='list-spacer' />
        </ul>
      </div>
      <div className='projects-overlay' />
      <div className='projects-overlay projects-overlay--bottom' />
    </main>
  );
}

export default Projects;