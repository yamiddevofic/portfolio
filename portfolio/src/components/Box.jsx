import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#fff',
            dark: '#000',
          },
        },
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          borderRadius: 1,
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
        className="pt-box">
            Hola
        </Box>
    </ThemeProvider>
  );
}