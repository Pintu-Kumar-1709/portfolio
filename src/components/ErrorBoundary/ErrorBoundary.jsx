import React from 'react';
import { FaExclamationTriangle, FaRedo } from 'react-icons/fa';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    console.log(error)
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

    // You can also log the error to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <div className="bg-slate-800 rounded-lg p-8 shadow-xl">
              <FaExclamationTriangle className="text-red-500 text-6xl mx-auto mb-6" />
              
              <h1 className="text-2xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              
              <p className="text-slate-300 mb-6">
                {this.props.fallbackMessage || 
                 "We're sorry, but something unexpected happened. Please try refreshing the page."}
              </p>

              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FaRedo className="text-sm" />
                  Try Again
                </button>
                
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Refresh Page
                </button>
              </div>

              {/* Show error details in development */}
              {import.meta.env.DEV && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="text-slate-400 cursor-pointer hover:text-slate-300">
                    Error Details (Development Only)
                  </summary>
                  <div className="mt-3 p-4 bg-slate-900 rounded text-xs text-red-400 overflow-auto max-h-40">
                    <div className="font-bold mb-2">Error:</div>
                    <div className="mb-4">{this.state.error.toString()}</div>
                    
                    <div className="font-bold mb-2">Stack Trace:</div>
                    <pre className="whitespace-pre-wrap">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </div>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
