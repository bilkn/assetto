import { ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '../layouts';
import { HomePage, SignUpPage } from '../pages';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<SignUpPage />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
