import { Box, Stack, Typography } from '@mui/material';
import {
  CustomButton,
  CustomRouterLink,
  CustomTextField,
} from '@assetto/assetto-components';
import AssettoLogo from '../../assets/assetto-logo.svg';
import { FullscreenLayout } from '../../layouts';
import googleLogo from '../../assets/google-logo.png';

function SignUpPage() {
  return (
    <FullscreenLayout>
      <Box
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Box
          component="img"
          alt="Assetto"
          src={AssettoLogo}
          sx={{
            width: '30%',
          }}
        />
        <Typography
          color="text.primary"
          variant="h1"
          sx={{ fontSize: '2.4rem', mt: 3, fontWeight: '400' }}
        >
          Sign up to Assetto
        </Typography>
      </Box>
      <Box>
        <Stack spacing={2} sx={{ mt: 4 }}>
          <CustomTextField label="Email" name="email" />
          <CustomTextField label="Password" name="password" />
          <CustomTextField label="Password again" name="password_again" />
        </Stack>
        <Box sx={{ mt: 4 }}>
          <CustomButton variant="contained" fullWidth>
            Register
          </CustomButton>
          <CustomButton
            color="external"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            startIcon={
              <Box component="img" src={googleLogo} sx={{ width: '16px' }} />
            }
          >
            Sign in with Google{' '}
          </CustomButton>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ fontSize: '1.4rem', mt: 2 }}
          >
            Already have an account?{' '}
            <CustomRouterLink to="/sign-in">Sign In</CustomRouterLink>
          </Typography>
        </Box>
      </Box>
    </FullscreenLayout>
  );
}

export default SignUpPage;
