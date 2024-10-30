const express = require('express');
const databaseRouter = require('./database.js');

const app = express();

// Usar el router de la base de datos
app.use('/api', databaseRouter);

module.exports = app;
