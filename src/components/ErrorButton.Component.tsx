import React from 'react';

type ErrorButtonProps = object;

interface ErrorButtonState {
  shouldThrow: boolean;
}

class ErrorButton extends React.Component<ErrorButtonProps, ErrorButtonState> {
  state: ErrorButtonState = {
    shouldThrow: false,
  };

  handleClick = () => {
    this.setState({ shouldThrow: true });
  };

  render() {
    if (this.state.shouldThrow) {
      throw new Error('This is just a test error.');
    }

    return (
      <button
        onClick={this.handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
      >
        Test Error
      </button>
    );
  }
}

export default ErrorButton;
