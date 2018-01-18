import React from 'react';
import Education from './education';
import Employment from './employment';
import Skills from './skills';
import Additional from './additional';
import pure from 'recompose/pure';

const Projects = () => {
  return (
    <React.Fragment>
      <h1 className="subtitle">/skills</h1>
      <Skills />
      <br />
      <hr />
      <h1 className="subtitle">/education</h1>
      <Education />
      <hr />
      <h1 className="subtitle">/employment</h1>
      <Employment />
      <hr />
      <h1 className="subtitle">/additional</h1>
      <Additional />
    </React.Fragment>
  );
};

export default pure(Projects);
