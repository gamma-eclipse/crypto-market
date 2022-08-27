import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

import { Cart } from './cart';
import { Home } from './home';

export const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.cart} element={<Cart />} />
  </Routes>
);
