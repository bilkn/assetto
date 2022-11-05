import React from 'react';
import MaterialButton, { ButtonProps } from '@mui/material/Button';

function Button(props:ButtonProps) {
    return <MaterialButton {...props}>HELLO WORLD!</MaterialButton>
}

export default Button