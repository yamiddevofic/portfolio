// api/db-check.js

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config(); // Cargar las variables de entorno

// Crear la conexión a MySQL utilizando las variables de entorno
let db;

async function createConnection() {
  if (!db) {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  return db;
}

// Función handler para manejar la solicitud
export default async function handler(req, res) {
  try {
    const connection = await createConnection();
    
    // Verifica la conexión ejecutando una consulta simple
    const [rows] = await connection.query('SELECT 1');
    
    res.status(200).send('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    res.status(500).send('Error al conectar a la base de datos');
  }
}
