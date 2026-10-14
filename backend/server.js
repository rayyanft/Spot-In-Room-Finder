const express = require("express");
const cors = require("cors");
const {Pool} = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
  }
});

app.get("/uji", (req, res) => {
    res.send("Server Spot-In berhasil menyala!");
});

app.get("/api/cek-db", async (req,res) => {
    try {
        const hasil = await pool.query("SELECT NOW()");
        res.json({
            pesan: "Berhasil menyusup ke Database Supabase",
            waktu_server_database: hasil.rows[0].now
        });
    } 
    catch(error) {
        console.error("Error database", error.message);
        res.status(500).json({error : "Gagal terhubung ke database"});
    }
});

app.get('/api/rooms', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM rooms');
    
    res.json(result.rows);
  } catch (error) {
    console.error("Error mengambil data ruangan:", error.message);
    res.status(500).json({ error: 'Terjadi kesalahan pada server saat mengambil data' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Backend berjalan di https://localhost:${PORT}`);
});