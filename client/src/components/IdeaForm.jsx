import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IdeaForm() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  // Obtener datos de la API
  useEffect(() => {
    axios.get('/api/datos')
      .then(response => setData(response.data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  // Enviar datos a la API
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/datos', { nombre, edad })
      .then(response => {
        setData([...data, { nombre, edad }]);
        setNombre('');
        setEdad('');
      })
      .catch(error => console.error('Error al enviar datos:', error));
  };

  return (
    <div>
      <h1>Datos de la Base de Datos</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.nombre} - {item.edad}</li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
}

export default IdeaForm;
