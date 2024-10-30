import React, { useEffect, useState } from 'react';

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
    return <div className="text-center text-gray-600 mt-4">Conectando a la base de datos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-4">Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Recoge Ideas de la Comunidad</h2>
      <div className="mt-6">
        {data && data.length > 0 ? (
          <ul className="space-y-4">
            {data.map((item) => (
              <li key={item.id} className="p-4 border rounded-lg bg-gray-100">
                <div className="text-lg font-semibold">
                  {item.name} - <span className="text-gray-500 italic">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700 mt-2">{item.thought}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-500">No hay ideas disponibles.</div>
        )}
      </div>
    </div>
  );
};

export default IdeaForm;