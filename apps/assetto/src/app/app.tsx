import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts';
import GlobalStyles from '../styles/GlobalStyles';
import router from './AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
