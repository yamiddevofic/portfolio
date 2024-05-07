import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from './Carrusel'
import Reloj from './Reloj';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GoogleIcon from '@mui/icons-material/Google';

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
  return (
    <Box sx={{ flexGrow: 1, padding:'2% 2%;' }}>
      <Grid container spacing={3}>
        <Grid className="items" item xs={8} sx={{backgroundColor: 'none', width:'100%',display: 'flex',justifyContent:'space-between'}}>
            <Reloj></Reloj>
        </Grid>
        <Grid item xs={4}>
          <Item className="items sobreMi" id="sobreMi"><h4>Sobre mí 🙋‍♂️</h4></Item>
        </Grid>
        <Grid item lg={12}>
          <Item className='items sobreMi'  sx={{padding: '2%'}}>{
            <div style={{width: '100%', display: 'grid',justifyContent:'end',gridTemplateColumns: '1fr 1fr 1fr'}}>
                <div style={{gridColumn:'1/3'}}>
                    <div style={{widh:'100%', height:'100%',display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',placeContent:'center'}}>
                        <div><h3>📝 Descripción: </h3></div>
                        <div><p>Mi nombre es Yamid Horacio Rodíguez, soy de Chitagá - Norte de Santander Colombia, me considero una persona honesta y comprometida, con habilidades destacadas en aprendizaje rápido y trabajo en equipo. En el colegio, participé en pedagogía ambiental, en la banda de marchas y destaqué en los resultados de las pruebas ICFES. En el SENA, aprendí los fundamentos del desarrollo de software y fortalecí mis habilidades en trabajo en equipo y gestión de proyectos, construyendo una aplicación web para tiendas de barrio de Chitagá. Ahora, espero adquirir experiencia trabajando en una empresa como programador y fortalecer mi comunicación en inglés para de esta manera ofrecer mis productos y servicios como desarrollador a nivel internacional.</p></div>
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
                    <h3>📋 Datos personales</h3>
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
        <Grid xs={6} container spacing={4} sx={{margin:0}}>
            <Grid item sx={{margin: '0%'}} xs={12}>
                <Item className="items habilidades" id="habilidades">
                    <h4>Habilidades</h4>
                    <div>
                        <h5>💻 Programación</h5>
                    </div>
                    <div>
                        <h5>✏️ Escritura</h5>
                    </div>
                    <div>
                        <h5>🧠 Aprendizaje continuo</h5>
                    </div>

                </Item>
            </Grid>
            <Grid item sx={{margin: '0%'}} xs={12}>
                <Item className="items hobbies" id="hobbies">
                    <h4>Hobbies</h4>
                    <div>
                        <h5>📚 Lectura de psicología o fílosofia</h5>
                    </div>
                    <div>
                        <h5>👩‍👩‍👧‍👦 Estar con personas cercanas</h5>
                    </div>
                    <div>
                        <h5>📸 Hacer fotografía</h5>
                    </div>

                </Item>
            </Grid>
        </Grid>
        <Grid xs={12} sx={{width: '100%',display:'flex', padding:'0%',margin:'0'}} container spacing={4}>
            <Grid item xs={4}>
            <Item className="items" id="contactos">
                {
                <div style={{display:'flex',flexDirection:'column', width:'100%',justifyContent:'space-between',padding:'2%'}}>
                        <h3>📩 Contacto:</h3>
                        <div style={{padding:'0%'}}>
                            <GitHubIcon sx={{color: 'purple'}} fontSize="large"></GitHubIcon><div><p>/yamid-dev</p></div>
                        </div>
                        <div style={{padding:'0%'}}>
                            <LinkedInIcon sx={{color: 'blue'}} fontSize="large"></LinkedInIcon><div><p>/yamiddev</p></div>
                        </div>
                        <div style={{padding:'0%'}}>
                            <WhatsAppIcon sx={{color: 'green'}} fontSize="large"></WhatsAppIcon> <div><p>+573118344425</p></div>
                        </div>
                        <div>
                            <GoogleIcon fontSize='large' sx={{color:'red'}}></ GoogleIcon>
                            <div><p>horaciohabbos@gmail.com</p></div>
                        </div>
                </div>
                }
            </Item>
            </Grid>
            <Grid item xs={8}>
            <Item className="items" id="proyectos">
                {
                <div>
                        <h3>💼 Mis proyectos</h3>
                        <Carousel sx={{width:'50%'}} images={images} />
                </div>
                }
            </Item>
            </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}