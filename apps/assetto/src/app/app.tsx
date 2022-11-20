import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import router from './AppRouter';

function App() {
  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
