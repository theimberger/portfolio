import React from 'react';

const SearchContainer = (props) => {

  return (
    <div id="search_container">
      <h1>Hey.</h1>
      <h2>I'm Thomas (but I mostly go by t).</h2>
      <h2>Just type what you're looking for below.</h2>

      <input
        id="search"
        value={props.searchValue}
        onChange={props.update}
      />

    </div>
  );
};

export default SearchContainer;
