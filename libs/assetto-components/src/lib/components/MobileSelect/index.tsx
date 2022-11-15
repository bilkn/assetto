import { SelectUnstyled } from '@mui/base';
import {
  Box,
  FormControl, MenuItem, Select, SpeedDialIcon, styled,
} from '@mui/material';

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  '& .MuiSelect-select': {
    paddingTop: '11px',
    paddingBottom: '11px',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({

}));

function MobileSelect() {
  return (
    <FormControl sx={{ width: '100%' }}>
        <StyledSelect fullWidth endAdornment={<SpeedDialIcon />} IconComponent={Box} >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Ten</MenuItem>
            <MenuItem value={30}>Ten</MenuItem>
            <MenuItem value={40}>Ten</MenuItem>
            <MenuItem value={50}>Ten</MenuItem>
            <MenuItem value={60}>Ten</MenuItem>
        </StyledSelect>
    </FormControl>
  );
}

export default MobileSelect;
