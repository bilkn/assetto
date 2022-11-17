import { MobilePopoverNav } from '@assetto/assetto-components';
import React from 'react';

const mockList = [{
  path: '/',
  name: 'Preferences',
}, {
  path: '/',
  name: 'Password',
}, {
  path: '/',
  name: 'Account',
}];
function Home() {
  return (
    <MobilePopoverNav list={mockList} />
  );
}

export default Home;
