import React from 'react';
import Signature from './signature';
import SearchContainer from './search_container';
import SearchMap from './search_map';
import ViewPort from './view_port';
import { enterSearchMode } from '../utils/ui_utils';

const IndexItem = SearchMap.filter((item) => item.terms[0] === "index")[0];

class Root extends React.Component {

  constructor() {
    super();
    this.state = {
      searchValue: "",
      results: [],
      pageRendered: false,
      activeItem: false
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.itemSelectHandler = this.itemSelectHandler.bind(this);
    this.toIndex = this.toIndex.bind(this);
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
    } else {
      newState.activeItem = false;
    }
    newState.results = results;
    this.setState(newState);
  }

  toIndex() {
    enterSearchMode();
    this.itemSelectHandler(IndexItem);
  }

  itemSelectHandler(item) {
    let newState = this.state;
    $("#search").blur();
    newState.pageRendered = <item.component />;
    newState.searchValue = item.terms[0];
    newState.activeItem = item;
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <Signature />
        <SearchContainer
          toIndex={this.toIndex}
          activeItem={this.state.activeItem}
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
