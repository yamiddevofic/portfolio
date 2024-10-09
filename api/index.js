import express from 'express';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

const app = express();

// Crear la conexión a MySQL utilizando las variables de entorno
const db = await mysql.createConnection({
  host: process.env.DB_HOST,        // Dirección de tu base de datos en Hostinger
  user: process.env.DB_USER,        // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario
  database: process.env.DB_NAME,     // Nombre de la base de datos
});

// Endpoint para verificar la conexión
app.get("/api/db-check", async (req, res) => {
  try {
    // Verifica la conexión ejecutando una consulta simple
    const [rows] = await db.query('SELECT 1');
    res.send('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    res.status(500).send('Error al conectar a la base de datos');
  }
});

// Iniciar el servidor en el puerto 3001 (o el que prefieras)
app.listen(3001, () => {
  console.log('Servidor corriendo en el puerto 3001');
});

export default app;
