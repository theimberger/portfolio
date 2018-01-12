import React from 'react';
import pure from 'recompose/pure';
import SearchResultsItem from './search_results_item';

const SearchResults = (props) => {

  if (props.results.length === 0) {
    return null;
  }

  let results = [];
  props.results.forEach((result, index) => {
    results.push(
      <SearchResultsItem
        itemSelectHandler={props.itemSelectHandler}
        item={result}
        key={index}
        searchTerm={props.searchTerm}
      />
    );
  });

  return (
    <ul id="search_results">
      {results}
    </ul>
  );
};

export default pure(SearchResults);
