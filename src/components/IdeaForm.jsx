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
      const response = await fetch('/api/new_thoughts', {
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
    <div className="p-8 max-w-4xl mx-auto bg-deep-blue rounded-lg shadow-lg space-y-8">
      <h2 className="text-3xl font-bold text-center text-mustard">Recoge Ideas de la Comunidad</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium text-gray-200">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newIdea.name}
            onChange={handleInputChange}
            className="mt-2 p-3 border-2 border-emerald rounded-md focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="thought" className="text-lg font-medium text-gray-200">Idea:</label>
          <textarea
            id="thought"
            name="thought"
            value={newIdea.thought}
            onChange={handleInputChange}
            className="mt-2 p-3 border-2 border-emerald rounded-md focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="w-full bg-mustard text-deep-blue py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors duration-300">Enviar Idea</button>
        {submissionError && <div className="text-red-400 mt-2">Error: {submissionError}</div>}
      </form>
      <div className="mt-8">
        {data && data.length > 0 ? (
          <ul className="space-y-6">
            {data.map((item) => (
              <li key={item.id} className="p-6 border-2 border-light-gray rounded-md bg-lime-soft">
                <div className="text-xl font-semibold text-deep-blue">
                  {item.name} - <span className="text-gray-600 italic">{new Date(item.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-800 mt-3">{item.thought}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-gray-400">No hay ideas disponibles.</div>
        )}
      </div>
    </div>
  );
};

export default IdeaForm;