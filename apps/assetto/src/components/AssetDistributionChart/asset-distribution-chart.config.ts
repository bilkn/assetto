import { ApexOptions } from 'apexcharts';

const options: ApexOptions = {
  chart: {
    height: 500,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        size: '20px',
        labels: {},
      },
      offsetX: -25,
    },
  },
  states: {
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: 'none',
      },
    },
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    fontSize: '12rem',
    fontFamily: 'Roboto, sans-serif',
    horizontalAlign: 'center',
    markers: {
      offsetY: 6,
      offsetX: -5,
      radius: 8,
      height: 21,
      width: 21,
    },
    itemMargin: {
      horizontal: 0,
      vertical: 10,
    },
    onItemClick: {
      toggleDataSeries: false,
    },
    onItemHover: {
      highlightDataSeries: false,
    },
  },
};
export default {
  options,
};
