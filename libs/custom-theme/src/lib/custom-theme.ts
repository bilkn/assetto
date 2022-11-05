import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#573BFF',
      light: '#644AFF',
      lighter: '#644affcc',
      dark: '#462DDA',
    },
    secondary: {
      main: '#00C3F9',
      light: '#29D1FF',
      dark: '#06B4E4',
      darker: '#0EA5CF'
    },
    warning: {
      main: '#DE3131',
      light: '#de3131cc',
      lighter: '#de3131b3'
    }
    ,text: {
      primary:'#283054',
      secondary: '#8D8D8D'
    },
    grey: {
      200: '#EAEAEA',
      400: '#C9C9C9',
      700: '#A5A5A5'
    },
    extra: {
      0: '#4BB542',
      1: '#86C600',
    }
  }
});

export default theme