import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Users, QrCode, Clock, User } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathSaatIni = location.pathname;

  const [userData, setUserData] = useState({ name: 'Mahasiswa' });

  useEffect(() => {
    const dataSimpanan = localStorage.getItem('user');
    if (dataSimpanan) {
      try {
        setUserData(JSON.parse(dataSimpanan));
        if (parsed && (parsed.name || parsed.nama)){
          setUserData(parsed);
        }
      } catch(e){
        console.error("Gagal membaca data user", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  const menuItems = [
    { nama: 'Jelajah ruang', rute: '/', ikon: Compass },
    { nama: 'Radar teman', rute: '/radar', ikon: Users },
    { nama: 'Scan QR', rute: '/scan', ikon: QrCode },
    { nama: 'Sesi belajar', rute: '/sesi', ikon: Clock },
    { nama: 'Profil akun', rute: '/profil', ikon: User },
  ];

  const namaTampil = userData.name || userData.nama || "Mahasiswa";

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

        {/* List Menu Navigasi */}
        <nav className="space-y-1.5 mt-4">
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
      <div className="space-y-3 pt-4 border-t border-gray-100">
        {/* User Card */}
        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`}
            alt="Avatar"
            className="w-8 h-8 rounded-full bg-gray-100"
          />
          <div className="overflow-hidden">
            <p className="text-xs font-bold text-gray-800 truncate">{namaTampil}</p>
            <p className="text-[10px] text-gray-400 truncate">Akun mahasiswa</p>
          </div>
          <button onClick={handleLogout} title="Keluar / Logout" className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition">
          <Logout className="w-4 h-4"/>
          </button>
        </div>
      </div>
    </aside>
  );
}