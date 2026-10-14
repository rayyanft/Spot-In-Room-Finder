import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExploreRooms from './pages/ExploreRooms';
import MainLayout from './components/MainLayout';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<ExploreRooms />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}