import { AppBar, Container, styled } from '@mui/material';
import { ReactComponent as LogoLight } from 'assets/logo-light.svg';
import { Link } from 'react-router-dom';
import { COLORS } from 'shared/colors';
import { ROUTES } from 'shared/routes';

import { Navigation } from './Navigation';

const Wrapper = styled(AppBar)`
  background-color: ${COLORS[500]};
`;

const Content = styled('div')`
  display: flex;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container maxWidth="xl">
        <Content>
          <Link to={ROUTES.home}>
            <LogoLight width="50" height="50" />
          </Link>
          <Navigation />
        </Content>
      </Container>
    </Wrapper>
  );
};
