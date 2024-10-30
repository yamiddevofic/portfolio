import React, { useEffect, useState } from 'react';
import './IdeaForm.css';

const IdeaForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Error al conectar con la base de datos');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Conectando a la base de datos...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="idea-form">
      <h2>Recoge Ideas de la Comunidad</h2>
      <div className="data-container">
        {data && data.length > 0 ? (
          <ul>
            {data.map((item) => (
              <li key={item.id} className="data-item">
                <div className="data-header">
                  <strong>{item.name}</strong> - <em>{new Date(item.date).toLocaleDateString()}</em>
                </div>
                <p className="thought">{item.thought}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div>No hay ideas disponibles.</div>
        )}
      </div>
    </div>
  );
};

export default IdeaForm;