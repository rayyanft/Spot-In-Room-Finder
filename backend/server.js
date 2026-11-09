const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
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

app.post('/api/register', async (req, res) => {
  const { nama, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      'INSERT INTO profiles (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email',
      [nama, email, hashedPassword, 'Mahasiswa']
    );
    res.json({ pesan: "Akun berhasil dibuat!", user: newUser.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email mungkin sudah terdaftar atau terjadi kesalahan." });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await pool.query('SELECT * FROM profiles WHERE email = $1', [email]);
    if (user.rows.length === 0) {
      return res.status(401).json({ error: "Email tidak ditemukan!" });
    }

    const passwordValid = await bcrypt.compare(password, user.rows[0].password);
    if (!passwordValid) {
      return res.status(401).json({ error: "Password salah!" });
    }

    res.json({ pesan: "Login sukses!", user: { id: user.rows[0].id, name: user.rows[0].name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Terjadi kesalahan server." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server Backend berjalan di https://localhost:${PORT}`);
});