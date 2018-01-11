import React from 'react';
import SearchResultsItem from './search_results_item';

const SearchResults = (props) => {

  if (props.results.length === 0) {
    return null;
  }

  let results = [];
  props.results.forEach((result, index) => {
    results.push(
      <SearchResultsItem
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

export default SearchResults;
