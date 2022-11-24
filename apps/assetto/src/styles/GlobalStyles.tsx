import { useTheme } from '@mui/material';
import MuiGlobalStyles from '@mui/material/GlobalStyles';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <MuiGlobalStyles
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          margin: '0',
          padding: '0',
        },
        ':root, html': {
          backgroundColor: theme.palette.background.default,
          fontSize: '62.5%',
        },
      }}
    />
  );
}

export default GlobalStyles;
