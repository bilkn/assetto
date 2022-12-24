import { useTheme } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

function CustomRouterLink({ children, ...rest }: LinkProps) {
  const theme = useTheme();
  return (
    <Link
      style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default CustomRouterLink;
