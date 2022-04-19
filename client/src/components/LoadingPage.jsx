import React from 'react';
import loading from '../assets/loading.gif';
import '../sass/style.css';

const LoadingPage = () => {
  return (
    <div className="loadingPageCmp">
      <img src={loading} alt="loading..." />
    </div>
  );
};

export default LoadingPage;
