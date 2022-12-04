import { useTheme } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { ApexOptions } from 'apexcharts';

function useChartConfig(chartData: any) {
  const [tab, setTab] = useState<string>('1H');
  const [xValues, setxValues] = useState(chartData['1H'].x);
  const [yValues, setyValues] = useState(chartData['1H'].y);
  const theme = useTheme();

  useEffect(() => {
    setxValues(chartData[tab].x);
    setyValues(chartData[tab].y);
  }, [tab]);
  // TODO: CHANGE MIDDLE LABEL FONT WEIGHT TO 400
  // TODO: FINISH CHART FUNCTIONALITY
  const config = useMemo(() => {
    const options: ApexOptions = {
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
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        type: 'datetime',
        tooltip: { enabled: false },
        offsetY: -1,
        labels: {
          style: {
            colors: theme.palette.text.secondary,
            fontFamily: 'Roboto, sans-serif',
          },
        },
      },
      labels: xValues,
      yaxis: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      annotations: {
        yaxis: [
          {
            y: 0,
            strokeDashArray: 0,
            borderColor: theme.palette.grey[200],
            fillColor: theme.palette.grey[200],
            opacity: 1,
            offsetX: 0,
            offsetY: 0,
          },
        ],
      },
    };
    return { seriesData: yValues, options };
  }, [yValues, xValues, theme.palette]);

  return { config };
}

export default useChartConfig;
