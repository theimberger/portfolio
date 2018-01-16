import React from 'react';
import Project from './project';
import pure from 'recompose/pure';

const Projects = (props) => {
  return (
    <React.Fragment>
      <h2>/wikipedia crawler</h2>
      <Project />
      <hr />
      <h2>/relax</h2>
      <Project />
      <hr />
      <h2>/the name hall of fame</h2>
      <Project />
    </React.Fragment>
  );
};

export default pure(Projects);
