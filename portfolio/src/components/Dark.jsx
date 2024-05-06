import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SunIcon from '@mui/icons-material/WbSunny';
import MoonIcon from '@mui/icons-material/Brightness2';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#fff', // Color de fondo en modo claro
      blocks:'#e1e1e1',
      boxs: 'white'
    },
    color: {
        header: '#111',
        icon: '#111',
        boxsDos: '#111'   
    }
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#272727',
      blocks: '#1c1c1c',
      boxs: 'rgb(30, 30, 30)'
      // Color de fondo en modo oscuro
    },
    color: {
        header: '#fff',
        icon:'#fff',
        boxsDos: '#fff'
    }
  },
});

export default function ButtonUsage() {
    const [darkMode, setDarkMode] = React.useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);

        // Cambiar los estilos de los elementos
        const root = document.getElementById('root');
        const blocks = document.querySelectorAll('.pt-block'); // Selección de todos los elementos con clase pt-block
        const blockDos = document.querySelectorAll('.pt-blockDos'); // Selección de todos los elementos con clase pt-blockDos
        const boxs = document.querySelectorAll('.pt-box'); // Selección de todos los elementos con clase pt-box
        const boxsDos = document.querySelectorAll('.pt-box.pt-boxDos'); // Selección de todos los elementos con clase pt-box
        const boxContent= document.querySelectorAll('.pt-boxContent')
        const header = document.querySelector('header');
        const icon = document.querySelector('.css-78trlr-MuiButtonBase-root-MuiIconButton-root');

        root.style.backgroundColor = darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default;
        // Iterar sobre todos los elementos seleccionados y cambiar sus estilos
        blocks.forEach(block => {
            block.style.backgroundColor = darkMode ? darkTheme.palette.background.blocks : lightTheme.palette.background.blocks;
        });
        
        blockDos.forEach(block => {
            block.style.backgroundColor = darkMode ? darkTheme.palette.background.blocks : lightTheme.palette.background.blocks;
        });

        boxs.forEach(box => {
            box.style.backgroundColor = darkMode ? darkTheme.palette.background.boxs : lightTheme.palette.background.boxs;
        });
        boxContent.forEach(box => {
            box.style.color = darkMode ? darkTheme.palette.color.header : lightTheme.palette.color.header;
        });
        boxsDos.forEach(box => {
            box.style.color = darkMode ? darkTheme.palette.color.boxsDos : lightTheme.palette.color.boxsDos;
        });
        header.style.backgroundColor = darkMode ? darkTheme.palette.background.boxs : lightTheme.palette.background.boxs;
        header.style.color = darkMode ? darkTheme.palette.color.header : lightTheme.palette.color.header; 
        icon.style.color = darkMode ? darkTheme.palette.color.icon : lightTheme.palette.color.icon; 
        
    }

    return (
        <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
            <Stack direction="row" spacing={1}>
                {darkMode ? 
                    <IconButton aria-label="toggle-dark-mode" onClick={handleClick} sx={{
                        '&:hover': {
                            bgcolor: 'rgba(25,25,25,0.3)',
                        },}}>
                            {darkMode ? <MoonIcon className="pt-icon" sx={{color: 'black'}}/> : <SunIcon className="pt-icon" sx={{color: 'yellow'}}/>}
                    </IconButton> : <IconButton aria-label="toggle-dark-mode" onClick={handleClick} sx={{
                        '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                        },}}>
                            {darkMode ? <MoonIcon className="pt-icon" sx={{color: 'black'}}/> : <SunIcon className="pt-icon" sx={{color: 'yellow'}}/>}
                        </IconButton>}
            </Stack>
        </ThemeProvider>
    );
}
