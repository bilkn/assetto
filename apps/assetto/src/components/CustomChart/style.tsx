import { Radio, styled } from '@mui/material';

const CustomChartRadio = styled(Radio)(({ theme }) => ({
  fontSize: '1rem',
  visibility: 'hidden',
  padding: '0',
  width: '0',
  '&.Mui-checked + span': {
    color: theme.palette.primary.main,
  },
  '& + span': {
    fontSize: '1.3rem',
  },
}));

export { CustomChartRadio };
