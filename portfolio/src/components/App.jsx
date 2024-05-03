import React from 'react'; // Agregué punto y coma
import '../styles/App.css';
import ResponsiveAppBar from './AppBar';
import BoxSx from './Box';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  const boxs= [
    {
        id:'avatar',
        clase: 'pt-box avatar',
        image: 'url(/profile-3.jpg)',
        texto: '',
        ancho: 150,
        alto: 150,
        circle: '50%',
    },
    {
        id:'datos',
        clase: 'pt-box',
        image: '#1e1e1e',
        texto:
        <div className='pt-boxContent'>
          <h3>Datos Personales:</h3>
          <p><strong>Nombres: </strong></p>
          <p>Yamid Horacio</p>
          <p><strong>Apellidos: </strong></p>
          <p>Rodríguez</p>
          <p><strong>Edad: </strong></p>
          <p>21 años</p>
        </div>
        ,
        ancho: '80%',
        alto: 'auto',
        circle: 1,
    },
    {   
        id:'contacto',
        clase: 'pt-box',
        image: '#1e1e1e',
        texto:
        <div className='pt-boxContent'>
          <h3>Contacto:</h3>
          <p><strong>Correo: </strong></p>
          <p>yhrodriguez1@hotmail.com</p>
          <p><strong>Celular: </strong></p>
          <p>3133229392</p>
        </div>,
        ancho: '80%',
        alto: 'auto',
        circle: 1,
    },
]
  return (
    <>
      <div className="pt-blockDos">
        <div>
          <ResponsiveAppBar />
          <div className='pt-blockTres'>
            <div id="descripcion">
              <BoxSx  clase={'pt-box pt-boxDos'} image={'#1e1e1e'} ancho='95%' alto='30%' circle='10px'></BoxSx>
            </div>
            <div id="experiencia">
              <BoxSx clase={'pt-box pt-boxDos'} image={'#1e1e1e'} ancho='95%' alto='30%' circle='10px'></BoxSx>
            </div>
            <div id="habilidades">
              <BoxSx clase={'pt-box pt-boxDos'} image={'#1e1e1e'} ancho='95%' alto='30%' circle='10px'></BoxSx>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-block">
        <div className="pt-blockContent">
          {   
            boxs.map(({id,clase,image,texto,ancho,alto,circle})=>(
                    <React.Fragment>
                        <BoxSx id={id} clase={clase} image={image} texto={texto} ancho={ancho} alto={alto} circle={circle}>
                        </BoxSx>
                    </React.Fragment>
                ))
          }
          <BoxSx id="redes" clase={'pt-box redes'} 
          image={'none'} 
          texto=
          {
            <div>
              <FacebookIcon id='facebook' fontSize='large'></FacebookIcon>
              <GitHubIcon id='github' fontSize='large'></GitHubIcon>
              <XIcon  id='x' fontSize='large'></XIcon>
              <LinkedInIcon id='linkedin' fontSize='large'></LinkedInIcon>
            </div>
          } 
          ancho={'80%'} 
          alto={'auto'} 
          circle={'10px'}>
          </BoxSx>
        </div>
      </div>
    </>
  );
}

export default App;
