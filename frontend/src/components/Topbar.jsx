import React from 'react';
import { MapPin, Bell } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="hidden md:flex items-center justify-between bg-white border-b border-gray-100 px-8 py-4 sticky top-0 z-30">
      {/* Bagian Kiri: Lokasi */}
      <div className="flex items-center gap-2 text-gray-500">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span className="text-xs font-medium">ITS - Departemen Teknik Komputer</span>
      </div>

      {/* Bagian Kanan: Notifikasi (Pusat Bantuan & Avatar dihapus) */}
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-blue-600 transition relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}