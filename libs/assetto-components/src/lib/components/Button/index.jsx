import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: '1.4rem',
  '&.MuiButton-containedPrimary:hover': {
    backgroundColor: theme.palette.primary.light,
  },
  '&.MuiButton-containedPrimary:active': {
    backgroundColor: theme.palette.primary.lighter,
  },
  '&.MuiButton-containedSecondary': {
    color: theme.palette.common.white,
  },
  '&.MuiButton-outlinedSecondary:hover': {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  '&.MuiButton-outlinedSecondary:active': {
    backgroundColor: theme.palette.secondary.darker,
  },
}));
export default CustomButton;
