import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared/routes';

import { Cart } from './cart';
import { Home } from './home';

export const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={routes.cart} element={<Cart />} />
  </Routes>
);
