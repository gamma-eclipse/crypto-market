import { Container } from '@mui/material';
import React from 'react';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return <Container maxWidth="lg">{children}</Container>;
};
