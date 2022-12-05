import { CustomButton } from '@assetto/assetto-components';
import { AppBar, Box, Container, Link, Toolbar } from '@mui/material';
import AssettoLogo from '../../assets/assetto-logo.svg';

function MobileAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'common.white', boxShadow: 1 }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '60px' }}>
          <Box>
            <Link href="/">
              <Box component="img" alt="Assetto" src={AssettoLogo} />
            </Link>
          </Box>
          <Box>
            <CustomButton
              sx={{ color: 'text.primary', mr: 1, fontWeight: '500' }}
            >
              TR
            </CustomButton>
            <CustomButton variant="contained">Sign In</CustomButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MobileAppBar;
