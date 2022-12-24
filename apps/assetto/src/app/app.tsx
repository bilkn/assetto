import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { Home, Register } from '../pages';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
