import React from 'react';
import SearchField from './SearchField.Component';
import SearchButton from './SearchButton.Component';
import { StarWarsResponse } from '../types/starWars';

interface TopControlsProps {
  onSearchResults: (results: StarWarsResponse['results']) => void;
  onLoadingChange: (isLoading: boolean) => void;
  onError: (message: string | null) => void;
}

interface TopControlsState {
  isLoading: boolean;
  searchTerm: string;
}

const STORAGE_KEY = 'starwars_search_term';

class TopControls extends React.Component<TopControlsProps, TopControlsState> {
  state: TopControlsState = {
    isLoading: false,
    searchTerm: localStorage.getItem(STORAGE_KEY) ?? '',
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    if (searchTerm) {
      this.fetchStarWarsData();
    }
  }

  fetchStarWarsData = async () => {
    const { onSearchResults, onLoadingChange, onError } = this.props;
    const { searchTerm } = this.state;

    try {
      this.setState({ isLoading: true });
      onLoadingChange(true);
      onError(null);

      const url = searchTerm.trim()
        ? `https://swapi.dev/api/people/?search=${encodeURIComponent(searchTerm.trim())}`
        : 'https://swapi.dev/api/people/';

      localStorage.setItem(STORAGE_KEY, searchTerm.trim());

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch data: ${response.status} ${response.statusText}`
        );
      }

      const data: StarWarsResponse = await response.json();
      onSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching Star Wars data:', error);
      onSearchResults([]);
      onError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      );
    } finally {
      this.setState({ isLoading: false });
      onLoadingChange(false);
    }
  };

  handleSearchChange = (value: string) => {
    this.setState({ searchTerm: value });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <div className="flex justify-center items-center gap-4 p-4">
        <SearchField onSearchChange={this.handleSearchChange} />
        <SearchButton onSearch={this.fetchStarWarsData} isLoading={isLoading} />
      </div>
    );
  }
}

export default TopControls;
