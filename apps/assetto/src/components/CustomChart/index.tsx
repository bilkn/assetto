import { Box, ButtonGroup, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import useConfig from './useChartConfig';

const mockTotalBalanceData = {
  balance: '34,000',
  percent: '4.3%',
  percentSign: '-',
};



function CustomChart(props: any) {
  const { chartData } = props;
  const [tab, setTab] = useState('1H');
  const { config, time } = useConfig(chartData, tab);
  const { balance, percent, percentSign } = mockTotalBalanceData;

  const dateList = ['YTD','5 Year','1 Year','1 Month','1 Week','1 Day']

  // TODO: ADD CONDITIONAL COLOR TO PERCENT
  return (
    <Box>
      <Paper>
        <Box sx={{ p: '12px' }}>
          <Typography variant="h3">TOTAL BALANCE</Typography>
          <Typography>
            {balance}{' '}
            <Typography
              component="span"
              sx={{ color: 'warning.main', fontSize: '1.2rem' }}
            >
              {percentSign + percent}
            </Typography>
          </Typography>
          <Stack>
            {dateList.map((date)=><Typography></Typography>)}
          </Stack>
        </Box>
        <Chart
          options={config.options}
          series={config.seriesData}
          type="area"
          width="100%"
          height={320}
        />
      </Paper>
    </Box>
  );
}

export default CustomChart;
