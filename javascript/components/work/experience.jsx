import React from 'react';
import Education from './education';
import pure from 'recompose/pure';

const Projects = (props) => {
  return (
    <React.Fragment>
      <Education />
    </React.Fragment>
  );
};

export default pure(Projects);
