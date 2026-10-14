import React, { useState, useEffect } from 'react';
import { Search, MapPin, Users, Wifi, Wind } from 'lucide-react';

export default function ExploreRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ambilData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/rooms');
        const data = await response.json();
        setRooms(data);
        setLoading(false);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setLoading(false);
      }
    };
    ambilData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER (Bawaan Desain) */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Spot-In</h1>
            <p className="text-sm md:text-base text-gray-500">Temukan Tempat Terbaikmu</p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-200 rounded-full border-2 border-green-500 overflow-hidden cursor-pointer hover:opacity-80 transition">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
          </div>
        </div>

        {/* SEARCH BAR (Bawaan Desain) */}
        <div className="relative mb-8 max-w-2xl">
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cari ruang, gedung, atau fasilitas..." 
            className="w-full bg-white py-3.5 pl-12 pr-4 rounded-xl shadow-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition"
          />
        </div>

        <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Spot Coworking Kampus</h2>

        {/* LOGIKA TAMPILAN KARTU RUANGAN */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : rooms.length === 0 ? (
          <p className="text-center text-gray-500">Belum ada data ruangan di database.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 
              FUNGSI .map() 
              Ini adalah mesin pencetak. Ia akan membaca data dari Supabase, 
              dan mencetak 1 kartu desain ini untuk setiap 1 baris data di database.
            */}
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col">
                <div className="flex p-4 gap-4 border-b border-gray-50">
                  <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden shrink-0">
                     <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=300" alt="Room" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1 text-xs text-blue-600 bg-blue-50 w-fit px-2.5 py-1 rounded-full mb-2 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Coworking
                    </div>
                    {/* DATA DARI DATABASE: Menampilkan nama ruangan */}
                    <h3 className="font-bold text-gray-900 leading-tight md:text-lg">{room.room_name}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Kampus Utama
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50/50 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs md:text-sm text-gray-600 font-medium">Kapasitas Kursi</span>
                      {/* DATA DARI DATABASE: Menampilkan batas kapasitas */}
                      <span className="text-xs md:text-sm font-bold text-gray-900">Maks. {room.capacity}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 mt-4">
                       <span className="flex items-center gap-1 text-[10px] md:text-xs text-gray-600 bg-white border border-gray-200 px-2 py-1.5 rounded-md"><Wifi className="w-3 h-3 md:w-3.5 md:h-3.5"/> Tersedia</span>
                       <span className="flex items-center gap-1 text-[10px] md:text-xs text-gray-600 bg-white border border-gray-200 px-2 py-1.5 rounded-md"><Wind className="w-3 h-3 md:w-3.5 md:h-3.5"/> Ber-AC</span>
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-white border border-blue-200 text-blue-600 rounded-xl text-sm font-semibold hover:bg-blue-50 hover:border-blue-300 transition">
                    Lihat Ruang
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>
    </div>
  );
}