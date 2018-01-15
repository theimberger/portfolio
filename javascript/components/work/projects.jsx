import React from 'react';
import pure from 'recompose/pure';

const Projects = (props) => {
  return (
    <section id="projects_wrapper">
      <h2>education</h2>
      
      <section className="project_tile">
        <h3>App Academy</h3>
        <p>
          A 1,000+ hour coding intensive program, with an {'<'}2%
          acceptance rate.
          <br />September 2017 - November 2017
        </p>
      </section>

      <section className="project_tile">
        <h3>St. Mary's College of Maryland</h3>
        <p>
          A small pubic honors college in southern Maryland.  Graduated with a
          Bachelor of Arts (majoring in Biology and Philosophy).
          <br />August 2010 - May 2015
        </p>
      </section>

      <section className="project_tile">
        <h3>NOLS New Zealand</h3>
        <p>
          A program promoting wilderness and leadership skills.  Was elected
          by my peers to lead an expidention in the Southern Alps of NZ.
          <br />April 2010 - June 2010
        </p>
      </section>
    </section>
  );
};

export default pure(Projects);
