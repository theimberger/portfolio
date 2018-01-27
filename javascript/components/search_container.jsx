import React from 'react';
import pure from 'recompose/pure';
import SearchResults from './search_results';
import { toggleActiveSearch } from '../utils/ui_utils';


const fauxEvent = {
  target: {
    value: ""
  }
};

const SearchContainer = (props) => {

  const submitHandler = (e) => {
    e.preventDefault();
    props.itemSelectHandler(props.results[0]);
  };

  let path = "";

  if (props.activeItem) {
    path = "/";
    if (props.activeItem.parent) {
      path += props.activeItem.parent + "/";
    }
  }

  const focusHandler = () => {
    toggleActiveSearch();
    props.update(fauxEvent);
  };

  return (
    <div id="search_container">
      <h1>Hey.</h1>
      <h2>I'm Thomas (but I mostly go by t).</h2>
      <h2>Just type what you're looking for below.</h2>
      <h4>
        - or just click
        <span className="faux" onClick={props.toIndex}> here </span>
        to see everything at once -
      </h4>

      <form
        onSubmit={submitHandler}
        id="input_wrapper">
        <span id="path">
          {path}
        </span>

        <input
          id="search"
          autoComplete="off"
          value={props.searchValue}
          onChange={props.update}
          onFocus={ focusHandler }
          onBlur={ () => toggleActiveSearch() }
        />
        <span></span>
      </form>
      <hr className="search_line" />
      <div id="headers">
        index <br />
        experience <br />
        skills
      </div>


      <SearchResults
        itemSelectHandler={props.itemSelectHandler}
        results={props.results}
        searchTerm={props.searchValue}
      />
    </div>
  );
};

export default pure(SearchContainer);
