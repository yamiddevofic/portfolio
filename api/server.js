import express from 'express';
import databaseRouter from './database.js';

const app = express();

// Usar el router de la base de datos
app.use('/api', databaseRouter);

export default app;
