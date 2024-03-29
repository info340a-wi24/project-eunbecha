import React from 'react'; // took out { useState }
// import { Player } from './Player';
// import data from '../data/data.json';
import { Routes, Route} from 'react-router-dom'; // took out Navigate, Link
import AccountPage from './AccountPage';
import MainPage from './MainPage';
// import { TableHeader } from './TableHeader';
// import { TableRow } from './TableRow';
import LoginPage from './LoginPage';
import ProfilePicPage from './ProfilePicPage';

function App({ props }) {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePicPage />} />
      </Routes>
    </div>
  );
}

export default App;