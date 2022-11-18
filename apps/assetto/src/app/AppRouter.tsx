import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/Home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="1" element={<Home />} />
      <Route path="2" element={<Home />} />
    </Route>
  )
);

export default router;
