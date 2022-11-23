import { Stack } from '@mui/material';
import { AssetCard, PriceCard } from '../../components';
import { iPointSign } from '../../types/common';

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

const mockPriceCardObj = {
  id: '32432',
  name: 'Dow Jones',
  value: '31,841',
  symbol: 'DOW',
  currencySymbol: '$',
  percent: '5,56%',
  point: '14.23',
  pointSign: '+' as iPointSign,
};
function Home() {
  return (
    <Stack spacing={3}>
      <PriceCard marketItem={mockPriceCardObj} />
    </Stack>
  );
}

export default Home;
