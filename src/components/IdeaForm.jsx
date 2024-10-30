import React, { useEffect, useState } from 'react';

const IdeaForm = () => {
  // Estados separados para diferentes partes de la funcionalidad
  const [ideas, setIdeas] = useState([]);
  const [isLoadingIdeas, setIsLoadingIdeas] = useState(true);
  const [loadError, setLoadError] = useState(null);
  
  const [newIdea, setNewIdea] = useState({ name: '', thought: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Cargar ideas existentes
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('No se pudieron cargar las ideas');
        const data = await response.json();
        setIdeas(data);
      } catch (err) {
        setLoadError('No se pudieron cargar las ideas anteriores');
        console.error('Error loading ideas:', err);
      } finally {
        setIsLoadingIdeas(false);
      }
    };

    fetchIdeas();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/new_thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdea),
      });

      if (!response.ok) throw new Error('Error al enviar la idea');

      // Incluso si la API falla, mostramos la idea localmente
      const newIdeaWithDate = {
        ...newIdea,
        id: Date.now(),
        date: new Date().toISOString(),
      };

      setIdeas(prev => [newIdeaWithDate, ...(prev || [])]);
      setNewIdea({ name: '', thought: '' });
      setSubmitSuccess(true);
      alert("¡Su idea ha sido registrada con éxito! Muchas gracias.")
    } catch (err) {
      setSubmitError('No se pudo guardar la idea, pero puedes intentarlo más tarde');
      console.error('Error submitting idea:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-raleway"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newIdea.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-purple-500 dark:focus:border-purple-400 transition-all font-libre-baskerville text-gray-900 dark:text-white"
              placeholder="Como te conocemos en el grupo"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="thought" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2 font-raleway"
            >
              Tu idea para el grupo
            </label>
            <textarea
              id="thought"
              name="thought"
              value={newIdea.thought}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-purple-500 dark:focus:border-purple-400 transition-all font-libre-baskerville text-gray-900 dark:text-white"
              placeholder="¿Qué podríamos hacer para mejorar nuestra comunidad?"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-raleway"
        >
          {isSubmitting ? 'Compartiendo...' : 'Compartir idea'}
        </button>
      </form>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-raleway">
          Ideas compartidas
        </h3>

        <div className="space-y-4">
          {ideas.map((idea) => (
            <div
              key={idea.id}
              className="p-6 bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="font-medium text-gray-900 dark:text-white font-raleway">
                  {idea.name}
                </h4>
                <time className="text-sm text-gray-500 dark:text-gray-400 font-libre-baskerville">
                  {new Date(idea.date).toLocaleDateString()}
                </time>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-libre-baskerville">
                {idea.thought}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IdeaForm;