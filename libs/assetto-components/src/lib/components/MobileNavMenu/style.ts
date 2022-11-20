import styled from '@emotion/styled';
import { Link as ReactRouterLink } from 'react-router-dom';

export const MobileMenuContainer = styled('ul')(
  ({ theme }) => `
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`
);

export const MobileMenuItem = styled('li')(
  ({ theme }) => `
  border-bottom: 1px solid #eee;
  color: ${(props: any) => (props.active ? 'black' : 'red')};
  text-transform: capitalize;
  list-style: none;
  &:hover {
    color: #0000009e;
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
