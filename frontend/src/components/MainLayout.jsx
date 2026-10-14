import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './Topbar';
import BottomNav from './BottomNav';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50/50 flex">
      <Sidebar />

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen pb-16 md:pb-0">
        <TopBar />

        <main className="flex-1">{children}</main>

        <BottomNav />
      </div>
    </div>
  );
}