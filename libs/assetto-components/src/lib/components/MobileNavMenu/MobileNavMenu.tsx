import { Box, Typography, useTheme } from '@mui/material';
import { IMobileNavMenuItem } from 'libs/assetto-components/src/types/component.types';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomChevronIcon, CustomTickIcon } from '../icons';
import { MobileMenuContainer, MobileMenuItem, MobileMenuLink } from './style';

interface iMobileNavMenuProps {
  list: IMobileNavMenuItem[];
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
              <MobileMenuItem
                active={isCurrentPath(path)}
                onClick={handleItemClick}
              >
                <Typography sx={{ padding: '0' }}>
                  <MobileMenuLink to={path}>
                    {name}
                    {isOpen && isCurrentPath(path) && (
                      <CustomTickIcon color={theme.palette.primary.main} />
                    )}
                    {!isOpen && (
                      <CustomChevronIcon color={theme.palette.primary.main} />
                    )}
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
