const express = require('express');
const app = express();
const mysql = require('mysql');

// Configuración de la base de datos
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL: ', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Configuración de Express
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

module.exports = app;
