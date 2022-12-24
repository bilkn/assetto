import { Box, Container } from '@mui/material';
import { CustomBottomNavigation, MobileAppBar } from '../../components';

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <Box sx={{ height: '100%' }}>
      <MobileAppBar />
      <Container sx={{ minHeight: 'calc(100% - 60px)' }}>{children}</Container>
      <CustomBottomNavigation />
    </Box>
  );
}

export default MainLayout;
