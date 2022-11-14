import { ThemeProvider } from '@mui/material';
import CustomInput from 'libs/assetto-components/src/lib/components/CustomInput';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CustomInput label="Testing" />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
