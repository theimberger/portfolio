import React from 'react';
import SearchContainer from './search';

class Root extends React.Component {

  constructor() {
    super();
    this.state = {
      searchValue: ""
    };
    
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    let newState = this.state;
    newState.searchValue = e.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div id="root">
        <SearchContainer
          update={this.updateSearch}
          serachValue={this.state.searchValue}
        />
      </div>
    );
  }
}

export default Root;
