import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from './Carrusel'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const images = [
    '/images/login.PNG',
    '/images/home.PNG',
    '/images/home2.PNG',
    // Agrega más URLs de imágenes según necesites
  ];
  function timeOfDay(){
    var date = new Date();
    const hora = date.getHours();
    var mensaje;
    if (hora>0 && hora<5){
        mensaje="Feliz madrugada";
    }
    else if(hora>4 && hora<12){
        mensaje="Buenos días";
    }
    if (hora>11 && hora<=17){
        mensaje = "Buenas tardes";
    }else if(hora>17){
        mensaje = "Buenas noches";
    }
    return mensaje;
  }
  return (
    <Box sx={{ flexGrow: 1, padding:'2% 2%;' }}>
      <Grid container spacing={3}>
        <Grid className="items" item xs={8} sx={{backgroundColor: 'none', width:'100%',justifyContent:'center'}}>
            <h1 style={{color: "white"}}>{timeOfDay()}</h1>
        </Grid>
        <Grid item xs={4}>
          <Item className="items sobreMi" id="sobreMi"><h4>Sobre mí</h4></Item>
        </Grid>
        <Grid item lg={12}>
          <Item className='items sobreMi'  sx={{padding: '2%'}}>{
            <div style={{width: '100%', display: 'grid',justifyContent:'end',gridTemplateColumns: '1fr 1fr 1fr'}}>
                <div style={{gridColumn:'1/3'}}>
                    <div style={{widh:'100%', height:'100%',display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',placeContent:'center'}}>
                        <div><h4>Descripción: </h4></div>
                        <div><p>Soy una persona honesta y comprometida, con habilidades destacadas en aprendizaje rápido y trabajo en equipo. En el colegio, participé en pedagogía ambiental, en la banda de marchas y destaqué en los resultados de las pruebas ICFES. En el SENA, aprendí los fundamentos del desarrollo de software y fortalecí mis habilidades en trabajo en equipo y gestión de proyectos, construyendo una aplicación web para tiendas de barrio de Chitagá. Ahora, espero adquirir experiencia trabajando en una empresa como programador y fortalecer mi comunicación en inglés para de esta manera ofrecer mis productos y servicios como desarrollador a nivel internacional.</p></div>
                    </div>
                </div>
                <div style={{gridColumn:'3/4',widh:'100%', height:'100%',display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
                    <img src='/images/profile-3.jpg' style={{width:'50%', borderRadius:'10px'}}></img>
                </div>
            </div>
            }</Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="items" id="datos" sx={{padding:'5%'}}>
            {
                <section style={{textAlign:'left'}}>
                    <h4>Datos personales</h4>
                    <div>
                        <h5>Nombre completo:</h5>
                        <p>Yamid Horacio Rodríguez</p>
                    </div>
                    <div>
                        <h5>Fecha de nacimiento:</h5>
                        <p>18 de Junio de 2002</p>
                    </div>
                    <div>
                        <h5>Edad:</h5>
                        <p>21 años</p>
                    </div>
                    <div>
                        <h5>Dirección:</h5>
                        <p>Casa #12 Villa Carmen, Chitagá - Norte de Santander, Colombia</p>
                    </div>
                </section>
                
            }
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="items">
            {
               <div>
                    <h4>Mis proyectos</h4>
                    <Carousel sx={{width:'50%'}} images={images} />
               </div>
            }
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}