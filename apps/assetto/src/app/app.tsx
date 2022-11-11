import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

export function App() {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
