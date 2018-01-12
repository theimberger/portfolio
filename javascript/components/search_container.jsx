import React from 'react';
import pure from 'recompose/pure';
import SearchResults from './search_results';
import { toggleActiveSearch } from '../utils/ui_utils';


const SearchContainer = (props) => {

  return (
    <div id="search_container">
      <h1>Hey.</h1>
      <h2>I'm Thomas (but I mostly go by t).</h2>
      <h2>Just type what you're looking for below.</h2>


      <input
        id="search"
        autoComplete="off"
        value={props.searchValue}
        onChange={props.update}
        onFocus={ () => toggleActiveSearch() }
        onBlur={ () => toggleActiveSearch() }
      />
      <hr className="search_line" />

      <SearchResults
        itemSelectHandler={props.itemSelectHandler}
        results={props.results}
        searchTerm={props.searchValue}
      />
    </div>
  );
};

export default pure(SearchContainer);
