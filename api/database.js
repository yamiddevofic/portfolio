import mysql from 'mysql2/promise';
import express from 'express';
const router = express.Router();

// Crear un pool de conexiones a MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoint para obtener datos desde MySQL
router.get('/data', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM toughts');
    res.json(results);
  } catch (err) {
    console.error('Error al realizar la consulta: ', err);
    res.status(500).send('Error en la consulta');
  }
});

export default router;