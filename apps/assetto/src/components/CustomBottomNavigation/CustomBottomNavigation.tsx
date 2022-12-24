import {
  HomeIcon,
  SettingsIcon,
  WalletIcon,
} from '@assetto/assetto-components';
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Home',
    Icon: HomeIcon,
  },
  {
    label: 'Assets',
    Icon: WalletIcon,
  },
  {
    label: 'Settings',
    Icon: SettingsIcon,
  },
];

function CustomBottomNavigation() {
  const [value, setValue] = useState(0);
  const theme = useTheme();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        console.log(newValue);
        setValue(newValue);
      }}
      sx={{
        boxShadow: theme.shadows[1],
        position: 'fixed',
        bottom: '0',
        left: '0',
        width: '100%',
      }}
    >
      {menuItems.map(({ label, Icon }, i) => (
        <BottomNavigationAction
          sx={{ fontSize: '1.2rem', height: '60px' }}
          label={<Typography sx={{ fontSize: '1rem' }}>{label}</Typography>}
          icon={
            <Icon
              color={
                value === i
                  ? theme.palette.primary.main
                  : theme.palette.grey[400]
              }
            />
          }
        />
      ))}
    </BottomNavigation>
  );
}

export default CustomBottomNavigation;
