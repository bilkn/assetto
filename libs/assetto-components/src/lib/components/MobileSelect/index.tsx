import { SelectUnstyled } from '@mui/base';
import {
  Box,
  Divider,
  FormControl, MenuItem, Select, SelectProps, SpeedDialIcon, styled, useTheme,
} from '@mui/material';
import { useState } from 'react';
import { CustomChevronIcon } from '../icons';

const StyledSelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  '& .MuiSelect-select': {
    paddingTop: '11px',
    paddingBottom: '11px',
  },
}));

export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));

function MobileSelect({ children }:SelectProps) {
  const theme = useTheme();
  const [showChevron, setShowChevron] = useState(false);

  const handleChange = (e:any) => {
    console.log('HELLO', e);
  };

  const handleOpen = () => {
    setShowChevron(false);
  };

  const handleClose = () => {
    setShowChevron(true);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
        <StyledSelect onChange={handleChange} onOpen={handleOpen} onClose={handleClose} defaultValue={20} fullWidth endAdornment={showChevron ? <CustomChevronIcon color={theme.palette.primary.main} /> : null} MenuProps={{ MenuListProps: { sx: { color: theme.palette.text.secondary } }, sx: { '& > div + div + .MuiMenu-paper': { width: '100%' } } }} IconComponent={Box } >
          {children}
        </StyledSelect>
    </FormControl>
  /*     <ListItemIcon>
<CustomTickIcon />
</ListItemIcon> */

  );
} { /*    {Children.toArray(children).map((child) => React.cloneElement(child, {}))} */ }

export default MobileSelect;
