import {
  Box, Checkbox, styled,
} from '@mui/material';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface iCustomCheckbox {
  disabled?: boolean;
  warn?: boolean;
}

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  border: 'none',
  '& .MuiBox-root': {
    borderRadius: '3px',
  },

  '&.MuiCheckbox-colorWarning .MuiBox-root': {
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.warning.main}`,
  },

  '&.Mui-disabled .MuiBox-root': {
    backgroundColor: theme.palette.grey[200],
  },
}));

const StyledIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height: '15px',
  width: '15px',
}));

const StyledCheckedIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '15px',
  width: '15px',
}));

function CustomCheckbox({ warn, disabled }:iCustomCheckbox) {
  return (
    <StyledCheckbox color={warn ? 'warning' : undefined} disabled={disabled}
    icon={<StyledIcon />} checkedIcon={<StyledCheckedIcon />} />
  );
}

export default CustomCheckbox;
