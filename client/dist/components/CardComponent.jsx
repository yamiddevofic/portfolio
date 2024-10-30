import React from 'react';
const CardComponent = ({ title, description }) => {
    return (<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-bold font-raleway text-deep-blue mb-2">{title}</h3>
      <p className="font-libre text-gray-700 leading-relaxed">{description}</p>
    </div>);
};
export { CardComponent };
