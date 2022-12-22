import { AddIcon } from '@assetto/assetto-components';
import { Fab, FabProps, useTheme } from '@mui/material';

function FloatingActionButton(props: FabProps) {
  const theme = useTheme();

  return (
    <Fab
      color="secondary"
      {...props}
      aria-label="add asset"
      sx={{ position: 'fixed', right: '20px', bottom: '60px' }}
    >
      <AddIcon color={theme.palette.common.white} />
    </Fab>
  );
}

export default FloatingActionButton;
