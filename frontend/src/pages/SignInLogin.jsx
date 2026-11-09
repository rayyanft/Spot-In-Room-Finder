import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function Auth() {
  // State untuk menggeser pintu animasi (true = Login, false = Sign Up)
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // State untuk form input
  const [formData, setFormData] = useState({ nama: '', email: '', password: '' });
  const [pesanError, setPesanError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPesanError('');
    
    // Menentukan rute berdasarkan mode (Login atau Register)
    const url = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setPesanError(data.error);
      } else {
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate('/');
      }
    } catch (err) {
      setPesanError('Gagal terhubung ke server');
    }
  };

  return (
    // md:flex-row untuk Login, md:flex-row-reverse untuk Sign Up
    <div className={`min-h-screen flex flex-col md:flex-row overflow-hidden bg-white ${!isLogin ? 'md:flex-row-reverse' : ''}`}>
      
      {/* ================= PANEL FORM PUTIH ================= */}
      {/* properti 'layout' menyuruh elemen ini bergeser otomatis secara mulus */}
      <motion.div layout className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 z-10">
        <div className="w-full max-w-md">
          <p className="text-blue-600 font-bold text-sm mb-8 uppercase tracking-widest">Portal Mahasiswa</p>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Selamat datang kembali.' : 'Mulai dari akunmu.'}
              </h1>
              <p className="text-gray-500 mb-8">
                {isLogin ? 'Masuk ke Spot-In dan lanjutkan produktivitasmu.' : 'Daftarkan identitas mahasiswa untuk bergabung.'}
              </p>

              {pesanError && (
                <div className="bg-red-50 text-red-600 p-3 rounded-xl mb-4 text-sm font-medium border border-red-100">
                  {pesanError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Nama Lengkap</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                      <input type="text" name="nama" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" placeholder="Nama sesuai kartu mahasiswa" />
                    </div>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Kampus</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input type="email" name="email" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 outline-none" placeholder="nrp@student.its.ac.id" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                    <input type="password" name="password" onChange={handleChange} required className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-600 outline-none" placeholder="Masukkan password" />
                  </div>
                </div>

                <button type="submit" className="w-full bg-blue-700 text-white font-bold py-3.5 rounded-xl hover:bg-blue-800 transition flex items-center justify-center gap-2 mt-4">
                  {isLogin ? 'Login' : 'Sign Up'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{' '}
                <button onClick={() => setIsLogin(!isLogin)} className="font-bold text-blue-700 hover:underline">
                  {isLogin ? "Sign Up di sini" : "Login di sini"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ================= PANEL BIRU (PINTU GESER) ================= */}
      <motion.div layout className="w-full md:w-1/2 bg-blue-700 p-8 md:p-16 flex flex-col justify-center text-white z-20 shadow-2xl relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-700 font-black text-2xl">S</div>
            <span className="text-2xl font-bold tracking-tight">Spot-In</span>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'biru-login' : 'biru-register'}
              initial={{ opacity: 0, x: isLogin ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? -20 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-5xl font-bold mb-4 leading-tight">
                {isLogin ? 'Login.' : 'Sign-Up.'}
              </h2>
              <p className="text-blue-100 text-lg">
                Menggunakan akun yang sudah kamu daftarkan.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

    </div>
  );
}