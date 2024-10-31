import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaSpinner } from 'react-icons/fa';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';

const IdeaForm = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoadingIdeas, setIsLoadingIdeas] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const [newIdea, setNewIdea] = useState({ name: '', thought: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
    // Resetear mensajes de éxito/error al escribir
    if (submitSuccess) setSubmitSuccess(false);
    if (submitError) setSubmitError(null);
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

      const newIdeaWithDate = {
        ...newIdea,
        id: Date.now(),
        date: new Date().toISOString(),
      };

      setIdeas(prev => [newIdeaWithDate, ...(prev || [])]);
      setNewIdea({ name: '', thought: '' });
      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError('No se pudo guardar la idea. Por favor, inténtalo más tarde.');
      console.error('Error submitting idea:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const StatusMessage = ({ success, error }) => {
    if (!success && !error) return null;
    
    return (
      <div className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
        success 
          ? 'bg-emerald-50/10 text-emerald-400 dark:bg-emerald-900/20 dark:text-emerald-300 ring-1 ring-emerald-500/20'
          : 'bg-red-50/10 text-red-400 dark:bg-red-900/20 dark:text-red-300 ring-1 ring-red-500/20'
      }`}>
        {success ? (
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
        )}
        <p className="text-sm">
          {success ? '¡Tu idea ha sido compartida con éxito!' : error}
        </p>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newIdea.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 rounded-lg shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-all dark:placeholder-gray-500 dark:text-gray-100"
              placeholder="¿Cómo te conocemos en el grupo?"
              required
            />
          </div>

          <div>
            <label 
              htmlFor="thought" 
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
            >
              Tu idea para el grupo
            </label>
            <textarea
              id="thought"
              name="thought"
              value={newIdea.thought}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/80 rounded-lg shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:focus:ring-purple-400 dark:focus:border-purple-400 transition-all dark:placeholder-gray-500 dark:text-gray-100"
              placeholder="¿Qué podríamos hacer para mejorar nuestra comunidad?"
              required
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700 rounded-lg shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 gap-2 min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="w-4 h-4 animate-spin" />
                <span>Compartiendo...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Compartir idea</span>
              </>
            )}
          </button>
          
          <StatusMessage success={submitSuccess} error={submitError} />
        </div>
      </form>

      {/* Sección de ideas compartidas */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white/90">
          Ideas compartidas
        </h3>

        {isLoadingIdeas ? (
          <div className="flex justify-center py-8">
            <FaSpinner className="w-6 h-6 animate-spin text-purple-500 dark:text-purple-400" />
          </div>
        ) : loadError ? (
          <div className="p-4 rounded-lg bg-red-50/10 dark:bg-red-900/20 text-red-400 dark:text-red-300 text-sm ring-1 ring-red-500/20">
            {loadError}
          </div>
        ) : ideas.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              Sé el primero en compartir una idea para la comunidad
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="p-6 bg-white/80 dark:bg-gray-800/50 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200/20 dark:border-gray-700/30 backdrop-blur-sm"
              >
                <div className="flex justify-between items-baseline mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white/90">
                    {idea.name}
                  </h4>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(idea.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </time>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {idea.thought}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default IdeaForm;