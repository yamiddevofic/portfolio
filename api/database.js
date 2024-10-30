const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const databaseRouter = require('./database.js');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['polling'],
});

// Middleware para procesar datos JSON en el cuerpo de la solicitud
app.use(express.json());

// Usar el router de la base de datos
app.use('/api', databaseRouter);

// Configurar WebSocket con HTTP Polling
io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado');

  // Enviar un mensaje de bienvenida al cliente conectado
  socket.emit('message', 'Bienvenido al servidor WebSocket');

  // Escuchar mensajes desde el cliente
  socket.on('newIdea', (idea) => {
    console.log('Nueva idea recibida:', idea);
    // Emitir la nueva idea a todos los clientes conectados
    io.emit('newIdeaBroadcast', idea);
  });

  // Manejar la desconexión
  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado');
  });
});

// Exportar el handler para que Vercel pueda usarlo como función sin servidor
module.exports = app;

// Nota: Para que funcione en Vercel, debes usar "vercel.json" para redirigir las funciones hacia el archivo donde esté tu servidor.
