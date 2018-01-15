import React from 'react';
import pure from 'recompose/pure';

const Skills = (props) => {
  return (
    <React.Fragment>
      <section className="wrapper">
        <div className="skill tile">
          <i className="devicon-d3js-plain colored"></i>
          <br />
          D3.js
        </div>

        <div className="skill tile">
          <i className="devicon-github-plain colored"></i>
          <br />
          GitHub
        </div>

        <div className="skill tile">
          <i className="devicon-css3-plain colored"></i>
          <br />
          CSS3
        </div>

        <div className="skill tile">
          <i className="devicon-html5-plain colored"></i>
          <br />
          HTML 5
        </div>

        <div className="skill tile">
          <i className="devicon-javascript-plain colored"></i>
          <br />
          JavaScript (es6)
        </div>

        <div className="skill tile">
          <i className="devicon-react-plain colored"></i>
          <br />
          React.js
        </div>

        <div className="skill tile">
          <i className="devicon-ruby-plain colored"></i>
          <br />
          Ruby
        </div>

        <div className="skill tile">
          <i className="devicon-rails-plain colored"></i>
          <br />
          Rails
        </div>
      </section>

    </React.Fragment>
  );
};

export default pure(Skills);
