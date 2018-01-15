import React from 'react';
import pure from 'recompose/pure';

const Projects = (props) => {
  return (
    <section className="wrapper">

      <section className="tile">
        <h3>relax</h3>
        <p>
          A clone of the workplace chat application, Slack.
          <br />Primary skills: Ruby/Rails, React/Redux
        </p>
      </section>

      <section className="tile">
        <h3>wikipedia crawler</h3>
        <p>
          A data visualization game that maps connections
          between Wikipedia articles.
          <br />Primary skills: Ruby/Rails, React/Redux
        </p>
      </section>

      <section className="tile">
        <h3>shiftFour</h3>
      </section>

      <section className="tile">
        <h3>the name hall of fame</h3>
      </section>

    </section>
  );
};

export default pure(Projects);
