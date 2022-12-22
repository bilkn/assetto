import { Card, CardContent, Stack, Typography } from '@mui/material';
import { iPointSign } from '../../types/common.types';

interface iPriceCard {
  id: string;
  name: string;
  value: string;
  symbol: string;
  currencySymbol: string;
  percent: string;
  point: string;
  pointSign: '+' | '-';
}

type iPriceData = { priceData: iPriceCard };

function PriceCard({ priceData }: iPriceData) {
  const { id, name, value, symbol, currencySymbol, percent, point, pointSign } =
    priceData;

  const pickColorBySign = (sign: iPointSign) =>
    sign === '+' ? 'extra.0' : 'warning.main';

  return (
    <Card sx={{ flexShrink: '0', width: '120px' }}>
      <CardContent
        sx={{
          paddingX: '8px',
          paddingY: '7px',
          '&:last-child': {
            paddingBottom: '7px',
          },
        }}
      >
        <Stack
          sx={{
            alignItems: 'baseline',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '1.2rem' }}
          >
            {symbol}
          </Typography>
          <Typography
            variant="body2"
            color={pickColorBySign(pointSign)}
            sx={{ fontSize: '1rem' }}
          >
            {pointSign + point}
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: '1.4rem', fontWeight: 500 }}
          >
            {value}
            {currencySymbol}
          </Typography>
          <Typography
            color={pickColorBySign(pointSign)}
            sx={{ fontSize: '1rem' }}
          >
            {`(${percent})`}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default PriceCard;
