import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative"
      style={{ backgroundColor: '#202e22' }}
    >
      {/* Decorative top border */}
      <div 
        className="h-1 bg-gradient-to-r"
        style={{ 
          backgroundImage: 'linear-gradient(90deg, #c49b24, #4d94a5, #579295, #c49b24)'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div 
              className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent"
              style={{ 
                backgroundImage: 'linear-gradient(135deg, #c49b24, #ffd700)'
              }}
            >
              LOGO
            </div>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: '#72aba0' }}
            >
              Transformamos ideas en experiencias digitales excepcionales. 
              Creamos soluciones innovadoras que impulsan tu negocio hacia el futuro.
            </p>
            <div className="flex space-x-4 pt-2">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Youtube, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
                  style={{ 
                    backgroundColor: '#122f3a',
                    color: '#69998c'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4d94a5';
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#122f3a';
                    e.target.style.color = '#69998c';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: '#c49b24' }}
            >
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {['Inicio', 'Sobre Nosotros', 'Servicios', 'Portfolio', 'Blog', 'Contacto'].map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm transition-colors duration-200 hover:text-yellow-400 relative group"
                    style={{ color: '#72aba0' }}
                  >
                    {link}
                    <span 
                      className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: '#c49b24' }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: '#c49b24' }}
            >
              Servicios
            </h3>
            <ul className="space-y-2">
              {[
                'Desarrollo Web', 
                'Diseño UX/UI', 
                'Marketing Digital', 
                'SEO & Analytics', 
                'Consultoría', 
                'Soporte Técnico'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-sm transition-colors duration-200 hover:text-yellow-400 relative group"
                    style={{ color: '#72aba0' }}
                  >
                    {service}
                    <span 
                      className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: '#c49b24' }}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: '#c49b24' }}
            >
              Contacto
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: '#122f3a' }}
                >
                  <Mail size={16} style={{ color: '#4d94a5' }} />
                </div>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: '#69998c' }}
                  >
                    Email
                  </p>
                  <a 
                    href="mailto:info@empresa.com"
                    className="text-sm hover:text-yellow-400 transition-colors duration-200"
                    style={{ color: '#72aba0' }}
                  >
                    info@empresa.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: '#122f3a' }}
                >
                  <Phone size={16} style={{ color: '#4d94a5' }} />
                </div>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: '#69998c' }}
                  >
                    Teléfono
                  </p>
                  <a 
                    href="tel:+1234567890"
                    className="text-sm hover:text-yellow-400 transition-colors duration-200"
                    style={{ color: '#72aba0' }}
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div 
                  className="p-2 rounded-lg mt-0.5"
                  style={{ backgroundColor: '#122f3a' }}
                >
                  <MapPin size={16} style={{ color: '#4d94a5' }} />
                </div>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: '#69998c' }}
                  >
                    Dirección
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: '#72aba0' }}
                  >
                    123 Business Ave,<br />
                    Suite 100, City 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div 
          className="border-t border-opacity-20 pt-8 mb-8"
          style={{ borderColor: '#306677' }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 
              className="text-lg font-semibold mb-2"
              style={{ color: '#c49b24' }}
            >
              Suscríbete a nuestro Newsletter
            </h3>
            <p 
              className="text-sm mb-4"
              style={{ color: '#72aba0' }}
            >
              Recibe las últimas noticias y actualizaciones directamente en tu inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Tu email..."
                className="flex-1 px-4 py-2 rounded-lg border-2 bg-opacity-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ 
                  backgroundColor: '#122f3a',
                  borderColor: '#306677',
                  focusRingColor: '#4d94a5'
                }}
              />
              <button 
                className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                style={{ 
                  backgroundColor: '#4d94a5',
                  border: '2px solid #579295'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#579295';
                  e.target.style.boxShadow = '0 8px 25px rgba(77, 148, 165, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#4d94a5';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="border-t border-opacity-20 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          style={{ borderColor: '#306677' }}
        >
          <div className="flex items-center space-x-1 text-sm" style={{ color: '#69998c' }}>
            <span>© 2025 Tu Empresa. Hecho con</span>
            <Heart size={14} className="text-red-400 animate-pulse" />
            <span>por Yamid Dev</span>
          </div>
          <div className="flex items-center space-x-1 text-sm" style={{ color: '#69998c' }}>
            <span>Powered by Claude AI & Astro</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="#"
              className="text-sm hover:text-yellow-400 transition-colors duration-200"
              style={{ color: '#72aba0' }}
            >
              Política de Privacidad
            </a>
            <a 
              href="#"
              className="text-sm hover:text-yellow-400 transition-colors duration-200"
              style={{ color: '#72aba0' }}
            >
              Términos de Uso
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg transform"
              style={{ 
                backgroundColor: '#122f3a',
                color: '#4d94a5'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#4d94a5';
                e.target.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#122f3a';
                e.target.style.color = '#4d94a5';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;