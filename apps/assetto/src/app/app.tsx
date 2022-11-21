import { Stack, ThemeProvider } from '@mui/material';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AssetCard } from '../components';
import GlobalStyles from '../styles/GlobalStyles';
import router from './AppRouter';

const mockAssetData = {
  id: '1',
  name: 'Bitcoin',
  amount: '0.45',
  symbol: 'BTC',
  value: '2500',
  currencySymbol: '$',
  percent: '5,56%',
  percentSign: '+',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
      <Stack spacing={3}>
        <AssetCard asset={mockAssetData} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
