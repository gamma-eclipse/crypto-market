import { createTheme } from '@mui/material';

import { COLORS } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS[500],
    },
  },
  typography: {
    fontFamily: '"Silkscreen", cursive',
    allVariants: {
      color: COLORS[900],
    },
  },
});
