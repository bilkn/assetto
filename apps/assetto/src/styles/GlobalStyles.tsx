import { useTheme } from '@mui/material';
import MuiGlobalStyles from '@mui/material/GlobalStyles';

function GlobalStyles() {
  const theme = useTheme();
  return (
    <MuiGlobalStyles
      styles={{
        '*, *::before, *::after': { boxSizing: 'border-box' },
        ':root, html': {
          backgroundColor: theme.palette.background.default,
          fontSize: '10px',
        },
      }}
    />
  );
}

export default GlobalStyles;
