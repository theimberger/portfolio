import React from 'react';

import About from './about.jsx';
import Experience from '../experience/experience.jsx';
import Projects from '../work/projects.jsx';
import Contact from '../contact/contact.jsx';

import pure from 'recompose/pure';

const Index = () => {
  return (
    <React.Fragment>
      <h1>/experience</h1>
      <Experience />
      <hr />

      <h1>/projects</h1>
      <Projects />
      <hr />

      <h1>/about</h1>
      <About />
      <hr />

      <h1>/contact</h1>
      <Contact />
    </React.Fragment>
  );
};

export default pure(Index);
