import React from 'react';
import pure from 'recompose/pure';

const ViewPort = (props) => {
  if (!props.currentPage) {
    return null;
  } else
  return (
    <section id="view_port">
      {props.currentPage}
    </section>
  );
};

export default pure(ViewPort);
