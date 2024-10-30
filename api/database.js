import mysql from 'mysql2/promise';
import express from 'express';
const router = express.Router();

// Crear un pool de conexiones a MySQL
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Endpoint para obtener datos desde MySQL
router.get('/data', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM nombre_de_tu_tabla');
    res.json(results);
  } catch (err) {
    console.error('Error al realizar la consulta: ', err);
    res.status(500).send('Error en la consulta');
  }
});

export default router;