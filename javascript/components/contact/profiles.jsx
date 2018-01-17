import React from 'react';
import pure from 'recompose/pure';

const Profiles = () => {
  return (
    <React.Fragment>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/thomas-heimberger-46b255141/"
            target="_blank">
            <img src="./assets/images/linkedin.png" />
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/theimberger"
            target="_blank">
            <img src="./assets/images/github.png" />
            GitHub
          </a>
        </li>
        <li>
          <a href="https://angel.co/thomas-heimberger"
            target="_blank">
            <img src="./assets/images/angellist.png" />
            AngelList
          </a>
        </li>
      </ul>

    </React.Fragment>
  );
};

export default pure(Profiles);
