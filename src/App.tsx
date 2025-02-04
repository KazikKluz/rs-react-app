import React from 'react';
import TopControls from './components/TopControls.Component';
import Results from './components/Results.Component';
import ErrorBoundary from './components/ErrorBoundary.Component';
import { StarWarsPerson } from './types/starWars';

class App extends React.Component {
  state = {
    people: [],
    isLoading: false,
    error: null,
  };

  handleSearchResults = (results: StarWarsPerson[]) => {
    this.setState({ people: results });
  };

  handleLoadingChange = (isLoading: boolean) => {
    this.setState({ isLoading });
  };

  handleError = (error: string | null) => {
    this.setState({ error });
  };

  render() {
    const { people, isLoading, error } = this.state;

    return (
      <ErrorBoundary>
        <div className="relative bg-space-cadet h-screen text-bright font-sans pt-5 px-5 pb-10">
          <div className="flex flex-col w-[75%] min-h-full mx-auto">
            <TopControls
              onSearchResults={this.handleSearchResults}
              onLoadingChange={this.handleLoadingChange}
              onError={this.handleError}
            />
            <Results people={people} isLoading={isLoading} error={error} />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
