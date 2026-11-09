import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ExploreRooms from './pages/ExploreRooms';
import RoomDetail from './pages/RoomDetail';
import Auth from './pages/SignInLogin'; 
import ScanQR from './pages/ScanQR';

function ProtectedRoute({children}){
  const user = localStorage.getItem("user");
  if (!user){
    return<Navigate to="/login" replace/>;
  }
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />

        <Route path="/*" element={
          <ProtectedRoute>
            <MainLayout>
              <Routes>
                <Route path="/" element={<ExploreRooms/>} />
                <Route path="/room/:id" element={<RoomDetail/>} />
                <Route path="/scan" element={<ScanQR/>} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}