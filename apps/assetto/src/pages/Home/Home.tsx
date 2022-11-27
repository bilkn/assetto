import { CustomDialog } from '@assetto/assetto-components';
import { Stack } from '@mui/material';

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

/* const mockAssetData = {
  id: '1',
  name: 'Bitcoin',
  amount: '0.45',
  symbol: 'BTC',
  value: '2500',
  currencySymbol: '$',
  percent: '5,56%',
  percentSign: '+',
}; */

/* const mockPriceCardObj = {
  id: '32432',
  name: 'Dow Jones',
  value: '31,841',
  symbol: 'DOW',
  currencySymbol: '$',
  percent: '5,56%',
  point: '14.23',
  pointSign: '+' as iPointSign,
}; */

/* const mockCurrencyAsset: iCurrencyAsset = {
  amount: 500,
  totalInCurrency: '300$',
  type: 'Dollar',
}; */

function Home() {
  return (
    <Stack spacing={3}>
      <CustomDialog
        title="Hello world"
        body="Do you really want to use it?"
        open
      />
    </Stack>
  );
}

export default Home;
