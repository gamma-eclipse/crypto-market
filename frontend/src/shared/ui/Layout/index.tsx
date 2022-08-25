import { Container } from '@mui/material';
import React from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: 25 }}>
        <Container maxWidth="lg">{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
