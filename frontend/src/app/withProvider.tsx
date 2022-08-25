import { ThemeProvider } from '@mui/material';
import React from 'react';

import { theme } from '../shared/theme';

type WithProviderProps = React.PropsWithChildren;

export const WithProvider = ({ children }: WithProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
