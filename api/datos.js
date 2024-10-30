import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,        // Asegúrate de definir estas variables en tu entorno
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export async function get() {
  try {
    // Conectar a la base de datos
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.query('SELECT * FROM thoughts');
    await connection.end();

    // Devolver los datos en formato JSON
    return new Response(JSON.stringify(rows), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return new Response(JSON.stringify({ error: 'Error al obtener datos' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}

export async function post({ request }) {
  try {
    const { name, thought } = await request.json();
    const date = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD

    // Conectar a la base de datos
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      'INSERT INTO thoughts (name, date, thought) VALUES (?, ?, ?)',
      [name, date, thought]
    );
    await connection.end();

    // Devolver respuesta exitosa
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al enviar datos:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar datos' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}