import React from 'react'; // Agregué punto y coma
import '../styles/App.css';
import NavScrollExample from './Navbar';
import SimpleContainer from './Container';
import BasicGrid from './Grid'

function App() {

  return (
    <>
      <React.Fragment>
        <NavScrollExample></NavScrollExample>
        <SimpleContainer content={
          <div style={{width: '100%'}}>
            <BasicGrid></BasicGrid>
          </div>
        }>
        </SimpleContainer>
      </React.Fragment>
    </>
  );
}

export default App;
