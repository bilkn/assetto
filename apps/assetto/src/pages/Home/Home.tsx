import { Stack } from '@mui/material';
import {
  AssetCard,
  AssetDistributionChart,
  CustomBottomNavigation,
  FAB,
} from '../../components';
import mockAssetData from '../../mocks/mockAssetData';

/* const mockList = [
  {
    path: '/',
    name: 'Preferences',
  },
  {
    path: '/1',
    name: 'Password',
  },
  {
    path: '/2',
    name: 'Account',
  },
]; */

/* const mockCurrencyAsset: iCurrencyAsset = {
  amount: 500,
  totalInCurrency: '300$',
  type: 'Dollar',
}; */

function Home() {
  return (
    <Stack spacing={3}>
      <AssetDistributionChart />
      <AssetCard asset={mockAssetData} />
      <FAB />
    </Stack>
  );
}

export default Home;
