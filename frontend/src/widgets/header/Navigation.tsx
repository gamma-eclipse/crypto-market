import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS } from 'shared/config/colors';
import { ROUTES } from 'shared/config/routes';

const Nav = styled('nav')`
  display: grid;
  grid-gap: 15px;
  grid-auto-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${COLORS[50]};
`;

const NavLink = styled(Link)`
  margin-left: 50px;

  font-family: 'Silkscreen', cursive;
  color: ${COLORS[50]};
  text-decoration: none;
  text-transform: uppercase;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    background-color: ${COLORS[50]};
    transition: all 0.3s ease;
  }
  @media (min-width: 991px) {
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <NavLink to={ROUTES.cart}>Cart</NavLink>
    </Nav>
  );
};
