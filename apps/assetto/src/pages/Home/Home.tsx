import { Stack } from '@mui/material';
import { AssetCard } from '../../components';

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

function Home() {
  return (
    <Stack spacing={3}>{/*     <AssetCard asset={mockAssetData} /> */}</Stack>
  );
}

export default Home;
