const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Para procesar JSON en las solicitudes

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Usa variables de entorno en Vercel
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Conectar a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

// Endpoint para obtener datos
app.get('/api/datos', (req, res) => {
  const sql = 'SELECT * FROM thoughts';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener datos' });
    }
    res.json(results);
  });
});

// Endpoint para agregar datos
app.post('/api/datos', (req, res) => {
  const { nombre, edad } = req.body;
  const sql = 'INSERT INTO thoughts (name, date, thought) VALUES (?, ?)';
  db.query(sql, [nombre, edad], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al insertar datos' });
    }
    res.json({ message: 'Datos insertados correctamente' });
  });
});

// Exportar el servidor como función handler para Vercel
module.exports = app;
