import React, { useState } from 'react';
import { Player } from './Player';
import data from '../data/data.json';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import AccountPage from './AccountPage';
import MainPage from './MainPage';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

function App({ props }) {

  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;