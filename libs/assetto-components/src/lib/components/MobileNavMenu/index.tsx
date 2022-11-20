import { Box, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomChevronIcon, CustomTickIcon } from '../icons';
import { MobileMenuContainer, MobileMenuItem, MobileMenuLink } from './style';

interface iMobileNavMenuItem {
  name: string;
  path: string;
}

interface iMobileNavMenuProps {
  list: iMobileNavMenuItem[];
}

function MobileNavMenu({ list }: iMobileNavMenuProps) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  const isCurrentPath = (path: string) => pathname === path;

  return (
    <Box>
      <MobileMenuContainer>
        {list.map(
          ({ path, name }) =>
            (isCurrentPath(path) || isOpen) && (
              <MobileMenuItem onClick={handleItemClick}>
                <Typography sx={{ padding: '0' }}>
                  <MobileMenuLink to={path}>
                    {name}
                    {isOpen && isCurrentPath(path) && (
                      <CustomTickIcon color={theme.palette.primary.main} />
                    )}
                    {!isOpen && <CustomChevronIcon color="#CFCFCF" />}
                  </MobileMenuLink>
                </Typography>
              </MobileMenuItem>
            )
        )}
      </MobileMenuContainer>
    </Box>
  );
}

export default MobileNavMenu;
