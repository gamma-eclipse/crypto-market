import { Container as MUIContainer, styled } from '@mui/material';
import React from 'react';
import { Footer } from 'widgets/footer';
import { Header } from 'widgets/header';

type LayoutProps = React.PropsWithChildren;

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled('main')`
  margin-top: 25px;
  display: flex;
  flex: 1 0 100%;
`;

const Container = styled(MUIContainer)`
  flex: 1 0 100%;
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Container maxWidth="xl">{children}</Container>
      </Main>
      <Footer />
    </Wrapper>
  );
};
