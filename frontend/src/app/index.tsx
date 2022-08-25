import { Routing } from 'pages';
import React from 'react';

import { WithProvider } from './WithProvider';
import './styles/reset.css';

const App = () => {
  return (
    <WithProvider>
      <Routing />
    </WithProvider>
  );
};

export default App;
