import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, padding:'2% 2%;' }}>
      <Grid container spacing={2}>
        <Grid className="items" item xs={8} sx={{backgroundColor: 'none'}}>
        </Grid>
        <Grid item xs={4}>
          <Item className="items"m><h3>Sobre mí</h3></Item>
        </Grid>
        <Grid item xs={12}>
          <Item className='items' sx={{padding: '2%'}}>{
            <div style={{width: '100%', display: 'grid',justifyContent:'end',gridTemplateColumns: '1fr 1fr 1fr'}}>
                <div style={{gridColumn:'1/3'}}>
                    <div style={{widh:'100%', height:'100%',display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center',placeContent:'center'}}>
                        <div><h3>Descripción: </h3></div>
                        <div><p>Soy una persona honesta y comprometida, con habilidades destacadas en aprendizaje rápido y trabajo en equipo. En el colegio, participé en pedagogía ambiental, en la banda de marchas y destaqué en los resultados de las pruebas ICFES. En el SENA, aprendí los fundamentos del desarrollo de software y fortalecí mis habilidades en trabajo en equipo y gestión de proyectos, construyendo una aplicación web para tiendas de barrio de Chitagá. Ahora, espero adquirir experiencia trabajando en una empresa como programador y fortalecer mi comunicación en inglés para de esta manera ofrecer mis productos y servicios como desarrollador a nivel internacional.</p></div>
                    </div>
                </div>
                <div style={{gridColumn:'3/4',widh:'100%', height:'100%',display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'space-between'}}>
                    <img src='/profile-3.jpg' style={{width:'50%', borderRadius:'10px'}}></img>
                </div>
            </div>
            }</Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="items">xs=5</Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="items" >xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}