import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Users, QrCode, Clock, User } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const pathSaatIni = location.pathname;

  const menuItems = [
    { nama: 'Jelajah', rute: '/', ikon: Compass },
    { nama: 'Teman', rute: '/radar', ikon: Users },
    { nama: 'Scan QR', rute: '/scan', ikon: QrCode },
    { nama: 'Sesi', rute: '/sesi', ikon: Clock },
    { nama: 'Profil', rute: '/profil', ikon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-4 flex justify-around items-center z-50 md:hidden shadow-lg">
      {menuItems.map((item) => {
        const Ikon = item.ikon;
        const apakahAktif = pathSaatIni === item.rute;
        return (
          <Link
            key={item.nama}
            to={item.rute}
            className={`flex flex-col items-center gap-1 ${
              apakahAktif ? 'text-blue-600 font-semibold' : 'text-gray-400'
            }`}
          >
            <Ikon className="w-5 h-5" />
            <span className="text-[10px]">{item.nama}</span>
          </Link>
        );
      })}
    </div>
  );
}