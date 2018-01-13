import React from 'react';
import pure from 'recompose/pure';
import Profiles from './profiles.jsx';

const Contact = (props) => {
  return (
    <React.Fragment>
      <h2>contact</h2>
      <hr />
      <ul>
        <li>
          email
          <hr />
          tlheimberger@smcm.edu
        </li>
      </ul>
    </ React.Fragment>
  );
};

export default pure(Contact);
