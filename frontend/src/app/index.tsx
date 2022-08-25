import { Routing } from 'pages';
import React from 'react';

import { WithProvider } from './withProvider';

const App = () => {
  return (
    <WithProvider>
      <Routing />
    </WithProvider>
  );
};

export default App;
