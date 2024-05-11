import React, { useState } from 'react'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

function CollapsibleExample() {
  const [lightMode, setLightMode] = useState(false);
  const cambiarModo = () => {
    setLightMode(!lightMode);
    const root = document.getElementById('root');
    const container = document.getElementById('container');
    const items = document.querySelectorAll('.items');
    var contador;
    contador = 0;
    items.forEach(item => {
      contador ++;
      if (!lightMode) {
        item.style.background = '#121212';
        item.style.color = '#fff';
        item.style.transition="background-color .7s";
      } else {
        item.style.background = 'white';
        item.style.color = '#444';
        item.style.transition="background-color .7s";
      }
      
  });
    root.style.background = !lightMode ?  '#191919' : timeOfDay();
    root.style.transition="background-color 1s";
    container.style.transition="background-color .7s";
  };

  return (
    <Navbar className="nave" collapseOnSelect expand="lg" className={lightMode ? 'navbar-dark' : 'navbar-dark'} >
      <Container>
        <Navbar.Brand href="#home">MY PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
      
            <NavDropdown title="Hoja de vida" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#oscuro">
              <div style={{display:'flex'}}>
                <div style={{display:'inline-block'}}><p>Modo claro/oscuro </p></div>
                <div style={{display:'inline-block'}} className="icon"><LightModeRoundedIcon onClick={cambiarModo} /></div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
