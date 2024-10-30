import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IdeaForm() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [thought, setThought] = useState('');

  // Obtener datos de la API al cargar el componente
  useEffect(() => {
    axios.get('/api/datos')
      .then(response => setData(response.data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  // Enviar datos a la API
  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear fecha en el formato adecuado
    const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    axios.post('/api/datos', { name, date, thought })
      .then(response => {
        // Agregar el nuevo dato a la lista actual
        setData([...data, { id: response.data.id, name, date, thought }]);
        setName('');
        setThought('');
      })
      .catch(error => console.error('Error al enviar datos:', error));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Datos de la Base de Datos</h2>
      <ul className="mb-6">
        {data.map((item, index) => (
          <li key={index} className="mb-2">
            <strong>{item.name}</strong> - {item.date} - {item.thought}
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Idea o pensamiento"
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default IdeaForm;
