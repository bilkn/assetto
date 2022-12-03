import { Box, Container } from '@mui/material';
import { MobileAppBar } from '../../components';

function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <Box>
      <MobileAppBar />
      <Container>{children}</Container>
    </Box>
  );
}

export default MainLayout;
