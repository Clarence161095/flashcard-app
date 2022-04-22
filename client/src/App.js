import LoadingPage from 'components/LoadingPage';
import CreateSet from 'pages/CreateSet';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PokemonBackground from 'pages/PokemonBackground';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { pokemonNumber } from 'shared/Constant';
import './sass/style.css';

function App() {
  return (
    <div className="appCmp">
      <PokemonBackground pokemonNumber={pokemonNumber} />
      <div className="appCmp-title">Web học từ vựng bằng Flashcard</div>
      {!localStorage.getItem('accessToken') && <Login />}
      {localStorage.getItem('accessToken') && (
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/creat_set" element={<CreateSet />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
