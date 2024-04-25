import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function BoxSx({id,clase,image,texto,ancho,alto,circle}) {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#fff',
            dark: '#111',
          },
        },
      }}
    >
      <Box
        id={id}
        sx={{
          width: ancho,
          height: alto,
          borderRadius: circle,
          background: image, // Establece la imagen de fondo
          backgroundSize: 'cover', // Ajusta el tamaño de la imagen para cubrir todo el cuadro
          backgroundPosition: 'top',// Centra la imagen
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        className={clase}>
            {texto}
        </Box>
    </ThemeProvider>
  );
}