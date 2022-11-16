import { CustomTickIcon, MobileSelect } from '@assetto/assetto-components';
import { ListItemIcon, ListItemText, ThemeProvider } from '@mui/material';
import { CustomMenuItem } from 'libs/assetto-components/src/lib/components/MobileSelect';
import theme from 'libs/custom-theme/src/lib/custom-theme';
import { useEffect } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

function App() {
  useEffect(() => {
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MobileSelect defaultValue={1} >
          <CustomMenuItem value={1}>Test</CustomMenuItem>
          <CustomMenuItem value={2}>
          <ListItemText primary="Inbox" /> 
          
          </CustomMenuItem>
         
          <CustomMenuItem value={3}>   helo </CustomMenuItem>
          
        </MobileSelect>            

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
