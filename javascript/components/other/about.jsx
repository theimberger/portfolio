import React from 'react';
import pure from 'recompose/pure';

const About = () => {
  return (
    <React.Fragment>
      <p style={{"textAlign": "left", "fontSize": "1em"}}>
        I'm a 26 year old developer living in NYC (Bushwick at the moment).  I
        love employing and learning new technologies to solve new and old problems.
        I'm an avid learner and enjoy the challenge of mastering new systems and
        tools. The ability to create solutions and interpersonal connections through web
        development is something I find deeply gratifying.
        <br /><br />
        A bit about me not realted to development -
        before I became a developer I was thru-hiking the Appalachian Trail and
        am a pretty outdoors-y guy in general.  I also enjoy baking, games, and
        good books.

        <br /><br />
        I hope to help out on your next project,
        <br />//t
      </p>
    </React.Fragment>
  );
};

export default pure(About);
