import React from 'react';

interface SearchButtonProps {
  onClick: () => void;
}

class SearchButton extends React.Component<SearchButtonProps> {
  render() {
    return <button onClick={this.props.onClick}>Search</button>;
  }
}

export default SearchButton;
