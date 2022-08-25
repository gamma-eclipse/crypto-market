import { Container, styled } from '@mui/material';
import React from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

type LayoutProps = React.PropsWithChildren;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <main style={{ marginTop: 25 }}>
        <Container maxWidth="lg">{children}</Container>
      </main>
      <Footer />
    </Wrapper>
  );
};
