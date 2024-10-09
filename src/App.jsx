import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaDatabase, FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap, FaBriefcase, FaSeedling } from 'react-icons/fa';
import { SiTailwindcss, SiOpenai } from 'react-icons/si';

// Componentes
const AnimatedSection = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const TechCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-800 bg-opacity-50 p-6 rounded-lg text-center transform transition-all hover:scale-105 hover:bg-opacity-70 flex-grow basis-64 max-w-sm m-2"
    >
      <Icon className="text-5xl mb-4 mx-auto text-blue-300" />
      <h3 className="text-2xl font-semibold mb-2 text-blue-100">{title}</h3>
      <p className="text-blue-200">{description}</p>
    </motion.div>
  );
};

const SocialIcon = ({ icon: Icon, href }) => (
  <a href={href} className="text-3xl hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">
    <Icon />
  </a>
);

const InfoCard = ({ icon: Icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-700 bg-opacity-50 p-6 rounded-lg shadow-lg flex items-start space-x-4 transform transition-all hover:scale-105"
    >
      <Icon className="text-3xl text-blue-300 mt-1" />
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-100">{title}</h3>
        <p className="text-blue-200">{description}</p>
      </div>
    </motion.div>
  );
};

// Datos
const techStack = [
  { icon: SiOpenai, title: "Inteligencia Artificial", description: "🤖 Optimización con IA" },
  { icon: FaJs, title: "JavaScript (ES6+)", description: "⚡ Desarrollo moderno y eficiente" },
  { icon: FaReact, title: "ReactJS", description: "⚛️ Interfaces de usuario dinámicas" },
  { icon: FaNodeJs, title: "Node.js", description: "🌐 Backend escalable" },
  { icon: FaHtml5, title: "HTML5", description: "💻 Estructura web semántica" },
  { icon: FaCss3, title: "CSS3", description: "🎨 Estilos avanzados" },
  { icon: FaGitAlt, title: "Git & GitHub", description: "🔗 Control de versiones" },
  { icon: FaDatabase, title: "MySQL", description: "💾 Bases de datos relacionales" }
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/yamiddev" },
  { icon: FaGithub, href: "https://github.com/thecodeofyamid" },
  { icon: FaEnvelope, href: "mailto:yhrodriguez1@hotmail.com" }
];

// Componente principal
const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <AnimatedSection className="text-center min-h-screen flex flex-col justify-center items-center">
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl sm:text-7xl font-bold mb-8"
        >
          Yo soy Yamid
        </motion.h1>
        
        <motion.img 
          src="https://chitaga.tech/images/dev.jpg" 
          alt="Yamid" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-56 h-56 object-cover rounded-full shadow-xl mx-auto mb-8 border-4 border-blue-300"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl mb-8 max-w-2xl mx-auto"
        >
          Desarrollador de software practicante con pasión por la tecnología y la filosofía.
          Inspirando a los jóvenes de Chitagá a través del conocimiento y la innovación.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} {...link} />
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection className="bg-blue-800 bg-opacity-30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl font-bold mb-12 text-center">Sobre mí</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <InfoCard 
                icon={FaGraduationCap}
                title="Formación Académica"
                description="Aprendiz SENA en análisis y desarrollo de software, apasionado por aprender y aplicar nuevas tecnologías en el desarrollo de software."
              />
              <InfoCard 
                icon={FaBriefcase}
                title="Experiencia Profesional"
                description="Prácticante de IT en una empresa de logística, donde aplico mis conocimientos y desarrollo nuevas habilidades en un entorno real."
              />
              <InfoCard 
                icon={FaSeedling}
                title="Crecimiento Continuo"
                description="Constantemente explorando nuevas tecnologías y metodologías para mantenerme actualizado en el cambiante mundo del desarrollo."
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <motion.p 
                className="text-lg text-blue-100 bg-blue-600 bg-opacity-30 p-6 rounded-lg shadow-inner"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Con 22 años y una pasión por la tecnología, me dedico al desarrollo de software con un enfoque en la innovación, la creatividad y la flexibilidad. Esta perspectiva me permite enfrentar los desafíos de la programación con ingenio y una mentalidad abierta, buscando siempre la mejor solución.
              </motion.p>
              <motion.p 
                className="text-lg text-blue-100 bg-blue-600 bg-opacity-30 p-6 rounded-lg shadow-inner"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Fuera del mundo del código, disfruto leer sobre filosofía y psicología, explorar la naturaleza, y practicar la meditación y técnicas de desarrollo personal o mejora continua. También me apasiona crear cosas, ya sea en el ámbito tecnológico o en otras formas de expresión. Estas actividades me permiten mantener un enfoque equilibrado y me inspiran a compartir conocimientos, motivando a otros jóvenes a descubrir el emocionante mundo de la tecnología.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-blue-500 opacity-10 transform -skew-y-6"></div>
      </AnimatedSection>

      <AnimatedSection className="bg-blue-900 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Tecnologías que manejo</h2>
          <div className="flex flex-wrap justify-center">
            {techStack.map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default App;