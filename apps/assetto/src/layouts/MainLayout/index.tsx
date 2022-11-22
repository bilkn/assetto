import { Box } from '@mui/material';
import { MobileAppBar } from '../../components';

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <Box>
      <MobileAppBar />
      {children}
    </Box>
  );
}

export default MainLayout;
