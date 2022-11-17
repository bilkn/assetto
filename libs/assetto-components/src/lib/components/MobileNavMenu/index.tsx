import {
  Box,
  SelectProps, Typography, useTheme,
} from '@mui/material';
import { useState } from 'react';
import { CustomChevronIcon, CustomTickIcon } from '../icons';
import { MobileMenuContainer, MobileMenuItem, MobileMenuLink } from './style';

interface iMobileNavMenuItem {
  name: string;
  path: string;
}

interface iMobileNavMenuProps extends SelectProps {
  list: iMobileNavMenuItem[]
}

function MobileNavMenu({ list }:iMobileNavMenuProps) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(() => list[0].name);

  const handleChange = (e:any) => {
    setCurrentValue(e.target.value);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
    <MobileMenuContainer>
    {list.map(({ name, path }) => <MobileMenuItem>
        <Typography sx={{ padding: '0' }}>
        <MobileMenuLink to={path}>{name}</MobileMenuLink>
        </Typography> </MobileMenuItem>) }
    </MobileMenuContainer>
    </Box>
  );
}

export default MobileNavMenu;
