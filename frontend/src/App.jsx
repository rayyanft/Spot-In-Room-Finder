import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ExploreRooms from './pages/ExploreRooms';
import RoomDetail from './pages/RoomDetail';
import Auth from './pages/SignInLogin'; 

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
                <Route path="/" element={<ExploreRooms />} />
                <Route path="/room/:id" element={<RoomDetail />} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}