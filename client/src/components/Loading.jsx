/* eslint-disable no-dupe-keys */
import React from 'react';
import loading from '../assets/loading.gif';

const Loading = () => {
  const styles = {
    position: 'fixed',
    display: 'flex',
    top: '0',
    left: '0',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(44, 62, 80,0.5)',
    zIndex: '100',
  };
  return (
    <div style={styles}>
      <img
        src={loading}
        alt="loading..."
        style={{ width: '300px', height: '300px' }}
      />
    </div>
  );
};

export default Loading;
