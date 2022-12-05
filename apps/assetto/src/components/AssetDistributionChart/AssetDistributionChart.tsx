import { Paper, Typography, useTheme } from '@mui/material';
import Chart from 'react-apexcharts';
import ThreeDotsMenuButton from '../utils/ThreeDotsMenuButton';
import chartConfig from './asset-distribution-chart.config';
import './styles.css';

function AssetDistributionChart() {
  const theme = useTheme();
  const dynamicData = {
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    labels: ['Crypto', 'Stock'],
  };

  return (
    <Paper sx={{ p: '12px', position: 'relative' }}>
      <Typography
        variant="h3"
        color="text.secondary"
        sx={{ fontSize: '1.5rem', mb: 3 }}
      >
        ASSET DISTRIBUTION
      </Typography>
      <ThreeDotsMenuButton />
      <Chart
        series={[75, 25]}
        options={{ ...chartConfig.options, ...dynamicData }}
        type="donut"
      />
    </Paper>
  );
}

export default AssetDistributionChart;
