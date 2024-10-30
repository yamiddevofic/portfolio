import React, { useEffect, useState } from 'react';

const IdeaForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newIdea, setNewIdea] = useState({ name: '', thought: '' });
  const [submissionError, setSubmissionError] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea({ ...newIdea, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null);
    try {
      const response = await fetch('/api/new_thought', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newIdea),
      });
      if (!response.ok) {
        throw new Error('Error al enviar la idea');
      }
      const savedIdea = await response.json();
      setData((prevData) => [...prevData, savedIdea]);
      setNewIdea({ name: '', thought: '' });
    } catch (err) {
      setSubmissionError(err.message);
    }
  };

  if (isLoading) {
    return <div className="text-center text-gray-600 mt-4">Conectando a la base de datos...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-4">Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center">Recoge Ideas de la Comunidad</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newIdea.name}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="thought" className="font-semibold">Idea:</label>
          <textarea
            id="thought"
            name="thought"
            value={newIdea.thought}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded-md"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Enviar Idea</button>
        {submissionError && <div className="text-red-500 mt-2">Error: {submissionError}</div>}
      </form>
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
