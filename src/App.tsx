import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import MakeCharacterPage from './pages/MakeCharacterPage';
import DecorateCharacterPage from './pages/DecorateCharacterPage';
import DecorateMyRoomPage from './pages/DecorateMyRoomPage';
import MyRoomPage from './pages/MyRoomPage';
import MainPage from './pages/MainPage';
import JoinPage from './pages/JoinPage';
import './styles/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="makeCharacter" element={<MakeCharacterPage />} />
        <Route path="decorateCharacter" element={<DecorateCharacterPage />} />
        <Route path="decorateMyRoom" element={<DecorateMyRoomPage />} />
        <Route path="myRoom" element={<MyRoomPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="join" element={<JoinPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
