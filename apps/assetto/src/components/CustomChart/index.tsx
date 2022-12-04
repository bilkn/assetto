import {
  Box,
  Divider,
  FormControlLabel,
  Paper,
  RadioGroup,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import { CustomChartRadio } from './style';
import useConfig from './useChartConfig';

const mockTotalBalanceData = {
  balance: '$34,000',
  percent: '4.3%',
  percentSign: '-',
};
const dateList = [
  { value: 'YTD', label: 'YTD' },
  { value: '5_YEAR', label: '5Y' },
  { value: '1_YEAR', label: '1Y' },
  { value: '1_MONTH', label: '1M' },
  { value: '1_WEEK', label: '1W' },
  { value: '1_DAY', label: '1D' },
];

function BottomBorder() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.primary.main,
        borderRadius: '10px',
        height: '2px',
        mt: '2px',
        width: '60%',
      }}
    />
  );
}

function CustomChart(props: any) {
  const { chartData = dateList } = props;
  const { config } = useConfig(chartData);
  const { balance, percent, percentSign } = mockTotalBalanceData;
  const [currentDate, setCurrentDate] = useState<string>(dateList[0].value);

  const handleDateChange = (event: any) => {
    const { value } = event.target;
    setCurrentDate(value);
  };
  // TODO: ADD CONDITIONAL COLOR TO THE TOTAL BALANCE PERCENTAGE
  return (
    <Box>
      <Paper sx={{ py: 3 }}>
        <Box sx={{ px: '12px' }}>
          <Typography
            variant="h3"
            color="text.secondary"
            sx={{ fontSize: '1.5rem' }}
          >
            TOTAL BALANCE
          </Typography>
          <Typography
            sx={{ fontSize: '2rem', fontWeight: '600', mt: 1, lineHeight: 1 }}
          >
            {balance}{' '}
            <Typography
              component="span"
              sx={{ color: 'warning.main', fontSize: '1.4rem' }}
            >
              {percentSign + percent}
            </Typography>
          </Typography>
          <RadioGroup
            sx={{
              flexDirection: 'row',
              mt: 3,
              flexWrap: 'nowrap',
              width: '100%',
            }}
            onChange={handleDateChange}
          >
            {dateList.map(({ value, label }, i) => (
              <>
                {i !== 0 && <Divider orientation="vertical" flexItem />}
                <Stack sx={{ alignItems: 'center', width: '100%' }}>
                  <FormControlLabel
                    value={value}
                    control={<CustomChartRadio />}
                    label={label}
                    sx={{
                      mx: '0',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  />
                  {currentDate === value && <BottomBorder />}
                </Stack>
              </>
            ))}
          </RadioGroup>
        </Box>
        <Box sx={{ px: 3 }}>
          <Chart
            options={config.options}
            series={config.seriesData}
            type="area"
            width="100%"
            height={320}
          />
        </Box>
      </Paper>
    </Box>
  );
}

export default CustomChart;
