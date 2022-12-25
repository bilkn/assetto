import { Box, Stack, Typography } from '@mui/material';
import {
  AssetCard,
  AssetDistributionChart,
  FAB,
  PriceCard,
  TotalBalanceChart,
} from '../../components';
import mockTotalBalanceData from '../../mocks/mockTotalBalanceData';
import mockAssetData from '../../mocks/mockAssetData';
import mockPriceData from '../../mocks/mockPriceCard';

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
const mockPriceDatas = new Array(20).fill('').map(() => mockPriceData);

function PriceCardContainer() {
  // TODO: On desktop list is not scrollable, make it scrollable.
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        px: 2,
        pt: 2,
        pb: 3,
        overflowX: 'auto',
        marginX: '-10px',
        '::-webkit-scrollbar': {
          height: '0',
          width: '0',
        },
      }}
    >
      {mockPriceDatas.map((data) => (
        <PriceCard priceData={data} />
      ))}
    </Stack>
  );
}

function HomePage() {
  return (
    <Box>
      <Typography variant="h1" sx={{ mt: 10 }}>
        Dashboard
      </Typography>
      <PriceCardContainer />
      <Stack spacing={3}>
        <TotalBalanceChart chartData={mockTotalBalanceData} />
        <AssetDistributionChart />
        <AssetCard asset={mockAssetData} />
        <AssetCard asset={mockAssetData} />
        <AssetCard asset={mockAssetData} />
        <AssetCard asset={mockAssetData} />
        <AssetCard asset={mockAssetData} />
        <FAB />
      </Stack>
    </Box>
  );
}

export default HomePage;
