import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './home';

export const Routing = () => (
  <Routes>
    <Route index element={<Home />} />
  </Routes>
);
