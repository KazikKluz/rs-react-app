import React from 'react';

interface ErrorMessageProps {
  message: string;
}

class ErrorMessage extends React.Component<ErrorMessageProps> {
  render() {
    return (
      <div className="flex w-[500px] h-[150px]  justify-center items-center align-self-auto p-4 m-4 bg-bright border border-purpureus text-dark rounded">
        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        <span>{this.props.message}</span>
      </div>
    );
  }
}

export default ErrorMessage;
