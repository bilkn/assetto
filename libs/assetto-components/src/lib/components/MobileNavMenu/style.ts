import { styled } from '@mui/material/styles';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface iMobileMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  active: boolean;
}

export const MobileMenuContainer = styled('ul')(
  ({ theme }) => `
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: ${theme.shape.borderRadius}px;
  display: flex;
  flex-direction: column; 
  padding-left: 0;
`
);

export const MobileMenuItem: React.FC<iMobileMenuItemProps> = styled('li', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>(
  ({ theme, active }) => `
  border-bottom: 1px solid ${theme.palette.grey['200']};
  color: ${active ? theme.palette.primary.main : theme.palette.text.secondary};
  text-transform: capitalize;
  list-style: none;
  &:hover {
    color: ${active ? theme.palette.primary.main : 'inherit'};
  }
`
);

export const MobileLink = styled(ReactRouterLink)(
  ({ theme }) => `
  color: 'yellow';
  font-size: 2rem;
`
);

export const MobileMenuLink = styled(ReactRouterLink)`
  align-items: center;
  color: inherit;
  display: flex;
  height: 100%;
  justify-content: space-between;
  text-decoration: none;
  padding: 0.875em 1.3em;
  width: 100%;
`;
