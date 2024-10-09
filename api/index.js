import express from 'express';

const app = express();

app.get("/api/hello", (req, res) => res.send("¡Hola Mundo!"));

// No llamamos a app.listen en Vercel

export default app;
