import { CustomThreeDotsIcon } from '@assetto/assetto-components';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import ThreeDotsMenuButton from '../utils/ThreeDotsMenuButton';

interface iAsset {
  id: string;
  name: string;
  amount: string;
  symbol: string;
  value: string;
  currencySymbol: string;
  percent: string;
  percentSign: string;
}

function AssetCard({ asset }: { asset: iAsset }) {
  const {
    id,
    name,
    amount,
    symbol,
    value,
    currencySymbol,
    percent,
    percentSign,
  } = asset;

  return (
    <Card>
      <Box>
        <CardContent sx={{ position: 'relative' }}>
          <ThreeDotsMenuButton />
          <Typography variant="h2" color="primary.main">
            {name}
          </Typography>
          <Stack sx={{ mt: 4 }}>
            <Typography variant="body2">
              Amount:{' '}
              <Typography component="span" color="extra.1" variant="body1">
                {amount} {symbol}
              </Typography>
            </Typography>
            <Box>
              <Typography variant="body1" color="text.secondary">
                Current value
              </Typography>
              <Stack
                sx={{
                  alignItems: 'baseline',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: '2rem', fontWeight: '600' }}
                >
                  {currencySymbol}
                  {value}
                </Typography>
                <Typography
                  color="extra.0"
                  sx={{ fontSize: '2rem', fontWeight: '600' }}
                >
                  {percentSign}
                  {percent}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}

export default AssetCard;
