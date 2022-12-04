import { CustomThreeDotsIcon } from '@assetto/assetto-components';
import { Box, IconButton, IconButtonProps, useTheme } from '@mui/material';

function ThreeDotsMenuButton(props: IconButtonProps) {
  const theme = useTheme();

  return (
    <IconButton
      {...props}
      sx={{ position: 'absolute', top: '5px', right: '10px' }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '25px',
          justifyContent: 'center',
          width: '25px',
        }}
      >
        <CustomThreeDotsIcon color={theme.palette.grey[400]} />
      </Box>
    </IconButton>
  );
}

export default ThreeDotsMenuButton;
