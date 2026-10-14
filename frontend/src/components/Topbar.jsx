import React from 'react';
import { MapPin, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="hidden md:flex justify-between items-center h-16 px-8 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span>ITS &bull; Departemen Teknik Komputer</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="text-xs text-gray-500 hover:text-gray-800 font-medium">
          Pusat bantuan
        </button>
        <button className="relative p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          alt="Profile"
          className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200"
        />
      </div>
    </header>
  );
}