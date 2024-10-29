import { db } from '../../lib/db/database';
import cors from 'cors';
app.use(cors());

export async function post({ request }) {
  try {
    const { thought, name } = await request.json();
    const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // Genera la fecha en formato compatible con MySQL

    // Guardar el pensamiento en la base de datos con fecha
    const [result] = await db.execute(
      'INSERT INTO thoughts (name, date, thought) VALUES (?, ?, ?)',
      [thought, name || null, date]
    );

    return new Response(JSON.stringify({ message: 'Pensamiento guardado correctamente', id: result.insertId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al guardar el pensamiento:', error);
    return new Response(JSON.stringify({ message: 'Error al guardar el pensamiento' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
