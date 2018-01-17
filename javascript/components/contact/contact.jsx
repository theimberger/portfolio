import React from 'react';
import pure from 'recompose/pure';
import Profiles from './profiles.jsx';
import Email from './email.jsx';

const Contact = () => {
  return (
    <React.Fragment>
      <h2>/email & phone</h2>
      <Email />
      <hr />
      <h2>/profiles</h2>
      <Profiles />
    </ React.Fragment>
  );
};

export default pure(Contact);
