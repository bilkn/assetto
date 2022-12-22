import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { iAsset } from 'libs/shared-types/src';
import ThreeDotsMenuButton from '../utils/ThreeDotsMenuButton';

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
  const theme = useTheme();
  return (
    <Card sx={{ boxShadow: theme.shadows[1] }}>
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
