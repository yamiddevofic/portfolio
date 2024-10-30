import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-light-gray text-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-raleway text-center mb-8">Acerca de Yamid Tech</h2>
        <p className="text-lg font-libre leading-relaxed text-center max-w-3xl mx-auto">
          En <strong>Yamid Tech</strong>, fusionamos creatividad, tecnología y sabiduría para desarrollar soluciones innovadoras que mejoran la vida de las personas. Nos especializamos en el desarrollo de software verde, utilizando prácticas sostenibles y enfocándonos en la eficiencia y el impacto positivo.
        </p>
        <p className="text-lg font-libre leading-relaxed text-center max-w-3xl mx-auto mt-4">
          Nuestro objetivo es brindar servicios tecnológicos que no solo sean efectivos, sino también humanos, ayudando a empresas y comunidades a crecer de manera sostenible y ética.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
