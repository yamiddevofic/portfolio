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
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#333', // Color de fondo en modo oscuro
    },
  },
});

export default function ButtonUsage() {
    const [darkMode, setDarkMode] = React.useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);

        // Cambiar el fondo del elemento raíz
        const root = document.getElementById('root')
        root.style.backgroundColor = darkMode ? lightTheme.palette.background.default : darkTheme.palette.background.default;
    }

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Stack direction="row" spacing={1}>
                <IconButton aria-label="toggle-dark-mode" onClick={handleClick}>
                    {darkMode ? <SunIcon className="pt-icon" /> : <MoonIcon className="pt-icon" />}
                </IconButton>
            </Stack>
        </ThemeProvider>
    );
}
