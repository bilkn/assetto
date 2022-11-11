import MuiGlobalStyles from '@mui/material/GlobalStyles';

function GlobalStyles() {
  return (
    <MuiGlobalStyles styles={{ ':root': { fontSize: '10px' } }} />
  );
}

export default GlobalStyles;
