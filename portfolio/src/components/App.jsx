import React from 'react'; // Agregué punto y coma
import '../styles/App.css';
import ResponsiveAppBar from './AppBar';
import BoxSx from './Box';

function App() {
  return (
    <>
      <div>
        <ResponsiveAppBar />
      </div>
      <div className="pt-block">
        {Array.from({ length: 28 }).map((_, index) => (
          <BoxSx key={index} /> // Agregué un key único para cada BoxSx
        ))}
      </div>
    </>
  );
}

export default App;
