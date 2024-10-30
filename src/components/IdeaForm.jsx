import React, { useEffect, useState } from 'react';

const IdeaForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al conectar con la base de datos');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Conectando a la base de datos...</div>;
  }

  return (
    <div>
      <h2>Datos desde la base de datos:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default IdeaForm;
