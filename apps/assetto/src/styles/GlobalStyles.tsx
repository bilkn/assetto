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
        ':root, html, body, #root': {
          backgroundColor: theme.palette.background.default,
          fontSize: '62.5%',
          height: '100%',
        },
      }}
    />
  );
}

export default GlobalStyles;
