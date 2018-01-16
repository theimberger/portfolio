import React from 'react';
import pure from 'recompose/pure';

const Employment = () => {
  return (
    <section className="wrapper experience">

      <section className="tile">
        <h3>Old Fox Books and Coffeehouse</h3>
        <p>
          Helped set up and create a web presence of Annapolis' local
          bookstore, Old Fox Books.  Assisted in the creation of
          a wordpress website.
        </p>
        <p>
          October 2016 - August 2017
        </p>
      </section>

      <section className="tile">
        <h3>Dawson's Liqours</h3>
        <p>
          Helped manage and organize an inventory of more than 400 beers.
          Provided customer servie and recommendations.
        </p>
        <p>
          October 2015 - April 2016
        </p>
      </section>

      <section className="tile">
        <h3>Scribe America</h3>
        <p>
          Worked side-by-side with ER physicians, providing deep and
          accurate patient records in high pressure environments while
          maintaining a high quality of work
        </p>
        <p>
          June 2014 - October 2015
        </p>
      </section>

    </section>
  );
};

export default pure(Employment);
