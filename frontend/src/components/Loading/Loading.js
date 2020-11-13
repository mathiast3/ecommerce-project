import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Loaders } from '../shared/styles/Loader';

const LoadingScreen = () => {
  return (
    <Loaders>
      <h1>Furniture Store</h1>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Loaders>
  );
};

export default LoadingScreen;
