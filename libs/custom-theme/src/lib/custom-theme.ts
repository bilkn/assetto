import { createTheme, Shadows } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const customShadows = Array(25).fill('none') as Shadows;
customShadows[1] = '0px 4px 15px 0px #C9C9C940';
customShadows[2] = '0px 1px 7px rgba(0, 0, 0, 0.3)';

const theme = createTheme({
  palette: {
    background: {
      default: '#F7F8FA',
    },
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
      darker: '#0EA5CF',
    },
    warning: {
      main: '#DE3131',
      light: '#de3131cc',
      lighter: '#de3131b3',
    },
    text: {
      primary: '#283054',
      secondary: '#767676',
    },
    neutral: {
      main: '#EAEAEA',
    },
    grey: {
      200: '#EAEAEA',
      300: '#D8D8D8',
      400: '#C9C9C9',
      700: '#A5A5A5',
      900: '#6E6E6E',
    },
    extra: {
      0: '#4BB542',
      1: '#86C600',
    },
  },
  shadows: customShadows,
  shape: {
    borderRadius: 10,
  },
  typography: {
    body1: {
      fontSize: '1.6rem',
    },
    body2: {
      fontSize: '1.4rem',
    },

    h2: {
      fontSize: '2rem',
      fontWeight: 'normal',
    },
  },
  spacing: 5,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: customShadows[2],
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'neutral' as const },
          style: {
            backgroundColor: 'grey.200',
            '&:hover': {
              backgroundColor: '#D8D8D8',
            },
            '&:active': {
              backgroundColor: '#C9C9C9',
            },
          },
        },
      ],
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          '& .MuiPaper-root': {
            backgroundColor: '#6E6E6E',
          },
        },
      },
    },
  },
});

export default theme;
