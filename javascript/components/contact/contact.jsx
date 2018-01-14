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
          <br />
          <a href="mailto:theimberger@gmail.com">theimberger@gmail.com</a>
        </li>
        <li>
          phone (mobile)
          <br />
          <a href="tel:1-443-370-7866">(443) 370 7866</a>
        </li>
      </ul>
      <Profiles />
    </ React.Fragment>
  );
};

export default pure(Contact);
