import React from 'react';
import pure from 'recompose/pure';

const Profiles = (props) => {
  return (
    <React.Fragment>
      <h2>Profiles</h2>
      <hr />
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/thomas-heimberger-46b255141/"
            target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/theimberger"
            target="_blank">
            GitHub
          </a>
        </li>
      </ul>

    </React.Fragment>
  );
};

export default pure(Profiles);
