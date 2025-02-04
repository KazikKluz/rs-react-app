import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // This is called when an error occurs
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error);
    console.error('Error Stack:', errorInfo.componentStack);
  }

  private readonly handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary p-4 m-4 border border-purpureus rounded bg-lilac text-dark mt-10">
          <h2 className="text-xl font-bold mb-2">Something went wrong!</h2>
          <p className="mb-4">
            {this.state.error?.message ?? 'An error occurred'}
          </p>
          <button
            onClick={this.handleReset}
            className="bg-purpureus text-bright px-4 py-2 rounded hover:bg-space-cadet"
          >
            Close
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
