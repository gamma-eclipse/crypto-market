import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'shared/theme';

type WithProviderProps = React.PropsWithChildren;

export const WithProvider = ({ children }: WithProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};
