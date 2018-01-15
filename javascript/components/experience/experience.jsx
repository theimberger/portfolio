import React from 'react';
import Education from './education';
import Employment from './employment';
import pure from 'recompose/pure';

const Projects = (props) => {
  return (
    <React.Fragment>
      <h2>education</h2>
      <Education />
      <hr />
      <h2>employment</h2>
      <Employment />
    </React.Fragment>
  );
};

export default pure(Projects);
