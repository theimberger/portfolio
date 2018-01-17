import React from 'react';
import pure from 'recompose/pure';

const Education = () => {
  return (
    <section className="wrapper experience">

      <section className="tile">
        <h3>App Academy</h3>
        <p>
          A 1,000+ hour coding intensive program, with an {"<"}2%
          acceptance rate.
        </p>
        <p>
          September 2017 - November 2017
        </p>
      </section>

      <section className="tile">
        <h3>St. Mary's College of Maryland</h3>
        <p>
          A small pubic honors college in southern Maryland.  Graduated with a
          Bachelor of Arts (majoring in Biology and Philosophy).
        </p>
        <p>
          August 2010 - May 2015
        </p>
      </section>

    </section>
  );
};

export default pure(Education);
