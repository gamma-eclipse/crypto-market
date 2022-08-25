import { styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'shared/routes';

const Wrapper = styled('header')`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled('nav')`
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.cart}>Cart</Link>
      </Nav>
    </Wrapper>
  );
};
