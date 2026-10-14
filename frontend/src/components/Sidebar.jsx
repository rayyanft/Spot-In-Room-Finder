import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Users, QrCode, Clock, User, HelpCircle } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const pathSaatIni = location.pathname;

  const menuItems = [
    { nama: 'Jelajah ruang', rute: '/', ikon: Compass },
    { nama: 'Radar teman', rute: '/radar', ikon: Users },
    { nama: 'Scan QR', rute: '/scan', ikon: QrCode },
    { nama: 'Sesi belajar', rute: '/sesi', ikon: Clock },
    { nama: 'Profil akun', rute: '/profil', ikon: User },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-100 min-h-screen p-6 fixed left-0 top-0 bottom-0 justify-between z-40">
      <div>
        {/* Logo Brand */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-200">
            S
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">Spot-In</span>
        </div>

        {/* Card Info Workspace */}
        <div className="bg-gray-50/80 p-3 rounded-xl mb-6 border border-gray-100">
          <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-1">Workspace Kampus</p>
          <p className="text-xs font-bold text-gray-800">Kampus Terpadu</p>
          <p className="text-[11px] text-gray-500">Gedung A & B</p>
        </div>

        {/* List Menu Navigasi */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Ikon = item.ikon;
            const apakahAktif = pathSaatIni === item.rute;
            return (
              <Link
                key={item.nama}
                to={item.rute}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition ${
                  apakahAktif
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Ikon className="w-4 h-4" />
                <span>{item.nama}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bagian Bawah Sidebar */}
      <div className="space-y-4">
        <div className="bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <HelpCircle className="w-4 h-4" />
            <span className="text-xs font-bold">Butuh bantuan?</span>
          </div>
          <p className="text-[11px] text-gray-500 mb-2">Panduan ruang & check-in kampus.</p>
          <a href="#" className="text-[11px] font-bold text-blue-600 hover:underline">
            Buka pusat bantuan &rarr;
          </a>
        </div>

        {/* User Card */}
        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Avatar"
            className="w-8 h-8 rounded-full bg-gray-100"
          />
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-gray-800 truncate">Anindya Putri</p>
            <p className="text-[10px] text-gray-400 truncate">Akun mahasiswa</p>
          </div>
        </div>
      </div>
    </aside>
  );
}