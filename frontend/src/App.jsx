import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExploreRooms from './pages/ExploreRooms';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExploreRooms />} />
      </Routes>
    </BrowserRouter>
  );
}