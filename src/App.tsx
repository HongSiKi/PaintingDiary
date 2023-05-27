import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useQuery } from 'react-query';
import LandingPage from './pages/LandingPage';
import MakeCharacterPage from './pages/MakeCharacterPage';
import DecorateCharacterPage from './pages/DecorateCharacterPage';
import DecorateMyRoomPage from './pages/DecorateMyRoomPage';
import MyRoomPage from './pages/MyRoomPage';
import MainPage from './pages/MainPage';
import JoinPage from './pages/JoinPage';
import './styles/index.css';
import Menu from './components/landing/Menu';
import { useAppDispatch } from './redux/hook';
import { getUserInfo } from './api/userAPi';
import userSlice from './redux/slices/userSlice';
import AuthorizeArea from './components/AuthorizeArea';
import PostsScrollPage from './pages/PostsScrollPage';

function App() {
  const dispatch = useAppDispatch();

  const { isLoading } = useQuery('userInfo', getUserInfo, {
    onSuccess: (data) => {
      if (data.status !== 200 || data.result === null) {
        return;
      }

      dispatch(userSlice.actions.login(data.result));
    },
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="make-character" element={<AuthorizeArea element={<MakeCharacterPage />} />} />
        <Route
          path="decorate-character"
          element={<AuthorizeArea element={<DecorateCharacterPage />} />}
        />
        <Route
          path="decorate-my-room"
          element={<AuthorizeArea element={<DecorateMyRoomPage />} />}
        />
        <Route path="my-room" element={<AuthorizeArea element={<MyRoomPage />} />} />
        <Route path="main" element={<MainPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="posts" element={<PostsScrollPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
