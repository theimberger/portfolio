import React, { Component } from 'react'
import ProjectData from '../constants/project-data'

const Projects = ({visible}) => {
  return (
    <main className={visible ? 'visible' : ''}>
      <ul>
        { ProjectData.map(project => (
          <li key={project.id}>
            <h2>{project.title}</h2>
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
