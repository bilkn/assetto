import { Box } from '@mui/material';

function FullscreenLayout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 120px)',
      }}
    >
      <Box>{children}</Box>
    </Box>
  );
}

export default FullscreenLayout;
