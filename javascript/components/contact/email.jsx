import React from 'react';
import pure from 'recompose/pure';

const Email = () => {
  return (
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
  );
};

export default pure(Email);
