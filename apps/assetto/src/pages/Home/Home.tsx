import { MobilePopoverNav } from '@assetto/assetto-components';
import React from 'react';

const mockList = [
  {
    path: '/',
    name: 'Preferences',
  },
  {
    path: '/1',
    name: 'Password',
  },
  {
    path: '/2',
    name: 'Account',
  },
];
function Home() {
  return <MobilePopoverNav list={mockList} />;
}

export default Home;
