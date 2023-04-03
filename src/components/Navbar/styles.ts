import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem;
  background-color: ${({ theme }) => theme.colors.green};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  position: sticky;
  z-index: 1;
  top: 0;
`;

export const NavLogo = styled.img`
  width: 12rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    font-size: 1.7rem;
    transition: font-size 0.1s;
  }
`;
