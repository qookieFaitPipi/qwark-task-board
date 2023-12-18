import React from 'react';

// react-router-dom
import {Routes,Route} from 'react-router-dom';

// pages
import LoginPage from './Pages/LoginPage/LoginPage';
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route index path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default React.memo(App);