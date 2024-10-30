import mysql from 'mysql';
import express from 'express';
const router = express.Router();

// Crear conexión a MySQL
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL: ', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Endpoint para obtener datos desde MySQL
router.get('/data', (req, res) => {
  const query = 'SELECT * FROM toughts';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta: ', err);
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
});

export default router;
