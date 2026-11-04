import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, MapPin, Wifi, Wind, BatteryCharging, Droplets, Users, MessageSquare } from 'lucide-react';

export default function RoomDetail() {
  const { id } = useParams();

  return (
    <div className="bg-gray-50 min-h-screen pb-24 md:pb-8">
      <div className="p-4 md:px-8 md:py-4 bg-white/80 backdrop-blur-md sticky top-0 md:static z-20">
        <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-blue-600 w-fit font-medium">
          <ArrowLeft className="w-5 h-5" />
          <span className="md:hidden">Detail Ruangan</span>
          <span className="hidden md:inline">Kembali ke Jelajah ruang</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto md:px-8">
        <div className="relative bg-white md:rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-6">
          <div className="h-48 md:h-72 bg-gray-300 relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Room Cover" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white">
              <div className="flex items-center gap-1 text-xs font-bold text-green-400 mb-2">
                <CheckCircle className="w-4 h-4" /> RUANG BELAJAR TERVERIFIKASI
              </div>
              <h1 className="text-2xl md:text-4xl font-bold mb-1">Coworking Gd. B Lt. {id}</h1>
              <p className="text-sm text-gray-300 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Fakultas Teknik & Desain • Kampus Utama
              </p>
            </div>
          </div>

          <div className="p-4 md:p-6 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex justify-between items-end mb-2">
                <div className="text-2xl font-black text-gray-900">12 <span className="text-sm text-gray-500 font-medium">/ 35 Kursi Terisi</span></div>
                <div className="text-xs font-bold text-green-600">66% Kosong</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '34%' }}></div>
              </div>
            </div>
            <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl border border-orange-100 text-sm font-semibold flex items-center gap-2 w-fit">
              Suara Sedang <span className="text-xs font-normal text-gray-600 hidden md:inline">• Ideal diskusi santai</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            
            {/* Kartu Fasilitas */}
            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-900">Fasilitas Ruangan</h2>
                <span className="text-sm font-bold text-blue-600">5 Tersedia</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 border border-gray-100 rounded-2xl flex gap-3 items-center">
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><BatteryCharging className="w-5 h-5"/></div>
                  <div><p className="font-bold text-sm">Stopkontak</p><p className="text-[10px] text-gray-500">Tiap meja tersedia</p></div>
                </div>
                <div className="p-3 border border-gray-100 rounded-2xl flex gap-3 items-center">
                  <div className="bg-green-50 p-2 rounded-xl text-green-600"><Wifi className="w-5 h-5"/></div>
                  <div><p className="font-bold text-sm">Eduroam Fast</p><p className="text-[10px] text-gray-500">Up to 150 Mbps</p></div>
                </div>
                <div className="p-3 border border-gray-100 rounded-2xl flex gap-3 items-center">
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><Wind className="w-5 h-5"/></div>
                  <div><p className="font-bold text-sm">Suhu Sejuk</p><p className="text-[10px] text-gray-500">AC Sentral 22°C</p></div>
                </div>
                <div className="p-3 border border-gray-100 rounded-2xl flex gap-3 items-center">
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600"><Droplets className="w-5 h-5"/></div>
                  <div><p className="font-bold text-sm">Dispenser Air</p><p className="text-[10px] text-gray-500">Panas & Dingin</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-lg font-bold text-gray-900">Sedang di Ruangan</h2>
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Live</span>
              </div>
              
              <div className="flex gap-2 mb-4 border-b border-gray-100 pb-4 overflow-x-auto">
                <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shrink-0">Semua (12)</button>
                <button className="bg-gray-100 text-gray-600 text-sm font-semibold px-4 py-1.5 rounded-full shrink-0 hover:bg-gray-200">Teman Kamu (3)</button>
              </div>

              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-2xl mb-3">
                <div className="flex items-center gap-3">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dimas" className="w-10 h-10 rounded-full bg-blue-50" />
                  <div>
                    <p className="font-bold text-sm text-gray-900">Dimas Pratama <span className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded ml-1">Teman</span></p>
                    <p className="text-xs text-gray-500">Teknik Informatika '21 • Meja 04</p>
                  </div>
                </div>
                <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100"><MessageSquare className="w-4 h-4"/></button>
              </div>

            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-2">Siap mulai belajar?</h3>
              <p className="text-sm text-gray-500 mb-6">Pilih meja saat kamu tiba, lalu pindai QR untuk memulai sesi.</p>
              <Link to="/scan" className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition flex justify-center items-center gap-2">
                Check-in (Scan QR)
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}