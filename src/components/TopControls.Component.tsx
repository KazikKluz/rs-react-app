import React from 'react';

import SearchField from './SearchField.Component';
import SearchButton from './SearchButton.Component';

class TopControls extends React.Component {
  handleSearch() {
    console.log('searching...');
  }

  render() {
    return (
      <div>
        <SearchField />
        <SearchButton onClick={this.handleSearch.bind(this)} />
      </div>
    );
  }
}

export default TopControls;
