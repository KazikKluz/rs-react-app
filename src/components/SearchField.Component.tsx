import React from 'react';

interface SearchFieldProps {
  onSearchChange: (value: string) => void;
}

interface SearchFieldState {
  searchTerm: string;
}

const STORAGE_KEY = 'starwars_search_term';

class SearchField extends React.Component<SearchFieldProps, SearchFieldState> {
  state: SearchFieldState = {
    searchTerm: localStorage.getItem(STORAGE_KEY) ?? '',
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    if (searchTerm) {
      this.props.onSearchChange(searchTerm.trim());
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ searchTerm: value });
    localStorage.setItem(STORAGE_KEY, value);
    this.props.onSearchChange(value.trim());
  };

  render() {
    return (
      <input
        type="text"
        value={this.state.searchTerm}
        onChange={this.handleChange}
        placeholder="Search Star Wars characters..."
        className="px-4 py-2 text-dark rounded border border-lilac focus:outline-none 
        focus:border-purpureus bg-bright"
      />
    );
  }
}

export default SearchField;
