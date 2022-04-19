import React from 'react';
import loading from '../assets/loading.gif';
import '../sass/style.css';

const Loading = () => {
  return (
    <div className="loadingCmp">
      <img
        src={loading}
        alt="loading..."
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default Loading;
