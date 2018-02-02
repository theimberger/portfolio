import React from 'react';
import pure from 'recompose/pure';

const NHOF = (props) => {
  return (
    <div>
      <p>
        The Name Hall of Fame is a pet project I've
        been working on with my brother (a graphic
        designer), Max Heimberger. The idea is born
        of inside joke between us and our friend Collin
        and the purpose is to document the greatest names
        ever bequeathed.  Names are submitted by the
        public but only are added to the list if they have
        a corresponding wikipedia page.
      </p>
    </div>
  );
};

export default pure(NHOF);
