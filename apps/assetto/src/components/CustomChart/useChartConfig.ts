import { useTheme } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';

function useChartConfig(chartData: any, tab: any) {
  const [balance, setBalance] = useState(200);
  const [time, setTime] = useState('Total Asset Balance');
  const [xValues, setxValues] = useState(chartData['1H'].x);
  const [yValues, setyValues] = useState(chartData['1H'].y);
  const theme = useTheme();

  useEffect(() => {
    const validDates = ['1D', '1W', '1M', '1Y', 'YTD'];

    if (!validDates.includes(tab)) return;
    setxValues(chartData[tab].x);
    setyValues(chartData[tab].y);
  }, [tab]);

  const config = useMemo(
    () => ({
      seriesData: yValues,
      options: {
        tooltip: {
          enabled: true,
        },
        colors: [theme.palette.secondary.light, theme.palette.secondary.main],
        fill: {
          type: 'gradient',
          gradient: {
            gradientToColors: ['#00C3F9'],
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 90, 100],
          },
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        chart: {
          id: 'chart1',
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          tooltip: {
            enabled: false,
          },
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { color: theme.palette.primary.main },
          categories: xValues,
        },
        yaxis: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
      },
    }),
    [yValues, xValues, theme.palette]
  );

  return { config, balance, time };
}

export default useChartConfig;
