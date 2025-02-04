import React from 'react';

class Spinner extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center p-4">
        <div className="animate-spin rounded-full h-11 w-11 border-b-3 border-bright"></div>
        <span className="ml-2 text-lilac">Loading...</span>
      </div>
    );
  }
}

export default Spinner;
