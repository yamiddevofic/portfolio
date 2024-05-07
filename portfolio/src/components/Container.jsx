import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer({content}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ height: '100vh', width:'100%', display:'flex',justifyContent:'center'}} id="container">
        {content}
        </Box>
      </Container>
    </React.Fragment>
  );
}