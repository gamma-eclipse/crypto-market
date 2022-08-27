import { Routing } from 'pages/Routing';
import React from 'react';

import { WithProvider } from './WithProvider';
import './styles/reset.css';

export const App = () => {
  return (
    <WithProvider>
      <Routing />
    </WithProvider>
  );
};
