/* eslint-disable no-dupe-keys */
import React from 'react';
import loading from '../assets/loading.gif';

const LoadingPage = () => {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    minWidth: '100vw',
    backgroundColor: 'rgba(52, 152, 219,0.6)',
  };
  return (
    <div style={styles}>
      <img src={loading} alt="loading..." />
    </div>
  );
};

export default LoadingPage;
