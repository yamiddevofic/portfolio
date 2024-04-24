import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import SunIcon from '@mui/icons-material/WbSunny';


export default function ButtonUsage() {

    const handleClick = () => {
        alert("Hola mundo")
    }

    return (
        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <SunIcon className="pt-icon" onClick={handleClick}/>
          </IconButton>

        </Stack>
        )
}