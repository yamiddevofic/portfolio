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
    var contador = 0;
    items.forEach(item => {
      contador ++;
      if (contador>1){
      if (!lightMode) {
        item.style.background = '#111';
        item.style.color = '#fff';
        item.style.transition="background-color 1.5s";
      } else {
        item.style.background = 'white';
        item.style.color = '#4d4d4d';
        item.style.transition="background-color 1.5s";
      }
      }
  });
    root.style.background = !lightMode ? '#010101' : timeOfDay();
    root.style.transition="background-color 1s";
    container.style.transition="background-color 1s";
  };

  return (
    <Navbar className="nave" collapseOnSelect expand="lg" className={lightMode ? 'navbar-dark' : 'navbar-dark'} >
      <Container>
        <Navbar.Brand href="#home">MY PORTFOLIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#sobreMi" onClick={() => {
            let cont = 0;
            const sobreMi = document.querySelectorAll('.items.sobreMi');
            const sobreMiArray = Array.from(sobreMi).reverse(); // Convertir NodeList a un array y luego invertirlo

            sobreMiArray.forEach(sobreMi => {
              const intervalo = setInterval(() => {
                cont++;
                console.log(cont);
                if (cont > 1) {
                  sobreMi.style.background = "#ffe100";
                  sobreMi.style.color = "#202020";
                  sobreMi.style.transition = "background-color 1s";
                }
                if (cont > 3) {
                  sobreMi.style.background = "white";
                  sobreMi.style.color = "#202020";
                  sobreMi.style.transition = "background-color 1s";
                  clearInterval(intervalo);
                  console.log("¡Intervalo cerrado!");
                }
              }, 1000);
            });
          }}>Sobre Mi</Nav.Link>

            <Nav.Link href="#datos" onClick={()=>{
              const datos = document.getElementById('datos');
              var cont = 0
              const intervalo = setInterval(
                () => {
                  cont ++;
                  console.log(cont);
                  if (cont>1){
                    datos.style.background = "#ffe100";
                    datos.style.color = "#202020";
                    datos.style.transition="background-color 1s";
                  }
                  if (cont>3){
                    datos.style.background = "white";
                    datos.style.color= "#202020";
                    datos.style.transition="background-color 1s";
                    clearInterval(intervalo);
                    console.log("¡Intervalo cerrado!")
                  }
                },500
              )
            }}>Datos Personales</Nav.Link>
            <Nav.Link href="#proyectos" onClick={()=>{
              const proyectos = document.getElementById('proyectos');
              var cont = 0
              const intervalo = setInterval(
                () => {
                  cont ++;
                  console.log(cont);
                  if (cont>1){
                    proyectos.style.background = "#ffe100";
                    proyectos.style.color = "#202020";
                    proyectos.style.transition="background-color 1s";
                  }
                  if (cont>3){
                    proyectos.style.background = "white";
                    proyectos.style.color= "#202020";
                    proyectos.style.transition="background-color 1s";
                    clearInterval(intervalo);
                    console.log("¡Intervalo cerrado!")
                  }
                },500
              )
            }}>Proyectos</Nav.Link>
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
            <Nav.Link eventKey={2} href="#memes">
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
