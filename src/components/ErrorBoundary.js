import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorInfo, setErrorInfo] = useState(null);

  const resetError = () => {
    setHasError(false);
    setErrorInfo(null);
  };

  const handleCatchError = (error, errorInfo) => {
    console.error("Error occurred:", error, errorInfo);
    setHasError(true);
    setErrorInfo(errorInfo);
  };

  try {
    return hasError ? (
      <div>
        <h2>Something went wrong. Please try again later.</h2>
        <button onClick={resetError}>Retry</button>
      </div>
    ) : (
      <>{children}</>
    );
  } catch (error) {
    handleCatchError(error, errorInfo);
    return <h2>Something went wrong. Please try again later.</h2>;
  }
};

export default ErrorBoundary;
