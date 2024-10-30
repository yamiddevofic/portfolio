const mysql = require('mysql2/promise');
const express = require('express');
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

// Endpoint para agregar una nueva idea a la base de datos
router.post('/new_thought', async (req, res) => {
  const { name, thought } = req.body;
  if (!name || !thought) {
    return res.status(400).send('Nombre e idea son requeridos');
  }

  try {
    const [result] = await pool.query('INSERT INTO toughts (name, thought, date) VALUES (?, ?, ?)', [name, thought, new Date()]);
    const newIdea = {
      id: result.insertId,
      name,
      thought,
      date: new Date()
    };
    res.status(201).json(newIdea);
  } catch (err) {
    console.error('Error al insertar la nueva idea: ', err);
    res.status(500).send('Error al insertar la nueva idea');
  }
});

module.exports = router;
