import React from 'react';

const DescargarPDF = () => {
  const handleDescargaPDF = () => {
    // Lógica para descargar el PDF
    const url = '/hoja_de_vida.pdf';
    window.open(url); // Esto abre una nueva pestaña con el PDF
  };

  return (
    <button onClick={handleDescargaPDF} style={{border: 'none', background:'none'}}>
      Descargar PDF
    </button>
  );
};

export default DescargarPDF;
 