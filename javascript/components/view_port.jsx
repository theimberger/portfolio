import React from 'react';
import pure from 'recompose/pure';

const ViewPort = (props) => {
  if (!props.currentPage) {
    return null;
  }

  const scrollHandler = () => {
    let headers = document.getElementsByTagName("h1"),
        $path = $("#headers"),
        i = 0;

    let pt = parseInt($path.css("top"));
    let ht = $path.height();
    
    $path.css("top", pt - 1);
    $path.height((ht + 1));
    console.log($path.height());

    // $("#path").css("padding-top" + 1);
    // while (i < headers.length) {
    //   console.log(headers[i].offsetTop);
    //   console.log(document.getElementById("view_port").scrollTop);
    //   i ++;
    // }
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
