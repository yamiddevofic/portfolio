import React, { useEffect, useState } from 'react';

const IdeaForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [newIdea, setNewIdea] = useState({ name: '', thought: '' });
  const [submissionError, setSubmissionError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    
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
      setData((prevData) => [savedIdea, ...prevData]);
      setNewIdea({ name: '', thought: '' });
    } catch (err) {
      setSubmissionError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-8 bg-gradient-to-r from-cyan-600 to-blue-900 text-center">
          <h2 className="text-3xl font-bold text-white font-raleway">
            Compartir Ideas
          </h2>
          <p className="mt-2 text-cyan-100 font-libre-baskerville">
            ¿Tienes una idea innovadora? Compártela con nuestra comunidad de desarrolladores
          </p>
        </div>

        <div className="p-6 lg:p-8 space-y-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newIdea.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label 
                htmlFor="thought" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tu Idea
              </label>
              <textarea
                id="thought"
                name="thought"
                value={newIdea.thought}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 ease-in-out"
                placeholder="Describe tu idea innovadora..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'Compartir Idea'
              )}
            </button>

            {submissionError && (
              <div className="flex items-center p-4 text-red-600 bg-red-50 rounded-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>{submissionError}</span>
              </div>
            )}
          </form>

          {/* Ideas List */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 font-raleway border-b pb-2">
              Ideas de la Comunidad
            </h3>
            
            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
              </div>
            ) : error ? (
              <div className="text-center py-8 text-red-600 bg-red-50 rounded-lg">
                <span>{error}</span>
              </div>
            ) : data?.length > 0 ? (
              <div className="space-y-4">
                {data.map((item) => (
                  <div
                    key={item.id}
                    className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="font-raleway font-semibold text-lg text-blue-900">
                        {item.name}
                      </h4>
                      <span className="text-sm text-gray-500 font-libre-baskerville">
                        {new Date(item.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="mt-3 text-gray-700 font-libre-baskerville">
                      {item.thought}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <p className="text-gray-500 font-libre-baskerville">
                  Sé el primero en compartir una idea
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaForm;