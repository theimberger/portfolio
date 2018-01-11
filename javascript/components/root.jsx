import React from 'react';
import SearchContainer from './search_container';
import SearchMap from './search_map';

class Root extends React.Component {

  constructor() {
    super();
    this.state = {
      searchValue: "",
      results: []
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    let newState = this.state;
    newState.searchValue = e.target.value;
    let results = [];

    if (newState.searchValue !== "") {
      SearchMap.forEach(option => {
        option.terms.forEach( term => {
          if (term.includes(newState.searchValue)) {
            results.push(option);
          }
        });
      });
    }
    newState.results = results;
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <SearchContainer
          update={this.updateSearch}
          results={this.state.results}
          searchValue={this.state.searchValue}
        />
      </React.Fragment>
    );
  }
}

export default Root;
