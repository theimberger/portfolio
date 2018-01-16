import React from 'react';
import Signature from './signature';
import SearchContainer from './search_container';
import SearchMap from './search_map';
import ViewPort from './view_port';
import { enterSearchMode } from '../utils/ui_utils';

class Root extends React.Component {

  constructor() {
    super();
    this.state = {
      searchValue: "",
      results: [],
      pageRendered: false
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.itemSelectHandler = this.itemSelectHandler.bind(this);
  }

  updateSearch(e) {
    if (this.state.searchValue === "" && !this.pageRendered) {
      enterSearchMode();
    }

    let newState = this.state;
    newState.searchValue = e.target.value;
    let results = [];

    if (newState.searchValue !== "") {
      SearchMap.forEach(option => {
        option.terms.forEach( term => {
          if (results[results.length - 1] !== option &&
            term.slice(0, newState.searchValue.length)
            === newState.searchValue.toLowerCase()) {
            results.push(option);
          }
        });
      });
    }
    newState.results = results;
    this.setState(newState);
  }

  itemSelectHandler(item) {
    let newState = this.state;
    $("#search").blur();
    newState.pageRendered = <item.component />;
    newState.searchValue = item.terms[0];
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <Signature />
        <SearchContainer
          update={this.updateSearch}
          results={this.state.results}
          searchValue={this.state.searchValue}
          itemSelectHandler={this.itemSelectHandler}
        />
        <ViewPort currentPage={this.state.pageRendered} />
      </React.Fragment>
    );
  }
}

export default Root;
