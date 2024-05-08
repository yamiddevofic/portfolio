import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Carousel from './Carrusel';
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
    '/images/login.webp',
    '/images/home.webp',
    '/images/home2.webp',
    // Agrega más URLs de imágenes según necesites
  ];
  
  return (
    <Box id="caja" sx={{ background:'none', flexGrow: 1, padding: '2% 2%', display:'flex', flexDirection:'column',justifyContent:'center',gap:'2%',alignItems:'center'}}>
      <Grid container  spacing={4}>
        <Grid  item xs={12}>
          <Reloj />
        </Grid>
        <Grid item xs={12} sm={12} md={4}> {/* Ajusta xs, sm y md según lo que necesites */}
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Item sx={{paddin:'2%'}} className="items sobreMi" id="sobreMi">
                <h4>Sobre mí 🙋‍♂️</h4>
              </Item>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Item className="items sobreMi" id="sobreMi" sx={{margin:'0', borderRadius:'10px', padding:'0', width:'auto'}}>
                <img src="/images/profile-3.webp" style={{width: '100%',borderRadius:'10px'}} alt="Chitaga"></img>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={8} sx={{display:'flex',flexDirection:'column'}}> {/* Ajusta xs, sm y md según lo que necesites */}
          <Item className='items sobreMi' sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding: '5%' }}>
            <div style={{ width: '100%', display: 'grid', justifyContent: 'end'}}>
              <div style={{ gridColumn: '1/3', gridRow: '1/3'}}>
                <div style={{ width: '100%', height: '100%', display: 'grid', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', placeContent: 'center' }}>
                  <div style={{ fontSize: 'calc(1vw + 10px)' }}><h3 style={{padding:'2%'}}>📝 Descripción: </h3></div>
                  <div><p style={{ fontSize: 'calc(1vw + 6px)' }}>
                        Soy Yamid Horacio Rodríguez, de Chitagá, Norte de Santander, Colombia. Me considero honesto y comprometido, con habilidades para aprender rápidamente y trabajar en equipo. En la escuela secundaria, participé en pedagogía ambiental, en la banda de marchas y obtuve buenos resultados en las pruebas ICFES. En el SENA, aprendí desarrollo de software y fortalecí mis habilidades en trabajo en equipo y gestión de proyectos. Desarrollé una aplicación web para tiendas de barrio en Chitagá. Ahora, busco experiencia como programador y mejorar mi comunicación en inglés, para ofrecer mis servicios a nivel internacional.

                    </p></div>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
        
        <Grid item xs={12} sm={12} md={12}>{/* Ajusta xs, sm y md según lo que necesites */}
                <Item className="items habilidades" id="habilidades" sx={{height:'100%',display:'grid',padding:'5%'}}>
                <div style={{padding:'0%'}}>
                    <div>
                        <h4>Hobbies</h4>
                        <div>
                        <p style={{ fontSize: 'calc(1vw + 6px)' }}>📚 Lectura de psicología o filosofía</p>
                        </div>
                        <div>
                        <p style={{ fontSize: 'calc(1vw + 6px)' }}>👩‍👩‍👧‍👦 Estar con personas cercanas</p>
                        </div>
                        <div>
                        <p style={{ fontSize: 'calc(1vw + 6px)' }}>📸 El arte de la fotografía</p>
                        </div>
                    </div>
                </div>
                </Item>
            </Grid>
        
            <Grid item xs={12}>
            <Item className="items habilidades" id="habilidades" sx={{height:'100%',display:'grid',padding:'5%'}}>
            <div style={{padding:'0%'}}>
                            <h4>Habilidades</h4>
                            <div>
                            <p style={{ fontSize: 'calc(1vw + 6px)' }}>💻 Programación</p>
                            </div>
                            <div>
                            <p style={{ fontSize: 'calc(1vw + 6px)' }}>✏️ Escritura</p>
                            </div>
                            <div>
                            <p style={{ fontSize: 'calc(1vw + 6px)' }}>🧠 Aprendizaje continuo</p>
                            </div>
                            <div>
                            <p style={{ fontSize: 'calc(1vw + 6px)' }}>🎨 Creatividad</p>
                            </div>
                        </div>
                </Item>
            </Grid>
            </Grid>
      <Grid container sx={{marginBottom:'4%'}}>
        <Grid item xs={12} sm={12} md={12}> {/* Ajusta xs, sm y md según lo que necesites */}
            <Item className="items" id="proyectos" sx={{padding:'',marginTop:'4%'}}>
                <div>

                <Carousel sx={{ width: '30%' }} images={images} />
                </div>
            </Item>
        </Grid>
      </Grid>
      

     <Grid container sx={{display:'flex',marginBottom:'4%'}} >
     <Grid item xs={12} sm={12} md={12}> {/* Ajusta xs, sm y md según lo que necesites */}
          <Item className="items" id="contactos" sx={{width:'100%', height:'100%', justifyContent:'center',alignItems:'center'}}>
            <div style={{ display: 'flex',width: '100%', justifyContent: 'space-evenly', padding: '2%' }}>
              <h3>📩 Contacto:</h3>
              <div style={{ padding: '0%' }}>
                <GitHubIcon sx={{ color: 'purple',cursor: 'pointer'}} fontSize="large"></GitHubIcon>
              </div>
              <div style={{ padding: '0%' }}>
                <LinkedInIcon sx={{ color: 'blue',cursor: 'pointer'}} fontSize="large"></LinkedInIcon>
              </div>
              <div style={{ padding: '0%' }}>
                <WhatsAppIcon sx={{ color: 'green',cursor: 'pointer'}} fontSize="large"></WhatsAppIcon>
              </div>
              <div>
                <GoogleIcon fontSize='large' sx={{ color: 'red',cursor: 'pointer'}}></ GoogleIcon>
                
              </div>
            </div>
          </Item>
        </Grid>
     </Grid>
</Box>
  );
}
