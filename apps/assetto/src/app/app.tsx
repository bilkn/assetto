import { CustomButton } from '@assetto/assetto-components';
import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CustomButton variant="contained">Primary</CustomButton>
      <CustomButton variant="contained" color="secondary">Secondary</CustomButton>
      <CustomButton variant="outlined" color="secondary">Secondary</CustomButton>
      <CustomButton variant="contained" color="warning">Secondary</CustomButton>
      <CustomButton variant="contained">Secondary</CustomButton>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
