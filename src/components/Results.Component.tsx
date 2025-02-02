import React from 'react';
import ErrorBoundary from './ErrorBoundary.Component';
import CardList from './CardList.Component';
import Spinner from './Spinner.Component';
import ErrorMessage from './ErrorMessage.Component';
import ErrorButton from './ErrorButton.Component';
import { StarWarsPerson } from '../types/starWars';

interface ResultsProps {
  people: StarWarsPerson[];
  isLoading: boolean;
  error: string | null;
}

class Results extends React.Component<ResultsProps> {
  render() {
    const { people, isLoading, error } = this.props;

    return (
      <ErrorBoundary>
        <div className="flex flex-col mt-8 h-full grow">
          <div className="flex justify-center mb-[50px]">
            <h2 className="inline-block text-3xl align-middle">RESULTS</h2>
          </div>
          <div className="flex flex-col grow">
            {error && (
              <div className="flex items-center justify-center h-full w-full">
                <ErrorMessage message={error} />
              </div>
            )}
            {!error && isLoading ? (
              <div className="flex justify-center items-center h-full">
                <Spinner />
              </div>
            ) : (
              <div className="flex justify-center h-full grow">
                <CardList people={people} />
              </div>
            )}
          </div>
          <div className="flex justify-end place-self-end gap-4">
            <ErrorButton />
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default Results;
