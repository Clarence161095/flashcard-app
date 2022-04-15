/* eslint-disable react-hooks/exhaustive-deps */
import LoadingPage from 'components/LoadingPage';
import CreateFolder from 'pages/CreateFolder';
import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWith: '100vw',
    backgroundColor: 'rgba(45, 52, 54,1.0)',
    color: 'white',
    paddingRight: '5%',
    paddingLeft: '5%',
    title: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.5rem',
    },
  };

  return (
    <div className="main-app" style={styles}>
      <div style={styles.title}>Web học từ vựng bằng flashcard</div>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/creat_folder" element={<CreateFolder />} />
        <Route path="/loading" element={<LoadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
