import React from 'react';
import pure from 'recompose/pure';

const Additional = () => {
  return (
    <section className="wrapper experience">

      <section className="tile">
        <h3>Appalachian Trail Thru-Hike</h3>
        <p>
          Planned and executed a 2,189 mile hike from Georgia to
          Maine. Almost died twice.  Had the time of my life.
        </p>
        <p>
          April 2016 - September 2017
        </p>
      </section>

      <section className="tile">
        <h3>MDA Summer Camp</h3>
        <p>
          Worked as a camp counselor for a week long MDA summer
          camp for three years. MDA summer camp provided children
          with Muscular Dystrophy the experience of normality, being
          around peers and people with similar conditions,
          all while participating in events and activities adapted
          for their needs. As a camp counselor I was paired one-on-one
          with a camper and assisted them as they needed and made sure
          they stayed happy and healthy for the week.
        </p>
        <p>
          July 2013 - July 2015
        </p>
      </section>

      <section className="tile">
        <h3>NOLS New Zealand</h3>
        <p>
          A program promoting wilderness and leadership skills.  Was elected
          by my peers to lead an expidention in the Southern Alps of NZ.
        </p>
        <p>
          April 2010 - June 2010
        </p>
      </section>

    </section>
  );
};

export default pure(Additional);
