import * as React from 'react';
import { Box, ThemeProvider, useTheme } from '@mui/material';

export default function BoxSx({ id, clase, image, texto, ancho, alto, circle }) {
  const theme = useTheme();

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
          backgroundPosition: 'top', // Centra la imagen
          '&:hover': {
            bgcolor: 'primary.dark',
          },
          fontSize: {
            xs: theme.typography.body2.fontSize, // Tamaño de fuente para pantallas extra pequeñas
            sm: theme.typography.body1.fontSize, // Tamaño de fuente para pantallas pequeñas
            md: theme.typography.body1.fontSize, // Tamaño de fuente para pantallas medianas
            lg: theme.typography.body2.fontSize, // Tamaño de fuente para pantallas grandes
            xl: theme.typography.body2.fontSize, // Tamaño de fuente para pantallas extra grandes
          },
          textAlign: {
            xs: 'center', // Alineación de texto para pantallas extra pequeñas
            sm: 'left', // Alineación de texto para pantallas pequeñas
            md: 'center', // Alineación de texto para pantallas medianas
            lg: 'center', // Alineación de texto para pantallas grandes
            xl: 'center', // Alineación de texto para pantallas extra grandes
          },
        }}
        className={clase}
      >
        {texto}
      </Box>
    </ThemeProvider>
  );
}
