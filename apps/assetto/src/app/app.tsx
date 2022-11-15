import { MobileSelect } from '@assetto/assetto-components';
import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MobileSelect />            
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
