import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from 'shared/config/routes';

import { Error404 } from './Error404';
import { Cart } from './cart';
import { Home } from './home';
import { Product } from './product';

export const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path={ROUTES.cart} element={<Cart />} />
    <Route path={`${ROUTES.product}/:id`} element={<Product />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);
