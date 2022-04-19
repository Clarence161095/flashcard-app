import LoadingPage from 'components/LoadingPage';
import CreateFolder from 'pages/CreateFolder';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PokemonBackground from 'pages/PokemonBackground';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './sass/style.css';

function App() {
  return (
    <div className="appCmp">
      <PokemonBackground />
      <div className="appCmp-title">Web học từ vựng bằng flashcard</div>
      {/* {!localStorage.getItem('accessToken') && <Login />}
      {localStorage.getItem('accessToken') && ( */}
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/creat_folder" element={<CreateFolder />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
