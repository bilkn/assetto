import { MobilePopoverNav } from '@assetto/assetto-components';
import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import {RouterProvider} from 'react-router-dom'
import router from './AppRouter';


function App() {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
