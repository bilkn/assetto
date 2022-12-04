let time = 0;
const createDate = () => {
  time += 1000000000;
  return new Date().getTime() + time;
};
export const chartDataMock = {
  '1H': {
    x: [
      createDate(),
      createDate(),
      createDate(),
      createDate(),
      createDate(),
      createDate(),
      createDate(),
    ],
    y: [
      {
        name: 'Nasdaq Price',
        data: [49, 97, 70, 30, 40, 130, 20],
      },
    ],
  },

  '1D': {
    x: [
      '13 March 2022, 10:05',
      '13 March 2022, 12:19',
      '13 March 2022, 14:30',
      '13 March 2022, 14:47',
      '13 March 2022, 15:00',
      '13 March 2022, 15:11',
      '13 March 2022, 16:22',
      '13 March 2022, 18:59',
      '13 March 2022, 21:09',
      '13 March 2022, 23:01',
    ],
    y: [
      {
        name: 'Nasdaq Price',
        data: [44, 33, 49, 60, 180, 15, 30, 120, 80],
      },
    ],
  },

  '1W': {
    x: [
      '11 March 2022, 10:05',
      '12 March 2022, 12:19',
      '13 March 2022, 14:30',
      '14 March 2022, 14:47',
      '15 March 2022, 15:00',
      '16 March 2022, 15:11',
      '17 March 2022, 16:22',
      '18 March 2022, 18:59',
      '19 March 2022, 21:09',
      '20 March 2022, 23:01',
    ],
    y: [
      {
        name: 'Nasdaq Price',
        data: [20, 15, 34, 50, 80, 44, 33, 80, 120, 200],
      },
    ],
  },

  '1M': {
    x: [
      '11 March 2022, 10:05',
      '12 March 2022, 12:19',
      '13 March 2022, 14:30',
      '14 March 2022, 14:47',
      '15 March 2022, 15:00',
      '16 March 2022, 15:11',
      '17 March 2022, 16:22',
      '18 March 2022, 18:59',
      '19 March 2022, 21:09',
      '20 March 2022, 23:01',
    ],
    y: [
      {
        name: 'Nasdaq Price',
        data: [80, 15, 34, 50, 1, 1, 1, 80, 120, 50],
      },
    ],
  },

  '1Y': {
    x: [
      'April 2020, 08:14',
      'May 2020, 00:05',
      'June 2020, 12:05',
      'July 2020, 12:19',
      'August 2020, 14:30',
      'September 2020, 14:47',
      'October 2020, 15:00',
      'November 2020, 15:11',
      'December 2020, 16:22',
      'January 2022, 18:59',
      'February 2022, 21:09',
      'March 2022, 23:01',
    ],
    y: [
      {
        name: 'Nasdaq Price',
        data: [10, 10, 90, 77, 19, 48, 34, 20, 44, 90, 100, 89],
      },
    ],
  },

  ALL: {
    x: [
      '11 March 2022, 10:05',
      '12 March 2022, 12:19',
      '13 March 2022, 14:30',
      '14 March 2022, 14:47',
      '15 March 2022, 15:00',
      '16 March 2022, 15:11',
      '17 March 2022, 16:22',
      '18 March 2022, 18:59',
      '19 March 2022, 21:09',
      '20 March 2022, 23:01',
    ],
    y: [
      {
        name: 'Nasdaq Price',
        data: [33, 70, 120, 150, 50, 22, 34, 30, 45, 44],
      },
    ],
  },
};

export default chartDataMock;
