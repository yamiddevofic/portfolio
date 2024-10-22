import React, { useState, useEffect } from 'react'; 
import './App.css'; // Aquí aplicarás TailwindCSS
import {
  FaBars, FaTimes, FaSun, FaMoon, FaHome, FaUser,
  FaConciergeBell, FaProjectDiagram, FaEnvelope,
  FaLaptopCode, FaPaperPlane, FaCameraRetro, FaLightbulb,
  FaCode, FaChalkboardTeacher, FaMagic
} from 'react-icons/fa';

const SubmarcaCard = ({ title, description, image }) => (
  <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 bg-[#F0F4F8] dark:bg-[#1E293B]">
    <img
      src={image}
      alt={title}
      className="w-full h-60 object-cover transition-transform transform group-hover:scale-110"
    />
    <div className="p-4">
      <h3 className="text-base font-semibold text-[#1E3A8A] dark:text-[#F6C453] mb-1 font-raleway">
        {title}
      </h3>
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#1E293B] transition-all duration-300 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
      <p className="text-sm text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville">
        {description}
      </p>
    </div>
  </div>
);

const ProyectoCard = ({ title, description, image, enlace }) => (
  <a href={enlace}>
    <div className="relative group overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105 bg-[#F0F4F8] dark:bg-[#1E293B]">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover transition-transform transform group-hover:scale-110"
      />
      <div className="p-4">
        <h3 className="text-base font-semibold text-[#1E3A8A] dark:text-[#F6C453] mb-1 font-raleway">
          {title}
        </h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-[#1E293B] transition-all duration-300 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
        <p className="text-sm text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville">
          {description}
        </p>
      </div>
    </div>
  </a>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode !== null ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const carouselItems = [
    {
      title: 'Yamid Rodriguez | Tech',
      description:
        'Desarrollo de aplicaciones web y enseñanza de programación con tecnologías modernas como React, Vite y TailwindCSS.',
      image: '/yamid-tech.png',
    },
    {
      title: 'Yamid Rodriguez | Photography',
      description:
        'Creación de fotografías artísticas que transmiten emociones, capturando la esencia de cada momento.',
      image: '/yamid-photo.png',
    },
    {
      title: 'Yamid Rodriguez | Tarot',
      description:
        'Lecturas de tarot personalizadas y enseñanza de tarot, ayudando a las personas a explorar su interior y descubrir respuestas significativas.',
      image: '/yamid-tarot.png',
    },
    {
      title: 'Yamid Rodriguez | Philosophy',
      description:
        'Exploración filosófica y contenidos sobre psicología que invitan a la introspección.',
      image: '/yamid-philo.png',
    },
  ];

  const proyectos = [
    {
      "title": "MarvyShopmarket",
      "description": "Aplicación para tiendas de barrio que permite gestionar productos, finanzas, proveedores, suministros y empleados.",
      "image": "https://chitaga.tech/images/marvyshopmarket-home.png",
      "enlace": "https://www.marvyshopmarket.com"
    },
    {
      "title": "Tarot, Café y Música",
      "description": "Grupo comunitario para compartir conocimientos de tarot, crear conexiones profundas y explorar juntos el arte del tarot con el acompañamiento de buena música y un ambiente de reflexión.",
      "image": "https://chitaga.tech/images/tarot-cafe-musica.png",
      "enlace": "https://yamidtarot.online/grupo-whatsapp"
    },
    {
      "title": "Curso de Tarot Asistido por IA (En desarrollo)",
      "description": "Programa educativo que combina el aprendizaje del tarot con el uso de inteligencia artificial, ayudando a los estudiantes a entender los arcanos de una manera interactiva y moderna.",
      "image": "https://chitaga.tech/images/tarot-ai.webp"
    },
    {
      "title": "Extensión de Chrome para Correos Personalizados (Por publicar)",
      "description": "Extensión de Chrome que permite insertar diferentes plantillas de correos HTML personalizados, ideal para capacitaciones, bienvenida de clientes y despedidas, facilitando la comunicación dentro de la empresa.",
      "image": "https://chitaga.tech/images/customized-email.webp"
    }
  ];
  const tecnologiasDominadas = [
    'ReactJS',
    'JavaScript',
    'Python',
    'MySQL',
    'HTML5/CSS3'
  ];

  const tecnologiasEnAprendizaje = [
    'Docker',
    'Kubernetes',
    'Linux',
    'MongoDB',
    'TailwindCSS'
  ];

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 50);
      if (currentScroll > lastScrollTop) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="font-raleway bg-gradient-to-b from-[#D8EAF5] to-[#E6F5EA] dark:from-[#0B0F1A] dark:to-[#151C27] min-h-screen text-gray-900 dark:text-gray-100">
      {/* Encabezado */}
      <header className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 md:p-6 transition-all duration-500 ease-in-out ${showHeader ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${isScrolled ? 'bg-[#E5E7EB]/80 dark:bg-[#1C2733]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'} z-20`}>
        <div className="flex items-center space-x-4">
          <div className="p-2 rounded-full">
            <img
              src={isDarkMode ? '/Yamid-rodriguez-light.png' : '/Yamid-rodriguez-dark.png'}
              className="w-16 h-16 object-contain lg:w-20 lg:h-20 sm:w-12 sm:h-12"
              alt="Logo Yamid Rodriguez"
            />
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-12">
          {['Inicio', 'Sobre Mí', 'Servicios', 'Submarcas', 'Tecnologías', 'Proyectos', 'Contacto'].map((section, index) => (
            <a key={index} href={`#${section.toLowerCase().replace(' ', '')}`} className="flex items-center text-[#1E3A8A] dark:text-[#F6C453] hover:text-[#345B79] dark:hover:text-[#F6C453]/80 transition font-raleway text-lg md:text-xl">
              {section}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-6">
          <button onClick={toggleDarkMode} className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-[#1E3A8A] dark:border-[#F6C453] flex items-center justify-center transition-colors duration-300">
            <div className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-[#F6C453]' : 'bg-[#1E3A8A]'}`}></div>
            {isDarkMode ? <FaSun className="text-[#1E3A8A] z-10 text-2xl md:text-3xl" /> : <FaMoon className="text-[#F6C453] z-10 text-2xl md:text-3xl" />}
          </button>
          <div className="md:hidden w-1/6 z-30" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl md:text-4xl" />
            ) : (
              <FaBars className="text-[#1E3A8A] dark:text-[#F6C453] text-3xl md:text-4xl" />
            )}
          </div>
        </div>
      </header>

      {/* Menú Responsive */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#1E3A8A] dark:bg-[#0A0E17] flex flex-col items-center justify-center space-y-8 md:space-y-12 z-20">
          {['Inicio', 'Sobre Mí', 'Servicios', 'Submarcas', 'Tecnologías', 'Proyectos', 'Contacto'].map((section, index) => (
            <a key={index} href={`#${section.toLowerCase().replace(' ', '')}`} className="text-[#F6C453] dark:text-[#A3E635] text-2xl md:text-3xl hover:text-[#345B79] dark:hover:text-[#A3E635]/80 transition font-raleway" onClick={toggleMenu}>{section}</a>
          ))}
        </div>
      )}

      {/* Sección Hero */}
      <section id="inicio" className="flex items-center justify-center min-h-screen bg-cover bg-center px-6 md:px-8" style={{ backgroundImage: `url(${isDarkMode ? '/background-dark.png' : '/background-light.png'})` }}>
        <div className="text-center mt-10 max-w-xl md:max-w-2xl bg-[#F0F4F8]/90 dark:bg-[#1E293B]/80 p-6 md:p-10 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#1E3A8A] dark:text-[#F6C453] font-raleway leading-tight flex items-center justify-center">
            <FaLightbulb className="mr-2" /> Impulsa tu visión con tecnología y creatividad
          </h1>
          <p className="text-lg md:text-xl text-[#345B79] dark:text-[#D1D5DB] mb-4 md:mb-6 font-libre-baskerville">
            Soy Yamid Rodriguez, un desarrollador full stack que une innovación y sabiduría para crear experiencias digitales únicas y significativas.
          </p>
        </div>
      </section>

      {/* Sección Sobre Mí */}
      <section id="sobremí" className="py-12 px-8 md:py-16 md:px-20 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-8 font-raleway flex items-center justify-center">
          <FaUser className="mr-2" /> Sobre Mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="order-2 md:order-1">
            <p className="text-lg md:text-xl text-[#345B79] dark:text-[#D1D5DB] mb-6 font-libre-baskerville">
            Mi objetivo es ayudar a otros a transformar ideas en realidad digital, integrando habilidades técnicas con un enfoque intuitivo y humano. Me apasiona la tecnología, la innovación y la creatividad, siempre buscando el equilibrio entre lo técnico y lo personal en cada proyecto de desarrollo web personalizado.
            </p>
            <p className="text-lg md:text-xl text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville mb-6">
            Además de ser desarrollador, disfruto compartir mi conocimiento y enseñar programación, con un fuerte interés en la filosofía, la psicología y el tarot. Me motiva guiar a otros en su camino de aprendizaje, conectando la tecnología con el crecimiento personal y explorando cómo cada herramienta puede enriquecer nuestras vidas.
            </p>
            <p className="text-lg md:text-xl text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville">
            Lidero proyectos colaborativos con una actitud curiosa, abierta y enfocada en transformar ideas en experiencias significativas, siempre cultivando un ambiente de reflexión y aprendizaje continuo.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img src="https://chitaga.tech/images/dev.jpg" alt="Foto de Yamid Rodriguez" className="rounded-lg shadow-lg w-80 h-80 object-cover sm:hidden hidden md:block lg:block" />
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section id="servicios" className="py-12 px-8 md:py-16 md:px-20 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-8 font-raleway flex items-center justify-center">
          <FaConciergeBell className="mr-2" /> Servicios Ofrecidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Desarrollo de Aplicaciones Web',
              description: 'Soluciones personalizadas utilizando tecnologías modernas como React, Vite, TailwindCSS, y más.',
              icon: <FaLaptopCode className="text-3xl text-[#1E3A8A] dark:text-[#F6C453] mb-4" />
            },
            {
              title: 'Lecturas de Tarot',
              description: 'Sesiones de tarot personalizadas para ayudar a obtener claridad y responder preguntas importantes.',
              icon: <FaMagic className="text-3xl text-[#1E3A8A] dark:text-[#F6C453] mb-4" />
            },
            {
              title: 'Fotografía Artística',
              description: 'Sesiones fotográficas para capturar momentos que transmitan emociones y cuenten una historia.',
              icon: <FaCameraRetro className="text-3xl text-[#1E3A8A] dark:text-[#F6C453] mb-4" />
            },
            {
              title: 'Enseñanza de Programación',
              description: 'Clases y talleres para aprender a programar, desde conceptos básicos hasta tecnologías avanzadas.',
              icon: <FaChalkboardTeacher className="text-3xl text-[#1E3A8A] dark:text-[#F6C453] mb-4" />
            },
            {
              title: 'Edición de Videos',
              description: 'Edición profesional para videos que requieren transmitir un mensaje claro y emocional.',
              icon: <FaMagic className="text-3xl text-[#1E3A8A] dark:text-[#F6C453] mb-4" />
            }
          ].map((service, index) => (
            <div key={index} className="bg-[#F0F4F8] dark:bg-[#1E293B] p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
              {service.icon}
              <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] mb-3 font-raleway">{service.title}</h3>
              <p className="text-base text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Submarcas */}
      <section id="submarcas" className="py-12 px-8 md:py-16 md:px-20 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-8 text-center font-raleway flex items-center justify-center">
          <FaProjectDiagram className="mr-2" /> Submarcas Destacadas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {carouselItems.map((item, index) => (
            <SubmarcaCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Sección Tecnologías */}
      <section id="tecnologias" className="py-12 px-8 md:py-16 md:px-20 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-8 font-raleway flex items-center justify-center">
          <FaCode className="mr-2" /> Tecnologías que Manejo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          <div className="bg-[#F0F4F8] dark:bg-[#1E293B] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] mb-4 font-raleway">Tecnologías Dominadas</h3>
            <ul className="list-disc list-inside text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville space-y-3">
              {tecnologiasDominadas.map((tech, index) => (
                <li key={index} className="p-2 bg-white dark:bg-[#2C3E50] rounded-md shadow-md">{tech}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F0F4F8] dark:bg-[#1E293B] p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-[#1E3A8A] dark:text-[#F6C453] mb-4 font-raleway">Tecnologías en Aprendizaje</h3>
            <ul className="list-disc list-inside text-[#345B79] dark:text-[#D1D5DB] font-libre-baskerville space-y-3">
              {tecnologiasEnAprendizaje.map((tech, index) => (
                <li key={index} className="p-2 bg-white dark:bg-[#2C3E50] rounded-md shadow-md">{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="py-12 px-8 md:py-16 md:px-20 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-8 font-raleway flex items-center justify-center">
          <FaProjectDiagram className="mr-2" /> Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {proyectos.map((project, index) => (
            <ProyectoCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="relative py-16 px-8 md:py-20 md:px-20 lg:px-32">
        <div className="absolute inset-0 -z-10 bg-[#1E3A8A] dark:bg-[#A3E635] opacity-10"></div>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1E3A8A] dark:text-[#F6C453] mb-10 md:mb-12 font-raleway flex items-center justify-center">
          <FaEnvelope className="mr-2" /> Hablemos y creemos juntos
        </h2>
        <div className="flex justify-center">
          <form className="w-full max-w-lg md:max-w-2xl bg-[#F0F4F8]/90 dark:bg-[#1E293B]/80 p-8 md:p-10 rounded-md shadow-md">
            <label htmlFor="name" className="block font-medium mb-3 md:mb-4 text-[#1E3A8A] dark:text-[#F6C453] font-raleway text-lg">
              Tu Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 md:p-4 mb-5 md:mb-6 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Tu nombre completo"
            />
            <label htmlFor="message" className="block font-medium mb-3 md:mb-4 text-[#1E3A8A] dark:text-[#F6C453] font-raleway text-lg">
              Tu Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 md:p-4 mb-5 md:mb-6 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] dark:focus:ring-[#A3E635] bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-libre-baskerville"
              placeholder="Cuéntame sobre tus ideas o preguntas"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 md:py-4 bg-[#2C7A7B] dark:bg-[#A3E635] text-white dark:text-gray-900 font-bold rounded-md hover:bg-[#345B79] dark:hover:bg-[#A3E635]/90 transition font-raleway text-lg flex items-center justify-center">
              <FaPaperPlane className="mr-2" /> Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
