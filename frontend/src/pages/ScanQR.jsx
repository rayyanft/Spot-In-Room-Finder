import React, { useState } from 'react';
import { QrCode, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

export default function ScanQR() {
  const [roomId, setRoomId] = useState('');
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleCheckIn = async (e) => {
    e.preventDefault();
    
    setStatus({ loading: true, error: '', success: '' });

    const user = JSON.parse(localStorage.getItem('user'));
    
    try {
      const response = await fetch('http://localhost:5000/api/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id, room_id: parseInt(roomId) })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        setStatus({ loading: false, error: data.error, success: '' });
      } else {
        setStatus({ loading: false, error: '', success: data.pesan });
        setRoomId('');
      }
    } catch (err) {
      setStatus({ loading: false, error: 'Gagal terhubung ke server', success: '' });
    }
  };
}