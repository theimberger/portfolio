import React from 'react';
import pure from 'recompose/pure';

const ViewPort = (props) => {
  if (!props.currentPage) {
    return null;
  }

  const scrollHandler = () => {
  };
  return (
    <div id="scroll_bar_fix">
      <div id="view_port" onScroll={scrollHandler}>
        {props.currentPage}
      </div>
    </div>
  );
};

export default pure(ViewPort);
