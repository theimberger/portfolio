import React from 'react';
import Education from './education';
import Employment from './employment';
import Skills from './skills';
import Additional from './additional';
import pure from 'recompose/pure';

const Projects = () => {
  return (
    <React.Fragment>
      <h2>/skills</h2>
      <Skills />
      <br />
      <hr />
      <h2>/education</h2>
      <Education />
      <hr />
      <h2>/employment</h2>
      <Employment />
      <hr />
      <h2>/additional</h2>
      <Additional />
    </React.Fragment>
  );
};

export default pure(Projects);
